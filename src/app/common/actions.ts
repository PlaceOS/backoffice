import { Type } from '@angular/core';
import {
    Domain,
    domains as domains_v7,
    Driver,
    drivers as drivers_v7,
    Group,
    groups as groups_v7,
    Module,
    modules as modules_v7,
    repositories as repositories_v7,
    Repository,
    type Schema,
    System,
    systems as systems_v7,
    Trigger,
    triggers as triggers_v7,
    User,
    users as users_v7,
    Zone,
    zones as zones_v7,
} from '@placeos/ts-client';
import {
    orThrow,
    orThrowPage,
    type Page,
    PlaceDriverRole,
} from '@placeos/ts-client/compat';
import { moduleBody } from '../modules/modules.utilities';
import {
    CascadePlan,
    CascadeResourceType,
    planDomainCascade,
    planZoneCascade,
} from './cascade-delete';
import { newItem, toBody, toJsonBody } from './placeos';
import {
    clearSupportModuleCache,
    querySupportModules,
    querySupportSystems as querySystems,
    querySupportZones as queryZones,
} from './support-access';
import { mapPage } from './types';

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
    query: (
        _?: string,
        options?: { include_deleted?: boolean },
    ) => Promise<Page<readonly T[]>>;
    show: (_: string) => Promise<T>;
    save: (_: T) => Promise<T>;
    remove: (_: T) => Promise<unknown>;
    /** Schema of the item. `newItem(schema, data)` makes a full item */
    schema: Schema<T, unknown>;
    loadModal: () => Promise<Type<unknown>>;
    delete_message: string;
    delete_extra?: (_: T) => Promise<[string, string]>;
    cascade?: ItemCascade<T>;
    name: string;
}

const domains: ItemActions<Domain> = {
    query: (_) =>
        domains_v7
            .query({ q: _, fields: ['id', 'name', 'domain'] })
            .then(orThrowPage),
    show: (_) => domains_v7.show({ id: _ }).then(orThrow),
    save: (item) =>
        item.id
            ? domains_v7
                  .update({ id: item.id, body: toBody(Domain, item) })
                  .then(orThrow)
            : domains_v7.create({ body: toBody(Domain, item) }).then(orThrow),
    remove: (item) => domains_v7.destroy({ id: item.id }).then(orThrow),
    schema: Domain,
    loadModal: () =>
        import('../domains/domain-form.component').then(
            (m) => m.DomainFormComponent,
        ),
    delete_message: ``,
    cascade: {
        label: 'DOMAINS.DELETE_CASCADE',
        description: 'DOMAINS.DELETE_CASCADE_DESC',
        resource_type: 'domain',
        plan: (item) => planDomainCascade(item),
    },
    name: 'DOMAINS',
};

const drivers: ItemActions<Driver> = {
    query: (_) =>
        drivers_v7
            .query({ q: _, fields: ['id', 'name', 'module_name'] })
            .then(orThrowPage),
    show: (_) => drivers_v7.show({ id: _ }).then(orThrow),
    save: (item) =>
        item.id
            ? drivers_v7
                  .update({ id: item.id, body: toBody(Driver, item) })
                  .then(orThrow)
            : drivers_v7.create({ body: toBody(Driver, item) }).then(orThrow),
    remove: (item) => drivers_v7.destroy({ id: item.id }).then(orThrow),
    schema: Driver,
    loadModal: () =>
        import('../drivers/driver-form.component').then(
            (m) => m.DriverFormComponent,
        ),
    delete_message: ``,
    delete_extra: async (_) => {
        const count = await modules_v7
            .query({ offset: 0, limit: 1, driver_id: _.id })
            .then(orThrowPage)
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

const groups: ItemActions<Group> = {
    query: (_) =>
        groups_v7
            .query({
                q: _,
                fields: ['id', 'name', 'description', 'authority_id'],
            })
            .then(orThrowPage),
    show: (_) => groups_v7.show({ id: _ }).then(orThrow),
    save: (item) =>
        item.id
            ? groups_v7
                  .update({ id: item.id, body: toBody(Group, item) })
                  .then(orThrow)
            : groups_v7.create({ body: toBody(Group, item) }).then(orThrow),
    remove: (item) => groups_v7.destroy({ id: item.id }).then(orThrow),
    schema: Group,
    loadModal: () =>
        import('../groups/group-form.component').then(
            (m) => m.GroupFormComponent,
        ),
    delete_message: ``,
    name: 'GROUPS',
};

const modules: ItemActions<Module> = {
    query: (_) =>
        querySupportModules({
            q: _,
            fields: ['id', 'name', 'custom_name', 'module_name'],
        }),
    show: (_) => modules_v7.show({ id: _ }).then(orThrow),
    // The support group module list is cached, so drop it once this lands
    save: (item) =>
        (item.id
            ? modules_v7
                  .update({ id: item.id, body: moduleBody(item) })
                  .then(orThrow)
            : modules_v7
                  .create({
                      // The server gives a missing port 0, which a device
                      // module refuses. 6.x sent 1, as a bulk import does here
                      body: moduleBody({ ...item, port: item.port || 1 }),
                  })
                  .then(orThrow)
        ).finally(clearSupportModuleCache),
    remove: (item) =>
        modules_v7
            .destroy({ id: item.id })
            .then(orThrow)
            .finally(clearSupportModuleCache),
    schema: Module,
    loadModal: () =>
        import('../modules/module-form.component').then(
            (m) => m.ModuleFormComponent,
        ),
    delete_message: ``,
    name: 'MODULES',
};

const repositories: ItemActions<Repository> = {
    query: (_) =>
        repositories_v7
            .query({ q: _, fields: ['id', 'name', 'repo_type'] })
            .then(orThrowPage),
    show: (_) => repositories_v7.show({ id: _ }).then(orThrow),
    save: (item) =>
        item.id
            ? repositories_v7
                  .update({ id: item.id, body: toBody(Repository, item) })
                  .then(orThrow)
            : repositories_v7
                  .create({ body: toBody(Repository, item) })
                  .then(orThrow),
    remove: (item) => repositories_v7.destroy({ id: item.id }).then(orThrow),
    schema: Repository,
    loadModal: () =>
        import('../repositories/repository-form.component').then(
            (m) => m.RepositoryFormComponent,
        ),
    delete_message: `'`,
    name: 'REPOS',
};

const systems: ItemActions<System> = {
    query: (_) =>
        querySystems({
            q: _,
            fields: ['id', 'name', 'display_name'],
        }),
    show: (_) => systems_v7.show({ sys_id: _ }).then(orThrow),
    save: saveSystem,
    remove: (item) => systems_v7.destroy({ sys_id: item.id }).then(orThrow),
    schema: System,
    loadModal: () =>
        import('../systems/system-form.component').then(
            (m) => m.SystemFormComponent,
        ),
    delete_message: ``,
    name: 'SYSTEMS',
};

type BulkSystemItem = Omit<System, 'modules'> & {
    modules?: readonly string[] | string;
    start_modules?: boolean;
};

async function saveSystem(item: System): Promise<System> {
    const { modules, start_modules, ...system_data } = item as BulkSystemItem;
    const { module_ids, driver_ids } = splitModuleIds(modules);
    const form_data = {
        ...system_data,
        support_url: processURL(item, item.support_url || ''),
    } as Partial<System>;
    if (modules !== undefined) {
        (form_data as { modules?: readonly string[] }).modules = module_ids;
    }
    if (item.id)
        return systems_v7
            .update({
                sys_id: item.id,
                version: form_data.version ?? 0,
                body: toBody(System, form_data),
            })
            .then(orThrow);
    const system = await systems_v7
        .create({ body: toBody(System, form_data) })
        .then(orThrow);
    await addLogicDriverModules(system, driver_ids);
    if (start_modules)
        await systems_v7.start({ sys_id: system.id }).then(orThrow);
    return system;
}

async function addLogicDriverModules(system: System, driver_ids: string[]) {
    if (!driver_ids.length) return;
    await Promise.all(
        [...new Set(driver_ids)].map(async (driver_id) => {
            const driver = await drivers_v7
                .show({ id: driver_id })
                .then(orThrow);
            if (driver.role !== PlaceDriverRole.Logic) return;
            await modules_v7
                .create({
                    body: {
                        driver_id: driver.id,
                        control_system_id: system.id,
                        name: driver.name || driver.module_name,
                        uri: driver.default_uri,
                        port: driver.default_port || 1,
                        role: driver.role,
                        alert_level: driver.alert_level,
                        ignore_connected: driver.ignore_connected,
                    } as Partial<Module>,
                })
                .then(orThrow);
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

function processURL(system: System, url: string) {
    for (const key in system) {
        url = url.replace(new RegExp(`{{${key}}}`, 'g'), `${system[key]}`);
    }
    url = url.replace(new RegExp(`{{origin}}`, 'g'), location.origin);
    url = url.replace(new RegExp(`{{host}}`, 'g'), location.host);
    url = url.replace(new RegExp(`{{pathname}}`, 'g'), location.pathname);
    return url;
}

const triggers: ItemActions<Trigger> = {
    query: (_) =>
        triggers_v7
            .query({ q: _, fields: ['id', 'name', 'display_name'] })
            .then(orThrowPage),
    show: (_) => triggers_v7.show({ id: _ }).then(orThrow),
    save: (item) =>
        item.id
            ? triggers_v7
                  .update({ id: item.id, body: toBody(Trigger, item) })
                  .then(orThrow)
            : triggers_v7.create({ body: toBody(Trigger, item) }).then(orThrow),
    remove: (item) => triggers_v7.destroy({ id: item.id }).then(orThrow),
    schema: Trigger,
    loadModal: () =>
        import('../triggers/trigger-form.component').then(
            (m) => m.TriggerFormComponent,
        ),
    delete_message: ``,
    name: 'TRIGGERS',
};

const users: ItemActions<User> = {
    query: (_, options) =>
        users_v7
            .query({
                ...options,
                q: _,
                fields: [
                    'id',
                    'name',
                    'email',
                    'authority_id',
                    'groups',
                    'deleted',
                ],
            })
            .then(orThrowPage)
            .then((page) => mapPage(page, (user) => newItem(User, user))),
    // The server can send a user without the admin fields. `newItem` gives them their empty value
    show: (_) =>
        users_v7
            .show({ id: _ })
            .then(orThrow)
            .then((user) => newItem(User, user)),
    save: (item) =>
        item.id
            ? users_v7
                  .update({ id: item.id, body: toJsonBody(item) })
                  .then(orThrow)
                  .then((user) => newItem(User, user))
            : users_v7
                  .create({ body: toJsonBody(item) })
                  .then(orThrow)
                  .then((user) => newItem(User, user)),
    remove: (item) => users_v7.destroy({ id: item.id }).then(orThrow),
    schema: User,
    loadModal: () =>
        import('../users/user-form.component').then((m) => m.UserFormComponent),
    delete_message: ``,
    name: 'USERS',
};

const zones: ItemActions<Zone> = {
    query: (_) =>
        queryZones({
            q: _,
            fields: ['id', 'name', 'display_name', 'tags'],
        }),
    show: (_) => zones_v7.show({ id: _ }).then(orThrow),
    save: (item) =>
        item.id
            ? zones_v7
                  .update({ id: item.id, body: toBody(Zone, item) })
                  .then(orThrow)
            : zones_v7.create({ body: toBody(Zone, item) }).then(orThrow),
    remove: (item) => zones_v7.destroy({ id: item.id }).then(orThrow),
    schema: Zone,
    loadModal: () =>
        import('../zones/zone-form.component').then((m) => m.ZoneFormComponent),
    delete_message: ``,
    cascade: {
        label: 'ZONES.DELETE_CASCADE',
        description: 'ZONES.DELETE_CASCADE_DESC',
        resource_type: 'zone',
        plan: (item) => planZoneCascade(item.id),
    },
    name: 'ZONES',
};

/** Item type of each resource type */
export interface ItemTypes {
    domains: Domain;
    drivers: Driver;
    groups: Group;
    modules: Module;
    repositories: Repository;
    systems: System;
    triggers: Trigger;
    users: User;
    zones: Zone;
}

export const ACTIONS: { [K in keyof ItemTypes]: ItemActions<ItemTypes[K]> } = {
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
