import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { beforeEach, describe, expect, it } from 'vitest';
import { SanitizePipe } from '../../../app/ui/pipes/sanitise.pipe';

describe('SanitizePipe', () => {
    let pipe: SanitizePipe;
    let sanitizer: DomSanitizer;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SanitizePipe],
        });
        sanitizer = TestBed.inject(DomSanitizer);
        pipe = TestBed.inject(SanitizePipe);
    });

    describe('transform', () => {
        it('should sanitize as HTML by default', () => {
            const result = pipe.transform('<div>safe content</div>');
            // DomSanitizer.sanitize returns a string (sanitized) or null
            expect(typeof result).toBe('string');
            expect(result).toContain('safe content');
        });

        it('should sanitize HTML and remove dangerous elements', () => {
            const result = pipe.transform(
                '<script>alert(1)</script><div>safe</div>',
                'html',
            );
            // Script tags should be removed during sanitization
            expect(result).not.toContain('<script>');
            expect(result).toContain('safe');
        });

        it('should sanitize URLs', () => {
            const result = pipe.transform('https://example.com', 'url');
            expect(result).toBe('https://example.com');
        });

        it('should sanitize dangerous URLs', () => {
            const result = pipe.transform('javascript:alert(1)', 'url');
            // Dangerous URLs are sanitized to unsafe:
            expect(result).toBe('unsafe:javascript:alert(1)');
        });

        it('should throw for resource URLs (Angular security)', () => {
            // Angular throws an error for resource URL sanitization with untrusted content
            expect(() =>
                pipe.transform('https://example.com/resource', 'resource'),
            ).toThrow();
        });

        it('should sanitize styles', () => {
            const result = pipe.transform(
                'color: red; background: blue;',
                'style',
            );
            expect(typeof result).toBe('string');
        });

        it('should throw for script context (Angular security)', () => {
            // Angular throws an error for script sanitization
            expect(() =>
                pipe.transform('console.log("test")', 'script'),
            ).toThrow();
        });

        it('should handle null input', () => {
            const result = pipe.transform(null, 'html');
            expect(result === null || result === '').toBeTruthy();
        });

        it('should handle undefined input', () => {
            const result = pipe.transform(undefined, 'html');
            expect(result === null || result === '').toBeTruthy();
        });

        it('should handle empty string', () => {
            const result = pipe.transform('', 'html');
            expect(result === null || result === '').toBeTruthy();
        });

        it('should strip onclick handlers from HTML', () => {
            const result = pipe.transform(
                '<div onclick="alert(1)">test</div>',
                'html',
            );
            expect(result).not.toContain('onclick');
        });

        it('should preserve safe HTML attributes', () => {
            const result = pipe.transform(
                '<a href="https://safe.com" class="link">Link</a>',
                'html',
            );
            expect(result).toContain('href');
            expect(result).toContain('class');
        });
    });
});
