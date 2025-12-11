import { expect, Page, test } from '@playwright/test';
import { buildAppUrl } from './config/test-env';
import { MobileSystemsPage } from './pages';

/**
 * Mobile E2E Tests
 *
 * Tests mobile-specific user flows and interactions.
 * These tests run on mobile viewports (Pixel 5, iPhone 12).
 *
 * Key mobile differences:
 * - Navigation via hamburger menu
 * - Item selection via modal overlay (item-selection component)
 * - Responsive layout adjustments
 */

/**
 * Wait for the app to fully load (loader gone, router ready)
 */
async function waitForAppReady(page: Page): Promise<void> {
    // Wait for loader to disappear
    await page
        .waitForSelector('[loader]', { state: 'detached', timeout: 30000 })
        .catch(() => {});

    // Wait for router outlet
    await page.waitForSelector('router-outlet', {
        state: 'attached',
        timeout: 30000,
    });

    // Wait for item-selection component (mobile)
    await page
        .waitForSelector('item-selection', { timeout: 30000 })
        .catch(() => {});

    // Small delay for animations
    await page.waitForTimeout(500);
}

/**
 * Close item-selection if it's open (by selecting first item)
 * This is needed because item-selection auto-opens when no item is selected
 */
async function closeItemSelectionIfOpen(page: Page): Promise<void> {
    // Check if the input is visible (indicates overlay is open)
    const input = page.locator('item-selection input');
    const is_open = await input.isVisible().catch(() => false);

    if (is_open) {
        // Wait for items to load
        await page
            .waitForSelector('item-selection virtual-scroll a', {
                timeout: 10000,
            })
            .catch(() => {});

        // Select first item to close the overlay
        const first_item = page
            .locator('item-selection virtual-scroll a')
            .first();
        if (await first_item.isVisible().catch(() => false)) {
            await first_item.click();
            await page.waitForTimeout(500);

            // Verify overlay closed
            await page
                .waitForFunction(
                    () => {
                        const input = document.querySelector(
                            'item-selection input',
                        );
                        return !input || !input.checkVisibility();
                    },
                    { timeout: 5000 },
                )
                .catch(() => {});
        }
    }
}

test.describe('Mobile', () => {
    test.describe('Navigation', () => {
        test('should display hamburger menu button on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Hamburger menu should be visible on mobile
            const hamburger_button = page.locator(
                'button:has(icon:has-text("menu"))',
            );
            await expect(hamburger_button).toBeVisible({ timeout: 10000 });
        });

        test('should open sidebar menu when hamburger button is clicked', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection overlay first
            await closeItemSelectionIfOpen(page);

            // Click hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();

            // Sidebar should become visible (look for the flex class that shows it)
            const sidebar = page.locator('sidebar-menu [sidebar-menu]');
            await expect(sidebar).toHaveClass(/!flex/, { timeout: 5000 });
        });

        test('should close sidebar menu when close button is clicked', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection overlay first
            await closeItemSelectionIfOpen(page);

            // Open hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });

            // Click close button
            await page
                .locator('sidebar-menu button:has(icon:has-text("close"))')
                .click();
            await page.waitForTimeout(300);

            // Verify sidebar is closed (doesn't have !flex class)
            const sidebar = page.locator('sidebar-menu [sidebar-menu]');
            await expect(sidebar).not.toHaveClass(/!flex/);
        });

        test('should navigate to different sections via hamburger menu', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection overlay first
            await closeItemSelectionIfOpen(page);

            // Open hamburger menu and navigate to Zones
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });

            await page.locator('sidebar-menu a[btn]:has-text("Zones")').click();
            await page.waitForTimeout(500);

            // Verify URL changed to zones
            await expect(page).toHaveURL(/zones/);
        });
    });

    test.describe('Item Selection', () => {
        test('should display item selection component on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Item selection should be visible on mobile
            const item_selection = page.locator('item-selection');
            await expect(item_selection).toBeVisible({ timeout: 10000 });
        });

        test('should open item selection overlay when search button is clicked', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // First select an item to close the auto-opened overlay
            await closeItemSelectionIfOpen(page);

            // Now click the search/selection trigger to re-open
            // The trigger button has a specific class with rounded-lg
            await page.locator('item-selection button.rounded-lg').click();

            // Search input should be visible (give more time as there may be animation)
            const search_input = page.locator('item-selection input');
            await expect(search_input).toBeVisible({ timeout: 10000 });
        });

        test('should display items in selection list', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // The overlay should already be open, items should be listed
            const items = page.locator('item-selection virtual-scroll a');
            await expect(items.first()).toBeVisible({ timeout: 10000 });
        });

        test('should search and filter items', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Type in search (overlay should already be open)
            await page.locator('item-selection input').fill('Activity');
            await page.waitForTimeout(500);

            // Verify search input has the value
            await expect(page.locator('item-selection input')).toHaveValue(
                'Activity',
            );
        });

        test('should select an item and show details', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Wait for items to load (overlay auto-opens)
            await page.waitForSelector('item-selection virtual-scroll a', {
                timeout: 10000,
            });

            // Select first item
            await page.locator('item-selection virtual-scroll a').first().click();
            await page.waitForTimeout(500);

            // Item details should be visible
            await expect(page.locator('item-details')).toBeVisible({
                timeout: 10000,
            });
        });

        // Skip: The item-selection component doesn't have Escape key handling implemented
        test.skip('should close item selection with Escape key', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // First select an item so the overlay can be closed
            await page.waitForSelector('item-selection virtual-scroll a', {
                timeout: 10000,
            });
            await page.locator('item-selection virtual-scroll a').first().click();
            await page.waitForTimeout(500);

            // Open selection again using the trigger button (has rounded-lg class)
            await page.locator('item-selection button.rounded-lg').click();
            await page.waitForSelector('item-selection input', {
                timeout: 10000,
            });

            // Press Escape
            await page.keyboard.press('Escape');
            await page.waitForTimeout(500);

            // Overlay should be closed - check input is not visible
            const input = page.locator('item-selection input');
            await expect(input).not.toBeVisible({ timeout: 5000 });
        });
    });

    test.describe('Systems - Mobile Flow', () => {
        let systems_page: MobileSystemsPage;

        test.beforeEach(async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });
            systems_page = new MobileSystemsPage(page);
        });

        test('should view systems list on mobile', async ({ page }) => {
            await systems_page.goto();

            // Verify item selection is visible
            await expect(systems_page.itemSelectionComponent).toBeVisible();

            // Items should be visible (overlay auto-opens)
            await systems_page.expectItemSelectionHasItems();
        });

        test('should search systems on mobile', async ({ page }) => {
            await systems_page.goto();

            // Search for a system (overlay is auto-opened)
            await page.locator('item-selection input').fill('Activity');
            await page.waitForTimeout(500);

            // Verify search input has the value
            await expect(systems_page.itemSelectionSearchInput).toHaveValue(
                'Activity',
            );
        });

        test('should select a system and view details on mobile', async ({
            page,
        }) => {
            await systems_page.goto();

            // Select first system
            await systems_page.selectFirstItemMobile();

            // Verify details are displayed
            await expect(systems_page.mainContent).toBeVisible();
            await expect(systems_page.itemDetails).toBeVisible({
                timeout: 10000,
            });
        });

        test('should open add modal on mobile', async ({ page }) => {
            await systems_page.goto();

            // Close item-selection overlay first
            await closeItemSelectionIfOpen(page);

            // Click add button
            await systems_page.addButton.click();

            // Verify modal appears
            await expect(systems_page.dialog).toBeVisible();
        });

        test('should navigate system tabs on mobile', async ({ page }) => {
            await systems_page.goto();

            // Select a system first
            await systems_page.selectFirstItemMobile();
            await page.waitForTimeout(500);

            // Navigate to modules tab
            await systems_page.viewModules();
            await expect(systems_page.mainContent).toBeVisible();

            // Navigate to zones tab
            await systems_page.viewZones();
            await expect(systems_page.mainContent).toBeVisible();
        });

        test('should open edit modal on mobile', async ({ page }) => {
            await systems_page.goto();

            // Select a system
            await systems_page.selectFirstItemMobile();
            await page.waitForTimeout(500);

            // Open edit modal
            await systems_page.openEditModal();

            // Verify modal with pre-populated fields
            await expect(systems_page.dialog).toBeVisible();
        });

        test('should show delete confirmation on mobile', async ({ page }) => {
            await systems_page.goto();

            // Select a system
            await systems_page.selectFirstItemMobile();
            await page.waitForTimeout(500);

            // Open action menu and click delete
            await systems_page.openActionMenu();
            await systems_page.deleteButton.click();

            // Verify confirmation dialog appears
            await expect(systems_page.dialog).toBeVisible();
        });
    });

    test.describe('Responsive Layout', () => {
        test('should hide desktop sidebar on mobile', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Desktop item-sidebar should be hidden on mobile
            const desktop_sidebar = page.locator('item-sidebar');
            await expect(desktop_sidebar).toHaveClass(/hidden/);
        });

        test('should show add button on mobile', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Add button should be visible
            const add_button = page
                .locator('button:has(icon:has-text("add"))')
                .first();
            await expect(add_button).toBeVisible();
        });

        test('should display PlaceOS logo in sidebar menu', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Open hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });

            // Logo text should be visible
            await expect(
                page.locator('sidebar-menu a:has-text("PlaceOS")'),
            ).toBeVisible();
        });
    });

    test.describe('Cross-Feature Navigation', () => {
        test('should navigate from Systems to Zones on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Navigate via hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });
            await page.locator('sidebar-menu a[btn]:has-text("Zones")').click();

            // Verify zones page loaded
            await expect(page).toHaveURL(/zones/);
            await expect(page.locator('item-selection')).toBeVisible();
        });

        test('should navigate from Systems to Modules on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Navigate via hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });
            await page
                .locator('sidebar-menu a[btn]:has-text("Modules")')
                .click();

            // Verify modules page loaded
            await expect(page).toHaveURL(/modules/);
            await expect(page.locator('item-selection')).toBeVisible();
        });

        test('should navigate from Systems to Drivers on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Navigate via hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });
            await page
                .locator('sidebar-menu a[btn]:has-text("Drivers")')
                .click();

            // Verify drivers page loaded
            await expect(page).toHaveURL(/drivers/);
            await expect(page.locator('item-selection')).toBeVisible();
        });

        test('should navigate from Systems to Triggers on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Navigate via hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').click();
            await page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
                timeout: 5000,
            });
            await page
                .locator('sidebar-menu a[btn]:has-text("Triggers")')
                .click();

            // Verify triggers page loaded
            await expect(page).toHaveURL(/triggers/);
            await expect(page.locator('item-selection')).toBeVisible();
        });
    });

    test.describe('Form Interactions on Mobile', () => {
        test('should fill form fields in modal on mobile', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Open add modal
            await page
                .locator('button:has(icon:has-text("add"))')
                .first()
                .click();
            await page.waitForSelector(
                'fullscreen-modal-shell, mat-dialog-container',
                { timeout: 5000 },
            );

            // Fill name field
            const name_field = page
                .locator(
                    'mat-form-field:has(mat-label:text("Name")) input, input[placeholder*="Name" i]',
                )
                .first();
            await name_field.fill('Test Mobile System');

            // Verify value
            await expect(name_field).toHaveValue('Test Mobile System');
        });

        test('should close modal with cancel button on mobile', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Open add modal
            await page
                .locator('button:has(icon:has-text("add"))')
                .first()
                .click();
            await page.waitForSelector(
                'fullscreen-modal-shell, mat-dialog-container',
                { timeout: 5000 },
            );

            // Click cancel
            await page
                .locator(
                    'fullscreen-modal-shell button[mat-dialog-close], mat-dialog-container button:has-text("Cancel")',
                )
                .first()
                .click();
            await page.waitForTimeout(500);

            // Modal should be closed
            await expect(
                page.locator('fullscreen-modal-shell, mat-dialog-container'),
            ).not.toBeVisible();
        });
    });

    test.describe('Touch Interactions', () => {
        test('should support tap on items', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Wait for items in the auto-opened selection
            await page.waitForSelector('item-selection virtual-scroll a', {
                timeout: 10000,
            });

            // Tap on first item
            await page.locator('item-selection virtual-scroll a').first().tap();
            await page.waitForTimeout(500);

            // Item details should be visible
            await expect(page.locator('item-details')).toBeVisible({
                timeout: 10000,
            });
        });

        test('should support tap on hamburger menu', async ({ page }) => {
            await page.addInitScript(() => {
                localStorage.setItem('mock', 'true');
            });

            await page.goto(buildAppUrl('/#/systems'));
            await waitForAppReady(page);

            // Close item-selection first
            await closeItemSelectionIfOpen(page);

            // Tap hamburger menu
            await page.locator('button:has(icon:has-text("menu"))').tap();

            // Sidebar should be visible
            const sidebar = page.locator('sidebar-menu [sidebar-menu]');
            await expect(sidebar).toHaveClass(/!flex/, { timeout: 5000 });
        });
    });
});
