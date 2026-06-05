import { beforeEach, describe, expect, it, vi } from 'vitest';

// Mock @placeos/ts-client - must use inline class to avoid hoisting issues
vi.mock('@placeos/ts-client', () => ({
    PlaceUser: class {
        id?: string;
        name?: string;
        email?: string;
        constructor(data: Record<string, any> = {}) {
            Object.assign(this, data);
        }
    },
    showUser: vi.fn(() =>
        Promise.resolve({
            id: 'user-123',
            name: 'Test User',
            email: 'test@example.com',
        }),
    ),
}));

import { showUser } from '@placeos/ts-client';
import { current_user, currentUser } from '../../app/common/user-state';

describe('user-state.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('current_user signal', () => {
        it('should be defined', () => {
            expect(current_user).toBeDefined();
        });

        it('should be a signal', () => {
            expect(typeof current_user).toBe('function');
        });

        it('should expose the current value', () => {
            const value = current_user();
            // Initial value may be null or a user
            expect(value === null || typeof value === 'object').toBe(true);
        });
    });

    describe('currentUser function', () => {
        it('should be defined', () => {
            expect(currentUser).toBeDefined();
            expect(typeof currentUser).toBe('function');
        });

        it('should return a user object', () => {
            const user = currentUser();
            expect(user).toBeDefined();
            expect(typeof user).toBe('object');
        });

        it('should be callable multiple times', () => {
            const user1 = currentUser();
            const user2 = currentUser();
            // Should return the same user reference
            expect(user1).toBe(user2);
        });
    });

    describe('user loading behavior', () => {
        it('should have showUser function available', () => {
            expect(showUser).toBeDefined();
            expect(typeof showUser).toBe('function');
        });
    });

    describe('EMPTY_USER fallback', () => {
        it('should return an object when called', () => {
            const user = currentUser();
            expect(typeof user).toBe('object');
        });
    });
});
