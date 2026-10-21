import { expect, seedSession, test } from './fixtures/test-fixtures';
import { AdminPage } from './pages';

/**
 * Admin E2E Tests
 *
 * Tests for user stories US-ADM-001 through US-ADM-016
 */

/** Admin menu entries, their route id and the heading of the section */
const SECTIONS = [
    { name: 'About', id: 'about', heading: 'Backoffice & PlaceOS Details' },
    { name: 'Database', id: 'database', heading: 'PlaceOS Database' },
    { name: 'Clusters', id: 'clusters', heading: 'PlaceOS Clusters' },
    { name: 'Edges', id: 'edge', heading: 'PlaceOS Edge Nodes' },
    { name: 'Interfaces', id: 'interfaces', heading: 'PlaceOS Interfaces' },
    { name: 'MQTT Brokers', id: 'brokers', heading: 'MQTT Brokers' },
    { name: 'Staff Tenants', id: 'staff-api', heading: 'Staff API Tenants' },
    {
        name: 'Resource Imports',
        id: 'resource-imports',
        heading: 'Resource Imports',
    },
    { name: 'Extensions', id: 'extensions', heading: 'Extensions' },
    {
        name: 'Application Keys',
        id: 'api-keys',
        heading: 'PlaceOS Application Keys',
    },
    { name: 'Custom Schemas', id: 'schemas', heading: 'Custom Schemas' },
    {
        name: 'Data Stores',
        id: 'upload-storage',
        heading: 'PlaceOS Data Stores',
    },
    {
        name: 'Uploads Library',
        id: 'upload-library',
        heading: 'Uploads Library',
    },
    { name: 'Build Jobs', id: 'build-jobs', heading: 'Build Service Jobs' },
];

const API_KEYS = [
    {
        id: 'api_key-e2e',
        name: 'E2E App Key',
        description: 'Existing e2e API key',
        authority_id: 'mock-authority',
        scopes: ['public'],
        permissions: 'user',
        user_id: 'current',
        created_at: Date.now() / 1000,
        updated_at: Date.now() / 1000,
    },
];

test.describe('Admin', () => {
    let admin: AdminPage;

    test.beforeEach(async ({ page }) => {
        admin = new AdminPage(page);
    });

    test('each admin menu entry opens its section', async ({ page }) => {
        await admin.goto();

        for (const section of SECTIONS) {
            await test.step(section.name, async () => {
                await admin.sectionLink(section.id).click();

                await expect(page).toHaveURL(
                    new RegExp(`#/admin/${section.id}$`),
                );
                await expect(admin.section).toContainText(section.heading);
            });
        }
    });

    test.describe('US-ADM-003: View System Information', () => {
        test('AC-ADM-003-1: shows the backoffice version and commit', async () => {
            await admin.gotoSection('about');

            await expect(admin.section).toContainText('Version');
            await expect(admin.section).toContainText(
                /Commit hash\s*g?[0-9a-f]{7,}/,
            );
        });
    });

    test.describe('US-ADM-004: View Database Status', () => {
        test('AC-ADM-004-4: export asks for the parent zones first', async () => {
            await admin.gotoSection('database');
            await admin.exportZoneTreeButton.click();

            await expect(
                admin.dialog.getByRole('heading', { name: 'Export Zone Tree' }),
            ).toBeVisible();
            await expect(
                admin.dialog.locator('item-search-field'),
            ).toBeVisible();
            await expect(
                admin.dialog.getByRole('button', { name: 'Export Selected' }),
            ).toBeDisabled();
        });

        test('AC-ADM-004-5: import accepts CSV files', async () => {
            await admin.gotoSection('database');

            await expect(admin.importZoneTreeButton).toBeVisible();
            await expect(admin.zoneTreeImportInput).toHaveAttribute(
                'accept',
                /text\/csv|\.csv/,
            );
        });
    });

    test.describe('US-ADM-006: Manage MQTT Brokers', () => {
        test('adds a broker to the list', async ({ page }) => {
            await admin.gotoSection('brokers');
            await expect(admin.section).toContainText('No MQTT Brokers');

            await page.getByRole('button', { name: 'Add MQTT Broker' }).click();
            await admin.dialog
                .getByRole('textbox', { name: 'Name*' })
                .fill('Building Broker');
            await admin.dialog
                .getByRole('textbox', { name: 'Host*' })
                .fill('mqtt.place.tech');
            await admin.dialog
                .getByRole('textbox', { name: 'Username *' })
                .fill('placeos');
            await admin.dialog
                .getByRole('textbox', { name: 'Password' })
                .fill('secret');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect(admin.section).toContainText('Building Broker');
            await expect(admin.section).toContainText('mqtt.place.tech');
        });
    });

    test.describe('US-ADM-008: Manage Backoffice Extensions', () => {
        test('AC-ADM-008-2: adds an extension to the domain', async ({
            page,
        }) => {
            await admin.gotoSection('extensions');
            await expect(admin.section).toContainText(
                'No extensions available for the selected domain',
            );

            await page.getByRole('button', { name: 'Add Extension' }).click();
            await admin.dialog
                .getByRole('textbox', { name: 'Name *' })
                .fill('Floor Plans');
            await admin.dialog
                .getByRole('textbox', { name: 'URL *' })
                .fill('https://maps.place.tech');
            await admin.saveButton.click();
            await expect(admin.dialog).toBeHidden();

            await expect(admin.section).toContainText('Floor Plans');
            await expect(admin.section).toContainText(
                'https://maps.place.tech',
            );
        });
    });

    test.describe('US-ADM-009: Manage Tenants', () => {
        test('AC-ADM-009-1: lists the tenants and their platform', async () => {
            await admin.gotoSection('staff-api');

            const row = await admin.tableRow('Default Tenant', admin.section);
            await expect(row.nth(1)).toHaveText(/google/);
        });
    });

    test.describe('US-ADM-011: Manage API Keys', () => {
        test.beforeEach(async ({ page }) => {
            await seedSession(page, 'api_keys', API_KEYS);
            await admin.gotoSection('api-keys');
            await admin.selectApiKeyDomain();
        });

        test('AC-ADM-011-1: lists the keys of the domain', async () => {
            await expect(admin.section).toContainText('E2E App Key');
            await expect(admin.section).toContainText('Existing e2e API key');
        });

        test('AC-ADM-011-2: opens the new key form', async () => {
            await expect(admin.apiKeyAddButton).toBeEnabled();
            await admin.apiKeyAddButton.click();

            await expect(admin.dialog).toBeVisible();
            await expect(admin.apiKeyUserSearchInput).toBeVisible();
        });

        test('AC-ADM-011-4: assigns a user with identity details', async () => {
            await admin.apiKeyAddButton.click();
            await admin.searchApiKeyUser('Alex');

            const option = admin.apiKeyUserOption('Alex');
            await expect(option.locator('a-user-avatar')).toBeVisible();
            await expect(option).toContainText(/@place\.tech/i);

            await option.click();

            await expect(admin.apiKeyUserSearchInput).toHaveValue(/Alex/);
            await expect(
                admin.dialog.locator('a-user-avatar').first(),
            ).toBeVisible();
            await expect(
                admin.dialog
                    .locator('main button:has(icon:has-text("close"))')
                    .first(),
            ).toBeVisible();
        });

        test('AC-ADM-011-6: user search is not filtered by permission', async () => {
            await admin.apiKeyAddButton.click();
            await admin.selectApiKeyPermissions('admin');
            await admin.searchApiKeyUser('Jeremy');

            await expect(admin.apiKeyUserOption('Jeremy West')).toBeVisible();
        });
    });
});
