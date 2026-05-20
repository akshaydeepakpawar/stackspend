"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { auditSchema, AuditSchemaType } from "@/lib/schema";

export default function SpendForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<AuditSchemaType>({
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
    localStorage.setItem(
      "audit-form",
      JSON.stringify(watchedValues)
    );
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

  const onSubmit = (data: AuditSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl"
    >
      <div>
        <label>Tool</label>
        <select
          {...register("tool")}
          className="w-full border p-2 rounded"
        >
          <option>ChatGPT</option>
          <option>Claude</option>
          <option>Cursor</option>
          <option>GitHub Copilot</option>
          <option>Gemini</option>
        </select>
      </div>

      <div>
        <label>Plan</label>
        <input
          {...register("plan")}
          className="w-full border p-2 rounded"
        />
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
        <select
          {...register("useCase")}
          className="w-full border p-2 rounded"
        >
          <option value="coding">Coding</option>
          <option value="writing">Writing</option>
          <option value="research">Research</option>
          <option value="data">Data</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded"
      >
        Generate Audit
      </button>
    </form>
  );
}