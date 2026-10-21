/**
 * Setup project. The `local` project depends on it, so it runs once before
 * the specs: it checks the stack is up, seeds it and writes a storageState
 * per role into `.auth/`.
 *
 * The stack is a precondition, not something Playwright starts. This fails
 * in seconds with what to do, not after a minute of navigation timeouts.
 */
import { request, test as setup } from '@playwright/test';
import * as fs from 'fs';
import { buildStorageState, mintToken } from './auth';
import { APP_URL, AUTH_DIR, BACKEND_URL, RoleName, roleFor } from './env';
import { seed } from './seed';

setup('the local stack is up and seeded', async () => {
    setup.setTimeout(120_000);

    const ctx = await request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        timeout: 10_000,
    });
    const status = await ctx
        .get('/api/engine/v2/')
        .then((res) => res.status())
        .catch((e: Error) => e.message)
        .finally(() => ctx.dispose());
    if (typeof status !== 'number' || status >= 500) {
        throw new Error(
            `The local PlaceOS stack is not reachable at ${BACKEND_URL} (${status}).\n` +
                `Start it with:  e2e/stack/up.sh`,
        );
    }

    for (const line of await seed()) console.log(`  ${line}`);

    fs.mkdirSync(AUTH_DIR, { recursive: true });
    const roles: RoleName[] = ['admin', 'staff'];
    for (const role of roles.map(roleFor)) {
        const mint = await mintToken(
            BACKEND_URL,
            APP_URL,
            role.email,
            role.password,
        );
        fs.writeFileSync(
            role.storage_path,
            JSON.stringify(buildStorageState(mint, APP_URL), null, 2),
        );
    }
});
