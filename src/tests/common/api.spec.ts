import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock @placeos/ts-client before importing the module
vi.mock('@placeos/ts-client', () => ({
    authority: vi.fn(() => ({ domain: 'example.com' })),
    PlaceModule: class {},
    PlaceResource: class {},
}));

import { toQueryString, calculateModuleIndex } from '../../app/common/api';

describe('api.ts utilities', () => {
    describe('toQueryString', () => {
        it('should return empty string for null', () => {
            expect(toQueryString(null as any)).toBe('');
        });

        it('should return empty string for undefined', () => {
            expect(toQueryString(undefined as any)).toBe('');
        });

        it('should return empty string for empty object', () => {
            expect(toQueryString({})).toBe('');
        });

        it('should convert single key-value pair', () => {
            expect(toQueryString({ name: 'test' })).toBe('name=test');
        });

        it('should convert multiple key-value pairs', () => {
            const result = toQueryString({ name: 'test', value: 123 });
            expect(result).toBe('name=test&value=123');
        });

        it('should encode special characters in values', () => {
            expect(toQueryString({ q: 'hello world' })).toBe('q=hello%20world');
        });

        it('should encode special characters like &', () => {
            expect(toQueryString({ q: 'a&b' })).toBe('q=a%26b');
        });

        it('should encode special characters like =', () => {
            expect(toQueryString({ q: 'a=b' })).toBe('q=a%3Db');
        });

        it('should skip null values', () => {
            expect(toQueryString({ a: 'test', b: null, c: 'value' })).toBe(
                'a=test&c=value',
            );
        });

        it('should skip undefined values', () => {
            expect(
                toQueryString({ a: 'test', b: undefined, c: 'value' }),
            ).toBe('a=test&c=value');
        });

        it('should handle boolean values', () => {
            expect(toQueryString({ enabled: true, disabled: false })).toBe(
                'enabled=true&disabled=false',
            );
        });

        it('should handle number values', () => {
            expect(toQueryString({ count: 42, rate: 3.14 })).toBe(
                'count=42&rate=3.14',
            );
        });

        it('should handle zero value', () => {
            expect(toQueryString({ count: 0 })).toBe('count=0');
        });

        it('should handle empty string value', () => {
            expect(toQueryString({ name: '' })).toBe('name=');
        });

        it('should JSON stringify object values', () => {
            const result = toQueryString({ filter: { type: 'zone' } });
            expect(result).toBe('filter=%7B%22type%22%3A%22zone%22%7D');
        });

        it('should JSON stringify array values', () => {
            const result = toQueryString({ ids: ['a', 'b', 'c'] });
            expect(result).toBe('ids=%5B%22a%22%2C%22b%22%2C%22c%22%5D');
        });

        it('should handle mixed value types', () => {
            const result = toQueryString({
                name: 'test',
                count: 5,
                enabled: true,
                filter: { key: 'value' },
            });
            expect(result).toContain('name=test');
            expect(result).toContain('count=5');
            expect(result).toContain('enabled=true');
            expect(result).toContain('filter=');
        });
    });

    describe('calculateModuleIndex', () => {
        it('should return 1 for single module', () => {
            const module = {
                id: 'mod-1',
                driver: { class_name: 'Display' },
            };
            const index = calculateModuleIndex([module as any], module as any);
            expect(index).toBe(1);
        });

        it('should return correct index for module in list', () => {
            const modules = [
                { id: 'mod-1', driver: { class_name: 'Display' } },
                { id: 'mod-2', driver: { class_name: 'Display' } },
                { id: 'mod-3', driver: { class_name: 'Display' } },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[1] as any,
            );
            expect(index).toBe(2);
        });

        it('should return correct index for last module', () => {
            const modules = [
                { id: 'mod-1', driver: { class_name: 'Display' } },
                { id: 'mod-2', driver: { class_name: 'Display' } },
                { id: 'mod-3', driver: { class_name: 'Display' } },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[2] as any,
            );
            expect(index).toBe(3);
        });

        it('should count only modules with same class name', () => {
            const modules = [
                { id: 'mod-1', driver: { class_name: 'Display' } },
                { id: 'mod-2', driver: { class_name: 'Lighting' } },
                { id: 'mod-3', driver: { class_name: 'Display' } },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[2] as any,
            );
            expect(index).toBe(2); // Second Display module
        });

        it('should use custom_name for matching if available', () => {
            const modules = [
                { id: 'mod-1', custom_name: 'MyModule' },
                { id: 'mod-2', custom_name: 'OtherModule' },
                { id: 'mod-3', custom_name: 'MyModule' },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[2] as any,
            );
            expect(index).toBe(2);
        });

        it('should use name if custom_name not available', () => {
            const modules = [
                { id: 'mod-1', name: 'Display' },
                { id: 'mod-2', name: 'Lighting' },
                { id: 'mod-3', name: 'Display' },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[2] as any,
            );
            expect(index).toBe(2);
        });

        it('should return minimum of 1', () => {
            const module = {
                id: 'mod-not-in-list',
                driver: { class_name: 'Display' },
            };
            const modules = [
                { id: 'mod-1', driver: { class_name: 'Display' } },
            ];
            const index = calculateModuleIndex(modules as any, module as any);
            expect(index).toBe(1);
        });

        it('should handle module without driver', () => {
            const modules = [
                { id: 'mod-1' },
                { id: 'mod-2' },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[1] as any,
            );
            // Both should fall back to 'System' class
            expect(index).toBe(2);
        });

        it('should prefer custom_name over name over driver class_name', () => {
            const modules = [
                {
                    id: 'mod-1',
                    custom_name: 'Custom',
                    name: 'Named',
                    driver: { class_name: 'Driver' },
                },
                {
                    id: 'mod-2',
                    custom_name: 'Custom',
                    name: 'Named',
                    driver: { class_name: 'Driver' },
                },
            ];
            const index = calculateModuleIndex(
                modules as any,
                modules[1] as any,
            );
            expect(index).toBe(2);
        });
    });
});
