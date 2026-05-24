import { describe, it, expect } from "vitest";

import { generateAudit } from "../lib/audit-engine";

describe("generateAudit", () => {
  it("recommends ChatGPT Plus for small Business teams", () => {
    const result = generateAudit({
      tools: [
        {
          tool: "ChatGPT",
          plan: "Business",
          monthlySpend: 25,
          seats: 2,
        },
      ],
    });

    expect(result.recommendations[0].recommendedPlan).toBe("Plus");

    expect(result.totalMonthlySavings).toBe(10);

    expect(result.totalAnnualSavings).toBe(120);
  });

  it("recommends ChatGPT Plus instead of Pro for solo users", () => {
    const result = generateAudit({
      tools: [
        {
          tool: "ChatGPT",
          plan: "Pro",
          monthlySpend: 200,
          seats: 1,
        },
      ],
    });

    expect(result.recommendations[0].recommendedPlan).toBe("Plus");

    expect(result.totalMonthlySavings).toBe(180);

    expect(result.totalAnnualSavings).toBe(2160);
  });

  it("returns optimized for already cost-efficient stacks", () => {
    const result = generateAudit({
      tools: [
        {
          tool: "ChatGPT",
          plan: "Plus",
          monthlySpend: 20,
          seats: 1,
        },
      ],
    });

    expect(result.isOptimized).toBe(true);

    expect(result.totalMonthlySavings).toBe(0);
  });

  it("calculates current monthly spend correctly", () => {
    const result = generateAudit({
      tools: [
        {
          tool: "ChatGPT",
          plan: "Business",
          monthlySpend: 25,
          seats: 2,
        },

        {
          tool: "Cursor",
          plan: "Teams",
          monthlySpend: 40,
          seats: 3,
        },
      ],
    });

    expect(result.currentMonthlySpend).toBe(170);
  });

  it("calculates annual savings correctly", () => {
    const result = generateAudit({
      tools: [
        {
          tool: "Cursor",
          plan: "Ultra",
          monthlySpend: 200,
          seats: 1,
        },
      ],
    });

    expect(result.totalAnnualSavings).toBe(result.totalMonthlySavings * 12);
  });
});
