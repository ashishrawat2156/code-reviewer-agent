# Use Case 2 — Employee Onboarding Wizard Checklist

**Objective:** Multi-step Employee Onboarding Wizard for HR teams.
**Stack:** React 19, TypeScript, MUI, React Hook Form, Yup, React Context API, React Router

## Required features (fill the Feature Coverage table from this)

| Requirement | What to verify |
|---|---|
| Step 1 — Full Name | Required, trimmed, sensible min length |
| Step 1 — Email Address | Required, Yup `.email()` |
| Step 1 — Phone Number | Required, pattern/length validation |
| Step 2 — Employee ID | Required, format validated |
| Step 2 — Department | Required, select from list |
| Step 2 — Designation | Required |
| Step 2 — Date of Joining | Required, valid date, sensible range |
| Step 3 — Laptop Selection | Selection required |
| Step 3 — Monitor Selection | Selection |
| Step 3 — Additional Accessories | Multi-select / checkboxes |
| Step 4 — Display all entered information | Review screen shows every field from steps 1–3 |
| Step 4 — Allow editing previous steps | "Edit" per section jumps to that step with data preserved |
| Step 4 — Submit onboarding request | Submit with loading state, success + error feedback |
| Routing | Wizard reachable via React Router; success page/route after submit |

## Wizard structure
- [ ] MUI `Stepper` shows current step and completed steps
- [ ] Steps defined as a typed config array (id, label, component, schema) — not a big `if/else`
- [ ] Each step is its own component (`PersonalInfoStep`, `EmploymentStep`, `EquipmentStep`, `ReviewStep`)
- [ ] Back / Next buttons; Next disabled or blocked until the current step is valid
- [ ] Data persists when moving back and forth between steps

## React Hook Form + Yup
- [ ] `yupResolver` used; **one Yup schema per step** so only the current step is validated
- [ ] Form value types inferred from schema (`yup.InferType<typeof schema>`) or matching interfaces
- [ ] MUI inputs wired with `Controller` (or `register` with correct `inputRef`) — no uncontrolled/controlled warnings
- [ ] Errors shown via `error` + `helperText` on MUI fields
- [ ] `defaultValues` provided from context so re-visiting a step pre-fills fields
- [ ] Validation mode sensible (`onBlur` / `onTouched`), not every keystroke spamming errors
- [ ] `handleSubmit` used — no manual reading of DOM values

## Context
- [ ] `OnboardingContext` holds typed form data for all steps + `activeStep` + `goToStep` / `updateStep` / `reset`
- [ ] Step components write to context only on valid "Next", not on every keystroke
- [ ] Context reset after successful submit
- [ ] Optional: draft saved to `sessionStorage` so refresh doesn't lose progress

## Review & Submit
- [ ] Review screen reads from context and formats values (dates, selected equipment names, not ids)
- [ ] Each section has an Edit action that navigates to the right step
- [ ] Submit button disabled while submitting; double submit prevented
- [ ] Submit call isolated in `services/`; errors caught and shown (`Alert` / `Snackbar`)
- [ ] Success state/confirmation shown after submit

## Accessibility
- [ ] Focus moves to the step heading (or first field) when changing step
- [ ] Error messages linked to inputs (MUI `helperText` does this when `error` is set)
- [ ] Required fields marked (`required` prop)
