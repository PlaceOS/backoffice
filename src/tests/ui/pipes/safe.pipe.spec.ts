import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { SafePipe } from '../../../app/ui/pipes/safe.pipe';

describe('SafePipe', () => {
    let pipe: SafePipe;
    let sanitizer: DomSanitizer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SafePipe],
        });
        sanitizer = TestBed.inject(DomSanitizer);
        pipe = TestBed.inject(SafePipe);
    });

    describe('transform', () => {
        it('should sanitize as URL when type is "url"', () => {
            const result = pipe.transform('javascript:alert(1)', 'url');
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                'javascript:alert(1)',
            );
        });

        it('should sanitize as resource URL when type is "resource"', () => {
            const result = pipe.transform(
                'https://example.com/video.mp4',
                'resource',
            );
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                'https://example.com/video.mp4',
            );
        });

        it('should handle blob URLs for resources', () => {
            const url = 'blob:https://example.com/12345';
            const result = pipe.transform(url, 'resource');
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                url,
            );
        });

        it('should handle data URLs', () => {
            const url = 'data:image/png;base64,ABC123';
            const result = pipe.transform(url, 'url');
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                url,
            );
        });
    });
});
