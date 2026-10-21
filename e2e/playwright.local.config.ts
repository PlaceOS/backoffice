import { workspaceRoot } from '@nx/devkit';
import { defineConfig, devices } from '@playwright/test';
import { APP_URL, BACKEND_URL, assertLocalOnly, roleFor } from './support/env';

/**
 * E2E tests against the local PlaceOS stack in `e2e/stack`. See
 * `e2e/README.md`.
 *
 *   e2e/stack/up.sh
 *   bun run e2e:local
 */

// Refuse any backend that is not local before a browser launches. The specs
// create and delete real data.
assertLocalOnly(BACKEND_URL, APP_URL);

// The page objects in src/pages build their URLs from these
process.env['BASE_URL'] = APP_URL;
process.env['USE_MOCK'] = 'false';

const CI = !!process.env['CI'];
const backend = new URL(BACKEND_URL);
const output = `${workspaceRoot}/dist/.playwright/e2e-local`;

export default defineConfig({
    outputDir: `${output}/test-output`,
    timeout: 60_000,
    expect: { timeout: 15_000 },
    fullyParallel: true,
    // Specs share one admin and make uniquely named data, so they can run in
    // parallel. Two workers leave room for the stack and the dev server.
    workers: 2,
    forbidOnly: CI,
    retries: CI ? 2 : 0,
    reporter: [
        ['list'],
        ['html', { outputFolder: `${output}/report`, open: 'never' }],
        // e2e/stack/ci-summary.mjs reads the JSON report
        ...(CI
            ? ([
                  ['json', { outputFile: `${output}/results.json` }],
                  ['github'],
              ] as const)
            : []),
    ],
    use: {
        baseURL: APP_URL,
        // The login page is on the stack, which has a self-signed cert
        ignoreHTTPSErrors: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        actionTimeout: 15_000,
        navigationTimeout: 30_000,
    },
    projects: [
        {
            name: 'setup',
            testDir: './support',
            testMatch: /stack\.setup\.ts$/,
        },
        {
            name: 'local',
            testDir: './src/local',
            dependencies: ['setup'],
            use: {
                ...devices['Desktop Chrome'],
                storageState: roleFor('admin').storage_path,
            },
        },
    ],
    webServer: {
        // Not port 4200: a developer's own dev server there proxies to a
        // shared deployment, and must never be reused for this suite.
        command: `bunx nx run backoffice:serve --port=${new URL(APP_URL).port}`,
        url: APP_URL,
        reuseExistingServer: !CI,
        cwd: workspaceRoot,
        timeout: 180_000,
        // Point the dev server proxy (config/proxy.conf.js) at the stack. Its
        // default target is the shared dev deployment.
        env: {
            PLACEOS_DOMAIN: backend.host,
            PLACEOS_INSECURE: String(backend.protocol !== 'https:'),
        },
    },
});
