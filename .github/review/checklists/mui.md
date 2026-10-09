# Material UI (MUI) Checklist

- [ ] Single theme created with `createTheme` in `theme/`, applied via `ThemeProvider` + `CssBaseline`
- [ ] Colors, spacing, breakpoints and typography come from the theme (`theme.palette.*`,
      `theme.spacing()`), not hard-coded hex/px
- [ ] `sx` for one-off tweaks; `styled()` for reusable styled components; no inline `style={{}}`
- [ ] No mixing of other styling systems (Tailwind, CSS frameworks) with MUI
- [ ] Layout uses `Grid` / `Stack` / `Box` with responsive breakpoints (`xs`, `sm`, `md`, …)
- [ ] `Grid` API matches the installed MUI version (MUI v7: Grid with `size` prop)
- [ ] Tree-shakable imports; no `import * as Icons from '@mui/icons-material'`
- [ ] MUI components used for their semantics: `Table` for tabular data, `List` for lists,
      `Button` for actions, `Link` for navigation
- [ ] Typography via `Typography` with correct `variant` / `component` for heading hierarchy
- [ ] Feedback components used for async states: `Skeleton` / `CircularProgress`, `Alert`, `Snackbar`
- [ ] Form inputs use `TextField` / `Select` with `label`, `error`, `helperText`
- [ ] Dark/light mode (if present) driven by theme `palette.mode`, not separate CSS
