import { required, SchemaFn } from '@angular/forms/signals';
import {
    authority,
    get,
    PlaceGroup,
    PlaceGroupAdMappings,
} from '@placeos/ts-client';
import type { PlaceTenant } from '../admin/staff-api.component';

export interface GroupFormModel {
    name: string;
    description: string;
    parent_id: string;
    authority_id: string;
    subsystems: string[];
    default_permissions: number;
    ad_group_mappings: PlaceGroupAdMappings;
}

/** Directory group returned by the staff API group search */
export interface StaffDirectoryGroup {
    id: string;
    name: string;
    email?: string;
    description?: string;
}

export function generateGroupFormModel(group?: PlaceGroup): GroupFormModel {
    return {
        name: group?.name || '',
        description: group?.description || '',
        parent_id: group?.parent_id || '',
        authority_id: group?.authority_id || authority()?.id || '',
        subsystems: group?.subsystems || [],
        default_permissions: group?.default_permissions || 0,
        ad_group_mappings: { ...(group?.ad_group_mappings || {}) },
    };
}

export const applyGroupFormSchema: SchemaFn<GroupFormModel> = (path) => {
    required(path.name);
};

/**
 * Returns a copy of `mappings` with the AD group added or replaced.
 * IDs are trimmed and lower-cased to match how the API stores them.
 */
export function setAdGroupMapping(
    mappings: PlaceGroupAdMappings,
    id: string,
    name: string,
    permissions: number,
): PlaceGroupAdMappings {
    const key = id.trim().toLowerCase();
    if (!key) return mappings;
    return { ...mappings, [key]: [name.trim() || key, +permissions || 0] };
}

/** Returns a copy of `mappings` without the AD group `id` */
export function removeAdGroupMapping(
    mappings: PlaceGroupAdMappings,
    id: string,
): PlaceGroupAdMappings {
    const { [id]: _, ...rest } = mappings;
    return rest;
}

/**
 * Whether the staff API can search directory groups for `authority_id`.
 * The staff API uses the tenant of the current domain, so the authority
 * must be the current one and have an Office 365 tenant.
 * Only admins can list tenants, so other users test the search endpoint.
 */
export async function hasStaffGroupSearch(authority_id: string) {
    const current = authority();
    if (!current?.id || current.id !== authority_id) return false;
    try {
        const tenants = (await get('/api/staff/v1/tenants')) as PlaceTenant[];
        return tenants.some(
            (tenant) =>
                tenant.domain === current.domain &&
                tenant.platform === 'office365',
        );
    } catch {
        return searchStaffGroups('').then(
            () => true,
            () => false,
        );
    }
}

/** Searches directory groups of the current domain's staff API tenant */
export async function searchStaffGroups(q: string) {
    return (await get(
        `/api/staff/v1/groups?q=${encodeURIComponent(q)}`,
    )) as StaffDirectoryGroup[];
}
