import { Page } from '@playwright/test';
import { uniqueName } from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import {
    createDriver,
    createModule,
    createRepository,
    createRepositoryDriver,
    createSettingsWithHistory,
    Driver,
    DRIVER_ROLE,
    enginePath,
    fieldOf,
    fillSettingsEditor,
    lastWord,
    settingsOf,
    statusOf,
} from './support/drivers';

/**
 * Drivers on the local stack (`user-stories/drivers.md`).
 *
 * The stack has no core and no build service, so no driver compiles or
 * reloads. These tests use driver records only. The readme test reads the
 * PlaceOS/drivers repository on GitHub through rest-api.
 */

/** A driver of PlaceOS/drivers that has a readme, at a fixed commit */
const README_DRIVER = {
    file_name: 'drivers/place/smtp.cr',
    commit: '66a41ddf0f9e66df6e681be1d6916fe93d3c5768',
};

/** Open the "Update Drivers" list from the drivers section */
async function openUpdateList(page: Page, drivers: FeaturePage) {
    await drivers.goto();
    await page
        .locator('new-drivers-view')
        .getByRole('button', { name: 'Update Drivers' })
        .click();
    const modal = page.locator('driver-update-list-modal');
    await expect(modal).toBeVisible();
    return modal;
}

test.describe('Drivers on the local backend', () => {
    test('AC-DRV-001-2 and AC-DRV-001-3: search finds a driver and opens it', async ({
        page,
        api,
        cleanup,
    }) => {
        const repo = await createRepository(api, cleanup);
        const found = await createDriver(api, cleanup, repo.id, {
            name: uniqueName('E2E Lighting Driver'),
        });
        const other = await createDriver(api, cleanup, repo.id, {
            name: uniqueName('E2E Audio Driver'),
        });
        const drivers = new FeaturePage(page, 'drivers');
        await drivers.goto();

        await drivers.search(lastWord(other.name));
        await expect(drivers.itemLink(other.name)).toBeVisible();
        await drivers.search(lastWord(found.name));
        await expect(drivers.itemLink(found.name)).toBeVisible();
        await expect(drivers.itemLink(other.name)).toHaveCount(0);

        await drivers.itemLink(found.name).click();
        await expect(page).toHaveURL(new RegExp(`#/drivers/${found.id}/about`));
        await expect(drivers.itemName).toHaveText(found.name);
    });

    test('AC-DRV-002-1, AC-DRV-002-2 and AC-DRV-002-3: details show the type, fields and repository', async ({
        page,
        api,
        cleanup,
    }) => {
        const { repo, driver } = await createRepositoryDriver(api, cleanup, {
            role: DRIVER_ROLE.device,
            description: 'Controls the lobby display',
            module_name: 'Display',
            file_name: 'drivers/e2e/lobby_display.cr',
            commit: 'f00dfeed',
        });
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id);
        await expect(drivers.itemDetails).toContainText('Device');
        await expect(drivers.tabContent).toContainText('Module Name Display');
        await expect(drivers.tabContent).toContainText(
            'Controls the lobby display',
        );
        await expect(drivers.tabContent).toContainText(
            'drivers/e2e/lobby_display.cr',
        );
        await expect(drivers.tabContent).toContainText('f00dfeed');

        await drivers.tabContent.getByRole('link', { name: repo.id }).click();
        await expect(page).toHaveURL(
            new RegExp(`#/repositories/${repo.id}/about`),
        );
        await expect(drivers.itemName).toHaveText(repo.name);
    });

    test('AC-DRV-003-1 and AC-DRV-003-2: the readme tab renders the driver readme', async ({
        api,
        cleanup,
        page,
    }) => {
        const { driver } = await createRepositoryDriver(
            api,
            cleanup,
            README_DRIVER,
        );
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id);
        // The tab shows when rest-api has read the readme from GitHub
        await expect(page.locator('item-tablist a[href*="/docs"]')).toBeVisible(
            { timeout: 45_000 },
        );
        await drivers.openTab('docs');

        await expect(
            drivers.tabContent.getByRole('heading', {
                level: 1,
                name: 'SMTP Mailer Readme',
            }),
        ).toBeVisible();
    });

    test('AC-DRV-004-1, AC-DRV-004-2 and AC-DRV-004-3: the modules tab lists and opens the modules of the driver', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup, {
            role: DRIVER_ROLE.device,
        });
        const first = await createModule(api, cleanup, {
            driver_id: driver.id,
            ip: '10.0.0.11',
            port: 23,
        });
        const second = await createModule(api, cleanup, {
            driver_id: driver.id,
            ip: '10.0.0.12',
            port: 23,
        });
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id);
        await expect(
            page.locator('item-tablist a[href*="/modules"]'),
        ).toContainText('2');
        await drivers.openTab('modules');
        await expect(drivers.tabContent).toContainText(first.id);
        await expect(drivers.tabContent).toContainText(second.id);

        const row = await drivers.tableRow(second.id);
        await row.getByRole('link').click();
        await expect(page).toHaveURL(new RegExp(`#/modules/${second.id}/`));
        await expect(drivers.itemDetails).toContainText(second.id);
    });

    test('AC-DRV-005-3: an edited driver is saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup);
        const drivers = new FeaturePage(page, 'drivers');
        const name = uniqueName('E2E Renamed Driver');

        await drivers.gotoItem(driver.id);
        await drivers.openEditModal();
        const name_field = drivers.dialog.getByRole('textbox', {
            name: 'Name *',
            exact: true,
        });
        await expect(name_field).toHaveValue(driver.name);
        await name_field.fill(name);
        await drivers.dialog
            .getByRole('textbox', { name: 'Description' })
            .fill('Logs raw device traffic');
        await drivers.saveButton.click();
        await expect(drivers.dialog).toBeHidden();

        await expect(drivers.itemName).toHaveText(name);
        const saved = await fieldOf<Driver, 'name'>(
            api,
            'drivers',
            driver.id,
            'name',
        );
        expect(saved).toBe(name);
        expect(
            await fieldOf<Driver, 'description'>(
                api,
                'drivers',
                driver.id,
                'description',
            ),
        ).toBe('Logs raw device traffic');
    });

    test('AC-DRV-005-2: unencrypted driver settings are saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup);
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id);
        const form = drivers.tabContent.locator('a-settings-form');
        await form.getByRole('tab', { name: 'Unencrypted' }).click();
        await fillSettingsEditor(form, 'poll_every: 30');
        await form.getByRole('button', { name: 'Save' }).click();
        await expect(
            drivers.notification(
                'Successfully saved Unencrypted settings changes',
            ),
        ).toBeVisible();

        expect(await settingsOf(api, driver.id)).toEqual(['poll_every: 30']);
    });

    test('AC-DRV-008-1 and AC-DRV-008-2: the history tab compares two versions of the settings', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup);
        await createSettingsWithHistory(
            api,
            driver.id,
            'poll_every: 10\n',
            'poll_every: 20\n',
        );
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id, 'history');
        await drivers.tabContent
            .getByRole('combobox', { name: 'Select current settings' })
            .click();
        await page.getByRole('option', { name: /UNENCRYPTED/ }).click();
        const old_select = drivers.tabContent.getByRole('combobox', {
            name: 'Select old settings',
        });
        await old_select.click();
        // Newest first, so the last entry is the first version
        await expect(page.getByRole('option')).toHaveCount(2);
        await page.getByRole('option').last().click();

        const diff = drivers.tabContent.locator('diff-viewer');
        await expect(diff.locator('.editor.original')).toContainText(
            'poll_every: 10',
        );
        await expect(diff.locator('.editor.modified')).toContainText(
            'poll_every: 20',
        );
    });

    test('AC-DRV-009-1 and AC-DRV-009-2: the update list shows the current and latest commit and updates the driver', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup, {
            commit: 'aaaaaaaaaa11111111',
        });
        // The build service sets these when the repository has a new commit
        const res = await api.patch(enginePath('drivers', driver.id), {
            data: {
                update_available: true,
                update_info: {
                    commit: 'bbbbbbbbbb22222222',
                    message: 'New driver version',
                    author: 'E2E',
                    date: '2026-11-01T00:00:00Z',
                },
            },
        });
        expect(res.ok(), await res.text()).toBe(true);
        const drivers = new FeaturePage(page, 'drivers');

        const modal = await openUpdateList(page, drivers);
        const row = modal.locator('tr').filter({ hasText: driver.name });
        await expect(row.locator('code')).toHaveText([
            'aaaaaaaaa',
            'bbbbbbbbb',
        ]);
        await row.getByRole('checkbox').check();
        await modal
            .getByRole('button', { name: 'Update selected drivers (1)' })
            .click();
        await expect(
            drivers.notification('Successfully updated 1 drivers'),
        ).toBeVisible();

        await expect
            .poll(() =>
                fieldOf<Driver, 'commit'>(api, 'drivers', driver.id, 'commit'),
            )
            .toBe('bbbbbbbbbb22222222');
    });

    test('AC-DRV-010-1: deleting a driver warns about its modules and removes them', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup, {
            role: DRIVER_ROLE.device,
        });
        const mod = await createModule(api, cleanup, {
            driver_id: driver.id,
            ip: '10.0.0.13',
            port: 23,
        });
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id);
        await drivers.openDeleteConfirmation();
        await expect(page.locator('confirm-modal')).toContainText(
            '1 modules that rely on this driver will be immediately removed.',
        );
        await drivers.acceptButton.click();
        await expect(page).toHaveURL(/#\/drivers\/-/);

        expect(await statusOf(api, 'drivers', driver.id)).toBe(404);
        expect(await statusOf(api, 'modules', mod.id)).toBe(404);
    });

    test('AC-DRV-010-2 and AC-DRV-010-3: a driver with no modules is deleted after confirmation', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver } = await createRepositoryDriver(api, cleanup);
        const drivers = new FeaturePage(page, 'drivers');

        await drivers.gotoItem(driver.id);
        await drivers.deleteSelected();

        expect(await statusOf(api, 'drivers', driver.id)).toBe(404);
    });
});
