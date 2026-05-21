export function generateAudit(data) {
  let savings = 0;
  const recommendations = [];
  const reasons = [];

  data.tools.forEach((tool) => {
    if (
      tool.tool === "ChatGPT" &&
      tool.plan === "Team" &&
      tool.seats <= 2
    ) {
      savings += 20;
      recommendations.push("Downgrade ChatGPT to Plus");
      reasons.push(
        "Small teams often don't fully utilize ChatGPT Team collaboration features."
      );
      return;
    }

    if (
      tool.tool === "Cursor" &&
      tool.plan === "Business" &&
      data.teamSize <= 3
    ) {
      savings += 20;
      recommendations.push("Switch Cursor to Pro");
      reasons.push(
        "Cursor Business may be unnecessary for small engineering teams."
      );
      return;
    }

    recommendations.push(`${tool.tool} looks optimized`);
  });

  return {
    recommendation: recommendations.join(" · "),
    savings,
    reason:
      reasons.length > 0
        ? reasons.join(" ")
        : "Your current tool stack appears cost-efficient for the selected configuration.",
  };
}
