import { test as base, expect, Page } from '@playwright/test';
import { isMockMode } from '../config/test-env';

/**
 * Playwright `test` that switches on the mock backend for every page. Only
 * the local suite sets `USE_MOCK=false`; the mock suite refuses it.
 *
 * Specs import `test` and `expect` from here instead of `@playwright/test`.
 */
export const test = base.extend({
    page: async ({ page }, use) => {
        if (isMockMode()) {
            await page.addInitScript(() => {
                localStorage.setItem('BACKOFFICE.mock', 'true');
            });
        }
        await use(page);
    },
});

export { expect };

/**
 * Replace the rows of a mock data store before the app loads.
 *
 * The mock backend keeps its data in session storage, so the seed is only
 * written once. Changes the app makes survive later reloads in the same test.
 *
 * @param key Session storage key without the `PLACEOS.mocks.` prefix
 */
export async function seedSession(
    page: Page,
    key: string,
    rows: Record<string, unknown>[],
): Promise<void> {
    await page.addInitScript(
        ([key, value]) => {
            if (sessionStorage.getItem(key) === null) {
                sessionStorage.setItem(key, value);
            }
        },
        [`PLACEOS.mocks.${key}`, JSON.stringify(rows)],
    );
}

/**
 * Replace the mock rows behind an engine endpoint made with
 * `generateBasicHandlers`, e.g. `domains` or `triggers`
 *
 * @param endpoint Path under `/api/engine/v2`
 */
export async function seedMockData(
    page: Page,
    endpoint: string,
    rows: Record<string, unknown>[],
): Promise<void> {
    await seedSession(
        page,
        `api_engine_v2_${endpoint.replace(/\//g, '_')}`,
        rows,
    );
}

/** Delay of the mock metadata responses while a test holds them */
const METADATA_HOLD_MS = 60_000;

/**
 * Hold the mock metadata responses until `release` runs, e.g. to check a
 * loading state. Call it before the app loads. It installs a fake page clock
 * that runs at normal speed. The mock waits METADATA_HOLD_MS, and `release`
 * moves the clock past that time, so the held responses are sent.
 *
 * @returns `release`, which sends the held responses
 */
export async function holdMetadata(page: Page): Promise<() => Promise<void>> {
    const key = 'PLACEOS.mocks.metadata_delay';
    await page.clock.install();
    await page.addInitScript(
        ([key, ms]) => sessionStorage.setItem(key, ms),
        [key, String(METADATA_HOLD_MS)],
    );
    return async () => {
        // Later requests get no delay
        await page.evaluate((key) => sessionStorage.removeItem(key), key);
        await page.clock.fastForward(METADATA_HOLD_MS);
    };
}
