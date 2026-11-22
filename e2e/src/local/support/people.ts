/**
 * Data helpers for the users, groups and domains specs. Each helper makes
 * its item through the API with a unique name and gives its path to
 * `cleanup`, so the item is removed after the test.
 */
import { APIRequestContext, Browser, Locator, Page } from '@playwright/test';
import {
    ENGINE_API,
    asList,
    createResource,
    getJson,
    uniqueName,
} from '../../../support/api';
import { buildStorageState, mintToken } from '../../../support/auth';
import { APP_URL, BACKEND_URL } from '../../../support/env';
import { Cleanup, expect } from '../../../support/fixtures';

export interface ApiUser {
    id: string;
    name: string;
    first_name?: string;
    last_name?: string;
    email: string;
    authority_id: string;
    sys_admin: boolean;
    support: boolean;
    deleted?: boolean;
    groups?: string[];
}

export interface ApiDomain {
    id: string;
    name: string;
    domain: string;
    description: string;
    config: Record<string, unknown>;
    internals: Record<string, unknown>;
    email_domains: string[];
}

export interface ApiGroup {
    id: string;
    name: string;
    description: string;
    parent_id?: string | null;
    subsystems: string[];
    default_permissions: number;
    authority_id: string;
}

/** Password of the users that the helpers make */
export const USER_PASSWORD = 'E2e-people-pass-1!';

/** A unique name, and a slug of it for emails and host names */
export function uniqueNames(prefix: string): { name: string; slug: string } {
    const name = uniqueName(prefix);
    return { name, slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-') };
}

/** The domain that the admin signs in to. Read it only: other specs use it */
export async function seededAuthorityId(
    api: APIRequestContext,
): Promise<string> {
    const user = await getJson<ApiUser>(api, `${ENGINE_API}/users/current`);
    return user.authority_id;
}

/** Make a user. It is in the seeded domain unless `data` gives a domain */
export async function createUser(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<ApiUser> & { password?: string } = {},
): Promise<ApiUser> {
    const { name, slug } = uniqueNames('E2E User');
    const user = await createResource<ApiUser>(api, `${ENGINE_API}/users`, {
        name,
        // The edit form requires both names
        first_name: 'E2E User',
        last_name: name.split(' ').pop(),
        email: `${slug}@e2e.test`,
        password: USER_PASSWORD,
        authority_id: data.authority_id ?? (await seededAuthorityId(api)),
        ...data,
    });
    // A plain delete can keep the user as a soft deleted row
    cleanup.add(`${ENGINE_API}/users/${user.id}?force_removal=true`);
    return user;
}

/** Make a domain of its own, which a test can change or delete */
export async function createDomain(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<ApiDomain> = {},
): Promise<ApiDomain> {
    const { name, slug } = uniqueNames('E2E Domain');
    const domain = await createResource<ApiDomain>(
        api,
        `${ENGINE_API}/domains`,
        { name, domain: `${slug}.e2e.test`, ...data },
    );
    cleanup.add(`${ENGINE_API}/domains/${domain.id}`);
    return domain;
}

/** Make a group in the seeded domain. The API lists the groups of that domain only */
export async function createGroup(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<ApiGroup> = {},
): Promise<ApiGroup> {
    const group = await createResource<ApiGroup>(api, `${ENGINE_API}/groups`, {
        name: uniqueName('E2E Group'),
        authority_id: await seededAuthorityId(api),
        ...data,
    });
    cleanup.add(`${ENGINE_API}/groups/${group.id}`);
    return group;
}

/**
 * Wait until a search of `path` lists the item `id`. Lists come from
 * Elasticsearch, so a new item shows a moment after the API made it.
 */
export async function waitForListed(
    api: APIRequestContext,
    path: string,
    q: string,
    id: string,
): Promise<void> {
    await expect
        .poll(async () =>
            asList<{ id: string }>(await getJson(api, path, { q })).map(
                (item) => item.id,
            ),
        )
        .toContain(id);
}

/** HTTP status of a GET, to check that an item is gone */
export async function statusOf(
    api: APIRequestContext,
    path: string,
): Promise<number> {
    return (await api.get(path)).status();
}

/**
 * A page signed in as a user that a helper made. The caller closes its
 * context. The token is new, so it holds the roles the user has now.
 */
export async function signInAs(
    browser: Browser,
    email: string,
    password = USER_PASSWORD,
): Promise<Page> {
    const mint = await mintToken(BACKEND_URL, APP_URL, email, password);
    const ctx = await browser.newContext({
        baseURL: APP_URL,
        ignoreHTTPSErrors: true,
        storageState: buildStorageState(mint, APP_URL),
    });
    return ctx.newPage();
}

/**
 * Replace the text of the Monaco editor in `scope`. `insertText` does not
 * fire key events, so the editor does not add closing brackets.
 */
export async function fillCodeEditor(
    page: Page,
    scope: Locator,
    text: string,
): Promise<void> {
    await scope.locator('.monaco-editor .view-lines').first().click();
    // The project emulates Desktop Chrome on Windows, so Monaco takes the
    // Windows keys on every host
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    await page.keyboard.insertText(text);
}
