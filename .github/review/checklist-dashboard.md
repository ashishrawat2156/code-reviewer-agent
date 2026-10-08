# Use Case 1 — Analytics Dashboard Checklist

**Objective:** Responsive Analytics Dashboard screen for business insights and reporting.
**Stack:** React 19, TypeScript, MUI, React Context API, Recharts, React Router

## Required features (fill the Feature Coverage table from this)

| Requirement | What to verify |
|---|---|
| KPI Card — Total Users | Present, typed value, formatted number |
| KPI Card — Active Users | Present, typed value, formatted number |
| KPI Card — Total Orders | Present, typed value, formatted number |
| KPI Card — Revenue | Present, currency formatted (`Intl.NumberFormat`) |
| Revenue Trend Line Chart | Recharts `LineChart`, labelled axes, tooltip |
| User Growth Bar Chart | Recharts `BarChart`, labelled axes, tooltip |
| Top Products Section | List/table with name + metric, sorted |
| Recent Activity Feed | List with timestamp, user/action, readable date format |
| Responsive layout | Cards and charts reflow on mobile / tablet / desktop |
| Routing | Dashboard reachable via React Router route |

## KPI cards
- [ ] One reusable `KpiCard` component driven by props/config array — not 4 copy-pasted cards
- [ ] Numbers formatted with `Intl.NumberFormat` (thousands separators, currency)
- [ ] Optional trend indicator (▲/▼ %) doesn't rely on color alone
- [ ] Loading skeleton (`Skeleton`) while data loads

## Recharts
- [ ] Every chart wrapped in `ResponsiveContainer` with a parent that has a defined height
- [ ] Chart data typed (e.g. `RevenuePoint { month: string; revenue: number }`)
- [ ] Axes have `dataKey`; Y-axis values formatted (`tickFormatter`)
- [ ] `Tooltip` present; `Legend` only when there is more than one series
- [ ] Chart colors come from the MUI theme (`theme.palette.*`), not hard-coded hex
- [ ] Chart data transformations memoised (`useMemo`) if derived from larger data
- [ ] Empty data state handled (no blank chart area)

## Context / data
- [ ] `DashboardContext` (or similar) exposes typed data + `loading` + `error` + `refresh`
- [ ] Mock data / API calls isolated in `services/` — swappable for real API
- [ ] Data fetched once at provider level, not separately in each card/chart
- [ ] Optional: date-range / filter state lives in context and drives all widgets consistently

## Top Products & Activity Feed
- [ ] Use MUI `Table` / `List` semantics (not divs styled to look like a table)
- [ ] Stable keys (product id / activity id)
- [ ] Long lists capped or scrollable; dates formatted consistently

## Layout
- [ ] MUI `Grid` / `Stack` with breakpoints: KPI cards 1 col (xs) → 2 (sm) → 4 (md+)
- [ ] Charts side by side on desktop, stacked on mobile
- [ ] No horizontal scroll on small screens
