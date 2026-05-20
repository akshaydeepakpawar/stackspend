export function generateAudit(data) {

  if (
    data.tool === "ChatGPT" &&
    data.plan === "Team" &&
    data.seats <= 2
  ) {
    return {
      recommendation: "Downgrade to ChatGPT Plus",
      savings: 20,
      reason:
        "Small teams often don't fully utilize Team collaboration features.",
    };
  }

  if (
    data.tool === "Cursor" &&
    data.plan === "Business" &&
    data.teamSize <= 3
  ) {
    return {
      recommendation: "Switch to Cursor Pro",
      savings: 20,
      reason:
        "Business tier may be unnecessary for small engineering teams.",
    };
  }

  return {
    recommendation: "Current setup looks optimized",
    savings: 0,
    reason:
      "Your current plan appears cost-efficient for your usage.",
  };
}