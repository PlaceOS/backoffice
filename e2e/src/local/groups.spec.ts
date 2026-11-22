import { APIRequestContext } from '@playwright/test';
import {
    ENGINE_API,
    asList,
    createResource,
    getJson,
    uniqueName,
} from '../../support/api';
import { Cleanup, expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import {
    ApiGroup,
    createGroup,
    createUser,
    statusOf,
    waitForListed,
} from './support/people';

/**
 * Groups on the local backend: user stories US-GRP-* in
 * `user-stories/groups.md`. Each test makes its own groups, users and zones
 * in the seeded domain, as the API lists the groups of that domain only.
 */

interface GroupUser {
    user_id: string;
    group_id: string;
    permissions: number;
}

interface GroupZone {
    zone_id: string;
    group_id: string;
    permissions: number;
    deny: boolean;
}

const GROUPS_API = `${ENGINE_API}/groups`;
const groupPath = (id: string) => `${GROUPS_API}/${id}`;

/** Make a zone that the test can give to a group */
async function createZone(api: APIRequestContext, cleanup: Cleanup) {
    const zone = await createResource<{ id: string; name: string }>(
        api,
        `${ENGINE_API}/zones`,
        { name: uniqueName('E2E Group Zone') },
    );
    cleanup.add(`${ENGINE_API}/zones/${zone.id}`);
    return zone;
}

/** The last word of a name from `uniqueName()`, which no other item has */
const lastWord = (name: string) => name.split(' ').pop() ?? name;

test.describe('Groups on the local backend', () => {
    let groups: FeaturePage;

    test.beforeEach(async ({ page }) => {
        groups = new FeaturePage(page, 'groups');
    });

    test.describe('US-GRP-001: View Groups List', () => {
        test('AC-GRP-001-1: a child group shows under its parent', async ({
            page,
            api,
            cleanup,
        }) => {
            const parent = await createGroup(api, cleanup);
            const child = await createGroup(api, cleanup, {
                parent_id: parent.id,
            });
            // The tree loads one time, so wait for the search index first
            await waitForListed(
                api,
                GROUPS_API,
                lastWord(child.name),
                child.id,
            );
            await groups.goto();

            await expect(groups.itemLink(parent.name)).toBeVisible();
            await expect(groups.itemLink(child.name)).toHaveCount(0);
            await page
                .getByRole('button', { name: `Expand group ${parent.name}` })
                .click();

            await expect(groups.itemLink(child.name)).toBeVisible();
        });

        test('AC-GRP-001-2: search shows only the matching group', async ({
            api,
            cleanup,
        }) => {
            const match = await createGroup(api, cleanup);
            const other = await createGroup(api, cleanup);
            await groups.goto();

            await groups.search(lastWord(match.name));

            await expect(groups.itemLink(match.name)).toBeVisible();
            await expect(groups.itemLink(other.name)).toHaveCount(0);
        });

        test('AC-GRP-001-3: selecting a group opens its details', async ({
            page,
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            await groups.goto();
            await groups.search(lastWord(group.name));

            await groups.itemLink(group.name).click();

            await expect(page).toHaveURL(
                new RegExp(`#/groups/${group.id}/about`),
            );
            await expect(groups.itemName).toHaveText(group.name);
        });
    });

    test.describe('US-GRP-002: View Group Details', () => {
        test('AC-GRP-002-1: about tab shows the parent, subsystems, permissions and description', async ({
            api,
            cleanup,
        }) => {
            const parent = await createGroup(api, cleanup);
            const group = await createGroup(api, cleanup, {
                parent_id: parent.id,
                subsystems: ['e2e-control'],
                default_permissions: 1 | 16,
                description: 'Looks after the meeting room AV',
            });

            await groups.gotoItem(group.id);

            await expect(
                groups.tabContent.getByRole('link', { name: parent.name }),
            ).toHaveAttribute(
                'href',
                new RegExp(`#/groups/${parent.id}/about`),
            );
            await expect(groups.tabContent).toContainText('e2e-control');
            await expect(groups.tabContent).toContainText('Operate');
            await expect(groups.tabContent).toContainText(
                'Looks after the meeting room AV',
            );
        });
    });

    test.describe('US-GRP-003: Create Group', () => {
        test('AC-GRP-003-1: a group made in the form is saved and opened', async ({
            page,
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Group');
            await groups.goto();

            const id = await groups.createWith(async () => {
                await groups.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill(name);
                await groups.dialog
                    .getByRole('textbox', { name: 'Description' })
                    .fill('Guards and access control');
            });
            cleanup.add(groupPath(id));

            await expect(page).toHaveURL(new RegExp(`#/groups/${id}/about`));
            await expect(groups.itemName).toHaveText(name);
            const saved = await getJson<ApiGroup>(api, groupPath(id));
            expect(saved).toMatchObject({
                name,
                description: 'Guards and access control',
            });
        });

        test('AC-GRP-003-2: a group made under a parent gets its parent and subsystems', async ({
            page,
            api,
            cleanup,
        }) => {
            const parent = await createGroup(api, cleanup, {
                subsystems: ['e2e-bookings'],
            });
            await waitForListed(
                api,
                GROUPS_API,
                lastWord(parent.name),
                parent.id,
            );
            const name = uniqueName('E2E Child');
            await groups.goto();

            const id = await groups.createWith(async () => {
                await groups.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill(name);
                await groups.dialog
                    .getByRole('group', { name: 'Parent Group' })
                    .getByRole('combobox')
                    .fill(lastWord(parent.name));
                await page.getByRole('option', { name: parent.name }).click();
            });
            cleanup.add(groupPath(id));

            const saved = await getJson<ApiGroup>(api, groupPath(id));
            expect(saved.parent_id).toBe(parent.id);
            expect(saved.subsystems).toContain('e2e-bookings');
            await expect(
                page.getByRole('button', {
                    name: `Collapse group ${parent.name}`,
                }),
            ).toBeVisible();
            await expect(groups.itemLink(name)).toBeVisible();
        });
    });

    test.describe('US-GRP-004: Edit Group', () => {
        test('AC-GRP-004-1: a renamed group keeps its new name', async ({
            page,
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            const name = uniqueName('E2E Renamed');
            await groups.gotoItem(group.id);
            await groups.openEditModal();

            const field = groups.dialog.getByRole('textbox', { name: 'Name*' });
            await expect(field).toHaveValue(group.name);
            await field.fill(name);
            await groups.saveButton.click();
            await expect(groups.dialog).toBeHidden();

            await page.reload();
            await groups.waitForItemDetails();
            await expect(groups.itemName).toHaveText(name);
            const saved = await getJson<ApiGroup>(api, groupPath(group.id));
            expect(saved.name).toBe(name);
        });
    });

    test.describe('US-GRP-005: Delete Group', () => {
        test('AC-GRP-005-1: a deleted group is removed', async ({
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            await groups.gotoItem(group.id);

            await groups.deleteSelected();

            await expect(groups.itemLink(group.name)).toHaveCount(0);
            expect(await statusOf(api, groupPath(group.id))).toBe(404);
        });
    });

    test.describe('US-GRP-006: Manage Group Users', () => {
        test('AC-GRP-006-1: users tab lists a member with email and permissions', async ({
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            const user = await createUser(api, cleanup);
            await createResource(api, `${ENGINE_API}/group_users`, {
                user_id: user.id,
                group_id: group.id,
                permissions: 1 | 4,
            });

            await groups.gotoItem(group.id, 'users');

            const row = await groups.tableRow(user.name);
            await expect(row.getByRole('link')).toHaveAttribute(
                'href',
                new RegExp(`#/users/${user.id}/about`),
            );
            await expect(row.nth(0)).toContainText(user.email);
            await expect(row.nth(1)).toHaveText(/^\s*Read\s+Update\s*$/);
        });

        test('AC-GRP-006-2: a user added on the users tab gets the default permissions', async ({
            page,
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup, {
                default_permissions: 1,
            });
            const user = await createUser(api, cleanup);
            await groups.gotoItem(group.id, 'users');
            await expect(groups.tabContent).toContainText(
                'No users associated with this group',
            );

            await page
                .getByPlaceholder('Search for users...')
                .fill(lastWord(user.name));
            await page.getByRole('option', { name: user.name }).click();

            const row = await groups.tableRow(user.name);
            await expect(row.nth(1)).toHaveText(/^\s*Read\s*$/);
            const members = asList<GroupUser>(
                await getJson(api, `${ENGINE_API}/group_users`, {
                    group_id: group.id,
                }),
            );
            expect(members).toEqual([
                expect.objectContaining({ user_id: user.id, permissions: 1 }),
            ]);
        });

        test('AC-GRP-006-3: a removed user is no longer a member', async ({
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            const user = await createUser(api, cleanup);
            await createResource(api, `${ENGINE_API}/group_users`, {
                user_id: user.id,
                group_id: group.id,
            });
            await groups.gotoItem(group.id, 'users');

            const row = await groups.tableRow(user.name);
            await row.locator('button:has(icon:has-text("delete"))').click();
            await groups.acceptButton.click();

            await expect(groups.tabContent).toContainText(
                'No users associated with this group',
            );
            const members = asList<GroupUser>(
                await getJson(api, `${ENGINE_API}/group_users`, {
                    group_id: group.id,
                }),
            );
            expect(members).toEqual([]);
        });
    });

    test.describe('US-GRP-007: Manage Group Zones', () => {
        test('AC-GRP-007-1: zones tab lists each zone with its permissions and deny flag', async ({
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            const allowed = await createZone(api, cleanup);
            const denied = await createZone(api, cleanup);
            await createResource(api, `${ENGINE_API}/group_zones`, {
                group_id: group.id,
                zone_id: allowed.id,
                permissions: 1 | 16,
                deny: false,
            });
            await createResource(api, `${ENGINE_API}/group_zones`, {
                group_id: group.id,
                zone_id: denied.id,
                permissions: 0,
                deny: true,
            });

            await groups.gotoItem(group.id, 'zones');

            const allowed_row = await groups.tableRow(allowed.name);
            await expect(allowed_row.nth(1)).toHaveText(
                /^\s*Read\s+Operate\s*$/,
            );
            await expect(allowed_row.nth(2)).toHaveText('No');
            const denied_row = await groups.tableRow(denied.name);
            await expect(denied_row.nth(1)).toHaveText('Default');
            await expect(denied_row.nth(2)).toHaveText('Yes');
        });

        test('a zone added and denied on the zones tab is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const group = await createGroup(api, cleanup);
            const zone = await createZone(api, cleanup);
            await waitForListed(
                api,
                `${ENGINE_API}/zones`,
                lastWord(zone.name),
                zone.id,
            );
            await groups.gotoItem(group.id, 'zones');

            await page
                .getByPlaceholder('Search for zones...')
                .fill(lastWord(zone.name));
            await page.getByRole('option', { name: zone.name }).click();
            const row = await groups.tableRow(zone.name);
            await row.locator('button:has(icon:has-text("edit"))').click();
            const modal = page.locator('group-permissions-modal');
            await modal.getByRole('checkbox', { name: 'Deny' }).click();
            await modal.getByRole('button', { name: 'Save' }).click();

            await expect(row.nth(2)).toHaveText('Yes');
            const access = asList<GroupZone>(
                await getJson(api, `${ENGINE_API}/group_zones`, {
                    group_id: group.id,
                }),
            );
            expect(access).toEqual([
                expect.objectContaining({ zone_id: zone.id, deny: true }),
            ]);
        });
    });
});
