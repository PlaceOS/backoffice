import { APIRequestContext } from '@playwright/test';
import {
    ENGINE_API,
    asList,
    createResource,
    getJson,
    lastWord,
    uniqueName,
    waitForListed,
} from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { SystemsPage } from '../pages';
import {
    Module,
    System,
    TriggerInstance,
    compareLastSettings,
    createDeviceModule,
    createLogicModule,
    createSettingsHistory,
    createSystem,
    createTrigger,
    createZone,
    enginePath,
    getItem,
    getMetadata,
    itemStatus,
    metadataBlock,
    openBulkAdd,
    putMetadata,
    saveMetadataJson,
    settingsDiff,
} from './support/zones-systems';

/** Systems with this exact name, from the API search */
async function systemsNamed(api: APIRequestContext, name: string) {
    const body = await getJson(api, `${ENGINE_API}/systems`, {
        q: `"${name}"`,
    });
    return asList<System>(body).filter((system) => system.name === name);
}

/** The trigger instances of a system */
async function systemTriggers(api: APIRequestContext, sys_id: string) {
    const body = await getJson(
        api,
        `${enginePath('systems', sys_id)}/triggers`,
    );
    return asList<TriggerInstance>(body);
}

/** Whether a module runs, from the API */
async function isRunning(api: APIRequestContext, id: string) {
    return (await getItem<Module>(api, 'modules', id)).running;
}

test.describe('Systems on the local backend', () => {
    let systems: SystemsPage;

    test.beforeEach(async ({ page }) => {
        systems = new SystemsPage(page);
    });

    test.describe('US-SYS-001: View Systems List', () => {
        test('AC-SYS-001-2: search shows only the matching system', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const match = await createSystem(api, cleanup, [zone.id]);
            const other = await createSystem(api, cleanup, [zone.id]);
            // Search comes from Elasticsearch, which indexes a new item late
            for (const system of [match, other]) {
                await waitForListed(
                    api,
                    `${ENGINE_API}/systems`,
                    lastWord(system.name),
                    system.id,
                );
            }
            await systems.goto();

            // The search matches any word, so search the unique word only
            await systems.search(match.name.split(' ').pop() ?? '');

            await expect(systems.itemLink(match.name)).toBeVisible();
            await expect(systems.itemLink(other.name)).toHaveCount(0);
        });

        test('AC-SYS-001-3: a system in the list opens its details', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await waitForListed(
                api,
                `${ENGINE_API}/systems`,
                lastWord(system.name),
                system.id,
            );
            await systems.goto();
            await systems.search(system.name);

            await systems.itemLink(system.name).click();

            await expect(page).toHaveURL(new RegExp(`#/systems/${system.id}/`));
            await expect(systems.itemName).toHaveText(system.name);
        });
    });

    test.describe('US-SYS-002: Create New System', () => {
        test('AC-SYS-002-3: a system made in the form is saved', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            // The zone picker searches Elasticsearch, and does not search
            // again while it waits for an option
            await waitForListed(
                api,
                `${ENGINE_API}/zones`,
                lastWord(zone.name),
                zone.id,
            );
            const name = uniqueName('E2E System');
            await systems.goto();

            const id = await systems.createWith(async () => {
                await systems.selectZone(zone.name);
                await systems.nameField.fill(name);
            });
            cleanup.add(enginePath('systems', id));

            await expect(systems.notification('Successfully')).toBeVisible();
            const saved = await getItem<System>(api, 'systems', id);
            expect(saved.name).toBe(name);
            expect(saved.zones).toEqual([zone.id]);
        });
    });

    test.describe('US-SYS-003: Edit System Details', () => {
        test('AC-SYS-003-3: changed details are saved', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const name = uniqueName('E2E Renamed');
            await systems.gotoItem(system.id);

            await systems.openEditModal();
            await expect(systems.nameField).toHaveValue(system.name);
            await systems.nameField.fill(name);
            await systems.dialog.locator('#description').fill('E2E notes');
            await systems.saveButton.click();
            await expect(systems.dialog).toBeHidden();

            await expect(systems.itemName).toHaveText(name);
            const saved = await getItem<System>(api, 'systems', system.id);
            expect(saved.name).toBe(name);
            expect(saved.description).toBe('E2E notes');
        });

        test('AC-SYS-003-4: discarded changes are not saved', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await systems.gotoItem(system.id);

            await systems.openEditModal();
            await systems.nameField.fill(uniqueName('E2E Not Saved'));
            await systems.discardChanges();

            await expect(systems.itemName).toHaveText(system.name);
            const saved = await getItem<System>(api, 'systems', system.id);
            expect(saved.name).toBe(system.name);
            expect(saved.version).toBe(system.version);
        });
    });

    test.describe('US-SYS-004: Delete System', () => {
        test('AC-SYS-004-2: a deleted system is removed', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await systems.gotoItem(system.id);

            await systems.deleteSelected();

            await expect(page).toHaveURL(/#\/systems\/-/);
            expect(await itemStatus(api, 'systems', system.id)).toBe(404);
        });

        test('AC-SYS-004-3: a cancelled delete keeps the system', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await systems.gotoItem(system.id);

            await systems.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(systems.itemName).toHaveText(system.name);
            expect(await itemStatus(api, 'systems', system.id)).toBe(200);
        });
    });

    test.describe('US-SYS-005: Bulk Import Systems', () => {
        test('AC-SYS-005-4: systems in a TSV file are made in their zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const prefix = uniqueName('E2E Bulk');
            const names = [`${prefix} One`, `${prefix} Two`];
            await systems.goto();

            await openBulkAdd(page);
            await page.locator('input[type="file"]').setInputFiles({
                name: 'systems.tsv',
                mimeType: 'text/tab-separated-values',
                buffer: Buffer.from(
                    [
                        'name\tzones',
                        // A JSON cell is quoted, as in the template file
                        ...names.map((name) => `${name}\t"[""${zone.id}""]"`),
                    ].join('\n'),
                ),
            });
            await page.getByRole('button', { name: 'Continue' }).click();
            await expect(page.locator('bulk-item-list')).toContainText(
                'Ready to save',
            );
            await page.getByRole('button', { name: 'Save items' }).click();
            await expect(page.locator('bulk-item-status-list')).toContainText(
                '2 succeeded, 0 failed',
            );

            // Search is indexed a moment after the system is saved
            for (const name of names) {
                await expect
                    .poll(async () => (await systemsNamed(api, name)).length)
                    .toBe(1);
                const [system] = await systemsNamed(api, name);
                cleanup.add(enginePath('systems', system.id));
                expect(system.zones).toEqual([zone.id]);
            }
        });

        test('AC-SYS-005-2: a row without a name cannot be saved', async ({
            page,
        }) => {
            await systems.goto();

            await openBulkAdd(page);
            await page.locator('input[type="file"]').setInputFiles({
                name: 'systems.csv',
                mimeType: 'text/csv',
                buffer: Buffer.from('description\nE2E no name\n'),
            });
            await page.getByRole('button', { name: 'Continue' }).click();

            const list = page.locator('bulk-item-list');
            await expect(list).toContainText(
                'Row 1: Missing required field "name"',
            );
            await expect(
                page.getByRole('button', { name: 'Save items' }),
            ).toBeDisabled();
        });
    });

    test.describe('US-SYS-006: Manage System Modules', () => {
        test('AC-SYS-006-1: the modules tab links to each module', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const mod = await createLogicModule(api, cleanup, system.id);
            await systems.gotoItem(system.id, 'modules');

            await systems.tabContent
                .locator('[device-list]')
                .getByRole('link', { name: mod.name })
                .click();

            await expect(page).toHaveURL(new RegExp(`#/modules/${mod.id}/`));
        });

        test('AC-SYS-006-2: an existing module is added to the system', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const mod = await createDeviceModule(api, cleanup);
            // The module picker searches Elasticsearch
            await waitForListed(
                api,
                `${ENGINE_API}/modules`,
                mod.custom_name ?? '',
                mod.id,
            );
            await systems.gotoItem(system.id, 'modules');

            const add = systems.tabContent.locator('[add-module]');
            await add
                .locator('input[name="item-search"]')
                .fill(mod.custom_name ?? '');
            await systems.page
                .locator('app-option')
                .filter({ hasText: mod.id })
                .click();
            await add.getByRole('button', { name: 'Add existing' }).click();

            await expect(
                systems.notification('Successfully added module to system'),
            ).toBeVisible();
            const saved = await getItem<System>(api, 'systems', system.id);
            expect(saved.modules).toEqual([mod.id]);
        });

        test('AC-SYS-006-3: a removed module is taken off the system', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const mod = await createDeviceModule(api, cleanup);
            const res = await api.put(
                `${enginePath('systems', system.id)}/module/${mod.id}`,
            );
            expect(res.ok(), await res.text()).toBe(true);
            await systems.gotoItem(system.id, 'modules');

            await systems.tabContent
                .locator('[device-list]')
                .getByRole('button', { name: 'More actions' })
                .click();
            await page.getByRole('menuitem', { name: 'Remove module' }).click();
            await systems.acceptButton.click();

            await expect(
                systems.notification('Successfully removed module'),
            ).toBeVisible();
            const saved = await getItem<System>(api, 'systems', system.id);
            expect(saved.modules).toEqual([]);
        });

        test('AC-SYS-006-5: search filters the execute module selector', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const match = await createLogicModule(api, cleanup, system.id);
            const other = await createLogicModule(api, cleanup, system.id);
            await systems.gotoItem(system.id, 'modules');
            await expect(
                systems.tabContent.locator('[device-list] [data-row]').filter({
                    hasText: other.id,
                }),
            ).not.toHaveCount(0);

            await systems.searchExecuteModules(match.custom_name ?? '');

            const options = page.locator('.cdk-overlay-pane app-option');
            await expect(options).toHaveCount(1);
            await expect(options).toContainText(match.custom_name ?? '');
        });
    });

    test.describe('US-SYS-007: View System Zones', () => {
        test('AC-SYS-007-2: the zones tab links to each zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await systems.gotoItem(system.id, 'zones');

            await systems.tabContent
                .getByRole('link', { name: zone.name, exact: true })
                .click();

            await expect(page).toHaveURL(new RegExp(`#/zones/${zone.id}/`));
            await expect(systems.itemName).toHaveText(zone.name);
        });

        test('AC-SYS-007-1: an added zone is saved on the system', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const added = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            // The zone picker searches Elasticsearch
            await waitForListed(
                api,
                `${ENGINE_API}/zones`,
                lastWord(added.name),
                added.id,
            );
            await systems.gotoItem(system.id, 'zones');

            await systems.tabContent
                .locator('input[name="item-search"]')
                .fill(added.name);
            await systems.page
                .locator('app-option')
                .filter({ hasText: added.id })
                .click();
            await systems.tabContent
                .getByRole('button', { name: 'Save Changes' })
                .click();

            await expect(
                systems.notification('Successfully added zone to system'),
            ).toBeVisible();
            const saved = await getItem<System>(api, 'systems', system.id);
            expect(saved.zones).toEqual([zone.id, added.id]);
        });

        test('AC-SYS-007-1: a removed zone is taken off the system', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const removed = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [
                zone.id,
                removed.id,
            ]);
            await systems.gotoItem(system.id, 'zones');

            const row = await systems.tableRow(removed.id);
            await row
                .getByRole('button', { name: 'Remove system from zone' })
                .click();
            await systems.acceptButton.click();

            await expect(
                systems.notification('Successfully removed zone from system'),
            ).toBeVisible();
            const saved = await getItem<System>(api, 'systems', system.id);
            expect(saved.zones).toEqual([zone.id]);
        });
    });

    test.describe('US-SYS-008: Manage System Triggers', () => {
        test('AC-SYS-008-2: an added trigger is saved on the system', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const trigger = await createTrigger(api, cleanup);
            // The trigger picker searches Elasticsearch
            await waitForListed(
                api,
                `${ENGINE_API}/triggers`,
                lastWord(trigger.name),
                trigger.id,
            );
            await systems.gotoItem(system.id, 'triggers');

            await systems.tabContent
                .getByRole('button', { name: 'Add trigger' })
                .click();
            const modal = page.locator('select-item-modal');
            await modal.locator('input[name="item-search"]').fill(trigger.name);
            await modal.getByRole('button', { name: trigger.name }).click();
            await modal.getByRole('button', { name: 'Add selected' }).click();

            await expect(
                systems.tabContent.getByRole('link', { name: trigger.name }),
            ).toBeVisible();
            const instances = await systemTriggers(api, system.id);
            expect(instances.map((t) => t.trigger_id)).toEqual([trigger.id]);
        });

        test('AC-SYS-008-3: an edited trigger is saved', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const trigger = await createTrigger(api, cleanup);
            await createResource(
                api,
                `${enginePath('systems', system.id)}/triggers`,
                {
                    control_system_id: system.id,
                    trigger_id: trigger.id,
                    enabled: true,
                    important: false,
                },
            );
            await systems.gotoItem(system.id, 'triggers');

            await systems.tabContent
                .getByRole('button', { name: 'Edit Trigger' })
                .click();
            await systems.dialog
                .getByRole('checkbox', { name: 'Important' })
                .click();
            await systems.saveButton.click();

            await expect(
                systems.notification('Successfully updated trigger settings'),
            ).toBeVisible();
            const [instance] = await systemTriggers(api, system.id);
            expect(instance.important).toBe(true);
        });
    });

    test.describe('US-SYS-009: Manage System Metadata', () => {
        test('AC-SYS-009-3: a new metadata block is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await systems.gotoItem(system.id, 'metadata');

            await page
                .getByRole('button', { name: 'New Metadata block' })
                .click();
            const block = page.locator('metadata-display [block]').last();
            await block
                .getByRole('button', {
                    name: 'Edit Metadata details',
                    exact: true,
                })
                .click();
            await page.locator('#property-name').fill('e2e_new');
            await page.getByRole('button', { name: 'Apply Locally' }).click();
            await saveMetadataJson(page, block, '{"rooms": 2}');

            await expect
                .poll(
                    async () => (await getMetadata(api, system.id))['e2e_new'],
                )
                .toMatchObject({ details: { rooms: 2 } });
        });

        test('AC-SYS-009-4: an edited metadata block is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await putMetadata(api, system.id, 'e2e_block', { rooms: 1 });
            await systems.gotoItem(system.id, 'metadata');

            await saveMetadataJson(
                page,
                metadataBlock(page, 'e2e_block'),
                '{"rooms": 5}',
            );

            await expect
                .poll(
                    async () =>
                        (await getMetadata(api, system.id))['e2e_block'],
                )
                .toMatchObject({ details: { rooms: 5 } });
        });

        test('AC-SYS-009-5: a deleted metadata block is removed', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await putMetadata(api, system.id, 'e2e_block', { rooms: 1 });
            await systems.gotoItem(system.id, 'metadata');

            await metadataBlock(page, 'e2e_block')
                .getByRole('button', {
                    name: 'Remove Metadata block',
                    exact: true,
                })
                .click();
            await systems.acceptButton.click();

            await expect(metadataBlock(page, 'e2e_block')).toHaveCount(0);
            expect(await getMetadata(api, system.id)).not.toHaveProperty(
                'e2e_block',
            );
        });
    });

    test.describe('US-SYS-010: View System History', () => {
        test('AC-SYS-010-3: compares two versions of the system settings', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await createSettingsHistory(
                api,
                cleanup,
                system.id,
                'e2e_old: 1',
                'e2e_new: 2',
            );
            await systems.gotoItem(system.id, 'history');

            await compareLastSettings(page);

            const diff = settingsDiff(page);
            await expect(diff).toContainText('e2e_old: 1');
            await expect(diff).toContainText('e2e_new: 2');
        });
    });

    test.describe('US-SYS-011: Start and Stop System', () => {
        test('AC-SYS-011-1: start runs the modules of the system', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const mod = await createLogicModule(api, cleanup, system.id);
            await systems.gotoItem(system.id);

            await systems.startButton.click();
            await expect(page.locator('confirm-modal')).toContainText(
                'Start system?',
            );
            await systems.acceptButton.click();

            await expect(
                systems.notification('Successfully started system'),
            ).toBeVisible();
            expect(await isRunning(api, mod.id)).toBe(true);
        });

        test('AC-SYS-011-2: stop stops the modules of the system', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            const mod = await createLogicModule(api, cleanup, system.id);
            const res = await api.post(
                `${enginePath('systems', system.id)}/start`,
            );
            expect(res.ok(), await res.text()).toBe(true);
            expect(await isRunning(api, mod.id)).toBe(true);
            await systems.gotoItem(system.id);

            await systems.stopButton.click();
            await expect(page.locator('confirm-modal')).toContainText(
                'Stop system?',
            );
            await systems.acceptButton.click();

            await expect(
                systems.notification('Successfully stopped system'),
            ).toBeVisible();
            expect(await isRunning(api, mod.id)).toBe(false);
        });
    });
});
