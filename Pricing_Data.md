# Pricing_Data.md

## Pricing Reference For AI Productivity Tools

This document aggregates public subscription and API pricing for prominent artificial intelligence models and developer platforms. It includes key parameters, a standard reference date, and structural assumptions to enable precise comparisons.

---

## Document Metadata
* **Date Collected:** May 23, 2026
* **Currency:** USD ($) unless specified otherwise.
* **Target Audience:** IT Procurement, Developers, and Product Strategy Teams.

---

## Executive Summary

This document consolidates pricing information for major generative AI platforms and developer tooling products including ChatGPT, Claude, Cursor, GitHub Copilot, and Gemini.

The objective is to support StackSpend's audit engine by providing a standardized pricing reference that enables subscription comparisons, optimization recommendations, and estimated savings calculations.

Pricing information was collected from publicly available vendor documentation and official pricing pages.

## Quick Pricing Comparison

| Tool | Lowest Paid Plan | Team / Business Plan |
|--------|--------|--------|
| ChatGPT | $20/month (Plus) | $25/user/month (Business) |
| Claude | $20/month (Pro) | $25/user/month (Team Standard) |
| Cursor | $20/month (Pro) | $40/user/month (Teams) |
| GitHub Copilot | $10/month (Pro) | $19/user/month (Business) |
| Gemini | $19.99/month (Advanced Pro) | Workspace Pricing |

## 1. ChatGPT Pricing (OpenAI)

### Individual & Corporate Subscriptions
| Plan Tier | Price (Monthly) | Key Features & Inclusions |
| :--- | :--- | :--- |
| **Free** | $0 | Access to GPT-5.3 tier with strict limits; includes advertising. |
| **Go** | $8 | Higher message volume and file uploads than Free; still includes ads. |
| **Plus** | $20 | The standard professional tier. Ad-free, full advanced model suite, Agent Mode, Deep Research (10 runs/mo), and Sora access. |
| **Pro** | $200 | Dedicated to power users. Access to GPT-5.4 Pro, 250 Deep Research runs/mo, and doubled context windows. |
| **Business** | $25 / user | Centralized team administration, SOC 2 compliance, SAML SSO, and over 60 application integrations. |
| **Enterprise** | Custom | Privately hosted AI infrastructure, custom data retention, and enterprise-grade administrative controls. |

---

## 2. Claude Pricing (Anthropic)

### Individual & Team Subscriptions
| Plan Tier | Price (Monthly) | Key Features & Inclusions |
| :--- | :--- | :--- |
| **Free** | $0 | Basic web and mobile access. Daily usage limits; does not include Claude Code. |
| **Pro** | $20 | Extended usage capacity, Unlimited Projects, Google Workspace integration, and Claude Code (terminal-based agentic access). *Note: Annual option available at $200/yr ($16.67/mo equivalent).* |
| **Max 5x** | $100 | Contains identical models to Pro but multiplies the session capacity limits by 5. |
| **Max 20x** | $200 | Multiplies the baseline Pro session capacity limits by 20. Optimized for high-volume standalone users. |
| **Team Standard**| $25 / seat | Minimum 5 seats ($30 if billed monthly, $25 on annual). Shared context and central admin tools. |
| **Team Premium**| $125 / seat | Minimum 5 seats ($150 if billed monthly, $125 on annual). Integrates Claude Code across the engineering team. |
| **Enterprise** | Custom (~$20/seat) | Advanced compliance, 500K context window, HIPAA readiness, SSO/SCIM. *Note: API token consumption is billed separately on top of the seat fee.* |

### API / Developer Token Pricing
| Model Family | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Context Window Limit |
| :--- | :--- | :--- | :--- |
| **Claude Haiku 4.5** | $1.00 | $5.00 | 200K tokens |
| **Claude Sonnet 4.6** | $3.00 | $15.00 | 1M tokens |
| **Claude Opus 4.6 / 4.7**| $5.00 | $25.00 | 1M tokens |

* **Prompt Caching:** Reduces input costs by 90% on cache hits following a cache write surcharge.
* **Additional Tools:** Web Search tool costs $10 per 1,000 queries. Code Execution sandboxes cost $0.05 per container-hour (with 50 free hours/org/day).

---

## 3. Cursor Pricing (Anysphere)

### Subscriptions for AI-Native IDE
| Plan Tier | Monthly Price | Included Monthly Value / Allotments | Target User |
| :--- | :--- | :--- | :--- |
| **Hobby (Free)** | $0 | Limited agent requests, baseline autocomplete/tab completion. | Evaluation & casual use. |
| **Pro** | $20 | Unlimited Tab autocomplete, unlimited Auto mode, and a **$20 usage credit pool** for premium manual models. | Solo professionals (2-4 hrs/day). |
| **Pro+** | $60 | Premium autocomplete features and a **$60 usage credit pool** (3x Pro allotment). | Heavy developers (4-8 hrs/day). |
| **Ultra** | $200 | Top priority infrastructure routing and a **$200 usage credit pool** (20x Pro baseline). | Full-time AI-native engineers. |
| **Teams** | $40 / user | Centrally administered billing, shared team prompts/context rules, and a $20 credit pool per user. | Engineering teams of 3+. |
| **Enterprise** | Custom | Tailored data-privacy controls, single sign-on (SSO), and fully pooled organization-wide credits. | Large enterprises. |

* *Note: Annual commitments yield a 20% discount on individual paid tiers (e.g., Pro decreases to $16/month).*

---

## 4. GitHub Copilot Pricing (Microsoft / GitHub)

### Structure & Allocation Update
* **Major Paradigm Shift:** Starting **June 1, 2026**, GitHub Copilot is transitioning from a request allowance system (PRUs) to an asset structure utilizing **GitHub AI Credits**. 
* Basic text autocompletions and *Next Edit Suggestions* remain unmetered and will not exhaust credit balances. Agentic workflows, multi-step chat actions, and automated code reviews consume credits based on actual token costs.

### Copilot Plans & Credits
| Plan Tier | Price (Monthly) | Included Monthly AI Credits | Specialized Mechanics |
| :--- | :--- | :--- | :--- |
| **Copilot Pro** | $10 | $10 worth of AI Credits | Designed for individual developers requiring light agentic chat features. |
| **Copilot Pro+** | $39 | $39 worth of AI Credits | Expanded credit pool for complex, long-running agentic refactoring. |
| **Copilot Business**| $19 / user | $19 worth of AI Credits | Includes **Pooled Allotments** across the organization; low-volume users offset power users. |
| **Copilot Enterprise**| $39 / user | $39 worth of AI Credits | Includes pooled credits, custom repository indexing, and advanced governance. |

---

## 5. Gemini Pricing (Google)

### Consumer & Workspace Subscriptions
| Plan Tier | Price (Monthly) | Inclusions & Storage |
| :--- | :--- | :--- |
| **Free** | $0 | Access via Gemini app using Gemini 2.5 Flash, Deep Research, Live, and 100 media credits/mo. 15 GB shared storage. |
| **Gemini Advanced (Pro)**| $19.99 | Unlocks Gemini 2.5 Pro and Gemini 3 models (US), Deep Research, Veo 3.1 video generation, and 1,000 monthly credits. Integrated across Google Workspace apps (Docs, Gmail). |
| **Gemini Advanced (Ultra)**| $124.99 / 3 mos | Baseline tier optimized for top-tier multimodal reasoning benchmarks. ($41.66/mo equivalent). |

### Developer API Pricing (Google AI Studio / Vertex AI)
| Model Family / Service | Input Cost (per 1M Tokens) | Output Cost (per 1M Tokens) | Context Mechanics |
| :--- | :--- | :--- | :--- |
| **Gemini 2.5 Flash-Lite** | $0.10 | $0.40 | Affordable high-frequency tasks. |
| **Gemini 2.5 Flash** | $0.30 | $2.50 | Multimodal media inputs (Audio/Video). |
| **Gemini 2.5 Pro** | $1.25 (≤200k context)<br>$2.50 (>200k context) | $10.00 (≤200k context)<br>$15.00 (>200k context) | Scaling tiered cost structures based on active input lengths. |
| **Gemini 3 Flash** | $0.50 | $3.00 | Next-generation speed baseline. |
| **Gemini 3 Pro** | $2.00 (≤200k context)<br>$4.00 (>200k context) | $12.00 (≤200k context)<br>$18.00 (>200k context) | High-reasoning foundation tier. |

* **Grounding Fees:** Grounding queries utilizing Google Search or Google Maps are free for the first 5,000 requests per month across Gemini 3, then metered at **$14.00 per 1,000 queries**.
* **Vertex AI Video (Veo 3.1):** Scaled on time metrics; standard video processing ranges from $0.05 to $0.75 per second depending on fast vs. lite inference options.

---

## Core Assumptions & Strategic Nuances

1. **The Emergence of Ad-Supported Models:** Both the consumer market and budget tiers (e.g., OpenAI’s $8 *Go* plan) are shifting toward hybrid subscription-plus-advertising structures. Free tiers no longer mean completely unmonetized experiences.
2. **Transition to Consumption and Credit Pools:** Flat-rate unlimited premium usage is disappearing. Software tools (such as Cursor and GitHub Copilot) are standardizing around a framework where users buy a flat subscription that contains a matching fiat-denominated "credit pool." When this pool is exhausted, usage throttles or switches to pay-as-you-go metered billing.
3. **Seat-Pooling Efficiencies:** On corporate organizational plans (like GitHub Copilot Business or Anthropic Team), platforms increasingly permit cross-seat token credit pooling. This structure benefits companies by letting administrative managers balance out heavy developers with minimal usage lines.
4. **Context Penalties:** Long-context models (notably Google’s Gemini and Anthropic’s legacy models) penalize documents exceeding 200k tokens via tiered multiplier pricing. Utilizing strategies like **Prompt Caching** is functionally necessary to keep production API integrations financially sustainable.
5. **Regional Discrepancies:** While standard documentation defaults to USD bases, local sales operations (such as India App Store or Google Play portals) shift conversions to fixed native pricing (e.g., ChatGPT Plus settling around ₹2,000/month) incorporating regional taxation frameworks.

## Audit Recommendation Logic

The StackSpend audit engine currently uses a rules-based recommendation system built on top of the pricing data collected in this document.

### Example Rules

#### ChatGPT

Condition:
- Business or Team subscription
- Two or fewer seats

Recommendation:
- Downgrade to ChatGPT Plus

Expected Outcome:
- Reduced monthly subscription costs while maintaining access to advanced AI capabilities.

---

#### Cursor

Condition:
- Teams subscription
- Small engineering team (three or fewer developers)

Recommendation:
- Downgrade to Cursor Pro

Expected Outcome:
- Similar functionality for smaller teams at lower cost.

---

#### Claude

Condition:
- Team subscription with low seat utilization

Recommendation:
- Evaluate migration to Claude Pro plans

Expected Outcome:
- Lower seat-based expenditure while preserving model access.

---

Future versions may combine these deterministic rules with AI-generated recommendations and usage-based optimization models.

## Pricing Maintenance Strategy

AI platform pricing evolves rapidly.

To maintain recommendation accuracy:

1. Pricing information should be reviewed monthly.
2. Subscription tiers should be verified against official vendor documentation.
3. Audit recommendation rules should be updated whenever pricing structures materially change.
4. Historical pricing snapshots should be retained for auditing and regression testing.

Last Verified:
May 23, 2026

## Sources

OpenAI ChatGPT Pricing
https://openai.com/chatgpt/pricing

Anthropic Claude Pricing
https://www.anthropic.com/pricing

Cursor Pricing
https://cursor.com/pricing

GitHub Copilot Pricing
https://github.com/features/copilot/plans

Google Gemini Pricing
https://gemini.google/subscriptions

## Implementation Note

The StackSpend MVP uses a simplified pricing model within the application for recommendation generation and testing consistency.

Certain enterprise plans and usage-based products are represented using fixed values inside `lib/pricing-data.js` to simplify calculations and improve explainability.

The official vendor pricing tables in this document are intended as reference material, while application recommendations are generated from the pricing configuration bundled with the application.