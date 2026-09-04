import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { PlaceRepository, PlaceRepositoryType } from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ActiveItemService } from '../../app/common/item.service';
import { RepositoriesStateService } from '../../app/repositories/repositories-state.service';

vi.mock('@placeos/ts-client', () => ({
    PlaceRepositoryType: {
        Driver: 'driver',
        Interface: 'interface',
    },
    PlaceRepository: class {
        public id = '';
        public folder_name = '';
        public repo_type = 'driver';

        public get type() {
            return this.repo_type;
        }

        constructor(data: Record<string, unknown> = {}) {
            Object.assign(this, data);
        }
    },
    PlaceDriver: class {
        constructor(data: Record<string, unknown> = {}) {
            Object.assign(this, data);
        }
    },
    listRepositoryCommits: vi.fn(() => Promise.resolve([])),
    listRepositoryDrivers: vi.fn(() => Promise.resolve([])),
    pullRepositoryChanges: vi.fn(),
    showRepository: vi.fn(),
}));

vi.mock('../../app/common/item.service', () => ({
    ActiveItemService: class {},
}));

vi.mock('../../app/common/locale.service', () => ({
    i18n: (key: string) => key,
}));

vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
}));

vi.mock('../../app/drivers/driver-form.component', () => ({
    DriverFormComponent: class {},
}));

describe('RepositoriesStateService', () => {
    const active_item = signal<PlaceRepository | null>(null);

    beforeEach(() => {
        active_item.set(null);
        TestBed.configureTestingModule({
            providers: [
                provideZonelessChangeDetection(),
                RepositoriesStateService,
                {
                    provide: ActiveItemService,
                    useValue: {
                        item: active_item.asReadonly(),
                        active_item: null,
                    },
                },
                { provide: MatDialog, useValue: {} },
            ],
        });
    });

    afterEach(() => vi.unstubAllGlobals());

    it('loads a changelog from the folder serving an interface', async () => {
        const fetch_mock = vi
            .fn()
            .mockResolvedValue(new Response('# Changelog\n\n## 1.0.0'));
        vi.stubGlobal('fetch', fetch_mock);
        active_item.set(
            new PlaceRepository({
                id: 'interface-1',
                folder_name: 'concierge',
                repo_type: PlaceRepositoryType.Interface,
            }),
        );

        const service = TestBed.inject(RepositoriesStateService);

        await vi.waitFor(() => expect(service.has_changelog()).toBe(true));
        expect(service.changelog()).toContain('## 1.0.0');
        expect(fetch_mock).toHaveBeenCalledWith(
            '/concierge/CHANGELOG.md',
            expect.objectContaining({
                cache: 'no-cache',
                signal: expect.any(AbortSignal),
            }),
        );
    });

    it('does not expose a changelog when the file cannot be loaded', async () => {
        const fetch_mock = vi
            .fn()
            .mockResolvedValue(new Response('', { status: 404 }));
        vi.stubGlobal('fetch', fetch_mock);
        active_item.set(
            new PlaceRepository({
                id: 'interface-1',
                folder_name: 'concierge',
                repo_type: PlaceRepositoryType.Interface,
            }),
        );

        const service = TestBed.inject(RepositoriesStateService);

        await vi.waitFor(() => expect(service.changelog_loading()).toBe(false));
        expect(service.has_changelog()).toBe(false);
        expect(service.changelog()).toBe('');
    });

    it('does not request a changelog for a driver repository', async () => {
        const fetch_mock = vi.fn();
        vi.stubGlobal('fetch', fetch_mock);
        active_item.set(
            new PlaceRepository({
                id: 'driver-1',
                folder_name: 'drivers',
                repo_type: PlaceRepositoryType.Driver,
            }),
        );

        const service = TestBed.inject(RepositoriesStateService);

        await Promise.resolve();
        expect(service.has_changelog()).toBe(false);
        expect(fetch_mock).not.toHaveBeenCalled();
    });
});
