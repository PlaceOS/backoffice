import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HttpErrorResponse } from '@angular/common/http';

// Mock @sentry/browser
vi.mock('@sentry/browser', () => ({
    captureException: vi.fn(),
}));

import { SentryService } from '../../app/common/sentry.service';
import * as Sentry from '@sentry/browser';

describe('SentryService', () => {
    let service: SentryService;

    beforeEach(() => {
        service = new SentryService();
        vi.clearAllMocks();
    });

    describe('extractError', () => {
        describe('null and undefined handling', () => {
            it('should return null for null error', () => {
                expect(service.extractError(null)).toBeNull();
            });

            it('should return null for undefined error', () => {
                expect(service.extractError(undefined)).toBeNull();
            });
        });

        describe('string errors', () => {
            it('should return string error as-is', () => {
                const error = 'Something went wrong';
                expect(service.extractError(error)).toBe('Something went wrong');
            });

            it('should handle empty string', () => {
                expect(service.extractError('')).toBe('');
            });
        });

        describe('Error objects', () => {
            it('should return Error object as-is', () => {
                const error = new Error('Test error');
                expect(service.extractError(error)).toBe(error);
            });

            it('should return TypeError as-is', () => {
                const error = new TypeError('Type mismatch');
                expect(service.extractError(error)).toBe(error);
            });

            it('should return RangeError as-is', () => {
                const error = new RangeError('Out of range');
                expect(service.extractError(error)).toBe(error);
            });
        });

        describe('zone.js wrapped errors', () => {
            it('should unwrap ngOriginalError', () => {
                const original_error = new Error('Original error');
                const wrapped_error = {
                    ngOriginalError: original_error,
                };
                expect(service.extractError(wrapped_error)).toBe(original_error);
            });

            it('should handle ngOriginalError that is a string', () => {
                const wrapped_error = {
                    ngOriginalError: 'Original string error',
                };
                expect(service.extractError(wrapped_error)).toBe(
                    'Original string error',
                );
            });

            it('should only unwrap one level of ngOriginalError', () => {
                const original_error = new Error('Deep error');
                const wrapped_error = {
                    ngOriginalError: {
                        ngOriginalError: original_error,
                    },
                };
                // Only unwraps one level - the inner object is not a string/Error/HttpErrorResponse
                // so it returns null
                expect(service.extractError(wrapped_error)).toBeNull();
            });
        });

        describe('HttpErrorResponse handling', () => {
            it('should extract Error from HttpErrorResponse.error', () => {
                const inner_error = new Error('Inner error');
                const http_error = new HttpErrorResponse({
                    error: inner_error,
                    status: 500,
                });
                expect(service.extractError(http_error)).toBe(inner_error);
            });

            it('should extract message from ErrorEvent', () => {
                const error_event = new ErrorEvent('error', {
                    message: 'Event error message',
                });
                const http_error = new HttpErrorResponse({
                    error: error_event,
                    status: 500,
                });
                expect(service.extractError(http_error)).toBe(
                    'Event error message',
                );
            });

            it('should format string error with status code', () => {
                const http_error = new HttpErrorResponse({
                    error: 'Bad Request',
                    status: 400,
                });
                expect(service.extractError(http_error)).toBe(
                    'Server returned code 400 with body "Bad Request"',
                );
            });

            it('should format error with status 500', () => {
                const http_error = new HttpErrorResponse({
                    error: 'Internal Server Error',
                    status: 500,
                });
                expect(service.extractError(http_error)).toBe(
                    'Server returned code 500 with body "Internal Server Error"',
                );
            });

            it('should fallback to message for object error', () => {
                const http_error = new HttpErrorResponse({
                    error: { code: 'ERR_001', details: 'Something failed' },
                    status: 422,
                    statusText: 'Unprocessable Entity',
                    url: 'https://api.example.com/endpoint',
                });
                // Should fallback to the HttpErrorResponse's message property
                expect(service.extractError(http_error)).toContain('422');
            });

            it('should handle HttpErrorResponse with null error', () => {
                const http_error = new HttpErrorResponse({
                    error: null,
                    status: 404,
                    statusText: 'Not Found',
                    url: 'https://api.example.com/resource',
                });
                // Fallback to message
                expect(service.extractError(http_error)).toContain('404');
            });

            it('should handle HttpErrorResponse with empty string error', () => {
                const http_error = new HttpErrorResponse({
                    error: '',
                    status: 204,
                });
                // Empty string is falsy, so it falls back to message
                // HttpErrorResponse message includes parsing error for empty response
                expect(service.extractError(http_error)).toContain(
                    'parsing',
                );
            });
        });

        describe('unknown error types', () => {
            it('should return null for plain object without ngOriginalError', () => {
                const error = { code: 'ERR_001', message: 'Unknown error' };
                expect(service.extractError(error)).toBeNull();
            });

            it('should return null for array', () => {
                const error = ['error1', 'error2'];
                expect(service.extractError(error)).toBeNull();
            });

            it('should return null for number', () => {
                const error = 404;
                expect(service.extractError(error)).toBeNull();
            });

            it('should return null for boolean', () => {
                expect(service.extractError(true)).toBeNull();
                expect(service.extractError(false)).toBeNull();
            });
        });
    });

    describe('handleError', () => {
        it('should capture exception with Sentry', () => {
            const error = new Error('Test error');
            service.handleError(error);
            expect(Sentry.captureException).toHaveBeenCalledWith(error);
        });

        it('should capture string error with Sentry', () => {
            const error = 'String error message';
            service.handleError(error);
            expect(Sentry.captureException).toHaveBeenCalledWith(error);
        });

        it('should use fallback message for null error', () => {
            service.handleError(null);
            expect(Sentry.captureException).toHaveBeenCalledWith(
                'Handled unknown error',
            );
        });

        it('should use fallback message for undefined error', () => {
            service.handleError(undefined);
            expect(Sentry.captureException).toHaveBeenCalledWith(
                'Handled unknown error',
            );
        });

        it('should unwrap and capture ngOriginalError', () => {
            const original = new Error('Original');
            const wrapped = { ngOriginalError: original };
            service.handleError(wrapped);
            expect(Sentry.captureException).toHaveBeenCalledWith(original);
        });

        it('should extract and capture HttpErrorResponse', () => {
            const http_error = new HttpErrorResponse({
                error: 'Server Error',
                status: 500,
            });
            service.handleError(http_error);
            expect(Sentry.captureException).toHaveBeenCalledWith(
                'Server returned code 500 with body "Server Error"',
            );
        });
    });
});
