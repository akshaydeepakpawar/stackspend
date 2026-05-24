# TESTS.md

# Testing Strategy

StackSpend uses automated tests to validate the correctness of the audit engine.

The audit engine is the most critical business component because it determines:

- Cost optimization recommendations
- Monthly savings calculations
- Annual savings calculations
- Optimized stack detection

The recommendation engine is deterministic and therefore highly testable.

---

# Testing Framework

Framework:

```txt
Vitest
```

Reason:

- Lightweight
- Fast execution
- Simple setup
- Excellent support for JavaScript projects

---

# Running Tests

Install dependencies:

```bash
bun install
```

Run tests:

```bash
bun run test
```

Run linting:

```bash
bun run lint
```

---

# Test Coverage

Current automated tests focus on the audit engine.

File:

```txt
tests/audit-engine.test.js
```

---

## Test 1

### ChatGPT Business Recommendation

Purpose:

Verify that small teams using ChatGPT Business receive a recommendation to downgrade to ChatGPT Plus when appropriate.

Expected:

```txt
Business → Plus
```

Validates:

- Recommendation logic
- Savings calculation

---

## Test 2

### ChatGPT Pro Recommendation

Purpose:

Verify that individual users on ChatGPT Pro receive a recommendation to downgrade to ChatGPT Plus.

Expected:

```txt
Pro → Plus
```

Validates:

- Recommendation engine
- Pricing lookups

---

## Test 3

### Optimized Stack Detection

Purpose:

Verify that users already on cost-efficient plans receive no savings recommendations.

Expected:

```txt
isOptimized = true
```

Validates:

- Optimization detection
- Zero-savings scenarios

---

## Test 4

### Current Monthly Spend Calculation

Purpose:

Verify that total monthly spend is calculated correctly across multiple tools.

Expected:

```txt
Sum(tool monthly spend × seats)
```

Validates:

- Aggregation logic
- Multi-tool audits

---

## Test 5

### Annual Savings Calculation

Purpose:

Verify that annual savings are correctly derived from monthly savings.

Expected:

```txt
annualSavings = monthlySavings × 12
```

Validates:

- Financial calculations
- Savings reporting

---

# Manual Testing

The following user flows were manually verified:

## Audit Generation

Verified:

- Tool selection
- Plan selection
- Seat count handling
- Team size input
- Use case selection

---

## Pricing Updates

Verified:

- Automatic pricing updates
- Dynamic plan switching
- Savings recalculation

---

## Local Storage Persistence

Verified:

- Draft saving
- Draft restoration after refresh
- Start New Audit reset functionality

---

## Public Reports

Verified:

- Report creation
- Public URL generation
- Report rendering
- Audit history retrieval

---

## Email Delivery

Verified:

- Report email generation
- Successful Resend integration
- User email delivery flow

---

## Lead Capture

Verified:

- Form submission
- Database persistence
- Honeypot spam protection

---

# Continuous Integration

GitHub Actions automatically runs:

1. Dependency installation
2. ESLint validation
3. Audit engine tests

Workflow file:

```txt
.github/workflows/ci.yml
```

This ensures code quality before deployment.

---

# Future Testing Improvements

Potential additions:

- API route integration tests
- End-to-end testing with Playwright
- Database integration tests
- Email delivery mocking
- UI component tests
- Performance testing

---

# Summary

The current testing strategy focuses on the most important business-critical component of the application: the audit engine.

This approach ensures recommendation accuracy, reliable savings calculations, and predictable optimization behavior while keeping the testing setup lightweight and easy to maintain.