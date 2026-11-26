import { Dialog } from '@angular/cdk/dialog';
import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationEnd, Router } from '@angular/router';
import {
    Domain,
    LdapAuthentication,
    OauthAuthentication,
    User,
} from '@placeos/ts-client';
import { mockPage } from '@placeos/ts-client/compat';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { newItem } from '../../app/common/placeos';
import { DomainStateService } from '../../app/domains/domain-state.service';

const mocks = vi.hoisted(() => ({
    queryUsers: vi.fn(),
    queryApplications: vi.fn(),
    querySAMLSources: vi.fn(),
    queryOAuthSources: vi.fn(),
    queryLDAPSources: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        users: { ...actual.users, query: mocks.queryUsers },
        oauth_applications: {
            ...actual.oauth_applications,
            query: mocks.queryApplications,
        },
        saml_authentications: {
            ...actual.saml_authentications,
            query: mocks.querySAMLSources,
        },
        oauth_authentications: {
            ...actual.oauth_authentications,
            query: mocks.queryOAuthSources,
        },
        ldap_authentications: {
            ...actual.ldap_authentications,
            query: mocks.queryLDAPSources,
        },
    };
});
vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));
vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string) => key,
}));
vi.mock('../../app/overlays/auth-source-modal.component', () => ({
    AuthSourceModalComponent: class {},
}));
vi.mock('../../app/domains/application-form.component', () => ({
    ApplicationFormComponent: class {},
}));
vi.mock('../../app/overlays/confirm-modal.component', () => ({
    openConfirmModal: vi.fn(),
}));

describe('domain tab loading', () => {
    const active = signal<Domain | null>(null);
    let navigation: Subject<NavigationEnd>;
    let service: DomainStateService;
    const settle = async () => {
        TestBed.tick();
        await TestBed.inject(ApplicationRef).whenStable();
        TestBed.tick();
    };
    beforeEach(() => {
        vi.resetAllMocks();
        active.set(null);
        navigation = new Subject();
        for (const query of Object.values(mocks))
            query.mockResolvedValue(mockPage({ data: [], total: 25 }));
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                DomainStateService,
                {
                    provide: ActiveItemService,
                    useValue: {
                        item: active,
                        activeOf: (type: string) =>
                            type === 'domains' ? active() : null,
                    },
                },
                { provide: Dialog, useValue: {} },
                {
                    provide: Router,
                    useValue: {
                        url: '/domains/domain-1/about',
                        events: navigation,
                    },
                },
            ],
        });
        service = TestBed.inject(DomainStateService);
    });
    it('uses count queries until a tab opens, reuses totals, and retains loaded tabs', async () => {
        await settle();
        expect(mocks.queryUsers).not.toHaveBeenCalled();
        active.set(newItem(Domain, { id: 'domain-1' }));
        await settle();
        for (const query of Object.values(mocks)) {
            expect(query).toHaveBeenCalledExactlyOnceWith(
                {
                    authority_id: 'domain-1',
                    limit: 1,
                },
                { signal: expect.any(AbortSignal) },
            );
        }
        expect(service.counts()).toEqual({
            users: 25,
            applications: 25,
            auth_sources: 75,
        });
        expect(service.users()).toEqual([]);
        mocks.queryUsers.mockResolvedValue(
            mockPage({
                data: [newItem(User, { id: 'user-1', name: 'Alex' })],
                total: 1000,
            }),
        );
        navigation.next(
            new NavigationEnd(
                1,
                '/domains/domain-1/users',
                '/domains/domain-1/users',
            ),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenLastCalledWith(
            {
                authority_id: 'domain-1',
                limit: 1000,
            },
            { signal: expect.any(AbortSignal) },
        );
        expect(mocks.queryApplications).toHaveBeenCalledTimes(1);
        expect(service.counts().users).toBe(1000);
        expect(service.users()[0].name).toBe('Alex');
        navigation.next(
            new NavigationEnd(
                2,
                '/domains/domain-1/about',
                '/domains/domain-1/about',
            ),
        );
        await settle();
        navigation.next(
            new NavigationEnd(
                3,
                '/domains/domain-1/users',
                '/domains/domain-1/users',
            ),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenCalledTimes(2);
        active.set(
            newItem(Domain, { id: 'domain-1', name: 'Updated settings' }),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenCalledTimes(2);
    });
    it('keeps the other authentication sources when one source type fails', async () => {
        const oauth = newItem(OauthAuthentication, { id: 'oauth-1' });
        const ldap = newItem(LdapAuthentication, { id: 'ldap-1' });
        mocks.querySAMLSources.mockRejectedValue(new Error('Forbidden'));
        mocks.queryOAuthSources.mockResolvedValue(
            mockPage({ data: [oauth], total: 1 }),
        );
        mocks.queryLDAPSources.mockResolvedValue(
            mockPage({ data: [ldap], total: 1 }),
        );
        active.set(newItem(Domain, { id: 'domain-1' }));
        const url = '/domains/domain-1/authentication';
        navigation.next(new NavigationEnd(1, url, url));
        await settle();
        expect(service.auth_sources()).toEqual([oauth, ldap]);
        expect(service.counts().auth_sources).toBe(2);
    });
    it('clears loaded tabs when selecting another domain', async () => {
        active.set(newItem(Domain, { id: 'domain-1' }));
        navigation.next(
            new NavigationEnd(
                1,
                '/domains/domain-1/users',
                '/domains/domain-1/users',
            ),
        );
        await settle();
        active.set(newItem(Domain, { id: 'domain-2' }));
        navigation.next(
            new NavigationEnd(
                2,
                '/domains/domain-2/about',
                '/domains/domain-2/about',
            ),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenLastCalledWith(
            {
                authority_id: 'domain-2',
                limit: 1,
            },
            { signal: expect.any(AbortSignal) },
        );
        expect(service.users()).toEqual([]);
    });
});
