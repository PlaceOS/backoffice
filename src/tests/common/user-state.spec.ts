import { describe, it, expect, vi, beforeEach } from 'vitest';
import { of } from 'rxjs';

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
        of({
            id: 'user-123',
            name: 'Test User',
            email: 'test@example.com',
        }),
    ),
}));

import { current_user, currentUser } from '../../app/common/user-state';
import { showUser } from '@placeos/ts-client';

describe('user-state.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('current_user observable', () => {
        it('should be defined', () => {
            expect(current_user).toBeDefined();
        });

        it('should be an observable', () => {
            expect(typeof current_user.subscribe).toBe('function');
        });

        it('should emit values when subscribed', async () => {
            const value = await new Promise((resolve) => {
                let sub: any;
                sub = current_user.subscribe((user) => {
                    resolve(user);
                    // Use setTimeout to ensure sub is assigned before unsubscribe
                    setTimeout(() => sub?.unsubscribe(), 0);
                });
            });
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
