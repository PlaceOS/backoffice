# PlaceOS Backoffice

[![Build](https://github.com/PlaceOS/backoffice/actions/workflows/build.yml/badge.svg?branch=develop)](https://github.com/PlaceOS/backoffice/actions/workflows/build.yml)
[![Test](https://github.com/PlaceOS/backoffice/actions/workflows/test.yml/badge.svg?branch=develop)](https://github.com/PlaceOS/backoffice/actions/workflows/test.yml)

The PlaceOS administration interface for managing systems, modules, drivers,
zones, users, domains, repositories, triggers, and cluster settings.

Backoffice is built with Angular 22, standalone components, signals, zoneless
change detection, and the PlaceOS TypeScript client.

## Requirements

- [Bun 1.3.11](https://bun.sh/)
- A PlaceOS backend (the development proxy uses `placeos-dev.aca.im` by default)

## Getting started

```bash
bun install
bun run start
```

Open [http://localhost:4200](http://localhost:4200). `bun install` also generates
the local version metadata used by the application.

To use another PlaceOS backend, update `domain`, `secure`, and `valid_ssl` in
[`config/proxy.conf.js`](config/proxy.conf.js), then restart the development
server.

## Commands

```bash
bun run start      # Start the development server on port 4200
bun run build      # Create a production build
bun run lint       # Run ESLint
bun run test       # Run the Vitest unit tests
bun run test:ci    # Run the unit-test command used in CI
```

Production builds are written to `dist/backoffice/browser`.

Install the Playwright browsers once before running the end-to-end tests:

```bash
bunx playwright install --with-deps
bun run e2e
```

See [`e2e/README.md`](e2e/README.md) for browser selection, live-environment
configuration, and focused test commands.

## Project layout

```text
src/app/
├── common/       Shared services, API setup, signals, and utilities
├── ui/           Reusable components, form controls, pipes, and guards
├── overlays/     Shared dialogs and overlays
├── admin/        Cluster and platform administration
└── <feature>/    Feature routes, components, utilities, and state services

src/tests/        Vitest unit tests
e2e/             Playwright tests and page objects
user-stories/    Feature behaviour and acceptance criteria
config/          Development proxy and build metadata scripts
```

Most feature areas are lazy-loaded from `src/app/app.routes.ts`. The application
uses hash-based routing and enables its service worker only in production.

## Stack

- Angular 22 and Angular Material
- Nx 22 with the Angular application builder
- Vitest and Playwright
- Tailwind CSS 4
- `@placeos/ts-client` for PlaceOS APIs
- MQTT for real-time updates

## License

MIT
