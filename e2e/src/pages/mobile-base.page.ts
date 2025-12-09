import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Mobile Base Page Object
 *
 * Extends BasePage with mobile-specific interactions.
 * On mobile:
 * - sidebar-menu is hidden and accessed via hamburger menu
 * - item-sidebar is hidden, items are selected via item-selection overlay
 * - item-selection component provides search/select functionality
 */
export abstract class MobileBasePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Get the hamburger menu button (visible only on mobile)
     */
    get hamburgerMenuButton(): Locator {
        return this.page.locator('button:has(icon:has-text("menu"))').first();
    }

    /**
     * Get the sidebar menu overlay
     */
    get sidebarMenuOverlay(): Locator {
        return this.page.locator('sidebar-menu [sidebar-menu]');
    }

    /**
     * Get the close button in sidebar menu
     */
    get sidebarCloseButton(): Locator {
        return this.page.locator(
            'sidebar-menu button:has(icon:has-text("close"))',
        );
    }

    /**
     * Get the item selection component (mobile search/select overlay)
     */
    get itemSelectionComponent(): Locator {
        return this.page.locator('item-selection');
    }

    /**
     * Get the item selection trigger button
     */
    get itemSelectionTrigger(): Locator {
        return this.page.locator('item-selection > div > button').first();
    }

    /**
     * Get the item selection search input
     */
    get itemSelectionSearchInput(): Locator {
        return this.page.locator('item-selection input');
    }

    /**
     * Get the item selection overlay/modal
     */
    get itemSelectionOverlay(): Locator {
        return this.page.locator('item-selection > div.absolute.left-1\\/2');
    }

    /**
     * Get items in the item selection list
     */
    get itemSelectionItems(): Locator {
        return this.page.locator(
            'item-selection cdk-virtual-scroll-viewport a',
        );
    }

    /**
     * Open the hamburger menu (sidebar)
     */
    async openHamburgerMenu(): Promise<void> {
        await this.hamburgerMenuButton.click();
        // Wait for sidebar to be visible
        await this.page.waitForSelector('sidebar-menu [sidebar-menu].\\!flex', {
            timeout: 5000,
        });
    }

    /**
     * Close the hamburger menu
     */
    async closeHamburgerMenu(): Promise<void> {
        await this.sidebarCloseButton.click();
        await this.page.waitForTimeout(300);
    }

    /**
     * Navigate to a feature via the hamburger menu
     */
    async navigateViaMenu(linkText: string): Promise<void> {
        await this.openHamburgerMenu();
        await this.page
            .locator(`sidebar-menu a[btn]:has-text("${linkText}")`)
            .click();
        await this.waitForLoad();
    }

    /**
     * Open the item selection overlay
     */
    async openItemSelection(): Promise<void> {
        await this.itemSelectionTrigger.click();
        await this.page.waitForSelector('item-selection input', {
            timeout: 5000,
        });
    }

    /**
     * Search for an item in the mobile item selection
     */
    async searchMobile(query: string): Promise<void> {
        // The selection overlay might already be open, or we need to open it
        const input = this.itemSelectionSearchInput;
        if (!(await input.isVisible())) {
            await this.openItemSelection();
        }
        await input.fill(query);
        await this.page.waitForTimeout(500); // Wait for debounce
    }

    /**
     * Select an item from the mobile item selection list
     */
    async selectItemMobile(name: string): Promise<void> {
        // Ensure selection overlay is open
        const input = this.itemSelectionSearchInput;
        if (!(await input.isVisible())) {
            await this.openItemSelection();
        }

        // Wait for items to load
        await this.page.waitForSelector(
            'item-selection cdk-virtual-scroll-viewport a',
            { timeout: 10000 },
        );

        // Click on the item
        await this.page
            .locator(
                `item-selection cdk-virtual-scroll-viewport a:has-text("${name}")`,
            )
            .first()
            .click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Select the first item from the mobile item selection list
     */
    async selectFirstItemMobile(): Promise<void> {
        // Ensure selection overlay is open
        const input = this.itemSelectionSearchInput;
        if (!(await input.isVisible())) {
            await this.openItemSelection();
        }

        // Wait for items to load
        await this.page.waitForSelector(
            'item-selection cdk-virtual-scroll-viewport a',
            { timeout: 10000 },
        );

        // Click on the first item
        await this.itemSelectionItems.first().click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Close the item selection overlay by pressing Escape
     */
    async closeItemSelection(): Promise<void> {
        await this.page.keyboard.press('Escape');
        await this.page.waitForTimeout(300);
    }

    /**
     * Wait for the mobile page to load
     */
    override async waitForLoad(): Promise<void> {
        // Wait for loader to disappear
        await this.page
            .waitForSelector('[loader]', { state: 'detached', timeout: 30000 })
            .catch(() => {});

        // Wait for router outlet
        await this.page.waitForSelector('router-outlet', {
            state: 'attached',
            timeout: 30000,
        });

        // On mobile, wait for item-selection component
        await this.page
            .waitForSelector('item-selection', { timeout: 30000 })
            .catch(() => {});

        // Wait for any progress bars to complete
        await this.page.waitForTimeout(500);
    }

    /**
     * Verify item selection list is visible
     */
    async expectItemSelectionVisible(): Promise<void> {
        await expect(this.itemSelectionOverlay).toBeVisible();
    }

    /**
     * Verify item selection has items
     */
    async expectItemSelectionHasItems(): Promise<void> {
        await expect(this.itemSelectionItems.first()).toBeVisible({
            timeout: 10000,
        });
    }

    /**
     * Get count of items in item selection
     */
    async getItemSelectionCount(): Promise<number> {
        return await this.itemSelectionItems.count();
    }
}
