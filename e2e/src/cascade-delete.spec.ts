import { buildAppUrl } from './config/test-env';
import { expect, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Optional cascade delete (PPT-1203)
 *
 * Deleting a zone has never removed the systems inside it — the zone id was
 * just stripped from `sys.zones`, leaving systems orphaned (PROJ-845). The
 * delete confirmation now offers to remove them, off by default.
 *
 * The mock zone tree (from the user-interfaces mocks) these tests rely on.
 * Each room is in its level and in every zone above it:
 *
 *   PlaceOS Global (org)                 zone-org
 *   └── Sydney Region
 *       └── Innovation Hub (building)
 *           ├── Ground Floor             bld-01_lvl-G   (8 rooms)
 *           └── Parking Level 1          bld-01_lvl-P1  (no children, no rooms)
 */
const ORG = 'zone-org';
const GROUND_FLOOR = 'bld-01_lvl-G';
const EMPTY_ZONE = 'bld-01_lvl-P1';

test.describe('Cascade delete', () => {
    let zonesPage: FeaturePage;

    test.beforeEach(async ({ page }) => {
        zonesPage = new FeaturePage(page, 'zones');
    });

    test('offers the option, disabled by default', async () => {
        await zonesPage.gotoItem(EMPTY_ZONE);
        await zonesPage.openDeleteConfirmation();

        await expect(zonesPage.cascadeCheckbox).toHaveCount(1);
        await expect(zonesPage.cascadeCheckbox).not.toBeChecked();
        // Nothing is resolved until the option is switched on
        await expect(zonesPage.cascadeSummary).toHaveCount(0);
    });

    test('no longer claims that systems are removed by default', async ({
        page,
    }) => {
        await zonesPage.gotoItem(EMPTY_ZONE);
        await zonesPage.openDeleteConfirmation();

        const content = await page
            .locator('confirm-modal [content]')
            .innerText();
        expect(content).toContain('are kept unless you also remove');
    });

    test('reports nothing to remove for an empty zone', async () => {
        await zonesPage.gotoItem(EMPTY_ZONE);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        await expect(zonesPage.cascadeEmpty).toBeVisible();
        await expect(zonesPage.cascadeSummary).toHaveCount(0);
    });

    test('lists the systems and modules that would be removed', async ({
        page,
    }) => {
        await zonesPage.gotoItem(ORG);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        const summary = await zonesPage.cascadeSummary.innerText();
        expect(summary).toMatch(/\d+ systems? left without a zone/);
        expect(summary).toMatch(/\d+ modules? in those systems/);

        const scope = await page.locator('confirm-modal').innerText();
        expect(scope).toMatch(/Scope: this zone and \d+ zones? beneath it/);
    });

    test('keeps systems that also belong to a zone outside the subtree', async () => {
        // The Ground Floor rooms are also in Innovation Hub, which is above
        // it — they survive, so the cascade must remove nothing and say so.
        await zonesPage.gotoItem(GROUND_FLOOR);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        await expect(zonesPage.cascadeEmpty).toBeVisible();
        const warning = await zonesPage.cascadeWarnings.innerText();
        expect(warning).toMatch(
            /systems? also belongs? to (a )?zones? outside this one and will be kept/,
        );
    });

    test('removes the orphaned systems when confirmed', async ({ page }) => {
        await zonesPage.gotoItem(ORG);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        const summary = await zonesPage.cascadeSummary.innerText();
        const expected = Number(summary.match(/(\d+) systems? left/)?.[1] || 0);
        expect(expected).toBeGreaterThan(0);

        await zonesPage.acceptButton.click();
        await page.waitForSelector('confirm-modal [result-items]', {
            timeout: 60000,
        });
        await page.locator('confirm-modal button[name="close"]').click();

        // Every system lived inside this org zone, so the systems list empties
        await page.goto(buildAppUrl('/#/systems'));
        await expect(page.locator('item-sidebar')).toContainText(
            'No Systems available',
        );
        await expect(zonesPage.sidebarItems).toHaveCount(0);
    });

    test('lists what was removed, with ids, once it has run', async ({
        page,
    }) => {
        await zonesPage.gotoItem(ORG);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        const summary = await zonesPage.cascadeSummary.innerText();
        const systems = Number(summary.match(/(\d+) systems? left/)?.[1] || 0);

        await zonesPage.acceptButton.click();
        await page.waitForSelector('confirm-modal [result-items]', {
            timeout: 60000,
        });

        // one row per system, plus the zone itself
        const rows = page.locator('confirm-modal [result-items] li');
        await expect(rows).toHaveCount(systems + 1);

        const receipt = await page
            .locator('confirm-modal [result-items]')
            .innerText();
        expect(receipt).toContain(ORG);
        expect(receipt).toContain('PlaceOS Global');
        // every row carries an id
        for (const row of await rows.all()) {
            expect(await row.innerText()).toMatch(/(space|zone)-\S+/);
        }

        // the confirmation buttons are replaced by a single close
        await expect(zonesPage.acceptButton).toHaveCount(0);
        await expect(
            page.locator('confirm-modal button[name="close"]'),
        ).toBeVisible();
    });

    test('shows no receipt for a delete without the option', async ({
        page,
    }) => {
        await zonesPage.gotoItem(EMPTY_ZONE);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.acceptButton.click();

        // unchanged behaviour: the dialog closes itself, no receipt
        await page.waitForURL(/#\/zones\/-/, { timeout: 30000 });
        await expect(page.locator('confirm-modal')).toHaveCount(0);
    });

    test('leaves systems alone when the option is left off', async ({
        page,
    }) => {
        const system = zonesPage.itemLink('01.1.01 Think Tank');
        await page.goto(buildAppUrl('/#/systems'));
        await expect(system).toBeVisible();

        await zonesPage.gotoItem(ORG);
        await zonesPage.openDeleteConfirmation();
        await zonesPage.acceptButton.click();
        await page.waitForURL(/#\/zones\/-/, { timeout: 30000 });

        await page.goto(buildAppUrl('/#/systems'));
        await expect(system).toBeVisible();
    });
});
