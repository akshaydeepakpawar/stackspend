# REFLECTION.md

# Project Reflection

## Overview

StackSpend was built as an AI subscription auditing platform that helps individuals and teams identify unnecessary spending on AI tools and discover optimization opportunities.

The project combines rule-based cost analysis, AI-generated summaries, public report sharing, lead capture, and email delivery into a single product experience.

Throughout development, the focus was not only on implementing features but also on understanding the tradeoffs involved in building a real SaaS product.

---

# What Went Well

## Rule-Based Audit Engine

One of the strongest decisions was separating cost calculations from AI-generated content.

Savings calculations and recommendations are fully deterministic.

Benefits:

- Predictable behavior
- Easier testing
- Explainable recommendations
- No risk of AI hallucinating financial data

AI is only used to generate natural language summaries.

This architecture proved significantly more reliable than attempting to use an LLM for financial calculations.

---

## Dynamic Pricing Architecture

Moving pricing information into a dedicated pricing layer simplified recommendation logic.

Benefits:

- Easy maintenance
- Centralized pricing updates
- Cleaner audit engine implementation
- Better separation of concerns

This also made automated testing much easier.

---

## Public Report Sharing

Using public report identifiers instead of sequential database IDs was a valuable architectural decision.

Benefits:

- Improved security
- Better user experience
- Easier sharing
- Reduced risk of report enumeration

---

## Incremental Development

Building features in small iterations reduced complexity and simplified debugging.

Examples:

- Audit generation
- Report rendering
- AI summaries
- Email delivery
- Lead capture
- Test automation

Each feature could be validated independently before moving forward.

---

# Challenges Encountered

## Database Migration

The project initially explored a Supabase-based approach before transitioning fully to PostgreSQL and Prisma.

Challenges:

- Schema changes
- Relationship modeling
- Data consistency
- Prisma client regeneration

Although time-consuming, the migration provided better control over application data.

---

## React Hook Form State Management

Managing dynamic tool arrays introduced several challenges.

Issues encountered:

- Form reactivity
- Dynamic field updates
- Pricing synchronization
- Form restoration after refresh

The solution involved:

- useWatch
- useFieldArray
- replace()
- Local storage persistence

This significantly improved the user experience.

---

## Local Storage Synchronization

A subtle bug caused saved values to be overwritten by default values during page initialization.

Root cause:

- Save effects executed before restoration completed.

Resolution:

- Added initialization guards
- Controlled hydration timing
- Improved restoration logic

This was one of the most valuable debugging experiences during development.

---

## CI/CD Integration

GitHub Actions initially failed because of ESLint violations that were not visible during normal development.

Issues included:

- Unused variables
- Invalid navigation components
- JSX formatting rules

Resolving these problems improved code quality and highlighted the importance of automated validation.

---

# What I Would Improve With More Time

## Authentication

Currently reports are publicly accessible through shareable URLs.

Future improvements:

- User accounts
- Saved workspaces
- Team collaboration
- Role-based permissions

---

## Usage-Based Recommendations

Current recommendations are based on subscription plans and team size.

Future versions could incorporate:

- Actual API consumption
- Message volume
- Token usage
- Seat utilization

This would produce more accurate optimization recommendations.

---

## Automated Pricing Updates

Pricing data is currently maintained manually.

Future improvements:

- Automated verification workflows
- Vendor integrations
- Scheduled pricing validation

This would reduce maintenance overhead and improve long-term accuracy.

---

## Analytics Dashboard

Future versions could provide:

- Historical spend trends
- Savings tracking
- Team-level reporting
- Vendor comparison dashboards

---

# Key Lessons Learned

## Deterministic Logic Matters

AI is excellent at explanation but should not always be responsible for business-critical calculations.

Separating calculations from summaries improved reliability and testability.

---

## Documentation Is Part Of Engineering

Writing architecture documents, pricing references, tests, and workflow documentation revealed design weaknesses that were not obvious during implementation.

Documentation improved the project itself.

---

## Product Thinking Matters

The most valuable improvements were not always technical.

Examples:

- Shareable reports
- Draft persistence
- Public URLs
- Email delivery
- Credex consultation CTA

These features improve usability and business value more than purely technical additions.

---

# Final Thoughts

Building StackSpend provided experience across:

- Frontend development
- Backend development
- Database design
- AI integration
- Testing
- CI/CD
- Product design

The project reinforced the importance of balancing engineering quality, user experience, and business objectives when building software products.

If continued beyond the assignment, the next focus would be authentication, usage-based optimization, analytics, and automated pricing maintenance.