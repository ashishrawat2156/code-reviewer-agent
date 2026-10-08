---
agent: code-reviewer
description: Review the Analytics Dashboard or Onboarding Wizard code and produce a review report with suggested fixes.
---

Review the code in ${input:scope:src} using the code-reviewer agent workflow.

- Detect the use case (Analytics Dashboard or Employee Onboarding Wizard).
- Use the common checklist plus the matching use-case checklist in `.github/review/`.
- Produce the full report (verdict, score, feature coverage, findings with diffs, what was done well).
- Save it to `reviews/<use-case>-review.md`.
- Do NOT modify any source files.
