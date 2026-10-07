import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    currentReach: vi.fn(),
    queryOrganisations: vi.fn(),
}));

vi.mock('@placeos/ts-client', () => ({
    currentReach: mocks.currentReach,
    queryOrganisations: mocks.queryOrganisations,
    PlaceOrganisation: class {},
    PlaceUser: class {},
}));

import {
    canAccessClusterSection,
    hasOrganisationPicker,
    isClusterReach,
    isPartnerReach,
    loadOrganisationAccess,
    organisationQueryParams,
    organisations,
    selectOrganisation,
    selected_organisation_id,
} from '../../app/common/organisation-access';

const user = { id: 'user-1', authority_id: 'authority-1' } as any;
const acadian = { id: 'org-acadian', name: 'Acadian', description: '' };
const ntt = { id: 'org-ntt', name: 'NTT', description: '' };

describe('organisation-access', () => {
    beforeEach(() => {
        localStorage.clear();
        mocks.currentReach.mockReset();
        mocks.queryOrganisations.mockReset();
    });

    it('treats an API without organisations as cluster reach', async () => {
        mocks.currentReach.mockRejectedValue(new Error('404'));
        await loadOrganisationAccess(user);
        expect(isClusterReach()).toBe(true);
        expect(hasOrganisationPicker()).toBe(false);
        expect(canAccessClusterSection('brokers')).toBe(true);
        expect(organisationQueryParams()).toEqual({});
    });

    it('lists every organisation for cluster reach', async () => {
        mocks.currentReach.mockResolvedValue({
            reach: 'cluster',
            enforcing: true,
            organisation: null,
            partner: null,
            organisations: null,
        });
        mocks.queryOrganisations.mockReturnValue(
            Promise.resolve({ data: [ntt, acadian], total: 2, next: null }),
        );
        await loadOrganisationAccess(user);
        expect(isClusterReach()).toBe(true);
        expect(organisations().map((o) => o.name)).toEqual(['Acadian', 'NTT']);
        expect(hasOrganisationPicker()).toBe(true);
    });

    it('scopes partner staff to their organisations and hides cluster screens', async () => {
        mocks.currentReach.mockResolvedValue({
            reach: 'partner',
            enforcing: true,
            organisation: ntt,
            partner: { id: 'partner-ntt', name: 'NTT' },
            organisations: [ntt, acadian],
        });
        await loadOrganisationAccess(user);
        expect(isPartnerReach()).toBe(true);
        expect(canAccessClusterSection('brokers')).toBe(false);
        expect(canAccessClusterSection('api-keys')).toBe(true);
        expect(hasOrganisationPicker()).toBe(true);
    });

    it('remembers the selected organisation per user and rejects unknown ids', async () => {
        mocks.currentReach.mockResolvedValue({
            reach: 'partner',
            enforcing: false,
            organisation: ntt,
            partner: null,
            organisations: [ntt, acadian],
        });
        await loadOrganisationAccess(user);
        expect(selectOrganisation('org-stranger')).toBe(false);
        expect(selectOrganisation('org-acadian')).toBe(true);
        expect(selected_organisation_id()).toBe('org-acadian');
        expect(organisationQueryParams()).toEqual({
            organisation_id: 'org-acadian',
        });

        await loadOrganisationAccess(user);
        expect(selected_organisation_id()).toBe('org-acadian');
        expect(selectOrganisation('')).toBe(true);
        expect(organisationQueryParams()).toEqual({});
    });

    it('shows no picker for a single organisation', async () => {
        mocks.currentReach.mockResolvedValue({
            reach: 'organisation',
            enforcing: true,
            organisation: acadian,
            partner: null,
            organisations: [acadian],
        });
        await loadOrganisationAccess(user);
        expect(hasOrganisationPicker()).toBe(false);
        expect(isClusterReach()).toBe(false);
    });
});
