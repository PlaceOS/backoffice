import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Domains E2E Tests
 *
 * Tests for user stories US-DOM-001 through US-DOM-012.
 * The mock backend has no domains, so each test seeds its own.
 */

/** Authority of the mock users, from `src/app/mocks/backend/domains.mock.ts` */
const PLACE_ID = 'mock-authority';

const DOMAINS = [
    {
        id: PLACE_ID,
        name: 'Place Technology',
        domain: 'place.tech',
        description: 'Main tenant',
        email_domains: ['place.tech'],
    },
    {
        id: 'dom-acme',
        name: 'Acme Corporation',
        domain: 'acme.example.com',
        description: 'Second tenant',
        email_domains: ['acme.example.com'],
    },
];

test.describe('Domains', () => {
    let domains: FeaturePage;

    test.beforeEach(async ({ page }) => {
        await seedMockData(page, 'domains', DOMAINS);
        domains = new FeaturePage(page, 'domains');
    });

    test.describe('US-DOM-001: View Domains List', () => {
        test('AC-DOM-001-1: lists every domain', async () => {
            await domains.goto();

            await expect(domains.itemLink('Place Technology')).toBeVisible();
            await expect(domains.itemLink('Acme Corporation')).toBeVisible();
        });

        test('AC-DOM-001-2: search filters the list', async () => {
            await domains.goto();
            await domains.search('Acme');

            await expect(domains.itemLink('Acme Corporation')).toBeVisible();
            await expect(domains.itemLink('Place Technology')).toHaveCount(0);
        });

        test('AC-DOM-001-3: selecting a domain opens its details', async ({
            page,
        }) => {
            await domains.goto();
            await domains.itemLink('Acme Corporation').click();

            await expect(page).toHaveURL(/#\/domains\/dom-acme\//);
            await expect(domains.itemName).toHaveText('Acme Corporation');
        });
    });

    test.describe('US-DOM-002: View Domain Details', () => {
        test('AC-DOM-002-1: shows the domain, description and email domains', async () => {
            await domains.gotoItem(PLACE_ID);

            await expect(domains.itemDetails).toContainText('place.tech');
            await expect(domains.tabContent).toContainText('Main tenant');
            await expect(
                domains.tabContent.getByRole('button', { name: 'place.tech' }),
            ).toBeVisible();
        });
    });

    test.describe('US-DOM-003: Create New Domain', () => {
        test('AC-DOM-003-2: name and domain are required', async () => {
            await domains.goto();
            await domains.openAddModal();

            await domains.saveButton.click();

            await expect(domains.dialog).toBeVisible();
            await expect(domains.dialog.locator('mat-error')).toHaveCount(2);
        });

        test('AC-DOM-003-4: saves the domain and opens it', async () => {
            await domains.goto();

            await domains.createWith(async () => {
                await domains.dialog
                    .getByRole('textbox', { name: 'Name*' })
                    .fill('Globex');
                await domains.dialog
                    .getByRole('textbox', { name: 'Domain Name' })
                    .fill('globex.example.com');
            });

            await expect(domains.itemName).toHaveText('Globex');
            await expect(domains.itemDetails).toContainText(
                'globex.example.com',
            );
            await expect(domains.itemLink('Globex')).toBeVisible();
        });
    });

    test.describe('US-DOM-004: Edit Domain Configuration', () => {
        test('AC-DOM-004-1: a changed description is kept', async ({
            page,
        }) => {
            await domains.gotoItem(PLACE_ID);
            await domains.openEditModal();

            const description = domains.dialog.getByRole('textbox', {
                name: 'Description',
            });
            await expect(description).toHaveValue('Main tenant');
            await description.fill('Head office tenant');
            await domains.saveButton.click();
            await expect(domains.dialog).toBeHidden();

            await expect(domains.tabContent).toContainText(
                'Head office tenant',
            );
            await page.reload();
            await domains.waitForItemDetails();
            await expect(domains.tabContent).toContainText(
                'Head office tenant',
            );
        });
    });

    test.describe('US-DOM-005: Delete Domain', () => {
        test('AC-DOM-005-2: removes the domain from the list', async () => {
            await domains.gotoItem('dom-acme');
            await domains.deleteSelected();

            await expect(domains.itemLink('Acme Corporation')).toHaveCount(0);
            await expect(domains.itemLink('Place Technology')).toBeVisible();
        });
    });

    test.describe('US-DOM-006: Manage OAuth Applications', () => {
        test('AC-DOM-006-1: shows the empty applications list', async () => {
            await domains.gotoItem(PLACE_ID);
            await domains.openTab('applications');

            await expect(domains.tabContent).toContainText(
                'No applications for this domain',
            );
            await expect(
                domains.tabContent.getByRole('button', {
                    name: 'New Application',
                }),
            ).toBeVisible();
        });
    });

    test.describe('US-DOM-007: Configure Authentication', () => {
        test('AC-DOM-007-1: shows the empty authentication list', async () => {
            await domains.gotoItem(PLACE_ID);
            await domains.openTab('authentication');

            await expect(domains.tabContent).toContainText(
                'No authentication methods for this domain',
            );
            await expect(
                domains.tabContent.getByRole('button', {
                    name: 'New Auth Method',
                }),
            ).toBeVisible();
        });
    });

    test.describe('US-DOM-010: View Domain Users', () => {
        test('AC-DOM-010-1: lists the users of the domain with their role', async () => {
            await domains.gotoItem(PLACE_ID);
            await domains.openTab('users');

            const admin = domains.tabContent.getByRole('row', {
                name: /Place Admin/,
            });
            await expect(admin).toContainText('admin@place.tech');
            await expect(admin.locator('code')).toHaveText('Admin');
        });

        test('AC-DOM-010-1: leaves out users of other domains', async () => {
            await domains.gotoItem('dom-acme');
            await domains.openTab('users');

            // The list is empty while it loads, so wait for the load to end
            await expect(
                domains.tabContent.locator('mat-progress-bar'),
            ).toBeHidden();
            await expect(domains.tabContent).toContainText(
                'No users associated with this domain',
            );
        });
    });
});
