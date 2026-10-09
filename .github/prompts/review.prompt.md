---
agent: code-reviewer
description: Review a project like a senior developer and produce the comprehensive review report (issues, best practice violations, recommendations, stack and architecture adherence).
---

Review ${input:scope:src} following the code-reviewer agent instructions.

Requirements / user story to check against (optional): ${input:requirements:none}

- Read `.github/review/tech-stack.md`, `.github/review/architecture.md` and the checklists first.
- Write the full review report to `reviews/<project-name>-review.md` using the agent's report structure:
  Executive Summary, Technology Stack Adherence, Architecture Adherence, Identified Issues,
  Best Practice Violations, Recommendations, Requirements Coverage, What Was Done Well.
- Every finding needs a file, the problem, and a suggested fix as code.
- Do NOT change any source files. In chat, give a short senior-dev summary and ask which findings I want fixed.
