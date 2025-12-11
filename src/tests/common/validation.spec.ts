import { FormControl } from '@angular/forms';
import { describe, expect, it } from 'vitest';
import {
    isValidDomain,
    isValidUrl,
    validateIpAddress,
    validateJSONString,
    validateURI,
    validateURL,
} from '../../app/common/validation';

describe('validation.ts utilities', () => {
    describe('validateIpAddress', () => {
        describe('valid IPv4 addresses', () => {
            it('should accept 0.0.0.0', () => {
                const ctrl = { value: '0.0.0.0' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should accept 127.0.0.1', () => {
                const ctrl = { value: '127.0.0.1' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should accept 192.168.1.1', () => {
                const ctrl = { value: '192.168.1.1' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should accept 255.255.255.255', () => {
                const ctrl = { value: '255.255.255.255' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should accept 10.0.0.1', () => {
                const ctrl = { value: '10.0.0.1' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });
        });

        describe('valid hostnames', () => {
            it('should accept example.com', () => {
                const ctrl = { value: 'example.com' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should accept sub.example.com', () => {
                const ctrl = { value: 'sub.example.com' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should accept my-server.local', () => {
                const ctrl = { value: 'my-server.local' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });
        });

        describe('invalid values', () => {
            it('should reject 256.0.0.0 (out of range)', () => {
                const ctrl = { value: '256.0.0.0' };
                expect(validateIpAddress(ctrl)).toEqual({ pattern: true });
            });

            it('should reject 192.168.1 (incomplete)', () => {
                const ctrl = { value: '192.168.1' };
                expect(validateIpAddress(ctrl)).toEqual({ pattern: true });
            });

            it('should reject random string', () => {
                const ctrl = { value: 'not-an-ip' };
                expect(validateIpAddress(ctrl)).toEqual({ pattern: true });
            });
        });

        describe('edge cases', () => {
            it('should return null for empty value', () => {
                const ctrl = { value: '' };
                expect(validateIpAddress(ctrl)).toBeNull();
            });

            it('should return null for null control', () => {
                expect(validateIpAddress(null)).toBeNull();
            });

            it('should return null for undefined value', () => {
                const ctrl = { value: undefined };
                expect(validateIpAddress(ctrl)).toBeNull();
            });
        });
    });

    describe('validateURI', () => {
        describe('valid URIs', () => {
            it('should accept http://example.com', () => {
                const ctrl = { value: 'http://example.com' };
                expect(validateURI(ctrl)).toBeNull();
            });

            it('should accept https://example.com/path', () => {
                const ctrl = { value: 'https://example.com/path' };
                expect(validateURI(ctrl)).toBeNull();
            });

            it('should accept ftp://files.example.com', () => {
                const ctrl = { value: 'ftp://files.example.com' };
                expect(validateURI(ctrl)).toBeNull();
            });

            it('should accept mailto:user@example.com', () => {
                const ctrl = { value: 'mailto:user@example.com' };
                expect(validateURI(ctrl)).toBeNull();
            });

            it('should accept custom:scheme', () => {
                const ctrl = { value: 'custom:scheme' };
                expect(validateURI(ctrl)).toBeNull();
            });
        });

        describe('invalid URIs', () => {
            it('should reject plain text', () => {
                const ctrl = { value: 'just some text' };
                expect(validateURI(ctrl)).toEqual({ pattern: true });
            });

            it('should reject path without scheme', () => {
                const ctrl = { value: '/path/to/file' };
                expect(validateURI(ctrl)).toEqual({ pattern: true });
            });
        });

        describe('edge cases', () => {
            it('should return null for empty value', () => {
                const ctrl = { value: '' };
                expect(validateURI(ctrl)).toBeNull();
            });

            it('should return null for null value', () => {
                const ctrl = { value: null };
                expect(validateURI(ctrl)).toBeNull();
            });
        });
    });

    describe('isValidUrl', () => {
        describe('valid URLs', () => {
            it('should accept http://example.com', () => {
                expect(isValidUrl('http://example.com')).toBe(true);
            });

            it('should accept https://example.com', () => {
                expect(isValidUrl('https://example.com')).toBe(true);
            });

            it('should accept https://example.com/path?query=1', () => {
                expect(isValidUrl('https://example.com/path?query=1')).toBe(
                    true,
                );
            });

            it('should accept ftp://files.example.com', () => {
                expect(isValidUrl('ftp://files.example.com')).toBe(true);
            });
        });

        describe('invalid URLs', () => {
            it('should reject plain text', () => {
                expect(isValidUrl('not a url')).toBe(false);
            });

            it('should reject path without protocol', () => {
                expect(isValidUrl('/path/to/file')).toBe(false);
            });

            it('should reject domain without protocol', () => {
                expect(isValidUrl('example.com')).toBe(false);
            });
        });

        describe('edge cases', () => {
            it('should return true for empty string', () => {
                expect(isValidUrl('')).toBe(true);
            });

            it('should return true for null', () => {
                expect(isValidUrl(null)).toBe(true);
            });

            it('should return true for undefined', () => {
                expect(isValidUrl(undefined)).toBe(true);
            });
        });
    });

    describe('isValidDomain', () => {
        describe('valid domains', () => {
            it('should accept example.com', () => {
                expect(isValidDomain('example.com')).toBe(true);
            });

            it('should accept sub.example.com', () => {
                expect(isValidDomain('sub.example.com')).toBe(true);
            });

            it('should accept example.co.uk', () => {
                expect(isValidDomain('example.co.uk')).toBe(true);
            });

            it('should accept my-domain.com', () => {
                expect(isValidDomain('my-domain.com')).toBe(true);
            });
        });

        describe('invalid domains', () => {
            it('should reject -example.com (starts with hyphen)', () => {
                expect(isValidDomain('-example.com')).toBe(false);
            });

            it('should reject example-.com (ends with hyphen in segment)', () => {
                expect(isValidDomain('example-.com')).toBe(false);
            });

            it('should reject example (no TLD)', () => {
                expect(isValidDomain('example')).toBe(false);
            });

            it('should reject http://example.com (has protocol)', () => {
                expect(isValidDomain('http://example.com')).toBe(false);
            });

            it('should reject empty string', () => {
                expect(isValidDomain('')).toBe(false);
            });
        });
    });

    describe('validateURL', () => {
        it('should return null for valid URL', () => {
            const ctrl = new FormControl('https://example.com');
            expect(validateURL(ctrl)).toBeNull();
        });

        it('should return error for invalid URL', () => {
            const ctrl = new FormControl('not a url');
            expect(validateURL(ctrl)).toEqual({ url: 'invalid' });
        });

        it('should return null for empty value', () => {
            const ctrl = new FormControl('');
            expect(validateURL(ctrl)).toBeNull();
        });

        it('should return null for null control', () => {
            expect(validateURL(null as any)).toBeNull();
        });
    });

    describe('validateJSONString', () => {
        describe('valid JSON', () => {
            it('should accept valid JSON object', () => {
                const ctrl = new FormControl('{"key": "value"}');
                expect(validateJSONString(ctrl)).toBeNull();
            });

            it('should accept valid JSON array', () => {
                const ctrl = new FormControl('[1, 2, 3]');
                expect(validateJSONString(ctrl)).toBeNull();
            });

            it('should accept valid JSON string', () => {
                const ctrl = new FormControl('"hello"');
                expect(validateJSONString(ctrl)).toBeNull();
            });

            it('should accept valid JSON number', () => {
                const ctrl = new FormControl('123');
                expect(validateJSONString(ctrl)).toBeNull();
            });

            it('should accept valid JSON boolean', () => {
                const ctrl = new FormControl('true');
                expect(validateJSONString(ctrl)).toBeNull();
            });

            it('should accept valid JSON null', () => {
                const ctrl = new FormControl('null');
                expect(validateJSONString(ctrl)).toBeNull();
            });
        });

        describe('invalid JSON', () => {
            it('should reject invalid JSON object', () => {
                const ctrl = new FormControl('{key: "value"}');
                expect(validateJSONString(ctrl)).toEqual({ json: true });
            });

            it('should reject trailing comma', () => {
                const ctrl = new FormControl('{"key": "value",}');
                expect(validateJSONString(ctrl)).toEqual({ json: true });
            });

            it('should reject single quotes', () => {
                const ctrl = new FormControl("{'key': 'value'}");
                expect(validateJSONString(ctrl)).toEqual({ json: true });
            });

            it('should reject plain text', () => {
                const ctrl = new FormControl('hello world');
                expect(validateJSONString(ctrl)).toEqual({ json: true });
            });
        });

        describe('edge cases', () => {
            it('should return null for empty value', () => {
                const ctrl = new FormControl('');
                expect(validateJSONString(ctrl)).toBeNull();
            });

            it('should return null for null control', () => {
                expect(validateJSONString(null as any)).toBeNull();
            });

            it('should return null for control with null value', () => {
                const ctrl = new FormControl(null);
                expect(validateJSONString(ctrl)).toBeNull();
            });
        });
    });
});
