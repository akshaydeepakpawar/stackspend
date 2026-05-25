# REFLECTION.md

# Project Reflection

## 1. What was the hardest bug you encountered and how did you debug it?

The hardest bug involved form persistence and localStorage synchronization.

I wanted users to be able to refresh the page without losing their audit progress. Initially, I saved form values to localStorage using React Hook Form's `watch()` function and restored them when the page loaded. However, every refresh reset the form back to the default values instead of restoring the saved data.

After several rounds of debugging, I added extensive console logging and discovered that the save effect was executing before the restoration logic had completed. The default form values were being written to localStorage immediately after page load, overwriting the previously saved state.

To fix this, I refactored the implementation to use `useWatch()` for specific fields and carefully controlled the order of restoration and persistence. I also added safeguards around initialization to prevent unwanted writes during hydration.

This bug taught me the importance of understanding component lifecycle timing and state synchronization in React applications.

---

## 2. Describe a decision you reversed during development.

One significant decision I reversed was using Supabase as the primary backend solution.

At the beginning of development I planned to use Supabase for database storage and backend functionality because it provided many features out of the box. As the application grew and I introduced public report IDs, audit relationships, lead capture, and more complex queries, I found myself wanting greater control over the schema and database interactions.

I ultimately migrated the project to PostgreSQL with Prisma ORM.

The migration required additional effort, including schema redesign, Prisma configuration, and query refactoring, but it improved maintainability, type safety, and development experience.

Looking back, Prisma was the better long-term choice for this project.

---

## 3. If you had one additional week, what would you build?

If I had another week to continue development, I would focus on four major improvements:

### Authentication and User Accounts

Allow users to create accounts, save audits permanently, and manage report history across devices.

### Usage-Based Recommendations

Instead of only analyzing subscription plans, recommendations would also consider:

- API consumption
- Message volume
- Seat utilization
- Actual product usage

This would significantly improve recommendation accuracy.

### Analytics Dashboard

Provide users with:

- Historical spending trends
- Savings tracking
- Subscription changes over time
- Team-level reporting

### Automated Pricing Updates

Currently pricing information is maintained manually. I would build a pricing synchronization workflow and administrative interface to simplify updates as vendor pricing changes.

---

## 4. How did you use AI tools during development? When was AI wrong?

AI tools played an important role throughout development.

I used ChatGPT primarily for:

- Brainstorming architecture ideas
- Debugging React and Next.js issues
- Reviewing Prisma schema design
- Generating documentation drafts
- Exploring alternative implementation approaches

However, I intentionally avoided relying on AI for business-critical calculations.

All savings calculations and recommendations in StackSpend are generated through deterministic rules rather than AI-generated outputs because financial recommendations must remain predictable and auditable.

One example where AI was wrong involved the localStorage persistence bug. An AI-generated solution suggested a state restoration pattern that appeared reasonable but still caused saved data to be overwritten by default values during initialization. The code looked correct but failed in practice.

The issue was only resolved through manual debugging, console logging, and careful observation of React Hook Form behavior.

This reinforced an important lesson: AI is extremely helpful for accelerating development, but developers must still verify assumptions and understand the underlying implementation.

---

## 5. Self Assessment

### Discipline: 8/10

I maintained consistent progress throughout the project and worked through multiple debugging sessions without abandoning difficult problems. I could improve by planning development milestones more formally before implementation.

### Code Quality: 8/10

The application is modular, uses Prisma for database access, React Hook Form for validation, and includes automated tests and CI checks. There is still room to improve component abstraction and test coverage.

### Design Sense: 7/10

The interface is clean, responsive, and functional. However, more time could be spent on visual polish, branding, animations, and accessibility improvements.

### Problem Solving: 9/10

Several technical challenges required significant debugging and architectural adjustments, including localStorage persistence, dynamic form state management, Prisma migrations, CI failures, and report generation. I consistently worked through these issues and identified practical solutions.

### Entrepreneurial Thinking: 8/10

Beyond building features, I considered business value through lead capture, shareable reports, consultation opportunities, pricing strategy, unit economics, and go-to-market planning. Future work would include additional customer validation and deeper market research.

---

# Final Thoughts

Building StackSpend provided practical experience across frontend development, backend engineering, database design, AI integration, testing, CI/CD, documentation, and product thinking.

The most valuable lesson from this project was that successful products require balancing technical implementation with user value and business objectives. Features such as shareable reports, draft persistence, recommendation transparency, and lead capture ultimately contributed as much to the product as the underlying technical architecture.

If continued beyond the assignment, my next priorities would be authentication, usage-based optimization, analytics dashboards, and broader customer validation through user interviews.