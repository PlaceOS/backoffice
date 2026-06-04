import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for the Zones section
 */
export class ZonesPage extends BasePage {
    readonly path = '/#/zones';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Get the zones list items
     */
    get zonesList(): Locator {
        return this.sidebarItems;
    }

    /**
     * Get the children tab
     */
    get childrenTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Children"), [role="tab"]:has-text("Children")',
            )
            .first();
    }

    /**
     * Get the systems tab
     */
    get systemsTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Systems"), [role="tab"]:has-text("Systems")',
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
                'item-tablist a[href*="/metadata"]:has-text("Metadata"), a[role="tab"][href*="/metadata"]:has-text("Metadata")',
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
     * Get zone name display
     */
    get zoneName(): Locator {
        return this.page.locator('item-details [name]').first();
    }

    /**
     * Get parent zone display
     */
    get parentZone(): Locator {
        return this.page
            .locator('[class*="parent"], :text("Parent") ~ *')
            .first();
    }

    /**
     * Get system count
     */
    get systemCount(): Locator {
        return this.page
            .locator('[class*="count"], :text("Systems") ~ *')
            .first();
    }

    /**
     * Get metadata list loading spinner
     */
    get metadataLoadingSpinner(): Locator {
        return this.page.locator('metadata-display mat-spinner').first();
    }

    /**
     * Create a new zone
     */
    async createZone(data: {
        name: string;
        display_name?: string;
        description?: string;
        parent?: string;
        tags?: string;
    }): Promise<void> {
        await this.openAddModal();

        await this.fillField('Name', data.name);

        if (data.display_name) {
            await this.fillField('Display', data.display_name);
        }

        if (data.description) {
            await this.fillField('Description', data.description);
        }

        if (data.parent) {
            await this.selectDropdown('Parent', data.parent);
        }

        if (data.tags) {
            await this.fillField('Tags', data.tags);
        }

        await this.save();
    }

    /**
     * Edit the current zone
     */
    async editZone(data: {
        name?: string;
        display_name?: string;
        description?: string;
        parent?: string;
        tags?: string;
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

        if (data.parent) {
            await this.selectDropdown('Parent', data.parent);
        }

        if (data.tags) {
            await this.fillField('Tags', data.tags);
        }

        await this.save();
    }

    /**
     * View child zones
     */
    async viewChildren(): Promise<void> {
        await this.childrenTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View systems in zone
     */
    async viewSystems(): Promise<void> {
        await this.systemsTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View zone triggers
     */
    async viewTriggers(): Promise<void> {
        await this.triggersTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View zone metadata
     */
    async viewMetadata(): Promise<void> {
        await this.metadataTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View zone history
     */
    async viewHistory(): Promise<void> {
        await this.historyTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Assert zone details are visible
     */
    async expectZoneDetails(name: string): Promise<void> {
        await expect(
            this.page
                .locator(
                    `item-details [name]:has-text("${name}"), item-details:has-text("${name}")`,
                )
                .first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert zone is in the list
     */
    async expectZoneInList(name: string): Promise<void> {
        await expect(
            this.zonesList.filter({ hasText: name }).first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert zone is not in the list
     */
    async expectZoneNotInList(name: string): Promise<void> {
        await expect(
            this.zonesList.filter({ hasText: name }).first(),
        ).not.toBeVisible({ timeout: 5000 });
    }

    /**
     * Assert parent zone is displayed
     */
    async expectParentZone(parentName: string): Promise<void> {
        await expect(this.page.locator(`text=${parentName}`)).toBeVisible({
            timeout: 10000,
        });
    }

    /**
     * Assert child zones are displayed
     */
    async expectChildZones(count: number): Promise<void> {
        await this.viewChildren();
        const children = this.page.locator('.child-zone, [class*="child"]');
        await expect(children).toHaveCount(count);
    }
}
