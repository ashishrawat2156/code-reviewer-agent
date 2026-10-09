# Approved Technology Stack

Edit this file to change what the Review Agent accepts. The agent treats it as the single
source of truth for stack adherence.

## Approved

| Area | Approved | Expected version |
|---|---|---|
| UI library | React | 19.x |
| Language | TypeScript (`strict: true`) | 5.x |
| Components & styling | Material UI (`@mui/material`, `@mui/icons-material`, `@emotion/*`) | 6.x / 7.x |
| State management | React Context API (+ hooks) | built-in |
| Charts | Recharts | 3.x (2.x needs a react-is override on React 19) |
| Routing | React Router (`react-router` / `react-router-dom`) | 6.x / 7.x |

## Allowed supporting libraries

Not part of the core stack, but not violations when used for their purpose:

- **Build & tooling:** Vite, ESLint, Prettier, TypeScript type packages (`@types/*`)
- **Testing:** Vitest or Jest, React Testing Library, `@testing-library/user-event`, jsdom, MSW
- **Forms:** React Hook Form, Yup or Zod (with `@hookform/resolvers`)
- **Dates:** `date-fns`, `dayjs`, `@mui/x-date-pickers`
- **HTTP:** native `fetch` or `axios`
- **MUI extras:** `@mui/x-data-grid`, `@mui/lab`

Any other runtime dependency → report as 🔵 Suggestion asking for justification, unless it
duplicates an approved library (then it's a violation, see below).

## Disallowed alternatives (🔴 Stack violation)

| Area | Not allowed |
|---|---|
| Language | Plain `.js` / `.jsx` source files in `src/`, widespread `any` |
| Styling | Tailwind, Bootstrap, styled-components, Chakra, Ant Design, Semantic UI, plain CSS frameworks |
| State | Redux / Redux Toolkit, Zustand, MobX, Recoil, Jotai |
| Charts | Chart.js / react-chartjs-2, ApexCharts, Highcharts, Nivo, Victory, raw D3 for charts |
| Routing | Reach Router, Wouter, TanStack Router, manual `window.location` navigation |
| Components | Class components (except an error boundary) |

## How the agent checks it

1. `package.json` dependencies and versions.
2. Import statements in `src/**`.
3. File extensions in `src/` (`.ts` / `.tsx` expected).
4. `tsconfig.json` has `"strict": true`.
