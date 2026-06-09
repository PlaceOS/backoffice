import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock general.ts log function
vi.mock('../../app/common/general', () => ({
    log: vi.fn(),
}));

import {
    clearCacheCheck,
    hasNewVersion,
    isChunkLoadError,
    reloadApplicationOnChunkLoadError,
    setupCache,
    updateAvailable,
} from '../../app/common/application';

describe('application.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        updateAvailable.set(false);
        // Reset the module state by clearing cache check
        clearCacheCheck();
    });

    afterEach(() => {
        clearCacheCheck();
        sessionStorage.clear();
    });

    describe('hasNewVersion', () => {
        it('should return a boolean', () => {
            expect(typeof hasNewVersion()).toBe('boolean');
        });

        it('should be callable multiple times', () => {
            hasNewVersion();
            hasNewVersion();
            hasNewVersion();
            // Should not throw
        });
    });

    describe('clearCacheCheck', () => {
        it('should not throw when no timer exists', () => {
            expect(() => clearCacheCheck()).not.toThrow();
        });

        it('should be callable multiple times', () => {
            clearCacheCheck();
            clearCacheCheck();
            clearCacheCheck();
            // Should not throw
        });
    });

    describe('setupCache', () => {
        afterEach(() => {
            vi.useRealTimers();
        });

        it('should not setup interval if cache is not enabled', () => {
            const mock_cache = {
                isEnabled: false,
                checkForUpdate: vi.fn().mockResolvedValue(false),
            };

            // Should not throw
            expect(() => setupCache(mock_cache as any)).not.toThrow();
        });

        it('should accept custom interval parameter', () => {
            const mock_cache = {
                isEnabled: true,
                checkForUpdate: vi.fn().mockResolvedValue(false),
                activateUpdate: vi.fn().mockResolvedValue(false),
            };

            // Should not throw
            expect(() => setupCache(mock_cache as any, 1000)).not.toThrow();
            clearCacheCheck();
        });

        it('should accept default interval', () => {
            const mock_cache = {
                isEnabled: true,
                checkForUpdate: vi.fn().mockResolvedValue(false),
                activateUpdate: vi.fn().mockResolvedValue(false),
            };

            // Should not throw with default interval
            expect(() => setupCache(mock_cache as any)).not.toThrow();
            clearCacheCheck();
        });

        it('should clear interval on clearCacheCheck', () => {
            const mock_cache = {
                isEnabled: true,
                checkForUpdate: vi.fn().mockResolvedValue(false),
                activateUpdate: vi.fn().mockResolvedValue(false),
            };

            setupCache(mock_cache as any, 1000);
            expect(() => clearCacheCheck()).not.toThrow();
        });

        it('should be callable with different cache objects', () => {
            const mock_cache1 = {
                isEnabled: true,
                checkForUpdate: vi.fn().mockResolvedValue(false),
                activateUpdate: vi.fn().mockResolvedValue(false),
            };

            const mock_cache2 = {
                isEnabled: false,
                checkForUpdate: vi.fn(),
            };

            setupCache(mock_cache1 as any, 1000);
            clearCacheCheck();
            setupCache(mock_cache2 as any, 2000);
            clearCacheCheck();
            // Should not throw
        });

        it('should flag the update card without activating the service worker update', async () => {
            vi.useFakeTimers();
            const mock_cache = {
                isEnabled: true,
                checkForUpdate: vi.fn().mockResolvedValue(true),
                activateUpdate: vi.fn().mockResolvedValue(true),
            };

            setupCache(mock_cache as any, 1000);
            await vi.advanceTimersByTimeAsync(1000);

            expect(mock_cache.checkForUpdate).toHaveBeenCalled();
            expect(mock_cache.activateUpdate).not.toHaveBeenCalled();
            expect(updateAvailable()).toBe(true);
        });
    });

    describe('isChunkLoadError', () => {
        it('should detect webpack chunk load errors', () => {
            const error = new Error('Loading chunk 123 failed.');
            error.name = 'ChunkLoadError';

            expect(isChunkLoadError(error)).toBe(true);
        });

        it('should detect dynamic import failures', () => {
            expect(
                isChunkLoadError(
                    'Failed to fetch dynamically imported module: /chunk.js',
                ),
            ).toBe(true);
            expect(isChunkLoadError('Importing a module script failed.')).toBe(
                true,
            );
        });

        it('should detect Angular-wrapped chunk load errors', () => {
            expect(
                isChunkLoadError({
                    ngOriginalError: {
                        cause: new Error(
                            'error loading dynamically imported module',
                        ),
                    },
                }),
            ).toBe(true);
        });

        it('should ignore non-chunk errors', () => {
            expect(
                isChunkLoadError(new Error('Route guard denied access')),
            ).toBe(false);
        });
    });

    describe('reloadApplicationOnChunkLoadError', () => {
        it('should reload the application for chunk load failures', () => {
            const reload = vi.fn();

            expect(
                reloadApplicationOnChunkLoadError(
                    new Error('Failed to fetch dynamically imported module'),
                    reload,
                ),
            ).toBe(true);

            expect(reload).toHaveBeenCalledTimes(1);
        });

        it('should not reload for non-chunk navigation failures', () => {
            const reload = vi.fn();

            expect(
                reloadApplicationOnChunkLoadError(
                    new Error('Resolver failed'),
                    reload,
                ),
            ).toBe(false);

            expect(reload).not.toHaveBeenCalled();
        });

        it('should not repeatedly reload for the same chunk load failure', () => {
            const reload = vi.fn();
            const error = new Error(
                'Failed to fetch dynamically imported module: /chunk.js',
            );

            expect(reloadApplicationOnChunkLoadError(error, reload)).toBe(true);
            expect(reloadApplicationOnChunkLoadError(error, reload)).toBe(true);

            expect(reload).toHaveBeenCalledTimes(1);
        });
    });
});
