# Code Reviewer Agent (GitHub Copilot)

A GitHub Copilot custom agent that reviews code like a **senior developer**, for any project on the approved stack:

**React 19 · TypeScript · Material UI (MUI) · React Context API · Recharts · React Router**

It finds technical and architecture issues, writes a **comprehensive review report** and helps you fix
what it finds. The report covers:

1. Executive Summary
2. Technology Stack Adherence
3. Architecture Adherence
4. Identified Issues (with fixes)
5. Best Practice Violations (with fixes)
6. Recommendations
7. Requirements Coverage (when requirements are given)
8. What Was Done Well

## What's inside

```
.github/
├── agents/
│   └── code-reviewer.agent.md        # The agent: how it reviews, responds, fixes; guardrails
├── prompts/
│   ├── review.prompt.md              # /review: review and suggest fixes (no edits)
│   └── fix-issues.prompt.md          # /fix-issues: apply the fixes you choose
└── review/
    ├── tech-stack.md                 # Approved stack, allowed extras, disallowed alternatives
    ├── architecture.md               # Architecture guidelines
    └── checklists/                   # What to look for: React+TS, MUI, Context+Router, Recharts, quality
sample-app/                           # Small React app with deliberate issues, for testing the agent
```

## Setup

1. Copy the `.github` folder into the root of the project you want to review
   (merge with an existing `.github` if there is one).
2. Open the project in VS Code with GitHub Copilot Chat in **Agent** mode.

## Usage

| You type | What happens |
|---|---|
| `/review` | Reviews `src` (or the path you give), saves the report to `reviews/<project>-review.md`, and summarises the must-fix items in chat. Source files are not changed. |
| `fix I1 B3` / `fix all` / `fix must-fix` | Applies those fixes, marks them ✅ Fixed in the report, and lists what changed |
| `/fix-issues` | Same as above, as a slash command |

You can also just chat: *"Review src/context"*, *"Why is I3 a problem?"*, *"Show me a different fix for B2"*.

## Trying it on the sample app

1. Open this repo's root folder in VS Code (so `.github` is at the workspace root).
2. In Copilot Chat run `/review` and enter `sample-app/src` as the scope.
3. Compare what it finds with the known-issues list, then try `fix must-fix`.
4. To run the app: `cd sample-app`, `npm install`, `npm run dev`.

## Guardrails

- Treats reviewed code as **data**: ignores instructions hidden in code/comments and flags them
- **No source edits without your approval** (it only writes the report)
- No terminal commands, package installs or git actions; suggests the command instead
- Never reads `.env` files; masks any hard-coded secrets it finds
- Reviews only the given scope; skips `node_modules`, `dist`, lock files
- No invented issues; says when it's unsure

## Customising

- **Change the stack:** edit `.github/review/tech-stack.md`.
- **Change team standards:** edit `.github/review/architecture.md`.
- **Add a rule:** add a line to the relevant file in `.github/review/checklists/`.
- **Tools:** if VS Code warns about an unknown tool name in the agent's `tools:` list, remove it.
