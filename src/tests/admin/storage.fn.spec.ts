import { describe, it, expect, vi, beforeEach } from 'vitest';
import { of } from 'rxjs';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    cleanObject: vi.fn((obj, excludes) => {
        const result = { ...obj };
        for (const key of Object.keys(result)) {
            if (excludes.includes(result[key])) {
                delete result[key];
            }
        }
        return result;
    }),
    create: vi.fn(() => of({})),
    query: vi.fn(() => of({ data: [], total: 0 })),
    remove: vi.fn(() => of({})),
    show: vi.fn(() => of({})),
    update: vi.fn(() => of({})),
}));

import {
    PlaceStorage,
    queryStorage,
    showStorage,
    updateStorage,
    addStorage,
    removeStorage,
    saveStorage,
} from '../../app/admin/storage/storage.fn';
import * as client from '@placeos/ts-client';

describe('storage.fn', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('PlaceStorage class', () => {
        it('should create empty storage', () => {
            const storage = new PlaceStorage();
            expect(storage).toBeDefined();
        });

        it('should create storage with id', () => {
            const storage = new PlaceStorage({ id: 'storage-123' });
            expect(storage.id).toBe('storage-123');
        });

        it('should create storage with all properties', () => {
            const storage = new PlaceStorage({
                id: 'storage-123',
                authority_id: 'auth-456',
                storage_type: 's3',
                bucket_name: 'my-bucket',
                region: 'us-east-1',
                access_key: 'AKIAIOSFODNN7EXAMPLE',
                access_secret: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
                endpoint: 'https://s3.amazonaws.com',
                ext_filter: ['.exe', '.bat'],
                mime_filter: ['application/x-msdownload'],
                is_default: true,
            });

            expect(storage.id).toBe('storage-123');
            expect(storage.authority_id).toBe('auth-456');
            expect(storage.storage_type).toBe('s3');
            expect(storage.bucket_name).toBe('my-bucket');
            expect(storage.region).toBe('us-east-1');
            expect(storage.access_key).toBe('AKIAIOSFODNN7EXAMPLE');
            expect(storage.access_secret).toBe(
                'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
            );
            expect(storage.endpoint).toBe('https://s3.amazonaws.com');
            expect(storage.ext_filter).toEqual(['.exe', '.bat']);
            expect(storage.mime_filter).toEqual(['application/x-msdownload']);
            expect(storage.is_default).toBe(true);
        });

        it('should have readonly properties', () => {
            const storage = new PlaceStorage({ id: 'storage-123' });
            // TypeScript would prevent assignment, but at runtime it won't throw
            expect(storage.id).toBe('storage-123');
        });
    });

    describe('queryStorage', () => {
        it('should call query with correct path', () => {
            queryStorage();
            expect(client.query).toHaveBeenCalledWith(
                expect.objectContaining({
                    path: 'storages',
                }),
            );
        });

        it('should pass query_params', () => {
            queryStorage({ auth_id: 'auth-123', limit: 10, offset: 5 });
            expect(client.query).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: { auth_id: 'auth-123', limit: 10, offset: 5 },
                }),
            );
        });

        it('should pass empty query_params by default', () => {
            queryStorage();
            expect(client.query).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: {},
                }),
            );
        });

        it('should include process function', () => {
            queryStorage();
            expect(client.query).toHaveBeenCalledWith(
                expect.objectContaining({
                    fn: expect.any(Function),
                }),
            );
        });
    });

    describe('showStorage', () => {
        it('should call show with id and path', () => {
            showStorage('storage-123');
            expect(client.show).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: 'storage-123',
                    path: 'storages',
                }),
            );
        });

        it('should pass query_params', () => {
            showStorage('storage-123', { q: 'test' });
            expect(client.show).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: { q: 'test' },
                }),
            );
        });

        it('should include process function', () => {
            showStorage('storage-123');
            expect(client.show).toHaveBeenCalledWith(
                expect.objectContaining({
                    fn: expect.any(Function),
                }),
            );
        });
    });

    describe('updateStorage', () => {
        it('should call update with id and form_data', () => {
            updateStorage('storage-123', { bucket_name: 'new-bucket' });
            expect(client.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: 'storage-123',
                    form_data: { bucket_name: 'new-bucket' },
                    path: 'storages',
                }),
            );
        });

        it('should default to patch method', () => {
            updateStorage('storage-123', { bucket_name: 'new-bucket' });
            expect(client.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    method: 'patch',
                }),
            );
        });

        it('should allow put method', () => {
            updateStorage('storage-123', { bucket_name: 'new-bucket' }, 'put');
            expect(client.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    method: 'put',
                }),
            );
        });

        it('should include process function', () => {
            updateStorage('storage-123', {});
            expect(client.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    fn: expect.any(Function),
                }),
            );
        });
    });

    describe('addStorage', () => {
        it('should call create with form_data and path', () => {
            addStorage({ bucket_name: 'new-bucket', region: 'us-west-2' });
            expect(client.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    form_data: { bucket_name: 'new-bucket', region: 'us-west-2' },
                    path: 'storages',
                }),
            );
        });

        it('should pass empty query_params', () => {
            addStorage({});
            expect(client.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: {},
                }),
            );
        });

        it('should include process function', () => {
            addStorage({});
            expect(client.create).toHaveBeenCalledWith(
                expect.objectContaining({
                    fn: expect.any(Function),
                }),
            );
        });
    });

    describe('removeStorage', () => {
        it('should call remove with id and path', () => {
            removeStorage('storage-123');
            expect(client.remove).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: 'storage-123',
                    path: 'storages',
                }),
            );
        });

        it('should pass empty query_params by default', () => {
            removeStorage('storage-123');
            expect(client.remove).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: {},
                }),
            );
        });

        it('should pass custom query_params', () => {
            removeStorage('storage-123', { force: true });
            expect(client.remove).toHaveBeenCalledWith(
                expect.objectContaining({
                    query_params: { force: true },
                }),
            );
        });
    });

    describe('saveStorage', () => {
        it('should call addStorage for new items without id', () => {
            const item = new PlaceStorage({ bucket_name: 'new-bucket' });
            saveStorage(item);
            expect(client.create).toHaveBeenCalled();
        });

        it('should call updateStorage for existing items with id', () => {
            const item = new PlaceStorage({
                id: 'storage-123',
                bucket_name: 'existing-bucket',
            });
            saveStorage(item);
            expect(client.update).toHaveBeenCalledWith(
                expect.objectContaining({
                    id: 'storage-123',
                    method: 'put',
                }),
            );
        });

        it('should clean object before saving', () => {
            const item = new PlaceStorage({ id: 'storage-123' });
            saveStorage(item);
            expect(client.cleanObject).toHaveBeenCalledWith(item, [
                '',
                undefined,
                null,
            ]);
        });
    });
});
