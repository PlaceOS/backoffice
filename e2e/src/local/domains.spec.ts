import { APIRequestContext, Page } from '@playwright/test';
import {
    ENGINE_API,
    asList,
    createResource,
    getJson,
    lastWord,
    uniqueName,
    waitForListed,
} from '../../support/api';
import { Cleanup, expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import {
    ApiDomain,
    createDomain,
    createUser,
    fillCodeEditor,
    statusOf,
    uniqueNames,
} from './support/people';

/**
 * Domains on the local backend: user stories US-DOM-* in
 * `user-stories/domains.md`. Each test makes its own domain, so it never
 * changes the seeded domain that the other specs sign in to.
 */

interface OauthApp {
    id: number;
    name: string;
    uid: string;
    scopes: string;
    redirect_uri: string;
    owner_id: string;
}

type AuthKind = 'oauth_auths' | 'saml_auths' | 'ldap_auths';

interface AuthSource {
    id: string;
    name: string;
    authority_id: string;
    [field: string]: unknown;
}

const domainPath = (id: string) => `${ENGINE_API}/domains/${id}`;

const NAME_ID_FORMAT = 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress';

/** The OAuth applications of a domain */
async function appsOf(api: APIRequestContext, domain_id: string) {
    return asList<OauthApp>(
        await getJson(api, `${ENGINE_API}/oauth_apps`, {
            authority_id: domain_id,
        }),
    );
}

/** The auth sources of one kind in a domain */
async function authSourcesOf(
    api: APIRequestContext,
    kind: AuthKind,
    domain_id: string,
) {
    return asList<AuthSource>(
        await getJson(api, `${ENGINE_API}/${kind}`, {
            authority_id: domain_id,
        }),
    );
}

/** Make an OAuth application in a domain */
async function createApp(
    api: APIRequestContext,
    cleanup: Cleanup,
    domain: ApiDomain,
): Promise<OauthApp> {
    const app = await createResource<OauthApp>(
        api,
        `${ENGINE_API}/oauth_apps`,
        {
            name: uniqueName('E2E App'),
            redirect_uri: `https://${domain.domain}/oauth-resp.html`,
            scopes: 'public',
            owner_id: domain.id,
        },
    );
    cleanup.add(`${ENGINE_API}/oauth_apps/${app.id}`);
    return app;
}

/** Make an OAuth auth source in a domain. The API requires these fields */
async function createOauthSource(
    api: APIRequestContext,
    cleanup: Cleanup,
    domain: ApiDomain,
): Promise<AuthSource> {
    const source = await createResource<AuthSource>(
        api,
        `${ENGINE_API}/oauth_auths`,
        {
            name: uniqueName('E2E OAuth'),
            authority_id: domain.id,
            client_id: 'old-client',
            client_secret: 'old-secret',
            site: 'https://sso.e2e.test',
            scope: 'openid',
        },
    );
    cleanup.add(`${ENGINE_API}/oauth_auths/${source.id}`);
    return source;
}

test.describe('Domains on the local backend', () => {
    let domains: FeaturePage;

    test.beforeEach(async ({ page }) => {
        domains = new FeaturePage(page, 'domains');
    });

    test.describe('US-DOM-001: View Domains List', () => {
        test('AC-DOM-001-2: search shows only the matching domain', async ({
            api,
            cleanup,
        }) => {
            const match = await createDomain(api, cleanup);
            const other = await createDomain(api, cleanup);
            // Search comes from Elasticsearch, which indexes a new item late
            for (const domain of [match, other]) {
                await waitForListed(
                    api,
                    `${ENGINE_API}/domains`,
                    lastWord(domain.name),
                    domain.id,
                );
            }
            await domains.goto();

            await domains.search(lastWord(match.name));

            await expect(domains.itemLink(match.name)).toBeVisible();
            await expect(domains.itemLink(other.name)).toHaveCount(0);
        });

        test('AC-DOM-001-3: selecting a domain opens its details', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            await waitForListed(
                api,
                `${ENGINE_API}/domains`,
                lastWord(domain.name),
                domain.id,
            );
            await domains.goto();
            await domains.search(lastWord(domain.name));

            await domains.itemLink(domain.name).click();

            await expect(page).toHaveURL(
                new RegExp(`#/domains/${domain.id}/about`),
            );
            await expect(domains.itemName).toHaveText(domain.name);
        });
    });

    test.describe('US-DOM-002: View Domain Details', () => {
        test('AC-DOM-002-1: shows the domain, description and email domains', async ({
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup, {
                description: 'Second tenant of the e2e suite',
                email_domains: ['tenant.e2e.test'],
            });

            await domains.gotoItem(domain.id);

            await expect(domains.itemDetails).toContainText(domain.domain);
            await expect(domains.tabContent).toContainText(
                'Second tenant of the e2e suite',
            );
            await expect(
                domains.tabContent.getByRole('button', {
                    name: 'tenant.e2e.test',
                }),
            ).toBeVisible();
        });

        test('AC-DOM-002-2/3: tabs count the users and auth sources', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            await createUser(api, cleanup, { authority_id: domain.id });
            await createUser(api, cleanup, { authority_id: domain.id });
            const ldap = await createResource<AuthSource>(
                api,
                `${ENGINE_API}/ldap_auths`,
                {
                    name: uniqueName('E2E LDAP'),
                    authority_id: domain.id,
                    host: 'ldap.e2e.test',
                    port: 636,
                    base: 'dc=e2e,dc=test',
                },
            );
            cleanup.add(`${ENGINE_API}/ldap_auths/${ldap.id}`);

            await domains.gotoItem(domain.id);

            await expect(
                page.locator('item-tablist a[href*="/users"]'),
            ).toHaveText(/Users\s*2/);
            await expect(
                page.locator('item-tablist a[href*="/authentication"]'),
            ).toHaveText(/Authentication\s*1/);
        });
    });

    test.describe('US-DOM-003: Create New Domain', () => {
        test('AC-DOM-003-2: a domain name with spaces is refused', async ({
            page,
        }) => {
            let posted = 0;
            page.on('request', (req) => {
                if (
                    req.method() === 'POST' &&
                    req.url().endsWith(`${ENGINE_API}/domains`)
                )
                    posted++;
            });
            await domains.goto();
            await domains.openAddModal();

            await domains.dialog
                .getByRole('textbox', { name: 'Name*' })
                .fill(uniqueName('E2E Domain'));
            await domains.dialog
                .getByRole('textbox', { name: 'Domain Name' })
                .fill('not a host');
            await domains.saveButton.click();

            await expect(domains.dialog).toBeVisible();
            await expect(
                domains.dialog.getByText('A valid domain is required'),
            ).toBeVisible();
            expect(posted).toBe(0);
        });

        test('AC-DOM-003-4: a domain made in the form is saved', async ({
            api,
            cleanup,
        }) => {
            const { name, slug } = uniqueNames('E2E Domain');
            const host = `${slug}.e2e.test`;
            await domains.goto();

            const id = await domains.createWith(async () => {
                await domains.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill(name);
                await domains.dialog
                    .getByRole('textbox', { name: 'Domain Name' })
                    .fill(host);
                await domains.dialog
                    .getByRole('textbox', { name: 'Description' })
                    .fill('Made in the form');
            });
            cleanup.add(domainPath(id));

            const saved = await getJson<ApiDomain>(api, domainPath(id));
            expect(saved).toMatchObject({
                name,
                domain: host,
                description: 'Made in the form',
            });
            await waitForListed(
                api,
                `${ENGINE_API}/domains`,
                lastWord(name),
                id,
            );
            await domains.search(lastWord(name));
            await expect(domains.itemLink(name)).toBeVisible();
        });
    });

    test.describe('US-DOM-004: Edit Domain Configuration', () => {
        test('AC-DOM-004-1/3: a changed description is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup, {
                description: 'Old description',
            });
            await domains.gotoItem(domain.id);
            await domains.openEditModal();

            const description = domains.dialog.getByRole('textbox', {
                name: 'Description',
            });
            await expect(description).toHaveValue('Old description');
            await description.fill('New description');
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            await page.reload();
            await domains.waitForItemDetails();
            await expect(domains.tabContent).toContainText('New description');
            const saved = await getJson<ApiDomain>(api, domainPath(domain.id));
            expect(saved.description).toBe('New description');
        });

        test('AC-DOM-003-3/004-2: settings JSON on the about tab is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            await domains.gotoItem(domain.id);

            await fillCodeEditor(
                page,
                domains.tabContent,
                '{ "e2e": { "theme": "dark" } }',
            );
            await domains.tabContent
                .locator('button:has(icon:has-text("save"))')
                .click();

            await expect(
                domains.notification('Successfully updated domain settings'),
            ).toBeVisible();
            const saved = await getJson<ApiDomain>(api, domainPath(domain.id));
            expect(saved.config).toEqual({ e2e: { theme: 'dark' } });
        });
    });

    test.describe('US-DOM-005: Delete Domain', () => {
        test('AC-DOM-005-1/2/3: a domain with users is deleted after a warning', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const user = await createUser(api, cleanup, {
                authority_id: domain.id,
            });
            await domains.gotoItem(domain.id);

            await domains.openDeleteConfirmation();
            await expect(page.locator('confirm-modal')).toContainText(
                'Its users, auth sources and groups are removed',
            );
            await domains.acceptButton.click();

            await expect(page).toHaveURL(/#\/domains\/-/);
            expect(await statusOf(api, domainPath(domain.id))).toBe(404);
            expect(await statusOf(api, `${ENGINE_API}/users/${user.id}`)).toBe(
                404,
            );
        });
    });

    test.describe('US-DOM-006: Manage OAuth Applications', () => {
        test('AC-DOM-006-2/3/4: an application made on the tab is saved with its client ID', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const name = uniqueName('E2E App');
            const redirect_uri = `https://${domain.domain}/oauth-resp.html`;
            await domains.gotoItem(domain.id, 'applications');

            await domains.tabContent
                .getByRole('button', { name: 'New Application' })
                .click();
            await page.getByPlaceholder('Application Name').fill(name);
            await page.getByPlaceholder('Access Scopes').fill('public admin');
            await page
                .getByPlaceholder(
                    'Redirect URI e.g. http://localhost:4200/oauth-resp.html',
                )
                .fill(redirect_uri);
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const [app] = await appsOf(api, domain.id);
            cleanup.add(`${ENGINE_API}/oauth_apps/${app.id}`);
            expect(app).toMatchObject({
                name,
                scopes: 'public admin',
                redirect_uri,
            });
            const row = await domains.tableRow(name);
            await expect(row.nth(2)).toHaveText(app.uid);
        });

        test('AC-DOM-006-1/3: an edited application is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const app = await createApp(api, cleanup, domain);
            await domains.gotoItem(domain.id, 'applications');

            const row = await domains.tableRow(app.name);
            await row.locator('button:has(icon:has-text("edit"))').click();
            await page.getByPlaceholder('Access Scopes').fill('public guest');
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            await expect(row.nth(4)).toContainText('guest');
            const [saved] = await appsOf(api, domain.id);
            expect(saved).toMatchObject({ id: app.id, scopes: 'public guest' });
        });

        test('AC-DOM-006-5: a deleted application is removed', async ({
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const app = await createApp(api, cleanup, domain);
            await domains.gotoItem(domain.id, 'applications');

            const row = await domains.tableRow(app.name);
            await row.locator('button:has(icon:has-text("delete"))').click();
            await domains.acceptButton.click();

            await expect(domains.tabContent).toContainText(
                'No applications for this domain',
            );
            expect(
                await statusOf(api, `${ENGINE_API}/oauth_apps/${app.id}`),
            ).toBe(404);
        });
    });

    test.describe('US-DOM-007: Configure OAuth Authentication', () => {
        test('AC-DOM-007-2/3: an OAuth provider made on the tab is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const name = uniqueName('E2E OAuth');
            await domains.gotoItem(domain.id, 'authentication');

            await domains.tabContent
                .getByRole('button', { name: 'New Auth Method' })
                .click();
            await domains.dialog
                .getByRole('combobox', {
                    name: 'Select authentication source...',
                })
                .click();
            await page.getByRole('option', { name: 'OAuth' }).click();
            await page.getByPlaceholder('Name', { exact: true }).fill(name);
            await page.getByPlaceholder('Client ID').fill('e2e-client');
            await page.getByPlaceholder('Client Secret').fill('e2e-secret');
            await page
                .getByPlaceholder('URL of the SSO provider')
                .fill('https://sso.e2e.test');
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const [source] = await authSourcesOf(api, 'oauth_auths', domain.id);
            cleanup.add(`${ENGINE_API}/oauth_auths/${source.id}`);
            expect(source).toMatchObject({
                name,
                client_id: 'e2e-client',
                client_secret: 'e2e-secret',
                site: 'https://sso.e2e.test',
            });
            await expect(domains.tabContent).toContainText(name);
        });

        test('AC-DOM-007-4: an edited OAuth provider is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const source = await createOauthSource(api, cleanup, domain);
            await domains.gotoItem(domain.id, 'authentication');

            const row = await domains.tableRow(source.name);
            await row.locator('button:has(icon:has-text("edit"))').click();
            const client_id = page.getByPlaceholder('Client ID');
            await expect(client_id).toHaveValue('old-client');
            await client_id.fill('new-client');
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const saved = await getJson<AuthSource>(
                api,
                `${ENGINE_API}/oauth_auths/${source.id}`,
            );
            expect(saved['client_id']).toBe('new-client');
        });

        test('AC-DOM-007-5: a removed OAuth provider is deleted', async ({
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const source = await createOauthSource(api, cleanup, domain);
            await domains.gotoItem(domain.id, 'authentication');

            const row = await domains.tableRow(source.name);
            await row.locator('button:has(icon:has-text("delete"))').click();
            await domains.acceptButton.click();

            await expect(domains.tabContent).not.toContainText(source.name);
            expect(
                await statusOf(api, `${ENGINE_API}/oauth_auths/${source.id}`),
            ).toBe(404);
        });
    });

    test.describe('US-DOM-008: Configure SAML Authentication', () => {
        /** Open the new SAML form and fill the fields the form requires */
        const fillSamlForm = async (
            page: Page,
            domain: ApiDomain,
            name: string,
        ) => {
            await domains.gotoItem(domain.id, 'authentication');
            await domains.tabContent
                .getByRole('button', { name: 'New Auth Method' })
                .click();
            await domains.dialog
                .getByRole('combobox', {
                    name: 'Select authentication source...',
                })
                .click();
            await page.getByRole('option', { name: 'SAML2' }).click();
            await page.getByPlaceholder('Name', { exact: true }).fill(name);
            await page.getByPlaceholder('Issuer').fill('e2e-backoffice');
            await page
                .getByPlaceholder('IdP Target URL')
                .fill('https://idp.e2e.test/sso');
            await page
                .getByPlaceholder('Assertion URL')
                .fill(`https://${domain.domain}/auth/adfs/callback`);
        };

        /** The SAML sources of a domain, each also given to `cleanup` */
        const savedSamlSources = async (
            api: APIRequestContext,
            cleanup: Cleanup,
            domain: ApiDomain,
        ) => {
            const sources = await authSourcesOf(api, 'saml_auths', domain.id);
            for (const { id } of sources) {
                cleanup.add(`${ENGINE_API}/saml_auths/${id}`);
            }
            return sources;
        };

        test('AC-DOM-008-1/3: a SAML provider made on the tab is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const name = uniqueName('E2E SAML');
            await fillSamlForm(page, domain, name);
            await page
                .getByPlaceholder('Name Identifier Format')
                .fill(NAME_ID_FORMAT);

            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const [source] = await savedSamlSources(api, cleanup, domain);
            expect(source).toMatchObject({
                name,
                issuer: 'e2e-backoffice',
                idp_sso_target_url: 'https://idp.e2e.test/sso',
                name_identifier_format: NAME_ID_FORMAT,
            });
        });

        test('AC-DOM-008-3: a SAML provider with only the marked fields is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            // The API gives defaults for the fields that the form leaves empty
            const domain = await createDomain(api, cleanup);
            await fillSamlForm(page, domain, uniqueName('E2E SAML'));

            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const sources = await savedSamlSources(api, cleanup, domain);
            expect(sources).toHaveLength(1);
            expect(sources[0]['name_identifier_format']).toMatch(
                /^urn:oasis:names:tc:SAML:/,
            );
        });

        test('AC-DOM-008-4: SAML attribute mappings are saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            await fillSamlForm(page, domain, uniqueName('E2E SAML'));
            // The second list of the form is the attribute statements
            const mappings = domains.dialog.locator('object-list-field').nth(1);
            await mappings.getByRole('button', { name: 'New item' }).click();
            await mappings
                .getByPlaceholder('name', { exact: true })
                .fill('email');
            await mappings.getByPlaceholder('mappings').fill('mail,email');
            await expect(mappings.getByPlaceholder('mappings')).toHaveValue(
                'mail,email',
            );
            await page
                .getByPlaceholder('Name Identifier Format')
                .fill(NAME_ID_FORMAT);

            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const [source] = await savedSamlSources(api, cleanup, domain);
            expect(source?.['attribute_statements']).toEqual({
                email: ['mail', 'email'],
            });
        });
    });

    test.describe('US-DOM-009: Configure LDAP Authentication', () => {
        test('AC-DOM-009-1/2/3: an LDAP provider with connection and search settings is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const name = uniqueName('E2E LDAP');
            await domains.gotoItem(domain.id, 'authentication');

            await domains.tabContent
                .getByRole('button', { name: 'New Auth Method' })
                .click();
            await domains.dialog
                .getByRole('combobox', {
                    name: 'Select authentication source...',
                })
                .click();
            await page.getByRole('option', { name: 'LDAP' }).click();
            await page.getByPlaceholder('Name', { exact: true }).fill(name);
            await page.getByPlaceholder('Host').fill('ldap.e2e.test');
            await page.getByPlaceholder('Port number').fill('389');
            await page
                .getByPlaceholder('Bind DN')
                .fill('cn=admin,dc=e2e,dc=test');
            await page.getByPlaceholder('Password').fill('e2e-bind-secret');
            await page.getByPlaceholder('Base').fill('dc=e2e,dc=test');
            await page.getByPlaceholder('Filter').fill('(objectClass=person)');
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            const [source] = await authSourcesOf(api, 'ldap_auths', domain.id);
            cleanup.add(`${ENGINE_API}/ldap_auths/${source.id}`);
            expect(source).toMatchObject({
                name,
                host: 'ldap.e2e.test',
                port: 389,
                bind_dn: 'cn=admin,dc=e2e,dc=test',
                base: 'dc=e2e,dc=test',
                filter: '(objectClass=person)',
            });
        });
    });

    test.describe('US-DOM-010: View Domain Users', () => {
        test('AC-DOM-010-1, AC-DOM-012-1: users tab lists the users of the domain with their role', async ({
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const admin = await createUser(api, cleanup, {
                authority_id: domain.id,
                sys_admin: true,
            });
            const basic = await createUser(api, cleanup, {
                authority_id: domain.id,
            });
            const outside = await createUser(api, cleanup);

            await domains.gotoItem(domain.id, 'users');

            const admin_row = domains.tabContent.getByRole('row', {
                name: new RegExp(admin.name),
            });
            await expect(admin_row).toContainText(admin.email);
            await expect(admin_row.locator('code')).toHaveText('Admin');
            const basic_row = domains.tabContent.getByRole('row', {
                name: new RegExp(basic.name),
            });
            await expect(basic_row.locator('code')).toHaveText('Basic');
            await expect(domains.tabContent).not.toContainText(outside.name);
        });
    });
});
