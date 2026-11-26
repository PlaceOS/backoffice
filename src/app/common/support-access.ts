import { computed, signal } from '@angular/core';
import {
    type CallOptions,
    groups as groups_v7,
    type GroupsCurrentGroup,
    type Module,
    modules as modules_v7,
    type System,
    systems as systems_v7,
    type User,
    type Zone,
    zones,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { collectPages, type QueryResponse, staticPage } from './types';

let storage_key = '';
const selected_id = signal('');

const access = signal<{
    user: Pick<User, 'id' | 'sys_admin' | 'support'> | null;
    groups: readonly GroupsCurrentGroup[];
}>({ user: null, groups: [] });

export const hasSupportRole = computed(
    () => !!(access().user?.sys_admin || access().user?.support),
);
export const hasSupportSubsystem = computed(() => access().groups.length > 0);
export const isSubsystemUser = computed(
    () => hasSupportSubsystem() && !hasSupportRole(),
);

export const support_groups = computed(() => access().groups);
export const selected_support_group_id = selected_id.asReadonly();
export const selected_support_group = computed(() =>
    support_groups().find(({ group }) => group.id === selected_id()),
);
const active_groups = computed(() => {
    const selected = selected_support_group();
    return selected ? [selected] : support_groups();
});

export function selectSupportGroup(id: string) {
    if (
        id
            ? !support_groups().some(({ group }) => group.id === id)
            : !hasSupportRole()
    )
        return false;
    selected_id.set(id);
    try {
        localStorage.setItem(storage_key, id);
    } catch {
        /* Storage is optional. */
    }
    return true;
}

/** Sidebar visibility uses the same role restrictions as the resource routes. */
export function canAccessSection(section: string) {
    const user = access().user;
    if (user?.sys_admin) return true;
    if (['systems', 'modules', 'zones'].includes(section)) {
        return (
            hasSupportRole() ||
            active_groups().some(({ permissions }) => !!(permissions & 1))
        );
    }
    if (['drivers', 'triggers', 'alerts', 'metrics'].includes(section))
        return hasSupportRole();
    if (section === 'users')
        return (
            isSubsystemUser() &&
            active_groups().some(
                ({ permissions }) => !!(permissions & (1 | 2 | 4 | 8 | 64)),
            )
        );
    return false;
}

/** Id of the latest `loadSupportAccess` call, so stale group lists are dropped */
let load_version = 0;

function savedGroupId() {
    try {
        return localStorage.getItem(storage_key) || '';
    } catch {
        /* Storage is optional. */
        return '';
    }
}

/** Publish the user with their support groups and restore the saved group. */
function publishAccess(user: User, groups: readonly GroupsCurrentGroup[]) {
    const available = groups
        .filter(
            ({ group, permissions }) =>
                !!group.subsystems?.includes('support') && permissions > 0,
        )
        .sort((a, b) => (a.group.name ?? '').localeCompare(b.group.name ?? ''));
    access.set({ user, groups: available });
    const saved = savedGroupId();
    selected_id.set(
        available.some(({ group }) => group.id === saved)
            ? saved
            : user.sys_admin || user.support
              ? ''
              : available[0]?.group.id || '',
    );
}

/**
 * Load effective memberships for the signed-in user. Resolves once access is
 * usable. Sys admins can open every route without groups, so unless a saved
 * group scopes their first queries, they are published at once and the group
 * list fills in when it arrives. For other users, rejects when the membership
 * request fails, so the caller can retry. A failure is not "no groups".
 */
export async function loadSupportAccess(user: User) {
    const version = ++load_version;
    const previous = access();
    clearSupportModuleCache();
    storage_key = `BACKOFFICE.support_group.${user.authority_id}.${user.id}`;
    const groups = user.sys_admin
        ? collectPages(groups_v7.query({ limit: 1000 }).then(orThrowPage)).then(
              (groups) => groups.map((group) => ({ group, permissions: 255 })),
          )
        : groups_v7.current({ subsystem: 'support' }).then(orThrow);
    if (user.sys_admin && !savedGroupId()) {
        // Keep the old list on reconnect so the group picker does not blink
        access.set({
            user,
            groups: previous.user?.id === user.id ? previous.groups : [],
        });
        selected_id.set('');
        groups.then(
            (list) => version === load_version && publishAccess(user, list),
            () => undefined,
        );
        return;
    }
    access.set({ user: null, groups: [] });
    selected_id.set('');
    const list = await groups.catch((error: unknown) => {
        // A newer load replaces this one, so only its failure is reported
        if (version === load_version) throw error;
        return null;
    });
    if (list && version === load_version) publishAccess(user, list);
}

/** Membership bits enable actions. The API checks zone grants on each request. */
export function canUseSupportAction(permission: number) {
    return active_groups().some(
        ({ permissions }) => (permissions & (permission | 64)) !== 0,
    );
}

/**
 * Query the systems that the support group can see.
 * @param call_options `signal` cancels the request and its next pages
 */
export function querySupportSystems(
    options: Parameters<typeof systems_v7.query>[0] = {},
    call_options?: CallOptions,
) {
    if (
        selected_id() &&
        !hasSupportRole() &&
        !(selected_support_group()?.permissions & 1)
    ) {
        return Promise.resolve(staticPage<System>([]));
    }
    return systems_v7
        .query(
            {
                ...options,
                ...(isSubsystemUser() ? { subsystem: 'support' } : {}),
                ...(selected_id() ? { group_id: selected_id() } : {}),
            },
            call_options,
        )
        .then(orThrowPage);
}

/**
 * Browse group anchors first; child queries use the selected parent.
 * @param call_options `signal` cancels the requests and their next pages
 */
export function querySupportZones(
    options: Parameters<typeof zones.query>[0] = {},
    call_options?: CallOptions,
): QueryResponse<Zone> {
    if ((!isSubsystemUser() && !selected_id()) || options.parent_id) {
        return zones.query(options, call_options).then(orThrowPage);
    }
    const groups = active_groups().filter(
        ({ permissions }) => hasSupportRole() || !!(permissions & 1),
    );
    return Promise.all(
        groups.map(async ({ group }) => {
            // Ask for large pages, as the pages load one after another
            const query = { limit: 1000, ...options, group_id: group.id };
            return collectPages(
                zones.query(query, call_options).then(orThrowPage),
            );
        }),
    ).then((results) => {
        const data = [
            ...new Map(results.flat().map((zone) => [zone.id, zone])).values(),
        ];
        data.sort((a, b) => a.name.localeCompare(b.name));
        return staticPage(data);
    });
}

/**
 * Time that a loaded module set stays in use. A walk of a large group takes
 * some seconds (500 systems = 63 batches of requests). 60 s keeps the set
 * when the user goes to a different section and comes back, but module
 * changes that other users make show again after one minute.
 */
const MODULE_CACHE_TTL_MS = 60 * 1000;

/**
 * Module set of one support group, shared by list loads and searches.
 * `expires` is Infinity while the walk runs, so a long walk is not restarted.
 */
let module_cache: {
    group_id: string;
    modules: Promise<Module[]>;
    expires: number;
} | null = null;

/**
 * Drop the cached support group modules. Called when the user or access
 * changes, and after a module is saved or removed. A group change and
 * `MODULE_CACHE_TTL_MS` also replace the set.
 */
export function clearSupportModuleCache() {
    module_cache = null;
}

/** Walk the group's systems for their modules. Stops early once superseded. */
async function loadGroupModules(entry: {
    group_id: string;
}): Promise<Module[]> {
    const superseded = () =>
        module_cache !== entry || selected_id() !== entry.group_id;
    const systems = await collectPages(querySupportSystems({ limit: 1000 }));
    const modules: Module[] = [];
    // Bound concurrent requests when a group contains many systems.
    for (let index = 0; index < systems.length; index += 8) {
        if (superseded()) {
            // The walk did not finish, so its set must not be reused
            if (module_cache === entry) module_cache = null;
            return [];
        }
        const pages = await Promise.all(
            systems.slice(index, index + 8).map((system) =>
                collectPages(
                    modules_v7
                        .query({ control_system_id: system.id })
                        .then(orThrowPage),
                ).catch((error: unknown) => {
                    // A readable group can contain systems without a zone Read grant.
                    if (
                        error &&
                        typeof error === 'object' &&
                        'status' in error &&
                        error.status === 403
                    )
                        return [];
                    throw error;
                }),
            ),
        );
        modules.push(...pages.flat());
    }
    return [...new Map(modules.map((module) => [module.id, module])).values()];
}

/**
 * The modules API has no group filter, so list modules through the group's
 * systems. The walk runs once per group and searches filter it in the browser.
 * `modules.query` ignores other filters with `control_system_id`, so only `q`
 * applies here.
 * @param call_options `signal` cancels a direct query. It does not cancel the
 * shared group walk, as other searches use it
 */
export async function querySupportModules(
    options: Parameters<typeof modules_v7.query>[0] = {},
    call_options?: CallOptions,
): QueryResponse<Module> {
    if (!selected_id() || options.control_system_id)
        return modules_v7.query(options, call_options).then(orThrowPage);
    const group_id = selected_id();
    let entry = module_cache;
    if (entry?.group_id !== group_id || Date.now() >= entry.expires) {
        const next = {
            group_id,
            modules: null as Promise<Module[]>,
            expires: Infinity,
        };
        module_cache = entry = next;
        next.modules = loadGroupModules(next);
        next.modules.then(
            () => (next.expires = Date.now() + MODULE_CACHE_TTL_MS),
            // A failed walk must not be reused by the next search
            () => {
                if (module_cache === next) module_cache = null;
            },
        );
    }
    const search = (options.q || '').toLowerCase();
    const data = (await entry.modules).filter(
        (module) =>
            !search ||
            [module.name, module.custom_name, module.id].some((value) =>
                value?.toLowerCase().includes(search),
            ),
    );
    return staticPage(data);
}
