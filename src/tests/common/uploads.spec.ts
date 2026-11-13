import { Dialog } from '@angular/cdk/dialog';
import { TestBed } from '@angular/core/testing';
import type {
    ChunkedUpload,
    ChunkedUploadOptions,
    ChunkedUploadState,
} from '@placeos/cloud-uploads';
import { BehaviorSubject, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { uploadFile } from '../../app/common/uploads';
import { UploadsService } from '../../app/common/uploads.service';

const mocks = vi.hoisted(() => ({
    token: vi.fn(() => 'token-0'),
    initUploads: vi.fn(),
    uploadNewFile:
        vi.fn<
            (
                file: File,
                options?: ChunkedUploadOptions,
            ) => Promise<ChunkedUpload>
        >(),
}));
vi.mock('@placeos/cloud-uploads', () => ({
    humanReadableByteCount: (size: number) => `${size} B`,
    initUploads: mocks.initUploads,
    uploadFile: mocks.uploadNewFile,
}));
vi.mock('@placeos/ts-client', async () => ({
    ...(await vi.importActual<typeof import('@placeos/ts-client')>(
        '@placeos/ts-client/dist/index.es.js',
    )),
    token: mocks.token,
}));
vi.mock('../../app/ui/upload-permissions-modal.component', () => ({
    UploadPermissionsModalComponent: class {},
}));

const file = new File(['floor plan'], 'plan.svg');
const uploading: ChunkedUploadState = {
    status: 'UPLOADING',
    completed: [],
    pending_complete: [],
    working: [],
    progress: 10,
};

/** Upload whose state the test drives */
const fakeUpload = () => {
    const state = new BehaviorSubject<ChunkedUploadState>(uploading);
    return { id: 'upload-1', state } as Partial<ChunkedUpload> as ChunkedUpload;
};

beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
});

describe('uploadFile', () => {
    it.each([
        {
            status: 'FAILED',
            errors: [[expect.objectContaining({ error: 'Upload failed' })]],
            completions: 0,
        },
        { status: 'COMPLETED', errors: [], completions: 1 },
    ] as const)(
        'stops listening once the upload is $status',
        async ({ status, errors, completions }) => {
            const upload = fakeUpload();
            mocks.uploadNewFile.mockResolvedValue(upload);
            const next = vi.fn();
            const error = vi.fn();
            const complete = vi.fn();
            uploadFile(file).subscribe(next, error, complete);
            await vi.waitFor(() => expect(next).toHaveBeenCalled());
            upload.state.next({ ...uploading, status, progress: 100 });
            expect(error.mock.calls).toEqual(errors);
            expect(complete).toHaveBeenCalledTimes(completions);
            expect(upload.state.observed).toBe(false);
        },
    );

    it('starts the upload service again when the PlaceOS token changes', async () => {
        mocks.uploadNewFile.mockResolvedValue(fakeUpload());
        for (const token of ['token-1', 'token-1', 'token-2']) {
            mocks.token.mockReturnValue(token);
            uploadFile(file).subscribe(vi.fn());
        }
        await vi.waitFor(() =>
            expect(mocks.uploadNewFile).toHaveBeenCalledTimes(3),
        );
        expect(mocks.initUploads.mock.calls.map(([_]) => _.token)).toEqual([
            'token-1',
            'token-2',
        ]);
    });
});

describe('UploadsService', () => {
    it('rejects without uploading when the permissions dialog closes without a choice', async () => {
        TestBed.configureTestingModule({
            providers: [
                UploadsService,
                {
                    provide: Dialog,
                    useValue: { open: () => ({ closed: of(undefined) }) },
                },
            ],
        });
        const service = TestBed.inject(UploadsService);
        await expect(service.uploadFileWithPermissions(file)).rejects.toThrow(
            'Upload cancelled',
        );
        expect(mocks.uploadNewFile).not.toHaveBeenCalled();
        expect(service.upload_list()).toEqual([]);
    });
});
