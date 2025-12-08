import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for the Users section
 */
export class UsersPage extends BasePage {
    readonly path = '/#/users';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Get the users list items
     */
    get usersList(): Locator {
        return this.sidebarItems;
    }

    /**
     * Get the metadata tab
     */
    get metadataTab(): Locator {
        return this.page.locator('item-tablist a:has-text("Metadata"), [role="tab"]:has-text("Metadata")').first();
    }

    /**
     * Get the history tab
     */
    get historyTab(): Locator {
        return this.page.locator('item-tablist a:has-text("History"), [role="tab"]:has-text("History")').first();
    }

    /**
     * Get the groups tab
     */
    get groupsTab(): Locator {
        return this.page.locator('item-tablist a:has-text("Groups"), [role="tab"]:has-text("Groups")').first();
    }

    /**
     * Get user name display
     */
    get userName(): Locator {
        return this.page.locator('item-details [name]').first();
    }

    /**
     * Get user email display
     */
    get userEmail(): Locator {
        return this.page.locator('[class*="email"], text=@').first();
    }

    /**
     * Get user status indicator
     */
    get userStatus(): Locator {
        return this.page.locator('[class*="status"], mat-chip').first();
    }

    /**
     * Get the disable/enable button
     */
    get toggleStatusButton(): Locator {
        return this.page.locator('button:has-text("Disable"), button:has-text("Enable")').first();
    }

    /**
     * Create a new user
     */
    async createUser(data: {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        domain?: string;
        admin?: boolean;
        support?: boolean;
    }): Promise<void> {
        await this.openAddModal();

        // Fill required fields
        await this.fillField('First Name', data.first_name);
        await this.fillField('Last Name', data.last_name);
        await this.fillField('Email', data.email);

        // Fill password fields - use accessible name within dialog to avoid hidden fake password field
        const passwordField = this.dialog.getByRole('textbox', { name: 'Password', exact: true });
        await passwordField.fill(data.password);
        const confirmPasswordField = this.dialog.getByRole('textbox', { name: 'Confirm Password' });
        await confirmPasswordField.fill(data.password);

        if (data.domain) {
            await this.selectDropdown('Domain', data.domain);
        }

        if (data.admin) {
            await this.toggleCheckbox('System Admin');
        }

        if (data.support) {
            await this.toggleCheckbox('PlaceOS Support');
        }

        await this.save();
    }

    /**
     * Edit the current user
     */
    async editUser(data: {
        name?: string;
        email?: string;
        admin?: boolean;
        support?: boolean;
    }): Promise<void> {
        await this.openEditModal();

        if (data.name) {
            await this.fillField('Name', data.name);
        }

        if (data.email) {
            await this.fillField('Email', data.email);
        }

        if (data.admin !== undefined) {
            await this.toggleCheckbox('Admin');
        }

        if (data.support !== undefined) {
            await this.toggleCheckbox('Support');
        }

        await this.save();
    }

    /**
     * Toggle user enabled/disabled status
     */
    async toggleUserStatus(): Promise<void> {
        await this.toggleStatusButton.click();
        await this.page.waitForTimeout(1000);
    }

    /**
     * View user metadata
     */
    async viewMetadata(): Promise<void> {
        await this.metadataTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View user history
     */
    async viewHistory(): Promise<void> {
        await this.historyTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View user groups
     */
    async viewGroups(): Promise<void> {
        await this.groupsTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Filter users by domain
     */
    async filterByDomain(domain: string): Promise<void> {
        const domainFilter = this.page.locator('mat-select[placeholder*="Domain"], mat-select:near(:text("Domain"))').first();
        await domainFilter.click();
        await this.page.locator(`mat-option:has-text("${domain}")`).first().click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Assert user details are visible
     */
    async expectUserDetails(name: string): Promise<void> {
        await expect(this.page.locator(`item-details [name]:has-text("${name}"), item-details:has-text("${name}")`).first()).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert user email is displayed
     */
    async expectUserEmail(email: string): Promise<void> {
        await expect(this.page.locator(`text=${email}`)).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert user is in the list
     */
    async expectUserInList(name: string): Promise<void> {
        await expect(this.usersList.filter({ hasText: name }).first()).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert user is not in the list
     */
    async expectUserNotInList(name: string): Promise<void> {
        await expect(this.usersList.filter({ hasText: name }).first()).not.toBeVisible({ timeout: 5000 });
    }

    /**
     * Assert user status
     */
    async expectUserStatus(status: 'active' | 'disabled'): Promise<void> {
        if (status === 'active') {
            await expect(this.toggleStatusButton.locator(':has-text("Disable")')).toBeVisible();
        } else {
            await expect(this.toggleStatusButton.locator(':has-text("Enable")')).toBeVisible();
        }
    }
}
