export const RECOMMENDATION_RULES = {
  ChatGPT: {
    Pro: {
      maxSeats: 2,
      recommend: "Plus",
      reason:
        "Most individual developers and creators can use Plus without requiring Pro-level usage limits.",
    },

    Business: {
      maxSeats: 3,
      recommend: "Plus",
      reason:
        "Small teams rarely need advanced administration, SSO, and compliance features.",
    },
  },

  Claude: {
    "Max 20x": {
      maxSeats: 2,
      recommend: "Max 5x",
      reason:
        "Very high Claude usage limits are often underutilized by individuals and small teams.",
    },

    "Max 5x": {
      maxSeats: 1,
      recommend: "Pro",
      reason:
        "Claude Pro is sufficient for most individual users.",
    },

    "Team Premium": {
      maxSeats: 5,
      recommend: "Team Standard",
      reason:
        "Premium collaboration features may not justify the additional cost for smaller teams.",
    },

    "Team Standard": {
      maxSeats: 3,
      recommend: "Pro",
      reason:
        "Individual Pro subscriptions can be more cost-effective for very small teams.",
    },
  },

  Cursor: {
    Ultra: {
      maxSeats: 2,
      recommend: "Pro+",
      reason:
        "Ultra is designed for extremely heavy AI-assisted development workloads.",
    },

    Teams: {
      maxSeats: 3,
      recommend: "Pro",
      reason:
        "Collaboration features may not provide enough value for very small teams.",
    },

    "Pro+": {
      maxSeats: 1,
      recommend: "Pro",
      reason:
        "Cursor Pro provides sufficient capabilities for most solo developers.",
    },
  },

  "GitHub Copilot": {
    Enterprise: {
      maxSeats: 20,
      recommend: "Business",
      reason:
        "Enterprise governance and compliance features are often unnecessary for smaller organizations.",
    },

    Business: {
      maxSeats: 3,
      recommend: "Pro",
      reason:
        "Business administration features may not justify the additional cost for small teams.",
    },

    "Pro+": {
      maxSeats: 1,
      recommend: "Pro",
      reason:
        "Most developers can achieve similar productivity using Copilot Pro.",
    },
  },

  Gemini: {
    "Advanced Ultra": {
      maxSeats: 999,
      recommend: "Advanced Pro",
      reason:
        "Advanced Pro provides most capabilities at a significantly lower cost.",
    },
  },
};