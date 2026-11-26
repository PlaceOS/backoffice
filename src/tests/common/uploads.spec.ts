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
    validCredential: vi.fn(async () => ({
        kind: 'bearer' as const,
        token: 'token-0',
    })),
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
vi.mock('../../app/common/placeos', () => ({
    validCredential: mocks.validCredential,
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
    it('stops listening once the upload is complete', async () => {
        const upload = fakeUpload();
        mocks.uploadNewFile.mockResolvedValue(upload);
        const next = vi.fn();
        const complete = vi.fn();
        uploadFile(file).subscribe(next, vi.fn(), complete);
        await vi.waitFor(() => expect(next).toHaveBeenCalled());
        upload.state.next({ ...uploading, status: 'COMPLETED', progress: 100 });
        expect(complete).toHaveBeenCalledTimes(1);
        expect(upload.state.observed).toBe(false);
    });

    it('gives the progress of a retry after a failure', async () => {
        const upload = fakeUpload();
        mocks.uploadNewFile.mockResolvedValue(upload);
        const next = vi.fn();
        const error = vi.fn();
        uploadFile(file).subscribe(next, error);
        await vi.waitFor(() => expect(next).toHaveBeenCalled());
        upload.state.next({ ...uploading, status: 'FAILED' });
        expect(error).toHaveBeenCalledWith(
            expect.objectContaining({ error: 'Upload failed' }),
        );

        // The user retries, and the upload goes on
        upload.state.next({ ...uploading, progress: 60 });

        expect(next).toHaveBeenLastCalledWith(
            expect.objectContaining({ progress: 60 }),
        );
    });

    it('starts the upload service again when the PlaceOS token changes', async () => {
        mocks.uploadNewFile.mockResolvedValue(fakeUpload());
        for (const token of ['token-1', 'token-1', 'token-2']) {
            mocks.validCredential.mockResolvedValue({ kind: 'bearer', token });
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

describe('uploadFile before the upload starts', () => {
    it('reports "Not signed in" and starts no upload without a token', async () => {
        mocks.validCredential.mockResolvedValueOnce(null);
        const error = vi.fn();
        uploadFile(file).subscribe(vi.fn(), error);
        await vi.waitFor(() =>
            expect(error).toHaveBeenCalledWith(
                expect.objectContaining({ error: 'Not signed in' }),
            ),
        );
        expect(mocks.uploadNewFile).not.toHaveBeenCalled();
    });

    it('reports "Upload failed" when the upload service does not start, and starts it on the next try', async () => {
        mocks.validCredential.mockResolvedValue({
            kind: 'bearer',
            token: 'token-start',
        });
        mocks.initUploads.mockImplementationOnce(() => {
            throw new Error('no worker');
        });
        const error = vi.fn();
        uploadFile(file).subscribe(vi.fn(), error);
        await vi.waitFor(() =>
            expect(error).toHaveBeenCalledWith(
                expect.objectContaining({ error: 'Upload failed' }),
            ),
        );
        expect(mocks.uploadNewFile).not.toHaveBeenCalled();

        // The same token starts the service again, as the failed start was not kept
        mocks.uploadNewFile.mockResolvedValue(fakeUpload());
        uploadFile(file).subscribe(vi.fn());
        await vi.waitFor(() => expect(mocks.uploadNewFile).toHaveBeenCalled());
        expect(mocks.initUploads).toHaveBeenCalledTimes(2);
    });

    it('reports "Upload failed" when the upload cannot be made', async () => {
        mocks.uploadNewFile.mockRejectedValueOnce(new Error('offline'));
        const error = vi.fn();
        uploadFile(file).subscribe(vi.fn(), error);
        await vi.waitFor(() =>
            expect(error).toHaveBeenCalledWith(
                expect.objectContaining({ error: 'Upload failed' }),
            ),
        );
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
