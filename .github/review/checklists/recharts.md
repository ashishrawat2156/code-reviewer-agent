# Recharts Checklist

Apply only if the project renders charts. If there are no charts, mark "Not applicable".
If charts are built with another library, that's a stack violation (see tech-stack.md).

- [ ] Every chart wrapped in `ResponsiveContainer` whose parent has a defined height
- [ ] Chart data typed (e.g. `interface RevenuePoint { month: string; revenue: number }`)
- [ ] Correct chart type for the data: line → trends over time, bar → category comparison,
      pie → parts of a whole (few slices only)
- [ ] Axes have `dataKey`; numeric axes formatted with `tickFormatter` (currency, thousands, %)
- [ ] `Tooltip` present and formatted; `Legend` only when there is more than one series
- [ ] Colors come from the MUI theme (`theme.palette.*`), not hard-coded hex
- [ ] Data transformations for charts memoised (`useMemo`) and kept out of JSX
- [ ] Empty / loading / error states handled (no blank chart area)
- [ ] Charts are reusable components driven by props, not copy-pasted per chart
- [ ] Charts readable on small screens (font sizes, tick density, `interval` / `minTickGap`)
- [ ] Charts have an accessible text alternative (title/caption or summary) for screen readers
