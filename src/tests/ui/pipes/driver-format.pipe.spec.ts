import { beforeEach, describe, expect, it } from 'vitest';
import { DriverFormatPipe } from '../../../app/ui/pipes/driver-format.pipe';

describe('DriverFormatPipe', () => {
    let pipe: DriverFormatPipe;

    beforeEach(() => {
        pipe = new DriverFormatPipe();
    });

    describe('transform', () => {
        it('should return empty string for non-string input', () => {
            expect(pipe.transform(null as any)).toBe('');
            expect(pipe.transform(undefined as any)).toBe('');
            expect(pipe.transform(123 as any)).toBe('');
            expect(pipe.transform({} as any)).toBe('');
        });

        it('should return original string if no slash present', () => {
            expect(pipe.transform('simple-driver')).toBe('simple-driver');
        });

        it('should return empty string for empty input', () => {
            expect(pipe.transform('')).toBe('');
        });

        it('should format path with single slash', () => {
            const result = pipe.transform('repository/driver');
            expect(result).toContain('driver');
            expect(result).toContain(
                '<div class="flex items-center space-x-2">',
            );
            expect(result).toContain('class="name-part"');
        });

        it('should format path with multiple slashes', () => {
            const result = pipe.transform('repo/category/driver-name');
            expect(result).toContain('category');
            expect(result).toContain('driver-name');
            expect(result).toContain('keyboard_arrow_right');
        });

        it('should remove first part of path (repository)', () => {
            const result = pipe.transform('my-repo/my-driver');
            // First part (my-repo) should be removed
            expect(result).not.toContain('>my-repo<');
            expect(result).toContain('my-driver');
        });

        it('should create breadcrumb-style HTML', () => {
            const result = pipe.transform('repo/part1/part2/part3');
            // Should have 3 name-parts (excluding repo)
            const matches = result.match(/class="name-part"/g);
            expect(matches).toHaveLength(3);
        });

        it('should include Material icon for separators', () => {
            const result = pipe.transform('repo/a/b');
            expect(result).toContain('material-symbols-outlined');
            expect(result).toContain('keyboard_arrow_right');
        });
    });
});
