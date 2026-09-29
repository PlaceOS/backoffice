import { PlaceGroup } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    generateGroupFormModel,
    hasStaffGroupSearch,
    removeAdGroupMapping,
    setAdGroupMapping,
} from '../../app/groups/groups.utilities';

const mocks = vi.hoisted(() => ({ authority: vi.fn(), get: vi.fn() }));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));

describe('group AD group mappings', () => {
    it('stores AD group IDs trimmed and lower-cased', () => {
        expect(setAdGroupMapping({}, ' AD-1 ', ' Staff ', 5)).toEqual({
            'ad-1': ['Staff', 5],
        });
    });

    it('uses the ID as the name when no name is given', () => {
        expect(setAdGroupMapping({}, 'ad-1', '', 1)).toEqual({
            'ad-1': ['ad-1', 1],
        });
    });

    it('ignores blank IDs', () => {
        const mappings = { 'ad-1': ['Staff', 1] as [string, number] };
        expect(setAdGroupMapping(mappings, '  ', 'Blank', 1)).toBe(mappings);
    });

    it('removes a mapping without changing the others', () => {
        expect(
            removeAdGroupMapping(
                { 'ad-1': ['Staff', 1], 'ad-2': ['Admins', 64] },
                'ad-1',
            ),
        ).toEqual({ 'ad-2': ['Admins', 64] });
    });

    it('copies mappings into the form model', () => {
        const ad_group_mappings = { 'ad-1': ['Staff', 1] as [string, number] };
        const model = generateGroupFormModel(
            new PlaceGroup({ default_permissions: 3, ad_group_mappings }),
        );
        expect(model.default_permissions).toBe(3);
        expect(model.ad_group_mappings).toEqual(ad_group_mappings);
        expect(model.ad_group_mappings).not.toBe(ad_group_mappings);
    });
});

describe('hasStaffGroupSearch', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        mocks.authority.mockReturnValue({ id: 'auth-1', domain: 'here.com' });
    });

    it('needs an Office 365 tenant for the current domain', async () => {
        mocks.get.mockResolvedValue([
            { domain: 'other.com', platform: 'office365' },
            { domain: 'here.com', platform: 'google' },
        ]);
        expect(await hasStaffGroupSearch('auth-1')).toBe(false);
        mocks.get.mockResolvedValue([
            { domain: 'here.com', platform: 'office365' },
        ]);
        expect(await hasStaffGroupSearch('auth-1')).toBe(true);
    });

    it('is off for other authorities', async () => {
        expect(await hasStaffGroupSearch('auth-2')).toBe(false);
        expect(mocks.get).not.toHaveBeenCalled();
    });

    it('tests the group search when tenants cannot be listed', async () => {
        mocks.get
            .mockRejectedValueOnce(new Error('Forbidden'))
            .mockResolvedValueOnce([]);
        expect(await hasStaffGroupSearch('auth-1')).toBe(true);
        expect(mocks.get).toHaveBeenLastCalledWith('/api/staff/v1/groups?q=');
        mocks.get.mockRejectedValue(new Error('Not Implemented'));
        expect(await hasStaffGroupSearch('auth-1')).toBe(false);
    });
});
