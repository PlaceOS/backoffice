import { computed, signal } from '@angular/core';
import {
    currentGroups,
    PlaceCurrentGroup,
    PlaceModule,
    PlaceUser,
    PlaceZone,
    PlaceZoneQueryOptions,
    queryGroups,
    queryModules,
    QueryResponse,
    querySystems,
    queryZones,
} from '@placeos/ts-client';

let storage_key = '';
const selected_id = signal('');

const access = signal<{
    user: Pick<PlaceUser, 'sys_admin' | 'support'> | null;
    groups: PlaceCurrentGroup[];
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

async function collectPages<T>(response: QueryResponse<T>) {
    let page = await response;
    const data = [...page.data];
    for (let i = 0; page.next && i < 1000; i++) {
        page = await page.next();
        data.push(...page.data);
    }
    if (page.next) throw new Error('Too many resource pages');
    return data;
}

/** Load effective memberships before publishing the signed-in user. */
export async function loadSupportAccess(user: PlaceUser) {
    access.set({ user: null, groups: [] });
    selected_id.set('');
    storage_key = `BACKOFFICE.support_group.${user.authority_id}.${user.id}`;
    const groups = await (
        user.sys_admin
            ? collectPages(queryGroups({ limit: 200 })).then((groups) =>
                  groups.map((group) => ({ group, permissions: 255 })),
              )
            : currentGroups({ subsystem: 'support' })
    ).catch(() => []);
    const available = groups
        .filter(
            ({ group, permissions }) =>
                group.subsystems.includes('support') && permissions > 0,
        )
        .sort((a, b) => a.group.name.localeCompare(b.group.name));
    access.set({ user, groups: available });
    let saved = '';
    try {
        saved = localStorage.getItem(storage_key) || '';
    } catch {
        /* Storage is optional. */
    }
    selected_id.set(
        available.some(({ group }) => group.id === saved)
            ? saved
            : user.sys_admin || user.support
              ? ''
              : available[0]?.group.id || '',
    );
}

/** Membership bits enable actions. The API checks zone grants on each request. */
export function canUseSupportAction(permission: number) {
    return active_groups().some(
        ({ permissions }) => (permissions & (permission | 64)) !== 0,
    );
}

export function querySupportSystems(
    options: Parameters<typeof querySystems>[0] = {},
) {
    if (
        selected_id() &&
        !hasSupportRole() &&
        !(selected_support_group()?.permissions & 1)
    ) {
        return Promise.resolve({ data: [], total: 0, next: null });
    }
    return querySystems({
        ...options,
        ...(isSubsystemUser() ? { subsystem: 'support' } : {}),
        ...(selected_id() ? { group_id: selected_id() } : {}),
    });
}

/** Browse group anchors first; child queries use the selected parent. */
export function querySupportZones(
    options: PlaceZoneQueryOptions = {},
): QueryResponse<PlaceZone> {
    if ((!isSubsystemUser() && !selected_id()) || options.parent_id) {
        return queryZones(options);
    }
    const groups = active_groups().filter(
        ({ permissions }) => hasSupportRole() || !!(permissions & 1),
    );
    return Promise.all(
        groups.map(async ({ group }) => {
            const query = { ...options, group_id: group.id };
            return collectPages(queryZones(query));
        }),
    ).then((results) => {
        const data = [
            ...new Map(results.flat().map((zone) => [zone.id, zone])).values(),
        ];
        data.sort((a, b) => a.name.localeCompare(b.name));
        return { data, total: data.length, next: null };
    });
}

/** The modules API has no group filter, so list modules through the group's systems. */
export async function querySupportModules(
    options: Parameters<typeof queryModules>[0] = {},
): QueryResponse<PlaceModule> {
    if (!selected_id() || options.control_system_id)
        return queryModules(options);
    const requested_group = selected_id();
    const systems = await collectPages(querySupportSystems({ limit: 200 }));
    const modules: PlaceModule[] = [];
    // Bound concurrent requests when a group contains many systems.
    for (let index = 0; index < systems.length; index += 8) {
        if (requested_group !== selected_id())
            return { data: [], total: 0, next: null };
        const pages = await Promise.all(
            systems.slice(index, index + 8).map((system) =>
                collectPages(
                    queryModules({ control_system_id: system.id }),
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
    const search = (options.q || '').toLowerCase();
    const data = [
        ...new Map(modules.map((module) => [module.id, module])).values(),
    ].filter(
        (module) =>
            !search ||
            [module.name, module.custom_name, module.id].some((value) =>
                value?.toLowerCase().includes(search),
            ),
    );
    return { data, total: data.length, next: null };
}
