import {
    ApplicationRef,
    provideZonelessChangeDetection,
    signal,
} from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { PlaceDomain, PlaceUser } from '@placeos/ts-client';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { DomainStateService } from '../../app/domains/domain-state.service';

const mocks = vi.hoisted(() => ({
    queryUsers: vi.fn(),
    queryApplications: vi.fn(),
    querySAMLSources: vi.fn(),
    queryOAuthSources: vi.fn(),
    queryLDAPSources: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
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
    const active = signal<PlaceDomain | null>(null);
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
            query.mockResolvedValue({ data: [], total: 25 });
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                DomainStateService,
                { provide: ActiveItemService, useValue: { item: active } },
                { provide: MatDialog, useValue: {} },
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
        active.set(new PlaceDomain({ id: 'domain-1' }));
        await settle();
        for (const query of Object.values(mocks)) {
            expect(query).toHaveBeenCalledExactlyOnceWith({
                authority_id: 'domain-1',
                limit: 1,
            });
        }
        expect(service.counts()).toEqual({
            users: 25,
            applications: 25,
            auth_sources: 75,
        });
        expect(service.users()).toEqual([]);
        mocks.queryUsers.mockResolvedValue({
            data: [new PlaceUser({ id: 'user-1', name: 'Alex' })],
            total: 1000,
        });
        navigation.next(
            new NavigationEnd(
                1,
                '/domains/domain-1/users',
                '/domains/domain-1/users',
            ),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenLastCalledWith({
            authority_id: 'domain-1',
            limit: 1000,
        });
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
            new PlaceDomain({ id: 'domain-1', name: 'Updated settings' }),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenCalledTimes(2);
    });
    it('clears loaded tabs when selecting another domain', async () => {
        active.set(new PlaceDomain({ id: 'domain-1' }));
        navigation.next(
            new NavigationEnd(
                1,
                '/domains/domain-1/users',
                '/domains/domain-1/users',
            ),
        );
        await settle();
        active.set(new PlaceDomain({ id: 'domain-2' }));
        navigation.next(
            new NavigationEnd(
                2,
                '/domains/domain-2/about',
                '/domains/domain-2/about',
            ),
        );
        await settle();
        expect(mocks.queryUsers).toHaveBeenLastCalledWith({
            authority_id: 'domain-2',
            limit: 1,
        });
        expect(service.users()).toEqual([]);
    });
});
