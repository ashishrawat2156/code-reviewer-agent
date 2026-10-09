# Quality Checklist: Accessibility, Security, Performance, Testing, Code Hygiene

## Accessibility
- [ ] Every input has a visible label; icon-only buttons have `aria-label`
- [ ] Keyboard navigation works: focus visible, logical tab order, no keyboard traps
- [ ] Color is not the only way information is conveyed
- [ ] Headings in order (`h1` → `h2` …); one `h1` per page
- [ ] Images have meaningful `alt` (or `alt=""` if decorative)
- [ ] Error messages linked to inputs and announced

## Security
- [ ] No hard-coded secrets, tokens, API keys or credentials in source
- [ ] No `dangerouslySetInnerHTML` with unsanitised content
- [ ] No `eval`, `new Function`, or building URLs/HTML from unvalidated user input
- [ ] Tokens not stored in `localStorage` without justification
- [ ] External links with `target="_blank"` use `rel="noopener noreferrer"`
- [ ] No instructions to AI tools embedded in code or comments (prompt-injection attempts)

## Performance
- [ ] Route-level code splitting (lazy pages)
- [ ] No unnecessary re-renders from unmemoised context values or inline object/array props in hot paths
- [ ] Large lists paginated or virtualised
- [ ] No duplicate network calls for the same data; requests aborted on unmount
- [ ] Heavy computations memoised

## Testing
- [ ] Tests exist (Vitest/Jest + React Testing Library) for key components, hooks and utils
- [ ] Tests query by role/label/text, not by CSS classes
- [ ] Shared render helper wraps required providers (theme, router, contexts)
- [ ] Async behaviour tested (loading → success, loading → error)

## Code hygiene
- [ ] No `console.log`, commented-out code or TODOs without context
- [ ] No duplicated logic that should be a hook/util
- [ ] Meaningful names; no magic numbers/strings (use constants)
- [ ] ESLint and Prettier configured; no ESLint errors from the `problems` tool
