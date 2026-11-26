import { Type } from '@angular/core';
import {
    type CallError,
    type CallOptions,
    Domain,
    domains as domains_v7,
    Driver,
    drivers as drivers_v7,
    Group,
    groups as groups_v7,
    Module,
    modules as modules_v7,
    type Reply,
    repositories as repositories_v7,
    Repository,
    type Result,
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
import { mapPage, type QueryResponse } from './types';

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

/** Options of `ItemActions.query`. `signal` cancels the query and its next pages */
export interface ItemQueryOptions {
    include_deleted?: boolean;
    signal?: AbortSignal;
}

export interface ItemActions<T> {
    query: (_?: string, options?: ItemQueryOptions) => QueryResponse<T>;
    /** Load one item. `signal` cancels the request */
    show: (_: string, signal?: AbortSignal) => Promise<T>;
    /** Creates the item, or updates it when it has an `id` */
    save: (_: Partial<T>) => Promise<T>;
    remove: (_: T) => Promise<unknown>;
    /** Schema of the item. `newItem(schema, data)` makes a full item */
    schema: Schema<T, unknown>;
    loadModal: () => Promise<Type<unknown>>;
    delete_message: string;
    delete_extra?: (_: T) => Promise<[string, string]>;
    cascade?: ItemCascade<T>;
    name: string;
}

/** A call of the API that gives a reply with data of type `O` */
type ApiCall<I, O> = (
    input: I,
    options?: CallOptions,
) => Promise<Result<Reply<O>, CallError>>;

/** The operations of an item type with plain query, show, create, update and destroy calls */
interface CrudApi<T, B> {
    query: ApiCall<{ q?: string; fields?: readonly string[] }, readonly T[]>;
    show: ApiCall<{ id: string }, T>;
    create: ApiCall<{ body: B }, T>;
    update: ApiCall<{ id: string; body: B }, T>;
    destroy: ApiCall<{ id: string }, unknown>;
}

/**
 * The query, show, save and remove actions of an item type with plain calls.
 * @param fields The fields that a query gives, for the item lists
 */
function crudActions<T extends { readonly id?: string }, B>(
    api: CrudApi<T, B>,
    schema: Schema<T, B>,
    fields: readonly string[],
) {
    return {
        query: (q?: string, { signal }: ItemQueryOptions = {}) =>
            api.query({ q, fields }, { signal }).then(orThrowPage),
        show: (id: string, signal?: AbortSignal) =>
            api.show({ id }, { signal }).then(orThrow),
        save: (item: Partial<T>) =>
            item.id
                ? api
                      .update({ id: item.id, body: toBody(schema, item) })
                      .then(orThrow)
                : api.create({ body: toBody(schema, item) }).then(orThrow),
        remove: (item: T) => api.destroy({ id: item.id }).then(orThrow),
        schema,
    } satisfies Partial<ItemActions<T>>;
}

const domains: ItemActions<Domain> = {
    ...crudActions(domains_v7, Domain, ['id', 'name', 'domain']),
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
    ...crudActions(drivers_v7, Driver, ['id', 'name', 'module_name']),
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
    ...crudActions(groups_v7, Group, [
        'id',
        'name',
        'description',
        'authority_id',
    ]),
    loadModal: () =>
        import('../groups/group-form.component').then(
            (m) => m.GroupFormComponent,
        ),
    delete_message: ``,
    name: 'GROUPS',
};

const modules: ItemActions<Module> = {
    query: (_, { signal } = {}) =>
        querySupportModules(
            {
                q: _,
                fields: ['id', 'name', 'custom_name', 'module_name'],
            },
            { signal },
        ),
    show: (_, signal) => modules_v7.show({ id: _ }, { signal }).then(orThrow),
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
    ...crudActions(repositories_v7, Repository, ['id', 'name', 'repo_type']),
    loadModal: () =>
        import('../repositories/repository-form.component').then(
            (m) => m.RepositoryFormComponent,
        ),
    delete_message: ``,
    name: 'REPOS',
};

const systems: ItemActions<System> = {
    query: (_, { signal } = {}) =>
        querySystems(
            {
                q: _,
                fields: ['id', 'name', 'display_name'],
            },
            { signal },
        ),
    show: (_, signal) =>
        systems_v7.show({ sys_id: _ }, { signal }).then(orThrow),
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

type BulkSystemItem = Omit<Partial<System>, 'modules'> & {
    modules?: readonly string[] | string;
    start_modules?: boolean;
};

/**
 * Creates or updates a system. A new system from a bulk import can also list
 * driver ids in `modules`: it gets a module for each logic driver, and it
 * starts when `start_modules` is set.
 */
async function saveSystem(item: Partial<System>): Promise<System> {
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

/** Fills the `{{key}}` fields of a support URL from the system and the page location */
function processURL(system: Partial<System>, url: string) {
    for (const key in system) {
        url = url.replace(new RegExp(`{{${key}}}`, 'g'), `${system[key]}`);
    }
    url = url.replace(new RegExp(`{{origin}}`, 'g'), location.origin);
    url = url.replace(new RegExp(`{{host}}`, 'g'), location.host);
    url = url.replace(new RegExp(`{{pathname}}`, 'g'), location.pathname);
    return url;
}

const triggers: ItemActions<Trigger> = {
    ...crudActions(triggers_v7, Trigger, ['id', 'name', 'display_name']),
    loadModal: () =>
        import('../triggers/trigger-form.component').then(
            (m) => m.TriggerFormComponent,
        ),
    delete_message: ``,
    name: 'TRIGGERS',
};

const users: ItemActions<User> = {
    query: (_, { signal, ...options } = {}) =>
        users_v7
            .query(
                {
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
                },
                { signal },
            )
            .then(orThrowPage)
            .then((page) => mapPage(page, toUser)),
    show: (_, signal) =>
        users_v7.show({ id: _ }, { signal }).then(orThrow).then(toUser),
    save: (item) =>
        item.id
            ? users_v7
                  .update({ id: item.id, body: toJsonBody(item) })
                  .then(orThrow)
                  .then(toUser)
            : users_v7
                  .create({ body: toJsonBody(item) })
                  .then(orThrow)
                  .then(toUser),
    remove: (item) => users_v7.destroy({ id: item.id }).then(orThrow),
    schema: User,
    loadModal: () =>
        import('../users/user-form.component').then((m) => m.UserFormComponent),
    delete_message: ``,
    name: 'USERS',
};

const ZONE_FIELDS = ['id', 'name', 'display_name', 'tags'];

const zones: ItemActions<Zone> = {
    ...crudActions(zones_v7, Zone, ZONE_FIELDS),
    // The zone list of a support user or a selected group starts at its group zones
    query: (_, { signal } = {}) =>
        queryZones({ q: _, fields: ZONE_FIELDS }, { signal }),
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

/** The admin user. The server can send a user without the admin fields, and `newItem` gives them their empty value */
const toUser = (user: unknown) => newItem(User, user);

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
