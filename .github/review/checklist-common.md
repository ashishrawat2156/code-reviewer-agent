# Common Review Checklist (React 19 + TypeScript + MUI)

Apply to every review.

## TypeScript
- [ ] `strict: true` in `tsconfig.json`; no `any`, no unnecessary `as` casts, no `@ts-ignore`
- [ ] Props, context values, API responses and form values have explicit types/interfaces in `types/`
- [ ] Union types / enums used for fixed values (status, step ids) instead of raw strings
- [ ] No unused imports, variables or exports

## React 19
- [ ] Function components only; no class components
- [ ] No legacy APIs: `defaultProps` on function components, `forwardRef` where `ref` as a prop now works, `ReactDOM.render`
- [ ] Hooks follow the rules (top level only, complete dependency arrays)
- [ ] `useEffect` only for real side effects — not for deriving state that can be computed during render
- [ ] Stable, unique `key` on list items (not array index when the list can change)
- [ ] `useMemo` / `useCallback` only where they prevent real re-render cost — not everywhere
- [ ] Loading, empty and error states handled for every async UI
- [ ] Error boundary around routed pages (or at app root)

## Context API
- [ ] Each context has a typed default and a custom hook (`useXxx`) that throws if used outside its provider
- [ ] Provider `value` is memoised so consumers don't re-render on every parent render
- [ ] Context isn't a dumping ground — unrelated state split into separate contexts
- [ ] State updates are immutable (no direct mutation of objects/arrays)

## React Router
- [ ] Routes defined in one place (`routes/`), using `createBrowserRouter` or `<Routes>` consistently
- [ ] 404 / catch-all route exists
- [ ] Pages lazy-loaded with `React.lazy` + `Suspense` where sensible
- [ ] Navigation uses `<Link>` / `useNavigate`, never `window.location`

## MUI
- [ ] Theme defined once (`theme/`) and applied via `ThemeProvider` + `CssBaseline`
- [ ] Colors, spacing, typography come from the theme — no hard-coded hex/px in components
- [ ] `sx` for small tweaks; `styled()` for reusable styled components; no inline `style={{}}`
- [ ] Imports are tree-shakable (`@mui/material/Button` or named from `@mui/material`), no `@mui/icons-material` barrel import of everything
- [ ] `Grid` usage matches installed MUI version (Grid v2 `size` prop in MUI v7)
- [ ] Responsive layout uses breakpoints (`xs`, `md`, …) — works on mobile, tablet, desktop

## Accessibility
- [ ] Every input has a label; icon-only buttons have `aria-label`
- [ ] Keyboard navigation works (focus visible, logical tab order)
- [ ] Color is not the only way information is conveyed
- [ ] Headings in order (`h1` → `h2` …) via MUI `Typography` `component`/`variant`

## Project structure & quality
- [ ] Folder structure respected: `components/`, `pages/`, `context/`, `hooks/`, `services/`, `types/`, `utils/`, `theme/`, `routes/`
- [ ] Components small and single-purpose (rough guide: < 200 lines)
- [ ] Data fetching lives in `services/` (or hooks), not inside presentational components
- [ ] No hard-coded secrets / URLs — use `import.meta.env.VITE_*`
- [ ] No `console.log` left behind; no commented-out dead code
- [ ] Meaningful names (`isLoading`, `handleSubmit`, `UserGrowthChart`)

## Testing
- [ ] Tests exist (Vitest/Jest + React Testing Library) for key components and logic
- [ ] Tests query by role/label, not by class names or test ids where avoidable
- [ ] Context providers wrapped in a shared render helper for tests
