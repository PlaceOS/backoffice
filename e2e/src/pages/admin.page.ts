import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * Page Object for the Admin section
 *
 * The admin section uses routerLink navigation with tab IDs:
 * about, database, clusters, edge, interfaces, brokers, staff-api,
 * resource-imports, extensions, api-keys, schemas, upload-storage,
 * upload-library, build-jobs
 */
export class AdminPage extends BasePage {
    readonly path = '/#/admin';

    constructor(page: Page) {
        super(page);
    }

    /**
     * Navigate to a specific admin section by route id
     */
    async navigateToSection(routeId: string): Promise<void> {
        await this.page.locator(`a[href*="/admin/${routeId}"]`).first().click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Get the clusters section link (route: /admin/clusters)
     */
    get clustersLink(): Locator {
        return this.page.locator('a[href*="/admin/clusters"]').first();
    }

    /**
     * Get the about section link (route: /admin/about)
     */
    get aboutLink(): Locator {
        return this.page.locator('a[href*="/admin/about"]').first();
    }

    /**
     * Get the database section link (route: /admin/database)
     */
    get databaseLink(): Locator {
        return this.page.locator('a[href*="/admin/database"]').first();
    }

    /**
     * Get the interfaces section link (route: /admin/interfaces)
     */
    get interfacesLink(): Locator {
        return this.page.locator('a[href*="/admin/interfaces"]').first();
    }

    /**
     * Get the brokers section link (route: /admin/brokers)
     */
    get brokersLink(): Locator {
        return this.page.locator('a[href*="/admin/brokers"]').first();
    }

    /**
     * Get the edge section link (route: /admin/edge)
     */
    get edgeLink(): Locator {
        return this.page.locator('a[href*="/admin/edge"]').first();
    }

    /**
     * Get the extensions section link (route: /admin/extensions)
     */
    get extensionsLink(): Locator {
        return this.page.locator('a[href*="/admin/extensions"]').first();
    }

    /**
     * Get the staff API section link (route: /admin/staff-api)
     */
    get staffApiLink(): Locator {
        return this.page.locator('a[href*="/admin/staff-api"]').first();
    }

    /**
     * Get the API keys section link (route: /admin/api-keys)
     */
    get apiKeysLink(): Locator {
        return this.page.locator('a[href*="/admin/api-keys"]').first();
    }

    /**
     * Get the upload storage section link (route: /admin/upload-storage)
     */
    get uploadStorageLink(): Locator {
        return this.page.locator('a[href*="/admin/upload-storage"]').first();
    }

    /**
     * Get the upload library section link (route: /admin/upload-library)
     */
    get uploadLibraryLink(): Locator {
        return this.page.locator('a[href*="/admin/upload-library"]').first();
    }

    /**
     * Get the mailing list section link (route: /admin/mailing-list)
     * NOTE: This tab is currently disabled in the application
     */
    get mailingListLink(): Locator {
        return this.page.locator('a[href*="/admin/mailing-list"]').first();
    }

    /**
     * Get the build jobs section link (route: /admin/build-jobs)
     */
    get buildJobsLink(): Locator {
        return this.page.locator('a[href*="/admin/build-jobs"]').first();
    }

    /**
     * Get the schemas section link (route: /admin/schemas)
     */
    get schemasLink(): Locator {
        return this.page.locator('a[href*="/admin/schemas"]').first();
    }

    /**
     * Override mainContent for admin section.
     * Admin pages use router-outlet within a content div, not item-details.
     * The content is inside app-engine > div > div > div (second child)
     */
    get mainContent(): Locator {
        // Look for admin-specific content components
        return this.page
            .locator(
                'app-engine router-outlet + *, app-engine .flex-1.overflow-auto > *',
            )
            .first();
    }

    /**
     * Wait for admin page content to load
     */
    async waitForAdminContent(): Promise<void> {
        // Wait for the admin navigation to be visible (the sidebar with links)
        await this.page.waitForSelector('a[href*="/admin/about"]', {
            timeout: 10000,
        });
    }

    // Cluster Management

    /**
     * View cluster status
     */
    async viewClusters(): Promise<void> {
        await this.clustersLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Get cluster nodes list
     */
    get clusterNodes(): Locator {
        return this.mainContent.locator(
            '[class*="node"], [class*="cluster-item"]',
        );
    }

    // System Information

    /**
     * View system information
     */
    async viewAbout(): Promise<void> {
        await this.aboutLink.click();
        await this.page.waitForTimeout(500);
    }

    // Database Management

    /**
     * View database details
     */
    async viewDatabase(): Promise<void> {
        await this.databaseLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Get the zone tree export button
     */
    get exportZoneTreeButton(): Locator {
        return this.page.locator('button:has-text("Export Zone Tree")').first();
    }

    /**
     * Get the zone tree import button
     */
    get importZoneTreeButton(): Locator {
        return this.page.locator('button:has-text("Import Zone Tree")').first();
    }

    /**
     * Get the zone tree file input
     */
    get zoneTreeImportInput(): Locator {
        return this.page.locator('input[type="file"][accept*=".csv"]').first();
    }

    /**
     * Open the zone tree export modal
     */
    async openZoneTreeExportModal(): Promise<void> {
        await this.exportZoneTreeButton.click();
        await this.dialog.waitFor({ timeout: 5000 });
    }

    /**
     * Get version info
     */
    get versionInfo(): Locator {
        return this.mainContent
            .locator('[class*="version"], :text("Version") ~ *')
            .first();
    }

    // API Keys Management

    /**
     * View API keys
     */
    async viewApiKeys(): Promise<void> {
        await this.apiKeysLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Generate new API key
     */
    async generateApiKey(data: {
        name: string;
        domain?: string;
    }): Promise<void> {
        await this.viewApiKeys();
        await this.addButton.click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);

        if (data.domain) {
            await this.selectDropdown('Domain', data.domain);
        }

        await this.save();
    }

    /**
     * Get API keys list
     */
    get apiKeysList(): Locator {
        return this.mainContent.locator('[class*="api-key"], table tr');
    }

    /**
     * Get the API key add button
     */
    get apiKeyAddButton(): Locator {
        return this.page.locator('button:has-text("Add App Key")').first();
    }

    /**
     * Select the active domain for API keys
     */
    async selectApiKeyDomain(domain = 'Place Technology'): Promise<void> {
        await this.page
            .locator('admin-api-keys mat-select[name="type"]')
            .click();
        await this.page
            .locator(`mat-option:has-text("${domain}")`)
            .first()
            .click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Get the API key user search input in the modal
     */
    get apiKeyUserSearchInput(): Locator {
        return this.dialog.locator('input#user').first();
    }

    /**
     * Get the API key permissions dropdown in the modal
     */
    get apiKeyPermissionsSelect(): Locator {
        return this.dialog.locator('mat-select[name="permissions"]').first();
    }

    /**
     * Search for a user while editing an API key
     */
    async searchApiKeyUser(query: string): Promise<void> {
        await this.apiKeyUserSearchInput.click();
        await this.apiKeyUserSearchInput.fill(query);
        await this.page.waitForTimeout(500);
    }

    /**
     * Select API key permissions
     */
    async selectApiKeyPermissions(permission: string): Promise<void> {
        await this.apiKeyPermissionsSelect.click();
        await this.page
            .locator(`mat-option[value="${permission}"]`)
            .first()
            .click();
        await this.page.waitForTimeout(300);
    }

    // Extensions Management

    /**
     * View extensions
     */
    async viewExtensions(): Promise<void> {
        await this.extensionsLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Create extension
     */
    async createExtension(data: {
        name: string;
        url: string;
        section?: string;
    }): Promise<void> {
        await this.viewExtensions();
        await this.addButton.click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);
        await this.fillField('URL', data.url);

        if (data.section) {
            await this.selectDropdown('Section', data.section);
        }

        await this.save();
    }

    /**
     * Get extensions list
     */
    get extensionsList(): Locator {
        return this.mainContent.locator('[class*="extension"], table tr');
    }

    // Tenants Management

    /**
     * View tenants
     */
    async viewTenants(): Promise<void> {
        await this.staffApiLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Create tenant
     */
    async createTenant(data: { name: string; domain?: string }): Promise<void> {
        await this.viewTenants();
        await this.addButton.click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);

        if (data.domain) {
            await this.selectDropdown('Domain', data.domain);
        }

        await this.save();
    }

    /**
     * Get tenants list
     */
    get tenantsList(): Locator {
        return this.mainContent.locator('[class*="tenant"], table tr');
    }

    // Upload Storage Management

    /**
     * View upload storage providers
     */
    async viewUploadStorage(): Promise<void> {
        await this.uploadStorageLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Add storage provider
     */
    async addStorageProvider(data: {
        name: string;
        type: 'AWS S3' | 'Azure' | 'GCS';
        bucket?: string;
        region?: string;
    }): Promise<void> {
        await this.viewUploadStorage();
        await this.addButton.click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);
        await this.selectDropdown('Type', data.type);

        if (data.bucket) {
            await this.fillField('Bucket', data.bucket);
        }

        if (data.region) {
            await this.fillField('Region', data.region);
        }

        await this.save();
    }

    // Email Templates

    /**
     * View email templates
     */
    async viewEmailTemplates(): Promise<void> {
        await this.mailingListLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Create email template
     */
    async createEmailTemplate(data: {
        name: string;
        subject: string;
        body: string;
    }): Promise<void> {
        await this.viewEmailTemplates();
        await this.addButton.click();
        await this.dialog.waitFor({ timeout: 5000 });

        await this.fillField('Name', data.name);
        await this.fillField('Subject', data.subject);
        await this.fillField('Body', data.body);

        await this.save();
    }

    // Build Jobs

    /**
     * View build jobs
     */
    async viewBuildJobs(): Promise<void> {
        await this.buildJobsLink.click();
        await this.page.waitForTimeout(500);
    }

    /**
     * Get build jobs list
     */
    get buildJobsList(): Locator {
        return this.mainContent.locator(
            '[class*="job"], [class*="build"], table tr',
        );
    }

    // Assertions

    /**
     * Expect cluster nodes to be visible
     */
    async expectClusterNodes(): Promise<void> {
        await this.viewClusters();
        await expect(this.clusterNodes.first()).toBeVisible({ timeout: 10000 });
    }

    /**
     * Expect version info to be visible
     */
    async expectVersionInfo(): Promise<void> {
        await this.viewAbout();
        await expect(this.versionInfo).toBeVisible({ timeout: 10000 });
    }

    /**
     * Expect API key in list
     */
    async expectApiKeyInList(name: string): Promise<void> {
        await expect(this.mainContent.locator(`text=${name}`)).toBeVisible();
    }

    /**
     * Expect extension in list
     */
    async expectExtensionInList(name: string): Promise<void> {
        await expect(this.mainContent.locator(`text=${name}`)).toBeVisible();
    }
}
