# React 19 + TypeScript Checklist

## TypeScript
- [ ] `strict: true` in `tsconfig.json`
- [ ] No `any`, no unnecessary `as` casts, no `@ts-ignore` / `@ts-expect-error` without a comment
- [ ] Props, state, context values and API responses have explicit types
- [ ] Union types / enums / `as const` for fixed values instead of raw strings
- [ ] Event handlers typed (`React.ChangeEvent<HTMLInputElement>` etc.)
- [ ] No unused imports, variables, exports or parameters

## React 19
- [ ] Function components only (class component allowed only as an error boundary)
- [ ] No legacy APIs: `ReactDOM.render`, `defaultProps` on function components, string refs,
      `forwardRef` where `ref` can now be passed as a regular prop
- [ ] App bootstrapped with `createRoot` inside `<StrictMode>`
- [ ] Hooks follow the rules: top level only, complete dependency arrays
- [ ] `useEffect` used only for real side effects, not for deriving state computable during render
- [ ] Effects that subscribe/fetch clean up (abort controller, unsubscribe)
- [ ] Stable, unique `key` on list items (not array index for dynamic lists)
- [ ] `useMemo` / `useCallback` used where they prevent real cost, not everywhere
- [ ] Loading, empty and error states handled for every async UI
- [ ] Error boundary present at app or route level
- [ ] React 19 features used appropriately where helpful (`use`, `useActionState`,
      `useOptimistic`, form actions); not required, but don't flag their absence as an issue
- [ ] No direct DOM manipulation (`document.querySelector`) where a ref or state would do
