---
agent: code-reviewer
description: Apply and verify fixes for findings from the review.
---

Apply the fixes for: ${input:issues:all findings (issues and best practice violations)}

- Use the findings from the review earlier in this chat, or from the latest report in `reviews/`. If neither exists, review the code first and ask before editing.
- Fix the root cause at every location, and search the scope for the same pattern elsewhere.
- Fixes must meet the standards in `.github/review/` (no `any`, inline styles, non-approved libraries, etc.).
- Don't run terminal commands or install/uninstall packages; tell me the exact command instead.
- Verify: run the `problems` tool, re-read changed files, re-check each fixed finding. Mark ✅ Fixed only if verified, otherwise ⚠️ Partially fixed.
- Finish with: finding ID → files changed → what changed, then "Needs your action".
