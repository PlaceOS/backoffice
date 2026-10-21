import { test as base, expect, Page } from '@playwright/test';
import { isMockMode } from '../config/test-env';

/**
 * Playwright `test` that switches on the mock backend for every page,
 * unless `USE_MOCK=false`.
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
