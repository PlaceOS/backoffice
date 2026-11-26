import { Dialog } from '@angular/cdk/dialog';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { UploadLibraryComponent } from '../../app/admin/upload-library.component';
import { UploadsService } from '../../app/common/uploads.service';

const { mockPage } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

vi.mock('@placeos/ts-client', () => ({
    uploads: { query: vi.fn(async () => mockPage({ data: [] })) },
}));
// The host is domain-1
vi.mock('../../app/common/placeos', async (importOriginal) => ({
    ...(await importOriginal<typeof import('../../app/common/placeos')>()),
    authority: () => ({ id: 'domain-1' }),
}));
// The real service imports @placeos/cloud-uploads, which does not load here
vi.mock('../../app/common/uploads.service', () => ({
    UploadsService: class {},
}));
vi.mock('../../app/common/notifications', () => ({
    notifyError: vi.fn(),
    notifySuccess: vi.fn(),
}));

describe('UploadLibraryComponent', () => {
    afterEach(() => vi.useRealTimers());

    /** The component, with an upload list and completed count the test controls */
    async function setup(
        upload_list: () => unknown[] = () => [],
        completed_count = signal(0),
    ) {
        await TestBed.configureTestingModule({
            imports: [UploadLibraryComponent],
            providers: [
                { provide: Dialog, useValue: { open: vi.fn() } },
                {
                    provide: UploadsService,
                    useValue: {
                        upload_list,
                        completed_count,
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
        return TestBed.createComponent(UploadLibraryComponent)
            .componentInstance;
    }

    it('loads the list again a second after an upload completes', async () => {
        vi.useFakeTimers();
        const completed_count = signal(0);
        const component = await setup(undefined, completed_count);
        TestBed.tick();

        // The server reports the upload as complete
        completed_count.set(1);
        TestBed.tick();
        vi.advanceTimersByTime(999);
        expect(component.refresh()).toBe(0);

        vi.advanceTimersByTime(1);
        expect(component.refresh()).toBe(1);
    });

    it('stops waiting for a stalled upload after an hour', async () => {
        vi.useFakeTimers();
        const upload_list = vi.fn(() => [{ id: 1, progress: 50 }]);
        const component = await setup(upload_list);
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
