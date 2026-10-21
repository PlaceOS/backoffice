import { Locator, Page, expect } from '@playwright/test';
import { buildAppUrl } from '../config/test-env';
import { BasePage } from './base.page';

/**
 * Page Object for the Admin section
 *
 * Each admin section has its own route, e.g. `#/admin/api-keys`
 */
export class AdminPage extends BasePage {
    readonly path = '/#/admin';

    constructor(page: Page) {
        super(page);
    }

    /** Open an admin section directly by its route id */
    async gotoSection(id: string): Promise<void> {
        await this.page.goto(buildAppUrl(`/#/admin/${id}`));
        await this.waitForLoad();
    }

    /** Link to an admin section in the admin menu */
    sectionLink(id: string): Locator {
        return this.page.locator(`a[href="#/admin/${id}"]`);
    }

    /** Content of the open admin section */
    get section(): Locator {
        return this.page.locator('app-engine router-outlet + *');
    }

    get exportZoneTreeButton(): Locator {
        return this.page.getByRole('button', { name: 'Export Zone Tree' });
    }

    get importZoneTreeButton(): Locator {
        return this.page.getByRole('button', { name: 'Import Zone Tree' });
    }

    get zoneTreeImportInput(): Locator {
        return this.page.locator('input[type="file"][accept*=".csv"]').first();
    }

    /** Add button of the API keys section */
    get apiKeyAddButton(): Locator {
        return this.page
            .locator('admin-api-keys button:has(icon:has-text("add"))')
            .first();
    }

    /**
     * Select the active domain for API keys
     */
    async selectApiKeyDomain(domain = 'Place Technology'): Promise<void> {
        await this.page
            .locator('admin-api-keys mat-select[name="type"]')
            .click();
        await this.page
            .locator('mat-option')
            .filter({ hasText: domain })
            .first()
            .click();
    }

    /** User search input of the API key modal */
    get apiKeyUserSearchInput(): Locator {
        return this.dialog.locator('input#user').first();
    }

    /** Permissions select of the API key modal */
    get apiKeyPermissionsSelect(): Locator {
        return this.dialog
            .locator('[data-testid="api-key-permissions"]')
            .first();
    }

    /** User option in the API key user autocomplete panel */
    apiKeyUserOption(name: string): Locator {
        return this.page
            .locator('mat-option')
            .filter({ hasText: name })
            .first();
    }

    /**
     * Search for a user while editing an API key
     */
    async searchApiKeyUser(query: string): Promise<void> {
        await this.apiKeyUserSearchInput.fill(query);
        await expect(this.dialog.locator('.animate-spin')).toBeHidden();
        await this.apiKeyUserSearchInput.press('ArrowDown');
        await expect(this.apiKeyUserOption(query)).toBeVisible();
    }

    /**
     * Select API key permissions, e.g. `admin`
     */
    async selectApiKeyPermissions(permission: string): Promise<void> {
        const label = permission.charAt(0).toUpperCase() + permission.slice(1);
        await this.apiKeyPermissionsSelect.click();
        await this.page
            .locator('mat-option')
            .filter({ hasText: label })
            .first()
            .click();
    }

    /** Maximum booking lengths of a tenant in the tenants table */
    async tenantBookingPeriods(name: string): Promise<Locator> {
        const row = await this.tableRow(name, this.section);
        return row.locator('[booking-period] > div');
    }

    /** Open the edit modal of a tenant */
    async editTenant(name: string): Promise<void> {
        const row = await this.tableRow(name, this.section);
        await row.getByRole('button', { name: 'Edit Tenant' }).click();
        await expect(this.dialog).toBeVisible();
    }

    /** Rows of the maximum booking length editor in the tenant modal */
    get bookingPeriodRows(): Locator {
        return this.dialog.locator('[period-row]');
    }

    /** Set the maximum booking length of a row in the tenant modal */
    async setBookingPeriod(
        index: number,
        period: {
            type?: string;
            days?: number;
            hours?: number;
            minutes?: number;
        },
    ): Promise<void> {
        const row = this.bookingPeriodRows.nth(index);
        if (period.type != null) {
            await row
                .getByRole('textbox', { name: 'Booking type' })
                .fill(period.type);
        }
        if (period.days != null) {
            await row
                .getByRole('spinbutton', { name: 'Days' })
                .fill(`${period.days}`);
        }
        const selects: [string, number | undefined, string][] = [
            ['Hours', period.hours, 'hour'],
            ['Minutes', period.minutes, 'minute'],
        ];
        for (const [name, value, unit] of selects) {
            if (value == null) continue;
            await row.getByRole('combobox', { name }).click();
            await this.page
                .getByRole('option', {
                    name: `${value} ${unit}${value === 1 ? '' : 's'}`,
                    exact: true,
                })
                .click();
        }
    }
}
