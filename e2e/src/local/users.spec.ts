import { APIRequestContext } from '@playwright/test';
import {
    ENGINE_API,
    asList,
    getJson,
    lastWord,
    uniqueName,
    waitForListed,
} from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { UsersPage } from '../pages';
import {
    ApiUser,
    USER_PASSWORD,
    createDomain,
    createGroup,
    createUser,
    fillCodeEditor,
    seededAuthorityId,
    signInAs,
    statusOf,
    uniqueNames,
} from './support/people';

/**
 * Users on the local backend: user stories US-USR-* in
 * `user-stories/users.md`. Each test makes its own users.
 */

interface MetadataBlock {
    name: string;
    details: Record<string, unknown>;
}

const userPath = (id: string) => `${ENGINE_API}/users/${id}`;

/** The metadata blocks of an item, by name */
function metadataOf(
    api: APIRequestContext,
    id: string,
): Promise<Record<string, MetadataBlock>> {
    return getJson(api, `${ENGINE_API}/metadata/${id}`);
}

test.describe('Users on the local backend', () => {
    let users: UsersPage;

    test.beforeEach(async ({ page }) => {
        users = new UsersPage(page);
    });

    test.describe('US-USR-001: View Users List', () => {
        test('AC-USR-001-2: search shows only the matching user', async ({
            api,
            cleanup,
        }) => {
            const match = await createUser(api, cleanup);
            const other = await createUser(api, cleanup);
            // Search comes from Elasticsearch, which indexes a new item late
            for (const user of [match, other]) {
                await waitForListed(
                    api,
                    `${ENGINE_API}/users`,
                    lastWord(user.name),
                    user.id,
                );
            }
            await users.goto();

            // Search for the unique part of the name only
            await users.search(match.name.split(' ').pop() ?? match.name);

            await expect(users.itemLink(match.name)).toBeVisible();
            await expect(users.itemLink(other.name)).toHaveCount(0);
        });

        test('AC-USR-001-3: selecting a user opens their details', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            await waitForListed(
                api,
                `${ENGINE_API}/users`,
                lastWord(user.name),
                user.id,
            );
            await users.goto();
            await users.search(user.name);

            await users.itemLink(user.name).click();

            await expect(page).toHaveURL(
                new RegExp(`#/users/${user.id}/about`),
            );
            await expect(users.itemName).toHaveText(user.name);
        });
    });

    test.describe('US-USR-002: View User Details', () => {
        test('AC-USR-002-1/3/4: shows the email, roles and domain', async ({
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const user = await createUser(api, cleanup, {
                authority_id: domain.id,
                support: true,
            });

            await users.gotoItem(user.id);

            await expect(
                users.tabContent.getByRole('link', { name: user.email }),
            ).toHaveAttribute('href', `mailto:${user.email}`);
            await expect(
                users.tabContent.getByText('PlaceOS Support').locator('..'),
            ).toContainText('Yes');
            await expect(
                users.tabContent.getByText('System Admin').locator('..'),
            ).toContainText('No');
            await expect(
                users.tabContent.getByRole('link', {
                    name: `${domain.name} (${domain.domain})`,
                }),
            ).toHaveAttribute('href', new RegExp(`/domains/${domain.id}`));
        });
    });

    test.describe('US-USR-003: Create New User', () => {
        test('AC-USR-003-3/4/6: a user made in the form is saved with its domain and role', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const { slug } = uniqueNames('e2e new');
            const email = `${slug}@e2e.test`;
            const last_name = slug.split('-').pop() ?? slug;
            // The domain select lists domains from Elasticsearch
            await waitForListed(
                api,
                `${ENGINE_API}/domains`,
                lastWord(domain.name),
                domain.id,
            );
            await users.goto();

            const id = await users.createWith(async () => {
                await users.dialog
                    .getByRole('combobox', { name: 'Domain' })
                    .click();
                await page.getByRole('option', { name: domain.name }).click();
                await users.field('First Name*').fill('Grace');
                await users.field('Last Name*').fill(last_name);
                await users.field('Email*').fill(email);
                await users.field('Password').fill(USER_PASSWORD);
                await users.field('Confirm Password').fill(USER_PASSWORD);
                await users.dialog
                    .getByRole('checkbox', { name: 'PlaceOS Support' })
                    .click();
            });
            cleanup.add(`${userPath(id)}?force_removal=true`);

            const saved = await getJson<ApiUser>(api, userPath(id));
            expect(saved).toMatchObject({
                email,
                authority_id: domain.id,
                support: true,
                sys_admin: false,
            });
            await waitForListed(api, `${ENGINE_API}/users`, last_name, id);
            await users.search(last_name);
            await expect(users.itemLink(last_name)).toBeVisible();
        });

        test('AC-USR-003-5: an email that is in use is refused', async ({
            page,
            api,
            cleanup,
        }) => {
            const existing = await createUser(api, cleanup);
            const authority = await getJson<{ name: string }>(
                api,
                `${ENGINE_API}/domains/${existing.authority_id}`,
            );
            await users.goto();
            await users.openAddModal();
            // The email must be in use in the domain of the new user
            await users.dialog
                .getByRole('combobox', { name: 'Domain' })
                .click();
            await page
                .getByRole('option', { name: authority.name, exact: true })
                .click();
            await users.field('First Name*').fill('Copy');
            await users.field('Last Name*').fill('User');
            await users.field('Email*').fill(existing.email);
            await users.field('Password').fill(USER_PASSWORD);
            await users.field('Confirm Password').fill(USER_PASSWORD);

            await users.saveButton.click();

            await expect(
                users.notification('Failed to save user'),
            ).toBeVisible();
            await expect(users.dialog).toBeVisible();
            const found = asList<ApiUser>(
                await getJson(api, `${ENGINE_API}/users`, {
                    q: existing.email,
                }),
            ).filter((user) => user.email === existing.email);
            expect(found.map((user) => user.id)).toEqual([existing.id]);
        });
    });

    test.describe('US-USR-004: Edit User Details', () => {
        test('AC-USR-004-1/4: a changed name is saved', async ({
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            const last_name = uniqueName('Changed').split(' ').pop() ?? '';
            await users.gotoItem(user.id);
            await users.openEditModal();
            await expect(users.field('Email*')).toHaveValue(user.email);

            await users.field('First Name*').fill('Changed');
            await users.field('Last Name*').fill(last_name);
            await users.saveButton.click();
            await expect(users.dialog).toBeHidden();

            await expect(users.itemName).toHaveText(`Changed ${last_name}`);
            const saved = await getJson<ApiUser>(api, userPath(user.id));
            expect(saved).toMatchObject({
                name: `Changed ${last_name}`,
                first_name: 'Changed',
                last_name,
            });
        });

        test('AC-USR-004-2: the email of a saved user is read-only', async ({
            api,
            cleanup,
        }) => {
            // The API keeps the email of a saved user, so the form does not
            // let the admin change it
            const user = await createUser(api, cleanup);
            await users.gotoItem(user.id);
            await users.openEditModal();

            await expect(users.field('Email*')).toBeDisabled();
        });
    });

    test.describe('US-USR-005: Delete User', () => {
        test('AC-USR-005-2: a deleted user is removed', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            await users.gotoItem(user.id);

            await users.deleteSelected();

            await expect(page).toHaveURL(/#\/users\/-/);
            expect(await statusOf(api, userPath(user.id))).toBe(404);
        });

        test('AC-USR-005-3: a dismissed confirmation keeps the user', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            await users.gotoItem(user.id);
            await users.openDeleteConfirmation();

            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(users.itemName).toHaveText(user.name);
            expect(await statusOf(api, userPath(user.id))).toBe(200);
        });

        test('force delete removes the user for good', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            await users.gotoItem(user.id);
            await users.openActionMenu();
            await page
                .getByRole('menuitem', { name: 'Permanently delete user' })
                .click();
            const removal = page.waitForRequest(
                (req) =>
                    req.method() === 'DELETE' &&
                    req.url().includes(userPath(user.id)),
            );

            await users.acceptButton.click();

            expect(new URL((await removal).url()).search).toContain(
                'force_removal=true',
            );
            await expect(page).toHaveURL(/#\/users\/-/);
            expect(await statusOf(api, userPath(user.id))).toBe(404);
        });
    });

    test.describe('US-USR-006: Bulk Import Users', () => {
        test('AC-USR-006-3/4: users in a CSV file are created', async ({
            page,
            api,
            cleanup,
        }) => {
            const authority_id = await seededAuthorityId(api);
            const rows = [uniqueNames('e2e bulk'), uniqueNames('e2e bulk')];
            const csv = [
                'name,email,authority_id',
                ...rows.map(
                    ({ name, slug }) =>
                        `${name},${slug}@e2e.test,${authority_id}`,
                ),
            ].join('\n');
            // Remove each user that the import makes, also if a step fails
            page.on('response', async (res) => {
                if (
                    res.request().method() !== 'POST' ||
                    !res.url().endsWith(`${ENGINE_API}/users`) ||
                    !res.ok()
                )
                    return;
                const made = (await res.json()) as ApiUser;
                cleanup.add(`${userPath(made.id)}?force_removal=true`);
            });
            await users.goto();
            await page
                .locator('button:has(icon:has-text("playlist_add"))')
                .first()
                .click();

            await users.dialog.locator('input[type="file"]').setInputFiles({
                name: 'users.csv',
                mimeType: 'text/csv',
                buffer: Buffer.from(csv),
            });
            await users.dialog
                .getByRole('button', { name: 'Continue' })
                .click();
            await expect(users.dialog).toContainText('Ready to save');
            await users.dialog
                .getByRole('button', { name: 'Save items' })
                .click();

            await expect(users.dialog).toContainText('2 succeeded, 0 failed');
            for (const { name, slug } of rows) {
                await expect
                    .poll(async () =>
                        asList<ApiUser>(
                            await getJson(api, `${ENGINE_API}/users`, {
                                q: name,
                            }),
                        ).map((user) => user.email),
                    )
                    .toContain(`${slug}@e2e.test`);
            }
        });

        test('AC-USR-006-2: rows with no email are not saved', async ({
            page,
        }) => {
            let posted = 0;
            page.on('request', (req) => {
                if (
                    req.method() === 'POST' &&
                    req.url().endsWith(`${ENGINE_API}/users`)
                )
                    posted++;
            });
            await users.goto();
            await page
                .locator('button:has(icon:has-text("playlist_add"))')
                .first()
                .click();

            await users.dialog.locator('input[type="file"]').setInputFiles({
                name: 'users.csv',
                mimeType: 'text/csv',
                buffer: Buffer.from(`name\n${uniqueName('E2E No Email')}`),
            });
            await users.dialog
                .getByRole('button', { name: 'Continue' })
                .click();

            await expect(users.dialog).toContainText(
                'Row 1: Missing required field "email"',
            );
            await expect(
                users.dialog.getByRole('button', { name: 'Save items' }),
            ).toBeDisabled();
            expect(posted).toBe(0);
        });
    });

    test.describe('US-USR-008: Manage User Roles', () => {
        test('AC-USR-008-2/3: a role given and taken in the form changes what the user can open', async ({
            browser,
            api,
            cleanup,
        }) => {
            test.slow();
            const user = await createUser(api, cleanup);
            const admin_toggle = users.dialog.getByRole('checkbox', {
                name: 'System Admin',
            });
            const setAdmin = async (value: boolean) => {
                await users.gotoItem(user.id);
                await users.openEditModal();
                await admin_toggle.click();
                await expect(admin_toggle).toHaveAttribute(
                    'aria-checked',
                    `${value}`,
                );
                await users.saveButton.click();
                await expect(users.dialog).toBeHidden();
                await expect
                    .poll(
                        async () =>
                            (await getJson<ApiUser>(api, userPath(user.id)))
                                .sys_admin,
                    )
                    .toBe(value);
            };

            await setAdmin(true);
            const as_admin = await signInAs(browser, user.email);
            await as_admin.goto('/#/domains');
            await expect(as_admin.locator('item-sidebar')).toBeVisible();
            await expect(as_admin).toHaveURL(/#\/domains/);
            await as_admin.context().close();

            await setAdmin(false);
            const as_basic = await signInAs(browser, user.email);
            await as_basic.goto('/#/domains');
            await expect(as_basic).toHaveURL(/#\/unauthorised/);
            await as_basic.context().close();
        });
    });

    test.describe('US-USR-009: Manage User Metadata', () => {
        test('AC-USR-009-3: a new metadata block is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            const name = 'e2e_floor';
            await users.gotoItem(user.id, 'metadata');
            await expect(users.tabContent).toContainText(
                'No Metadata blocks found',
            );

            await users.tabContent
                .getByRole('button', { name: 'New Metadata block' })
                .click();
            const block = users.tabContent.locator('[block]').first();
            await block
                .getByRole('button', {
                    name: 'Edit Metadata details',
                    exact: true,
                })
                .click();
            await page.locator('#property-name').fill(name);
            await page.getByRole('button', { name: 'Apply Locally' }).click();
            await block.locator('[header]').click();
            await fillCodeEditor(page, block, '{ "floor": 3 }');
            await block
                .getByRole('button', { name: 'Save', exact: true })
                .click();

            await expect(users.notification(`Saved "${name}"`)).toBeVisible();
            const blocks = await metadataOf(api, user.id);
            expect(blocks[name]?.details).toEqual({ floor: 3 });
        });

        test('AC-USR-009-1/4: an edited metadata block is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            const name = 'e2e_desk';
            await api.put(`${ENGINE_API}/metadata/${user.id}`, {
                data: { name, description: '', details: { desk: 'A1' } },
            });
            await users.gotoItem(user.id, 'metadata');
            const block = users.tabContent
                .locator('[block]')
                .filter({ hasText: name });
            await expect(block).toBeVisible();

            await block.locator('[header]').click();
            await fillCodeEditor(page, block, '{ "desk": "B2" }');
            await block
                .getByRole('button', { name: 'Save', exact: true })
                .click();

            await expect(users.notification(`Saved "${name}"`)).toBeVisible();
            const blocks = await metadataOf(api, user.id);
            expect(blocks[name]?.details).toEqual({ desk: 'B2' });
        });

        test('AC-USR-009-5: a deleted metadata block is removed', async ({
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            const name = 'e2e_badge';
            await api.put(`${ENGINE_API}/metadata/${user.id}`, {
                data: { name, description: '', details: { badge: 7 } },
            });
            await users.gotoItem(user.id, 'metadata');
            const block = users.tabContent
                .locator('[block]')
                .filter({ hasText: name });

            await block
                .getByRole('button', {
                    name: 'Remove Metadata block',
                    exact: true,
                })
                .click();
            await users.acceptButton.click();

            await expect(block).toHaveCount(0);
            expect(Object.keys(await metadataOf(api, user.id))).toEqual([]);
        });
    });

    test.describe('US-USR-012: View User Groups', () => {
        test('AC-USR-012-1/2: the groups tab lists a group and links to it', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            const group = await createGroup(api, cleanup);
            await api.post(`${ENGINE_API}/group_users`, {
                data: { user_id: user.id, group_id: group.id },
            });
            await users.gotoItem(user.id, 'groups');

            await users.tabContent
                .getByRole('link', { name: group.name })
                .click();

            await expect(page).toHaveURL(
                new RegExp(`#/groups/${group.id}/about`),
            );
            await expect(users.itemName).toHaveText(group.name);
        });

        test('a group added on the groups tab is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const user = await createUser(api, cleanup);
            const group = await createGroup(api, cleanup);
            // The group search comes from Elasticsearch
            await waitForListed(
                api,
                `${ENGINE_API}/groups`,
                lastWord(group.name),
                group.id,
            );
            await users.gotoItem(user.id, 'groups');

            await page
                .getByPlaceholder('Search for groups...')
                .fill(group.name);
            await page.getByRole('option', { name: group.name }).click();

            await expect(
                users.tabContent.getByRole('link', { name: group.name }),
            ).toBeVisible();
            const rows = asList<{ group_id: string }>(
                await getJson(api, `${ENGINE_API}/group_users`, {
                    user_id: user.id,
                }),
            );
            expect(rows.map((row) => row.group_id)).toEqual([group.id]);
        });
    });
});
