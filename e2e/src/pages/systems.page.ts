import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for the Systems section
 */
export class SystemsPage extends BasePage {
    readonly path = '/#/systems';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Get the systems list items
     */
    get systemsList(): Locator {
        return this.sidebarItems;
    }

    /**
     * Get the modules tab
     */
    get modulesTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Modules"), [role="tab"]:has-text("Modules")',
            )
            .first();
    }

    /**
     * Get the zones tab
     */
    get zonesTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Zones"), [role="tab"]:has-text("Zones")',
            )
            .first();
    }

    /**
     * Get the triggers tab
     */
    get triggersTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Triggers"), [role="tab"]:has-text("Triggers")',
            )
            .first();
    }

    /**
     * Get the metadata tab
     */
    get metadataTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Metadata"), [role="tab"]:has-text("Metadata")',
            )
            .first();
    }

    /**
     * Get the history tab
     */
    get historyTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("History"), [role="tab"]:has-text("History")',
            )
            .first();
    }

    /**
     * Get the start button
     */
    get startButton(): Locator {
        return this.page.locator('button:has-text("Start")').first();
    }

    /**
     * Get the stop button
     */
    get stopButton(): Locator {
        return this.page.locator('button:has-text("Stop")').first();
    }

    /**
     * Get the add module button
     */
    get addModuleButton(): Locator {
        return this.page
            .locator(
                'button:has-text("Add Module"), button[mattooltip*="module"]',
            )
            .first();
    }

    /**
     * Create a new system
     */
    async createSystem(data: {
        name: string;
        display_name?: string;
        description?: string;
        zone?: string;
        bookable?: boolean;
        email?: string;
    }): Promise<void> {
        await this.openAddModal();

        // Zone is required - select from autocomplete combobox
        if (data.zone) {
            await this.selectZone(data.zone);
        } else {
            // Select first available zone if not specified
            await this.selectFirstZone();
        }

        // Fill required fields
        await this.fillField('Name', data.name);

        if (data.display_name) {
            await this.fillField('Display', data.display_name);
        }

        if (data.description) {
            await this.fillField('Description', data.description);
        }

        if (data.email) {
            await this.fillField('Email', data.email);
        }

        if (data.bookable) {
            await this.toggleCheckbox('Bookable');
        }

        await this.save();
    }

    /**
     * Select a zone from the autocomplete combobox
     */
    async selectZone(zoneName: string): Promise<void> {
        const zoneInput = this.page
            .locator(
                'input[placeholder*="zone" i], combobox[placeholder*="zone" i]',
            )
            .first();
        await zoneInput.click();
        await zoneInput.fill(zoneName);
        await this.page.waitForTimeout(500);
        // Click the matching option
        await this.page
            .locator(`mat-option:has-text("${zoneName}")`)
            .first()
            .click();
    }

    /**
     * Select the first available zone from the dropdown
     */
    async selectFirstZone(): Promise<void> {
        const zoneInput = this.page
            .locator(
                'input[placeholder*="zone" i], combobox[placeholder*="zone" i]',
            )
            .first();
        await zoneInput.click();
        await this.page.waitForTimeout(500);
        // Click the first option
        await this.page.locator('mat-option').first().click();
    }

    /**
     * Edit the current system
     */
    async editSystem(data: {
        name?: string;
        display_name?: string;
        description?: string;
        bookable?: boolean;
        email?: string;
    }): Promise<void> {
        await this.openEditModal();

        if (data.name) {
            await this.fillField('Name', data.name);
        }

        if (data.display_name) {
            await this.fillField('Display', data.display_name);
        }

        if (data.description) {
            await this.fillField('Description', data.description);
        }

        if (data.email) {
            await this.fillField('Email', data.email);
        }

        if (data.bookable !== undefined) {
            await this.toggleCheckbox('Bookable');
        }

        await this.save();
    }

    /**
     * View system modules
     */
    async viewModules(): Promise<void> {
        await this.modulesTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View system zones
     */
    async viewZones(): Promise<void> {
        await this.zonesTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View system triggers
     */
    async viewTriggers(): Promise<void> {
        await this.triggersTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View system metadata
     */
    async viewMetadata(): Promise<void> {
        await this.metadataTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View system history
     */
    async viewHistory(): Promise<void> {
        await this.historyTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Start the system
     */
    async startSystem(): Promise<void> {
        await this.startButton.click();
        await this.page.waitForTimeout(1000);
    }

    /**
     * Stop the system
     */
    async stopSystem(): Promise<void> {
        await this.stopButton.click();
        await this.page.waitForTimeout(1000);
    }

    /**
     * Assert system details are visible (looks in item-details component)
     */
    async expectSystemDetails(name: string): Promise<void> {
        await expect(
            this.page
                .locator(
                    `item-details [name]:has-text("${name}"), item-details:has-text("${name}")`,
                )
                .first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert system is in the list
     */
    async expectSystemInList(name: string): Promise<void> {
        await expect(
            this.systemsList.filter({ hasText: name }).first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert system is not in the list
     */
    async expectSystemNotInList(name: string): Promise<void> {
        await expect(
            this.systemsList.filter({ hasText: name }).first(),
        ).not.toBeVisible({ timeout: 5000 });
    }
}
