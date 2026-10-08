---
agent: code-reviewer
description: Apply the Critical and Major fixes from the latest review report.
---

Open the latest report in `reviews/` and apply the fixes for all 🔴 Critical and 🟠 Major findings.

- Change one file at a time, keeping each fix as small as possible.
- Skip any finding whose fix needs a product/design decision; list it as "Needs decision".
- After the edits, run the `problems` tool and fix any new TypeScript/ESLint errors you introduced.
- Finish with a table: Finding ID | File | Change made | Status (Fixed / Skipped / Needs decision).
- Update the report: mark fixed findings with ✅.
