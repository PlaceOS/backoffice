import {
    signage_ai,
    signage_ai_providers,
    SignageAiProvidersProviderParams,
    type JsonValue,
    type SignageAiJobUsageRow,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';

import { toBody } from '../../common/placeos';

export type SignageAIProviderType = 'OPENAI' | 'AZURE_OPENAI' | 'GOOGLE_VERTEX';

/** Data of a provider, as the API sends it */
type ProviderData = Extract<
    Awaited<ReturnType<typeof signage_ai_providers.show>>,
    { ok: true }
>['value']['data'];

/** A provider with its type and its number quotas */
export type SignageAIProvider = Omit<ProviderData, 'provider' | 'quotas'> & {
    readonly provider: SignageAIProviderType;
    readonly quotas: Readonly<Record<string, number>>;
};

export type SignageAIUsageRow = SignageAiJobUsageRow;

/** The number fields of the quotas JSON */
function quotaValues(value: JsonValue | null): Record<string, number> {
    const quotas: Record<string, number> = {};
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return quotas;
    }
    for (const [key, field] of Object.entries(value)) {
        if (typeof field === 'number') quotas[key] = field;
    }
    return quotas;
}

/** A provider for the app, from the data of the API */
export function signageAIProvider(data: ProviderData): SignageAIProvider {
    return {
        ...data,
        // The API document gives the type as any string
        provider: data.provider as SignageAIProviderType,
        quotas: quotaValues(data.quotas),
    };
}

export async function querySignageAIProviders(
    params: { include_shared?: boolean } = {},
): Promise<SignageAIProvider[]> {
    const page = await signage_ai_providers.query(params).then(orThrowPage);
    return page.data.map(signageAIProvider);
}

export async function saveSignageAIProvider(
    item: Partial<Omit<SignageAIProvider, 'quotas'>> & {
        quotas?: Record<string, number>;
        credentials?: Record<string, unknown>;
    },
): Promise<SignageAIProvider> {
    const { id, ...data } = item;
    const body = toBody(SignageAiProvidersProviderParams, data);
    const result = await (
        id
            ? signage_ai_providers.update({ id, body })
            : signage_ai_providers.create({ body })
    ).then(orThrow);
    return signageAIProvider(result);
}

export function removeSignageAIProvider(id: string) {
    return signage_ai_providers.destroy({ id }).then(orThrow);
}

/** Prove the credentials work: one small image, discarded. */
export function testSignageAIProvider(id: string) {
    return signage_ai_providers.test({ id }).then(orThrow);
}

export async function signageAIUsage(
    params: { from?: number; to?: number } = {},
): Promise<SignageAIUsageRow[]> {
    return [...(await signage_ai.usage(params).then(orThrow))];
}
