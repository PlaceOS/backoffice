import { describe, expect, it } from 'vitest';
import {
    groupPermissionLabels,
    hasGroupPermission,
    setGroupPermission,
} from '../../app/groups/group-permissions';

describe('group permissions', () => {
    it('adds and removes permissions without changing other permissions', () => {
        expect(setGroupPermission(17, 4, true)).toBe(21);
        expect(setGroupPermission(21, 4, true)).toBe(21);
        expect(setGroupPermission(21, 4, false)).toBe(17);
        expect(setGroupPermission(17, 4, false)).toBe(17);
    });

    it('requires every requested permission in a combined mask', () => {
        expect(hasGroupPermission(17, 17)).toBe(true);
        expect(hasGroupPermission(1, 17)).toBe(false);
        expect(hasGroupPermission(0, 1)).toBe(false);
    });

    it('preserves unknown permission bits when changing a known permission', () => {
        expect(setGroupPermission(257, 16, true)).toBe(273);
        expect(setGroupPermission(273, 1, false)).toBe(272);
    });

    it('lists only enabled known permissions in display order', () => {
        expect(groupPermissionLabels(149)).toEqual([
            'GROUPS.PERMISSION_READ',
            'GROUPS.PERMISSION_UPDATE',
            'GROUPS.PERMISSION_OPERATE',
            'GROUPS.PERMISSION_SHARE',
        ]);
        expect(groupPermissionLabels(256)).toEqual([]);
        expect(groupPermissionLabels(0)).toEqual([]);
    });
});
