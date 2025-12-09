import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for the Domains section
 */
export class DomainsPage extends BasePage {
    readonly path = '/#/domains';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Get the domains list items
     */
    get domainsList(): Locator {
        return this.sidebarItems;
    }

    /**
     * Get the applications tab
     */
    get applicationsTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Application"), [role="tab"]:has-text("Application")',
            )
            .first();
    }

    /**
     * Get the users tab
     */
    get usersTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Users"), [role="tab"]:has-text("Users")',
            )
            .first();
    }

    /**
     * Get the auth sources tab
     */
    get authSourcesTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Auth"), item-tablist a:has-text("Authentication"), [role="tab"]:has-text("Auth")',
            )
            .first();
    }

    /**
     * Get the extensions tab
     */
    get extensionsTab(): Locator {
        return this.page
            .locator(
                'item-tablist a:has-text("Extension"), [role="tab"]:has-text("Extension")',
            )
            .first();
    }

    /**
     * Get domain name display
     */
    get domainName(): Locator {
        return this.page.locator('item-details [name]').first();
    }

    /**
     * Get user count display
     */
    get userCount(): Locator {
        return this.page
            .locator('[class*="count"], :text("Users") ~ *')
            .first();
    }

    /**
     * Get the add OAuth button
     */
    get addOAuthButton(): Locator {
        return this.page
            .locator('button:has-text("OAuth"), button:has-text("Add OAuth")')
            .first();
    }

    /**
     * Get the add SAML button
     */
    get addSAMLButton(): Locator {
        return this.page
            .locator('button:has-text("SAML"), button:has-text("Add SAML")')
            .first();
    }

    /**
     * Get the add LDAP button
     */
    get addLDAPButton(): Locator {
        return this.page
            .locator('button:has-text("LDAP"), button:has-text("Add LDAP")')
            .first();
    }

    /**
     * Create a new domain
     */
    async createDomain(data: {
        name: string;
        domain: string;
        description?: string;
        login_url?: string;
        logout_url?: string;
    }): Promise<void> {
        await this.openAddModal();

        await this.fillField('Name', data.name);

        // Domain Name field has specific placeholder - use that to find it
        const domainField = this.page
            .locator(
                'input[placeholder*="Domain e.g."], input[placeholder*="www.google.com"]',
            )
            .first();
        await domainField.fill(data.domain);

        if (data.description) {
            await this.fillField('Description', data.description);
        }

        if (data.login_url) {
            await this.fillField('Login', data.login_url);
        }

        if (data.logout_url) {
            await this.fillField('Logout', data.logout_url);
        }

        await this.save();
    }

    /**
     * Edit the current domain
     */
    async editDomain(data: {
        name?: string;
        domain?: string;
        description?: string;
    }): Promise<void> {
        await this.openEditModal();

        if (data.name) {
            await this.fillField('Name', data.name);
        }

        if (data.domain) {
            await this.fillField('Domain', data.domain);
        }

        if (data.description) {
            await this.fillField('Description', data.description);
        }

        await this.save();
    }

    /**
     * View OAuth applications
     */
    async viewApplications(): Promise<void> {
        await this.applicationsTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View domain users
     */
    async viewUsers(): Promise<void> {
        await this.usersTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View authentication sources
     */
    async viewAuthSources(): Promise<void> {
        await this.authSourcesTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * View extensions
     */
    async viewExtensions(): Promise<void> {
        await this.extensionsTab.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Add an OAuth application
     */
    async addOAuthApplication(data: {
        name: string;
        redirect_uri: string;
        scopes?: string[];
    }): Promise<void> {
        await this.viewApplications();
        await this.page.locator('button:has-text("Add")').first().click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);
        await this.fillField('Redirect', data.redirect_uri);

        await this.save();
    }

    /**
     * Add an OAuth authentication source
     */
    async addOAuthSource(data: {
        name: string;
        client_id: string;
        client_secret: string;
        site?: string;
    }): Promise<void> {
        await this.viewAuthSources();
        await this.addOAuthButton.click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);
        await this.fillField('Client ID', data.client_id);
        await this.fillField('Secret', data.client_secret);

        if (data.site) {
            await this.fillField('Site', data.site);
        }

        await this.save();
    }

    /**
     * Assert domain details are visible
     */
    async expectDomainDetails(name: string): Promise<void> {
        await expect(
            this.page
                .locator(
                    `item-details [name]:has-text("${name}"), item-details:has-text("${name}")`,
                )
                .first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert domain is in the list
     */
    async expectDomainInList(name: string): Promise<void> {
        await expect(
            this.domainsList.filter({ hasText: name }).first(),
        ).toBeVisible({ timeout: 10000 });
    }

    /**
     * Assert domain is not in the list
     */
    async expectDomainNotInList(name: string): Promise<void> {
        await expect(
            this.domainsList.filter({ hasText: name }).first(),
        ).not.toBeVisible({ timeout: 5000 });
    }
}
