import { PRICING } from "./pricing-data";
import { RECOMMENDATION_RULES } from "./recommendation-rules";

export function generateAudit(data) {
  let totalMonthlySavings = 0;

  const recommendations = [];
  let currentMonthlySpend = 0;

  data.tools.forEach((tool) => {
    currentMonthlySpend += tool.monthlySpend * tool.seats;
    const toolRules = RECOMMENDATION_RULES[tool.tool];

    const currentRule = toolRules?.[tool.plan];

    if (currentRule && tool.seats <= currentRule.maxSeats) {
      const currentPrice = PRICING[tool.tool]?.[tool.plan] || 0;

      const recommendedPrice = PRICING[tool.tool]?.[currentRule.recommend] || 0;

      const savings = (currentPrice - recommendedPrice) * tool.seats;

      if (savings <= 0) {
        recommendations.push({
          tool: tool.tool,
          currentPlan: tool.plan,
          recommendedPlan: tool.plan,
          savings: 0,
          reason: "Current configuration appears cost-efficient.",
        });

        return;
      }

      recommendations.push({
        tool: tool.tool,
        currentPlan: tool.plan,
        recommendedPlan: currentRule.recommend,
        savings,
        reason: currentRule.reason,
      });

      totalMonthlySavings += savings;
    } else {
      recommendations.push({
        tool: tool.tool,

        currentPlan: tool.plan,

        recommendedPlan: tool.plan,

        savings: 0,

        reason: "Current configuration appears cost-efficient.",
      });
    }
  });

  const isOptimized = recommendations.every((item) => item.savings === 0);

  return {
    recommendations,

    currentMonthlySpend,

    totalMonthlySavings,

    totalAnnualSavings: totalMonthlySavings * 12,

    isOptimized,
  };
}
