export const RECOMMENDATION_RULES = {
  ChatGPT: {
    Business: {
      maxSeats: 2,
      recommend: "Plus",
      reason:
        "Small teams rarely need business administration and compliance features.",
    },

    Pro: {
      maxSeats: 1,
      recommend: "Plus",
      reason:
        "Most individual users do not fully utilize Pro limits and can save with Plus.",
    },

    "Pro Max": {
      maxSeats: 2,
      recommend: "Pro",
      reason:
        "The highest tier is designed for extremely heavy usage and is often unnecessary.",
    },
  },

  Claude: {
    "Team Standard": {
      maxSeats: 4,
      recommend: "Pro",
      reason:
        "Smaller teams can often operate efficiently using individual Pro subscriptions.",
    },

    "Team Premium": {
      maxSeats: 5,
      recommend: "Team Standard",
      reason:
        "Premium collaboration features may not justify the additional cost.",
    },

    Enterprise: {
      maxSeats: 20,
      recommend: "Team Premium",
      reason:
        "Enterprise governance features are typically unnecessary for smaller organizations.",
    },

    "Max 20x": {
      maxSeats: 1,
      recommend: "Max 5x",
      reason:
        "Most users do not consistently consume the highest Claude usage limits.",
    },
  },

  Cursor: {
    Teams: {
      maxSeats: 3,
      recommend: "Pro",
      reason:
        "The Teams plan is often excessive for very small engineering groups.",
    },

    Ultra: {
      maxSeats: 1,
      recommend: "Pro+",
      reason: "Ultra is designed for extremely heavy usage patterns.",
    },

    Enterprise: {
      maxSeats: 15,
      recommend: "Teams",
      reason:
        "Enterprise administration features may not be required at this scale.",
    },
  },

  "GitHub Copilot": {
    Business: {
      maxSeats: 2,
      recommend: "Pro",
      reason:
        "Business management features may not justify the additional cost.",
    },

    Enterprise: {
      maxSeats: 10,
      recommend: "Business",
      reason:
        "Enterprise governance capabilities are often unnecessary for smaller organizations.",
    },
  },

  Gemini: {
    "Ultra 20x": {
      maxSeats: 1,
      recommend: "Ultra 5x",
      reason: "Most users do not require Gemini's highest available limits.",
    },

    "Ultra 5x": {
      maxSeats: 1,
      recommend: "AI Pro",
      reason: "AI Pro provides most capabilities at significantly lower cost.",
    },
  },

  Windsurf: {
    Teams: {
      maxSeats: 3,
      recommend: "Pro",
      reason:
        "Small teams can often use individual Pro subscriptions more efficiently.",
    },

    Max: {
      maxSeats: 1,
      recommend: "Pro",
      reason:
        "The Max plan is optimized for very heavy usage and is often unnecessary.",
    },

    Enterprise: {
      maxSeats: 15,
      recommend: "Teams",
      reason:
        "Enterprise controls may not provide enough value for smaller teams.",
    },
  },

  "OpenAI API": {
    Scale: {
      maxSeats: 999,
      recommend: "Growth",
      reason:
        "Many teams overestimate token consumption and can reduce costs with a smaller usage tier.",
    },
  },

  "Anthropic API": {
    Scale: {
      maxSeats: 999,
      recommend: "Growth",
      reason:
        "Actual usage often falls below projected token consumption estimates.",
    },
  },
};
