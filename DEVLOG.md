## Day 1 — 2026-05-20

**Hours worked:** 4

**What I did:**
- Initialized Next.js project using JavaScript
- Setup Tailwind CSS and component structure
- Built spend input form using React Hook Form and Zod
- Added localStorage persistence
- Implemented initial audit recommendation engine
- Integrated Neon PostgreSQL with Prisma
- Created API route for audit persistence

**What I learned:**
- Learned how Prisma works with Neon PostgreSQL in a Next.js App Router setup
- Understood why database operations should happen in API routes instead of client components

**Blockers / what I'm stuck on:**
- Initially struggled with Supabase RLS policies, then migrated to Neon for a simpler backend architecture

**Plan for tomorrow:**
- Improve audit result UI
- Add support for multiple tools and plans
- Start implementing dynamic pricing logic

## Day 2 — 2026-05-21

**Hours worked:** 5

**What I did:**
- Refactored the spend input form to support multiple AI tools using React Hook Form's useFieldArray.
- Upgraded the audit engine from a single recommendation model to a recommendation-based report structure with monthly and annual savings calculations.
- Added recommendation cards and a savings dashboard to improve the audit results experience.
- Created an audit history page that displays previously generated audits from the database.
- Redesigned the Prisma schema to support storing complete audit reports and related tool records.
- Implemented a one-to-many relationship between audits and tools in Prisma.
- Migrated database development from Neon PostgreSQL to a local PostgreSQL 16 Docker container.
- Updated Prisma configuration and synchronized the database schema using Prisma migrations and db push.
- Tested audit creation, persistence, retrieval, and history views end-to-end.

**What I learned:**
- Learned how Prisma relations work in a one-to-many data model.
- Better understood the difference between frontend state and backend request data after debugging undefined values in API routes.
- Learned how Docker simplifies local database development and provides a consistent PostgreSQL environment.
- Improved my understanding of how audit data should be modeled for future features such as shareable reports and analytics.

**Blockers / what I'm stuck on:**
- Encountered several schema mismatch issues after changing the Audit model structure.
- Prisma queries were still referencing fields that no longer existed in the database schema, causing runtime errors.
- Spent time debugging relation configuration and database synchronization issues after the schema redesign.

**Plan for tomorrow:**
- Build a more polished landing page and improve overall UI quality.
- Implement AI-generated personalized audit summaries using an LLM API.
- Create dynamic report pages using unique audit IDs.
- Improve audit recommendation logic using pricing data from official vendor pricing pages.
- Begin preparing PRICING_DATA.md and architecture documentation.

## Day 3 — 2026-05-22

Hours worked: 6

What I did:
- Added shareable audit reports using public IDs.
- Built a dedicated report page with savings metrics, recommendations, and tool stack overview.
- Added AI-generated audit summaries.
- Implemented audit history retrieval from PostgreSQL.
- Added copy-link and PDF export actions.
- Improved overall report UI and page structure.
- Refactored report actions into a client component while keeping database access server-side.

What I learned:
- Learned how to separate Server Components and Client Components in Next.js App Router.
- Better understood Prisma relations and data modeling.
- Learned how to design shareable URLs without exposing sequential database IDs.

Blockers:
- Encountered Prisma schema synchronization issues after introducing public IDs and summary fields.
- Fixed multiple routing and database validation issues.

Plan for tomorrow:
- Integrate a real LLM provider through OpenRouter.
- Add email capture and report delivery.
- Improve landing page design and onboarding experience.
- Create pricing source documentation.

## Day 4 — 2026-05-23

Hours worked: 7

What I did:

* Reworked the pricing engine to support dynamic plan-based pricing for all supported AI tools.
* Added centralized pricing management through `pricing-data.js`.
* Converted the plan field from a free-text input to a controlled dropdown with valid plans for each tool.
* Implemented automatic monthly spend updates based on selected tool and plan.
* Expanded recommendation rules for ChatGPT, Claude, Cursor, GitHub Copilot, and Gemini.
* Added savings validation to prevent invalid or negative optimization recommendations.
* Implemented draft persistence using localStorage.
* Added automatic restoration of saved audits after page refresh.
* Fixed React Hook Form reactivity issues by replacing `watch()` with `useWatch()`.
* Fixed dynamic field array restoration using `replace()` from `useFieldArray`.
* Added “Start New Audit” workflow for clearing saved drafts and beginning a fresh audit.
* Improved overall audit flow and user experience after report generation.
* Performed extensive testing of pricing calculations, recommendations, report generation, email delivery, and saved draft functionality.

What I learned:

* Learned the difference between `watch()` and `useWatch()` in React Hook Form and when each should be used.
* Learned proper handling of dynamic arrays using `useFieldArray` and `replace()`.
* Improved understanding of localStorage persistence patterns and hydration timing issues.
* Learned how to prevent state overwrite issues during initial component load.
* Gained experience building rule-based recommendation systems using configurable pricing data.

Blockers:

* Spent significant time debugging why pricing values were not updating when plans changed.
* Encountered React Hook Form reactivity issues caused by using `watch()` instead of `useWatch()`.
* Faced localStorage synchronization problems where default values overwrote saved drafts during page load.
* Resolved field array restoration issues when reloading previously saved audits.

Plan for tomorrow:

* Add current spend metrics alongside monthly and annual savings.
* Improve audit result presentation with KPI cards and better visual hierarchy.
* Enhance report page design and mobile responsiveness.
* Add user authentication with Clerk.
* Introduce dashboard analytics for historical audits and savings trends.
* Prepare the application for deployment and production testing.

## Day 5 — 2026-05-24

**Hours worked:** 6

**What I did:**
- Implemented lead capture functionality with optional company name and role fields.
- Added backend storage for leads using Prisma and PostgreSQL.
- Integrated transactional email delivery for audit confirmations.
- Implemented honeypot-based abuse protection and documented the approach.
- Added Open Graph and Twitter Card metadata for shareable report URLs.
- Improved report page responsiveness and mobile layout.
- Added conditional messaging for optimized stacks versus high-savings opportunities.
- Performed manual testing of lead capture, report sharing, and email workflows.

**What I learned:**
- Learned how Open Graph metadata improves link sharing experiences on social platforms.
- Better understood server-side form handling and validation in Next.js.
- Learned practical techniques for lightweight spam prevention without degrading user experience.

**Blockers / what I'm stuck on:**
- Faced metadata generation issues when creating dynamic report pages.
- Encountered email delivery edge cases caused by invalid or missing environment variables.
- Spent time validating public report privacy requirements to ensure emails and company details were never exposed.

**Plan for tomorrow:**
- Add automated tests for the audit engine.
- Configure GitHub Actions CI pipeline.
- Prepare architecture, testing, and pricing documentation.
- Run Lighthouse audits and improve performance where necessary.

---

## Day 6 — 2026-05-25

**Hours worked:** 7

**What I did:**
- Added automated tests covering recommendation generation, savings calculations, and optimization scenarios.
- Configured Vitest as the testing framework.
- Created GitHub Actions workflow to run linting and tests on every push to the main branch.
- Fixed failing test cases after updating pricing assumptions and recommendation logic.
- Refactored parts of the audit engine to improve maintainability and readability.
- Generated architecture diagrams and documented application data flow.
- Created TESTS.md, PROMPTS.md, and PRICING_DATA.md.
- Performed Lighthouse audits and optimized page structure, metadata, and accessibility.

**What I learned:**
- Learned how small pricing changes can impact downstream tests and recommendation calculations.
- Improved understanding of CI pipelines and automated quality checks.
- Learned how to design tests that verify business logic rather than implementation details.

**Blockers / what I'm stuck on:**
- Encountered test failures after updating pricing values.
- Faced lint warnings related to React Hook Form integration and component optimization.
- Spent time debugging CI failures caused by mismatched expectations in audit engine tests.

**Plan for tomorrow:**
- Complete remaining documentation files.
- Finalize README screenshots and deployment instructions.
- Perform full end-to-end testing on the deployed application.
- Prepare final submission package.

---

## Day 7 — 2026-05-26

**Hours worked:** 8

**What I did:**
- Finalized README documentation, screenshots, architecture notes, business strategy documents, and reflection answers.
- Completed GTM, Economics, Metrics, Landing Copy, and User Interviews documentation.
- Verified pricing sources and aligned recommendation logic with documented assumptions.
- Completed production deployment and resolved database schema synchronization issues.
- Performed comprehensive end-to-end testing on the deployed application.
- Verified audit generation, AI summaries, report sharing, PDF export, lead capture, email delivery, and audit history functionality.
- Ran final lint, build, and test checks to ensure release readiness.
- Reviewed the project against the assignment rubric and addressed remaining gaps.

**What I learned:**
- Learned the importance of documentation quality and clear communication when presenting engineering work.
- Better understood the relationship between product thinking, business viability, and technical implementation.
- Learned how deployment, testing, documentation, and user experience collectively determine product quality.

**Blockers / what I'm stuck on:**
- Encountered deployment issues caused by database schema mismatches between local development and production environments.
- Resolved migration and Prisma synchronization issues by rebuilding and validating the production database schema.
- No major blockers remained after final testing.

**Plan for tomorrow:**
- Submit the assignment.
- Reflect on lessons learned throughout the project.
- Prepare for potential Round 2 requirements and technical discussions.