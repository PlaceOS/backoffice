import {
    signage_ai,
    signage_ai_providers,
    SignageAiProvidersProviderParams,
    type JsonValue,
    type SignageAiJobUsageRow,
    type SignageAiProvidersTestResult,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';

import { toBody } from '../../common/placeos';

export type SignageAIProviderType = 'OPENAI' | 'AZURE_OPENAI' | 'GOOGLE_VERTEX';

/** Data of a provider, as the API sends it */
type ProviderData = Extract<
    Awaited<ReturnType<typeof signage_ai_providers.show>>,
    { ok: true }
>['value']['data'];

export interface SignageAIProvider {
    readonly id: string;
    readonly name: string;
    readonly provider: SignageAIProviderType;
    readonly authority_id: string | null;
    readonly endpoint: string | null;
    readonly location: string | null;
    readonly default_model: string | null;
    readonly allowed_models: readonly string[];
    readonly enabled: boolean;
    readonly is_default: boolean;
    readonly quotas: Readonly<Record<string, number>>;
    readonly created_at: number;
    readonly updated_at: number;
}

export type SignageAIUsageRow = SignageAiJobUsageRow;

export type SignageAITestResult = SignageAiProvidersTestResult;

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
        id: data.id,
        name: data.name,
        // The API document gives the type as any string
        provider: data.provider as SignageAIProviderType,
        authority_id: data.authority_id,
        endpoint: data.endpoint,
        location: data.location,
        default_model: data.default_model,
        allowed_models: data.allowed_models,
        enabled: data.enabled,
        is_default: data.is_default,
        quotas: quotaValues(data.quotas),
        created_at: data.created_at,
        updated_at: data.updated_at,
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
