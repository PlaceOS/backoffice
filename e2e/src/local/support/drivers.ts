/**
 * Data helpers for the repository, driver and module specs on the local
 * stack. Each helper makes a record through the API and gives its path to
 * `cleanup`, so the record is deleted after the test.
 *
 * The stack has no core and no build service. Thus these records are rows
 * only: no driver compiles and no module connects to a device.
 */
import { APIRequestContext, expect, Locator } from '@playwright/test';
import {
    asList,
    createResource,
    ENGINE_API,
    getJson,
    uniqueName,
} from '../../../support/api';
import { Cleanup } from '../../../support/fixtures';

/** Driver roles of the engine API */
export const DRIVER_ROLE = {
    device: 1,
    service: 2,
    logic: 99,
} as const;

/** Public repository that holds the PlaceOS drivers */
export const DRIVERS_REPO_URI = 'https://github.com/PlaceOS/drivers';

/** Settings levels of the engine API */
export const ENCRYPTION_LEVEL = { none: 0, support: 1, admin: 2 } as const;

export interface Repository {
    id: string;
    name: string;
    description: string;
    folder_name: string;
    uri: string;
    branch: string;
    commit_hash: string;
    repo_type: 'driver' | 'interface';
}

export interface Driver {
    id: string;
    name: string;
    description: string;
    role: number;
    repository_id: string;
    file_name: string;
    commit: string;
    module_name: string;
    update_available: boolean;
    update_info?: { commit: string; message: string; date: string };
}

export interface Module {
    id: string;
    name: string;
    custom_name: string;
    driver_id: string;
    control_system_id?: string;
    edge_id?: string;
    ip: string;
    port: number;
    tls: boolean;
    notes: string;
    running: boolean;
}

export interface Settings {
    id: string;
    parent_id: string;
    encryption_level: number;
    settings_string: string;
}

/** Path of one record of an engine API collection */
export function enginePath(collection: string, id: string): string {
    return `${ENGINE_API}/${collection}/${encodeURIComponent(id)}`;
}

/**
 * Make a repository record. Its URI is not cloned: the stack has no
 * service that clones driver repositories.
 */
export async function createRepository(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<Repository> = {},
): Promise<Repository> {
    const name = data.name ?? uniqueName('E2E Repo');
    const repo = await createResource<Repository>(
        api,
        `${ENGINE_API}/repositories`,
        {
            name,
            folder_name: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
            uri: DRIVERS_REPO_URI,
            branch: 'master',
            repo_type: 'driver',
            ...data,
        },
    );
    cleanup.add(enginePath('repositories', repo.id));
    return repo;
}

/** Make a driver record in a repository. The driver is not compiled */
export async function createDriver(
    api: APIRequestContext,
    cleanup: Cleanup,
    repository_id: string,
    data: Partial<Driver> = {},
): Promise<Driver> {
    const driver = await createResource<Driver>(api, `${ENGINE_API}/drivers`, {
        name: uniqueName('E2E Driver'),
        role: DRIVER_ROLE.logic,
        repository_id,
        file_name: 'drivers/place/e2e_driver.cr',
        commit: 'HEAD',
        module_name: 'E2E',
        ...data,
    });
    cleanup.add(enginePath('drivers', driver.id));
    return driver;
}

/** Make a module record. A device module needs `ip` and `port` */
export async function createModule(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<Module> & { driver_id: string },
): Promise<Module> {
    const mod = await createResource<Module>(
        api,
        `${ENGINE_API}/modules`,
        data,
    );
    cleanup.add(enginePath('modules', mod.id));
    return mod;
}

/** Make a repository and a driver in it */
export async function createRepositoryDriver(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<Driver> = {},
): Promise<{ repo: Repository; driver: Driver }> {
    const repo = await createRepository(api, cleanup);
    const driver = await createDriver(api, cleanup, repo.id, data);
    return { repo, driver };
}

/** Make a system in a new zone. A system needs at least one zone */
export async function createSystem(
    api: APIRequestContext,
    cleanup: Cleanup,
): Promise<{ id: string; name: string }> {
    const zone = await createResource(api, `${ENGINE_API}/zones`, {
        name: uniqueName('E2E Zone'),
    });
    cleanup.add(enginePath('zones', zone.id));
    const system = await createResource<{ id: string; name: string }>(
        api,
        `${ENGINE_API}/systems`,
        { name: uniqueName('E2E System'), zones: [zone.id] },
    );
    cleanup.add(enginePath('systems', system.id));
    return system;
}

/**
 * Make an edge. The create response has no id, so find the edge by its
 * name in the list.
 */
export async function createEdge(
    api: APIRequestContext,
    cleanup: Cleanup,
): Promise<{ id: string; name: string }> {
    const name = uniqueName('E2E Edge');
    await createResource(api, `${ENGINE_API}/edges`, { name });
    let edge: { id: string; name: string } | undefined;
    await expect
        .poll(async () => {
            const list = asList<{ id: string; name: string }>(
                await getJson(api, `${ENGINE_API}/edges`, { q: name }),
            );
            edge = list.find((item) => item.name === name);
            return !!edge;
        })
        .toBe(true);
    if (!edge) throw new Error(`edge ${name} not found`);
    cleanup.add(enginePath('edges', edge.id));
    return edge;
}

/**
 * Make a settings level and change it once, so that it has a history entry.
 * `cleanup` does not need it: the settings go with their parent.
 */
export async function createSettingsWithHistory(
    api: APIRequestContext,
    parent_id: string,
    old_value: string,
    new_value: string,
): Promise<Settings> {
    const settings = await createResource<Settings>(
        api,
        `${ENGINE_API}/settings`,
        {
            parent_id,
            encryption_level: ENCRYPTION_LEVEL.none,
            settings_string: old_value,
        },
    );
    const res = await api.patch(enginePath('settings', settings.id), {
        data: { settings_string: new_value },
    });
    expect(res.ok(), await res.text()).toBe(true);
    return res.json();
}

/** Settings strings of a parent at one level, as the API gives them */
export async function settingsOf(
    api: APIRequestContext,
    parent_id: string,
    level: number = ENCRYPTION_LEVEL.none,
): Promise<string[]> {
    const list = asList<Settings>(
        await getJson(api, `${ENGINE_API}/settings`, { parent_id }),
    );
    return list
        .filter((item) => item.encryption_level === level)
        .map((item) => item.settings_string);
}

/** HTTP status of a record, e.g. 404 after it is deleted */
export async function statusOf(
    api: APIRequestContext,
    collection: string,
    id: string,
): Promise<number> {
    return (await api.get(enginePath(collection, id))).status();
}

/** One field of a record, as the API gives it now */
export async function fieldOf<T, K extends keyof T>(
    api: APIRequestContext,
    collection: string,
    id: string,
    field: K,
): Promise<T[K]> {
    const item = await getJson<T>(api, enginePath(collection, id));
    return item[field];
}

/**
 * Replace the text of the settings editor in `scope`. The editor is Monaco,
 * so select all of its text and type over it. The `Desktop Chrome` device
 * has a Windows user agent, so Monaco uses Control, also on macOS. `insertText`
 * does not trigger the auto-close of brackets and quotes.
 */
export async function fillSettingsEditor(
    scope: Locator,
    text: string,
): Promise<void> {
    const page = scope.page();
    const lines = scope.locator(
        'settings-form-field .monaco-editor .view-lines',
    );
    await lines.click();
    await page.keyboard.press('Control+a');
    await page.keyboard.press('Delete');
    await page.keyboard.insertText(text);
}

/** Last word of a name from `uniqueName()`, which no other record has */
export function lastWord(name: string): string {
    return name.split(' ').pop() ?? name;
}

/** A module as the API gives it now */
export function getModule(api: APIRequestContext, id: string): Promise<Module> {
    return getJson<Module>(api, enginePath('modules', id));
}
