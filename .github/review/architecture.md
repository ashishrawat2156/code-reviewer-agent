# Architectural Guidelines

Edit this file to match your team's standards. Each heading becomes a row in the
"Architecture Adherence" table of the review report.

## 1. Folder structure

```
src/
├── app/ or App.tsx      # app shell, providers
├── components/          # reusable, presentational components
├── pages/               # route-level screens
├── routes/              # route definitions
├── context/             # React contexts + providers
├── hooks/               # custom hooks
├── services/            # API / data access
├── types/               # shared TypeScript types
├── utils/               # pure helpers
├── theme/               # MUI theme
└── main.tsx
```

- Feature-based grouping (`features/<name>/{components,hooks,...}`) is also acceptable if used consistently.
- No business logic in `main.tsx`.

## 2. Separation of concerns

- **UI** (components/pages) renders and handles user events only.
- **State** lives in context/hooks, not scattered in deep components.
- **Data access** lives in `services/`; components never call `fetch`/`axios` directly.
- Pure transformations live in `utils/` and are unit-testable.

## 3. Component design

- Function components, one component per file, file name = component name (PascalCase).
- Components small and focused (guide: < 200 lines). Split when doing more than one job.
- Props typed with an interface/type; no prop drilling deeper than ~2 levels (use context).
- Reusable components are generic and driven by props/config, not copy-pasted.

## 4. State management (Context API)

- One context per domain concern (e.g. `AuthContext`, `DashboardContext`), not one global context.
- Each context exports a Provider and a `useXxx()` hook that throws outside the provider.
- Provider `value` memoised; state updates immutable.

## 5. Routing

- Routes defined in one place (`routes/`), lazy-loaded pages with `Suspense`.
- A 404 / catch-all route and an error boundary/error element.

## 6. Theming & styling

- A single MUI theme in `theme/`, applied with `ThemeProvider` + `CssBaseline`.
- Colors, spacing, typography from the theme; no hard-coded hex/px values in components.

## 7. Types

- Shared domain types in `types/`; API response types defined, not inferred as `any`.
- No duplicate type definitions across files.

## 8. Configuration & environment

- Environment values via `import.meta.env.VITE_*`; no hard-coded URLs or secrets.
- `tsconfig.json` strict mode; ESLint + Prettier configured.

## 9. Naming

- Components `PascalCase`, hooks `useCamelCase`, contexts `XxxContext`, constants `UPPER_SNAKE_CASE`.
- Booleans read as questions: `isLoading`, `hasError`, `canSubmit`.
