import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import type { UploadDetails } from '../../../app/common/uploads';
import { UploadsService } from '../../../app/common/uploads.service';
import { ImageListFieldComponent } from '../../../app/ui/custom-fields/image-list-field.component';

vi.mock('@placeos/cloud-uploads', () =>
    vi.importActual('@placeos/cloud-uploads/dist/index.es.js'),
);

describe('image list field', () => {
    it('keeps the error of an upload that failed before it started', () => {
        TestBed.configureTestingModule({
            imports: [ImageListFieldComponent],
            providers: [
                provideZonelessChangeDetection(),
                { provide: UploadsService, useValue: {} },
            ],
        });
        const fixture = TestBed.createComponent(ImageListFieldComponent);
        const field = fixture.componentInstance;
        // A failure before the upload starts, such as without a login
        const failed: UploadDetails = {
            id: 1,
            name: 'plan.png',
            progress: 0,
            link: '',
            formatted_size: '1 KB',
            size: 1024,
            error: 'Not signed in',
            upload: null,
        };
        field.upload_list.set([failed]);
        field.upload_ids.set([failed.id]);
        fixture.detectChanges();

        const tile: HTMLButtonElement =
            fixture.nativeElement.querySelector('button[image]');
        // Focusable, so a keyboard user can read the error in the tooltip
        expect(tile.disabled).toBe(false);
        expect(tile.getAttribute('aria-disabled')).toBe('true');
        field.retryUpload(failed);
        expect(failed.error).toBe('Not signed in');
    });
});
