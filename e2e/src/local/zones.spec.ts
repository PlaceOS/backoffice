import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, asList, getJson, uniqueName } from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import {
    Zone,
    compareLastSettings,
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

/** Zones with this exact name, from the API search */
async function zonesNamed(api: APIRequestContext, name: string) {
    const body = await getJson(api, `${ENGINE_API}/zones`, { q: `"${name}"` });
    return asList<Zone>(body).filter((zone) => zone.name === name);
}

test.describe('Zones on the local backend', () => {
    let zones: FeaturePage;

    test.beforeEach(async ({ page }) => {
        zones = new FeaturePage(page, 'zones');
    });

    test.describe('US-ZON-001: View Zones List', () => {
        test('AC-ZON-001-3: search shows only the matching zone', async ({
            api,
            cleanup,
        }) => {
            const match = await createZone(api, cleanup);
            const other = await createZone(api, cleanup);
            await zones.goto();

            // The search matches any word, so search the unique word only
            await zones.search(match.name.split(' ').pop() ?? '');

            await expect(zones.itemLink(match.name)).toBeVisible();
            await expect(zones.itemLink(other.name)).toHaveCount(0);
        });

        test('AC-ZON-001-4: a zone in the list opens its details', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await zones.goto();
            await zones.search(zone.name);

            await zones.itemLink(zone.name).click();

            await expect(page).toHaveURL(
                new RegExp(`#/zones/${encodeURIComponent(zone.id)}/`),
            );
            await expect(zones.itemName).toHaveText(zone.name);
        });
    });

    test.describe('US-ZON-002: View Zone Details', () => {
        test('AC-ZON-002-1: shows the display name of the zone', async ({
            api,
            cleanup,
        }) => {
            const display_name = uniqueName('E2E Display');
            const zone = await createZone(api, cleanup, { display_name });

            await zones.gotoItem(zone.id);

            await expect(zones.itemName).toHaveText(display_name);
        });

        test('AC-ZON-002-2: links to the parent zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const parent = await createZone(api, cleanup);
            const child = await createZone(api, cleanup, {
                parent_id: parent.id,
            });
            await zones.gotoItem(child.id);

            await zones.tabContent
                .getByRole('link', { name: `${parent.name} (${parent.id})` })
                .click();

            await expect(page).toHaveURL(
                new RegExp(`#/zones/${encodeURIComponent(parent.id)}/about`),
            );
            await expect(zones.itemName).toHaveText(parent.name);
        });

        test('AC-ZON-002-3: the systems tab shows the system count', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await createSystem(api, cleanup, [zone.id]);
            await createSystem(api, cleanup, [zone.id]);

            await zones.gotoItem(zone.id);

            await expect(
                page.locator('item-tablist a[href*="/systems"]'),
            ).toContainText('2');
        });
    });

    test.describe('US-ZON-003: Create New Zone', () => {
        test('AC-ZON-003-5: a zone made in the form is saved', async ({
            api,
            cleanup,
        }) => {
            const name = uniqueName('E2E Zone');
            await zones.goto();

            const id = await zones.createWith(async () => {
                await zones.dialog
                    .getByRole('textbox', { name: 'Name*', exact: true })
                    .fill(name);
            });
            cleanup.add(enginePath('zones', id));

            const saved = await getItem<Zone>(api, 'zones', id);
            expect(saved.name).toBe(name);
        });

        test('AC-ZON-003-3: a zone made with a parent is its child', async ({
            api,
            cleanup,
        }) => {
            const parent = await createZone(api, cleanup);
            const name = uniqueName('E2E Child');
            await zones.goto();

            const id = await zones.createWith(async () => {
                await selectParent(zones, parent.name);
                await zones.dialog
                    .getByRole('textbox', { name: 'Name*', exact: true })
                    .fill(name);
            });
            cleanup.add(enginePath('zones', id));

            const zone = await getItem<Zone>(api, 'zones', id);
            expect(zone.name).toBe(name);
            expect(zone.parent_id).toBe(parent.id);
        });
    });

    test.describe('US-ZON-004: Edit Zone Details', () => {
        test('AC-ZON-004-5: a renamed zone is saved', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const name = uniqueName('E2E Renamed');
            await zones.gotoItem(zone.id);

            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill(name);
            await zones.saveButton.click();
            await expect(zones.dialog).toBeHidden();

            await expect(zones.itemName).toHaveText(name);
            await expect
                .poll(
                    async () =>
                        (await getItem<Zone>(api, 'zones', zone.id)).name,
                )
                .toBe(name);
        });

        test('AC-ZON-004-2: a changed display name is saved', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const display_name = uniqueName('E2E Display');
            await zones.gotoItem(zone.id);

            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Display name', exact: true })
                .fill(display_name);
            await zones.saveButton.click();
            await expect(zones.dialog).toBeHidden();

            await expect(zones.itemName).toHaveText(display_name);
            const saved = await getItem<Zone>(api, 'zones', zone.id);
            expect(saved.display_name).toBe(display_name);
        });

        test('AC-ZON-004-3: a new parent moves the zone', async ({
            api,
            cleanup,
        }) => {
            const old_parent = await createZone(api, cleanup);
            const new_parent = await createZone(api, cleanup);
            const zone = await createZone(api, cleanup, {
                parent_id: old_parent.id,
            });
            await zones.gotoItem(zone.id);

            await zones.openEditModal();
            await selectParent(zones, new_parent.name);
            await zones.saveButton.click();
            await expect(zones.dialog).toBeHidden();

            const saved = await getItem<Zone>(api, 'zones', zone.id);
            expect(saved.parent_id).toBe(new_parent.id);
        });
    });

    test.describe('US-ZON-005: Delete Zone', () => {
        test('AC-ZON-005-2: the cascade removes only the systems left without a zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const child = await createZone(api, cleanup, {
                parent_id: zone.id,
            });
            const outside = await createZone(api, cleanup);
            const orphan = await createSystem(api, cleanup, [child.id]);
            const kept = await createSystem(api, cleanup, [
                child.id,
                outside.id,
            ]);
            await zones.gotoItem(zone.id);

            await zones.openDeleteConfirmation();
            await zones.enableCascade();
            await expect(page.locator('confirm-modal')).toContainText(
                'this zone and 1 zone beneath it',
            );
            await expect(zones.cascadeSummary).toContainText(
                '1 system left without a zone',
            );
            await expect(zones.cascadeWarnings).toContainText('will be kept');
            await zones.acceptButton.click();
            await expect(
                page.locator('confirm-modal [result-items] li'),
            ).toHaveCount(2, { timeout: 30_000 });

            expect(await itemStatus(api, 'zones', zone.id)).toBe(404);
            expect(await itemStatus(api, 'systems', orphan.id)).toBe(404);
            expect(await itemStatus(api, 'systems', kept.id)).toBe(200);
        });

        test('AC-ZON-005-3: a deleted zone is removed', async ({
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await zones.gotoItem(zone.id);

            // This also checks that the app opens the zone list
            await zones.deleteSelected();

            expect(await itemStatus(api, 'zones', zone.id)).toBe(404);
        });
    });

    test.describe('US-ZON-006: View Child Zones', () => {
        test('AC-ZON-006-2: the children tab links to each child', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const child = await createZone(api, cleanup, {
                parent_id: zone.id,
            });
            await zones.gotoItem(zone.id, 'children');

            await zones.tabContent
                .getByRole('link', { name: child.name, exact: true })
                .click();

            await expect(page).toHaveURL(
                new RegExp(`#/zones/${encodeURIComponent(child.id)}/`),
            );
            await expect(zones.itemName).toHaveText(child.name);
        });
    });

    test.describe('US-ZON-007: View Systems in Zone', () => {
        test('AC-ZON-007-2: the systems tab links to each system', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const system = await createSystem(api, cleanup, [zone.id]);
            await zones.gotoItem(zone.id, 'systems');

            await zones.tabContent
                .getByRole('link', { name: system.name, exact: true })
                .click();

            await expect(page).toHaveURL(
                new RegExp(`#/systems/${encodeURIComponent(system.id)}/`),
            );
            await expect(zones.itemName).toHaveText(system.name);
        });
    });

    test.describe('US-ZON-008: Manage Zone Triggers', () => {
        test('AC-ZON-008-2: an added trigger is saved on the zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            const trigger = await createTrigger(api, cleanup);
            await zones.gotoItem(zone.id, 'triggers');

            await zones.tabContent
                .getByRole('button', { name: 'Add trigger' })
                .click();
            const modal = page.locator('select-item-modal');
            await modal.locator('input[name="item-search"]').fill(trigger.name);
            await modal.getByRole('button', { name: trigger.name }).click();
            await modal.getByRole('button', { name: 'Add selected' }).click();
            await expect(modal).toHaveCount(0);

            await expect(
                zones.tabContent.getByRole('link', { name: trigger.name }),
            ).toBeVisible();
            const saved = await getItem<Zone>(api, 'zones', zone.id);
            expect(saved.triggers).toEqual([trigger.id]);
        });

        test('AC-ZON-008-1: lists the zone triggers and removes one', async ({
            api,
            cleanup,
        }) => {
            const trigger = await createTrigger(api, cleanup);
            const zone = await createZone(api, cleanup, {
                triggers: [trigger.id],
            });
            await zones.gotoItem(zone.id, 'triggers');

            await expect(
                zones.tabContent.getByRole('link', { name: trigger.name }),
            ).toBeVisible();
            await zones.tabContent
                .getByRole('button', { name: 'Remove trigger' })
                .click();
            await zones.acceptButton.click();

            await expect
                .poll(
                    async () =>
                        (await getItem<Zone>(api, 'zones', zone.id)).triggers,
                )
                .toEqual([]);
            await expect(
                zones.tabContent.getByRole('link', { name: trigger.name }),
            ).toHaveCount(0);
        });
    });

    test.describe('US-ZON-009: Manage Zone Metadata', () => {
        test('AC-ZON-009-1: shows the metadata blocks of the zone', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await putMetadata(api, zone.id, 'e2e_block', { floor: 3 });

            await zones.gotoItem(zone.id, 'metadata');

            await expect(metadataBlock(page, 'e2e_block')).toBeVisible();
        });

        test('AC-ZON-009-3: a new metadata block is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await zones.gotoItem(zone.id, 'metadata');

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
            await saveMetadataJson(page, block, '{"seats": 12}');

            await expect
                .poll(async () => (await getMetadata(api, zone.id))['e2e_new'])
                .toMatchObject({ details: { seats: 12 } });
        });

        test('AC-ZON-009-4: an edited metadata block is saved', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await putMetadata(api, zone.id, 'e2e_block', { floor: 3 });
            await zones.gotoItem(zone.id, 'metadata');

            await saveMetadataJson(
                page,
                metadataBlock(page, 'e2e_block'),
                '{"floor": 4}',
            );

            await expect
                .poll(
                    async () => (await getMetadata(api, zone.id))['e2e_block'],
                )
                .toMatchObject({ details: { floor: 4 } });
        });

        test('AC-ZON-009-5: a deleted metadata block is removed', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await putMetadata(api, zone.id, 'e2e_block', { floor: 3 });
            await zones.gotoItem(zone.id, 'metadata');

            await metadataBlock(page, 'e2e_block')
                .getByRole('button', {
                    name: 'Remove Metadata block',
                    exact: true,
                })
                .click();
            await zones.acceptButton.click();

            await expect(metadataBlock(page, 'e2e_block')).toHaveCount(0);
            expect(await getMetadata(api, zone.id)).not.toHaveProperty(
                'e2e_block',
            );
        });
    });

    test.describe('US-ZON-010: View Zone History', () => {
        test('AC-ZON-010-2: compares two versions of the zone settings', async ({
            page,
            api,
            cleanup,
        }) => {
            const zone = await createZone(api, cleanup);
            await createSettingsHistory(
                api,
                cleanup,
                zone.id,
                'e2e_old: 1',
                'e2e_new: 2',
            );
            await zones.gotoItem(zone.id, 'history');

            await compareLastSettings(page);

            const diff = settingsDiff(page);
            await expect(diff).toContainText('e2e_old: 1');
            await expect(diff).toContainText('e2e_new: 2');
        });
    });

    test.describe('US-ZON-011: Bulk Import Zones', () => {
        test('AC-ZON-011-4: zones in a CSV file are made', async ({
            page,
            api,
            cleanup,
        }) => {
            const prefix = uniqueName('E2E Bulk');
            const names = [`${prefix} One`, `${prefix} Two`];
            const descriptions = ['first', 'second'];
            await zones.goto();

            await openBulkAdd(page);
            await page.locator('input[type="file"]').setInputFiles({
                name: 'zones.csv',
                mimeType: 'text/csv',
                buffer: Buffer.from(
                    [
                        'name,description',
                        ...names.map((name, i) => `${name},${descriptions[i]}`),
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

            // Search is indexed a moment after the zone is saved
            for (const [index, name] of names.entries()) {
                await expect
                    .poll(async () => (await zonesNamed(api, name)).length)
                    .toBe(1);
                const [zone] = await zonesNamed(api, name);
                cleanup.add(enginePath('zones', zone.id));
                expect(zone.description).toBe(descriptions[index]);
            }
        });

        test('AC-ZON-011-2: a file that is not CSV is refused', async ({
            page,
        }) => {
            await zones.goto();

            await openBulkAdd(page);
            await page.locator('input[type="file"]').setInputFiles({
                name: 'zones.txt',
                mimeType: 'text/plain',
                buffer: Buffer.from('name\nE2E Not Imported\n'),
            });

            await expect(
                zones.notification('Upload a CSV or TSV file.'),
            ).toBeVisible();
            await expect(page.locator('bulk-item-match-fields')).toHaveCount(0);
        });
    });
});

/** Pick a parent zone in the open zone form */
async function selectParent(zones: FeaturePage, name: string) {
    await zones.dialog.locator('input[name="item-search"]').fill(name);
    await zones.page.locator('app-option').filter({ hasText: name }).click();
}
