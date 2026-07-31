# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PlaceOS Backoffice is an Angular 20 admin UI for managing PlaceOS building automation systems. It uses standalone components (no NgModules), zoneless change detection with signals, and integrates with PlaceOS backend APIs.

## Commands

```bash
# Development
bun run start                          # Dev server at localhost:4200 with proxy to placeos-dev.aca.im
bun run build                          # Production build

# Testing
bun run test                           # Unit tests (Vitest)
bun run test:ci                        # Tests sequentially (CI mode)
bunx playwright install --with-deps
bun run e2e                            # Playwright E2E tests

# Linting
bun run lint                           # ESLint
```

## Tech Stack

- **Framework**: Angular 20 with standalone components and signals
- **Build**: Nx 23 + Vite 8 + @analogjs/vite-plugin-angular
- **Testing**: Vitest + Playwright
- **Styling**: Tailwind CSS 3.4 with custom CSS variables
- **Backend**: @placeos/ts-client for PlaceOS REST API integration
- **Real-time**: MQTT for dashboard updates

## Architecture

### Directory Structure

```
src/app/
├── common/           # Shared utilities and services
│   ├── placeos.ts    # PlaceOS API setup (setupPlace())
│   ├── user-state.ts # Current user signals
│   └── async-handler.class.ts # Base class for subscription management
├── ui/               # Shared UI components and guards
│   └── guards/       # AuthorisedUserGuard, AuthorisedAdminGuard
├── overlays/         # Modal/dialog components
└── [features]/       # Feature modules: admin, systems, domains, drivers,
                      # modules, repositories, triggers, users, zones, metrics
```

### Feature Module Pattern

Each feature follows this structure:
- `*.routes.ts` - Lazy-loaded feature routing
- `*-state.service.ts` - Feature state management with signals/observables
- Component files with `standalone: true`

### Key Patterns

**Signals for State**: UI state uses Angular signals instead of zones
```typescript
public readonly loading = signal(false);
```

**AsyncHandler Base Class**: Components extend this for subscription management
```typescript
export class MyComponent extends AsyncHandler {
  ngOnInit() {
    this.timeout('init', () => {...}, 1000);
    this.interval('poll', () => {...}, 5000);
  }
}
```

**PlaceOS Integration**: API setup via `setupPlace()` in `common/placeos.ts`

## Conventions

- **Selectors**: Components use `app-*` prefix (kebab-case), directives use `app*` (camelCase)
- **Formatting**: 4-space tabs, single quotes (Prettier configured)
- **Tailwind**: Uses `#placeos` as important prefix for specificity
- **Dark mode**: Class-based (`darkMode: 'class'`)

## Build Configuration

- Dev proxy configured in `config/proxy.conf.js` (targets placeos-dev.aca.im)
- Version info auto-generated to `src/env/version.ts` on postinstall
- Production builds output to `dist/backoffice/browser`

## Notes

- Angular 20 with standalone components and signals
- TypeScript 5.8.3
- Supports multiple locales (see `app.locales` in settings)
- Service worker support for PWA functionality (production builds)
- Custom localization support via `public/assets/locales`, **TranslationPipe** and **LocalesService**
- Use **IconComponent** for icons

## Code styles

- Use snake_case for variables
- Use camelCase for functions
- Use PascalCase for classes, types and interfaces
- Use kebab-case for file names, directories and CSS selectors(id, class, attribute)
- Use CAPS_CASE for constants
