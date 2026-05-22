export function generateAudit(data) {
  let totalMonthlySavings = 0;

  const recommendations = [];

  data.tools.forEach((tool) => {
    if (
      tool.tool === "ChatGPT" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      recommendations.push({
        tool: "ChatGPT",
        currentPlan: "Team",
        recommendedPlan: "Plus",
        savings: 20,
        reason:
          "Small teams usually don't benefit from Team collaboration features.",
      });

      totalMonthlySavings += 20;
    }

    else if (
      tool.tool === "Cursor" &&
      tool.plan === "Business" &&
      data.teamSize <= 3
    ) {
      recommendations.push({
        tool: "Cursor",
        currentPlan: "Business",
        recommendedPlan: "Pro",
        savings: 20,
        reason:
          "Business features are often unnecessary for very small teams.",
      });

      totalMonthlySavings += 20;
    }

    else {
      recommendations.push({
        tool: tool.tool,
        currentPlan: tool.plan,
        recommendedPlan: tool.plan,
        savings: 0,
        reason:
          "Current configuration appears cost-efficient.",
      });
    }
  });

  return {
    recommendations,
    totalMonthlySavings,
    totalAnnualSavings: totalMonthlySavings * 12,
    isOptimized: totalMonthlySavings < 100,
  };
}