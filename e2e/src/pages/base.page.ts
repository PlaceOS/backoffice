import { Locator, Page, expect } from '@playwright/test';
import { buildAppUrl } from '../config/test-env';

/**
 * Base Page Object for the list/detail layout every section shares:
 * a searchable item list (`item-sidebar`), the selected item's header
 * (`item-details`) with an action menu, and its tabs (`item-tablist`).
 */
export abstract class BasePage {
    readonly page: Page;
    abstract readonly path: string;

    constructor(page: Page) {
        this.page = page;
    }

    /** Route segment of the feature, e.g. `zones` for `/#/zones` */
    get feature(): string {
        return this.path.replace(/^\/#\//, '').split('/')[0];
    }

    /**
     * Navigate to this page
     */
    async goto(): Promise<void> {
        await this.page.goto(buildAppUrl(this.path));
        await this.waitForLoad();
    }

    /**
     * Open an item directly on one of its tabs
     */
    async gotoItem(id: string, tab = 'about'): Promise<void> {
        await this.page.goto(buildAppUrl(`/#/${this.feature}/${id}/${tab}`));
        await this.waitForLoad();
        await this.waitForItemDetails();
    }

    /**
     * Wait for the app shell to render
     */
    async waitForLoad(): Promise<void> {
        await this.page.locator('sidebar-menu').waitFor({ timeout: 30000 });
    }

    /**
     * Wait for the selected item's header to render
     */
    async waitForItemDetails(): Promise<void> {
        await this.itemName.waitFor();
    }

    // Item list

    /** Search field of the item list */
    get searchInput(): Locator {
        return this.page.locator('item-sidebar').getByPlaceholder(/^Search/);
    }

    /** Rendered entries of the item list. It is virtual, so long lists are cut */
    get sidebarItems(): Locator {
        return this.page.locator('item-sidebar a');
    }

    /** Entries of the item list whose text contains `name` */
    itemLink(name: string): Locator {
        return this.sidebarItems.filter({ hasText: name });
    }

    async search(query: string): Promise<void> {
        // Entering a section clears the search, so wait for the first list
        await this.sidebarItems.first().waitFor();
        await this.searchInput.fill(query);
    }

    async clearSearch(): Promise<void> {
        await this.searchInput.clear();
    }

    /** Floating button that opens the create modal */
    get addButton(): Locator {
        return this.page
            .locator(
                'button:has(icon i:text("add")), button:has(icon:has-text("add"))',
            )
            .first();
    }

    // Selected item

    /** Header of the selected item */
    get itemDetails(): Locator {
        return this.page.locator('item-details').first();
    }

    /** Name in the header of the selected item */
    get itemName(): Locator {
        return this.page.locator('item-details [name]').first();
    }

    /** Content of the active item tab */
    get tabContent(): Locator {
        return this.page.locator('item-tablist ~ div').first();
    }

    /** Spinner of the metadata tab */
    get metadataLoadingSpinner(): Locator {
        return this.page.locator('metadata-display mat-spinner').first();
    }

    /**
     * Open a tab of the selected item by its route id and wait for the route
     */
    async openTab(id: string): Promise<void> {
        const tab = this.page.locator(`item-tablist a[href*="/${id}"]`).first();
        // A click on a tab that is partly out of view only scrolls the tab
        // bar, so focus it first to bring it fully into view
        await tab.focus();
        await expect(tab).toBeInViewport({ ratio: 0.9 });
        await tab.click();
        await expect(this.page).toHaveURL(new RegExp(`/${id}(\\?.*)?$`));
    }

    /** Open the action menu in the header of the selected item */
    async openActionMenu(): Promise<void> {
        await this.page
            .locator('item-details button:has(icon:has-text("more_vert"))')
            .first()
            .click();
        await expect(this.page.locator('.mat-mdc-menu-panel')).toBeVisible();
    }

    /** Edit entry of the action menu */
    get editButton(): Locator {
        return this.page
            .locator('button[mat-menu-item]:has(icon:has-text("edit"))')
            .first();
    }

    /** Delete entry of the action menu */
    get deleteButton(): Locator {
        return this.page
            .locator('button[mat-menu-item]:has(icon:has-text("delete"))')
            .first();
    }

    // Create and edit modals

    /** The open modal */
    get dialog(): Locator {
        return this.page
            .locator('fullscreen-modal-shell, mat-dialog-container')
            .first();
    }

    /** Save button in the footer of the open modal */
    get saveButton(): Locator {
        return this.dialog.getByRole('button', { name: /^Save/ });
    }

    async openAddModal(): Promise<void> {
        await this.addButton.click();
        await expect(this.dialog).toBeVisible();
    }

    async openEditModal(): Promise<void> {
        await this.openActionMenu();
        await this.editButton.click();
        await expect(this.dialog).toBeVisible();
    }

    /** Close the open modal after an edit and confirm the changes are lost */
    async discardChanges(): Promise<void> {
        await this.dialog.getByRole('button', { name: 'Close' }).click();
        await expect(
            this.page.getByRole('heading', { name: 'Discard changes?' }),
        ).toBeVisible();
        await this.page.getByRole('button', { name: 'Discard' }).click();
        await expect(this.page.locator('mat-dialog-container')).toHaveCount(0);
    }

    /**
     * Open the create modal, fill it with `fill` and save it.
     * Resolves with the id of the new item from the URL the app opens.
     */
    async createWith(fill: () => Promise<void>): Promise<string> {
        await this.openAddModal();
        await fill();
        await this.saveButton.click();
        await expect(this.dialog).toBeHidden({ timeout: 10000 });
        const url = new RegExp(`#/${this.feature}/([^/]+)/about`);
        await expect(this.page).not.toHaveURL(
            new RegExp(`#/${this.feature}/-/`),
        );
        await expect(this.page).toHaveURL(url);
        return decodeURIComponent(this.page.url().match(url)?.[1] || '');
    }

    // Delete confirmation

    /** Accept button of the confirmation modal */
    get acceptButton(): Locator {
        return this.page.locator('confirm-modal button[name="accept"]');
    }

    /** "Also delete associated resources" checkbox */
    get cascadeCheckbox(): Locator {
        return this.page.locator(
            'confirm-modal [confirm-option] input[type="checkbox"]',
        );
    }

    /** Resolved list of what the cascade would remove */
    get cascadeSummary(): Locator {
        return this.page.locator('confirm-modal [details-summary]');
    }

    /** "Nothing else to remove" message */
    get cascadeEmpty(): Locator {
        return this.page.locator('confirm-modal [details-empty]');
    }

    /** Lines describing what the cascade will leave alone */
    get cascadeWarnings(): Locator {
        return this.page.locator('confirm-modal [details-warning]');
    }

    /**
     * Open the delete confirmation without confirming it
     */
    async openDeleteConfirmation(): Promise<void> {
        await this.openActionMenu();
        await this.deleteButton.click();
        await expect(this.page.locator('confirm-modal')).toBeVisible();
    }

    /**
     * Enable the cascade option and wait for its breakdown to resolve
     */
    async enableCascade(): Promise<void> {
        await this.cascadeCheckbox.click();
        await this.page
            .locator(
                'confirm-modal [details-summary], confirm-modal [details-empty]',
            )
            .first()
            .waitFor({ timeout: 20000 });
    }

    /**
     * Delete the selected item through the action menu and wait for the app
     * to return to the empty list view
     */
    async deleteSelected(): Promise<void> {
        await this.openDeleteConfirmation();
        await this.acceptButton.click();
        await expect(this.page.locator('confirm-modal')).toHaveCount(0, {
            timeout: 15000,
        });
        await expect(this.page).toHaveURL(new RegExp(`#/${this.feature}/-`));
    }

    // Shared widgets

    /** Snack bar notification with `text`. An old one can still be closing. */
    notification(text: string): Locator {
        return this.page
            .locator('mat-snack-bar-container')
            .filter({ hasText: text });
    }

    /**
     * Cells of the table row that contains `text`, in the active tab unless
     * `scope` is given. Table cells only carry their row index, so the row is
     * found by the index of the matching cell.
     */
    async tableRow(text: string, scope = this.tabContent): Promise<Locator> {
        const cell = scope.locator('[data-row]').filter({ hasText: text });
        await expect(cell).toHaveCount(1);
        const index = await cell.getAttribute('data-row');
        return scope.locator(`[data-row="${index}"]`);
    }
}
