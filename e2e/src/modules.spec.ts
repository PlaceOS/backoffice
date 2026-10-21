import { expect, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Modules E2E Tests
 *
 * Tests for user stories in `user-stories/modules.md` (US-MOD-*).
 * Uses the default mock modules from `src/app/mocks/data/modules.ts`.
 */

/** Running logic module in system '2.30.Central-Core' */
const LOGIC_ID = 'mod-lAHXR38sRX';
const LOGIC_SYSTEM_ID = 'sys-l7lvddob4I';
/** Running device module with the custom name 'Door' */
const DOOR_ID = 'mod-ke85vi5csE';
/** Stopped device module */
const DISPLAY_ID = 'mod-l7l-m0gK7G';

test.describe('Modules', () => {
    let modules: FeaturePage;

    test.beforeEach(async ({ page }) => {
        modules = new FeaturePage(page, 'modules');
    });

    test.describe('US-MOD-001: View Modules List', () => {
        test('AC-MOD-001-2: search filters the list', async () => {
            await modules.goto();
            await expect(
                modules.itemLink('Samsung MD & DM Series LCD'),
            ).toBeVisible();

            await modules.search('QSC');

            await expect(modules.itemLink('QSC PTZ Camera Proxy')).toHaveCount(
                2,
            );
            await expect(
                modules.itemLink('Samsung MD & DM Series LCD'),
            ).toHaveCount(0);
        });

        test('AC-MOD-001-3: selecting a module opens its details', async ({
            page,
        }) => {
            await modules.goto();
            await modules.itemLink('ACA Meeting Room Logic').click();

            await expect(page).toHaveURL(new RegExp(`#/modules/${LOGIC_ID}/`));
            await expect(modules.itemName).toHaveText('ACA Meeting Room Logic');
        });
    });

    test.describe('US-MOD-002: View Module Details', () => {
        test('AC-MOD-002-2: shows the IP address and port', async () => {
            await modules.gotoItem(DOOR_ID);

            await expect(modules.itemName).toHaveText('Door');
            await expect(modules.tabContent).toContainText('IP 10.1.1.83');
            await expect(modules.tabContent).toContainText('Port Number 4998');
        });

        test('AC-MOD-002-3: the driver link opens the driver', async ({
            page,
        }) => {
            await modules.gotoItem(DOOR_ID);
            await modules.tabContent
                .getByRole('link', { name: 'GlobalCache IO Gateway' })
                .click();

            await expect(page).toHaveURL(/#\/drivers\/dep-S9OfntF_TR/);
            await expect(modules.itemName).toHaveText('GlobalCache IO Gateway');
        });
    });

    test.describe('US-MOD-003: Create New Module', () => {
        test('AC-MOD-003-4: a driver is required', async () => {
            await modules.goto();
            await modules.openAddModal();

            await modules.saveButton.click();

            await expect(
                modules.notification('Check these fields: System, Driver id'),
            ).toBeVisible();
            await expect(modules.dialog).toBeVisible();
        });

        test('AC-MOD-003-5: saves the module and opens it', async ({
            page,
        }) => {
            await modules.goto();

            await modules.createWith(async () => {
                const driver = modules.dialog.getByRole('combobox', {
                    name: 'Search...',
                });
                await driver.fill('KNX');
                await page
                    .getByRole('option', { name: /KNX BAOS Lighting/ })
                    .click();
                await modules.dialog
                    .getByRole('textbox', { name: /IP Address/ })
                    .fill('10.0.0.5');
                await modules.dialog
                    .getByRole('spinbutton', { name: 'Port Number *' })
                    .fill('12004');
                await modules.dialog
                    .getByRole('textbox', { name: 'Custom Name' })
                    .fill('Lobby_Lights');
            });

            await expect(modules.itemName).toHaveText('Lobby_Lights');
            await expect(modules.tabContent).toContainText('IP 10.0.0.5');
            await expect(modules.tabContent).toContainText('Port Number 12004');
            await expect(
                modules.tabContent.getByRole('link', {
                    name: 'KNX BAOS Lighting',
                }),
            ).toHaveAttribute('href', '#/drivers/dep-WjCyo9xO8H');
            await expect(modules.itemLink('10.0.0.5')).toBeVisible();
            await page.reload();
            await modules.waitForItemDetails();
            await expect(modules.itemName).toHaveText('Lobby_Lights');
        });
    });

    test.describe('US-MOD-004: Edit Module Configuration', () => {
        test('AC-MOD-004-4: saved network settings and notes persist', async ({
            page,
        }) => {
            await modules.gotoItem(DOOR_ID);
            await modules.openEditModal();

            const ip = modules.dialog.getByRole('textbox', {
                name: /IP Address/,
            });
            await expect(ip).toHaveValue('10.1.1.83');
            await ip.fill('10.1.1.90');
            await modules.dialog
                .getByRole('textbox', { name: 'Notes' })
                .fill('Front entrance');
            await modules.saveButton.click();
            await expect(modules.dialog).toBeHidden();

            await expect(modules.tabContent).toContainText('IP 10.1.1.90');
            await page.reload();
            await modules.waitForItemDetails();
            await expect(modules.tabContent).toContainText('IP 10.1.1.90');
            await expect(modules.tabContent).toContainText(
                'Notes Front entrance',
            );
        });
    });

    test.describe('US-MOD-005: Delete Module', () => {
        test('AC-MOD-005-2: removes the module from the list', async ({
            page,
        }) => {
            await modules.gotoItem(DISPLAY_ID);
            await modules.deleteSelected();

            await expect(
                modules.itemLink('Samsung MD & DM Series LCD'),
            ).toHaveCount(0);
            await page.reload();
            await modules.waitForLoad();
            await expect(
                modules.itemLink('ACA Meeting Room Logic'),
            ).toBeVisible();
            await expect(
                modules.itemLink('Samsung MD & DM Series LCD'),
            ).toHaveCount(0);
        });
    });

    test.describe('US-MOD-006: Start and Stop Module', () => {
        test('AC-MOD-006-2 and AC-MOD-006-1: stops and restarts a module', async () => {
            await modules.gotoItem(LOGIC_ID);
            const start = modules.tabContent.getByRole('button', {
                name: 'START',
            });
            const stop = modules.tabContent.getByRole('button', {
                name: 'STOP',
            });
            await expect(start).toBeDisabled();

            await stop.click();
            await expect(
                modules.notification('Module successfully stopped'),
            ).toBeVisible();
            await expect(stop).toBeDisabled();
            await expect(start).toBeEnabled();

            await start.click();
            await expect(
                modules.notification('Module successfully started'),
            ).toBeVisible();
            await expect(start).toBeDisabled();
            await expect(stop).toBeEnabled();
        });
    });

    test.describe('US-MOD-008: View Systems Using Module', () => {
        test('AC-MOD-008-2: a system link opens that system', async ({
            page,
        }) => {
            await modules.gotoItem(LOGIC_ID);
            await modules.openTab('systems');
            await modules.tabContent
                .getByRole('link', { name: '2.30.Central-Core' })
                .click();

            await expect(page).toHaveURL(
                new RegExp(`#/systems/${LOGIC_SYSTEM_ID}/`),
            );
            await expect(modules.itemName).toHaveText('2.30.Central-Core');
        });
    });

    test.describe('US-MOD-011: View Module Connection Status', () => {
        test('AC-MOD-011-1 and AC-MOD-011-2: shows Online or Offline', async () => {
            await modules.gotoItem(LOGIC_ID);
            await expect(modules.itemDetails).toContainText('Online');

            await modules.gotoItem(DISPLAY_ID);
            await expect(modules.itemDetails).toContainText('Offline');
        });
    });
});
