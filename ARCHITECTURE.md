# StackSpend Architecture

## Overview

StackSpend is an AI subscription auditing platform that helps individuals and teams identify unnecessary spending on AI tools and discover optimization opportunities.

The application analyzes tool subscriptions, generates recommendations, calculates potential savings, and produces shareable reports.

---

## Frontend

### Technologies

- Next.js App Router
- React
- Tailwind CSS
- React Hook Form
- Zod Validation

### Responsibilities

- Collect subscription information
- Display recommendations
- Render AI summaries
- Show savings analysis
- Display audit history
- Present shareable reports

---

## Backend

### Technologies

- Next.js Route Handlers

### Responsibilities

- Generate audit summaries
- Store audit reports
- Store lead information
- Generate shareable reports
- Send email reports

---

## Database

### Technologies

- PostgreSQL 16
- Prisma ORM
- Docker

### Tables

#### Audit

Stores:

- Generated report
- AI summary
- Savings calculations
- Report metadata

#### Tool

Stores:

- Tool name
- Subscription plan
- Monthly spend
- Seat count

#### Lead

Stores:

- Email
- Company
- Role

---

## AI Layer

### Provider

OpenRouter

### Model

GPT-4o Mini

### Responsibilities

- Generate executive summaries
- Explain optimization opportunities
- Highlight savings potential

---

## Report Flow

User Input
↓
Audit Engine
↓
Savings Calculation
↓
AI Summary Generation
↓
Database Storage
↓
Public Report URL
↓
Email Delivery

---

## Public Report Architecture

Reports use a generated publicId instead of sequential database IDs.

Example:

/reports/cmcz123abc456

This prevents simple enumeration of reports and creates shareable URLs.

---

## Future Improvements

- Authentication
- Team workspaces
- Usage analytics
- Billing integrations
- Automatic pricing updates
- PDF generation