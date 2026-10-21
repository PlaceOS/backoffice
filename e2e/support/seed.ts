/**
 * Idempotent, API-driven seeding of the local stack. Every step is an upsert
 * keyed on a natural identifier, so it is safe to run before every suite.
 *
 * It goes through the API, not SQL: rows written straight into Postgres skip
 * model validation and derived columns (e.g. users are found by
 * `email_digest`), and look right while they behave wrong.
 *
 * To mint a token we need an OAuth app, and to register an app we need a
 * token. So we sign in through the `backoffice` app that `init` always makes
 * (redirect_uri `${BACKEND_URL}/backoffice/oauth-resp.html`).
 */
import { APIRequestContext } from '@playwright/test';
import { apiFor, asList, ENGINE_API, getJson } from './api';
import { clientId, redirectUriFor } from './auth';
import { APP_URL, BACKEND_URL, roleFor } from './env';

interface Authority {
    id: string;
    login_url?: string;
}

/**
 * The authority of this stack. Polls, because /domains is served from
 * Elasticsearch: on a cold stack the row is in Postgres before search-ingest
 * has indexed it.
 */
async function authority(api: APIRequestContext): Promise<Authority> {
    for (let i = 0; i < 45; i++) {
        const [found] = asList<Authority>(
            await getJson(api, `${ENGINE_API}/domains`),
        );
        if (found) return found;
        await new Promise((r) => setTimeout(r, 2000));
    }
    throw new Error(
        `no authority at ${ENGINE_API}/domains after 90s. \`init start\` makes it; ` +
            `check search-ingest: docker compose -p backoffice-e2e logs search-ingest`,
    );
}

/** Rejections that mean "the row is already there" */
function alreadyExists(body: string): boolean {
    return /already (exists|taken)|has already been taken|must be unique|duplicate/i.test(
        body,
    );
}

/**
 * An OAuth app for the dev server's redirect_uri. ts-client uses
 * `Md5(redirect_uri)` as its client_id, and authorize refuses a client_id
 * with no app.
 */
async function ensureOAuthApp(api: APIRequestContext, owner_id: string) {
    const redirect_uri = redirectUriFor(APP_URL);
    const uid = clientId(redirect_uri);
    const apps = asList<{ uid: string }>(
        await getJson(api, `${ENGINE_API}/oauth_apps`, { limit: '500' }),
    );
    if (apps.some((a) => a.uid === uid)) return 'present';
    const res = await api.post(`${ENGINE_API}/oauth_apps`, {
        data: {
            name: 'backoffice (e2e dev server)',
            redirect_uri,
            scopes: 'public',
            owner_id,
            confidential: false,
        },
    });
    const body = await res.text();
    // The list reads from Elasticsearch and can lag a row Postgres has
    if (!res.ok() && !alreadyExists(body)) {
        throw new Error(
            `create oauth_app failed: HTTP ${res.status()} ${body}`,
        );
    }
    return 'created';
}

/**
 * A fresh authority has a relative `/login?continue={{url}}`. ts-client
 * resolves it against the authority's `domain`, a host with no port, so the
 * browser goes to `http://localhost/login` and dead-ends. Make it absolute.
 */
async function ensureAbsoluteLoginUrl(api: APIRequestContext, auth: Authority) {
    if (/^https?:\/\//i.test(auth.login_url ?? '')) return 'ok';
    const res = await api.patch(`${ENGINE_API}/domains/${auth.id}`, {
        data: { login_url: `${BACKEND_URL}/login?continue={{url}}` },
    });
    if (!res.ok()) {
        throw new Error(
            `patch login_url failed: HTTP ${res.status()} ${await res.text()}`,
        );
    }
    return 'patched';
}

/**
 * A non-admin user. Access rules must be checked as a non-admin, because a
 * sys_admin passes every check. An existing user gets the password again, so
 * a changed E2E_STAFF_PASSWORD still signs in.
 */
async function ensureStaffUser(api: APIRequestContext, authority_id: string) {
    const role = roleFor('staff');
    const data = {
        name: 'E2E Staff (non-admin)',
        password: role.password,
        sys_admin: false,
        support: false,
    };
    const users = asList<{ id: string; email: string }>(
        await getJson(api, `${ENGINE_API}/users`, { q: role.email }),
    );
    const user = users.find((u) => u.email === role.email);
    const res = user
        ? await api.patch(`${ENGINE_API}/users/${user.id}`, { data })
        : await api.post(`${ENGINE_API}/users`, {
              data: { ...data, email: role.email, authority_id },
          });
    const body = await res.text();
    if (!res.ok() && !alreadyExists(body)) {
        throw new Error(
            `upsert ${role.email} failed: HTTP ${res.status()} ${body}`,
        );
    }
    return user ? 'updated' : 'created';
}

/** Seed the fixtures the suite needs. Returns a line per step for the log */
export async function seed(): Promise<string[]> {
    const api = await apiFor('admin', `${BACKEND_URL}/backoffice/`);
    try {
        const auth = await authority(api);
        return [
            `oauth app   ${await ensureOAuthApp(api, auth.id)}  ${redirectUriFor(APP_URL)}`,
            `login_url   ${await ensureAbsoluteLoginUrl(api, auth)}`,
            `staff user  ${await ensureStaffUser(api, auth.id)}  ${roleFor('staff').email}`,
        ];
    } finally {
        await api.dispose();
    }
}
