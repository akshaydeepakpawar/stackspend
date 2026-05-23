export const PRICING = {
  ChatGPT: {
    Free: 0,
    Go: 8,
    Plus: 20,
    Business: 25,
    Pro: 200,
  },

  Claude: {
    Free: 0,
    Pro: 20,
    "Max 5x": 100,
    "Max 20x": 200,
    "Team Standard": 25,
    "Team Premium": 125,
  },

  Cursor: {
    Hobby: 0,
    Pro: 20,
    "Pro+": 60,
    Ultra: 200,
    Teams: 40,
  },

  "GitHub Copilot": {
    Pro: 10,
    "Pro+": 39,
    Business: 19,
    Enterprise: 39,
  },

  Gemini: {
    Free: 0,
    "Advanced Pro": 19.99,
    "Advanced Ultra": 41.66,
  },
};

export const PLAN_OPTIONS =
  Object.fromEntries(
    Object.entries(PRICING).map(
      ([tool, plans]) => [
        tool,
        Object.keys(plans),
      ]
    )
  );