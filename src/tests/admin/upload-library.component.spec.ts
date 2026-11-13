import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { UploadLibraryComponent } from '../../app/admin/upload-library.component';
import { UploadsService } from '../../app/common/uploads.service';

vi.mock('@placeos/ts-client', () => ({
    apiKey: vi.fn(),
    cleanObject: vi.fn(),
    query: vi.fn(),
    remove: vi.fn(),
    showMetadata: vi.fn(() => Promise.resolve({})),
    token: vi.fn(),
}));
// The real service imports @placeos/cloud-uploads, which does not load here
vi.mock('../../app/common/uploads.service', () => ({
    UploadsService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifyInfo: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('UploadLibraryComponent', () => {
    afterEach(() => vi.useRealTimers());

    it('stops waiting for a stalled upload after an hour', async () => {
        vi.useFakeTimers();
        const upload_list = vi.fn(() => [{ id: 1, progress: 50 }]);
        await TestBed.configureTestingModule({
            imports: [UploadLibraryComponent],
            providers: [
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: UploadsService,
                    useValue: {
                        upload_list,
                        uploadFileWithPermissions: () => Promise.resolve(1),
                    },
                },
                {
                    provide: AdminDataService,
                    useValue: {
                        filter: () => signal(''),
                        selectedDomain: () => signal(null),
                        selectDefaultDomain: () => Promise.resolve(null),
                        sort: () => signal(null),
                    },
                },
            ],
        })
            .overrideComponent(UploadLibraryComponent, {
                set: { template: '' },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            UploadLibraryComponent,
        ).componentInstance;
        const event = {
            target: { files: [new File(['data'], 'stalled.png')] },
        } as unknown as Event;

        component.handleFileEvent(event);
        await vi.advanceTimersByTimeAsync(300);
        expect(component.loading()).toBe(true);

        vi.advanceTimersByTime(59 * 60 * 1000);
        expect(component.loading()).toBe(true);

        vi.advanceTimersByTime(2 * 60 * 1000);
        expect(component.loading()).toBe(false);

        const checks = upload_list.mock.calls.length;
        vi.advanceTimersByTime(1000);
        expect(upload_list).toHaveBeenCalledTimes(checks);
    });
});
