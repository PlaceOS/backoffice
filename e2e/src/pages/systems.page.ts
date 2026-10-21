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

    /** Start control on the about tab */
    get startButton(): Locator {
        return this.page.locator('button[start]').first();
    }

    /** Stop control on the about tab */
    get stopButton(): Locator {
        return this.page.locator('button[stop]').first();
    }

    /** Name field of the open create/edit modal */
    get nameField(): Locator {
        return this.dialog.getByPlaceholder('System Name');
    }

    /**
     * Get the module selector used by execute method controls
     */
    get executeModuleSelect(): Locator {
        return this.page.locator('select-system-module mat-select').first();
    }

    /**
     * Get the module search input inside the open module selector overlay
     */
    get executeModuleSearchInput(): Locator {
        return this.page.locator('input[name="module-search"]').first();
    }

    /**
     * Pick a zone in the zone field of the open create/edit modal
     */
    async selectZone(zone_name: string): Promise<void> {
        const zone_input = this.dialog
            .locator('item-search-field input[name="item-search"]')
            .first();
        await zone_input.fill(zone_name);
        await this.page
            .locator('mat-option')
            .filter({ hasText: zone_name })
            .first()
            .click();
    }

    /**
     * Open the execute module selector and filter available modules
     */
    async searchExecuteModules(query: string): Promise<void> {
        await this.executeModuleSelect.click();
        await expect(this.executeModuleSearchInput).toBeVisible();
        await this.executeModuleSearchInput.fill(query);
    }
}
