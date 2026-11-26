import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Driver, Repository } from '@placeos/ts-client';
import {
    EncryptionLevel,
    mockPage,
    mockReply,
    PlaceDriverRole,
} from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { DriverFormComponent } from '../../app/drivers/driver-form.component';
import { type DriverDetails } from '../../app/drivers/drivers.utilities';

const mocks = vi.hoisted(() => ({
    addDriver: vi.fn(),
    addSettings: vi.fn(),
    listRepositoryCommits: vi.fn(),
    listRepositoryDriverDetails: vi.fn(),
    listRepositoryDrivers: vi.fn(),
    queryRepositories: vi.fn(),
}));
vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    return {
        ...actual,
        drivers: { ...actual.drivers, create: mocks.addDriver },
        settings: { ...actual.settings, create: mocks.addSettings },
        repositories: {
            ...actual.repositories,
            commits: mocks.listRepositoryCommits,
            details: mocks.listRepositoryDriverDetails,
            drivers: mocks.listRepositoryDrivers,
            query: mocks.queryRepositories,
        },
    };
});
vi.mock('../../app/common/notifications', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

const commit = (id: string) => ({ id, name: id, extra: null });
/** The reply of `repositories.details`, which gives the details as JSON text */
const details = (values: DriverDetails) =>
    mockReply(JSON.stringify({ default_settings: '{}', ...values }));

describe('DriverFormComponent', () => {
    let fixture: ComponentFixture<DriverFormComponent>;
    let component: DriverFormComponent;

    beforeEach(async () => {
        vi.resetAllMocks();
        mocks.listRepositoryCommits.mockResolvedValue(mockReply([]));
        mocks.listRepositoryDrivers.mockResolvedValue(mockReply([]));
        mocks.queryRepositories.mockResolvedValue(mockPage({ data: [] }));
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
                { provide: DIALOG_DATA, useValue: { item: newItem(Driver) } },
            ],
        });
        fixture = TestBed.createComponent(DriverFormComponent);
        component = fixture.componentInstance;
        await fixture.whenStable();
        component.repo.set(newItem(Repository, { id: 'repo-1' }));
        component.driver.set({ id: 'display.cr', name: 'display.cr' });
    });

    it('keeps the latest commit when an older details request finishes last', async () => {
        let resolve_first: (value: ReturnType<typeof details>) => void;
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
        mocks.addDriver.mockResolvedValue(
            mockReply(newItem(Driver, { id: 'driver-1' })),
        );
        mocks.addSettings.mockResolvedValue(mockReply({}));
        component.formModel.update((model) => ({
            ...model,
            name: 'Display',
            module_name: 'Display',
            settings: 'volume: 10\n',
        }));

        await component.submit();

        expect(mocks.addSettings).toHaveBeenCalledOnce();
        expect(mocks.addSettings.mock.calls[0][0].body).toMatchObject({
            parent_id: 'driver-1',
            settings_string: 'volume: 10\n',
            encryption_level: EncryptionLevel.Support,
        });
    });

    it('keeps the dialog open when the settings fail, and a save writes only the settings', async () => {
        mocks.addDriver.mockResolvedValue(
            mockReply(newItem(Driver, { id: 'driver-1' })),
        );
        mocks.addSettings
            .mockRejectedValueOnce(new Error('500'))
            .mockResolvedValueOnce(mockReply({}));
        component.formModel.update((model) => ({
            ...model,
            name: 'Display',
            module_name: 'Display',
            settings: 'volume: 10\n',
        }));
        const dialog_ref = TestBed.inject(DialogRef);

        await component.submit();

        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(component.formModel().settings).toBe('volume: 10\n');

        await component.submit();

        expect(mocks.addDriver).toHaveBeenCalledOnce();
        expect(mocks.addSettings).toHaveBeenCalledTimes(2);
        expect(mocks.addSettings.mock.calls[1][0].body).toMatchObject({
            parent_id: 'driver-1',
            settings_string: 'volume: 10\n',
        });
        expect(dialog_ref.close).toHaveBeenCalledOnce();
    });

    it('sends one settings create when a second save comes during a settings retry', async () => {
        mocks.addDriver.mockResolvedValue(
            mockReply(newItem(Driver, { id: 'driver-1' })),
        );
        mocks.addSettings.mockRejectedValueOnce(new Error('500'));
        component.formModel.update((model) => ({
            ...model,
            name: 'Display',
            module_name: 'Display',
            settings: 'volume: 10\n',
        }));
        await component.submit();
        expect(component.settings_retry()).not.toBeNull();

        // The retry stays pending while a second save comes, such as from
        // the save hotkey
        let finish: (reply: ReturnType<typeof mockReply>) => void;
        mocks.addSettings.mockReturnValueOnce(
            new Promise((resolve) => (finish = resolve)),
        );
        const retry = component.submit();
        const second = component.submit();
        finish(mockReply({}));
        await Promise.all([retry, second]);

        // One create for the first save and one for the retry
        expect(mocks.addSettings).toHaveBeenCalledTimes(2);
        expect(TestBed.inject(DialogRef).close).toHaveBeenCalledOnce();
    });
});
