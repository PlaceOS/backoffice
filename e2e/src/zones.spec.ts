import { expect, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Zones E2E Tests
 *
 * Tests for user stories US-ZON-001 through US-ZON-011.
 *
 * The mock zone tree (from the user-interfaces mocks) these tests rely on:
 *
 *   PlaceOS Global (org)                 zone-org
 *   ├── Sydney Region                    region-sydney
 *   │   ├── Innovation Hub (building)    bld-01
 *   │   │   ├── Ground Floor             bld-01_lvl-G   (8 rooms)
 *   │   │   ├── Level 1                  bld-01_lvl-1
 *   │   │   ├── Level 2                  bld-01_lvl-2
 *   │   │   └── Parking Level 1          bld-01_lvl-P1  (no children, no rooms)
 *   │   └── ...
 *   └── Melbourne Region                 region-melbourne
 */

const BUILDING = 'bld-01';
const GROUND_FLOOR = 'bld-01_lvl-G';
const LEVEL_1 = 'bld-01_lvl-1';
const PARKING = 'bld-01_lvl-P1';

test.describe('Zones', () => {
    let zones: FeaturePage;

    test.beforeEach(async ({ page }) => {
        zones = new FeaturePage(page, 'zones');
    });

    test.describe('US-ZON-001: View Zones List', () => {
        test('AC-ZON-001-1: lists the zones', async () => {
            await zones.goto();

            // Sorted by name. The list only renders the rows in view
            await expect(zones.itemLink('Creative Campus')).toBeVisible();
            await expect(zones.itemLink('Executive Center')).toBeVisible();
        });

        test('AC-ZON-001-3: search filters the list', async () => {
            await zones.goto();
            await zones.search('Region');

            await expect(zones.itemLink('Sydney Region')).toBeVisible();
            await expect(zones.itemLink('Melbourne Region')).toBeVisible();
            await expect(zones.itemLink('Innovation Hub')).toHaveCount(0);
        });

        test('AC-ZON-001-4: selecting a zone opens its details', async ({
            page,
        }) => {
            await zones.goto();
            await zones.itemLink('Executive Center').click();

            await expect(page).toHaveURL(/#\/zones\/bld-02\//);
            await expect(zones.itemName).toHaveText('Executive Center');
        });
    });

    test.describe('US-ZON-002: View Zone Details', () => {
        test('AC-ZON-002-1: shows each tag once', async () => {
            await zones.gotoItem(LEVEL_1);

            await expect(
                zones.itemDetails.getByText('level', { exact: true }),
            ).toHaveCount(1);
        });

        test('AC-ZON-002-2: links to the parent zone', async ({ page }) => {
            await zones.gotoItem(LEVEL_1);

            const parent = zones.tabContent.getByRole('link', {
                name: 'Innovation Hub (bld-01)',
            });
            await parent.click();

            await expect(page).toHaveURL(/#\/zones\/bld-01\/about/);
            await expect(zones.itemName).toHaveText('Innovation Hub');
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
                    .fill('Atrium');
            });

            await expect(zones.itemName).toHaveText('Atrium');
            await expect(zones.itemLink('Atrium')).toBeVisible();
        });
    });

    test.describe('US-ZON-004: Edit Zone Details', () => {
        test('AC-ZON-004-1: the edit form holds the current name', async () => {
            await zones.gotoItem(BUILDING);
            await zones.openEditModal();

            await expect(
                zones.dialog.getByRole('textbox', {
                    name: 'Name*',
                    exact: true,
                }),
            ).toHaveValue('Innovation Hub');
        });

        test('AC-ZON-004-5: a renamed zone keeps its new name', async ({
            page,
        }) => {
            await zones.gotoItem(PARKING);
            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill('Basement');
            await zones.saveButton.click();
            await expect(zones.dialog).toBeHidden();

            // The heading shows the display name, which did not change
            await page.reload();
            await zones.waitForItemDetails();
            await expect(zones.itemLink('Basement')).toBeVisible();
            await zones.openEditModal();
            await expect(
                zones.dialog.getByRole('textbox', {
                    name: 'Name*',
                    exact: true,
                }),
            ).toHaveValue('Basement');
        });

        test('AC-ZON-004-6: closing the modal discards changes', async () => {
            await zones.gotoItem(BUILDING);
            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill('Not Saved');
            await zones.discardChanges();

            await expect(zones.dialog).toBeHidden();
            await expect(zones.itemName).toHaveText('Innovation Hub');
        });
    });

    test.describe('US-ZON-005: Delete Zone', () => {
        test('AC-ZON-005-3: removes the zone from the list', async () => {
            await zones.gotoItem(PARKING);
            await zones.deleteSelected();
            await zones.search('Parking');

            // The other two buildings with parking keep theirs
            await expect(zones.itemLink('Parking Level 1')).toHaveCount(2);
        });

        test('AC-ZON-005-4: keeps the zone when the confirmation is dismissed', async ({
            page,
        }) => {
            await zones.gotoItem(PARKING);
            await zones.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(zones.itemName).toHaveText('Parking Level 1');
            await zones.search('Parking');
            await expect(zones.itemLink('Parking Level 1')).toHaveCount(3);
        });
    });

    test.describe('US-ZON-006: View Child Zones', () => {
        test('AC-ZON-006-1: lists the child zones', async () => {
            await zones.gotoItem(BUILDING);
            await zones.openTab('children');

            for (const name of [
                'Ground Floor',
                'Level 1',
                'Level 2',
                'Parking Level 1',
            ]) {
                await expect(
                    zones.tabContent.getByRole('link', { name, exact: true }),
                ).toBeVisible();
            }
        });
    });

    test.describe('US-ZON-007: View Systems in Zone', () => {
        test('AC-ZON-007-1: lists the systems and links to them', async ({
            page,
        }) => {
            await zones.gotoItem(GROUND_FLOOR);
            await zones.openTab('systems');

            const system = zones.tabContent.getByRole('link', {
                name: '01.G.01 Sydney Harbour',
            });
            await system.click();

            await expect(page).toHaveURL(/#\/systems\/space-1/);
            await expect(zones.itemName).toHaveText('Sydney Harbour');
        });
    });

    test.describe('US-ZON-008: Manage Zone Triggers', () => {
        test('AC-ZON-008-1: shows the empty triggers list', async () => {
            await zones.gotoItem(PARKING);
            await zones.openTab('triggers');

            await expect(zones.tabContent).toContainText(
                'No triggers for selected zone',
            );
        });
    });

    test.describe('US-ZON-009: Manage Zone Metadata', () => {
        test('AC-ZON-009-1: shows the empty metadata list', async () => {
            await zones.gotoItem(PARKING);
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
            await zones.gotoItem(PARKING);
            await zones.openTab('metadata');

            await expect(zones.metadataLoadingSpinner).toBeVisible();
            await expect(zones.metadataLoadingSpinner).toBeHidden();
        });
    });

    test.describe('US-ZON-010: View Zone History', () => {
        test('AC-ZON-010-1: opens the settings history view', async () => {
            await zones.gotoItem(PARKING);
            await zones.openTab('history');

            await expect(
                zones.tabContent.getByRole('combobox', {
                    name: 'Select current settings',
                }),
            ).toBeVisible();
        });
    });
});
