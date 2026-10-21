/**
 * Headless sign-in for the e2e suite.
 *
 * Replays the OAuth2 authorization-code + PKCE flow that @placeos/ts-client
 * runs in the browser, then writes the result as a Playwright storageState, so
 * the SPA starts signed in without driving the login form.
 *
 * ts-client keeps its bearer in `localStorage[${cid}_access_token]` and
 * `_expires_at`, where `cid = Md5(redirect_uri)`. The `_expires_at` we write
 * must be in the future, or ts-client starts a new sign-in mid-test.
 */
import { request as pw_request } from '@playwright/test';
import { createHash, randomBytes } from 'crypto';

/** client_id as ts-client computes it: Md5(redirect_uri) */
export function clientId(redirect_uri: string): string {
    return createHash('md5').update(redirect_uri).digest('hex');
}

/**
 * The redirect_uri the app gives ts-client (`setupPlace` in
 * src/app/common/placeos.ts): `${origin}${route}/oauth-resp.html`. On a dev
 * server the app is at the root; a stack-served build is at `/backoffice/`.
 */
export function redirectUriFor(app_url: string): string {
    const { origin, pathname } = new URL(app_url);
    return `${origin}${pathname.replace(/\/$/, '')}/oauth-resp.html`;
}

function base64url(buf: Buffer): string {
    return buf
        .toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

export interface MintResult {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    client_id: string;
}

/**
 * Sign in as a local user and get a bearer for the app at `app_url`:
 *   POST /auth/signin           -> 202 and a session cookie
 *   GET  /auth/oauth/authorize  -> 302 with ?code= (not followed)
 *   POST /auth/oauth/token      -> access_token
 */
export async function mintToken(
    backend_url: string,
    app_url: string,
    email: string,
    password: string,
): Promise<MintResult> {
    const redirect_uri = redirectUriFor(app_url);
    const client_id = clientId(redirect_uri);
    const verifier = base64url(randomBytes(32));
    const challenge = base64url(createHash('sha256').update(verifier).digest());

    // Its own cookie jar holds the session between the three requests
    const ctx = await pw_request.newContext({
        baseURL: backend_url,
        ignoreHTTPSErrors: true, // the stack uses a self-signed cert
    });
    try {
        const signin = await ctx.post('/auth/signin', {
            data: { email, password },
        });
        if (signin.status() !== 202) {
            throw new Error(
                `signin failed for ${email}: HTTP ${signin.status()}. ` +
                    `Is the stack up (e2e/stack/up.sh)?`,
            );
        }

        const authorize = await ctx.get('/auth/oauth/authorize', {
            params: {
                response_type: 'code',
                client_id,
                redirect_uri,
                scope: 'public',
                state: 'e2e',
                code_challenge: challenge,
                code_challenge_method: 'S256',
            },
            maxRedirects: 0,
        });
        const location = authorize.headers()['location'] ?? '';
        const code = new URL(location, backend_url).searchParams.get('code');
        if (!code) {
            throw new Error(
                `authorize gave no code for ${email}: HTTP ${authorize.status()} ` +
                    `location=${location}. Is there an OAuth app for ${redirect_uri}? ` +
                    `seed.ts registers it.`,
            );
        }

        const token = await ctx.post('/auth/oauth/token', {
            form: {
                grant_type: 'authorization_code',
                client_id,
                redirect_uri,
                code,
                code_verifier: verifier,
            },
        });
        if (!token.ok()) {
            throw new Error(
                `token exchange failed for ${email}: HTTP ${token.status()} ${await token.text()}`,
            );
        }
        const body = (await token.json()) as Omit<MintResult, 'client_id'>;
        return { ...body, expires_in: body.expires_in ?? 3600, client_id };
    } finally {
        await ctx.dispose();
    }
}

/** A storageState that holds ts-client's token keys on the app origin */
export function buildStorageState(mint: MintResult, app_url: string) {
    const local_storage = [
        { name: `${mint.client_id}_access_token`, value: mint.access_token },
        {
            name: `${mint.client_id}_expires_at`,
            value: String(Date.now() + mint.expires_in * 1000),
        },
    ];
    if (mint.refresh_token) {
        local_storage.push({
            name: `${mint.client_id}_refresh_token`,
            value: mint.refresh_token,
        });
    }
    return {
        cookies: [],
        origins: [
            { origin: new URL(app_url).origin, localStorage: local_storage },
        ],
    };
}
