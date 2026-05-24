# StackSpend

StackSpend is an AI subscription auditing platform that helps individuals, founders, and engineering teams identify unnecessary spending on AI tools and discover cost-saving opportunities.

Users can enter their current AI subscriptions, receive optimization recommendations, generate AI-powered summaries, and create shareable audit reports with projected monthly and annual savings.

---

## Live Demo

Deployed URL:

https://your-deployed-url.vercel.app

---

## Screenshots

### Landing Page

![Landing Page](./screenshots/landing-page.png)

### Audit Results

![Audit Results](./screenshots/audit-results.png)

### Public Report

![Public Report](./screenshots/public-report.png)

---

## Features

### AI Subscription Audit

Analyze spending across popular AI tools:

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

For each tool users can provide:

- Subscription plan
- Monthly spend
- Number of seats

Additional inputs:

- Team size
- Primary use case
  - Coding
  - Writing
  - Research
  - Data
  - Mixed

---

### Dynamic Pricing Engine

Pricing is maintained centrally through a dedicated pricing data layer.

Features:

- Automatic plan pricing
- Centralized pricing configuration
- Multi-tool support
- Consistent savings calculations

---

### Recommendation Engine

The audit engine evaluates:

- Whether a user is paying for an oversized plan
- Potential downgrade opportunities
- Cost-saving alternatives
- Monthly and annual savings potential

Recommendations are generated through deterministic business rules rather than AI-generated calculations.

---

### Savings Analysis

Automatically calculates:

- Current monthly spend
- Potential monthly savings
- Potential annual savings

---

### AI Generated Summary

Generates a personalized executive summary explaining:

- Current spending profile
- Optimization opportunities
- Savings impact
- Recommended actions

Includes graceful fallback handling if the AI provider is unavailable.

---

### Shareable Public Reports

Every audit receives a unique public URL.

Example:

```txt
/reports/cmcz123abc456
```

Reports are publicly shareable while excluding personally identifiable information.

---

### Audit History

Users can review previously generated reports and revisit recommendations.

---

### Lead Capture

Collects:

- Email address
- Company name
- Role

Stored in PostgreSQL for future communication and consultation opportunities.

---

### Email Delivery

Generated reports can be delivered directly via email using Resend.

---

### Abuse Protection

Lead capture forms include a honeypot field to block basic automated spam submissions without affecting legitimate users.

---

## Tech Stack

### Frontend

- Next.js App Router
- React
- Tailwind CSS
- React Hook Form
- Zod

### Backend

- Next.js Route Handlers

### Database

- PostgreSQL 16
- Prisma ORM
- Docker

### AI

- OpenRouter
- GPT-4o Mini

### Email

- Resend

### Testing

- Vitest

### CI/CD

- GitHub Actions

---

## Project Structure

```txt
app/
├── api/
│   ├── audits/
│   ├── leads/
│   ├── summary/
│   └── send-report/
│
├── reports/
│   └── [id]/
│
components/
│   ├── spend-form.jsx
│   ├── report-actions.jsx
│   └── ...
│
lib/
│   ├── audit-engine.js
│   ├── pricing-data.js
│   ├── recommendation-rules.js
│   ├── prisma.js
│   └── schema.js
│
tests/
│   └── audit-engine.test.js
```

---

## Local Setup

### Install Dependencies

```bash
bun install
```

### Configure Environment Variables

Create:

```txt
.env.local
```

Example:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/stackspend

OPENROUTER_API_KEY=your_openrouter_key

RESEND_API_KEY=your_resend_key
```

### Start PostgreSQL

```bash
docker compose up -d
```

### Push Database Schema

```bash
bunx prisma db push
```

### Generate Prisma Client

```bash
bunx prisma generate
```

### Run Development Server

```bash
bun run dev
```

Open:

```txt
http://localhost:3000
```

---

## Running Tests

Run audit engine tests:

```bash
bun run test
```

Run linting:

```bash
bun run lint
```

---

## Audit Workflow

```txt
User Input
↓
Pricing Engine
↓
Recommendation Engine
↓
Savings Calculation
↓
AI Summary Generation
↓
PostgreSQL Storage
↓
Public Report URL
↓
Optional Email Delivery
```

---

## Key Decisions

### 1. Rule-Based Audit Engine Instead of AI Calculations

Savings calculations and recommendations are generated using deterministic pricing rules. Cost optimization logic must remain predictable and explainable. AI is only used for summary generation.

### 2. Public Report IDs Instead of Sequential Database IDs

Reports use generated public IDs rather than database primary keys. This prevents report enumeration and allows safe public sharing.

### 3. PostgreSQL + Prisma Instead of Supabase

The project originally used Supabase but was migrated to PostgreSQL with Prisma ORM for greater schema control and simpler relationship management.

### 4. LocalStorage Persistence

Form state is automatically saved to localStorage. Users can refresh the page without losing audit progress.

### 5. OpenRouter For LLM Integration

OpenRouter provides access to multiple AI models through a single API while keeping integration simple and vendor-agnostic.

---

## Tradeoffs

### Authentication Deferred

The MVP focuses on generating value before requiring user accounts. Reports remain publicly accessible through shareable URLs.

### Static Pricing Data

Pricing information is maintained manually rather than synchronized from vendor APIs. This simplifies implementation while preserving audit accuracy.

### Rules Before Machine Learning

Recommendations rely on transparent business rules instead of AI-generated suggestions. This improves consistency and makes savings calculations auditable.

---

## Future Improvements

- User authentication
- Team workspaces
- Usage analytics
- Dynamic pricing synchronization
- PDF report export
- Organization dashboards
- Alternative vendor recommendations
- Benchmarking against industry averages

---

## Assignment Notes

This project was built as part of the Credex Web Development Internship Assignment.

Focus areas:

- Product thinking
- Cost optimization
- AI integration
- User experience
- Full-stack engineering
- Shareable reports
- Lead generation workflows