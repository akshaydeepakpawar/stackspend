# USER_INTERVIEWS.md

# User Research & Validation

## Overview

Due to the limited development timeline of this project, formal structured customer interviews were not conducted.

Instead, product assumptions were developed through:

- Personal experience using multiple AI tools
- Conversations with fellow developers
- Discussions with engineering graduates
- Observation of online discussions in developer communities
- Research into AI software pricing and subscription models

The purpose of this document is to outline key assumptions, observed pain points, and future validation plans.

---

# Target Users

The initial target audience consists of:

- Individual developers
- Engineering students
- Startup founders
- Small engineering teams
- Technical managers

These groups frequently use multiple AI subscriptions simultaneously.

Examples:

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

---

# Observed Problems

## Problem 1

### Lack Of Spending Visibility

Many users subscribe to several AI tools without understanding their total monthly cost.

Examples:

- ChatGPT Plus
- Cursor Pro
- Claude Pro

Individually these subscriptions appear inexpensive.

Combined spending often exceeds:

```txt
$50-$100/month
```

without users actively tracking it.

---

## Problem 2

### Overlapping Functionality

Several AI products provide similar capabilities.

Examples:

- General chat assistants
- Coding assistants
- Research tools

Users often maintain multiple subscriptions even when a single plan may satisfy most requirements.

---

## Problem 3

### Enterprise Plans For Small Teams

Many small teams purchase business plans before they actually need:

- Administrative controls
- SSO
- Compliance features
- Governance tooling

This creates unnecessary subscription costs.

---

## Problem 4

### No Simple Audit Process

Most users do not periodically review:

- Subscription plans
- Seat allocations
- Vendor overlap

As a result, optimization opportunities are rarely identified.

---

# Informal Feedback

Feedback gathered from conversations with developers and peers:

### Feedback Example 1

"I know I'm paying for multiple AI tools, but I have no idea what the total cost is."

---

### Feedback Example 2

"I subscribed to several tools during experimentation and never reviewed them again."

---

### Feedback Example 3

"I would use a tool that quickly tells me whether I'm overpaying."

---

### Feedback Example 4

"I want recommendations that are transparent and explainable rather than AI-generated guesses."

---

# Product Assumptions

The current MVP is based on the following assumptions.

## Assumption 1

Users care about reducing AI software costs.

Confidence:

High

Reason:

Cost reduction creates immediate and measurable value.

---

## Assumption 2

Users prefer simple recommendations.

Confidence:

High

Reason:

Most users want:

- Save money
- Keep functionality

rather than detailed procurement analysis.

---

## Assumption 3

Shareable reports increase engagement.

Confidence:

Medium

Reason:

Reports can be shared with:

- Team members
- Managers
- Founders

Further validation is required.

---

## Assumption 4

Lead capture after value delivery performs better than lead capture before value delivery.

Confidence:

High

Reason:

Users receive recommendations before being asked for contact information.

---

# Validation Opportunities

Future interviews should investigate:

## Spending Awareness

Questions:

- How many AI subscriptions do you currently use?
- Do you know your total monthly spend?

---

## Recommendation Trust

Questions:

- Would you trust automated optimization recommendations?
- What information would increase confidence?

---

## Sharing Behavior

Questions:

- Would you share a cost optimization report with colleagues?
- Who would benefit from seeing the report?

---

## Purchase Intent

Questions:

- Would you pay for ongoing spend monitoring?
- What features would justify a subscription?

---

# Future Research Plan

Goal:

Conduct 10-15 structured interviews with:

- Developers
- Founders
- Engineering managers

Objectives:

- Validate pricing assumptions
- Measure demand for spend optimization
- Understand purchasing behavior
- Identify opportunities for premium features

---

# Key Takeaways

Current observations suggest:

- AI subscription costs are increasing.
- Users often lack visibility into total spending.
- Subscription overlap is common.
- Cost optimization creates immediate value.
- Transparent recommendations are preferred over opaque AI-generated decisions.

These insights informed the design of StackSpend's audit engine, recommendation system, and report experience.