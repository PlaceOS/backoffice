import { Page } from '@playwright/test';
import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Navigation E2E Tests
 *
 * Tests for the main menu and for routing between sections on desktop.
 * The mobile spec covers the menu on small screens.
 */

/** Sections in the main menu that list items in the item sidebar */
const LIST_SECTIONS = [
    { route: 'systems', title: 'Systems' },
    { route: 'modules', title: 'Modules' },
    { route: 'zones', title: 'Zones' },
    { route: 'drivers', title: 'Drivers' },
    { route: 'repositories', title: 'Repositories' },
    { route: 'triggers', title: 'Triggers' },
    { route: 'users', title: 'Users' },
    { route: 'groups', title: 'Groups' },
    { route: 'domains', title: 'Domains' },
] as const;

/** Link to a section in the main menu */
function menuLink(page: Page, route: string) {
    return page.locator(`sidebar-menu a[href="#/${route}"]`);
}

/** Search field of the item sidebar */
function sidebarSearch(page: Page) {
    return new FeaturePage(page, 'systems').searchInput;
}

/** URL of a section, with or without a selected item */
function sectionUrl(route: string) {
    return new RegExp(`#/${route}(/|$)`);
}

test.describe('Navigation', () => {
    test.describe('Main menu', () => {
        test('each list link opens its section', async ({ page }) => {
            // Start outside the list sections so every click changes section
            await new FeaturePage(page, 'admin').goto();

            for (const { route, title } of LIST_SECTIONS) {
                await test.step(title, async () => {
                    await menuLink(page, route).click();

                    await expect(page).toHaveURL(sectionUrl(route));
                    await expect(sidebarSearch(page)).toHaveAttribute(
                        'placeholder',
                        `Search for ${title}...`,
                    );
                    await expect(menuLink(page, route)).toHaveClass(
                        /text-secondary-content/,
                    );
                });
            }
        });

        test('opens Manage Instance', async ({ page }) => {
            await new FeaturePage(page, 'systems').goto();
            await menuLink(page, 'admin').click();

            await expect(page).toHaveURL(sectionUrl('admin'));
            await expect(
                page.locator('a[href="#/admin/database"]'),
            ).toBeVisible();
            await expect(page.locator('item-sidebar')).toHaveCount(0);
        });
    });

    test('an unknown route redirects to systems', async ({ page }) => {
        await page.goto('/#/not-a-real-page');

        await expect(page).toHaveURL(sectionUrl('systems'));
        await expect(sidebarSearch(page)).toHaveAttribute(
            'placeholder',
            'Search for Systems...',
        );
    });

    test('a deep link opens the tab of the item', async ({ page }) => {
        await seedMockData(page, 'zones', [
            { id: 'zone-level-1', name: 'Level 1', tags: [] },
        ]);
        const zones = new FeaturePage(page, 'zones');
        await zones.gotoItem('zone-level-1', 'systems');

        await expect(page).toHaveURL(/#\/zones\/zone-level-1\/systems$/);
        await expect(zones.itemName).toHaveText('Level 1');
        await expect(
            page.locator('item-tablist a[href*="/systems"]'),
        ).toHaveAttribute('aria-selected', 'true');
    });

    test('browser back returns to the previous section', async ({ page }) => {
        await new FeaturePage(page, 'systems').goto();
        await menuLink(page, 'zones').click();
        await expect(sidebarSearch(page)).toHaveAttribute(
            'placeholder',
            'Search for Zones...',
        );

        await page.goBack();

        await expect(page).toHaveURL(sectionUrl('systems'));
        await expect(sidebarSearch(page)).toHaveAttribute(
            'placeholder',
            'Search for Systems...',
        );
    });
});
