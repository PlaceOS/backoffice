import { workspaceRoot } from '@nx/devkit';
import { nxE2EPreset } from '@nx/playwright/preset';
import { defineConfig, devices } from '@playwright/test';

/**
 * E2E Test Configuration for PlaceOS Backoffice
 *
 * Environment Variables:
 * - BASE_URL: Base URL for the application (default: http://localhost:4200)
 * - USE_MOCK: Do not set it. This suite refuses USE_MOCK=false: the dev
 *   server proxy then targets the shared dev deployment, and the specs create
 *   and delete data. Use `bun run e2e:local` for a real backend.
 *
 * Usage:
 *   # Run tests with mock data (default)
 *   bun run e2e
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

// Stop before the dev server starts. An old e2e/.env can still set it.
if (process.env['USE_MOCK'] === 'false') {
    throw new Error(
        'USE_MOCK=false is not supported: the mock suite would change data on ' +
            'the shared dev backend. Remove it from e2e/.env, and use ' +
            '`bun run e2e:local` for a real backend.',
    );
}
const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    ...nxE2EPreset(__filename, { testDir: './src' }),

    /* The preset uses 1 worker on CI. Each page has its own mock backend, so
       tests can run in parallel. GitHub runners have 4 vCPUs; keep one free
       for the dev server. */
    workers: process.env['CI'] ? 3 : undefined,

    /* Test timeout - increase for mock mode as it may need longer to initialize */
    timeout: 60000,

    /* Expect timeout for assertions */
    expect: {
        timeout: 10000,
    },

    /* Retry failed tests */
    retries: 1,

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
            testIgnore: ['**/*.mobile.spec.ts', '**/local/**'],
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
            testIgnore: ['**/*.mobile.spec.ts', '**/local/**'],
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
            testIgnore: ['**/*.mobile.spec.ts', '**/local/**'],
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
