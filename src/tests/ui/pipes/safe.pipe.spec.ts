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
        it('should sanitize as HTML by default', () => {
            const result = pipe.transform('<div>test</div>');
            // SafeHtml is an object with changingThisBreaksApplicationSecurity property
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                '<div>test</div>',
            );
        });

        it('should sanitize as HTML when type is "html"', () => {
            const result = pipe.transform('<p>paragraph</p>', 'html');
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                '<p>paragraph</p>',
            );
        });

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

        it('should sanitize as style when type is "style"', () => {
            const result = pipe.transform('color: red;', 'style');
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                'color: red;',
            );
        });

        it('should sanitize as script when type is "script"', () => {
            const result = pipe.transform('console.log("test")', 'script');
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                'console.log("test")',
            );
        });

        it('should handle empty string', () => {
            const result = pipe.transform('');
            expect(result).toBeTruthy();
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                '',
            );
        });

        it('should handle complex HTML', () => {
            const html =
                '<div class="test" onclick="alert(1)"><span>Content</span></div>';
            const result = pipe.transform(html, 'html');
            expect((result as any).changingThisBreaksApplicationSecurity).toBe(
                html,
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
