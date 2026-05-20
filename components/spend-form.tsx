"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateAudit } from "@/lib/audit-engine";

import { auditSchema, AuditSchemaType } from "@/lib/schema";

import { useState } from "react";

export default function SpendForm() {
  const { register, handleSubmit, watch, setValue } = useForm<AuditSchemaType>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      tool: "ChatGPT",
      plan: "Plus",
      monthlySpend: 20,
      seats: 1,
      teamSize: 1,
      useCase: "coding",
    },
  });

  // Persist form to localStorage
  const watchedValues = watch();

  useEffect(() => {
    localStorage.setItem("audit-form", JSON.stringify(watchedValues));
  }, [watchedValues]);

  // Load saved form
  useEffect(() => {
    const saved = localStorage.getItem("audit-form");

    if (saved) {
      const parsed = JSON.parse(saved);

      Object.entries(parsed).forEach(([key, value]) => {
        setValue(key as keyof AuditSchemaType, value as never);
      });
    }
  }, [setValue]);

  const [auditResult, setAuditResult] = useState<{
    recommendation: string;
    savings: number;
    reason: string;
  } | null>(null);

  const onSubmit = async (data: AuditSchemaType) => {
    const result = generateAudit(data);
    setAuditResult(result);
    await fetch("/api/audits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        recommendation: result.recommendation,
        savings: result.savings,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
      <div>
        <label>Tool</label>
        <select {...register("tool")} className="w-full border p-2 rounded">
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
          <option>GitHub Copilot</option>
          <option>Gemini</option>
        </select>
      </div>

      <div>
        <label>Plan</label>
        <input {...register("plan")} className="w-full border p-2 rounded" />
      </div>

      <div>
        <label>Monthly Spend</label>
        <input
          type="number"
          {...register("monthlySpend")}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Seats</label>
        <input
          type="number"
          {...register("seats")}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Team Size</label>
        <input
          type="number"
          {...register("teamSize")}
          className="w-full border p-2 rounded"
        />
      </div>

      <div>
        <label>Use Case</label>
        <select {...register("useCase")} className="w-full border p-2 rounded">
          <option value="coding">Coding</option>
          <option value="writing">Writing</option>
          <option value="research">Research</option>
          <option value="data">Data</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Generate Audit
      </button>
      {auditResult && (
        <div className="border rounded p-4 mt-6">
          <h2 className="text-2xl font-bold mb-2">Audit Result</h2>

          <p>
            <strong>Recommendation:</strong> {auditResult.recommendation}
          </p>

          <p>
            <strong>Monthly Savings:</strong> ${auditResult.savings}
          </p>

          <p>
            <strong>Reason:</strong> {auditResult.reason}
          </p>
        </div>
      )}
    </form>
  );
}
