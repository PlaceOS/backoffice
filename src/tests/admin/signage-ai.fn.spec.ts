import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    querySignageAIProviders,
    removeSignageAIProvider,
    saveSignageAIProvider,
    SignageAIProvider,
    signageAIUsage,
    testSignageAIProvider,
} from '../../app/admin/signage-ai/signage-ai.fn';

const client_mock = vi.hoisted(() => ({
    apiEndpoint: vi.fn(() => '/api/engine/v2'),
    del: vi.fn<(url: string) => Promise<unknown>>(() => Promise.resolve({})),
    get: vi.fn<(url: string) => Promise<unknown>>(() => Promise.resolve([])),
    patch: vi.fn<(url: string, body: unknown) => Promise<unknown>>(() =>
        Promise.resolve({}),
    ),
    post: vi.fn<(url: string, body: unknown) => Promise<unknown>>(() =>
        Promise.resolve({}),
    ),
}));

vi.mock('@placeos/ts-client', () => client_mock);

describe('signage-ai.fn', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('SignageAIProvider class', () => {
        it('should create an empty provider', () => {
            const provider = new SignageAIProvider();
            expect(provider).toBeDefined();
        });

        it('should keep the fields it is given', () => {
            const provider = new SignageAIProvider({
                id: 'provider-1',
                name: 'OpenAI',
                provider: 'OPENAI',
                enabled: true,
                is_default: true,
            });
            expect(provider.id).toBe('provider-1');
            expect(provider.name).toBe('OpenAI');
            expect(provider.provider).toBe('OPENAI');
            expect(provider.enabled).toBe(true);
            expect(provider.is_default).toBe(true);
        });

        it('should never carry credentials, which the API does not return', () => {
            const provider = new SignageAIProvider({ id: 'provider-1' });
            expect('credentials' in provider).toBe(false);
        });
    });

    describe('querySignageAIProviders', () => {
        it('should ask for the providers and wrap each row', async () => {
            client_mock.get.mockResolvedValueOnce([
                { id: 'provider-1', name: 'OpenAI' },
            ]);

            const list = await querySignageAIProviders();

            expect(client_mock.get).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/providers',
            );
            expect(list).toHaveLength(1);
            expect(list[0]).toBeInstanceOf(SignageAIProvider);
            expect(list[0].name).toBe('OpenAI');
        });

        it('should pass through the shared row flag', async () => {
            await querySignageAIProviders({ include_shared: false });
            expect(client_mock.get).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/providers?include_shared=false',
            );
        });

        it('should survive an empty answer', async () => {
            client_mock.get.mockResolvedValueOnce(null);
            await expect(querySignageAIProviders()).resolves.toEqual([]);
        });
    });

    describe('saveSignageAIProvider', () => {
        it('should post a row that has no id', async () => {
            client_mock.post.mockResolvedValueOnce({ id: 'new' });

            const saved = await saveSignageAIProvider({ name: 'OpenAI' });

            expect(client_mock.post).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/providers',
                { name: 'OpenAI' },
            );
            expect(saved).toBeInstanceOf(SignageAIProvider);
        });

        it('should patch a row that has one, with the id in the path only', async () => {
            client_mock.patch.mockResolvedValueOnce({ id: 'p1' });

            await saveSignageAIProvider({ id: 'p1', name: 'Renamed' });

            expect(client_mock.patch).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/providers/p1',
                { name: 'Renamed' },
            );
            expect(client_mock.post).not.toHaveBeenCalled();
        });
    });

    describe('removeSignageAIProvider', () => {
        it('should delete by id', async () => {
            await removeSignageAIProvider('p1');
            expect(client_mock.del).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/providers/p1',
            );
        });
    });

    describe('testSignageAIProvider', () => {
        it('should post to the test action for the row', async () => {
            await testSignageAIProvider('p1');
            expect(client_mock.post).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/providers/p1/test',
                {},
            );
        });
    });

    describe('signageAIUsage', () => {
        it('should ask for usage with no window by default', async () => {
            await signageAIUsage();
            expect(client_mock.get).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/usage',
            );
        });

        it('should pass a window through as query parameters', async () => {
            await signageAIUsage({ from: 100, to: 200 });
            expect(client_mock.get).toHaveBeenCalledWith(
                '/api/engine/v2/signage/ai/usage?from=100&to=200',
            );
        });
    });
});
