# PlaceOS Backoffice

![PROD](https://github.com/PlaceOS/backoffice/workflows/PROD/badge.svg)
![UAT](https://github.com/PlaceOS/backoffice/workflows/UAT/badge.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/PlaceOS/backoffice/badge/master)](https://www.codefactor.io/repository/github/PlaceOS/backoffice/overview/master)

An Angular 20 admin UI for managing PlaceOS building automation systems. Built with standalone components, zoneless change detection with signals, and PlaceOS backend API integration.

## Tech Stack

- **Framework**: Angular 20 with standalone components and signals
- **Build**: Nx 22 + Vite 7 + @analogjs/vite-plugin-angular
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Styling**: Tailwind CSS 4
- **Backend**: @placeos/ts-client for PlaceOS REST API integration
- **Real-time**: MQTT for dashboard updates

## Setup

1. Install [Node.js](https://nodejs.org/en/download/current/)
2. Run `npm install` in the root folder

## Development

```bash
npm start                    # Dev server at localhost:4200
```

The dev server proxies requests to the configured PlaceOS backend (see `config/proxy.conf.js`).

## Build

```bash
npm run build                # Production build
```

Production builds output to `dist/backoffice/browser`.

## Testing

```bash
npm test                     # Unit tests (Vitest)
npx nx e2e backoffice        # E2E tests (Playwright)
```

## Linting

```bash
npx nx lint backoffice       # ESLint
```

## Project Structure

```
src/app/
├── common/           # Shared utilities and services
├── ui/               # Shared UI components and guards
├── overlays/         # Modal/dialog components
└── [features]/       # Feature modules (systems, domains, drivers,
                      # modules, repositories, triggers, users, zones, etc.)
```

## License

MIT
