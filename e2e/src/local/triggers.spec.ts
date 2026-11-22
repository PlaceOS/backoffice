import { APIRequestContext, Locator, Page } from '@playwright/test';
import {
    ENGINE_API,
    asList,
    createResource,
    getJson,
    uniqueName,
} from '../../support/api';
import { Cleanup, expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import { choose, confirm, setToggle } from './support/admin';

/**
 * Triggers on the local backend. Stories: `user-stories/triggers.md`.
 *
 * The stack has no core, so a trigger never fires and a module has no
 * function list. The tests check what the backoffice saves.
 */

interface StatusVariable {
    mod: string;
    status: string;
    keys: string[];
}

interface Comparison {
    left: StatusVariable | string | number | boolean;
    operator: string;
    right: StatusVariable | string | number | boolean;
}

interface TimeDependent {
    type: string;
    time?: number;
    cron?: string;
    timezone?: string;
}

interface FunctionCall {
    mod: string;
    method: string;
    args: Record<string, unknown>;
}

interface Mailer {
    emails: string[];
    content: string;
}

interface Trigger {
    id: string;
    name: string;
    description?: string;
    enable_webhook?: boolean;
    supported_methods?: string[];
    debounce_period?: number;
    conditions?: {
        comparisons?: Comparison[];
        time_dependents?: TimeDependent[];
    };
    actions?: { functions?: FunctionCall[]; mailers?: Mailer[] };
}

interface TriggerInstance {
    id: string;
    enabled: boolean;
    control_system_id: string;
    zone_id?: string;
}

interface Item {
    id: string;
    name: string;
}

/** Make a trigger on the API, which the test's cleanup removes */
async function createTrigger(
    api: APIRequestContext,
    cleanup: Cleanup,
    data: Partial<Trigger> = {},
): Promise<Trigger> {
    const trigger = await createResource<Trigger>(
        api,
        `${ENGINE_API}/triggers`,
        { name: uniqueName('E2E Trigger'), ...data },
    );
    cleanup.add(`${ENGINE_API}/triggers/${trigger.id}`);
    return trigger;
}

/** Make a system on the API, which the test's cleanup removes */
async function createSystem(
    api: APIRequestContext,
    cleanup: Cleanup,
    zones: string[] = [],
): Promise<Item> {
    const system = await createResource<Item>(api, `${ENGINE_API}/systems`, {
        name: uniqueName('E2E Trigger System'),
        zones,
    });
    cleanup.add(`${ENGINE_API}/systems/${system.id}`);
    return system;
}

/**
 * Make a system with one module, for the status variables of a comparison.
 * Without core the module never starts, but its state has `connected`.
 */
async function createSystemWithModule(
    api: APIRequestContext,
    cleanup: Cleanup,
): Promise<{ system: Item; module_name: string }> {
    const folder = uniqueName('e2e-trg').replace(/\W+/g, '-').toLowerCase();
    const repo = await createResource<Item>(api, `${ENGINE_API}/repositories`, {
        name: uniqueName('E2E Trigger Repo'),
        uri: 'https://github.com/PlaceOS/drivers',
        repo_type: 'driver',
        branch: 'master',
        folder_name: folder,
    });
    cleanup.add(`${ENGINE_API}/repositories/${repo.id}`);
    const module_name = `E2eTrigger${Date.now().toString(36)}`;
    const driver = await createResource<Item>(api, `${ENGINE_API}/drivers`, {
        name: uniqueName('E2E Trigger Driver'),
        role: 99,
        file_name: 'drivers/place/private_helper.cr',
        commit: 'HEAD',
        module_name,
        repository_id: repo.id,
    });
    cleanup.add(`${ENGINE_API}/drivers/${driver.id}`);
    const system = await createSystem(api, cleanup);
    const mod = await createResource<Item>(api, `${ENGINE_API}/modules`, {
        driver_id: driver.id,
        control_system_id: system.id,
    });
    cleanup.add(`${ENGINE_API}/modules/${mod.id}`);
    return { system, module_name };
}

/** Add a trigger to a system on the API */
async function addToSystem(
    api: APIRequestContext,
    system_id: string,
    trigger_id: string,
): Promise<TriggerInstance> {
    return createResource<TriggerInstance>(
        api,
        `${ENGINE_API}/systems/${system_id}/triggers`,
        { trigger_id, control_system_id: system_id },
    );
}

async function getTrigger(
    api: APIRequestContext,
    id: string,
): Promise<Trigger> {
    return getJson<Trigger>(api, `${ENGINE_API}/triggers/${id}`);
}

async function getInstances(
    api: APIRequestContext,
    id: string,
): Promise<TriggerInstance[]> {
    return asList<TriggerInstance>(
        await getJson(api, `${ENGINE_API}/triggers/${id}/instances`),
    );
}

/** Pick the system the about tab uses for conditions and actions */
async function selectReferenceSystem(page: Page, name: string) {
    const input = page.locator('#reference-system input');
    // Search comes from Elasticsearch, so a new system can take a moment
    await expect(async () => {
        await input.fill('');
        await input.fill(name);
        await expect(
            page.getByRole('option', { name: new RegExp(name) }),
        ).toBeVisible({ timeout: 2_000 });
    }).toPass({ timeout: 20_000 });
    await page.getByRole('option', { name: new RegExp(name) }).click();
    await expect(addButton(page, 'Add Condition')).toBeEnabled();
}

/** Add button of the conditions or the actions of the about tab */
function addButton(page: Page, label: 'Add Condition' | 'Add Action'): Locator {
    const header = page.locator('trigger-about header').filter({
        hasText: label === 'Add Condition' ? 'Conditions' : 'Actions',
    });
    return header.getByRole('button');
}

/** The table of the about tab that has `text`. Each table counts its own rows */
function aboutTable(page: Page, text: string): Locator {
    return page.locator('trigger-about simple-table').filter({ hasText: text });
}

test.describe('Triggers on the local backend', () => {
    let triggers: FeaturePage;

    test.beforeEach(async ({ page }) => {
        triggers = new FeaturePage(page, 'triggers');
    });

    test.describe('US-TRG-001: View Triggers List', () => {
        test('AC-TRG-001-2, AC-TRG-001-3: search finds a trigger and opens it', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            await triggers.goto();

            await expect(async () => {
                await triggers.searchInput.fill('');
                await triggers.searchInput.fill(trigger.name);
                await expect(triggers.itemLink(trigger.name)).toHaveCount(1, {
                    timeout: 2_000,
                });
            }).toPass({ timeout: 20_000 });
            await triggers.itemLink(trigger.name).click();

            await expect(page).toHaveURL(
                new RegExp(`#/triggers/${trigger.id}/about`),
            );
            await expect(triggers.itemName).toHaveText(trigger.name);
        });
    });

    test.describe('US-TRG-002: View Trigger Details', () => {
        test('AC-TRG-002-2, AC-TRG-002-3: shows the saved conditions and actions', async ({
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup, {
                conditions: {
                    comparisons: [
                        {
                            left: {
                                mod: 'Lighting_1',
                                status: 'level',
                                keys: [],
                            },
                            operator: 'greater_than',
                            right: 40,
                        },
                    ],
                    time_dependents: [{ type: 'cron', cron: '15 7 * * 1' }],
                },
                actions: {
                    functions: [
                        { mod: 'Display_2', method: 'power', args: {} },
                    ],
                    mailers: [
                        {
                            emails: ['a@place.tech', 'b@place.tech'],
                            content: 'Lights',
                        },
                    ],
                },
            });

            await triggers.gotoItem(trigger.id);

            const about = triggers.page.locator('trigger-about');
            await expect(about).toContainText('greater_than');
            await expect(about).toContainText('"Lighting_1"');
            await expect(about).toContainText('CRON 15 7 * * 1');
            await expect(about).toContainText('Display_2');
            await expect(about).toContainText('power({})');
            await expect(about).toContainText('2 Address(es)');
        });
    });

    test.describe('US-TRG-003: Create New Trigger', () => {
        test('AC-TRG-003-2, AC-TRG-003-5: a trigger made in the form is saved', async ({
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Trigger');
            await triggers.goto();

            const id = await triggers.createWith(async () => {
                await triggers.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill(name);
                await triggers.dialog
                    .getByRole('textbox', { name: 'Description' })
                    .fill('Made by the e2e suite');
            });
            cleanup.add(`${ENGINE_API}/triggers/${id}`);

            const saved = await getTrigger(api, id);
            expect(saved.name).toBe(name);
            expect(saved.description).toBe('Made by the e2e suite');
            await expect(triggers.itemName).toHaveText(name);
        });
    });

    test.describe('US-TRG-004: Edit Trigger Configuration', () => {
        test('AC-TRG-004-2: a new name and description are saved', async ({
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const name = uniqueName('E2E Renamed Trigger');

            await triggers.gotoItem(trigger.id);
            await triggers.openEditModal();
            await triggers.dialog
                .getByRole('textbox', { name: 'Name*' })
                .fill(name);
            await triggers.dialog
                .getByRole('textbox', { name: 'Description' })
                .fill('New description');
            await triggers.saveButton.click();
            await expect(triggers.dialog).toBeHidden();

            await expect(triggers.itemName).toHaveText(name);
            const saved = await getTrigger(api, trigger.id);
            expect(saved.name).toBe(name);
            expect(saved.description).toBe('New description');
        });

        test('AC-TRG-004-5: the webhook settings are saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);

            await triggers.gotoItem(trigger.id);
            await triggers.openEditModal();
            await setToggle(
                triggers.dialog.getByRole('checkbox', {
                    name: 'Enable Webhook',
                }),
                true,
            );
            // POST is the default method. Add GET to it
            await choose(
                page,
                triggers.dialog.getByRole('combobox', {
                    name: 'Supported Methods',
                }),
                'GET',
            );
            await page.keyboard.press('Escape');
            await triggers.saveButton.click();
            await expect(triggers.dialog).toBeHidden();

            await expect
                .poll(async () => {
                    const saved = await getTrigger(api, trigger.id);
                    return {
                        enable_webhook: saved.enable_webhook,
                        methods: [...(saved.supported_methods || [])].sort(),
                    };
                })
                .toEqual({ enable_webhook: true, methods: ['GET', 'POST'] });
        });
    });

    test.describe('US-TRG-005: Delete Trigger', () => {
        test('AC-TRG-005-3: a deleted trigger is removed', async ({
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);

            await triggers.gotoItem(trigger.id);
            await triggers.deleteSelected();

            const res = await api.get(`${ENGINE_API}/triggers/${trigger.id}`);
            expect(res.status()).toBe(404);
        });

        test('AC-TRG-005-2: the confirmation warns that systems lose the trigger', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const system = await createSystem(api, cleanup);
            await addToSystem(api, system.id, trigger.id);

            await triggers.gotoItem(trigger.id);
            await triggers.openDeleteConfirmation();
            await expect(page.locator('confirm-modal')).toContainText(
                'removed immediately from all systems and zones',
            );
            await confirm(page);

            const left = asList<{ trigger_id: string }>(
                await getJson(
                    api,
                    `${ENGINE_API}/systems/${system.id}/triggers`,
                ),
            );
            expect(left.map((_) => _.trigger_id)).not.toContain(trigger.id);
        });
    });

    test.describe('US-TRG-006: Configure Trigger Conditions', () => {
        test('AC-TRG-006-1: a recurring time condition is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const system = await createSystem(api, cleanup);

            await triggers.gotoItem(trigger.id);
            await selectReferenceSystem(page, system.name);
            await addButton(page, 'Add Condition').click();
            const dialog = triggers.dialog;
            await choose(
                page,
                dialog.locator('form[trigger-condition] app-select').first(),
                'Particular Time',
            );
            await setToggle(
                dialog.getByRole('checkbox', { name: 'Recurring Schedule' }),
                true,
            );
            await choose(
                page,
                dialog.locator('app-select[name="type"]'),
                'Day',
            );
            await choose(
                page,
                dialog.locator('app-select[name="hour"]'),
                '09:00',
            );
            await choose(
                page,
                dialog.locator('app-select[name="minute"]'),
                '09:30',
            );
            await triggers.saveButton.click();
            await expect(dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (await getTrigger(api, trigger.id)).conditions
                            ?.time_dependents,
                )
                .toEqual([
                    expect.objectContaining({
                        type: 'cron',
                        cron: '30 9 * * *',
                    }),
                ]);
            await expect(page.locator('trigger-about')).toContainText(
                'CRON 30 9 * * *',
            );
        });

        test('AC-TRG-006-2: a comparison of a status variable is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const { system, module_name } = await createSystemWithModule(
                api,
                cleanup,
            );

            await triggers.gotoItem(trigger.id);
            await selectReferenceSystem(page, system.name);
            await addButton(page, 'Add Condition').click();
            const dialog = triggers.dialog;
            await choose(
                page,
                dialog.getByRole('combobox', { name: 'Select module' }).first(),
                `${module_name}_1`,
            );
            await choose(
                page,
                dialog
                    .getByRole('combobox', { name: 'Select status variable' })
                    .first(),
                'connected',
            );
            await choose(
                page,
                dialog.getByRole('combobox', {
                    name: 'Select comparision operator',
                }),
                'not equal to',
            );
            await dialog
                .getByPlaceholder("true/false, 'string', 123.456")
                .fill('false');
            await triggers.saveButton.click();
            await expect(dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (await getTrigger(api, trigger.id)).conditions
                            ?.comparisons,
                )
                .toEqual([
                    {
                        left: expect.objectContaining({
                            mod: `${module_name}_1`,
                            status: 'connected',
                        }),
                        operator: 'not_equal',
                        right: false,
                    },
                ]);
        });

        test('AC-TRG-006-6: a removed condition is deleted', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup, {
                conditions: {
                    comparisons: [],
                    time_dependents: [
                        { type: 'cron', cron: '0 8 * * *' },
                        { type: 'cron', cron: '0 18 * * *' },
                    ],
                },
            });

            await triggers.gotoItem(trigger.id);
            const row = await triggers.tableRow(
                'CRON 0 8 * * *',
                aboutTable(page, 'CRON 0 8 * * *'),
            );
            await row.getByRole('button', { name: 'Delete' }).click();
            await confirm(page);

            await expect
                .poll(
                    async () =>
                        (await getTrigger(api, trigger.id)).conditions
                            ?.time_dependents,
                )
                .toEqual([expect.objectContaining({ cron: '0 18 * * *' })]);
        });
    });

    test.describe('US-TRG-007: Configure Trigger Actions', () => {
        test('AC-TRG-007-2, AC-TRG-009-1, AC-TRG-009-2: an email action is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const system = await createSystem(api, cleanup);

            await triggers.gotoItem(trigger.id);
            await selectReferenceSystem(page, system.name);
            await addButton(page, 'Add Action').click();
            const dialog = triggers.dialog;
            await choose(
                page,
                dialog.locator('form[trigger-action] app-select').first(),
                'Send Email',
            );
            const emails = dialog.locator('#emails');
            await emails.fill('ops@place.tech');
            await emails.press('Enter');
            await emails.fill('desk@place.tech');
            await emails.press('Enter');
            await dialog
                .getByPlaceholder('Email body contents...')
                .fill('The room is too warm');
            await triggers.saveButton.click();
            await expect(dialog).toBeHidden();

            await expect
                .poll(
                    async () =>
                        (await getTrigger(api, trigger.id)).actions?.mailers,
                )
                .toEqual([
                    {
                        emails: ['ops@place.tech', 'desk@place.tech'],
                        content: 'The room is too warm',
                    },
                ]);
        });

        test('AC-TRG-007-4: reordered email actions are saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const first = { emails: ['first@place.tech'], content: 'First' };
            const second = { emails: ['second@place.tech'], content: 'Second' };
            const trigger = await createTrigger(api, cleanup, {
                actions: { functions: [], mailers: [first, second] },
            });

            await triggers.gotoItem(trigger.id);
            // The handle moves its row with the arrow keys
            await aboutTable(page, 'Email Action')
                .locator('[data-reorder="0"]')
                .press('ArrowDown');
            await confirm(page);

            await expect
                .poll(
                    async () =>
                        (await getTrigger(api, trigger.id)).actions?.mailers,
                )
                .toEqual([second, first]);
        });

        test('AC-TRG-007-5: a removed action is deleted', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup, {
                actions: {
                    functions: [
                        { mod: 'Display_1', method: 'power', args: {} },
                    ],
                    mailers: [{ emails: ['ops@place.tech'], content: 'Hi' }],
                },
            });

            await triggers.gotoItem(trigger.id);
            const row = await triggers.tableRow(
                'Display_1',
                aboutTable(page, 'Display_1'),
            );
            await row.getByRole('button', { name: 'Delete' }).click();
            await confirm(page);

            await expect
                .poll(async () => (await getTrigger(api, trigger.id)).actions)
                .toEqual({
                    functions: [],
                    mailers: [{ emails: ['ops@place.tech'], content: 'Hi' }],
                });
        });
    });

    test.describe('US-TRG-008: View Trigger Instances', () => {
        test('AC-TRG-008-1, AC-TRG-008-2: lists the systems and zones that use the trigger', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const system = await createSystem(api, cleanup);
            await addToSystem(api, system.id, trigger.id);
            const zone = await createResource<Item>(
                api,
                `${ENGINE_API}/zones`,
                {
                    name: uniqueName('E2E Trigger Zone'),
                    triggers: [trigger.id],
                },
            );
            cleanup.add(`${ENGINE_API}/zones/${zone.id}`);
            // A zone's trigger has an instance for each system in the zone
            await createSystem(api, cleanup, [zone.id]);
            await expect
                .poll(async () => (await getInstances(api, trigger.id)).length)
                .toBe(2);

            await triggers.gotoItem(trigger.id);
            const tab = page.locator('item-tablist a[href*="/instances"]');
            await expect(tab).toContainText('2');
            await triggers.openTab('instances');

            const links = triggers.tabContent.getByRole('link');
            await expect(links).toHaveCount(2);
            await expect(links.filter({ hasText: system.id })).toHaveAttribute(
                'href',
                `#/systems/${system.id}`,
            );
            await expect(links.filter({ hasText: zone.id })).toHaveAttribute(
                'href',
                `#/zones/${zone.id}`,
            );
        });

        test('AC-TRG-008-3: an instance links to its zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const zone = await createResource<Item>(
                api,
                `${ENGINE_API}/zones`,
                {
                    name: uniqueName('E2E Trigger Zone'),
                    triggers: [trigger.id],
                },
            );
            cleanup.add(`${ENGINE_API}/zones/${zone.id}`);
            await createSystem(api, cleanup, [zone.id]);

            await triggers.gotoItem(trigger.id, 'instances');
            await triggers.tabContent
                .getByRole('link', { name: zone.id })
                .click();

            await expect(page).toHaveURL(new RegExp(`#/zones/${zone.id}/`));
            await expect(triggers.itemName).toHaveText(zone.name);
        });

        test('removing a system instance takes the trigger off the system', async ({
            page,
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const system = await createSystem(api, cleanup);
            await addToSystem(api, system.id, trigger.id);

            await triggers.gotoItem(trigger.id, 'instances');
            const row = await triggers.tableRow(system.id);
            await row.getByRole('button').click();
            await confirm(page);

            await expect
                .poll(async () => (await getInstances(api, trigger.id)).length)
                .toBe(0);
        });
    });

    test.describe('US-TRG-011: Enable/Disable Trigger', () => {
        test('AC-TRG-011-3: the instance list shows which instances are enabled', async ({
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const on = await createSystem(api, cleanup);
            const off = await createSystem(api, cleanup);
            await addToSystem(api, on.id, trigger.id);
            const instance = await addToSystem(api, off.id, trigger.id);
            const res = await api.patch(
                `${ENGINE_API}/systems/${off.id}/triggers/${instance.id}`,
                { data: { enabled: false } },
            );
            expect(res.ok(), await res.text()).toBe(true);

            await triggers.gotoItem(trigger.id, 'instances');

            const dot = async (system_id: string) =>
                (await triggers.tableRow(system_id))
                    .first()
                    .locator('.rounded-full');
            await expect(await dot(on.id)).toHaveClass(/bg-success/);
            await expect(await dot(off.id)).not.toHaveClass(/bg-success/);
        });
        for (const enabled of [false, true]) {
            const ac = enabled ? 'AC-TRG-011-2' : 'AC-TRG-011-1';
            test(`${ac}: the system's trigger settings ${enabled ? 'enable' : 'disable'} the instance`, async ({
                page,
                api,
                cleanup,
            }) => {
                const trigger = await createTrigger(api, cleanup);
                const system = await createSystem(api, cleanup);
                const instance = await addToSystem(api, system.id, trigger.id);
                if (enabled) {
                    const res = await api.patch(
                        `${ENGINE_API}/systems/${system.id}/triggers/${instance.id}`,
                        { data: { enabled: false } },
                    );
                    expect(res.ok(), await res.text()).toBe(true);
                }
                const systems = new FeaturePage(page, 'systems');

                await systems.gotoItem(system.id, 'triggers');
                const row = await systems.tableRow(trigger.name);
                await row.getByRole('button', { name: 'Edit Trigger' }).click();
                const toggle = systems.dialog.getByRole('checkbox', {
                    name: 'Enabled',
                    exact: true,
                });
                await expect(toggle).toHaveAttribute(
                    'aria-checked',
                    `${!enabled}`,
                );
                await toggle.click();
                await expect(toggle).toHaveAttribute(
                    'aria-checked',
                    `${enabled}`,
                );
                await systems.saveButton.click();
                await expect(systems.dialog).toBeHidden();

                await expect
                    .poll(
                        async () =>
                            (await getInstances(api, trigger.id))[0]?.enabled,
                    )
                    .toBe(enabled);
            });
        }
    });
});
