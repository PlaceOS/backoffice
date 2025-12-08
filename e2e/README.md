# E2E Tests for PlaceOS Backoffice

This directory contains end-to-end tests for the PlaceOS Backoffice application using Playwright.

## Test Coverage

| Metric | Count |
|--------|-------|
| Total Tests | 204 |
| Passing | 201 |
| Skipped | 3 |
| Browsers | Chromium, Firefox, WebKit |

Tests cover 5 main feature areas: Systems, Users, Zones, Domains, and Admin.

## Features

- **Mock Mode (Default)**: Tests run against mock data using `@placeos/ts-client` mock mechanisms
- **Live Mode**: Tests can be configured to run against a live PlaceOS environment
- **User Story Coverage**: Tests are organized by user stories (US-SYS, US-USR, US-ZON, US-DOM, US-ADM)

## Prerequisites

- Node.js 18+
- npm or yarn
- Playwright browsers installed (`npx playwright install`)

## Running Tests

### Quick Start (Mock Mode)

```bash
# Run all E2E tests with mock data
npx nx e2e backoffice
# or
npx nx e2e e2e

# Run tests in specific browser
npx nx e2e backoffice --project=chromium

# Run specific test file
npx nx e2e backoffice --grep "Systems"

# Run tests in headed mode (visible browser)
npx nx e2e backoffice --headed

# Run tests with UI mode
npx nx e2e backoffice --ui

# Run with debug output
DEBUG=pw:api npx nx e2e backoffice
```

### Running Against Live Environment

```bash
# Set environment variables for live testing
USE_MOCK=false API_DOMAIN=placeos-dev.aca.im npx nx e2e backoffice

# Or create an .env file in the e2e directory
cp .env.example .env
# Edit .env with your settings
```

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `USE_MOCK` | `true` | Set to `false` to use live environment |
| `BASE_URL` | `http://localhost:4200` | Base URL for the application |
| `API_DOMAIN` | `localhost` | API domain for live environment |
| `API_PORT` | `4200` | API port for live environment |
| `API_PROTOCOL` | `http` | API protocol (`http` or `https`) |
| `TEST_USER_EMAIL` | `admin@place.tech` | Test user email for live auth |
| `TEST_USER_PASSWORD` | - | Test user password for live auth |

### Using .env File

Create a `.env` file in the `e2e` directory:

```env
USE_MOCK=true
BASE_URL=http://localhost:4200
# For live environment:
# USE_MOCK=false
# API_DOMAIN=placeos-dev.aca.im
# API_PORT=443
# API_PROTOCOL=https
```

## Test Structure

```
e2e/
├── src/
│   ├── config/
│   │   └── test-env.ts       # Environment configuration
│   ├── fixtures/
│   │   └── test-fixtures.ts  # Test utilities and helpers
│   ├── pages/
│   │   ├── base.page.ts      # Base page object
│   │   ├── systems.page.ts   # Systems page object
│   │   ├── users.page.ts     # Users page object
│   │   ├── zones.page.ts     # Zones page object
│   │   ├── domains.page.ts   # Domains page object
│   │   ├── admin.page.ts     # Admin page object
│   │   └── index.ts          # Page exports
│   ├── systems.spec.ts       # Systems tests (US-SYS-001 to US-SYS-012)
│   ├── users.spec.ts         # Users tests (US-USR-001 to US-USR-012)
│   ├── zones.spec.ts         # Zones tests (US-ZON-001 to US-ZON-011)
│   ├── domains.spec.ts       # Domains tests (US-DOM-001 to US-DOM-012)
│   └── admin.spec.ts         # Admin tests (US-ADM-001 to US-ADM-016)
├── playwright.config.ts      # Playwright configuration
├── .env.example              # Example environment file
└── README.md                 # This file
```

## User Stories Covered

### Systems (US-SYS)
- US-SYS-001: View Systems List
- US-SYS-002: Create New System
- US-SYS-003: Edit System Details
- US-SYS-004: Delete System
- US-SYS-005: Bulk Import Systems
- US-SYS-006: Manage System Modules
- US-SYS-007: View System Zones
- US-SYS-008: Manage System Triggers
- US-SYS-009: Manage System Metadata
- US-SYS-010: View System History
- US-SYS-011: Start and Stop System
- US-SYS-012: View System Extensions

### Users (US-USR)
- US-USR-001: View Users List
- US-USR-002: View User Details
- US-USR-003: Create New User
- US-USR-004: Edit User Details
- US-USR-005: Delete User
- US-USR-006: Bulk Import Users
- US-USR-007: Enable/Disable User
- US-USR-008: Manage User Roles
- US-USR-009: Manage User Metadata
- US-USR-010: View User History
- US-USR-011: Filter Users by Domain
- US-USR-012: View User Groups

### Zones (US-ZON)
- US-ZON-001: View Zones List
- US-ZON-002: View Zone Details
- US-ZON-003: Create New Zone
- US-ZON-004: Edit Zone Details
- US-ZON-005: Delete Zone
- US-ZON-006: View Child Zones
- US-ZON-007: View Systems in Zone
- US-ZON-008: Manage Zone Triggers
- US-ZON-009: Manage Zone Metadata
- US-ZON-010: View Zone History
- US-ZON-011: Bulk Import Zones

### Domains (US-DOM)
- US-DOM-001: View Domains List
- US-DOM-002: View Domain Details
- US-DOM-003: Create New Domain
- US-DOM-004: Edit Domain Configuration
- US-DOM-005: Delete Domain
- US-DOM-006: Manage OAuth Applications
- US-DOM-007: Configure OAuth Authentication
- US-DOM-008: Configure SAML Authentication
- US-DOM-009: Configure LDAP Authentication
- US-DOM-010: View Domain Users
- US-DOM-011: View Domain Extensions
- US-DOM-012: Manage Domain Authorization

### Admin (US-ADM)
- US-ADM-001: View Cluster Status
- US-ADM-002: View Cluster Tasks
- US-ADM-003: View System Information
- US-ADM-008: Manage Backoffice Extensions
- US-ADM-009: Manage Tenants
- US-ADM-011: Manage API Keys
- US-ADM-012: Configure Upload Storage
- US-ADM-014: Manage Email Templates (skipped - requires live environment)
- US-ADM-015: Monitor Build Jobs

## Mock Mode Details

When running in mock mode (default), tests use the `@placeos/ts-client` mock mechanisms:

1. **HTTP Mocking**: API calls are intercepted and handled by mock endpoints
2. **WebSocket Mocking**: Real-time updates are simulated
3. **Mock Data**: Pre-defined data from `src/app/mocks/data/`

The mock mode is enabled by setting `localStorage.setItem('mock', 'true')` before page load, which the application checks during initialization.

## Writing New Tests

### Using Page Objects

```typescript
import { test, expect } from '@playwright/test';
import { SystemsPage } from './pages';

test('should create a new system', async ({ page }) => {
    // Set mock mode
    await page.addInitScript(() => {
        localStorage.setItem('mock', 'true');
    });

    const systemsPage = new SystemsPage(page);
    await systemsPage.goto();

    // Zone is required - will auto-select first available zone
    await systemsPage.createSystem({
        name: 'Test System',
        description: 'A test system',
    });

    await systemsPage.expectSystemInList('Test System');
});
```

### Creating Users

```typescript
import { test, expect } from '@playwright/test';
import { UsersPage } from './pages';

test('should create a new user', async ({ page }) => {
    await page.addInitScript(() => {
        localStorage.setItem('mock', 'true');
    });

    const usersPage = new UsersPage(page);
    await usersPage.goto();

    await usersPage.createUser({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        password: 'SecurePassword123!',
    });

    await expect(usersPage.dialog).not.toBeVisible({ timeout: 10000 });
});
```

### Test Conventions

1. Use descriptive test names that reference user stories
2. Use page objects for all page interactions
3. Set mock mode in `beforeEach` for all tests
4. Use `await` for all async operations
5. Add appropriate waits for dynamic content

## Troubleshooting

### Tests Failing in CI

- Ensure `USE_MOCK=true` is set
- Check that the dev server is running and accessible
- Increase timeout values if needed

### Mock Data Not Loading

- Verify mock mode is enabled in localStorage
- Check that mock imports are included in `src/app/mocks/backend/index.ts`

### Flaky Tests

- Add explicit waits for dynamic content
- Use `toBeVisible()` with timeout for assertions
- Consider increasing action/navigation timeouts

## Contributing

1. Create tests following the user story structure
2. Use page objects for reusable interactions
3. Ensure tests pass in mock mode
4. Document any new environment variables
