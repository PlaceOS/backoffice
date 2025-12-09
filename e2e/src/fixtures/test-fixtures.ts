import { test as base, expect, Page } from '@playwright/test';
import { buildAppUrl, getTestEnvConfig } from '../config/test-env';

/**
 * Extended test fixtures for PlaceOS Backoffice E2E tests
 */

export interface TestFixtures {
    /** Navigate to app with proper mock/live configuration */
    authenticatedPage: Page;
}

/**
 * Wait for the application to fully load
 */
async function waitForAppLoad(page: Page): Promise<void> {
    // Wait for the loading indicator to disappear
    await page
        .waitForSelector('[loader]', { state: 'detached', timeout: 30000 })
        .catch(() => {
            // Loader might not exist if app loads quickly
        });

    // Wait for router outlet to be present
    await page.waitForSelector('router-outlet', { timeout: 30000 });

    // Wait for any loading spinners to disappear
    await page
        .waitForFunction(
            () => {
                const spinners = document.querySelectorAll(
                    'mat-spinner, mat-progress-bar[mode="indeterminate"]',
                );
                return spinners.length === 0;
            },
            { timeout: 30000 },
        )
        .catch(() => {
            // Spinners might not exist
        });
}

/**
 * Setup authentication for tests
 * In mock mode, this sets the mock flag in localStorage
 * In live mode, this would handle actual authentication
 */
async function setupAuth(page: Page): Promise<void> {
    const config = getTestEnvConfig();

    if (config.use_mock) {
        // Set mock mode in localStorage before navigating
        await page.addInitScript(() => {
            localStorage.setItem('mock', 'true');
        });
    } else {
        // For live environment, handle OAuth authentication
        // This would need to be customized based on the actual auth flow
        console.log(
            'Live authentication mode - ensure proper credentials are configured',
        );
    }
}

/**
 * Extended test with authenticated page fixture
 */
export const test = base.extend<TestFixtures>({
    authenticatedPage: async ({ page }, use) => {
        await setupAuth(page);
        await use(page);
    },
});

export { expect };

/**
 * Navigate to a page with proper mock configuration
 */
export async function navigateTo(page: Page, path: string): Promise<void> {
    const url = buildAppUrl(path);
    await page.goto(url);
    await waitForAppLoad(page);
}

/**
 * Wait for sidebar items to load
 */
export async function waitForSidebarLoad(page: Page): Promise<void> {
    await page
        .waitForSelector('app-sidebar-menu', { timeout: 15000 })
        .catch(() => {});
    // Wait for list items to appear
    await page
        .waitForFunction(
            () => {
                const items = document.querySelectorAll(
                    'app-sidebar-menu .item, [sidebar] .item',
                );
                return items.length > 0;
            },
            { timeout: 15000 },
        )
        .catch(() => {
            // List might be empty
        });
}

/**
 * Search in the sidebar
 */
export async function searchSidebar(page: Page, query: string): Promise<void> {
    const search_input = page
        .locator('input[placeholder*="Search"], input[placeholder*="search"]')
        .first();
    await search_input.fill(query);
    // Wait for debounce and results
    await page.waitForTimeout(500);
}

/**
 * Click on a sidebar item by name
 */
export async function selectSidebarItem(
    page: Page,
    name: string,
): Promise<void> {
    await page
        .locator(
            `[sidebar] .item:has-text("${name}"), app-sidebar-menu .item:has-text("${name}")`,
        )
        .first()
        .click();
    await page.waitForTimeout(500);
}

/**
 * Open the add/create modal
 */
export async function openAddModal(page: Page): Promise<void> {
    const add_button = page
        .locator(
            'button:has-text("Add"), button[mattooltip*="Add"], button:has(mat-icon:has-text("add"))',
        )
        .first();
    await add_button.click();
    await page.waitForSelector('mat-dialog-container, [mat-dialog-container]', {
        timeout: 5000,
    });
}

/**
 * Open the edit modal for current item
 */
export async function openEditModal(page: Page): Promise<void> {
    const edit_button = page
        .locator(
            'button:has-text("Edit"), button[mattooltip*="Edit"], button:has(mat-icon:has-text("edit"))',
        )
        .first();
    await edit_button.click();
    await page.waitForSelector('mat-dialog-container, [mat-dialog-container]', {
        timeout: 5000,
    });
}

/**
 * Close a modal by clicking save
 */
export async function saveModal(page: Page): Promise<void> {
    const save_button = page
        .locator(
            'mat-dialog-container button:has-text("Save"), mat-dialog-container button:has-text("Create")',
        )
        .first();
    await save_button.click();
    await page
        .waitForSelector('mat-dialog-container', {
            state: 'detached',
            timeout: 10000,
        })
        .catch(() => {});
}

/**
 * Close a modal by clicking cancel
 */
export async function cancelModal(page: Page): Promise<void> {
    const cancel_button = page
        .locator('mat-dialog-container button:has-text("Cancel")')
        .first();
    await cancel_button.click();
    await page
        .waitForSelector('mat-dialog-container', {
            state: 'detached',
            timeout: 5000,
        })
        .catch(() => {});
}

/**
 * Confirm a delete dialog
 */
export async function confirmDelete(page: Page): Promise<void> {
    const confirm_button = page
        .locator(
            'mat-dialog-container button:has-text("Ok"), mat-dialog-container button:has-text("Confirm"), mat-dialog-container button:has-text("Delete")',
        )
        .first();
    await confirm_button.click();
    await page
        .waitForSelector('mat-dialog-container', {
            state: 'detached',
            timeout: 5000,
        })
        .catch(() => {});
}

/**
 * Navigate to a specific tab
 */
export async function navigateToTab(
    page: Page,
    tab_name: string,
): Promise<void> {
    const tab = page
        .locator(
            `mat-tab-header [role="tab"]:has-text("${tab_name}"), .mat-mdc-tab:has-text("${tab_name}")`,
        )
        .first();
    await tab.click();
    await page.waitForTimeout(500);
}

/**
 * Fill a form field by label
 */
export async function fillFormField(
    page: Page,
    label: string,
    value: string,
): Promise<void> {
    const field = page
        .locator(
            `mat-form-field:has-text("${label}") input, mat-form-field:has-text("${label}") textarea`,
        )
        .first();
    await field.fill(value);
}

/**
 * Select an option from a mat-select by label
 */
export async function selectOption(
    page: Page,
    label: string,
    option: string,
): Promise<void> {
    const select = page
        .locator(`mat-form-field:has-text("${label}") mat-select`)
        .first();
    await select.click();
    await page.locator(`mat-option:has-text("${option}")`).first().click();
}

/**
 * Check if a snackbar notification appears
 */
export async function expectNotification(
    page: Page,
    text: string,
): Promise<void> {
    await expect(
        page.locator(`mat-snack-bar-container:has-text("${text}")`),
    ).toBeVisible({ timeout: 5000 });
}

/**
 * Check if the page has loaded successfully (no error state)
 */
export async function expectPageLoaded(page: Page): Promise<void> {
    // Check that there's no error message
    const error_visible = await page
        .locator('.error, [class*="error"]:has-text("Error")')
        .isVisible()
        .catch(() => false);
    expect(error_visible).toBeFalsy();
}
