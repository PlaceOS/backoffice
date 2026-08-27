import { apiEndpoint, del, get, patch, post } from '@placeos/ts-client';

const PATH = () => `${apiEndpoint()}/signage/ai`;

export class SignageAIProvider {
    public readonly id: string;
    public readonly name: string;
    /** OPENAI | AZURE_OPENAI | GOOGLE_VERTEX */
    public readonly provider: string;
    public readonly authority_id: string | null;
    public readonly endpoint: string | null;
    public readonly location: string | null;
    public readonly default_model: string | null;
    public readonly allowed_models: string[];
    public readonly enabled: boolean;
    public readonly is_default: boolean;
    public readonly quotas: Record<string, number>;
    public readonly created_at: number;
    public readonly updated_at: number;

    constructor(item: Partial<SignageAIProvider> = {}) {
        Object.assign(this, item);
    }
}

export interface SignageAIUsageRow {
    provider: string;
    model: string;
    jobs: number;
    candidates: number;
    images_produced: number;
    cost_units: number;
}

export interface SignageAITestResult {
    ok: boolean;
    latency_ms: number;
    model?: string;
    error?: string;
    kind?: string;
}

function query(params: Record<string, any>) {
    const pairs = Object.entries(params)
        .filter(([, value]) => value !== undefined && value !== null && value !== '')
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
    return pairs.length ? `?${pairs.join('&')}` : '';
}

export async function querySignageAIProviders(params: {
    authority_id?: string;
} = {}): Promise<SignageAIProvider[]> {
    const list = (await get(
        `${PATH()}/providers${query(params)}`,
    )) as unknown as Partial<SignageAIProvider>[];
    return (list || []).map((item) => new SignageAIProvider(item));
}

export async function saveSignageAIProvider(
    item: Partial<SignageAIProvider> & { credentials?: Record<string, any> },
): Promise<SignageAIProvider> {
    const { id, ...body } = item;
    const result = id
        ? await patch(`${PATH()}/providers/${encodeURIComponent(id)}`, body)
        : await post(`${PATH()}/providers`, body);
    return new SignageAIProvider(result as any);
}

export function removeSignageAIProvider(id: string) {
    return del(`${PATH()}/providers/${encodeURIComponent(id)}`);
}

/** Prove the credentials work: one small image, discarded. */
export function testSignageAIProvider(id: string) {
    return post(
        `${PATH()}/providers/${encodeURIComponent(id)}/test`,
        {},
    ) as unknown as Promise<SignageAITestResult>;
}

export function signageAIUsage(params: { from?: number; to?: number } = {}) {
    return get(
        `${PATH()}/usage${query(params)}`,
    ) as unknown as Promise<SignageAIUsageRow[]>;
}
