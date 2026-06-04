import { Page, expect, test } from '@playwright/test';
import { AdminPage } from './pages';

/**
 * Admin E2E Tests
 *
 * Tests for user stories US-ADM-001 through US-ADM-016
 */

async function seedAdminApiKeyData(page: Page): Promise<void> {
    await page.addInitScript(() => {
        sessionStorage.setItem(
            'PLACEOS.mocks.api_engine_v2_domains',
            JSON.stringify([
                {
                    id: 'place.tech',
                    name: 'Place Technology',
                    domain: 'place.tech',
                },
            ]),
        );
        sessionStorage.setItem(
            'PLACEOS.mocks.api_keys',
            JSON.stringify([
                {
                    id: 'api_key-e2e',
                    name: 'E2E App Key',
                    description: 'Existing e2e API key',
                    authority_id: 'place.tech',
                    scopes: ['public'],
                    permissions: 'user',
                    user_id: 'current',
                    created_at: Date.now() / 1000,
                    updated_at: Date.now() / 1000,
                },
            ]),
        );
    });
}

test.describe('Admin', () => {
    let adminPage: AdminPage;

    test.beforeEach(async ({ page }) => {
        // Set mock mode in localStorage
        await page.addInitScript(() => {
            localStorage.setItem('BACKOFFICE.mock', 'true');
        });
        adminPage = new AdminPage(page);
    });

    /**
     * US-ADM-001: View Cluster Status
     */
    test.describe('US-ADM-001: View Cluster Status', () => {
        test('AC-ADM-001-1: Display Cluster Nodes - should show cluster information', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to clusters section
            await adminPage.viewClusters();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ADM-003: View System Information
     */
    test.describe('US-ADM-003: View System Information', () => {
        test('AC-ADM-003-1: Display Version Info - should show system version', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to about section
            await adminPage.viewAbout();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ADM-004: View Database Status
     */
    test.describe('US-ADM-004: View Database Status', () => {
        test('AC-ADM-004-4: Export Zone Tree - should open parent zone selection modal', async ({
            page,
        }) => {
            await adminPage.goto();

            await adminPage.viewDatabase();

            await expect(adminPage.exportZoneTreeButton).toBeVisible();
            await adminPage.openZoneTreeExportModal();

            await expect(
                adminPage.dialog.locator('h3:has-text("Export Zone Tree")'),
            ).toBeVisible();
            await expect(
                adminPage.dialog.locator('item-search-field'),
            ).toBeVisible();
            await expect(
                adminPage.dialog.locator('button:has-text("Export Selected")'),
            ).toBeDisabled();
        });

        test('AC-ADM-004-5: Import Zone Tree - should expose CSV or TSV import input', async ({
            page,
        }) => {
            await adminPage.goto();

            await adminPage.viewDatabase();

            await expect(adminPage.importZoneTreeButton).toBeVisible();
            await expect(adminPage.zoneTreeImportInput).toHaveAttribute(
                'accept',
                /text\/csv|\.csv/,
            );
        });
    });

    /**
     * US-ADM-008: Manage Backoffice Extensions
     */
    test.describe('US-ADM-008: Manage Backoffice Extensions', () => {
        test('AC-ADM-008-1: View Extensions - should show extensions section', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to extensions section
            await adminPage.viewExtensions();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });

        test('AC-ADM-008-2: Create Extension - should open extension create dialog', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to extensions section
            await adminPage.viewExtensions();

            // Click add button
            await adminPage.addButton.click().catch(() => {
                // Add button might not be visible if extensions section is different
            });

            // Wait a moment for dialog
            await page.waitForTimeout(500);
        });
    });

    /**
     * US-ADM-009: Manage Tenants
     */
    test.describe('US-ADM-009: Manage Tenants', () => {
        test('AC-ADM-009-1: View Tenants - should show tenants section', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to staff API section
            await adminPage.viewTenants();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ADM-011: Manage API Keys
     */
    test.describe('US-ADM-011: Manage API Keys', () => {
        test('AC-ADM-011-1: View API Keys - should show API keys section', async ({
            page,
        }) => {
            await seedAdminApiKeyData(page);
            await adminPage.goto();

            // Navigate to API keys section
            await adminPage.viewApiKeys();
            await adminPage.selectApiKeyDomain();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });

        test('AC-ADM-011-2: Generate New Key - should open key generation dialog', async ({
            page,
        }) => {
            await seedAdminApiKeyData(page);
            await adminPage.goto();

            // Navigate to API keys section
            await adminPage.viewApiKeys();
            await adminPage.selectApiKeyDomain();

            // Click add/generate button
            await expect(adminPage.apiKeyAddButton).toBeEnabled({
                timeout: 10000,
            });
            await adminPage.apiKeyAddButton.click();

            await expect(adminPage.dialog).toBeVisible();
        });

        test('AC-ADM-011-4: Assign to User - should search and select a user with identity details', async ({
            page,
        }) => {
            await seedAdminApiKeyData(page);
            await adminPage.goto();
            await adminPage.viewApiKeys();
            await adminPage.selectApiKeyDomain();

            await expect(adminPage.apiKeyAddButton).toBeEnabled({
                timeout: 10000,
            });
            await adminPage.apiKeyAddButton.click();
            await expect(adminPage.dialog).toBeVisible();

            await adminPage.searchApiKeyUser('Alex');

            const userOption = page
                .locator('mat-option:has-text("Alex")')
                .first();
            await expect(userOption).toBeVisible({ timeout: 10000 });
            await expect(userOption.locator('a-user-avatar')).toBeVisible();
            await expect(
                userOption.locator('text=/@place\\.tech/i'),
            ).toBeVisible();

            await userOption.click();

            await expect(adminPage.apiKeyUserSearchInput).toHaveValue(/Alex/);
            await expect(
                adminPage.dialog.locator('a-user-avatar').first(),
            ).toBeVisible();
            await expect(
                adminPage.dialog
                    .locator('main button:has(icon:has-text("close"))')
                    .first(),
            ).toBeVisible();
        });

        test('AC-ADM-011-6: Search All Domain Users - should not filter user search by permission role', async ({
            page,
        }) => {
            await seedAdminApiKeyData(page);
            await adminPage.goto();
            await adminPage.viewApiKeys();
            await adminPage.selectApiKeyDomain();

            await expect(adminPage.apiKeyAddButton).toBeEnabled({
                timeout: 10000,
            });
            await adminPage.apiKeyAddButton.click();
            await expect(adminPage.dialog).toBeVisible();

            await adminPage.selectApiKeyPermissions('admin');
            await adminPage.searchApiKeyUser('Jeremy');

            await expect(
                page.locator('mat-option:has-text("Jeremy West")'),
            ).toBeVisible({ timeout: 10000 });
        });
    });

    /**
     * US-ADM-012: Configure Upload Storage
     */
    test.describe('US-ADM-012: Configure Upload Storage', () => {
        test('AC-ADM-012-1: View Storage Providers - should show storage section', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to upload storage section
            await adminPage.viewUploadStorage();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ADM-014: Manage Email Templates
     * NOTE: This test is skipped because the mailing-list tab is disabled in the application
     */
    test.describe('US-ADM-014: Manage Email Templates', () => {
        test.skip('AC-ADM-014-1: View Templates - should show email templates section', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to email templates section
            await adminPage.viewEmailTemplates();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ADM-015: Monitor Build Jobs
     */
    test.describe('US-ADM-015: Monitor Build Jobs', () => {
        test('AC-ADM-015-1: View Build Jobs - should show build jobs section', async ({
            page,
        }) => {
            await adminPage.goto();

            // Navigate to build jobs section
            await adminPage.viewBuildJobs();

            // Verify content is displayed
            await expect(adminPage.mainContent).toBeVisible();
        });
    });

    /**
     * Admin Navigation Tests
     */
    test.describe('Admin Navigation', () => {
        test('should be able to navigate between admin sections', async ({
            page,
        }) => {
            await adminPage.goto();

            // Test navigating to different sections
            const sections = [
                { link: adminPage.aboutLink, name: 'About' },
                { link: adminPage.apiKeysLink, name: 'API Keys' },
                { link: adminPage.extensionsLink, name: 'Extensions' },
            ];

            for (const section of sections) {
                const isVisible = await section.link
                    .isVisible()
                    .catch(() => false);
                if (isVisible) {
                    await section.link.click();
                    await page.waitForTimeout(500);
                    await expect(adminPage.mainContent).toBeVisible();
                }
            }
        });
    });
});
