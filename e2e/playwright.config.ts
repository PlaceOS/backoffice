import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

/**
 * E2E Test Configuration for PlaceOS Backoffice
 *
 * Environment Variables:
 * - BASE_URL: Base URL for the application (default: http://localhost:4200)
 * - USE_MOCK: Set to 'false' to use live environment (default: true)
 * - API_DOMAIN: API domain for live environment
 * - API_PORT: API port for live environment
 * - API_PROTOCOL: API protocol (http/https) for live environment
 *
 * Usage:
 *   # Run tests with mock data (default)
 *   bun run e2e
 *
 *   # Run tests against live environment
 *   USE_MOCK=false API_DOMAIN=placeos-dev.aca.im bunx nx e2e backoffice
 *
 *   # Run specific test file
 *   bunx nx e2e backoffice --grep "Systems"
 */

// Load environment variables from .env file if present
try {
    require('dotenv').config({ path: './e2e/.env' });
} catch {
    // dotenv not available, continue without it
}

// Determine if using mock mode
const useMock = process.env['USE_MOCK'] !== 'false';
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './src' }),

    /* Test timeout - increase for mock mode as it may need longer to initialize */
    timeout: 60000,

    /* Expect timeout for assertions */
    expect: {
        timeout: 10000,
    },

    /* Retry failed tests */
    retries: useMock ? 1 : 2,

    /* Reporter configuration */
    reporter: [['html', { open: 'never' }], ['list']],

    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        /* Screenshot on failure */
        screenshot: 'only-on-failure',
        /* Video on failure */
        video: 'on-first-retry',
        /* Action timeout */
        actionTimeout: 15000,
        /* Navigation timeout */
        navigationTimeout: 30000,
    },

    /* Run your local dev server before starting the tests */
    webServer: {
        command: 'bunx nx run backoffice:serve',
        url: 'http://localhost:4200',
        reuseExistingServer: true,
        cwd: workspaceRoot,
        timeout: 120000,
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
            testIgnore: '**/*.mobile.spec.ts',
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
            testIgnore: '**/*.mobile.spec.ts',
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
            testIgnore: '**/*.mobile.spec.ts',
        },

        // Mobile browsers - use dedicated mobile test files
        {
            name: 'mobile-chrome',
            use: { ...devices['Pixel 5'] },
            testMatch: '**/*.mobile.spec.ts',
        },
        {
            name: 'mobile-safari',
            use: { ...devices['iPhone 12'] },
            testMatch: '**/*.mobile.spec.ts',
        },
    ],
});
