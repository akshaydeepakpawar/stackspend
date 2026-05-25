export const PRICING = {
  ChatGPT: {
    Free: 0,
    Go: 8,
    Plus: 20,
    Pro: 200,
    Business: 25,
    Enterprise: 60, // normalized placeholder for custom pricing
  },

  Claude: {
    Free: 0,
    Pro: 20,
    "Max 5x": 100,
    "Max 20x": 200,
    "Team Standard": 25,
    "Team Premium": 125,
    Enterprise: 60, // normalized placeholder
  },

  Cursor: {
    Hobby: 0,
    Pro: 20,
    "Pro+": 60,
    Ultra: 200,
    Teams: 40,
    Enterprise: 60, // normalized placeholder
  },

  "GitHub Copilot": {
    Pro: 10,
    "Pro+": 39,
    Business: 19,
    Enterprise: 39,
  },

  Gemini: {
    Free: 0,
    "Advanced Pro": 20,
    "Advanced Ultra": 41.66,
  },

  Windsurf: {
    Free: 0,
    Pro: 20,
    Teams: 40,
    Max: 200,
    Enterprise: 60,
  },

  "OpenAI API": {
    Starter: 25,
    Growth: 100,
    Scale: 500,
  },

  "Anthropic API": {
    Starter: 25,
    Growth: 100,
    Scale: 500,
  },
};

export const PLAN_OPTIONS = Object.fromEntries(
  Object.entries(PRICING).map(([tool, plans]) => [
    tool,
    Object.keys(plans),
  ])
);