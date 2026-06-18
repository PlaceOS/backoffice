import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { APIKeyService } from '../../app/admin/api-keys/api-keys.service';

const mocks = vi.hoisted(() => ({
    create: vi.fn(),
    get: vi.fn(),
    query: vi.fn(),
    queryUsers: vi.fn(),
    remove: vi.fn(),
    showUser: vi.fn(),
    update: vi.fn(),
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
    currentUser: vi.fn(),
}));

vi.mock('@placeos/ts-client', () => ({
    create: mocks.create,
    get: mocks.get,
    query: mocks.query,
    queryUsers: mocks.queryUsers,
    remove: mocks.remove,
    showUser: mocks.showUser,
    update: mocks.update,
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
        mocks.get.mockResolvedValue(['public', 'admin']);
        mocks.query.mockResolvedValue({ data: [] });
        mocks.queryUsers.mockResolvedValue({ data: [] });
        mocks.create.mockResolvedValue({
            id: 'key-1',
            x_api_key: 'sk_test',
        });

        TestBed.configureTestingModule({
            providers: [
                APIKeyService,
                { provide: MatDialog, useValue: { open: vi.fn() } },
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

        expect(mocks.create).toHaveBeenCalledWith(
            expect.objectContaining({
                path: 'api_keys',
                form_data: {
                    name: 'Ada Lovelace API Key',
                    description: 'Created for Ada Lovelace',
                    scopes: ['public', 'admin'],
                    user_id: 'user-1',
                    permissions: 'admin',
                    authority_id: 'authority-1',
                    ttl: 86400,
                },
            }),
        );
        expect(service.last_key()?.x_api_key).toBe('sk_test');
        expect(mocks.notifySuccess).toHaveBeenCalledWith(
            'Successfully created new API key.',
        );
    });
});
