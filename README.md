# Code Reviewer Agent (GitHub Copilot)

A lightweight Copilot custom agent that reviews the code generated for:

1. **Analytics Dashboard**: React 19, TypeScript, MUI, Context API, Recharts, React Router
2. **Employee Onboarding Wizard**: React 19, TypeScript, MUI, React Hook Form, Yup, Context API, React Router

It checks the code against the use-case requirements and React/TS/MUI best practices, then writes a
review report with severity-ranked findings and concrete code fixes (as diffs).

## What's inside

```
.github/
├── agents/
│   └── code-reviewer.agent.md        # The agent: role, workflow, report format, rules
├── prompts/
│   ├── review.prompt.md              # /review: run a review (read-only)
│   └── apply-review-fixes.prompt.md  # /apply-review-fixes: apply Critical + Major fixes
└── review/
    ├── checklist-common.md           # React 19 / TS / MUI / Context / Router / a11y / tests
    ├── checklist-dashboard.md        # Use Case 1 requirements + Recharts checks
    └── checklist-onboarding.md       # Use Case 2 requirements + RHF/Yup/wizard checks
```

## Setup

1. Copy the `.github` folder into the root of the project you want to review
   (it merges with an existing `.github`, so it sits alongside BlazeXLite-style `agents/`, `instructions/`, `prompts/`).
2. Open the project in VS Code with GitHub Copilot Chat enabled.
3. In the Chat panel, pick **code-reviewer** from the agent dropdown, or just use the slash commands below.

## Usage

| Command | What it does |
|---|---|
| `/review` | Reviews `src/` (or a path you enter), saves `reviews/<use-case>-review.md`, and doesn't touch code |
| `/review` → `src/pages/Dashboard` | Reviews only that folder |
| `/apply-review-fixes` | Applies 🔴 Critical and 🟠 Major fixes from the latest report |

You can also chat with the agent directly, e.g.
*"Review only the Yup schemas"* or *"Is the Review & Submit step complete?"*

## Sample output (abridged)

```markdown
# Code Review: Employee Onboarding Wizard
**Verdict:** ⚠️ Approve with changes   **Score:** 7/10

## Feature Coverage
| Requirement | Status | Notes |
|---|---|---|
| Step 4: Allow editing previous steps | ❌ | No edit action on review screen |

## Findings
### 🔴 [C1] Whole form validated on every step
- **File:** `src/pages/OnboardingWizard.tsx` (line ~24)
- **Problem:** A single Yup schema validates all 4 steps, so "Next" on Step 1 fails on empty Step 2 fields.
- **Fix:**
- const methods = useForm({ resolver: yupResolver(onboardingSchema) });
+ const methods = useForm({ resolver: yupResolver(stepSchemas[activeStep]) });
```

## Customising

- **Add a rule:** add a checkbox line to the relevant file in `.github/review/`.
- **New use case:** add `checklist-<name>.md` and reference it in step 2 of `code-reviewer.agent.md`.
- **Tools:** if your VS Code version warns about an unknown tool name in the agent's `tools:` list,
  remove it. The core ones are `search`, `read`, `problems` and `edit`.
