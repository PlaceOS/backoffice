/**
 * Backend helpers. Specs make and remove their own data through these, and
 * check results against the API, not only the page.
 */
import { APIRequestContext, request as pw_request } from '@playwright/test';
import { mintToken } from './auth';
import { APP_URL, BACKEND_URL, RoleName, roleFor } from './env';

export const ENGINE_API = '/api/engine/v2';
export const STAFF_API = '/api/staff/v1';

/** The rows of a listing, which is a bare array or `{ results }` */
export function asList<T>(body: unknown): T[] {
    if (Array.isArray(body)) return body as T[];
    return (body as { results?: T[] } | null)?.results ?? [];
}

/** GET a JSON body, or throw with the status and body */
export async function getJson<T = unknown>(
    api: APIRequestContext,
    path: string,
    params?: Record<string, string>,
): Promise<T> {
    const res = await api.get(path, { params });
    if (!res.ok()) {
        throw new Error(
            `GET ${path} failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return res.json() as Promise<T>;
}

/** An API context with a bearer for a role, for the app at `app_url` */
export async function apiFor(
    role: RoleName,
    app_url = APP_URL,
): Promise<APIRequestContext> {
    const { email, password } = roleFor(role);
    const { access_token } = await mintToken(
        BACKEND_URL,
        app_url,
        email,
        password,
    );
    return pw_request.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${access_token}` },
    });
}

/** A name no other spec or run uses */
export function uniqueName(prefix: string): string {
    return `${prefix} ${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
