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