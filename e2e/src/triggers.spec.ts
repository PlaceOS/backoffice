import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Triggers E2E Tests
 *
 * Tests for user stories in `user-stories/triggers.md` (US-TRG-*)
 */

const TRIGGERS = [
    {
        id: 'trigger-occupancy',
        name: 'Occupancy Alert',
        description: 'Turns the lights on when people arrive',
        conditions: { comparisons: [], time_dependents: [] },
        actions: { functions: [], mailers: [] },
    },
    {
        id: 'trigger-after-hours',
        name: 'After Hours Shutdown',
        description: 'Turns displays off at night',
        conditions: { comparisons: [], time_dependents: [] },
        actions: { functions: [], mailers: [] },
    },
];

test.describe('Triggers', () => {
    let triggers: FeaturePage;

    test.beforeEach(async ({ page }) => {
        await seedMockData(page, 'triggers', TRIGGERS);
        triggers = new FeaturePage(page, 'triggers');
    });

    test.describe('US-TRG-001: View Triggers List', () => {
        test('AC-TRG-001-1: lists every trigger', async () => {
            await triggers.goto();

            await expect(triggers.itemLink('Occupancy Alert')).toBeVisible();
            await expect(
                triggers.itemLink('After Hours Shutdown'),
            ).toBeVisible();
        });

        test('AC-TRG-001-2: search filters the list', async () => {
            await triggers.goto();
            await triggers.search('After');

            await expect(
                triggers.itemLink('After Hours Shutdown'),
            ).toBeVisible();
            await expect(triggers.itemLink('Occupancy Alert')).toHaveCount(0);
        });

        test('AC-TRG-001-3: selecting a trigger opens its details', async ({
            page,
        }) => {
            await triggers.goto();
            await triggers.itemLink('Occupancy Alert').click();

            await expect(page).toHaveURL(/#\/triggers\/trigger-occupancy\//);
            await expect(triggers.itemName).toHaveText('Occupancy Alert');
        });
    });

    test.describe('US-TRG-002: View Trigger Details', () => {
        test('AC-TRG-002-1: shows the description on the about tab', async () => {
            await triggers.gotoItem('trigger-occupancy');

            await expect(triggers.tabContent).toContainText(
                'Turns the lights on when people arrive',
            );
        });
    });

    test.describe('US-TRG-003: Create New Trigger', () => {
        test('AC-TRG-003-1: name is required', async () => {
            await triggers.goto();
            await triggers.openAddModal();

            await triggers.saveButton.click();

            await expect(triggers.dialog).toBeVisible();
            await expect(triggers.dialog.locator('mat-error')).toBeVisible();
        });

        test('AC-TRG-003-5: saves the trigger and opens it', async () => {
            await triggers.goto();

            await triggers.createWith(async () => {
                await triggers.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill('Fire Alarm');
                await triggers.dialog
                    .getByRole('textbox', { name: 'Description' })
                    .fill('Unlocks every door');
            });

            await expect(triggers.itemName).toHaveText('Fire Alarm');
            await expect(triggers.tabContent).toContainText(
                'Unlocks every door',
            );
            await expect(triggers.itemLink('Fire Alarm')).toBeVisible();
        });
    });

    test.describe('US-TRG-004: Edit Trigger Configuration', () => {
        test('AC-TRG-004-2: a renamed trigger keeps its new name', async ({
            page,
        }) => {
            await triggers.gotoItem('trigger-occupancy');
            await triggers.openEditModal();

            const name = triggers.dialog.getByRole('textbox', {
                name: 'Name*',
            });
            await expect(name).toHaveValue('Occupancy Alert');
            await name.fill('Occupancy Lighting');
            await triggers.saveButton.click();
            await expect(triggers.dialog).toBeHidden();

            await expect(triggers.itemName).toHaveText('Occupancy Lighting');
            await page.reload();
            await triggers.waitForItemDetails();
            await expect(triggers.itemName).toHaveText('Occupancy Lighting');
        });

        test('closing the modal discards changes', async () => {
            await triggers.gotoItem('trigger-occupancy');
            await triggers.openEditModal();

            await triggers.dialog
                .getByRole('textbox', { name: 'Name*' })
                .fill('Not Saved');
            await triggers.discardChanges();

            await expect(triggers.dialog).toBeHidden();
            await expect(triggers.itemName).toHaveText('Occupancy Alert');
        });
    });

    test.describe('US-TRG-005: Delete Trigger', () => {
        test('removes the trigger from the list', async () => {
            await triggers.gotoItem('trigger-occupancy');
            await triggers.deleteSelected();

            await expect(triggers.itemLink('Occupancy Alert')).toHaveCount(0);
            await expect(
                triggers.itemLink('After Hours Shutdown'),
            ).toBeVisible();
        });

        test('keeps the trigger when the confirmation is dismissed', async ({
            page,
        }) => {
            await triggers.gotoItem('trigger-occupancy');
            await triggers.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(triggers.itemName).toHaveText('Occupancy Alert');
            await expect(triggers.itemLink('Occupancy Alert')).toBeVisible();
        });
    });

    test.describe('US-TRG-008: View Trigger Instances', () => {
        test('shows the empty state for an unused trigger', async () => {
            await triggers.gotoItem('trigger-occupancy');
            await triggers.openTab('instances');

            await expect(triggers.tabContent).toContainText(
                'No instance of trigger',
            );
        });
    });
});
