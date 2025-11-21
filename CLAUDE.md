# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PlaceOS Angular Backoffice UI - A comprehensive facility management system built with Angular 20, using Nx monorepo tooling. This is the administrative interface for managing PlaceOS systems, zones, drivers, modules, triggers, and users.

## Common Commands

### Development
- `npm start` or `ng serve` - Start dev server (proxies to live system via `config/proxy.conf.js`)
- `ng serve --configuration=production` - Serve with production configuration
- Dev server uses proxy configuration from `config/proxy.conf.js`
- Mock mode can be enabled in `apps/backoffice/src/assets/settings.json` by setting `mock: true`

### Building
- `npm run build` or `ng build` - Build the application (uses production configuration by default)
- `ng build --configuration=development` - Development build with source maps
- `ng build --configuration=staging` - Staging build with source maps
- Build outputs to `dist/apps/backoffice/`
- Build configurations: production (default), staging, development

### Testing
- `npm run test` or `ng test` - Run unit tests with Jest
- `ng test backoffice` - Run tests for specific project
- `npm run e2e` or `ng e2e` - Run end-to-end tests with Cypress
- Tests are configured with Jest using `jest-preset-angular`
- Coverage output goes to `coverage/apps/backoffice/`

### Linting
- `npm run lint` or `ng lint` - Run ESLint on all projects
- `nx workspace-lint` - Check workspace structure
- Uses `@angular-eslint` with TypeScript ESLint

### Nx Commands
- `nx affected:build` - Build only affected projects
- `nx affected:test` - Test only affected projects
- `nx affected:lint` - Lint only affected projects
- `nx dep-graph` - View dependency graph
- `nx format:write` - Format code with Prettier
- `nx format:check` - Check code formatting

### Versioning
- `npm run version` - Apply version from git and run standard-version
- Version is auto-generated from git using `git-describe` in `config/version.js`

## Architecture Overview

### Technology Stack
- **Framework**: Angular 20.0.3 with standalone components and Angular Signals
- **Build System**: Nx 21.2.0 monorepo with Angular CLI
- **UI Framework**: Angular Material 20.0.3 + Tailwind CSS 3.4.4
- **State Management**: Service-based reactive architecture with RxJS + Angular Signals
- **Backend Client**: @placeos/ts-client 4.5.0 for PlaceOS API integration
- **Testing**: Jest 29.7.0 + Cypress 14.4.1
- **Code Editors**: Monaco Editor 0.52.2, SunEditor 2.47.8
- **Terminal**: @xterm/xterm 5.5.0

### Main Application Structure

```
apps/backoffice/src/app/
├── admin/              # System administration and platform settings
├── alert-dashboard/    # MQTT-based real-time alerts and dashboards
├── common/             # Shared services, utilities, and base classes
├── domains/            # OAuth/domain configuration management
├── drivers/            # Device driver management
├── modules/            # PlaceOS module management (instances)
├── repositories/       # Git repository management for drivers
├── systems/            # System configuration (primary feature)
├── triggers/           # Automation trigger/webhook management
├── users/              # User and access management
├── zones/              # Building/floor/zone hierarchy
├── overlays/           # Modal dialogs and overlays
├── ui/                 # Reusable UI components, forms, pipes, guards
├── metrics/            # System metrics and monitoring
└── mocks/              # Mock data for development/testing
```

### Key Architectural Patterns

**1. AsyncHandler Base Class**
- Located in `apps/backoffice/src/app/common/async-handler.class.ts`
- All services and components extend this for lifecycle management
- Provides automatic subscription cleanup, timeout/interval management
- Use `this.subscription()` for observables, `this.timeout()` and `this.interval()` for timing

**2. Resource Actions Pattern**
- Each resource type (systems, zones, drivers, etc.) has standardized CRUD operations
- Defined in `apps/backoffice/src/app/common/actions.ts`
- Interface: `ItemActions<T>` with `query()`, `show()`, `save()`, `remove()`
- Enables consistent UI patterns across all resource types

**3. State Service Pattern**
- Each feature has a dedicated state service (e.g., `SystemStateService`, `ZonesStateService`)
- Services expose observable streams: `items$`, `item$`, `loading$`, `filters$`
- CRUD operations update streams reactively
- Services handle API calls through `@placeos/ts-client`

**4. Modal-Driven Workflows**
- All major operations (create, edit, delete) use Angular Material dialogs
- Generic `ItemModalComponent` handles most create/update flows
- `ConfirmModalComponent` for deletions and confirmations
- Resource selection via `SelectItemModalComponent`

**5. Extension System**
- `ExtensionOutletComponent` allows iframe-based external integrations
- URL templating with resource field substitution
- Authority-based extension configuration
- Extensions defined per-resource-type in settings

### PlaceOS Integration (@placeos/ts-client)

**Authentication:**
- OAuth2 authorization code flow configured in `apps/backoffice/src/app/common/placeos.ts`
- `setupPlace()` initializes API endpoint and authentication
- Current user accessible via `currentUser()` observable

**Core API Operations:**
- `queryX()` - List resources (supports search, pagination, filtering)
- `showX()` - Fetch single resource by ID
- `updateX()` / `addX()` - Create/update resources
- `removeX()` - Delete resources
- Direct API access via `get()`, `post()`, `put()`, `delete()` functions

**Resource Models:**
- PlaceSystem, PlaceZone, PlaceDomain, PlaceDriver, PlaceModule, PlaceUser, PlaceTrigger, PlaceRepository
- All models typed with TypeScript interfaces
- Metadata management for user preferences and custom settings

**Special Operations:**
- System modules: `addSystemModule()`, `removeSystemModule()`
- System triggers: `addSystemTrigger()`, `removeSystemTrigger()`
- Settings queries: `querySystems()` with settings_id parameter
- Real-time subscriptions available for live updates

### State Management

Uses **service-based reactive architecture** with RxJS Observables and Angular Signals:

**Core Services:**
- `SettingsService` - Application configuration, user preferences, theme management
- `ActiveItemService` - Tracks active resource, handles CRUD operations, manages dialogs
- Domain services - Resource-specific state (SystemStateService, DomainStateService, etc.)
- `user-state.ts` - Global user observable using BehaviorSubject

**State Flow:**
```
Component Action
  → Service Method (e.g., SystemStateService.updateSystem())
    → PlaceOS API (@placeos/ts-client)
      → Backend
        → Observable Stream Updates
          → Component (async pipe or subscription)
            → UI Update
```

### Routing and Guards

**Lazy Loaded Modules:**
- All feature modules lazy load via routing
- Each resource type has its own module (AppSystemsModule, AppDomainsModule, etc.)

**Route Guards:**
- `AuthorisedUserGuard` - Requires authenticated user with sys_admin or support role
- `AuthorisedAdminGuard` - Requires sys_admin role
- Guards check user metadata for roles

**Child Routes Pattern:**
Most resources have detail views with child routes:
- `/about` - Basic information
- `/modules` - Associated modules
- `/triggers` - Associated triggers
- `/zones` - Associated zones
- `/metadata` - Custom metadata
- `/extend/:id` - Extension iframe views

### Configuration Files

**Application Settings:**
- `apps/backoffice/src/assets/settings.json` - Runtime application settings
- Configurable: app name, colors, theme, API endpoint, feature flags, extensions
- User preferences stored in PlaceOS metadata (per-user overrides)

**Environments:**
- `apps/backoffice/src/environments/environment.ts` - Development config
- `apps/backoffice/src/environments/environment.prod.ts` - Production config
- File replacement configured in `apps/backoffice/project.json`

**Proxy Configuration:**
- `config/proxy.conf.js` - Dev server proxy to PlaceOS backend
- Proxies `/api`, `/auth`, `/control` routes

**Build Configuration:**
- `apps/backoffice/project.json` - Nx project configuration with build targets
- `angular.json` - Angular CLI workspace config
- `nx.json` - Nx workspace settings (parallel: 1, default branch: master)
- `tsconfig.base.json` - Base TypeScript configuration

### Styling Approach

**Tailwind CSS Primary:**
- Utility-first CSS via Tailwind 3.4.4
- Configuration in `tailwind.config.js`
- Custom theme colors, fonts, and utilities
- Dark mode support via class strategy

**Angular Material:**
- Used for dialogs, overlays, snackbars, spinners
- Prebuilt theme: indigo-pink
- Custom theming in `apps/backoffice/src/styles.css`

**Global Styles:**
- `apps/backoffice/src/styles.css` - Global styles and Tailwind imports
- Component-specific styles in component .css files
- Scoped styles via Angular view encapsulation

### UI Components

**Specialized Editors:**
- Monaco Editor - Code editing for JSON/YAML configs, scripts
- xterm Terminal - System logs, console output, debug information
- SunEditor - Rich text editing for templates and documentation

**Reusable Components (in `ui/`):**
- `simple-table.component` - Data table with filtering and actions
- `item-selection.component` - Multi-select resource picker
- `item-details.component` - Detailed resource information display
- `metadata-display.component` - Dynamic metadata rendering
- `debug-output.component` - Debug information display
- Form components for each resource type (system-form, driver-form, etc.)

### Important Services

**Core Services (in `common/`):**
- `SettingsService` - Global settings and user preferences
- `ActiveItemService` - Active resource state and CRUD coordination
- `PlaceDebugService` - Debug logging with levels
- `HotkeysService` - Keyboard shortcuts
- `LocaleService` - i18n and localization
- `UploadService` - Cloud file uploads (S3, Azure, GCS, OpenStack)
- `GoogleAnalyticsService` - Usage analytics
- `SentryService` - Error tracking (custom ErrorHandler)

### Testing

**Unit Tests:**
- Framework: Jest with `jest-preset-angular`
- Test files: `*.spec.ts` adjacent to source files
- Setup: `apps/backoffice/src/test-setup.ts`
- Mocking: `@ngneat/spectator` for component testing, `ng-mocks` for Angular mocks
- Run single test: `ng test --testPathPattern=path/to/test`

**E2E Tests:**
- Framework: Cypress
- Location: `apps/backoffice-e2e/`
- Configuration: `apps/backoffice-e2e/cypress.config.ts`

### Development Workflow

**Adding a New Resource Type:**
1. Create feature module in `apps/backoffice/src/app/{resource-name}/`
2. Create state service extending `AsyncHandler`
3. Define resource actions in `actions.ts`
4. Create list, detail, and form components
5. Add lazy route to `app-routing.module.ts`
6. Configure route guards for authorization

**Modifying Forms:**
- Forms are in `apps/backoffice/src/app/ui/forms/{resource-type}-form.component.ts`
- Use Angular Reactive Forms pattern
- Custom field components in `apps/backoffice/src/app/ui/custom-fields/`
- Validation handled by form validators

**Working with PlaceOS API:**
- Import functions from `@placeos/ts-client`
- All API calls return Observables
- Handle errors with catchError or error callbacks
- Use `queryX()` for lists, `showX()` for single items, `updateX()` for saves

**Adding New Settings:**
- Runtime settings in `apps/backoffice/src/assets/settings.json`
- Type definitions in `apps/backoffice/src/app/common/settings.ts`
- Access via `SettingsService.get('key')` or `SettingsService.listen('key')`
- User overrides stored in PlaceOS user metadata

### Debugging

**Debug Tools:**
- Browser DevTools for standard debugging
- PlaceDebugService for custom logging with levels
- `debug-output.component` for in-app debug information
- Angular DevTools extension for component inspection
- xterm terminal component for live system logs

**Environment Variables:**
- Set in `apps/backoffice/src/environments/environment.ts`
- `production: boolean` - Toggles debug mode
- `mock: boolean` - Can be set in settings.json for mock data

### PWA Support

- Service worker configured in `apps/backoffice/ngsw-config.json`
- Manifest: `apps/backoffice/src/manifest.webmanifest`
- Offline support with intelligent caching strategies
- App shell architecture for fast loading

### Internationalization

**Supported Languages:**
- French (fr), Arabic (ar), Japanese (ja), Chinese (zh), Spanish (es), Italian (it)
- Locale files likely in assets or managed by LocaleService
- Language selection via SettingsService user preferences

### Key Dependencies

**Production:**
- @placeos/ts-client: PlaceOS API client
- @placeos/cloud-uploads: Cloud storage integration
- rxjs: Reactive programming
- date-fns: Date utilities with timezone support
- marked: Markdown parsing
- mqtt: MQTT client for real-time alerts

**Development:**
- @ngneat/spectator: Testing utilities
- prettier: Code formatting with organize imports plugin
- typescript: 5.8.3
- eslint: Linting with Angular rules

### Additional Notes

- Component prefix: `placeos-`
- Nx parallel execution is set to 1 (sequential)
- Default base branch: `master`
- Repository: https://github.com/PlaceOS/backoffice.git
- License: MIT
- Supports multiple locales
- Service worker support for PWA functionality (production builds)
- Custom localization support via `shared/locales`, **TranslationPipe** and **LocalesService**
- Tailwind is custom themed with CSS variables in `shared/styles/application.scss`
- Use **IconComponent** for icons

## Code styles

- Use snake_case for variables
- Use camelCase for functions
- Use PascalCase for classes, types and interfaces
- Use kebab-case for file names, directories and CSS selectors(id, class, attribute)
- Use CAPS_CASE for constants
