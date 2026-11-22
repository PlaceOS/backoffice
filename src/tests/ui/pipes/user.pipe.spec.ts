import { users } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { UserPipe } from '../../../app/ui/pipes/user.pipe';

vi.mock('@placeos/ts-client', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@placeos/ts-client')>();
    const { mockReply } = await import('@placeos/ts-client/compat');
    return {
        ...actual,
        users: {
            ...actual.users,
            show: vi.fn(async ({ id }: { id: string }) =>
                mockReply({
                    id,
                    name: `User ${id}`,
                    email: `${id}@example.com`,
                    card_number: `card-${id}`,
                }),
            ),
        },
    };
});

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
            const showUser = users.show;

            // First call
            await pipe.transform('user-456');
            const first_call_count = vi.mocked(showUser).mock.calls.length;

            // Second call with same id should use cache
            await pipe.transform('user-456');
            const second_call_count = vi.mocked(showUser).mock.calls.length;

            // showUser should only be called once due to caching
            expect(second_call_count).toBe(first_call_count);
        });

        it('should share a request that is in flight', async () => {
            const showUser = users.show;

            await Promise.all([
                pipe.transform('user-789'),
                new UserPipe().transform('user-789'),
            ]);

            expect(showUser).toHaveBeenCalledTimes(1);
        });

        it('should retry a lookup that failed', async () => {
            const showUser = users.show;
            vi.mocked(showUser).mockRejectedValueOnce(new Error('offline'));

            expect(await pipe.transform('user-retry')).toEqual({});
            const result = await pipe.transform('user-retry');

            expect(result.id).toBe('user-retry');
            expect(showUser).toHaveBeenCalledTimes(2);
        });

        it('should return user with expected properties', async () => {
            const result = await pipe.transform('test-user');
            expect(result).toHaveProperty('id');
            expect(result).toHaveProperty('name');
            expect(result).toHaveProperty('email');
        });
    });
});
