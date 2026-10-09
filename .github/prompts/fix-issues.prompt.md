---
agent: code-reviewer
description: Apply fixes for issues found in the review.
---

Apply the fixes for: ${input:issues:all must-fix and should-fix issues}

- Use the issues and suggested fixes from the review earlier in this chat. If there is no review in this chat, review the code first and ask before editing.
- Fix one issue at a time with the smallest correct change; don't touch unrelated code.
- Don't run terminal commands or install/uninstall packages; tell me the exact command instead.
- After editing, run the `problems` tool and fix anything you broke.
- Finish with: issue ID → files changed → what changed, plus anything skipped and why.
