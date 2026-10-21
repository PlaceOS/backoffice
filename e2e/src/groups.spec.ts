import { Locator, Page } from '@playwright/test';
import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Groups E2E Tests
 *
 * Tests for user stories in `user-stories/groups.md` (US-GRP-*)
 */

/** Authority the ts-client mock signs in to */
const AUTHORITY_ID = 'mock-authority';

const GROUPS = [
    {
        id: 'group-facilities',
        name: 'Facilities',
        description: 'Building and facilities staff',
        authority_id: AUTHORITY_ID,
        subsystems: ['bookings'],
        default_permissions: 1,
    },
    {
        id: 'group-av-technicians',
        name: 'AV Technicians',
        description: 'Maintains the meeting room AV equipment',
        authority_id: AUTHORITY_ID,
        parent_id: 'group-facilities',
        subsystems: ['bookings', 'control'],
        default_permissions: 1 | 16,
    },
    {
        id: 'group-reception',
        name: 'Reception',
        description: 'Front desk and visitor management',
        authority_id: AUTHORITY_ID,
        subsystems: ['visitors'],
        default_permissions: 1,
    },
];

const GROUP_USERS = [
    {
        user_id: 'user-alex-sorafumo',
        group_id: 'group-facilities',
        permissions: 1 | 4,
    },
];

const GROUP_ZONES = [
    {
        group_id: 'group-av-technicians',
        zone_id: 'zone-LEHeo501Er', // Level 30
        permissions: 1 | 16,
        deny: false,
    },
    {
        group_id: 'group-av-technicians',
        zone_id: 'zone-QjLXbYUxuC', // Level 31
        permissions: 0,
        deny: true,
    },
];

/** Type `query` in an item search field and pick `option` from the results */
async function searchAndPick(
    page: Page,
    input: Locator,
    query: string,
    option: string,
): Promise<void> {
    await input.fill(query);
    await page.getByRole('option', { name: option }).click();
}

test.describe('Groups', () => {
    let groups: FeaturePage;

    test.beforeEach(async ({ page }) => {
        await seedMockData(page, 'groups', GROUPS);
        await seedMockData(page, 'group_users', GROUP_USERS);
        await seedMockData(page, 'group_zones', GROUP_ZONES);
        groups = new FeaturePage(page, 'groups');
    });

    test.describe('US-GRP-001: View Groups List', () => {
        test('AC-GRP-001-1: shows child groups under their parent', async ({
            page,
        }) => {
            await groups.goto();

            await expect(groups.itemLink('Facilities')).toBeVisible();
            await expect(groups.itemLink('Reception')).toBeVisible();
            await expect(groups.itemLink('AV Technicians')).toHaveCount(0);

            await page
                .getByRole('button', { name: 'Expand group Facilities' })
                .click();

            await expect(groups.itemLink('AV Technicians')).toBeVisible();
        });

        test('AC-GRP-001-2: search filters the list', async () => {
            await groups.goto();
            await groups.search('Tech');

            await expect(groups.itemLink('AV Technicians')).toBeVisible();
            await expect(groups.itemLink('Facilities')).toHaveCount(0);
            await expect(groups.itemLink('Reception')).toHaveCount(0);
        });

        test('AC-GRP-001-3: selecting a group opens its details', async ({
            page,
        }) => {
            await groups.goto();
            await groups.itemLink('Reception').click();

            await expect(page).toHaveURL(/#\/groups\/group-reception\//);
            await expect(groups.itemName).toHaveText('Reception');
        });
    });

    test.describe('US-GRP-002: View Group Details', () => {
        test('AC-GRP-002-1: about tab shows the parent, subsystems and permissions', async () => {
            await groups.gotoItem('group-av-technicians');

            const parent = groups.tabContent.getByRole('link', {
                name: 'Facilities',
            });
            await expect(parent).toHaveAttribute(
                'href',
                /#\/groups\/group-facilities\/about/,
            );
            await expect(groups.tabContent).toContainText('control');
            await expect(groups.tabContent).toContainText('Operate');
            await expect(groups.tabContent).toContainText(
                'Maintains the meeting room AV equipment',
            );
            // The tree opens the parent of the selected group
            await expect(groups.itemLink('AV Technicians')).toBeVisible();
        });
    });

    test.describe('US-GRP-003: Create Group', () => {
        test('AC-GRP-003-1: saves the group and opens it', async ({ page }) => {
            await groups.goto();

            const id = await groups.createWith(async () => {
                await groups.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill('Security');
                await groups.dialog
                    .getByRole('textbox', { name: 'Description' })
                    .fill('Guards and access control');
            });

            await expect(groups.itemName).toHaveText('Security');
            await expect(groups.tabContent).toContainText(
                'Guards and access control',
            );
            await expect(groups.itemLink('Security')).toBeVisible();

            await page.reload();
            await groups.waitForItemDetails();
            await expect(page).toHaveURL(new RegExp(`#/groups/${id}/about`));
            await expect(groups.itemName).toHaveText('Security');
        });

        test('AC-GRP-003-2: a new group can be placed under a parent', async ({
            page,
        }) => {
            await groups.goto();

            await groups.createWith(async () => {
                await groups.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill('Cleaners');
                await searchAndPick(
                    page,
                    groups.dialog
                        .getByRole('group', { name: 'Parent Group' })
                        .getByRole('combobox'),
                    'Facil',
                    'Facilities',
                );
            });

            await expect(groups.itemName).toHaveText('Cleaners');
            await expect(
                groups.tabContent.getByRole('link', { name: 'Facilities' }),
            ).toBeVisible();
            // The child inherits the subsystems of its parent
            await expect(groups.tabContent).toContainText('bookings');
            await expect(
                page.getByRole('button', { name: 'Collapse group Facilities' }),
            ).toBeVisible();
        });
    });

    test.describe('US-GRP-004: Edit Group', () => {
        test('AC-GRP-004-1: a renamed group keeps its new name', async ({
            page,
        }) => {
            await groups.gotoItem('group-reception');
            await groups.openEditModal();

            const name = groups.dialog.getByRole('textbox', { name: 'Name*' });
            await expect(name).toHaveValue('Reception');
            await name.fill('Front Desk');
            await groups.saveButton.click();
            await expect(groups.dialog).toBeHidden();

            await expect(groups.itemName).toHaveText('Front Desk');
            await page.reload();
            await groups.waitForItemDetails();
            await expect(groups.itemName).toHaveText('Front Desk');
            await expect(groups.itemLink('Front Desk')).toBeVisible();
        });
    });

    test.describe('US-GRP-005: Delete Group', () => {
        test('AC-GRP-005-1: removes the group from the list', async ({
            page,
        }) => {
            await groups.gotoItem('group-reception');
            await groups.deleteSelected();

            await expect(groups.itemLink('Reception')).toHaveCount(0);
            await page.reload();
            await groups.waitForLoad();
            await expect(groups.itemLink('Facilities')).toBeVisible();
            await expect(groups.itemLink('Reception')).toHaveCount(0);
        });
    });

    test.describe('US-GRP-006: Manage Group Users', () => {
        test('AC-GRP-006-1: users tab lists members and their permissions', async () => {
            await groups.gotoItem('group-facilities', 'users');

            const row = await groups.tableRow('Alex Sorafumo');
            await expect(row.getByRole('link')).toHaveAttribute(
                'href',
                /#\/users\/user-alex-sorafumo\/about/,
            );
            await expect(row.nth(0)).toContainText('Alex.Sorafumo@place.tech');
            await expect(row.nth(1)).toHaveText(/^\s*Read\s+Update\s*$/);
            await expect(groups.tabContent).not.toContainText('Jeremy West');
        });

        test('AC-GRP-006-2: adds a user with the default permissions', async ({
            page,
        }) => {
            await groups.gotoItem('group-reception', 'users');
            await expect(groups.tabContent).toContainText(
                'No users associated with this group',
            );

            await searchAndPick(
                page,
                page.getByPlaceholder('Search for users...'),
                'Jeremy',
                'Jeremy West',
            );

            // Reception gives Read to members by default
            const row = await groups.tableRow('Jeremy West');
            await expect(row.nth(1)).toHaveText(/^\s*Read\s*$/);
            await page.reload();
            await groups.waitForItemDetails();
            await expect(groups.tabContent).toContainText('Jeremy West');
        });

        test('AC-GRP-006-3: removes a user from the group', async ({
            page,
        }) => {
            await groups.gotoItem('group-facilities', 'users');

            const row = await groups.tableRow('Alex Sorafumo');
            await row.locator('button:has(icon:has-text("delete"))').click();
            await groups.acceptButton.click();

            await expect(groups.tabContent).toContainText(
                'No users associated with this group',
            );
            await page.reload();
            await groups.waitForItemDetails();
            await expect(groups.tabContent).toContainText(
                'No users associated with this group',
            );
        });
    });

    test.describe('US-GRP-007: Manage Group Zones', () => {
        test('AC-GRP-007-1: zones tab lists zones with their access', async () => {
            await groups.gotoItem('group-av-technicians', 'zones');

            const allowed = await groups.tableRow('Level 30');
            await expect(allowed.nth(1)).toHaveText(/^\s*Read\s+Operate\s*$/);
            await expect(allowed.nth(2)).toHaveText('No');
            const denied = await groups.tableRow('Level 31');
            await expect(denied.nth(1)).toHaveText('Default');
            await expect(denied.nth(2)).toHaveText('Yes');
        });
    });
});
