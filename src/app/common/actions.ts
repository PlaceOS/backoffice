import { Type } from '@angular/core';
import {
    addDomain,
    addDriver,
    addGroup,
    addModule,
    addRepository,
    addSystem,
    addTrigger,
    addUser,
    addZone,
    PlaceDomain,
    PlaceDriver,
    PlaceDriverRole,
    PlaceGroup,
    PlaceModule,
    PlaceRepository,
    PlaceSystem,
    PlaceTrigger,
    PlaceUser,
    PlaceZone,
    queryDomains,
    queryDrivers,
    queryGroups,
    queryModules,
    queryRepositories,
    QueryResponse,
    querySystems,
    queryTriggers,
    queryUsers,
    queryZones,
    removeDomain,
    removeDriver,
    removeGroup,
    removeModule,
    removeRepository,
    removeSystem,
    removeTrigger,
    removeUser,
    removeZone,
    showDomain,
    showDriver,
    showGroup,
    showModule,
    showRepository,
    showSystem,
    showTrigger,
    showUser,
    showZone,
    startSystem,
    updateDomain,
    updateDriver,
    updateGroup,
    updateModule,
    updateRepository,
    updateSystem,
    updateTrigger,
    updateUser,
    updateZone,
} from '@placeos/ts-client';
import {
    CascadePlan,
    CascadeResourceType,
    planDomainCascade,
    planZoneCascade,
} from './cascade-delete';
import { DomainFormComponent } from '../domains/domain-form.component';
import { DriverFormComponent } from '../drivers/driver-form.component';
import { GroupFormComponent } from '../groups/group-form.component';
import { ModuleFormComponent } from '../modules/module-form.component';
import { RepositoryFormComponent } from '../repositories/repository-form.component';
import { SystemFormComponent } from '../systems/system-form.component';
import { TriggerFormComponent } from '../triggers/trigger-form.component';
import { UserFormComponent } from '../users/user-form.component';
import { ZoneFormComponent } from '../zones/zone-form.component';

/**
 * Optional "also remove the things associated with this item" behaviour,
 * surfaced as a checkbox on the delete confirmation. Off by default — deleting
 * an item without touching its associated resources stays the default.
 */
export interface ItemCascade<T> {
    /** i18n key for the checkbox label */
    label: string;
    /** i18n key for the text shown under the checkbox */
    description: string;
    /** Type of the item itself, so it can be labelled on the receipt */
    resource_type: CascadeResourceType;
    /** Resolves what would be removed alongside the item */
    plan: (_: T) => Promise<CascadePlan>;
}

export interface ItemActions<T> {
    query: (_?: string) => QueryResponse<T>;
    show: (_: string) => Promise<T>;
    save: (_: T) => Promise<T>;
    remove: (_: T) => Promise<unknown>;
    itemConstructor: Type<T>;
    modalComponent: Type<unknown>;
    delete_message: string;
    delete_extra?: (_: T) => Promise<[string, string]>;
    cascade?: ItemCascade<T>;
    name: string;
}

const domains: ItemActions<PlaceDomain> = {
    query: (_) =>
        queryDomains({
            q: _,
            fields: ['id', 'name', 'domain'].join(','),
        }),
    show: (_) => showDomain(_),
    save: (item) => (item.id ? updateDomain(item.id, item) : addDomain(item)),
    remove: (item) => removeDomain(item.id),
    itemConstructor: PlaceDomain,
    modalComponent: DomainFormComponent,
    delete_message: ``,
    cascade: {
        label: 'DOMAINS.DELETE_CASCADE',
        description: 'DOMAINS.DELETE_CASCADE_DESC',
        resource_type: 'domain',
        plan: (item) => planDomainCascade(item),
    },
    name: 'DOMAINS',
};

const drivers: ItemActions<PlaceDriver> = {
    query: (_) =>
        queryDrivers({
            q: _,
            fields: ['id', 'name', 'module_name'].join(','),
        }),
    show: (_) => showDriver(_),
    save: (item) => (item.id ? updateDriver(item.id, item) : addDriver(item)),
    remove: (item) => removeDriver(item.id),
    itemConstructor: PlaceDriver,
    modalComponent: DriverFormComponent,
    delete_message: ``,
    delete_extra: async (_) => {
        const query: Record<string, string | number> = {
            offset: 0,
            limit: 1,
            driver_id: _.id,
        };
        const count = await queryModules(query)
            .then(({ total }) => total)
            .catch((_err) => 0);
        return count
            ? [
                  'error',
                  `${count} modules that rely on this driver will be <strong>immediately</strong> removed.`,
              ]
            : null;
    },
    name: 'DRIVERS',
};

const groups: ItemActions<PlaceGroup> = {
    query: (_) =>
        queryGroups({
            q: _,
            fields: ['id', 'name', 'description', 'authority_id'].join(','),
        }),
    show: (_) => showGroup(_),
    save: (item) => (item.id ? updateGroup(item.id, item) : addGroup(item)),
    remove: (item) => removeGroup(item.id),
    itemConstructor: PlaceGroup,
    modalComponent: GroupFormComponent,
    delete_message: ``,
    name: 'GROUPS',
};

const modules: ItemActions<PlaceModule> = {
    query: (_) =>
        queryModules({
            q: _,
            fields: ['id', 'name', 'custom_name', 'module_name'].join(','),
        }),
    show: (_) => showModule(_),
    save: (item) => (item.id ? updateModule(item.id, item) : addModule(item)),
    remove: (item) => removeModule(item.id),
    itemConstructor: PlaceModule,
    modalComponent: ModuleFormComponent,
    delete_message: ``,
    name: 'MODULES',
};

const repositories: ItemActions<PlaceRepository> = {
    query: (_) =>
        queryRepositories({
            q: _,
            fields: ['id', 'name', 'repo_type'].join(','),
        }),
    show: (_) => showRepository(_),
    save: (item) =>
        item.id ? updateRepository(item.id, item) : addRepository(item),
    remove: (item) => removeRepository(item.id),
    itemConstructor: PlaceRepository,
    modalComponent: RepositoryFormComponent,
    delete_message: `'`,
    name: 'REPOS',
};

const systems: ItemActions<PlaceSystem> = {
    query: (_) =>
        querySystems({
            q: _,
            fields: ['id', 'name', 'display_name'].join(','),
        }),
    show: (_) => showSystem(_),
    save: (item) => saveSystem(item),
    remove: (item) => removeSystem(item.id),
    itemConstructor: PlaceSystem,
    modalComponent: SystemFormComponent,
    delete_message: ``,
    name: 'SYSTEMS',
};

type BulkSystemItem = Omit<PlaceSystem, 'modules'> & {
    modules?: readonly string[] | string;
    start_modules?: boolean;
};

async function saveSystem(item: PlaceSystem): Promise<PlaceSystem> {
    const { modules, start_modules, ...system_data } = item as BulkSystemItem;
    const { module_ids, driver_ids } = splitModuleIds(modules);
    const form_data = {
        ...system_data,
        support_url: processURL(item, item.support_url || ''),
    } as Partial<PlaceSystem>;
    if (modules !== undefined) {
        (form_data as { modules?: readonly string[] }).modules = module_ids;
    }
    if (item.id) return updateSystem(item.id, form_data);
    const system = await addSystem(form_data);
    await finishSystemBulkAdd(system, driver_ids, !!start_modules);
    return system;
}

async function finishSystemBulkAdd(
    system: PlaceSystem,
    driver_ids: string[],
    start_modules: boolean,
) {
    await addLogicDriverModules(system, driver_ids);
    if (start_modules) await startSystem(system.id);
}

async function addLogicDriverModules(
    system: PlaceSystem,
    driver_ids: string[],
) {
    if (!driver_ids.length) return;
    await Promise.all(
        [...new Set(driver_ids)].map(async (driver_id) => {
            const driver = await showDriver(driver_id);
            if (driver.role !== PlaceDriverRole.Logic) return;
            await addModule({
                driver_id: driver.id,
                control_system_id: system.id,
                name: driver.name || driver.module_name,
                uri: driver.default_uri,
                port: driver.default_port || 1,
                role: driver.role,
                alert_level: driver.alert_level,
                ignore_connected: driver.ignore_connected,
            } as Partial<PlaceModule>);
        }),
    );
}

function splitModuleIds(modules: readonly string[] | string | undefined) {
    const ids = parseIdList(modules);
    return {
        module_ids: ids.filter((id) => !id.startsWith('driver-')),
        driver_ids: ids.filter((id) => id.startsWith('driver-')),
    };
}

function parseIdList(value: readonly string[] | string | undefined): string[] {
    if (Array.isArray(value)) return value.filter((id) => !!id);
    if (typeof value !== 'string') return [];
    const trimmed = value.trim();
    if (!trimmed) return [];
    try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parseIdList(parsed);
    } catch {
        // Continue with delimited text parsing for non-JSON cells.
    }
    return trimmed
        .replace(/^\[/, '')
        .replace(/\]$/, '')
        .split(/[\s,]+/)
        .map((id) => id.replace(/^['"]|['"]$/g, ''))
        .filter((id) => !!id);
}

function processURL(system: PlaceSystem, url: string) {
    for (const key in system) {
        url = url.replace(new RegExp(`{{${key}}}`, 'g'), `${system[key]}`);
    }
    url = url.replace(new RegExp(`{{origin}}`, 'g'), location.origin);
    url = url.replace(new RegExp(`{{host}}`, 'g'), location.host);
    url = url.replace(new RegExp(`{{pathname}}`, 'g'), location.pathname);
    return url;
}

const triggers: ItemActions<PlaceTrigger> = {
    query: (_) =>
        queryTriggers({
            q: _,
            fields: ['id', 'name', 'display_name'].join(','),
        }),
    show: (_) => showTrigger(_),
    save: (item) => (item.id ? updateTrigger(item.id, item) : addTrigger(item)),
    remove: (item) => removeTrigger(item.id),
    itemConstructor: PlaceTrigger,
    modalComponent: TriggerFormComponent,
    delete_message: ``,
    name: 'TRIGGERS',
};

const users: ItemActions<PlaceUser> = {
    query: (_) =>
        queryUsers({
            q: _,
            fields: ['id', 'name', 'email', 'authority_id', 'groups'].join(','),
        }),
    show: (_) => showUser(_),
    save: (item) => (item.id ? updateUser(item.id, item) : addUser(item)),
    remove: (item) => removeUser(item.id),
    itemConstructor: PlaceUser,
    modalComponent: UserFormComponent,
    delete_message: ``,
    name: 'USERS',
};

const zones: ItemActions<PlaceZone> = {
    query: (_) =>
        queryZones({
            q: _,
            fields: ['id', 'name', 'display_name', 'tags'].join(','),
        }),
    show: (_) => showZone(_),
    save: (item) => (item.id ? updateZone(item.id, item) : addZone(item)),
    remove: (item) => removeZone(item.id),
    itemConstructor: PlaceZone,
    modalComponent: ZoneFormComponent,
    delete_message: ``,
    cascade: {
        label: 'ZONES.DELETE_CASCADE',
        description: 'ZONES.DELETE_CASCADE_DESC',
        resource_type: 'zone',
        plan: (item) => planZoneCascade(item.id),
    },
    name: 'ZONES',
};

export const ACTIONS = {
    domains,
    drivers,
    groups,
    modules,
    repositories,
    systems,
    triggers,
    users,
    zones,
};
