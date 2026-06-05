import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UserPipe } from '../../../app/ui/pipes/user.pipe';

// Mock the @placeos/ts-client module
vi.mock('@placeos/ts-client', () => ({
    showUser: vi.fn((id: string) =>
        Promise.resolve({
            id,
            name: `User ${id}`,
            email: `${id}@example.com`,
            card_number: `card-${id}`,
        }),
    ),
    PlaceUser: class {},
}));

describe('UserPipe', () => {
    let pipe: UserPipe;

    beforeEach(() => {
        pipe = new UserPipe();
        vi.clearAllMocks();
    });

    describe('transform', () => {
        it('should return empty object for null id', async () => {
            const result = await pipe.transform(null as any);
            expect(result).toEqual({});
        });

        it('should return empty object for undefined id', async () => {
            const result = await pipe.transform(undefined as any);
            expect(result).toEqual({});
        });

        it('should return empty object for empty string id', async () => {
            const result = await pipe.transform('');
            expect(result).toEqual({});
        });

        it('should fetch user by id', async () => {
            const result = await pipe.transform('user-123');
            expect(result).toBeTruthy();
            expect(result.id).toBe('user-123');
        });

        it('should cache user after first fetch', async () => {
            const { showUser } = await import('@placeos/ts-client');

            // First call
            await pipe.transform('user-456');
            const first_call_count = (showUser as any).mock.calls.length;

            // Second call with same id should use cache
            await pipe.transform('user-456');
            const second_call_count = (showUser as any).mock.calls.length;

            // showUser should only be called once due to caching
            expect(second_call_count).toBe(first_call_count);
        });

        it('should return user with expected properties', async () => {
            const result = await pipe.transform('test-user');
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('name');
            expect(result).toHaveProperty('email');
        });
    });
});
