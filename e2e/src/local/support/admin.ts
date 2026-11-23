/**
 * Helpers for the admin specs on the local backend.
 *
 * Many admin sections show the data of one domain. Specs make their own
 * domain with `createDomain`, so that they never change the seeded one.
 * The control helpers at the end are also used by `triggers.spec.ts`.
 */
import { APIRequestContext, Locator, Page, expect } from '@playwright/test';
import { ENGINE_API, createResource, uniqueName } from '../../../support/api';
import { Cleanup } from '../../../support/fixtures';

export interface Domain {
    id: string;
    name: string;
    domain: string;
    config: Record<string, unknown>;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

/** Make a domain (authority) that only this test uses */
export async function createDomain(
    api: APIRequestContext,
    cleanup: Cleanup,
    config: Record<string, unknown> = {},
): Promise<Domain> {
    const name = uniqueName('E2E Admin Domain');
    const host = `${name.split(' ').pop()}.e2e.example`;
    const domain = await createResource<Domain>(api, `${ENGINE_API}/domains`, {
        name,
        domain: host,
        config,
    });
    cleanup.add(`${ENGINE_API}/domains/${domain.id}`);
    return domain;
}

/** Make a user in a domain */
export async function createUser(
    api: APIRequestContext,
    cleanup: Cleanup,
    domain: Domain,
): Promise<User> {
    const name = uniqueName('E2E Key User');
    const user = await createResource<User>(api, `${ENGINE_API}/users`, {
        authority_id: domain.id,
        name,
        email: `${name.split(' ').pop()}@${domain.domain}`,
    });
    cleanup.add(`${ENGINE_API}/users/${user.id}`);
    return user;
}

/** Pick the domain of an admin section in its domain select */
export async function selectDomain(page: Page, domain: Domain): Promise<void> {
    const select = page.locator('admin-domain-select app-select');
    await select.click();
    await page.getByRole('option', { name: domain.name, exact: true }).click();
    await expect(select).toContainText(domain.name);
}

/** Pick an option of an `app-select` */
export async function choose(
    page: Page,
    select: Locator,
    option: string,
): Promise<void> {
    await select.click();
    await page.getByRole('option', { name: option, exact: true }).click();
}

/**
 * Switch a `settings-toggle`. It renders its state on the next change
 * detection, so `check()` sees no change and fails.
 */
export async function setToggle(toggle: Locator, on: boolean): Promise<void> {
    if ((await toggle.getAttribute('aria-checked')) !== `${on}`) {
        await toggle.click();
    }
    await expect(toggle).toHaveAttribute('aria-checked', `${on}`);
}

/** Confirm the open confirmation modal and wait for it to close */
export async function confirm(page: Page): Promise<void> {
    await page.locator('confirm-modal button[name="accept"]').click();
    await expect(page.locator('confirm-modal')).toHaveCount(0, {
        timeout: 15_000,
    });
}

/**
 * Wait until the open modal takes input. A field filled while the modal opens
 * can lose its value on the next change detection.
 */
export async function waitForModal(dialog: Locator): Promise<void> {
    await dialog.locator('input:visible, textarea:visible').first().click();
}
