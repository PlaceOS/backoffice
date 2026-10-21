import { expect, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Zones E2E Tests
 *
 * Tests for user stories US-ZON-001 through US-ZON-011.
 *
 * The mock zone tree these tests rely on:
 *
 *   Place Technology (org)
 *   └── Tower 2 (building)
 *       ├── Level 30                     zone-LEHeo501Er
 *       │   └── L30 Activity Spaces      zone-iIdF20naW0
 *       └── Level 31                     zone-QjLXbYUxuC
 *           ├── L31 Activity Spaces
 *           ├── L31 Multifunction: 31.22
 *           └── L31 R7 Activity Space
 *   New Zone   (root, no children, no systems)  zone-lmhh_hVfz0
 */

const L30_SPACES = 'zone-iIdF20naW0';
const LEVEL_31 = 'zone-QjLXbYUxuC';
const NEW_ZONE = 'zone-lmhh_hVfz0';

test.describe('Zones', () => {
    let zones: FeaturePage;

    test.beforeEach(async ({ page }) => {
        zones = new FeaturePage(page, 'zones');
    });

    test.describe('US-ZON-001: View Zones List', () => {
        test('AC-ZON-001-1: lists the zones', async () => {
            await zones.goto();

            await expect(zones.itemLink('Place Technology')).toBeVisible();
            await expect(zones.itemLink('Tower 2')).toBeVisible();
        });

        test('AC-ZON-001-3: search filters the list', async () => {
            await zones.goto();
            await zones.search('Level 3');

            await expect(zones.itemLink('Level 30')).toBeVisible();
            await expect(zones.itemLink('Level 31')).toBeVisible();
            await expect(zones.itemLink('Tower 2')).toHaveCount(0);
        });

        test('AC-ZON-001-4: selecting a zone opens its details', async ({
            page,
        }) => {
            await zones.goto();
            await zones.itemLink('New Zone').click();

            await expect(page).toHaveURL(new RegExp(`#/zones/${NEW_ZONE}/`));
            await expect(zones.itemName).toHaveText('New Zone');
        });
    });

    test.describe('US-ZON-002: View Zone Details', () => {
        test('AC-ZON-002-1: shows each tag once', async () => {
            await zones.gotoItem(LEVEL_31);

            await expect(
                zones.itemDetails.getByText('level', { exact: true }),
            ).toHaveCount(1);
        });

        test('AC-ZON-002-2: links to the parent zone', async ({ page }) => {
            await zones.gotoItem(L30_SPACES);

            const parent = zones.tabContent.getByRole('link', {
                name: 'Level 30 (zone-LEHeo501Er)',
            });
            await parent.click();

            await expect(page).toHaveURL(/#\/zones\/zone-LEHeo501Er\/about/);
            await expect(zones.itemName).toHaveText('Level 30');
        });
    });

    test.describe('US-ZON-003: Create New Zone', () => {
        test('AC-ZON-003-2: name is required', async () => {
            await zones.goto();
            await zones.openAddModal();

            await zones.saveButton.click();

            await expect(zones.dialog).toBeVisible();
            await expect(zones.dialog.locator('mat-error')).toBeVisible();
        });

        test('AC-ZON-003-5: saves the zone and opens it', async () => {
            await zones.goto();

            await zones.createWith(async () => {
                await zones.dialog
                    .getByRole('textbox', { name: 'Name*', exact: true })
                    .fill('Level 32');
            });

            await expect(zones.itemName).toHaveText('Level 32');
            await expect(zones.itemLink('Level 32')).toBeVisible();
        });
    });

    test.describe('US-ZON-004: Edit Zone Details', () => {
        test('AC-ZON-004-1: the edit form holds the current name', async () => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openEditModal();

            await expect(
                zones.dialog.getByRole('textbox', {
                    name: 'Name*',
                    exact: true,
                }),
            ).toHaveValue('New Zone');
        });

        test('AC-ZON-004-5: a renamed zone keeps its new name', async ({
            page,
        }) => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill('Basement');
            await zones.saveButton.click();
            await expect(zones.dialog).toBeHidden();

            await expect(zones.itemName).toHaveText('Basement');
            await page.reload();
            await zones.waitForItemDetails();
            await expect(zones.itemName).toHaveText('Basement');
            await expect(zones.itemLink('New Zone')).toHaveCount(0);
        });

        test('AC-ZON-004-6: closing the modal discards changes', async () => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill('Not Saved');
            await zones.discardChanges();

            await expect(zones.dialog).toBeHidden();
            await expect(zones.itemName).toHaveText('New Zone');
        });
    });

    test.describe('US-ZON-005: Delete Zone', () => {
        test('AC-ZON-005-3: removes the zone from the list', async () => {
            await zones.gotoItem(NEW_ZONE);
            await zones.deleteSelected();

            await expect(zones.itemLink('New Zone')).toHaveCount(0);
            await expect(zones.itemLink('Tower 2')).toBeVisible();
        });

        test('AC-ZON-005-4: keeps the zone when the confirmation is dismissed', async ({
            page,
        }) => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(zones.itemName).toHaveText('New Zone');
            await expect(zones.itemLink('New Zone')).toBeVisible();
        });
    });

    test.describe('US-ZON-006: View Child Zones', () => {
        test('AC-ZON-006-1: lists the child zones', async () => {
            await zones.gotoItem(LEVEL_31);
            await zones.openTab('children');

            for (const name of [
                'L31 Activity Spaces',
                'L31 Multifunction: 31.22',
                'L31 R7 Activity Space',
            ]) {
                await expect(
                    zones.tabContent.getByRole('link', { name }),
                ).toBeVisible();
            }
        });
    });

    test.describe('US-ZON-007: View Systems in Zone', () => {
        test('AC-ZON-007-1: lists the systems and links to them', async ({
            page,
        }) => {
            await zones.gotoItem(L30_SPACES);
            await zones.openTab('systems');

            const system = zones.tabContent.getByRole('link', {
                name: '2.30.08 - Activity Space',
            });
            await system.click();

            await expect(page).toHaveURL(/#\/systems\/sys-QjJvCH7_dA/);
            await expect(zones.itemName).toHaveText('2.30.08 - Activity Space');
        });
    });

    test.describe('US-ZON-008: Manage Zone Triggers', () => {
        test('AC-ZON-008-1: shows the empty triggers list', async () => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openTab('triggers');

            await expect(zones.tabContent).toContainText(
                'No triggers for selected zone',
            );
        });
    });

    test.describe('US-ZON-009: Manage Zone Metadata', () => {
        test('AC-ZON-009-1: shows the empty metadata list', async () => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openTab('metadata');

            await expect(zones.tabContent).toContainText(
                'No Metadata blocks found',
            );
        });

        test('AC-ZON-009-2: shows a spinner while metadata loads', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                sessionStorage.setItem('PLACEOS.mocks.metadata_delay', '1000');
            });
            await zones.gotoItem(NEW_ZONE);
            await zones.openTab('metadata');

            await expect(zones.metadataLoadingSpinner).toBeVisible();
            await expect(zones.metadataLoadingSpinner).toBeHidden();
        });
    });

    test.describe('US-ZON-010: View Zone History', () => {
        test('AC-ZON-010-1: opens the settings history view', async () => {
            await zones.gotoItem(NEW_ZONE);
            await zones.openTab('history');

            await expect(
                zones.tabContent.getByRole('combobox', {
                    name: 'Select current settings',
                }),
            ).toBeVisible();
        });
    });
});
