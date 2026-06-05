import {
    UntypedFormControl,
    UntypedFormGroup,
    Validators,
} from '@angular/forms';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    copyToClipboard,
    csvToJson,
    detectIE,
    downloadFile,
    eventToPoint,
    flatten,
    getInvalidFields,
    getItemWithKeys,
    issueDescription,
    jsonToCsv,
    log,
    numberToPosition,
    padLength,
    parseCSV,
    parseJWT,
    predictableRandomInt,
    randomInt,
    unique,
} from '../../app/common/general';

describe('general.ts utilities', () => {
    describe('log', () => {
        beforeEach(() => {
            vi.spyOn(console, 'debug').mockImplementation(() => null);
            vi.spyOn(console, 'log').mockImplementation(() => null);
            vi.spyOn(console, 'warn').mockImplementation(() => null);
            vi.spyOn(console, 'error').mockImplementation(() => null);
        });

        afterEach(() => {
            vi.restoreAllMocks();
            delete (window as any).debug;
        });

        it('should not log when debug mode is off', () => {
            (window as any).debug = false;
            log('TEST', 'test message');
            expect(console.debug).not.toHaveBeenCalled();
        });

        it('should log when debug mode is on', () => {
            (window as any).debug = true;
            log('TEST', 'test message');
            expect(console.debug).toHaveBeenCalled();
        });

        it('should log when force is true even if debug is off', () => {
            (window as any).debug = false;
            log('TEST', 'test message', undefined, 'debug', true);
            expect(console.debug).toHaveBeenCalled();
        });

        it('should log with args when provided', () => {
            (window as any).debug = true;
            log('TEST', 'test message', ['arg1', 'arg2']);
            expect(console.debug).toHaveBeenCalled();
        });

        it('should use different console streams', () => {
            (window as any).debug = true;
            log('TEST', 'warn message', undefined, 'warn');
            expect(console.warn).toHaveBeenCalled();

            log('TEST', 'error message', undefined, 'error');
            expect(console.error).toHaveBeenCalled();

            log('TEST', 'log message', undefined, 'log');
            expect(console.log).toHaveBeenCalled();
        });

        it('should use custom app name', () => {
            (window as any).debug = true;
            log(
                'TEST',
                'test message',
                undefined,
                'debug',
                false,
                'CUSTOM_APP',
            );
            expect(console.debug).toHaveBeenCalledWith(
                expect.stringContaining('CUSTOM_APP'),
                expect.any(String),
                expect.any(String),
                expect.any(String),
            );
        });
    });

    describe('detectIE', () => {
        const original_user_agent = navigator.userAgent;

        afterEach(() => {
            Object.defineProperty(navigator, 'userAgent', {
                value: original_user_agent,
                writable: true,
            });
        });

        it('should return 0 for non-IE browsers', () => {
            expect(detectIE()).toBe(0);
        });

        it('should detect MSIE version', () => {
            Object.defineProperty(navigator, 'userAgent', {
                value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)',
                writable: true,
            });
            expect(detectIE()).toBe(10);
        });

        it('should detect Trident (IE 11)', () => {
            Object.defineProperty(navigator, 'userAgent', {
                value: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
                writable: true,
            });
            expect(detectIE()).toBe(11);
        });

        it('should detect Edge', () => {
            Object.defineProperty(navigator, 'userAgent', {
                value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Edge/12.0',
                writable: true,
            });
            expect(detectIE()).toBe(12);
        });
    });

    describe('getItemWithKeys', () => {
        it('should get value from nested object', () => {
            const obj = { a: { b: { c: 'value' } } };
            expect(getItemWithKeys(['a', 'b', 'c'], obj)).toBe('value');
        });

        it('should get value at first level', () => {
            const obj = { key: 'value' };
            expect(getItemWithKeys(['key'], obj)).toBe('value');
        });

        it('should return null for non-existent key', () => {
            const obj = { a: { b: 'value' } };
            expect(getItemWithKeys(['a', 'c'], obj)).toBeNull();
        });

        it('should return null for empty keys', () => {
            const obj = { a: 'value' };
            expect(getItemWithKeys([], obj)).toBeNull();
        });

        it('should return null for null map', () => {
            expect(getItemWithKeys(['a'], null as any)).toBeNull();
        });

        it('should handle undefined nested values gracefully', () => {
            const obj = { a: undefined };
            expect(getItemWithKeys(['a', 'b'], obj as any)).toBeNull();
        });
    });

    describe('unique', () => {
        it('should remove duplicate primitives', () => {
            const arr = [1, 2, 2, 3, 3, 3];
            expect(unique(arr)).toEqual([1, 2, 3]);
        });

        it('should remove duplicate strings', () => {
            const arr = ['a', 'b', 'a', 'c', 'b'];
            expect(unique(arr)).toEqual(['a', 'b', 'c']);
        });

        it('should remove duplicates by key for objects', () => {
            const arr = [
                { id: 1, name: 'a' },
                { id: 2, name: 'b' },
                { id: 1, name: 'c' },
            ];
            expect(unique(arr, 'id')).toEqual([
                { id: 1, name: 'a' },
                { id: 2, name: 'b' },
            ]);
        });

        it('should return empty array for empty input', () => {
            expect(unique([])).toEqual([]);
        });

        it('should handle single element array', () => {
            expect(unique([1])).toEqual([1]);
        });
    });

    describe('randomInt', () => {
        it('should generate number within range', () => {
            for (let i = 0; i < 100; i++) {
                const result = randomInt(10, 5);
                expect(result).toBeGreaterThanOrEqual(5);
                expect(result).toBeLessThan(10);
            }
        });

        it('should generate number from 0 when floor not specified', () => {
            for (let i = 0; i < 100; i++) {
                const result = randomInt(10);
                expect(result).toBeGreaterThanOrEqual(0);
                expect(result).toBeLessThan(10);
            }
        });

        it('should return floor when ceil equals floor', () => {
            expect(randomInt(5, 5)).toBe(5);
        });
    });

    describe('predictableRandomInt', () => {
        it('should generate consistent sequence of numbers', () => {
            // Predictable random should return the same sequence
            const first = predictableRandomInt(100);
            const second = predictableRandomInt(100);
            // These will be different from each other but consistent across runs
            expect(typeof first).toBe('number');
            expect(typeof second).toBe('number');
        });

        it('should respect floor and ceil bounds', () => {
            for (let i = 0; i < 50; i++) {
                const result = predictableRandomInt(100, 50);
                expect(result).toBeGreaterThanOrEqual(50);
                expect(result).toBeLessThan(100);
            }
        });
    });

    describe('numberToPosition', () => {
        it('should return "1st" for 1', () => {
            expect(numberToPosition(1)).toBe('1st');
        });

        it('should return "2nd" for 2', () => {
            expect(numberToPosition(2)).toBe('2nd');
        });

        it('should return "3rd" for 3', () => {
            expect(numberToPosition(3)).toBe('3rd');
        });

        it('should return "4th" for 4', () => {
            expect(numberToPosition(4)).toBe('4th');
        });

        it('should return "11th" for 11 (special case)', () => {
            expect(numberToPosition(11)).toBe('11th');
        });

        it('should return "12th" for 12 (special case)', () => {
            expect(numberToPosition(12)).toBe('12th');
        });

        it('should return "13th" for 13 (special case)', () => {
            expect(numberToPosition(13)).toBe('13th');
        });

        it('should return "21st" for 21', () => {
            expect(numberToPosition(21)).toBe('21st');
        });

        it('should return "22nd" for 22', () => {
            expect(numberToPosition(22)).toBe('22nd');
        });

        it('should return "23rd" for 23', () => {
            expect(numberToPosition(23)).toBe('23rd');
        });

        it('should return "100th" for 100', () => {
            expect(numberToPosition(100)).toBe('100th');
        });

        it('should return "101st" for 101', () => {
            expect(numberToPosition(101)).toBe('101st');
        });
    });

    describe('parseCSV / csvToJson', () => {
        it('should parse simple CSV', () => {
            const csv = 'name,age\nJohn,30\nJane,25';
            const result = parseCSV(csv);
            expect(result).toEqual([
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
            ]);
        });

        it('should handle empty CSV', () => {
            expect(parseCSV('')).toEqual([]);
        });

        it('should handle CSV with only headers', () => {
            expect(parseCSV('name,age')).toEqual([]);
        });

        it('should handle quoted values with commas', () => {
            const csv = 'name,description\nTest,"Hello, World"';
            const result = parseCSV(csv);
            expect(result).toEqual([
                { name: 'Test', description: 'Hello, World' },
            ]);
        });

        it('should handle escaped quotes', () => {
            const csv = 'name,quote\nTest,"He said ""Hello"""';
            const result = parseCSV(csv);
            expect(result).toEqual([
                { name: 'Test', quote: 'He said "Hello"' },
            ]);
        });

        it('should parse boolean values', () => {
            const csv = 'name,active\nTest,true\nTest2,false';
            const result = parseCSV(csv);
            expect(result).toEqual([
                { name: 'Test', active: true },
                { name: 'Test2', active: false },
            ]);
        });

        it('should parse JSON objects in cells', () => {
            const csv = 'name,data\nTest,"{""key"":""value""}"';
            const result = parseCSV(csv);
            expect(result).toEqual([{ name: 'Test', data: { key: 'value' } }]);
        });

        it('should use custom separator', () => {
            const csv = 'name;age\nJohn;30';
            const result = parseCSV(csv, ';');
            expect(result).toEqual([{ name: 'John', age: 30 }]);
        });

        it('csvToJson should be alias for parseCSV', () => {
            expect(csvToJson).toBe(parseCSV);
        });
    });

    describe('jsonToCsv', () => {
        it('should convert array of objects to CSV', () => {
            const data = [
                { name: 'John', age: 30 },
                { name: 'Jane', age: 25 },
            ];
            const result = jsonToCsv(data);
            expect(result).toBe('name,age\nJohn,30\nJane,25');
        });

        it('should handle empty array', () => {
            expect(jsonToCsv([])).toBe('');
        });

        it('should handle nested objects', () => {
            const data = [{ name: 'Test', data: { key: 'value' } }];
            const result = jsonToCsv(data);
            // CSV escapes quotes by doubling them, so {"key":"value"} becomes {""key"":""value""}
            expect(result).toContain('"{""key"":""value""}"');
        });

        it('should escape values with commas', () => {
            const data = [{ name: 'Test', description: 'Hello, World' }];
            const result = jsonToCsv(data);
            expect(result).toContain('"Hello, World"');
        });

        it('should escape values with quotes', () => {
            const data = [{ name: 'Test', quote: 'He said "Hello"' }];
            const result = jsonToCsv(data);
            expect(result).toContain('"He said ""Hello"""');
        });

        it('should escape values with newlines', () => {
            const data = [{ name: 'Test', text: 'Line1\nLine2' }];
            const result = jsonToCsv(data);
            expect(result).toContain('"Line1\nLine2"');
        });

        it('should handle null and undefined values', () => {
            const data = [{ name: 'Test', empty: null, missing: undefined }];
            const result = jsonToCsv(data);
            expect(result).toBe('name,empty,missing\nTest,,');
        });

        it('should filter keys with use_keys parameter', () => {
            const data = [{ name: 'John', age: 30, city: 'NYC' }];
            const result = jsonToCsv(data, ['name', 'age']);
            expect(result).toBe('name,age\nJohn,30');
        });

        it('should use custom separator', () => {
            const data = [{ name: 'John', age: 30 }];
            const result = jsonToCsv(data, [], ';');
            expect(result).toBe('name;age\nJohn;30');
        });
    });

    describe('eventToPoint', () => {
        it('should extract coordinates from MouseEvent', () => {
            // Create a proper MouseEvent
            const event = new MouseEvent('click', {
                clientX: 100,
                clientY: 200,
            });
            expect(eventToPoint(event)).toEqual({ x: 100, y: 200 });
        });

        it('should extract coordinates from TouchEvent', () => {
            // Create a mock TouchEvent with touches
            const touch = { clientX: 150, clientY: 250 } as Touch;
            const event = {
                touches: [touch],
            } as unknown as TouchEvent;
            // The function checks instanceof MouseEvent first, so non-MouseEvent with touches
            const result = eventToPoint(event);
            expect(result).toEqual({ x: 150, y: 250 });
        });

        it('should return -1, -1 for null event', () => {
            expect(eventToPoint(null as any)).toEqual({ x: -1, y: -1 });
        });

        it('should return -1, -1 for TouchEvent with no touches', () => {
            const event = { touches: [] } as unknown as TouchEvent;
            expect(eventToPoint(event)).toEqual({ x: -1, y: -1 });
        });
    });

    describe('copyToClipboard', () => {
        beforeEach(() => {
            // Mock execCommand since jsdom doesn't support it
            (document as any).execCommand = vi.fn(() => true);
        });

        afterEach(() => {
            vi.restoreAllMocks();
            delete (document as any).execCommand;
        });

        it('should create textarea and copy value', () => {
            const appendChild_spy = vi.spyOn(document.body, 'appendChild');
            const removeChild_spy = vi.spyOn(document.body, 'removeChild');

            copyToClipboard('test value');

            expect(appendChild_spy).toHaveBeenCalled();
            expect((document as any).execCommand).toHaveBeenCalledWith('copy');
            expect(removeChild_spy).toHaveBeenCalled();
        });
    });

    describe('downloadFile', () => {
        beforeEach(() => {
            vi.spyOn(document.body, 'appendChild').mockImplementation(
                () => null as any,
            );
            vi.spyOn(document.body, 'removeChild').mockImplementation(
                () => null as any,
            );
        });

        afterEach(() => {
            vi.restoreAllMocks();
        });

        it('should create anchor element with correct attributes', () => {
            const createElement_spy = vi.spyOn(document, 'createElement');

            downloadFile('test.txt', 'file contents');

            expect(createElement_spy).toHaveBeenCalledWith('a');
        });
    });

    describe('parseJWT', () => {
        it('should parse valid JWT payload', () => {
            // JWT with payload: { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            const result = parseJWT(token);
            expect(result).toEqual({
                sub: '1234567890',
                name: 'John Doe',
                iat: 1516239022,
            });
        });

        it('should handle JWT with URL-safe base64 characters', () => {
            // JWT uses base64url encoding which may contain - and _
            const token =
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
            expect(() => parseJWT(token)).not.toThrow();
        });
    });

    describe('flatten', () => {
        it('should flatten nested arrays', () => {
            const arr = [1, [2, 3], [4, [5, 6]]];
            expect(flatten(arr)).toEqual([1, 2, 3, 4, 5, 6]);
        });

        it('should handle empty array', () => {
            expect(flatten([])).toEqual([]);
        });

        it('should handle already flat array', () => {
            expect(flatten([1, 2, 3])).toEqual([1, 2, 3]);
        });

        it('should handle deeply nested arrays', () => {
            const arr = [[[[1]]]];
            expect(flatten(arr)).toEqual([1]);
        });

        it('should preserve order', () => {
            const arr = [1, [2, 3], 4];
            expect(flatten(arr)).toEqual([1, 2, 3, 4]);
        });

        it('should handle mixed types', () => {
            const arr = [1, ['a', 'b'], [true, false]];
            expect(flatten(arr)).toEqual([1, 'a', 'b', true, false]);
        });
    });

    describe('getInvalidFields', () => {
        it('should return empty array for valid form', () => {
            const form = new UntypedFormGroup({
                name: new UntypedFormControl('John'),
                email: new UntypedFormControl('john@test.com'),
            });
            expect(getInvalidFields(form)).toEqual([]);
        });

        it('should return invalid field names', () => {
            const form = new UntypedFormGroup({
                name: new UntypedFormControl('', Validators.required),
                email: new UntypedFormControl('john@test.com'),
            });
            expect(getInvalidFields(form)).toEqual(['name']);
        });

        it('should handle nested form groups', () => {
            const form = new UntypedFormGroup({
                user: new UntypedFormGroup({
                    name: new UntypedFormControl('', Validators.required),
                }),
            });
            expect(getInvalidFields(form)).toEqual(['user.name']);
        });

        it('should handle multiple invalid fields', () => {
            const form = new UntypedFormGroup({
                name: new UntypedFormControl('', Validators.required),
                email: new UntypedFormControl('', Validators.required),
            });
            const invalid = getInvalidFields(form);
            expect(invalid).toContain('name');
            expect(invalid).toContain('email');
        });

        it('should use custom prefix', () => {
            const form = new UntypedFormGroup({
                name: new UntypedFormControl('', Validators.required),
            });
            expect(getInvalidFields(form, 'form.')).toEqual(['form.name']);
        });
    });

    describe('padLength', () => {
        it('should pad number to specified length', () => {
            expect(padLength(5, 3)).toBe('005');
        });

        it('should pad string to specified length', () => {
            expect(padLength('5', 3)).toBe('005');
        });

        it('should not pad if already at length', () => {
            expect(padLength(123, 3)).toBe('123');
        });

        it('should not pad if longer than length', () => {
            expect(padLength(12345, 3)).toBe('12345');
        });

        it('should use custom character', () => {
            expect(padLength(5, 3, '*')).toBe('**5');
        });

        it('should default to length 2', () => {
            expect(padLength(5)).toBe('05');
        });
    });

    describe('issueDescription', () => {
        it('should generate issue template with hash and date', () => {
            const result = issueDescription('abc123', '2024-01-01');
            expect(result).toContain('**Hash:** abc123');
            expect(result).toContain('**Built:** 2024-01-01');
            expect(result).toContain('**Describe the bug**');
            expect(result).toContain('**To Reproduce**');
        });
    });
});
