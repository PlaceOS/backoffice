export const GROUP_PERMISSION_FLAGS = [
    { key: 'read', label: 'GROUPS.PERMISSION_READ', value: 1 },
    { key: 'create', label: 'GROUPS.PERMISSION_CREATE', value: 2 },
    { key: 'update', label: 'GROUPS.PERMISSION_UPDATE', value: 4 },
    { key: 'delete', label: 'GROUPS.PERMISSION_DELETE', value: 8 },
    { key: 'operate', label: 'GROUPS.PERMISSION_OPERATE', value: 16 },
    { key: 'approve', label: 'GROUPS.PERMISSION_APPROVE', value: 32 },
    { key: 'manage', label: 'GROUPS.PERMISSION_MANAGE', value: 64 },
    { key: 'share', label: 'GROUPS.PERMISSION_SHARE', value: 128 },
];

export function hasGroupPermission(permissions: number, value: number) {
    return ((+permissions || 0) & value) === value;
}

export function setGroupPermission(
    permissions: number,
    value: number,
    enabled: boolean,
) {
    const current = +permissions || 0;
    return enabled ? current | value : current & ~value;
}

export function groupPermissionLabels(permissions: number) {
    return GROUP_PERMISSION_FLAGS.filter((permission) =>
        hasGroupPermission(permissions, permission.value),
    ).map((permission) => permission.label);
}
