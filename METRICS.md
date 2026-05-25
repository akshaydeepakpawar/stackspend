# METRICS.md

# Success Metrics

## Overview

The goal of StackSpend is to help users identify unnecessary AI subscription spending and generate actionable optimization recommendations.

Success is measured across acquisition, engagement, conversion, and business outcomes.

---

# Acquisition Metrics

These metrics measure the ability to attract users.

## Website Visitors

Definition:

Total unique visitors to the application.

Target:

```txt
1,000+ visitors/month
```

---

## Audit Starts

Definition:

Users who begin completing the audit form.

Formula:

```txt
Audit Starts / Visitors
```

Target:

```txt
30%+
```

---

## Audit Completion Rate

Definition:

Percentage of users who finish the audit process.

Formula:

```txt
Completed Audits / Audit Starts
```

Target:

```txt
70%+
```

---

# Engagement Metrics

## Reports Generated

Definition:

Number of completed audits.

Target:

```txt
500+ reports/month
```

---

## Public Report Views

Definition:

Views of shared report URLs.

Measures:

- Virality
- Sharing behavior
- Team collaboration

---

## Average Savings Identified

Definition:

Average monthly savings discovered per audit.

Formula:

```txt
Total Savings Identified / Reports Generated
```

Target:

```txt
$50+/month
```

---

# Conversion Metrics

## Email Capture Rate

Definition:

Percentage of completed audits that result in lead capture.

Formula:

```txt
Email Submissions / Completed Audits
```

Target:

```txt
20%+
```

---

## Consultation Requests

Definition:

Users requesting additional optimization assistance.

Formula:

```txt
Consultation Requests / Completed Audits
```

Target:

```txt
5%+
```

---

# Product Metrics

## Optimized Audit Percentage

Definition:

Percentage of audits where no significant savings opportunities are found.

Purpose:

Measures how many users are already cost efficient.

---

## Recommendation Acceptance Rate

Definition:

Percentage of users that act on recommendations.

Future measurement through:

- Follow-up surveys
- User feedback
- Repeat audits

---

## Draft Recovery Rate

Definition:

Percentage of users who continue an audit after refreshing or returning.

Enabled through:

- LocalStorage persistence
- Saved form state

---

# Technical Metrics

## Audit Generation Success Rate

Definition:

Successful audit generations.

Target:

```txt
99%+
```

---

## AI Summary Success Rate

Definition:

Successful AI summary requests.

Target:

```txt
95%+
```

Fallback summaries prevent total failure.

---

## Email Delivery Success Rate

Definition:

Successfully delivered report emails.

Target:

```txt
98%+
```

---

## Test Pass Rate

Definition:

Passing automated tests.

Target:

```txt
100%
```

Measured through:

- Vitest
- GitHub Actions CI

---

# Business Metrics

## Qualified Leads Generated

Definition:

Users providing:

- Email
- Company
- Role

Target:

```txt
50+ leads/month
```

---

## Estimated Customer Savings

Definition:

Total monthly savings identified across all audits.

Formula:

```txt
Sum(all monthly savings)
```

Purpose:

Measures real-world value delivered.

---

## Revenue Opportunities

Future metrics:

- Consultation bookings
- Subscription conversions
- Enterprise audit requests

---

# North Star Metric

## Monthly Savings Identified

Definition:

Total monthly savings discovered for users.

Formula:

```txt
Sum(all audit monthly savings)
```

Why this metric?

- Directly reflects customer value
- Aligns with product mission
- Encourages better recommendations
- Supports business growth

The more money users save, the more value StackSpend creates.

# Instrumentation

Metrics will be collected using:

- Vercel Analytics
- Database audit events
- Lead submissions
- Report generation logs

---

# Pivot Threshold

The product should be reconsidered if:

- Audit completion rate remains below 30%
- Email capture remains below 5%
- Average savings identified falls below $10 per audit
- Fewer than 10% of users view recommendations

These thresholds would indicate insufficient user value and require changes to positioning, onboarding, or recommendation quality.