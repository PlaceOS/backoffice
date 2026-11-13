import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { StorageProviderModalComponent } from '../../app/admin/storage/storage-provider-modal.component';
import { PlaceStorage, saveStorage } from '../../app/admin/storage/storage.fn';

vi.mock('@placeos/ts-client', () => ({
    showMetadata: vi.fn(() => Promise.resolve({})),
}));
vi.mock('../../app/admin/storage/storage.fn', () => ({
    saveStorage: vi.fn(() => Promise.resolve({})),
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('StorageProviderModalComponent', () => {
    beforeEach(() => vi.clearAllMocks());

    it('keeps the stored secret when an edit leaves it empty', async () => {
        const item = {
            id: 'storage-1',
            storage_type: 's3',
            bucket_name: 'media',
            region: 'ap-southeast-2',
            access_key: 'AKIA-KEY',
        } as PlaceStorage;
        await TestBed.configureTestingModule({
            imports: [StorageProviderModalComponent],
            providers: [
                { provide: DIALOG_DATA, useValue: { item } },
                { provide: DialogRef, useValue: { close: vi.fn() } },
            ],
        })
            .overrideComponent(StorageProviderModalComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            StorageProviderModalComponent,
        ).componentInstance;

        await component.save();

        expect(saveStorage).toHaveBeenCalledWith(
            expect.objectContaining({ id: 'storage-1' }),
        );
        expect(vi.mocked(saveStorage).mock.calls[0][0]).not.toHaveProperty(
            'access_secret',
        );
    });
});
