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

/** Resources that a test made, which the `cleanup` fixture deletes */
export interface Cleanup {
    /** Delete the resource at this API path after the test */
    add(path: string): void;
}

/** Most resources one test can ask `cleanup` to delete */
const CLEANUP_MAX = 100;

interface TestFixtures {
    /** A page signed in as the non-admin user */
    staffPage: Page;
    /**
     * Deletes the API paths given to `add` after the test, last added first,
     * also when the test fails. A path that is already gone (404) is
     * ignored. Other failures fail the test after every delete is tried.
     */
    cleanup: Cleanup;
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

    cleanup: async ({ api }, use) => {
        const paths: string[] = [];
        await use({
            add: (path) => {
                if (paths.length >= CLEANUP_MAX) {
                    throw new Error(
                        `cleanup holds ${CLEANUP_MAX} paths at most`,
                    );
                }
                paths.push(path);
            },
        });
        // Try every delete, then report each failure. A 404 is a record
        // that is already gone, e.g. the test deleted it. Report only the
        // path and the status: the response body and the thrown error can
        // hold the request headers, which include the bearer token.
        const failures: string[] = [];
        for (const path of paths.reverse()) {
            try {
                const res = await api.delete(path);
                if (!res.ok() && res.status() !== 404) {
                    failures.push(`DELETE ${path}: HTTP ${res.status()}`);
                }
            } catch {
                failures.push(`DELETE ${path}: request failed (no response)`);
            }
        }
        if (failures.length) {
            throw new Error(`cleanup failed:\n${failures.join('\n')}`);
        }
    },

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
