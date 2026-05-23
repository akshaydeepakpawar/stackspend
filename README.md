# StackSpend

StackSpend is an AI subscription auditing platform that helps individuals and teams identify unnecessary spending on AI tools and discover cost-saving opportunities.

Users can enter their current AI subscriptions, receive optimization recommendations, generate AI-powered summaries, and create shareable audit reports.

---

## Features

### AI Subscription Audit

Analyze spending across popular AI tools:

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

### Savings Analysis

Automatically calculates:

- Monthly savings
- Annual savings
- Cost optimization opportunities

### AI Generated Insights

Uses AI to generate executive summaries and explain optimization opportunities.

### Shareable Reports

Every audit receives a unique public URL that can be shared with others.

Example:

```txt
/reports/cmcz123abc456
```

### Audit History

View previously generated reports and revisit recommendations.

### Lead Capture

Collect user details for future communication and report delivery.

### Email Delivery

Send generated audit reports directly to users via email.

---

## Tech Stack

### Frontend

- Next.js 15
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
│   └── report-actions.jsx
│
lib/
│   ├── prisma.js
│   ├── schema.js
│   └── audit-engine.js
```

---

## Local Setup

### Install Dependencies

```bash
npm install
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
npx prisma db push
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Development Server

```bash
npm run dev
```

---

## Audit Workflow

User enters AI subscriptions
↓
Audit engine evaluates spending
↓
Savings calculated
↓
AI summary generated
↓
Audit stored in PostgreSQL
↓
Public report generated
↓
Optional email delivery

---

## Future Improvements

- Authentication
- Team workspaces
- Automatic pricing updates
- Usage-based recommendations
- PDF report generation
- Organization dashboards

---

## Assignment Notes

This project was built as part of the Credex Web Development Internship assignment.

Focus areas:

- Product thinking
- Cost optimization
- AI integration
- User experience
- Full-stack implementation