"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auditSchema } from "@/lib/schema";
import { generateAudit } from "@/lib/audit-engine";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PLAN_OPTIONS, PRICING } from "@/lib/pricing-data";

export default function SpendForm() {
  const [auditResult, setAuditResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const router = useRouter();
  const [reportId, setReportId] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const { register, handleSubmit, watch, setValue, control } = useForm({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      tools: [
        {
          tool: "ChatGPT",
          plan: "Plus",
          monthlySpend: 20,
          seats: 1,
        },
      ],
      teamSize: 1,
      useCase: "coding",
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "tools",
  });

  const watchedTools = useWatch({
    control,
    name: "tools",
  });

  const watchedTeamSize = useWatch({
    control,
    name: "teamSize",
  });

  const watchedUseCase = useWatch({
    control,
    name: "useCase",
  });

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "audit-form",
      JSON.stringify({
        tools: watchedTools,
        teamSize: watchedTeamSize,
        useCase: watchedUseCase,
      }),
    );
  }, [isLoaded, watchedTools, watchedTeamSize, watchedUseCase]);

  useEffect(() => {
    const tools = watchedTools || [];

    tools.forEach((tool, index) => {
      const price = PRICING[tool.tool]?.[tool.plan];

      if (price !== undefined && tool.monthlySpend !== price) {
        setValue(`tools.${index}.monthlySpend`, price, {
          shouldDirty: true,
        });
      }
    });
  }, [watchedTools, setValue]);

  useEffect(() => {
    const saved = localStorage.getItem("audit-form");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        replace(parsed.tools || []);

        setValue("teamSize", parsed.teamSize || 1);

        setValue("useCase", parsed.useCase || "coding");
      } catch {
        localStorage.removeItem("audit-form");
      }
    }

    setIsLoaded(true);
  }, [replace, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const result = generateAudit(data);

      const summaryResponse = await fetch("/api/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teamSize: data.teamSize,
          useCase: data.useCase,

          totalMonthlySavings: result.totalMonthlySavings,

          totalAnnualSavings: result.totalAnnualSavings,

          recommendations: result.recommendations,
        }),
      });

      if (!summaryResponse.ok) {
        throw new Error("Failed to generate summary");
      }

      const summaryData = await summaryResponse.json();

      setSummary(summaryData.summary);
      setAuditResult(result);

      const response = await fetch("/api/audits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          report: result,
          summary: summaryData.summary,
          totalMonthlySavings: result.totalMonthlySavings,
          totalAnnualSavings: result.totalAnnualSavings,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save audit");
      }

      const createdAudit = await response.json();

      setReportId(createdAudit.publicId);

      toast.success("Audit saved successfully");
    } catch (error) {
      console.error(error);

      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleLeadSubmit = async () => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          company,
          role,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      toast.success("Details saved");

      setEmail("");
      setCompany("");
      setRole("");
      return true;
    } catch (error) {
      console.error(error);
      toast.error("Failed to save details");
      return false;
    }
  };
  const handleSendEmail = async () => {
    try {
      const response = await fetch("/api/send-report", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,

          summary,

          monthlySavings: auditResult.totalMonthlySavings,

          annualSavings: auditResult.totalAnnualSavings,

          reportLink: `${window.location.origin}/reports/${reportId}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      toast.success("Report emailed successfully");
    } catch (error) {
      console.error(error);

      toast.error("Failed to send report");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">AI Tool Stack</h2>
          <p className="text-sm text-gray-600">
            Add one or more AI tools and review your monthly spend.
          </p>
        </div>
        <button
          type="button"
          onClick={() =>
            append({
              tool: "ChatGPT",
              plan: "Plus",
              monthlySpend: 20,
              seats: 1,
            })
          }
          className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
        >
          Add tool
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => {
          const selectedTool = watch(`tools.${index}.tool`);
          return (
            <div
              key={field.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-gray-900">
                  Tool {index + 1}
                </p>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="rounded bg-red-50 px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-100"
                >
                  Remove
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-4 mt-4">
                <label className="space-y-1 text-sm text-gray-700">
                  <span>Tool</span>
                  <select
                    {...register(`tools.${index}.tool`)}
                    className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
                  >
                    <option>ChatGPT</option>
                    <option>Claude</option>
                    <option>Cursor</option>
                    <option>GitHub Copilot</option>
                    <option>Gemini</option>
                  </select>
                </label>

                <label className="space-y-1 text-sm text-gray-700">
                  <span>Plan</span>
                  <select
                    {...register(`tools.${index}.plan`)}
                    className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
                  >
                    {PLAN_OPTIONS[selectedTool]?.map((plan) => (
                      <option key={plan} value={plan}>
                        {plan}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-1 text-sm text-gray-700">
                  <span>Monthly Spend</span>
                  <input
                    type="number"
                    readOnly
                    {...register(`tools.${index}.monthlySpend`, {
                      valueAsNumber: true,
                    })}
                    className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
                  />
                </label>

                <label className="space-y-1 text-sm text-gray-700">
                  <span>Seats</span>
                  <input
                    type="number"
                    {...register(`tools.${index}.seats`, {
                      valueAsNumber: true,
                    })}
                    className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm text-gray-700">
          <span>Team Size</span>
          <input
            type="number"
            {...register("teamSize", { valueAsNumber: true })}
            className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
          />
        </label>

        <label className="space-y-1 text-sm text-gray-700">
          <span>Use Case</span>
          <select
            {...register("useCase")}
            className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
          >
            <option value="coding">Coding</option>
            <option value="writing">Writing</option>
            <option value="research">Research</option>
            <option value="data">Data</option>
            <option value="mixed">Mixed</option>
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900"
        >
          {loading ? "Generating..." : "Generate Audit"}
        </button>
        <p className="text-sm text-gray-500">
          {fields.length} tool{fields.length === 1 ? "" : "s"} configured
        </p>
      </div>

      {auditResult && (
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Current Monthly Spend</p>

              <p className="mt-2 text-3xl font-bold">
                ${auditResult.currentMonthlySpend}
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Monthly Savings</p>

              <p className="mt-2 text-3xl font-bold text-green-600">
                ${auditResult.totalMonthlySavings}
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Annual Savings</p>

              <p className="mt-2 text-3xl font-bold text-green-600">
                ${auditResult.totalAnnualSavings}
              </p>
            </div>
          </div>
          //CTA block
          {auditResult.totalMonthlySavings > 500 && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-green-900">
                    You're Leaving ${auditResult.totalMonthlySavings}/Month on
                    the Table
                  </h3>

                  <p className="mt-2 text-green-800">
                    Based on your current AI stack, there are significant
                    cost-saving opportunities. Credex helps startups acquire
                    discounted AI credits and optimize AI infrastructure spend.
                  </p>
                </div>

                <a
                  href="https://credex.rocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-black px-5 py-3 text-center font-medium text-white"
                >
                  Book Credex Consultation
                </a>
              </div>
            </div>
          )}
          {auditResult.totalMonthlySavings < 100 && (
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="font-bold text-blue-900">
                Your AI Spend Looks Healthy
              </h3>

              <p className="mt-2 text-blue-800">
                We didn't identify any major opportunities to reduce costs right
                now. Leave your email and we'll notify you if new optimization
                opportunities become available for your stack.
              </p>
            </div>
          )}
          {auditResult.isOptimized && (
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="font-bold text-green-700">
                You're spending efficiently
              </h3>

              <p className="mt-2 text-green-700">
                We didn't find any meaningful savings opportunities in your
                current AI stack. We'll notify you when new optimization
                opportunities become available.
              </p>
            </div>
          )}
          <div className="space-y-4">
            {auditResult.recommendations.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border bg-white p-5 shadow-sm"
              >
                <h3 className="font-bold text-lg">{item.tool}</h3>

                <p className="mt-2">
                  {item.currentPlan}
                  {" → "}
                  {item.recommendedPlan}
                </p>

                <p className="mt-2 font-semibold text-green-600">
                  Save ${item.savings}/month
                </p>

                <p className="mt-2 text-sm text-gray-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {summary && (
        <div className="rounded-lg border bg-white p-5 shadow-sm">
          <h3 className="font-bold mb-2">AI Summary</h3>

          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}
      {auditResult && (
        <div className="rounded-xl border p-6 mt-8">
          <h3 className="text-xl font-bold mb-2">Stay Updated</h3>

          <p className="text-gray-600 mb-6">
            Save your audit report and receive future optimization
            recommendations.
          </p>

          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company (optional)"
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role (optional)"
              className="w-full border rounded-lg p-3"
            />

            <button
              type="button"
              onClick={async () => {
                const success = await handleLeadSubmit();

                if (success) {
                  await handleSendEmail();
                }
              }}
              className="rounded-lg bg-black text-white px-5 py-3"
            >
              Email Report
            </button>
          </div>
        </div>
      )}
      {reportId && (
        <div className="flex gap-4 flex-wrap">
          <button
            type="button"
            onClick={() => router.push(`/reports/${reportId}`)}
            className="rounded bg-black px-4 py-2 text-white"
          >
            View Full Report
          </button>

          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(
                `${window.location.origin}/reports/${reportId}`,
              );

              toast.success("Link copied");
            }}
            className="rounded border px-4 py-2"
          >
            Copy Share Link
          </button>

          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("audit-form");
              window.location.reload();
            }}
            className="rounded border border-red-200 px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Start New Audit
          </button>
        </div>
      )}
    </form>
  );
}
