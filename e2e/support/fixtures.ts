/**
 * Fixtures for the local-backend specs. Import `test` and `expect` from here.
 *
 * `page` is signed in as the admin (the project's default storageState).
 * Specs about sign-in itself opt out with
 * `test.use({ storageState: { cookies: [], origins: [] } })`.
 */
import { APIRequestContext, Page, test as base } from '@playwright/test';
import { apiFor } from './api';
import { APP_URL, roleFor } from './env';

interface TestFixtures {
    /** A page signed in as the non-admin user */
    staffPage: Page;
}

interface WorkerFixtures {
    /** An API context with an admin bearer, to make and check data */
    api: APIRequestContext;
}

export const test = base.extend<TestFixtures, WorkerFixtures>({
    api: [
        // Playwright requires the object pattern, even with no dependencies
        // eslint-disable-next-line no-empty-pattern
        async ({}, use) => {
            const api = await apiFor('admin');
            await use(api);
            await api.dispose();
        },
        { scope: 'worker' },
    ],

    staffPage: async ({ browser }, use) => {
        const ctx = await browser.newContext({
            baseURL: APP_URL,
            storageState: roleFor('staff').storage_path,
        });
        await use(await ctx.newPage());
        await ctx.close();
    },
});

export { expect } from '@playwright/test';
