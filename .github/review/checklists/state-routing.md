# State (Context API) & Routing (React Router) Checklist

## Context API
- [ ] Contexts split by concern; no single "god" context
- [ ] `createContext` has a typed default (or `undefined` + guard)
- [ ] Each context exposes a custom hook (`useXxx`) that throws a clear error outside its provider
- [ ] Provider `value` memoised (`useMemo`) to avoid re-rendering all consumers
- [ ] Complex state uses `useReducer` with typed actions instead of many `useState`s
- [ ] State updates immutable (no direct mutation of objects/arrays)
- [ ] Data fetched once at provider level, not duplicated in each consumer
- [ ] Local UI state (open/closed, hover) kept local, not pushed into context
- [ ] Providers composed cleanly near the root (not deeply nested in pages without reason)

## React Router
- [ ] Routes defined centrally (`routes/`) using one approach consistently
      (`createBrowserRouter` + `RouterProvider`, or `<BrowserRouter>` + `<Routes>`)
- [ ] 404 / catch-all route exists
- [ ] Route-level error handling (`errorElement` or error boundary)
- [ ] Pages lazy-loaded with `React.lazy` + `Suspense` (or route `lazy`)
- [ ] Navigation via `<Link>` / `<NavLink>` / `useNavigate`, never `window.location`
- [ ] Route params and search params read with `useParams` / `useSearchParams` and typed/validated
- [ ] Protected routes (if any) implemented via a guard/layout route, not checks scattered in pages
- [ ] Nested routes use `<Outlet />` for shared layouts
