import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for a list/detail section on a phone sized screen,
 * e.g. `new MobilePage(page, 'systems')`
 *
 * On mobile:
 * - the section menu (`sidebar-menu`) opens from a hamburger button
 * - the item list (`item-sidebar`) is hidden. Items are picked from the
 *   `item-selection` overlay, which opens by itself when nothing is selected
 */
export class MobilePage extends BasePage {
    readonly path: string;

    constructor(page: Page, feature: string) {
        super(page);
        this.path = `/#/${feature}`;
    }

    /** Button that opens the section menu */
    get menuButton(): Locator {
        return this.page.locator('button:has(icon:has-text("menu"))').first();
    }

    /** Section menu panel */
    get menu(): Locator {
        return this.page.locator('sidebar-menu [sidebar-menu]');
    }

    /** Link in the section menu, e.g. `Zones` */
    menuLink(name: string): Locator {
        return this.page
            .locator('sidebar-menu a[btn]')
            .filter({ hasText: name });
    }

    async openMenu(): Promise<void> {
        await this.menuButton.click();
        await expect(this.menu).toHaveClass(/!flex/);
    }

    async closeMenu(): Promise<void> {
        await this.page
            .locator('sidebar-menu button:has(icon:has-text("close"))')
            .click();
        await expect(this.menu).not.toHaveClass(/!flex/);
    }

    /** Search field of the item picker overlay */
    get pickerInput(): Locator {
        return this.page.locator('item-selection input');
    }

    /** Items of the item picker overlay whose text contains `name` */
    pickerItem(name: string): Locator {
        return this.page
            .locator('item-selection virtual-scroll a')
            .filter({ hasText: name });
    }

    /** Re-open the item picker after an item was picked */
    async openPicker(): Promise<void> {
        await this.page.locator('item-selection button.rounded-lg').click();
        await expect(this.pickerInput).toBeVisible();
    }

    /** Search for an item in the picker and pick it */
    async pick(name: string): Promise<void> {
        if (!(await this.pickerInput.isVisible())) await this.openPicker();
        await this.pickerInput.fill(name);
        await this.pickerItem(name).first().click();
        await expect(this.itemName).toHaveText(name);
    }

    override async waitForLoad(): Promise<void> {
        await this.page.waitForSelector('item-selection', { timeout: 30000 });
    }
}
