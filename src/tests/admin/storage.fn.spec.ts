import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@placeos/ts-client', { spy: true });

import { Storage, storages } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import {
    queryStorage,
    removeStorage,
    saveStorage,
} from '../../app/admin/storage/storage.fn';
import { newItem } from '../../app/common/placeos';

describe('storage.fn', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(storages.query).mockResolvedValue(
            mockPage({ data: [], total: 0 }),
        );
        vi.mocked(storages.create).mockResolvedValue(
            mockReply(newItem(Storage, { id: 'new' })),
        );
        vi.mocked(storages.update).mockResolvedValue(
            mockReply(newItem(Storage, { id: 'old' })),
        );
        vi.mocked(storages.destroy).mockResolvedValue(mockReply(''));
    });

    it('queries storage with the given parameters', async () => {
        await queryStorage({ auth_id: 'auth-123', limit: 10, offset: 5 });
        expect(storages.query).toHaveBeenCalledWith({
            auth_id: 'auth-123',
            limit: 10,
            offset: 5,
        });
    });

    it('creates a storage without an id, without empty values', async () => {
        await saveStorage({ bucket_name: 'new-bucket', region: '' });
        expect(storages.create).toHaveBeenCalledWith({
            body: { bucket_name: 'new-bucket' },
        });
        expect(storages.update).not.toHaveBeenCalled();
    });

    it('updates a storage with an id', async () => {
        await saveStorage({ id: 'storage-123', bucket_name: 'bucket' });
        expect(storages.update).toHaveBeenCalledWith({
            id: 'storage-123',
            body: { id: 'storage-123', bucket_name: 'bucket' },
        });
    });

    it('leaves out fields that the storage schema does not have', async () => {
        const item = { bucket_name: 'bucket', extra: true };
        await saveStorage(item);
        expect(storages.create).toHaveBeenCalledWith({
            body: { bucket_name: 'bucket' },
        });
    });

    it('removes a storage by id', async () => {
        await removeStorage('storage-123');
        expect(storages.destroy).toHaveBeenCalledWith({ id: 'storage-123' });
    });
});
