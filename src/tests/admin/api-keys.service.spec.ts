import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { Subject } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import type { PlaceAPIKeyDetails } from '../../app/admin/api-keys/api-key-details.class';
import {
    APIKeyService,
    apiKeyExpiry,
} from '../../app/admin/api-keys/api-keys.service';
import type { DialogEvent } from '../../app/common/types';

const mocks = vi.hoisted(() => ({
    create: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
    currentUser: vi.fn(),
}));

vi.mock('../../app/common/notifications', () => ({
    notifyError: mocks.notifyError,
    notifySuccess: mocks.notifySuccess,
}));

vi.mock('../../app/common/user-state', () => ({
    currentUser: mocks.currentUser,
}));

describe('APIKeyService', () => {
    const domain = { id: 'authority-1', name: 'Place Technology' };
    const selected_domain = signal(domain);

    beforeEach(() => {
        vi.clearAllMocks();
        selected_domain.set(domain);
        mocks.currentUser.mockReturnValue({
            id: 'user-1',
            name: 'Ada Lovelace',
            email: 'ada@example.com',
            sys_admin: true,
        });
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
        clearEndpointMocks();
        mockEndpoint('root.scopes', () => ['public', 'admin']);
        mockEndpoint('api_keys.query', () => []);
        mocks.create.mockReturnValue({ id: 'key-1', x_api_key: 'sk_test' });
        mockEndpoint('api_keys.create', mocks.create);

        TestBed.configureTestingModule({
            providers: [
                APIKeyService,
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: AdminDataService,
                    useValue: {
                        domain_list: signal([domain]).asReadonly(),
                        selectedDomain: vi.fn(() => selected_domain),
                        setDomain: vi.fn((_: string, value) =>
                            selected_domain.set(value),
                        ),
                        selectDefaultDomain: vi.fn(() =>
                            Promise.resolve(selected_domain()),
                        ),
                    },
                },
            ],
        });
    });

    it('quick creates an API key for the logged in user', async () => {
        const service = TestBed.inject(APIKeyService);

        await service.quickCreateKey();

        expect(mocks.create).toHaveBeenCalledWith({
            body: {
                name: 'Ada Lovelace API Key',
                description: 'Created for Ada Lovelace',
                scopes: ['public'],
                user_id: 'user-1',
                // The server reads the permissions of a request as the enum number
                permissions: 0,
                authority_id: 'authority-1',
                expires_at: expect.any(Number),
            },
        });
        expect(service.last_key()?.x_api_key).toBe('sk_test');
        expect(mocks.notifySuccess).toHaveBeenCalledWith(
            'Successfully created new API key.',
        );
    });

    it('clears the permissions of a key when None is chosen', async () => {
        const update = vi.fn(() => ({ id: 'key-1' }));
        mockEndpoint('api_keys.update', update);
        const event = new Subject<DialogEvent>();
        const ref = {
            componentInstance: { event, loading: signal('') },
            closed: new Subject(),
            close: vi.fn(),
        };
        vi.mocked(TestBed.inject(Dialog).open).mockReturnValue(ref as never);
        const service = TestBed.inject(APIKeyService);

        const saved = service.editKey({ id: 'key-1' } as PlaceAPIKeyDetails);
        event.next({
            reason: 'done',
            metadata: { name: 'Key', permissions: null },
        });
        await saved;

        expect(update).toHaveBeenCalledWith(
            expect.objectContaining({
                body: expect.objectContaining({ permissions: null }),
            }),
        );
    });
});

describe('apiKeyExpiry', () => {
    const now = Date.UTC(2026, 0, 1);
    const now_seconds = now / 1000;

    it('adds the TTL in seconds to the current time', () => {
        expect(apiKeyExpiry({ ttl: 3600 }, now)).toBe(now_seconds + 3600);
    });

    it('uses an explicit expiry when only expires_at is set', () => {
        expect(apiKeyExpiry({ expires_at: now_seconds + 60 }, now)).toBe(
            now_seconds + 60,
        );
    });

    it('never expires without an expiry or TTL', () => {
        expect(apiKeyExpiry({ expires_at: null, ttl: null }, now)).toBe(
            undefined,
        );
    });
});
