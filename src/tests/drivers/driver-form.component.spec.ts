import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    EncryptionLevel,
    PlaceDriver,
    PlaceDriverDetails,
    PlaceDriverRole,
    PlaceRepository,
} from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DriverFormComponent } from '../../app/drivers/driver-form.component';

const mocks = vi.hoisted(() => ({
    addDriver: vi.fn(),
    addSettings: vi.fn(),
    listRepositoryCommits: vi.fn(),
    listRepositoryDriverDetails: vi.fn(),
    listRepositoryDrivers: vi.fn(),
    queryRepositories: vi.fn(),
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    ...mocks,
}));
vi.mock('../../app/common/notifications', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

const commit = (id: string) => ({ id, name: id, extra: null });
const details = (values: Partial<PlaceDriverDetails>) =>
    ({ default_settings: '{}', ...values }) as PlaceDriverDetails;

describe('DriverFormComponent', () => {
    let fixture: ComponentFixture<DriverFormComponent>;
    let component: DriverFormComponent;

    beforeEach(async () => {
        vi.resetAllMocks();
        mocks.listRepositoryCommits.mockResolvedValue([]);
        mocks.listRepositoryDrivers.mockResolvedValue([]);
        mocks.queryRepositories.mockResolvedValue({ data: [] });
        TestBed.configureTestingModule({
            imports: [DriverFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
                },
                { provide: DIALOG_DATA, useValue: { item: new PlaceDriver() } },
            ],
        });
        fixture = TestBed.createComponent(DriverFormComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
        component.repo.set(new PlaceRepository({ id: 'repo-1' }));
        component.driver.set({ id: 'display.cr', name: 'display.cr' });
    });

    it('keeps the latest commit when an older details request finishes last', async () => {
        let resolve_first: (value: PlaceDriverDetails) => void;
        mocks.listRepositoryDriverDetails
            .mockReturnValueOnce(
                new Promise((resolve) => (resolve_first = resolve)),
            )
            .mockResolvedValueOnce(details({ descriptive_name: 'Second' }));

        const first = component.applyDriverCommit(commit('commit-1'));
        await component.applyDriverCommit(commit('commit-2'));
        resolve_first(details({ descriptive_name: 'First' }));
        await first;

        expect(component.commit()?.id).toBe('commit-2');
        expect(component.formModel()).toMatchObject({
            commit: 'commit-2',
            name: 'Second',
        });
    });

    it.each([
        ['port 22', { tcp_port: 22 }, PlaceDriverRole.SSH],
        ['another port', { udp_port: 4999 }, PlaceDriverRole.Device],
        [
            'a WebSocket URI',
            { uri_base: 'wss://example.com' },
            PlaceDriverRole.Websocket,
        ],
        [
            'a service URI',
            { uri_base: 'https://example.com' },
            PlaceDriverRole.Service,
        ],
        ['no connection details', {}, PlaceDriverRole.Logic],
    ])('sets the role from %s', async (_, connection, role) => {
        // Start from another role so each case must set it
        component.formModel.update((model) => ({
            ...model,
            role:
                role === PlaceDriverRole.Logic
                    ? PlaceDriverRole.Device
                    : PlaceDriverRole.Logic,
        }));
        mocks.listRepositoryDriverDetails.mockResolvedValue(
            details(connection),
        );

        await component.applyDriverCommit(commit('commit-1'));

        expect(component.formModel().role).toBe(role);
    });

    it('saves the initial settings of a new driver', async () => {
        mocks.addDriver.mockResolvedValue(new PlaceDriver({ id: 'driver-1' }));
        mocks.addSettings.mockResolvedValue({});
        component.formModel.update((model) => ({
            ...model,
            name: 'Display',
            module_name: 'Display',
            settings: 'volume: 10\n',
        }));

        await component.submit();

        expect(mocks.addSettings).toHaveBeenCalledOnce();
        expect(mocks.addSettings.mock.calls[0][0]).toMatchObject({
            parent_id: 'driver-1',
            settings_string: 'volume: 10\n',
            encryption_level: EncryptionLevel.Support,
        });
    });
});
