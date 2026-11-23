/**
 * Helpers for the zones and systems specs on the local backend. Each helper
 * makes its resource through the API and gives its path to `cleanup`, so the
 * test that makes it also removes it.
 */
import { APIRequestContext, Locator, Page, expect } from '@playwright/test';
import {
    ENGINE_API,
    createResource,
    getJson,
    uniqueName,
} from '../../../support/api';
import { Cleanup } from '../../../support/fixtures';

export interface Zone {
    id: string;
    name: string;
    display_name?: string;
    description?: string;
    parent_id?: string | null;
    triggers: string[];
}

export interface System {
    id: string;
    name: string;
    display_name?: string;
    description?: string;
    zones: string[];
    modules: string[];
    version: number;
}

export interface Module {
    id: string;
    name: string;
    custom_name?: string | null;
    running: boolean;
    control_system_id?: string | null;
}

export interface Trigger {
    id: string;
    name: string;
}

export interface TriggerInstance {
    id: string;
    trigger_id: string;
    enabled: boolean;
    important: boolean;
}

export interface MetadataBlock {
    name: string;
    details: unknown;
}

/** Driver roles of the API */
const LOGIC_ROLE = 99;
const DEVICE_ROLE = 1;

/** Path of one item in the engine API */
export function enginePath(type: string, id: string): string {
    return `${ENGINE_API}/${type}/${encodeURIComponent(id)}`;
}

/** Make a zone. `data` adds fields such as `parent_id` */
export async function createZone(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Record<string, unknown> = {},
): Promise<Zone> {
    const zone = await createResource<Zone>(api, `${ENGINE_API}/zones`, {
        name: uniqueName('E2E Zone'),
        ...data,
    });
    cleanup.add(enginePath('zones', zone.id));
    return zone;
}

/** Make a system in `zones`. `data` adds fields */
export async function createSystem(
    api: APIRequestContext,
    cleanup: Cleanup,
    zones: string[],
    data: Record<string, unknown> = {},
): Promise<System> {
    const system = await createResource<System>(api, `${ENGINE_API}/systems`, {
        name: uniqueName('E2E System'),
        zones,
        ...data,
    });
    cleanup.add(enginePath('systems', system.id));
    return system;
}

/** Make a trigger */
export async function createTrigger(
    api: APIRequestContext,
    cleanup: Cleanup,
): Promise<Trigger> {
    const trigger = await createResource<Trigger>(
        api,
        `${ENGINE_API}/triggers`,
        { name: uniqueName('E2E Trigger') },
    );
    cleanup.add(enginePath('triggers', trigger.id));
    return trigger;
}

/**
 * Make a repository and a driver with `role`. The stack has no core, so the
 * driver never compiles, but the API stores it.
 */
async function createDriver(
    api: APIRequestContext,
    cleanup: Cleanup,
    role: number,
): Promise<string> {
    const name = uniqueName('E2E Driver');
    const repo = await createResource(api, `${ENGINE_API}/repositories`, {
        name: uniqueName('E2E Repo'),
        folder_name: name.toLowerCase().replace(/\W+/g, '-'),
        uri: 'https://github.com/PlaceOS/drivers',
        repo_type: 'driver',
        branch: 'master',
    });
    cleanup.add(enginePath('repositories', repo.id));
    const driver = await createResource(api, `${ENGINE_API}/drivers`, {
        name,
        role,
        module_name: 'E2E',
        file_name: 'drivers/place/private_helper.cr',
        commit: 'HEAD',
        repository_id: repo.id,
        default_port: 0,
    });
    cleanup.add(enginePath('drivers', driver.id));
    return driver.id;
}

/**
 * Make a logic module in `sys_id`. The API adds it to the system. It is
 * stopped.
 */
export async function createLogicModule(
    api: APIRequestContext,
    cleanup: Cleanup,
    sys_id: string,
): Promise<Module> {
    const driver_id = await createDriver(api, cleanup, LOGIC_ROLE);
    const mod = await createResource<Module>(api, `${ENGINE_API}/modules`, {
        driver_id,
        control_system_id: sys_id,
        custom_name: uniqueName('E2E Logic').replace(/\W+/g, '_'),
        running: false,
    });
    cleanup.add(enginePath('modules', mod.id));
    return mod;
}

/** Make a device module that is in no system */
export async function createDeviceModule(
    api: APIRequestContext,
    cleanup: Cleanup,
): Promise<Module> {
    const driver_id = await createDriver(api, cleanup, DEVICE_ROLE);
    const mod = await createResource<Module>(api, `${ENGINE_API}/modules`, {
        driver_id,
        ip: '10.0.0.5',
        port: 1234,
        custom_name: uniqueName('E2E Device').replace(/\W+/g, '_'),
        running: false,
    });
    cleanup.add(enginePath('modules', mod.id));
    return mod;
}

/** Make a settings block on `parent_id`, then change it, so it has history */
export async function createSettingsHistory(
    api: APIRequestContext,
    cleanup: Cleanup,
    parent_id: string,
    old_value: string,
    new_value: string,
): Promise<void> {
    const settings = await createResource(api, `${ENGINE_API}/settings`, {
        parent_id,
        encryption_level: 0,
        settings_string: old_value,
    });
    cleanup.add(enginePath('settings', settings.id));
    const res = await api.patch(enginePath('settings', settings.id), {
        data: { settings_string: new_value },
    });
    expect(res.ok(), await res.text()).toBe(true);
}

/** Save a metadata block on `parent_id` */
export async function putMetadata(
    api: APIRequestContext,
    parent_id: string,
    name: string,
    details: unknown,
): Promise<void> {
    const res = await api.put(enginePath('metadata', parent_id), {
        data: { name, description: '', details },
    });
    expect(res.ok(), await res.text()).toBe(true);
}

/** The metadata blocks of `parent_id`, by name */
export async function getMetadata(
    api: APIRequestContext,
    parent_id: string,
): Promise<Record<string, MetadataBlock>> {
    return getJson(api, enginePath('metadata', parent_id));
}

/** One item of the engine API */
export async function getItem<T>(
    api: APIRequestContext,
    type: string,
    id: string,
): Promise<T> {
    return getJson<T>(api, enginePath(type, id));
}

/** HTTP status of one item of the engine API */
export async function itemStatus(
    api: APIRequestContext,
    type: string,
    id: string,
): Promise<number> {
    return (await api.get(enginePath(type, id))).status();
}

// Metadata tab

/** A metadata block on the metadata tab */
export function metadataBlock(page: Page, name: string): Locator {
    return page.locator(`metadata-display [block][id="md-block-${name}"]`);
}

/** Open a block, replace its JSON in the editor and save the block */
export async function saveMetadataJson(
    page: Page,
    block: Locator,
    json: string,
): Promise<void> {
    // The header toggles the editor of the block
    await block.locator('[header] h3').click();
    const editor = block.locator('.monaco-editor').first();
    await expect(editor).toBeVisible();
    await editor.locator('.view-lines').click();
    // The project emulates Desktop Chrome on Windows, so Monaco takes the
    // Windows keys on every host
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    await page.keyboard.type(json);
    // Monaco adds closing brackets and quotes after the cursor. Remove them
    await page.keyboard.press('Shift+Control+End');
    await page.keyboard.press('Delete');
    await block.getByRole('button', { name: 'Save', exact: true }).click();
}

/** Open the bulk add modal of the section */
export async function openBulkAdd(page: Page): Promise<void> {
    await page.getByRole('button', { name: /^Bulk add/ }).click();
    await expect(page.locator('app-bulk-item-modal')).toBeVisible();
}

// Settings history tab

/**
 * Compare the newest settings version with the one before it. The history
 * lists the newest version first.
 */
export async function compareLastSettings(page: Page): Promise<void> {
    await pickOption(page, 'Select current settings', 0);
    await pickOption(page, 'Select old settings', 1);
}

/** Pick the option at `index` in the select with `placeholder` */
async function pickOption(page: Page, placeholder: string, index: number) {
    await page.getByRole('combobox', { name: placeholder }).click();
    await page.locator('.cdk-overlay-pane app-option').nth(index).click();
}

/** The diff of the settings history tab */
export function settingsDiff(page: Page): Locator {
    return page.locator('diff-viewer .monaco-diff-editor');
}
