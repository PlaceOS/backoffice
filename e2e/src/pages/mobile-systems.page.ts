import { Locator, Page, expect } from '@playwright/test';
import { MobileBasePage } from './mobile-base.page';

/**
 * Mobile Systems Page Object
 *
 * Provides mobile-specific interactions for the Systems feature.
 */
export class MobileSystemsPage extends MobileBasePage {
    readonly path = '/#/systems';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Get the systems list in item selection
     */
    get systemsList(): Locator {
        return this.itemSelectionItems;
    }

    /**
     * Create a new system (opens modal)
     */
    async createSystem(data: {
        name: string;
        description?: string;
    }): Promise<void> {
        await this.openAddModal();
        await this.fillField('Name', data.name);
        if (data.description) {
            await this.fillField('Description', data.description);
        }
        await this.save();
    }

    /**
     * Verify a system appears in the item selection list
     */
    async expectSystemInList(name: string): Promise<void> {
        await this.openItemSelection();
        await expect(
            this.page
                .locator(
                    `item-selection cdk-virtual-scroll-viewport a:has-text("${name}")`,
                )
                .first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Navigate to a specific tab in system details
     */
    async viewModules(): Promise<void> {
        await this.navigateToTab('Modules');
    }

    async viewZones(): Promise<void> {
        await this.navigateToTab('Zones');
    }

    async viewTriggers(): Promise<void> {
        await this.navigateToTab('Triggers');
    }

    async viewMetadata(): Promise<void> {
        await this.navigateToTab('Metadata');
    }

    async viewHistory(): Promise<void> {
        await this.navigateToTab('History');
    }

    /**
     * Get start button
     */
    get startButton(): Locator {
        return this.page
            .locator(
                'button:has-text("Start"), button:has(icon:has-text("play_arrow"))',
            )
            .first();
    }

    /**
     * Get stop button
     */
    get stopButton(): Locator {
        return this.page
            .locator(
                'button:has-text("Stop"), button:has(icon:has-text("stop"))',
            )
            .first();
    }
}
