import { expect, test } from './fixtures/test-fixtures';
import { SystemsPage } from './pages';

/**
 * Systems E2E Tests
 *
 * Tests for user stories US-SYS-001 through US-SYS-012
 */

/** 2.30.08 - Activity Space: 10 modules, 4 zones, no triggers */
const ACTIVITY_SPACE = 'sys-QjJvCH7_dA';
const ACTIVITY_SPACE_NAME = '2.30.08 - Activity Space';

test.describe('Systems', () => {
    let systems: SystemsPage;

    test.beforeEach(async ({ page }) => {
        systems = new SystemsPage(page);
    });

    test.describe('US-SYS-001: View Systems List', () => {
        test('AC-SYS-001-1: lists the systems', async () => {
            await systems.goto();

            await expect(systems.itemLink(ACTIVITY_SPACE_NAME)).toBeVisible();
            await expect(
                systems.itemLink('2.30.09 - Activity Space'),
            ).toBeVisible();
        });

        test('AC-SYS-001-2: search filters the list', async () => {
            await systems.goto();
            await systems.search('2.30.09');

            await expect(
                systems.itemLink('2.30.09 - Activity Space'),
            ).toBeVisible();
            await expect(systems.itemLink(ACTIVITY_SPACE_NAME)).toHaveCount(0);
        });

        test('AC-SYS-001-3: selecting a system opens its details', async ({
            page,
        }) => {
            await systems.goto();
            await systems.itemLink(ACTIVITY_SPACE_NAME).click();

            await expect(page).toHaveURL(
                new RegExp(`#/systems/${ACTIVITY_SPACE}/`),
            );
            await expect(systems.itemName).toHaveText(ACTIVITY_SPACE_NAME);
        });
    });

    test.describe('US-SYS-002: Create New System', () => {
        test('AC-SYS-002-2: required fields are checked', async () => {
            await systems.goto();
            await systems.openAddModal();

            await systems.saveButton.click();

            await expect(systems.dialog).toBeVisible();
            await expect(
                systems.dialog.locator('mat-error').first(),
            ).toBeVisible();
        });

        test('AC-SYS-002-3: saves the system and opens it', async () => {
            await systems.goto();

            await systems.createWith(async () => {
                await systems.selectZone('Tower 2');
                await systems.nameField.fill('Boardroom');
            });

            await expect(systems.itemName).toHaveText('Boardroom');
            await systems.search('Boardroom');
            await expect(systems.itemLink('Boardroom')).toBeVisible();
        });
    });

    test.describe('US-SYS-003: Edit System Details', () => {
        test('AC-SYS-003-1: the edit form holds the current name', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openEditModal();

            await expect(systems.nameField).toHaveValue(ACTIVITY_SPACE_NAME);
        });

        test('AC-SYS-003-3: a renamed system keeps its new name', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openEditModal();
            await systems.nameField.fill('2.30.08 - Quiet Room');
            await systems.saveButton.click();
            await expect(systems.dialog).toBeHidden();

            await expect(systems.itemName).toHaveText('2.30.08 - Quiet Room');
            await page.reload();
            await systems.waitForItemDetails();
            await expect(systems.itemName).toHaveText('2.30.08 - Quiet Room');
        });

        test('AC-SYS-003-4: closing the modal discards changes', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openEditModal();
            await systems.nameField.fill('Not Saved');
            await systems.discardChanges();

            await expect(systems.dialog).toBeHidden();
            await expect(systems.itemName).toHaveText(ACTIVITY_SPACE_NAME);
        });

        test('AC-SYS-003-5: a camera snapshot URL can be edited', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openEditModal();
            const input = systems.dialog.locator('#camera-snap-url');
            await input.fill('https://cam.example.com/old.jpg');
            await input.press('Enter');

            await systems.dialog
                .getByRole('button', {
                    name: 'Edit https://cam.example.com/old.jpg',
                })
                .click();
            const edit_input = systems.dialog.locator('.mat-chip-edit-input');
            await expect(edit_input).toBeFocused();
            await page.keyboard.press('ControlOrMeta+A');
            await page.keyboard.type('https://cam.example.com/new.jpg');
            await page.keyboard.press('Enter');
            await systems.saveButton.click();
            await expect(systems.dialog).toBeHidden();

            await systems.openEditModal();
            const chips = systems.dialog.locator(
                '[aria-label="Camera Snapshot URL List"] mat-chip-row',
            );
            await expect(chips).toHaveCount(1);
            await expect(chips).toContainText(
                'https://cam.example.com/new.jpg',
            );
        });
    });

    test.describe('US-SYS-004: Delete System', () => {
        test('AC-SYS-004-1: asks for confirmation', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openDeleteConfirmation();

            await expect(
                systems.page.locator('confirm-modal h2'),
            ).toContainText('Delete');
        });

        test('AC-SYS-004-2: removes the system from the list', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.deleteSelected();

            await expect(systems.itemLink(ACTIVITY_SPACE_NAME)).toHaveCount(0);
            await expect(
                systems.itemLink('2.30.09 - Activity Space'),
            ).toBeVisible();
        });

        test('AC-SYS-004-3: keeps the system when the confirmation is dismissed', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(systems.itemName).toHaveText(ACTIVITY_SPACE_NAME);
            await expect(systems.itemLink(ACTIVITY_SPACE_NAME)).toBeVisible();
        });
    });

    test.describe('US-SYS-006: Manage System Modules', () => {
        test('AC-SYS-006-1: lists the modules and links to them', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openTab('modules');

            await systems.tabContent
                .getByRole('link', { name: 'KNX BAOS Lighting' })
                .first()
                .click();

            await expect(page).toHaveURL(/#\/modules\/mod-/);
            await expect(systems.itemName).toHaveText('KNX BAOS Lighting');
        });

        test('AC-SYS-006-5: search filters the execute module selector', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE, 'modules');
            // The selector re-renders and closes when the module list loads
            await expect(
                systems.tabContent
                    .getByRole('link', { name: 'KNX BAOS Lighting' })
                    .first(),
            ).toBeVisible();
            await systems.searchExecuteModules('Lighting');

            const options = page
                .locator('.cdk-overlay-pane mat-option')
                .filter({ hasText: /\S/ });
            await expect(
                options.filter({ hasText: /Lighting/i }).first(),
            ).toBeVisible();
            await expect(
                options.filter({ hasNotText: /Lighting/i }),
            ).toHaveCount(0);
        });
    });

    test.describe('US-SYS-007: View System Zones', () => {
        test('AC-SYS-007-1: lists every zone the system is in', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openTab('zones');

            for (const name of [
                'L30 Activity Spaces',
                'Level 30',
                'Tower 2',
                'Place Technology',
            ]) {
                await expect(
                    systems.tabContent.getByRole('link', {
                        name,
                        exact: true,
                    }),
                ).toBeVisible();
            }
        });

        test('AC-SYS-007-2: a zone link opens that zone', async ({ page }) => {
            await systems.gotoItem(ACTIVITY_SPACE, 'zones');

            await systems.tabContent
                .getByRole('link', { name: 'Tower 2' })
                .click();

            await expect(page).toHaveURL(/#\/zones\/zone-Kl0HN~nDwc/);
            await expect(systems.itemName).toHaveText('Tower 2');
        });
    });

    test.describe('US-SYS-008: Manage System Triggers', () => {
        test('AC-SYS-008-1: shows the empty triggers list', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openTab('triggers');

            await expect(systems.tabContent).toContainText(
                'No triggers for selected system',
            );
        });
    });

    test.describe('US-SYS-009: Manage System Metadata', () => {
        test('AC-SYS-009-1: shows the empty metadata list', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openTab('metadata');

            await expect(systems.tabContent).toContainText(
                'No Metadata blocks found',
            );
        });

        test('AC-SYS-009-2: renders the metadata view after a slow load', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                sessionStorage.setItem('PLACEOS.mocks.metadata_delay', '3000');
            });
            await systems.gotoItem(ACTIVITY_SPACE, 'metadata');

            await expect(systems.metadataLoadingSpinner).toBeVisible();
            await expect(systems.metadataLoadingSpinner).toBeHidden({
                timeout: 10000,
            });
            await expect(systems.tabContent).toContainText(
                'No Metadata blocks found',
            );
            await expect(page.getByText(/Error loading metadata/i)).toHaveCount(
                0,
            );
        });
    });

    test.describe('US-SYS-010: View System History', () => {
        test('AC-SYS-010-3: opens the settings history view', async () => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.openTab('history');

            await expect(
                systems.tabContent.getByRole('combobox', {
                    name: 'Select current settings',
                }),
            ).toBeVisible();
        });
    });

    test.describe('US-SYS-011: Start and Stop System', () => {
        test('AC-SYS-011-2: stops the system after confirmation', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.stopButton.click();

            await expect(page.locator('confirm-modal')).toContainText(
                'Stop system?',
            );
            await systems.acceptButton.click();

            await expect(
                systems.notification('Successfully stopped system'),
            ).toBeVisible();
        });

        test('AC-SYS-011-1: starts the system after confirmation', async ({
            page,
        }) => {
            await systems.gotoItem(ACTIVITY_SPACE);
            await systems.startButton.click();

            await expect(page.locator('confirm-modal')).toContainText(
                'Start system?',
            );
            await systems.acceptButton.click();

            await expect(
                systems.notification('Successfully started system'),
            ).toBeVisible();
        });
    });
});
