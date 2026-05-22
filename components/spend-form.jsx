"use client";

import { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { auditSchema } from "@/lib/schema";
import { generateAudit } from "@/lib/audit-engine";
import { toast } from "sonner";

export default function SpendForm() {
  const [auditResult, setAuditResult] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tools",
  });

  const watchedValues = watch();

  useEffect(() => {
    localStorage.setItem("audit-form", JSON.stringify(watchedValues));
  }, [watchedValues]);

  useEffect(() => {
    const saved = localStorage.getItem("audit-form");

    if (saved) {
      const parsed = JSON.parse(saved);

      Object.entries(parsed).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const result = generateAudit(data);

    setAuditResult(result);

    console.log("Submitting:", {
      ...data,
      recommendation: result.recommendation,
      savings: result.savings,
    });

    const response = await fetch("/api/audits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        report: result,
        totalMonthlySavings: result.totalMonthlySavings,
        totalAnnualSavings: result.totalAnnualSavings,
      }),
    });

    if (response.ok) {
      toast.success("Audit saved successfully");
    } else {
      toast.error("Failed to save audit");
    }
    setLoading(false);
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
              monthlySpend: 0,
              seats: 1,
            })
          }
          className="rounded bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-900"
        >
          Add tool
        </button>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
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
                <input
                  {...register(`tools.${index}.plan`)}
                  className="w-full rounded border border-gray-300 bg-white p-2 text-sm"
                />
              </label>

              <label className="space-y-1 text-sm text-gray-700">
                <span>Monthly Spend</span>
                <input
                  type="number"
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
        ))}
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
          <div className="rounded-xl bg-black p-6 text-white">
            <h2 className="text-3xl font-bold">Potential Savings</h2>

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-300">Monthly Savings</p>

                <p className="text-4xl font-bold">
                  ${auditResult.totalMonthlySavings}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-300">Annual Savings</p>

                <p className="text-4xl font-bold">
                  ${auditResult.totalAnnualSavings}
                </p>
              </div>
            </div>
          </div>

          {auditResult.isOptimized && (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="font-medium text-green-700">
                Your AI stack already looks well optimized.
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
    </form>
  );
}
