import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock general.ts log function
vi.mock('../../app/common/general', () => ({
    log: vi.fn(),
}));

// Mock notifications
vi.mock('../../app/common/notifications', () => ({
    notifyInfo: vi.fn(),
}));

import {
    hasNewVersion,
    setupCache,
    clearCacheCheck,
} from '../../app/common/application';

describe('application.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        // Reset the module state by clearing cache check
        clearCacheCheck();
    });

    afterEach(() => {
        clearCacheCheck();
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
    });
});
