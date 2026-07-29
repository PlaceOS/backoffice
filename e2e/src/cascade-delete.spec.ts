import { expect, test } from '@playwright/test';
import { ZonesPage } from './pages';

/**
 * Optional cascade delete (PPT-1203)
 *
 * Deleting a zone has never removed the systems inside it — the zone id was
 * just stripped from `sys.zones`, leaving systems orphaned (PROJ-845). The
 * delete confirmation now offers to remove them, off by default.
 *
 * The mock zone tree these tests rely on:
 *
 *   Place Technology (org)
 *   └── Tower 2 (building)
 *       ├── Level 30
 *       │   └── L30 Activity Spaces
 *       └── Level 31
 *           ├── L31 Activity Spaces
 *           ├── L31 Multifunction: 31.22
 *           └── L31 R7 Activity Space
 *   New Zone   (root, no children, no systems)
 */
test.describe('Cascade delete', () => {
    let zonesPage: ZonesPage;

    test.beforeEach(async ({ page }) => {
        await page.addInitScript(() => {
            localStorage.setItem('BACKOFFICE.mock', 'true');
        });
        zonesPage = new ZonesPage(page);
    });

    const openZone = async (page, zone_id: string) => {
        await page.goto(`/?mock=true#/zones/${zone_id}/about`);
        await zonesPage.waitForLoad();
        await page.waitForSelector('item-details', { timeout: 20000 });
    };

    test('offers the option, disabled by default', async ({ page }) => {
        await openZone(page, 'zone-lmhh_hVfz0');
        await zonesPage.openDeleteConfirmation();

        await expect(zonesPage.cascadeCheckbox).toHaveCount(1);
        await expect(zonesPage.cascadeCheckbox).not.toBeChecked();
        // Nothing is resolved until the option is switched on
        await expect(zonesPage.cascadeSummary).toHaveCount(0);
    });

    test('no longer claims that systems are removed by default', async ({
        page,
    }) => {
        await openZone(page, 'zone-lmhh_hVfz0');
        await zonesPage.openDeleteConfirmation();

        const content = await page
            .locator('confirm-modal [content]')
            .innerText();
        expect(content).toContain('are kept unless you also remove');
    });

    test('reports nothing to remove for an empty zone', async ({ page }) => {
        await openZone(page, 'zone-lmhh_hVfz0');
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        await expect(zonesPage.cascadeEmpty).toBeVisible();
        await expect(zonesPage.cascadeSummary).toHaveCount(0);
    });

    test('lists the systems and modules that would be removed', async ({
        page,
    }) => {
        await openZone(page, 'zone-Kl0E0HmCJ3'); // Place Technology (org)
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        const summary = await zonesPage.cascadeSummary.innerText();
        expect(summary).toMatch(/\d+ systems? left without a zone/);
        expect(summary).toMatch(/\d+ modules? in those systems/);

        const scope = await page.locator('confirm-modal').innerText();
        expect(scope).toMatch(/Scope: this zone and \d+ zones? beneath it/);
    });

    test('keeps systems that also belong to a zone outside the subtree', async ({
        page,
    }) => {
        // Level 30's systems are also in Tower 2, which is above it — they
        // survive, so the cascade must remove nothing and say so.
        await openZone(page, 'zone-LEHeo501Er');
        await zonesPage.openDeleteConfirmation();
        await zonesPage.enableCascade();

        await expect(zonesPage.cascadeEmpty).toBeVisible();
        const warning = await zonesPage.cascadeWarnings.innerText();
        expect(warning).toMatch(
            /systems? also belongs? to (a )?zones? outside this one and will be kept/,
        );
    });

    test('removes the orphaned systems when confirmed', async ({ page }) => {
        await openZone(page, 'zone-Kl0E0HmCJ3');
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
        await page.goto('/?mock=true#/systems');
        await zonesPage.waitForLoad();
        await page.waitForTimeout(1000);
        await expect(zonesPage.sidebarItems).toHaveCount(0);
    });

    test('lists what was removed, with ids, once it has run', async ({
        page,
    }) => {
        await openZone(page, 'zone-Kl0E0HmCJ3');
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
        expect(receipt).toContain('zone-Kl0E0HmCJ3');
        expect(receipt).toContain('Place Technology');
        // every row carries an id
        for (const row of await rows.all()) {
            expect(await row.innerText()).toMatch(/(sys|zone)-\S+/);
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
        await openZone(page, 'zone-lmhh_hVfz0');
        await zonesPage.openDeleteConfirmation();
        await zonesPage.acceptButton.click();

        // unchanged behaviour: the dialog closes itself, no receipt
        await page.waitForURL(/#\/zones\/-/, { timeout: 30000 });
        await expect(page.locator('confirm-modal')).toHaveCount(0);
    });

    test('leaves systems alone when the option is left off', async ({
        page,
    }) => {
        await page.goto('/?mock=true#/systems');
        await zonesPage.waitForLoad();
        await page.waitForTimeout(1000);
        const before = await zonesPage.sidebarItems.count();
        expect(before).toBeGreaterThan(0);

        await openZone(page, 'zone-Kl0E0HmCJ3');
        await zonesPage.openDeleteConfirmation();
        await zonesPage.acceptButton.click();
        await page.waitForURL(/#\/zones\/-/, { timeout: 30000 });

        await page.goto('/?mock=true#/systems');
        await zonesPage.waitForLoad();
        await page.waitForTimeout(1000);
        await expect(zonesPage.sidebarItems).toHaveCount(before);
    });
});
