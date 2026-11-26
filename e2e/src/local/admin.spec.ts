import { APIRequestContext, Page } from '@playwright/test';
import { readFileSync } from 'fs';
import {
    ENGINE_API,
    STAFF_API,
    asList,
    createResource,
    getJson,
    lastWord,
    uniqueName,
    waitForListed,
} from '../../support/api';
import { Cleanup, expect, test } from '../../support/fixtures';
import { AdminPage } from '../pages';
import {
    Domain,
    choose,
    confirm,
    createDomain,
    createUser,
    selectDomain,
    setToggle,
    waitForModal,
} from './support/admin';

/**
 * Admin sections on the local backend. Stories: `user-stories/admin.md`.
 *
 * The stack has no core, build service, source service or upload store, so
 * the cluster, interface, build job, MQTT re-sync, upload and resource import
 * sections have no data. These tests cover the sections that rest-api and
 * staff-api serve alone. Sections that show the data of one domain use a
 * domain that the test makes.
 */

interface Item {
    id: string;
    name: string;
}

interface Zone extends Item {
    parent_id?: string;
}

interface Broker extends Item {
    host: string;
    port: number;
    username?: string;
}

interface Edge extends Item {
    description: string;
    online: boolean;
    api_key_id: string;
}

interface Tenant {
    id: number;
    name: string;
    domain: string;
    platform: string;
    delegated: boolean;
    early_checkin: number;
    booking_limits: Record<string, number>;
}

interface ApiKey extends Item {
    scopes: string[];
    user_id: string;
}

interface Storage {
    id: string;
    storage_type: string;
    bucket_name: string;
    region: string;
    access_key: string;
}

interface Schema extends Item {
    schema: string | Record<string, unknown>;
}

interface Extension {
    url: string;
    conditions: [string, string, unknown][];
}

/** Extensions of a domain, by section and name */
async function domainExtensions(
    api: APIRequestContext,
    domain: Domain,
): Promise<Record<string, Record<string, Extension>>> {
    const saved = await getJson<Domain>(
        api,
        `${ENGINE_API}/domains/${domain.id}`,
    );
    const backoffice = (saved.config['backoffice'] || {}) as {
        extend?: Record<string, Record<string, Extension>>;
    };
    return backoffice.extend || {};
}

/** The rows of a listing whose `name` is `name` */
async function findByName<T extends { name: string }>(
    api: APIRequestContext,
    path: string,
    name: string,
): Promise<T[]> {
    return asList<T>(await getJson(api, path)).filter((_) => _.name === name);
}

/** Tenants of a domain */
async function domainTenants(
    api: APIRequestContext,
    domain: Domain,
): Promise<Tenant[]> {
    return asList<Tenant>(await getJson(api, `${STAFF_API}/tenants`)).filter(
        (_) => _.domain === domain.domain,
    );
}

/** Make a tenant for a domain */
async function createTenant(
    api: APIRequestContext,
    cleanup: Cleanup,
    domain: Domain,
): Promise<Tenant> {
    const tenant = await createResource<Tenant>(api, `${STAFF_API}/tenants`, {
        name: uniqueName('E2E Tenant'),
        domain: domain.domain,
        platform: 'office365',
        delegated: true,
    });
    cleanup.add(`${STAFF_API}/tenants/${tenant.id}`);
    return tenant;
}

/** JSON of a schema, which the API gives as text */
function schemaJson(schema: Schema): unknown {
    return typeof schema.schema === 'string'
        ? JSON.parse(schema.schema)
        : schema.schema;
}

/** Replace the text of the Monaco editor in the open section */
async function setEditorText(page: Page, text: string) {
    const editor = page.locator('settings-form-field .monaco-editor').first();
    await editor.locator('.view-lines').click();
    // The editor holds one line of JSON. Select all does not reach Monaco
    await page.keyboard.press('Home');
    await page.keyboard.press('Shift+End');
    await page.keyboard.press('Delete');
    await page.keyboard.insertText(text);
}

test.describe('Admin on the local backend', () => {
    let admin: AdminPage;

    test.beforeEach(async ({ page }) => {
        admin = new AdminPage(page);
    });

    test.describe('US-ADM-003: View System Information', () => {
        test('AC-ADM-003-1: shows the platform version and the API build', async ({
            api,
        }) => {
            const platform = await getJson<{ version: string }>(
                api,
                `${ENGINE_API}/platform`,
            );
            const [rest_api] = await getJson<
                { service: string; commit: string; version: string }[]
            >(api, `${ENGINE_API}/cluster/versions`);

            await admin.gotoSection('about');

            await expect(admin.section).toContainText(platform.version);
            await expect(admin.section).toContainText(rest_api.service);
            await expect(admin.section).toContainText(
                rest_api.commit.slice(0, 8),
            );
        });
    });

    test.describe('US-ADM-004: View Database Status', () => {
        test('AC-ADM-004-4: the export has each zone followed by its children', async ({
            page,
            api,
            cleanup,
        }) => {
            const make = async (parent_id?: string) => {
                const zone = await createResource<Zone>(
                    api,
                    `${ENGINE_API}/zones`,
                    { name: uniqueName('E2E Tree Zone'), parent_id },
                );
                cleanup.add(`${ENGINE_API}/zones/${zone.id}`);
                return zone;
            };
            const root = await make();
            const child = await make(root.id);
            const grandchild = await make(child.id);
            // The export finds children through search, which can lag
            for (const [parent, zone] of [
                [root, child],
                [child, grandchild],
            ]) {
                await expect
                    .poll(async () =>
                        asList<Zone>(
                            await getJson(api, `${ENGINE_API}/zones`, {
                                parent_id: parent.id,
                            }),
                        ).map((_) => _.id),
                    )
                    .toEqual([zone.id]);
            }
            // The zone picker searches for the root
            await waitForListed(
                api,
                `${ENGINE_API}/zones`,
                lastWord(root.name),
                root.id,
            );

            await admin.gotoSection('database');
            await admin.exportZoneTreeButton.click();
            const search = admin.dialog.locator('input[name="item-search"]');
            await search.fill(root.name);
            await admin.dialog
                .getByRole('button', { name: new RegExp(root.name) })
                .click();
            const download = page.waitForEvent('download');
            await admin.dialog
                .getByRole('button', { name: 'Export Selected' })
                .click();

            const csv = readFileSync(await (await download).path(), 'utf8');
            const rows = csv
                .trim()
                .split('\n')
                .map((line) => line.split(',').slice(0, 2));
            expect(rows).toEqual([
                ['id', 'parent_id'],
                [root.id, ''],
                [child.id, root.id],
                [grandchild.id, child.id],
            ]);
        });

        test('AC-ADM-004-5: an imported tree gets new ids and linked parents', async ({
            page,
            api,
            cleanup,
        }) => {
            const parent_name = uniqueName('E2E Import Parent');
            const child_name = uniqueName('E2E Import Child');
            const csv = [
                'id,parent_id,name',
                `zone-old-parent,,${parent_name}`,
                `zone-old-child,zone-old-parent,${child_name}`,
            ].join('\n');
            // Remove each zone the import makes, also when the test fails
            const made: Zone[] = [];
            page.on('response', async (res) => {
                if (
                    res.request().method() === 'POST' &&
                    res.url().endsWith(`${ENGINE_API}/zones`) &&
                    res.ok()
                ) {
                    const zone = (await res.json()) as Zone;
                    made.push(zone);
                    cleanup.add(`${ENGINE_API}/zones/${zone.id}`);
                }
            });

            await admin.gotoSection('database');
            await admin.zoneTreeImportInput.setInputFiles({
                name: 'tree.csv',
                mimeType: 'text/csv',
                buffer: Buffer.from(csv),
            });
            await expect(page.locator('confirm-modal')).toContainText(
                'Create 2 new zones?',
            );
            await confirm(page);
            await expect(admin.notification('Imported 2 zones.')).toBeVisible();

            await expect.poll(() => made.length).toBe(2);
            const parent = made.find((_) => _.name === parent_name);
            const child = made.find((_) => _.name === child_name);
            expect(parent?.id).toMatch(/^zone-/);
            expect(parent?.id).not.toBe('zone-old-parent');
            const saved = await getJson<Zone>(
                api,
                `${ENGINE_API}/zones/${child?.id}`,
            );
            expect(saved.parent_id).toBe(parent?.id);
        });
    });

    test.describe('US-ADM-006: View Message Brokers', () => {
        test('AC-ADM-006-1: a broker made in the form is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Broker');
            await admin.gotoSection('brokers');

            await page.getByRole('button', { name: 'Add MQTT Broker' }).click();
            await waitForModal(admin.dialog);
            await admin.dialog
                .getByRole('textbox', { name: 'Name*' })
                .fill(name);
            await admin.dialog
                .getByRole('textbox', { name: 'Host*' })
                .fill('mqtt.e2e.example');
            await admin.dialog
                .getByRole('textbox', { name: 'Username *' })
                .fill('placeos');
            await admin.dialog
                .getByRole('textbox', { name: 'Password' })
                .fill('secret');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            const saved = await findByName<Broker>(
                api,
                `${ENGINE_API}/brokers`,
                name,
            );
            for (const broker of saved) {
                cleanup.add(`${ENGINE_API}/brokers/${broker.id}`);
            }
            expect(saved).toEqual([
                expect.objectContaining({
                    host: 'mqtt.e2e.example',
                    username: 'placeos',
                }),
            ]);
            await expect(admin.section).toContainText(name);
        });

        test('an edited broker keeps its new host', async ({
            api,
            cleanup,
        }) => {
            const broker = await createResource<Broker>(
                api,
                `${ENGINE_API}/brokers`,
                {
                    name: uniqueName('E2E Broker'),
                    host: 'old.e2e.example',
                    port: 1883,
                    auth_type: 'user_password',
                    username: 'placeos',
                    password: 'secret',
                },
            );
            cleanup.add(`${ENGINE_API}/brokers/${broker.id}`);

            await admin.gotoSection('brokers');
            const row = await admin.tableRow(broker.name, admin.section);
            await row.getByRole('button', { name: 'Edit MQTT Broker' }).click();
            await waitForModal(admin.dialog);
            await admin.dialog
                .getByRole('textbox', { name: 'Host*' })
                .fill('new.e2e.example');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (
                            await getJson<Broker>(
                                api,
                                `${ENGINE_API}/brokers/${broker.id}`,
                            )
                        ).host,
                )
                .toBe('new.e2e.example');
        });

        test('a removed broker is deleted', async ({ page, api, cleanup }) => {
            const broker = await createResource<Broker>(
                api,
                `${ENGINE_API}/brokers`,
                {
                    name: uniqueName('E2E Broker'),
                    host: 'gone.e2e.example',
                    port: 1883,
                    auth_type: 'no_auth',
                },
            );
            cleanup.add(`${ENGINE_API}/brokers/${broker.id}`);

            await admin.gotoSection('brokers');
            const row = await admin.tableRow(broker.name, admin.section);
            await row
                .getByRole('button', { name: 'Remove MQTT Broker' })
                .click();
            await confirm(page);

            const res = await api.get(`${ENGINE_API}/brokers/${broker.id}`);
            expect(res.status()).toBe(404);
        });
    });

    test.describe('US-ADM-007: Manage Edge Devices', () => {
        test('AC-ADM-007-1, AC-ADM-007-2: a new edge is listed as offline and never seen, with its API key', async ({
            page,
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Edge');
            await admin.gotoSection('edge');

            await page.getByRole('button', { name: 'Add Edge node' }).click();
            await waitForModal(admin.dialog);
            await admin.dialog.locator('#edge-name').fill(name);
            await admin.dialog
                .locator('#edge-description')
                .fill('Made by the e2e suite');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            const saved = await findByName<Edge>(
                api,
                `${ENGINE_API}/edges`,
                name,
            );
            for (const edge of saved) {
                cleanup.add(`${ENGINE_API}/edges/${edge.id}`);
            }
            expect(saved).toEqual([
                expect.objectContaining({
                    description: 'Made by the e2e suite',
                    online: false,
                }),
            ]);
            // The key is shown one time, after the create. It starts with the
            // id of the edge's API key
            await expect(admin.section.locator('code').first()).toHaveText(
                new RegExp(`^${saved[0].api_key_id}\\.\\S+$`),
            );
            const row = await admin.tableRow(saved[0].id, admin.section);
            await expect(row.first()).toContainText('Offline');
            await expect(row.filter({ hasText: 'Never' })).toHaveCount(1);
        });

        test('AC-ADM-007-3: an edited edge keeps its new description', async ({
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Edge');
            await createResource(api, `${ENGINE_API}/edges`, { name });
            const [edge] = await findByName<Edge>(
                api,
                `${ENGINE_API}/edges`,
                name,
            );
            cleanup.add(`${ENGINE_API}/edges/${edge.id}`);

            await admin.gotoSection('edge');
            const row = await admin.tableRow(edge.id, admin.section);
            await row.getByRole('button', { name: 'Edit Edge node' }).click();
            await waitForModal(admin.dialog);
            await admin.dialog
                .locator('#edge-description')
                .fill('New description');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (
                            await getJson<Edge>(
                                api,
                                `${ENGINE_API}/edges/${edge.id}`,
                            )
                        ).description,
                )
                .toBe('New description');
        });

        test('a removed edge is deleted', async ({ page, api, cleanup }) => {
            const name = uniqueName('E2E Edge');
            await createResource(api, `${ENGINE_API}/edges`, { name });
            const [edge] = await findByName<Edge>(
                api,
                `${ENGINE_API}/edges`,
                name,
            );
            cleanup.add(`${ENGINE_API}/edges/${edge.id}`);

            await admin.gotoSection('edge');
            const row = await admin.tableRow(edge.id, admin.section);
            await row.getByRole('button', { name: 'Remove Edge node' }).click();
            await confirm(page);

            const res = await api.get(`${ENGINE_API}/edges/${edge.id}`);
            expect(res.status()).toBe(404);
        });
    });

    test.describe('US-ADM-008: Manage Backoffice Extensions', () => {
        test('AC-ADM-008-2, AC-ADM-008-3, AC-ADM-008-4, AC-ADM-008-5: a new extension is saved on the domain', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            await admin.gotoSection('extensions');
            await selectDomain(page, domain);

            await page.getByRole('button', { name: 'Add Extension' }).click();
            await waitForModal(admin.dialog);
            await choose(
                page,
                admin.dialog.locator('#extension-type'),
                'zones',
            );
            await admin.dialog.locator('#extension-name').fill('Floor Plans');
            await admin.dialog
                .locator('#extension-url')
                .fill('https://maps.e2e.example');
            await admin.dialog
                .getByRole('button', { name: 'Add Condition' })
                .click();
            await admin.dialog
                .locator('input[name="condition-field"]')
                .fill('tags');
            await choose(
                page,
                admin.dialog.getByRole('combobox', { name: 'Operation' }),
                'includes',
            );
            await admin.dialog.locator('input[name="value"]').fill('level');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(() => domainExtensions(api, domain))
                .toEqual({
                    zones: {
                        'Floor Plans': {
                            url: 'https://maps.e2e.example',
                            conditions: [['tags', 'includes', 'level']],
                        },
                    },
                });
            await expect(admin.section).toContainText(
                'https://maps.e2e.example',
            );
        });

        test('AC-ADM-008-6: an edited extension keeps its new URL', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup, {
                backoffice: {
                    extend: {
                        systems: {
                            Dashboard: {
                                url: 'https://old.e2e.example',
                                conditions: [],
                            },
                        },
                    },
                },
            });
            await admin.gotoSection('extensions');
            await selectDomain(page, domain);

            const row = await admin.tableRow('Dashboard', admin.section);
            await row.getByRole('button', { name: 'Edit Extension' }).click();
            await waitForModal(admin.dialog);
            await admin.dialog
                .locator('#extension-url')
                .fill('https://new.e2e.example');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (await domainExtensions(api, domain))['systems']?.[
                            'Dashboard'
                        ]?.url,
                )
                .toBe('https://new.e2e.example');
        });

        test('AC-ADM-008-7: a removed extension is deleted', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup, {
                backoffice: {
                    extend: {
                        systems: {
                            Dashboard: {
                                url: 'https://a.e2e.example',
                                conditions: [],
                            },
                            // An extension with no conditions is also listed
                            Reports: { url: 'https://b.e2e.example' },
                        },
                    },
                },
            });
            await admin.gotoSection('extensions');
            await selectDomain(page, domain);

            const row = await admin.tableRow('Dashboard', admin.section);
            await row.getByRole('button', { name: 'Remove Extension' }).click();
            await confirm(page);

            await expect
                .poll(async () =>
                    Object.keys(
                        (await domainExtensions(api, domain))['systems'] || {},
                    ),
                )
                .toEqual(['Reports']);
        });
    });

    test.describe('US-ADM-009: Manage Tenants', () => {
        test('AC-ADM-009-1, AC-ADM-009-2, AC-ADM-009-3: a new tenant is saved for the selected domain', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const name = uniqueName('E2E Tenant');
            await admin.gotoSection('staff-api');
            await selectDomain(page, domain);

            await page.getByRole('button', { name: 'Add Tenant' }).click();
            await waitForModal(admin.dialog);
            await admin.dialog.locator('#tenant-name').fill(name);
            await choose(
                page,
                admin.dialog.locator('#tenant-platform'),
                'Office365',
            );
            await setToggle(
                admin.dialog.getByRole('checkbox', { name: 'Delegated' }),
                true,
            );
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            const saved = await domainTenants(api, domain);
            for (const tenant of saved) {
                cleanup.add(`${STAFF_API}/tenants/${tenant.id}`);
            }
            expect(saved).toEqual([
                expect.objectContaining({
                    name,
                    platform: 'office365',
                    delegated: true,
                }),
            ]);
            await expect(admin.section).toContainText(name);
        });

        test('AC-ADM-009-6: an early check-in time is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const tenant = await createTenant(api, cleanup, domain);
            await admin.gotoSection('staff-api');
            await selectDomain(page, domain);

            await admin.editTenant(tenant.name);
            await waitForModal(admin.dialog);
            await choose(
                page,
                admin.dialog.locator('#tenant-early-checkin'),
                '2 hours 30 minutes',
            );
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (await domainTenants(api, domain))[0]?.early_checkin,
                )
                .toBe(2.5 * 60 * 60);
        });

        test('AC-ADM-009-4: booking limits are saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const tenant = await createTenant(api, cleanup, domain);
            await admin.gotoSection('staff-api');
            await selectDomain(page, domain);

            const row = await admin.tableRow(tenant.name, admin.section);
            await row
                .getByRole('button', { name: 'Edit Booking Limits' })
                .click();
            const list = admin.dialog.locator('object-list-field');
            await list.getByRole('button', { name: 'New item' }).click();
            const [type, amount] = [
                list.getByPlaceholder('type'),
                list.getByPlaceholder('amount'),
            ];
            await type.fill('desk');
            await amount.fill('2');
            await expect(amount).toHaveValue('2');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (await domainTenants(api, domain))[0]?.booking_limits,
                )
                .toEqual({ desk: 2 });
        });

        test('a removed tenant is deleted', async ({ page, api, cleanup }) => {
            const domain = await createDomain(api, cleanup);
            const tenant = await createTenant(api, cleanup, domain);
            await admin.gotoSection('staff-api');
            await selectDomain(page, domain);

            const row = await admin.tableRow(tenant.name, admin.section);
            await row.getByRole('button', { name: 'Remove Tenant' }).click();
            await confirm(page);

            expect(await domainTenants(api, domain)).toEqual([]);
        });
    });

    test.describe('US-ADM-011: Manage API Keys', () => {
        test('AC-ADM-011-2, AC-ADM-011-3, AC-ADM-011-4, AC-ADM-011-8: a new key for a user is saved and its value shown', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const user = await createUser(api, cleanup, domain);
            const name = uniqueName('E2E Key');
            await admin.gotoSection('api-keys');
            await selectDomain(page, domain);

            await admin.apiKeyAddButton.click();
            await waitForModal(admin.dialog);
            await admin.dialog
                .getByPlaceholder('Name', { exact: true })
                .fill(name);
            const scopes = admin.dialog.locator('#scope');
            await scopes.fill('public');
            await scopes.press('Enter');
            // Users come from search, which can lag
            await expect(async () => {
                await admin.apiKeyUserSearchInput.fill('');
                await admin.apiKeyUserSearchInput.fill(user.name);
                await expect(admin.apiKeyUserOption(user.email)).toBeVisible({
                    timeout: 2_000,
                });
            }).toPass({ timeout: 20_000 });
            await admin.apiKeyUserOption(user.email).click();
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            // The API saves key names in lower case
            const saved = await findByName<ApiKey>(
                api,
                `${ENGINE_API}/api_keys?authority_id=${domain.id}`,
                name.toLowerCase(),
            );
            for (const key of saved) {
                cleanup.add(`${ENGINE_API}/api_keys/${key.id}`);
            }
            expect(saved).toEqual([
                expect.objectContaining({
                    scopes: ['public'],
                    user_id: user.id,
                }),
            ]);
            // The new key value starts with the id of the key
            await expect(admin.section).toContainText(
                new RegExp(`${saved[0].id}\\.\\S+`),
            );
        });

        test('AC-ADM-011-5: the edit form shows the assigned user', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const user = await createUser(api, cleanup, domain);
            const key = await createResource<ApiKey>(
                api,
                `${ENGINE_API}/api_keys`,
                {
                    authority_id: domain.id,
                    name: uniqueName('E2E Key'),
                    scopes: ['public'],
                    user_id: user.id,
                },
            );
            cleanup.add(`${ENGINE_API}/api_keys/${key.id}`);
            await admin.gotoSection('api-keys');
            await selectDomain(page, domain);

            const row = await admin.tableRow(key.name, admin.section);
            await row.getByRole('button', { name: 'Edit' }).click();
            await waitForModal(admin.dialog);

            await expect(admin.apiKeyUserSearchInput).toHaveValue(user.name);
        });

        test('AC-ADM-011-9: a removed key is revoked', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const user = await createUser(api, cleanup, domain);
            const key = await createResource<ApiKey>(
                api,
                `${ENGINE_API}/api_keys`,
                {
                    authority_id: domain.id,
                    name: uniqueName('E2E Key'),
                    scopes: ['public'],
                    user_id: user.id,
                },
            );
            cleanup.add(`${ENGINE_API}/api_keys/${key.id}`);
            await admin.gotoSection('api-keys');
            await selectDomain(page, domain);

            const row = await admin.tableRow(key.name, admin.section);
            await row
                .getByRole('button', { name: 'Remove Application Key' })
                .click();
            await confirm(page);

            const res = await api.get(`${ENGINE_API}/api_keys/${key.id}`);
            expect(res.status()).toBe(404);
        });
    });

    test.describe('US-ADM-012: Configure Upload Storage', () => {
        for (const type of ['Amazon S3', 'Microsoft Azure']) {
            const ac = type === 'Amazon S3' ? 'AC-ADM-012-3' : 'AC-ADM-012-4';
            test(`AC-ADM-012-2, ${ac}: a new ${type} provider is saved for the domain`, async ({
                page,
                api,
                cleanup,
            }) => {
                const domain = await createDomain(api, cleanup);
                await admin.gotoSection('upload-storage');
                await selectDomain(page, domain);

                await page
                    .getByRole('button', { name: 'Add Provider' })
                    .click();
                await waitForModal(admin.dialog);
                await choose(
                    page,
                    admin.dialog.locator('app-select').first(),
                    type,
                );
                await admin.dialog
                    .getByPlaceholder('Bucket Name')
                    .fill('e2e-bucket');
                await admin.dialog.getByPlaceholder('Region').fill('ap-1');
                await admin.dialog.getByPlaceholder('Access Key').fill('key-1');
                await admin.dialog
                    .getByPlaceholder('Access Secret')
                    .fill('secret-1');
                await admin.saveButton.click();
                await expect(admin.dialog).toBeHidden();

                const saved = asList<Storage>(
                    await getJson(api, `${ENGINE_API}/storages`, {
                        auth_id: domain.id,
                    }),
                );
                for (const storage of saved) {
                    cleanup.add(`${ENGINE_API}/storages/${storage.id}`);
                }
                expect(saved).toEqual([
                    expect.objectContaining({
                        storage_type: type === 'Amazon S3' ? 's3' : 'azure',
                        bucket_name: 'e2e-bucket',
                        region: 'ap-1',
                        access_key: 'key-1',
                    }),
                ]);
            });
        }

        test('AC-ADM-012-5: an edited provider keeps its new bucket', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const storage = await createResource<Storage>(
                api,
                `${ENGINE_API}/storages`,
                {
                    authority_id: domain.id,
                    storage_type: 's3',
                    bucket_name: 'old-bucket',
                    region: 'ap-1',
                    access_key: 'key-1',
                    access_secret: 'secret-1',
                },
            );
            cleanup.add(`${ENGINE_API}/storages/${storage.id}`);
            await admin.gotoSection('upload-storage');
            await selectDomain(page, domain);

            const row = await admin.tableRow(domain.name, admin.section);
            await row
                .getByRole('button', { name: 'Edit Storage Provider' })
                .click();
            await waitForModal(admin.dialog);
            await admin.dialog
                .getByPlaceholder('Bucket Name')
                .fill('new-bucket');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (
                            await getJson<Storage>(
                                api,
                                `${ENGINE_API}/storages/${storage.id}`,
                            )
                        ).bucket_name,
                )
                .toBe('new-bucket');
        });

        test('AC-ADM-012-6: a removed provider is deleted', async ({
            page,
            api,
            cleanup,
        }) => {
            const domain = await createDomain(api, cleanup);
            const storage = await createResource<Storage>(
                api,
                `${ENGINE_API}/storages`,
                {
                    authority_id: domain.id,
                    storage_type: 's3',
                    bucket_name: 'gone-bucket',
                    region: 'ap-1',
                    access_key: 'key-1',
                    access_secret: 'secret-1',
                },
            );
            cleanup.add(`${ENGINE_API}/storages/${storage.id}`);
            await admin.gotoSection('upload-storage');
            await selectDomain(page, domain);

            const row = await admin.tableRow(domain.name, admin.section);
            await row
                .getByRole('button', { name: 'Remove Storage Provider' })
                .click();
            await confirm(page);

            const res = await api.get(`${ENGINE_API}/storages/${storage.id}`);
            expect(res.status()).toBe(404);
        });
    });

    test.describe('US-ADM-016: View System Schemas', () => {
        test('AC-ADM-016-1, AC-ADM-016-2: a new schema is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Schema');
            const json = {
                type: 'object',
                properties: { floor: { type: 'integer', minimum: 0 } },
            };
            await admin.gotoSection('schemas');

            await page.getByRole('button', { name: 'Add Schema' }).click();
            await page.locator('#schema-name').fill(name);
            await setEditorText(page, JSON.stringify(json));
            await page
                .getByRole('button', { name: 'Save', exact: true })
                .click();
            await expect(page.locator('#schema-name')).toBeHidden();

            const saved = await findByName<Schema>(
                api,
                `${ENGINE_API}/schema`,
                name,
            );
            for (const schema of saved) {
                cleanup.add(`${ENGINE_API}/schema/${schema.id}`);
            }
            expect(saved.map(schemaJson)).toEqual([json]);
        });

        test('AC-ADM-016-3: an edited schema keeps its new rules', async ({
            page,
            api,
            cleanup,
        }) => {
            const schema = await createResource<Schema>(
                api,
                `${ENGINE_API}/schema`,
                {
                    name: uniqueName('E2E Schema'),
                    schema: { type: 'object' },
                },
            );
            cleanup.add(`${ENGINE_API}/schema/${schema.id}`);
            const json = {
                type: 'object',
                required: ['floor'],
                properties: { floor: { type: 'integer', maximum: 99 } },
            };
            await admin.gotoSection('schemas');

            await choose(
                page,
                admin.section.locator('app-select[name="type"]'),
                schema.name,
            );
            await setEditorText(page, JSON.stringify(json));
            await page
                .getByRole('button', { name: 'Save', exact: true })
                .click();
            await expect(page.locator('#schema-name')).toBeHidden();

            await expect
                .poll(async () =>
                    schemaJson(
                        await getJson<Schema>(
                            api,
                            `${ENGINE_API}/schema/${schema.id}`,
                        ),
                    ),
                )
                .toEqual(json);
        });
    });
});
