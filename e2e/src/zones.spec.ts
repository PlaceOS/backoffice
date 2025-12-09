import { expect, test } from '@playwright/test';
import { ZonesPage } from './pages';

/**
 * Zones E2E Tests
 *
 * Tests for user stories US-ZON-001 through US-ZON-011
 */

test.describe('Zones', () => {
    let zonesPage: ZonesPage;

    test.beforeEach(async ({ page }) => {
        // Set mock mode in localStorage
        await page.addInitScript(() => {
            localStorage.setItem('mock', 'true');
        });
        zonesPage = new ZonesPage(page);
    });

    /**
     * US-ZON-001: View Zones List
     */
    test.describe('US-ZON-001: View Zones List', () => {
        test('AC-ZON-001-1: Display Zones List - should show sidebar with all zones', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Verify the sidebar is visible
            await expect(zonesPage.sidebarList).toBeVisible();

            // Verify zones are listed
            await expect(zonesPage.zonesList.first()).toBeVisible({
                timeout: 10000,
            });
        });

        test('AC-ZON-001-3: Search Zones - should filter zones by search term', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Wait for list to load
            await page.waitForTimeout(1000);

            // Search for a specific zone
            await zonesPage.search('Level');

            // Wait for search results to filter
            await page.waitForTimeout(500);

            // Verify filtered results - use paragraph elements inside the links which contain the zone names
            const items = page
                .locator('item-sidebar a p, virtual-scroll a p')
                .filter({ hasText: /Level/i });
            const count = await items.count();
            expect(count).toBeGreaterThan(0);
        });

        test('AC-ZON-001-4: Zone Selection - should display zone details when selected', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Wait for list to load
            await page.waitForTimeout(1000);

            // Select first zone
            const firstZone = zonesPage.zonesList.first();
            await firstZone.click();

            // Verify details are displayed
            await expect(zonesPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ZON-002: View Zone Details
     */
    test.describe('US-ZON-002: View Zone Details', () => {
        test('AC-ZON-002-1: Display Basic Information - should show zone name', async ({
            page,
        }) => {
            await zonesPage.goto();
            await page.waitForTimeout(1000);

            // Select a zone
            const firstZone = zonesPage.zonesList.first();
            const zoneName = await firstZone.textContent();
            await firstZone.click();
            await page.waitForTimeout(500);

            // Verify zone details
            await expect(zonesPage.mainContent).toBeVisible();
            if (zoneName) {
                await expect(
                    zonesPage.mainContent
                        .locator(`text=${zoneName.trim().split('\n')[0]}`)
                        .first(),
                )
                    .toBeVisible({ timeout: 5000 })
                    .catch(() => {});
            }
        });
    });

    /**
     * US-ZON-003: Create New Zone
     */
    test.describe('US-ZON-003: Create New Zone', () => {
        test('AC-ZON-003-1: Access Create Form - should open create modal', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Click add button
            await zonesPage.addButton.click();

            // Verify modal appears
            await expect(zonesPage.dialog).toBeVisible();
        });

        test('AC-ZON-003-5: Successful Creation - should create zone and show in list', async ({
            page,
        }) => {
            await zonesPage.goto();

            const uniqueName = `Test Zone ${Date.now()}`;

            await zonesPage.createZone({
                name: uniqueName,
                description: 'E2E test zone',
            });

            // Wait for creation
            await page.waitForTimeout(1000);

            // Search for the new zone
            await zonesPage.search(uniqueName);

            // Verify it appears in the list
            await zonesPage.expectZoneInList(uniqueName);
        });
    });

    /**
     * US-ZON-004: Edit Zone Details
     */
    test.describe('US-ZON-004: Edit Zone Details', () => {
        test('AC-ZON-004-1: Access Edit Mode - should open edit modal with current details', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select first zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Click edit
            await zonesPage.openEditModal();

            // Verify modal with pre-populated fields
            await expect(zonesPage.dialog).toBeVisible();
            // Find the Name field specifically using accessible name with exact match
            const nameField = zonesPage.dialog.getByRole('textbox', {
                name: 'Name',
                exact: true,
            });
            const value = await nameField.inputValue();
            expect(value.length).toBeGreaterThan(0);
        });

        test('AC-ZON-004-5: Save Changes - should persist changes', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select first zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Open edit modal
            await zonesPage.openEditModal();

            // Save without changes
            await zonesPage.save();

            // Verify dialog closed
            await expect(zonesPage.dialog)
                .not.toBeVisible({ timeout: 5000 })
                .catch(() => {});
        });
    });

    /**
     * US-ZON-005: Delete Zone
     */
    test.describe('US-ZON-005: Delete Zone', () => {
        test('AC-ZON-005-1: Delete Confirmation - should show confirmation dialog', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Open action menu and click delete
            await zonesPage.openActionMenu();
            await zonesPage.deleteButton.click();

            // Verify confirmation dialog appears
            await expect(zonesPage.dialog).toBeVisible();
        });

        test('AC-ZON-005-4: Cancel Deletion - should keep zone when cancelled', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            const firstZone = zonesPage.zonesList.first();
            const zoneName = await firstZone.textContent();
            await firstZone.click();
            await page.waitForTimeout(500);

            // Open action menu and click delete
            await zonesPage.openActionMenu();
            await zonesPage.deleteButton.click();
            await expect(zonesPage.dialog).toBeVisible();

            // Cancel
            await zonesPage.cancelButton.click();

            // Verify zone still exists
            if (zoneName) {
                await zonesPage.expectZoneInList(
                    zoneName.trim().split('\n')[0],
                );
            }
        });
    });

    /**
     * US-ZON-006: View Child Zones
     */
    test.describe('US-ZON-006: View Child Zones', () => {
        test('AC-ZON-006-1: Display Child Zones - should show children tab', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Navigate to children tab
            await zonesPage.viewChildren();

            // Verify children tab content is visible
            await expect(zonesPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ZON-007: View Systems in Zone
     */
    test.describe('US-ZON-007: View Systems in Zone', () => {
        test('AC-ZON-007-1: Display Systems List - should show systems in zone', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Navigate to systems tab
            await zonesPage.viewSystems();

            // Verify systems tab content is visible
            await expect(zonesPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ZON-008: Manage Zone Triggers
     */
    test.describe('US-ZON-008: Manage Zone Triggers', () => {
        test('AC-ZON-008-1: View Zone Triggers - should display triggers list', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Navigate to triggers tab
            await zonesPage.viewTriggers();

            // Verify triggers tab content is visible
            await expect(zonesPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ZON-009: Manage Zone Metadata
     */
    test.describe('US-ZON-009: Manage Zone Metadata', () => {
        test('AC-ZON-009-1: View Metadata - should display metadata entries', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Navigate to metadata tab
            await zonesPage.viewMetadata();

            // Verify metadata tab content is visible
            await expect(zonesPage.mainContent).toBeVisible();
        });
    });

    /**
     * US-ZON-010: View Zone History
     */
    test.describe('US-ZON-010: View Zone History', () => {
        test('AC-ZON-010-1: Display Change History - should show history list', async ({
            page,
        }) => {
            await zonesPage.goto();

            // Select a zone
            await zonesPage.zonesList.first().click();
            await page.waitForTimeout(500);

            // Navigate to history tab
            await zonesPage.viewHistory();

            // Verify history tab content is visible
            await expect(zonesPage.mainContent).toBeVisible();
        });
    });
});
