import { configure } from '@placeos/ts-client';
import {
    clearEndpointMocks,
    endpointMocks,
    mockEndpoint,
} from '@placeos/ts-client/mock';
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import {
    querySignageAIProviders,
    removeSignageAIProvider,
    saveSignageAIProvider,
    signageAIUsage,
    testSignageAIProvider,
} from '../../app/admin/signage-ai/signage-ai.fn';

describe('signage-ai.fn', () => {
    beforeAll(() => {
        configure({
            base_url: '',
            auth: { kind: 'none' },
            mock: endpointMocks,
        });
    });

    beforeEach(() => clearEndpointMocks());

    describe('querySignageAIProviders', () => {
        it('gives each row with its number quotas', async () => {
            mockEndpoint('signage_ai_providers.query', () => [
                {
                    id: 'provider-1',
                    name: 'OpenAI',
                    provider: 'OPENAI',
                    quotas: { user_per_day: 60, note: 'text' },
                },
            ]);

            const list = await querySignageAIProviders();

            expect(list).toHaveLength(1);
            expect(list[0].name).toBe('OpenAI');
            expect(list[0].provider).toBe('OPENAI');
            expect(list[0].quotas).toEqual({ user_per_day: 60 });
        });

        it('passes the shared row flag', async () => {
            const handler = vi.fn(() => []);
            mockEndpoint('signage_ai_providers.query', handler);
            await querySignageAIProviders({ include_shared: false });
            expect(handler).toHaveBeenCalledWith({ include_shared: false });
        });
    });

    describe('saveSignageAIProvider', () => {
        it('creates a row that has no id', async () => {
            const create = vi.fn(() => ({ id: 'new', name: 'OpenAI' }));
            mockEndpoint('signage_ai_providers.create', create);

            const saved = await saveSignageAIProvider({ name: 'OpenAI' });

            expect(create).toHaveBeenCalledWith({ body: { name: 'OpenAI' } });
            expect(saved.id).toBe('new');
        });

        it('updates a row that has one, with the id in the path only', async () => {
            const update = vi.fn(() => ({ id: 'p1', name: 'Renamed' }));
            mockEndpoint('signage_ai_providers.update', update);

            await saveSignageAIProvider({ id: 'p1', name: 'Renamed' });

            expect(update).toHaveBeenCalledWith({
                id: 'p1',
                body: { name: 'Renamed' },
            });
        });
    });

    it('removes a row by id', async () => {
        const destroy = vi.fn(() => '');
        mockEndpoint('signage_ai_providers.destroy', destroy);
        await removeSignageAIProvider('p1');
        expect(destroy).toHaveBeenCalledWith({ id: 'p1' });
    });

    it('tests the credentials of a row', async () => {
        mockEndpoint('signage_ai_providers.test', () => ({
            ok: true,
            latency_ms: 12,
        }));
        await expect(testSignageAIProvider('p1')).resolves.toMatchObject({
            ok: true,
            latency_ms: 12,
        });
    });

    it('passes the usage window', async () => {
        const usage = vi.fn(() => []);
        mockEndpoint('signage_ai.usage', usage);
        await signageAIUsage({ from: 100, to: 200 });
        expect(usage).toHaveBeenCalledWith({ from: 100, to: 200 });
    });
});
