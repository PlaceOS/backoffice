import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Drivers E2E Tests
 *
 * Tests for user stories in `user-stories/drivers.md` (US-DRV-*)
 */

const REPOSITORY_ID = 'repo-drivers';

/** The edit form needs a known repository to load the driver's commit */
const REPOSITORIES = [
    {
        id: REPOSITORY_ID,
        name: 'PlaceOS Drivers',
        folder_name: 'drivers/placeos',
        uri: 'https://github.com/PlaceOS/drivers',
        commit_hash: 'HEAD',
        type: 'driver',
    },
];

const PROBE_ID = 'dep-WaXdMkUcHg';
/** Same id as the default mock modules, so this driver has six modules */
const KNX_ID = 'dep-WjCyo9xO8H';

const DRIVERS = [
    {
        id: PROBE_ID,
        name: 'ACA Device Probe',
        role: 1,
        description: 'Passthrough / comms logger for probing device protocols',
        module_name: 'Probe',
        class_name: '::Aca::DeviceProbe',
        repository_id: REPOSITORY_ID,
        file_name: 'disc-::Aca::DeviceProbe',
        commit: 'a1b2c3',
        default_port: 23,
        settings: {},
        created_at: 1519091316,
        updated_at: 1519091316,
    },
    {
        id: KNX_ID,
        name: 'KNX BAOS Lighting',
        role: 1,
        description: null,
        module_name: 'Lighting',
        class_name: '::Knx::BaosLighting',
        repository_id: REPOSITORY_ID,
        file_name: 'disc-::Knx::BaosLighting',
        commit: 'd4e5f6',
        default_port: 12004,
        settings: {},
        created_at: 1519367963,
        updated_at: 1519367963,
    },
];

test.describe('Drivers', () => {
    let drivers: FeaturePage;

    test.beforeEach(async ({ page }) => {
        await seedMockData(page, 'repositories', REPOSITORIES);
        await seedMockData(page, 'drivers', DRIVERS);
        drivers = new FeaturePage(page, 'drivers');
    });

    test.describe('US-DRV-001: View Drivers List', () => {
        test('AC-DRV-001-1: lists every driver', async () => {
            await drivers.goto();

            await expect(drivers.itemLink('ACA Device Probe')).toBeVisible();
            await expect(drivers.itemLink('KNX BAOS Lighting')).toBeVisible();
        });

        test('AC-DRV-001-2: search filters the list', async () => {
            await drivers.goto();
            await drivers.search('KNX');

            await expect(drivers.itemLink('KNX BAOS Lighting')).toBeVisible();
            await expect(drivers.itemLink('ACA Device Probe')).toHaveCount(0);
        });

        test('AC-DRV-001-3: selecting a driver opens its details', async ({
            page,
        }) => {
            await drivers.goto();
            await drivers.itemLink('ACA Device Probe').click();

            await expect(page).toHaveURL(new RegExp(`#/drivers/${PROBE_ID}/`));
            await expect(drivers.itemName).toHaveText('ACA Device Probe');
        });
    });

    test.describe('US-DRV-002: View Driver Details', () => {
        test('AC-DRV-002-1: shows the module name and description', async () => {
            await drivers.gotoItem(PROBE_ID);

            await expect(drivers.tabContent).toContainText('Module Name Probe');
            await expect(drivers.tabContent).toContainText(
                'Passthrough / comms logger for probing device protocols',
            );
        });
    });

    test.describe('US-DRV-003: View Driver Documentation', () => {
        test('AC-DRV-003-2: renders the readme as markdown', async () => {
            await drivers.gotoItem(PROBE_ID);
            await drivers.openTab('docs');

            await expect(
                drivers.tabContent.getByRole('heading', {
                    level: 1,
                    name: 'Mock Driver',
                }),
            ).toBeVisible();
            await expect(drivers.tabContent.getByRole('listitem')).toHaveText([
                'Feature 1',
                'Feature 2',
            ]);
        });
    });

    test.describe('US-DRV-004: View Modules Using Driver', () => {
        test('AC-DRV-004-1: lists the modules of the driver', async () => {
            await drivers.gotoItem(KNX_ID);
            await drivers.openTab('modules');

            await expect(
                drivers.tabContent.getByRole('link', {
                    name: 'KNX BAOS Lighting',
                }),
            ).toHaveCount(6);
        });

        test('AC-DRV-004-3: a module link opens that module', async ({
            page,
        }) => {
            await drivers.gotoItem(KNX_ID);
            await drivers.openTab('modules');
            await drivers.tabContent
                .getByRole('link', { name: 'KNX BAOS Lighting' })
                .first()
                .click();

            await expect(page).toHaveURL(/#\/modules\/mod-m2dku__78J/);
            await expect(drivers.itemName).toHaveText('KNX BAOS Lighting');
        });
    });

    test.describe('US-DRV-005: Edit Driver Configuration', () => {
        test('AC-DRV-005-3: saved changes persist', async ({ page }) => {
            await drivers.gotoItem(PROBE_ID);
            await drivers.openEditModal();

            const name = drivers.dialog.getByRole('textbox', {
                name: 'Name *',
                exact: true,
            });
            await expect(name).toHaveValue('ACA Device Probe');
            await name.fill('Protocol Probe');
            await drivers.dialog
                .getByRole('textbox', { name: 'Description' })
                .fill('Logs raw device traffic');
            await drivers.saveButton.click();
            await expect(drivers.dialog).toBeHidden();

            await expect(drivers.itemName).toHaveText('Protocol Probe');
            await page.reload();
            await drivers.waitForItemDetails();
            await expect(drivers.itemName).toHaveText('Protocol Probe');
            await expect(drivers.tabContent).toContainText(
                'Logs raw device traffic',
            );
        });
    });

    test.describe('US-DRV-006: Recompile Driver', () => {
        test('AC-DRV-006-1: recompiles after confirmation', async ({
            page,
        }) => {
            await drivers.gotoItem(PROBE_ID);
            await drivers.tabContent
                .getByRole('button', { name: 'Recompile' })
                .click();
            await expect(page.locator('confirm-modal')).toContainText(
                'Recompile Driver',
            );
            await drivers.acceptButton.click();

            await expect(
                drivers.notification('Successfully recompiled the driver.'),
            ).toBeVisible();
        });
    });

    test.describe('US-DRV-007: Reload Driver', () => {
        test('AC-DRV-007-2: confirms the reload', async ({ page }) => {
            await drivers.gotoItem(PROBE_ID);
            await drivers.tabContent
                .getByRole('button', { name: 'Reload' })
                .click();
            await expect(page.locator('confirm-modal')).toContainText(
                'Reload Driver',
            );
            await drivers.acceptButton.click();

            await expect(
                drivers.notification('Successfully reloaded driver.'),
            ).toBeVisible();
        });
    });

    test.describe('US-DRV-010: Delete Driver', () => {
        test('AC-DRV-010-2: dismissing the confirmation keeps the driver', async ({
            page,
        }) => {
            await drivers.gotoItem(PROBE_ID);
            await drivers.openDeleteConfirmation();
            await expect(page.locator('confirm-modal')).toContainText(
                'Delete driver',
            );
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(drivers.itemName).toHaveText('ACA Device Probe');
            await expect(drivers.itemLink('ACA Device Probe')).toBeVisible();
        });

        test('AC-DRV-010-3: removes the driver from the list', async ({
            page,
        }) => {
            await drivers.gotoItem(PROBE_ID);
            await drivers.deleteSelected();

            await expect(drivers.itemLink('ACA Device Probe')).toHaveCount(0);
            await page.reload();
            await drivers.waitForLoad();
            await expect(drivers.itemLink('KNX BAOS Lighting')).toBeVisible();
            await expect(drivers.itemLink('ACA Device Probe')).toHaveCount(0);
        });
    });
});
