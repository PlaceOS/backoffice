import { APIRequestContext } from '@playwright/test';
import { uniqueName } from '../../support/api';
import { Cleanup, expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import {
    createEdge,
    createModule,
    createRepositoryDriver,
    createSettingsWithHistory,
    createSystem,
    Driver,
    DRIVER_ROLE,
    enginePath,
    fieldOf,
    fillSettingsEditor,
    getModule,
    lastWord,
    Module,
    settingsOf,
    statusOf,
} from './support/drivers';

/**
 * Modules on the local stack (`user-stories/modules.md`).
 *
 * The stack has no core: no module connects to a device and no method runs.
 * rest-api still saves the `running` flag on start and stop, and the app
 * shows that flag as Online or Offline.
 */

/** Make a device driver, the parent of most modules here */
async function deviceDriver(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<Driver> = {},
): Promise<Driver> {
    const { driver } = await createRepositoryDriver(api, cleanup, {
        role: DRIVER_ROLE.device,
        module_name: 'Display',
        ...data,
    });
    return driver;
}

/** Make a device module with a unique custom name */
async function deviceModule(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<Module> = {},
): Promise<{ driver: Driver; mod: Module }> {
    const driver = await deviceDriver(api, cleanup);
    const mod = await createModule(api, cleanup, {
        driver_id: driver.id,
        custom_name: uniqueName('E2E Module'),
        ip: '10.0.0.20',
        port: 23,
        ...data,
    });
    return { driver, mod };
}

test.describe('Modules on the local backend', () => {
    test('AC-MOD-001-2 and AC-MOD-001-3: search finds a module and opens it', async ({
        page,
        api,
        cleanup,
    }) => {
        const driver = await deviceDriver(api, cleanup);
        const found = await createModule(api, cleanup, {
            driver_id: driver.id,
            custom_name: uniqueName('E2E Lobby Module'),
            ip: '10.0.0.21',
            port: 23,
        });
        const other = await createModule(api, cleanup, {
            driver_id: driver.id,
            custom_name: uniqueName('E2E Foyer Module'),
            ip: '10.0.0.22',
            port: 23,
        });
        const modules = new FeaturePage(page, 'modules');
        await modules.goto();

        // The list shows the module name of the driver and the IP, so find
        // the entries by their link
        const linkOf = (mod: Module) =>
            page.locator(`item-sidebar a[href*="/modules/${mod.id}"]`);
        await modules.search(lastWord(other.custom_name));
        await expect(linkOf(other)).toBeVisible();
        await modules.search(lastWord(found.custom_name));
        await expect(linkOf(found)).toBeVisible();
        await expect(linkOf(other)).toHaveCount(0);

        await linkOf(found).click();
        await expect(page).toHaveURL(new RegExp(`#/modules/${found.id}/about`));
        await expect(modules.itemName).toHaveText(found.custom_name);
    });

    test('AC-MOD-002-1 to AC-MOD-002-4 and AC-MOD-011-3: details show notes, network, driver, status and TLS', async ({
        page,
        api,
        cleanup,
    }) => {
        const { driver, mod } = await deviceModule(api, cleanup, {
            notes: 'Behind the reception desk',
            ip: '10.0.0.23',
            port: 4998,
            tls: true,
        });
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        await expect(modules.itemName).toHaveText(mod.custom_name);
        await expect(modules.tabContent).toContainText(
            'Notes Behind the reception desk',
        );
        await expect(modules.tabContent).toContainText('IP 10.0.0.23');
        await expect(modules.tabContent).toContainText('Port Number 4998');
        await expect(modules.tabContent).toContainText('Protocol TLS');
        await expect(modules.itemDetails).toContainText('Offline');
        await expect(modules.itemDetails).toContainText('Secure');

        await modules.tabContent
            .getByRole('link', { name: driver.name })
            .click();
        await expect(page).toHaveURL(new RegExp(`#/drivers/${driver.id}/`));
        await expect(modules.itemName).toHaveText(driver.name);
    });

    test('AC-MOD-002-5: details show the edge of the module', async ({
        page,
        api,
        cleanup,
    }) => {
        const edge = await createEdge(api, cleanup);
        const { mod } = await deviceModule(api, cleanup, { edge_id: edge.id });
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        const link = modules.tabContent.getByRole('link', { name: edge.name });
        await expect(link).toHaveAttribute('href', `#/admin/edge/${edge.id}`);
    });

    test('AC-MOD-003-3 and AC-MOD-003-5: a module made in the form is saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const driver = await deviceDriver(api, cleanup);
        const modules = new FeaturePage(page, 'modules');
        // The form puts underscores in place of spaces in a custom name
        const name = uniqueName('E2E_New_Module').replace(/ /g, '_');
        await modules.goto();

        const id = await modules.createWith(async () => {
            await modules.dialog
                .getByRole('combobox', { name: 'Search...' })
                .fill(lastWord(driver.name));
            await page.getByRole('option', { name: driver.name }).click();
            await modules.dialog
                .getByRole('textbox', { name: /IP Address/ })
                .fill('10.0.0.24');
            await modules.dialog
                .getByRole('spinbutton', { name: 'Port Number *' })
                .fill('12004');
            await modules.dialog
                .getByRole('textbox', { name: 'Custom Name' })
                .fill(name);
        });
        cleanup.add(enginePath('modules', id));

        await expect(modules.itemName).toHaveText(name);
        const saved = await getModule(api, id);
        expect(saved).toMatchObject({
            driver_id: driver.id,
            custom_name: name,
            ip: '10.0.0.24',
            port: 12004,
        });
    });

    test('AC-MOD-004-4: edited network settings and notes are saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        await modules.openEditModal();
        const ip = modules.dialog.getByRole('textbox', { name: /IP Address/ });
        await expect(ip).toHaveValue(mod.ip);
        await ip.fill('10.0.0.25');
        await modules.dialog
            .getByRole('textbox', { name: 'Notes' })
            .fill('Front entrance');
        await modules.saveButton.click();
        await expect(modules.dialog).toBeHidden();

        await expect(modules.tabContent).toContainText('IP 10.0.0.25');
        expect(await getModule(api, mod.id)).toMatchObject({
            ip: '10.0.0.25',
            notes: 'Front entrance',
        });
    });

    test('AC-MOD-005-3: a dismissed delete keeps the module', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        await modules.openDeleteConfirmation();
        await page.keyboard.press('Escape');

        await expect(page.locator('confirm-modal')).toHaveCount(0);
        await expect(modules.itemName).toHaveText(mod.custom_name);
        expect(await statusOf(api, 'modules', mod.id)).toBe(200);
    });

    test('AC-MOD-005-1 and AC-MOD-005-2: a deleted module is removed', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        await modules.deleteSelected();

        expect(await statusOf(api, 'modules', mod.id)).toBe(404);
    });

    test('AC-MOD-006-1 and AC-MOD-006-2: start and stop save the running state', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        const modules = new FeaturePage(page, 'modules');
        const running = () =>
            fieldOf<Module, 'running'>(api, 'modules', mod.id, 'running');

        await modules.gotoItem(mod.id);
        const start = modules.tabContent.getByRole('button', { name: 'START' });
        const stop = modules.tabContent.getByRole('button', { name: 'STOP' });
        await expect(stop).toBeDisabled();

        await start.click();
        await expect(
            modules.notification('Module successfully started'),
        ).toBeVisible();
        await expect(start).toBeDisabled();
        await expect.poll(running).toBe(true);

        await stop.click();
        await expect(
            modules.notification('Module successfully stopped'),
        ).toBeVisible();
        await expect(stop).toBeDisabled();
        await expect.poll(running).toBe(false);
    });

    test('AC-MOD-006-3: the status in the header follows start and stop', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        await expect(modules.itemDetails).toContainText('Offline');
        await modules.tabContent.getByRole('button', { name: 'START' }).click();
        await expect(
            modules.notification('Module successfully started'),
        ).toBeVisible();

        await expect(modules.itemDetails).toContainText('Online', {
            timeout: 5000,
        });
    });

    test('AC-MOD-007-1 and AC-MOD-007-2: unencrypted module settings are shown and saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        await createSettingsWithHistory(
            api,
            mod.id,
            'volume: 10\n',
            'volume: 20\n',
        );
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        const form = modules.tabContent.locator('a-settings-form');
        await form.getByRole('tab', { name: 'Unencrypted' }).click();
        await expect(form.locator('.monaco-editor')).toContainText(
            'volume: 20',
        );
        await fillSettingsEditor(form, 'volume: 30');
        await form.getByRole('button', { name: 'Save' }).click();
        await expect(
            modules.notification(
                'Successfully saved Unencrypted settings changes',
            ),
        ).toBeVisible();

        expect(await settingsOf(api, mod.id)).toEqual(['volume: 30']);
    });

    test('AC-MOD-007-3: invalid settings show an error and cannot be saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id);
        const form = modules.tabContent.locator('a-settings-form');
        await form.getByRole('tab', { name: 'Unencrypted' }).click();
        // A key twice is not valid YAML
        await fillSettingsEditor(form, 'volume: 10\nvolume: 20');

        await expect(form.locator('.error-display')).toBeVisible();
        await expect(form.getByRole('button', { name: 'Save' })).toBeDisabled();
        expect(await settingsOf(api, mod.id)).toEqual([]);
    });

    test('AC-MOD-008-1 and AC-MOD-008-2: the systems tab lists and opens the system of the module', async ({
        page,
        api,
        cleanup,
    }) => {
        const system = await createSystem(api, cleanup);
        const { driver } = await createRepositoryDriver(api, cleanup, {
            role: DRIVER_ROLE.logic,
        });
        const mod = await createModule(api, cleanup, {
            driver_id: driver.id,
            control_system_id: system.id,
        });
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id, 'systems');
        await modules.tabContent
            .getByRole('link', { name: system.name })
            .click();

        await expect(page).toHaveURL(new RegExp(`#/systems/${system.id}/`));
        await expect(modules.itemName).toHaveText(system.name);
    });

    test('AC-MOD-009-1 and AC-MOD-009-2: the history tab compares two versions of the settings', async ({
        page,
        api,
        cleanup,
    }) => {
        const { mod } = await deviceModule(api, cleanup);
        await createSettingsWithHistory(
            api,
            mod.id,
            'volume: 10\n',
            'volume: 20\n',
        );
        const modules = new FeaturePage(page, 'modules');

        await modules.gotoItem(mod.id, 'history');
        await modules.tabContent
            .getByRole('combobox', { name: 'Select current settings' })
            .click();
        await page.getByRole('option', { name: /UNENCRYPTED/ }).click();
        await modules.tabContent
            .getByRole('combobox', { name: 'Select old settings' })
            .click();
        // Newest first, so the last entry is the first version
        await expect(page.getByRole('option')).toHaveCount(2);
        await page.getByRole('option').last().click();

        const diff = modules.tabContent.locator('diff-viewer');
        await expect(diff.locator('.editor.original')).toContainText(
            'volume: 10',
        );
        await expect(diff.locator('.editor.modified')).toContainText(
            'volume: 20',
        );
    });
});
