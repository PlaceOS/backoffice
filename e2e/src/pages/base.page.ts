import { Locator, Page, expect } from '@playwright/test';
import { buildAppUrl } from '../config/test-env';

/**
 * Base Page Object for common functionality across all pages
 */
export abstract class BasePage {
    readonly page: Page;
    abstract readonly path: string;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to this page
     */
    async goto(): Promise<void> {
        await this.page.goto(buildAppUrl(this.path));
        await this.waitForLoad();
    }

    /**
     * Wait for the page to load
     */
    async waitForLoad(): Promise<void> {
        // Wait for loader to disappear
        await this.page
            .waitForSelector('[loader]', { state: 'detached', timeout: 30000 })
            .catch(() => {});

        // Wait for router outlet to be attached (it's an empty element so won't be "visible")
        await this.page.waitForSelector('router-outlet', {
            state: 'attached',
            timeout: 30000,
        });

        // Wait for main content to be visible (sidebar-menu or item-sidebar)
        await this.page
            .waitForSelector('sidebar-menu, item-sidebar', { timeout: 30000 })
            .catch(() => {});

        // Wait for any progress bars to complete
        await this.page.waitForTimeout(500);
    }

    /**
     * Get the sidebar search input
     */
    get searchInput(): Locator {
        return this.page
            .locator(
                'item-sidebar input[placeholder*="earch"], input[placeholder*="earch"]',
            )
            .first();
    }

    /**
     * Get the sidebar list container (visible on current viewport)
     */
    get sidebarList(): Locator {
        // sidebar-menu is always visible, item-sidebar is desktop only
        return this.page.locator('sidebar-menu, item-sidebar').first();
    }

    /**
     * Get sidebar items (works for both desktop and mobile views)
     */
    get sidebarItems(): Locator {
        // Desktop: item-sidebar contains the list with virtual-scroll
        return this.page.locator(
            'item-sidebar a, virtual-scroll a, scroll-item a',
        );
    }

    /**
     * Get the add/new button (floating button at bottom left)
     */
    get addButton(): Locator {
        // The add button is a floating button with a + icon (icon > div > i contains "add")
        return this.page
            .locator(
                'button:has(icon i:text("add")), button:has(icon:has-text("add"))',
            )
            .first();
    }

    /**
     * Get the action menu button (more_vert icon in item-details)
     */
    get actionMenuButton(): Locator {
        return this.page
            .locator('item-details button:has(icon:has-text("more_vert"))')
            .first();
    }

    /**
     * Open the action menu
     */
    async openActionMenu(): Promise<void> {
        await this.actionMenuButton.click();
        // Angular Material MDC menus are in CDK overlay with various class names
        await this.page.waitForSelector(
            '.mat-mdc-menu-panel, .cdk-overlay-pane:has(button[mat-menu-item])',
            { timeout: 5000 },
        );
    }

    /**
     * Get the edit button (inside action menu)
     */
    get editButton(): Locator {
        return this.page
            .locator('button[mat-menu-item]:has(icon:has-text("edit"))')
            .first();
    }

    /**
     * Get the delete button (inside action menu)
     */
    get deleteButton(): Locator {
        return this.page
            .locator('button[mat-menu-item]:has(icon:has-text("delete"))')
            .first();
    }

    /**
     * Get the bulk add button
     */
    get bulkAddButton(): Locator {
        return this.page
            .locator('button:has(icon:has-text("playlist_add"))')
            .first();
    }

    /**
     * Get the dialog/modal container (fullscreen-modal-shell or mat-dialog)
     */
    get dialog(): Locator {
        return this.page
            .locator(
                'fullscreen-modal-shell, mat-dialog-container, [mat-dialog-container]',
            )
            .first();
    }

    /**
     * Get the save button in dialog (footer button)
     */
    get saveButton(): Locator {
        return this.page
            .locator(
                'fullscreen-modal-shell footer button[btn], mat-dialog-container button:has-text("Save"), mat-dialog-container button:has-text("Create")',
            )
            .first();
    }

    /**
     * Get the cancel/close button in dialog
     */
    get cancelButton(): Locator {
        return this.page
            .locator(
                'fullscreen-modal-shell button[mat-dialog-close], mat-dialog-container button:has-text("Cancel")',
            )
            .first();
    }

    /**
     * Get the confirm button in dialog (for delete confirmation etc.)
     */
    get confirmButton(): Locator {
        return this.page
            .locator(
                'mat-dialog-container button:has-text("Ok"), mat-dialog-container button:has-text("Confirm"), mat-dialog-container button:has-text("Yes"), confirm-modal button:has-text("Ok")',
            )
            .first();
    }

    /**
     * Search for an item in the sidebar
     */
    async search(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.page.waitForTimeout(500); // Wait for debounce
    }

    /**
     * Clear the search
     */
    async clearSearch(): Promise<void> {
        await this.searchInput.clear();
        await this.page.waitForTimeout(500);
    }

    /**
     * Select an item from the sidebar by clicking on it
     */
    async selectItem(name: string): Promise<void> {
        await this.page
            .locator(
                `item-sidebar a:has-text("${name}"), virtual-scroll a:has-text("${name}")`,
            )
            .first()
            .click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Select the first item from the sidebar
     */
    async selectFirstItem(): Promise<void> {
        await this.sidebarItems.first().click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Open the add/create modal
     */
    async openAddModal(): Promise<void> {
        await this.addButton.click();
        await this.dialog.waitFor({ timeout: 5000 });
    }

    /**
     * Open the edit modal (requires opening action menu first)
     */
    async openEditModal(): Promise<void> {
        // Wait for item-details to be visible (it's only rendered when an item is selected)
        await this.page.waitForSelector('item-details', { timeout: 10000 });
        await this.openActionMenu();
        await this.editButton.click();
        await this.dialog.waitFor({ timeout: 5000 });
    }

    /**
     * Get the "also delete associated resources" checkbox on the delete
     * confirmation
     */
    get cascadeCheckbox(): Locator {
        return this.page.locator(
            'confirm-modal [confirm-option] input[type="checkbox"]',
        );
    }

    /** Get the resolved list of what the cascade would remove */
    get cascadeSummary(): Locator {
        return this.page.locator('confirm-modal [details-summary]');
    }

    /** Get the "nothing else to remove" message */
    get cascadeEmpty(): Locator {
        return this.page.locator('confirm-modal [details-empty]');
    }

    /** Get the lines describing what the cascade will leave alone */
    get cascadeWarnings(): Locator {
        return this.page.locator('confirm-modal [details-warning]');
    }

    /** Get the confirmation dialog's accept button */
    get acceptButton(): Locator {
        return this.page.locator('confirm-modal button[name="accept"]');
    }

    /**
     * Open the delete confirmation without confirming it
     */
    async openDeleteConfirmation(): Promise<void> {
        await this.page.waitForSelector('item-details', { timeout: 10000 });
        await this.openActionMenu();
        await this.deleteButton.click();
        await this.page.waitForSelector('confirm-modal', { timeout: 5000 });
    }

    /**
     * Enable the cascade option and wait for its breakdown to resolve
     */
    async enableCascade(): Promise<void> {
        await this.cascadeCheckbox.click();
        await this.page.waitForSelector(
            'confirm-modal [details-summary], confirm-modal [details-empty]',
            { timeout: 20000 },
        );
    }

    /**
     * Click delete and confirm (requires opening action menu first)
     */
    async deleteItem(): Promise<void> {
        // Wait for item-details to be visible (it's only rendered when an item is selected)
        await this.page.waitForSelector('item-details', { timeout: 10000 });
        await this.openActionMenu();
        await this.deleteButton.click();
        await this.page.waitForTimeout(300); // Wait for confirmation dialog
        await this.confirmButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Save the current dialog
     */
    async save(): Promise<void> {
        await this.saveButton.click();
        await this.page.waitForTimeout(1000); // Wait for save to complete
    }

    /**
     * Cancel/close the current dialog
     */
    async cancel(): Promise<void> {
        await this.cancelButton.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Navigate to a tab (uses item-tablist)
     */
    async navigateToTab(tabName: string): Promise<void> {
        await this.page
            .locator(
                `item-tablist a:has-text("${tabName}"), [role="tab"]:has-text("${tabName}")`,
            )
            .first()
            .click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Fill a form field by label
     */
    async fillField(label: string, value: string): Promise<void> {
        // Try multiple selectors for form fields
        const field = this.page
            .locator(
                [
                    `mat-form-field:has(mat-label:text("${label}")) input`,
                    `mat-form-field:has(mat-label:text("${label}")) textarea`,
                    `label:has-text("${label}") + input`,
                    `label:has-text("${label}") ~ input`,
                    `input[placeholder*="${label}" i]`,
                    `textarea[placeholder*="${label}" i]`,
                ].join(', '),
            )
            .first();
        await field.fill(value, { timeout: 15000 });
    }

    /**
     * Select from a dropdown by label
     */
    async selectDropdown(label: string, option: string): Promise<void> {
        const select = this.page
            .locator(
                `mat-form-field:has(mat-label:text("${label}")) mat-select, mat-select[placeholder*="${label}" i]`,
            )
            .first();
        await select.click();
        await this.page
            .locator(`mat-option:has-text("${option}")`)
            .first()
            .click();
    }

    /**
     * Toggle a checkbox by label
     */
    async toggleCheckbox(label: string): Promise<void> {
        await this.page
            .locator(
                `mat-checkbox:has-text("${label}"), mat-slide-toggle:has-text("${label}")`,
            )
            .first()
            .click();
    }

    /**
     * Check if snackbar notification appears
     */
    async expectNotification(text: string): Promise<void> {
        await expect(
            this.page.locator(`mat-snack-bar-container:has-text("${text}")`),
        ).toBeVisible({ timeout: 5000 });
    }

    /**
     * Get the main content area (item-details or the content section).
     * Angular components don't have default display styles, so we look for
     * the actual visible content inside them.
     */
    get mainContent(): Locator {
        // Look for item-details (shown when an item is selected) or the main container div
        return this.page
            .locator(
                'item-details, new-systems-view > div, new-zones-view > div, new-users-view > div, new-domains-view > div',
            )
            .first();
    }

    /**
     * Get the item details component
     */
    get itemDetails(): Locator {
        return this.page.locator('item-details').first();
    }

    /**
     * Get tabs container
     */
    get tabList(): Locator {
        return this.page.locator('item-tablist').first();
    }

    /**
     * Check the page loaded without errors
     */
    async expectNoErrors(): Promise<void> {
        const error = await this.page
            .locator('.error-state, [class*="error"]:has-text("Error")')
            .isVisible()
            .catch(() => false);
        expect(error).toBeFalsy();
    }

    /**
     * Wait for item details to be loaded
     */
    async waitForItemDetails(): Promise<void> {
        await this.page
            .locator('item-details [name]')
            .waitFor({ timeout: 10000 });
    }
}
