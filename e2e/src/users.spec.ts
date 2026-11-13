import { expect, test } from './fixtures/test-fixtures';
import { UsersPage } from './pages';

/**
 * Users E2E Tests
 *
 * Tests for user stories US-USR-001 through US-USR-012
 */

test.describe('Users', () => {
    let users: UsersPage;

    test.beforeEach(async ({ page }) => {
        users = new UsersPage(page);
    });

    test.describe('US-USR-001: View Users List', () => {
        test('AC-USR-001-1: lists the users', async () => {
            await users.goto();

            // Sorted by name. The list only renders the rows in view
            await expect(users.itemLink('Adrian Kowalski')).toBeVisible();
            await expect(users.itemLink('Aisha Johnson')).toBeVisible();
        });

        test('AC-USR-001-2: search filters the list', async () => {
            await users.goto();
            await users.search('Chris');

            await expect(users.itemLink('Chris Anderson')).toBeVisible();
            await expect(users.itemLink('Adrian Kowalski')).toHaveCount(0);
        });

        test('AC-USR-001-3: selecting a user opens their details', async ({
            page,
        }) => {
            await users.goto();
            await users.itemLink('Aisha Johnson').click();

            await expect(page).toHaveURL(/#\/users\/staff-33\//);
            await expect(users.itemName).toHaveText('Aisha Johnson');
        });
    });

    test.describe('US-USR-002: View User Details', () => {
        test('AC-USR-002-1: shows the email address', async () => {
            await users.openUser('Chris Anderson');

            await expect(
                users.tabContent.getByRole('link', {
                    name: 'chris.anderson@place.tech',
                }),
            ).toHaveAttribute('href', 'mailto:chris.anderson@place.tech');
        });
    });

    test.describe('US-USR-003: Create New User', () => {
        test('AC-USR-003-2: names, email and password are required', async () => {
            await users.goto();
            await users.openAddModal();

            await users.saveButton.click();

            await expect(users.dialog).toBeVisible();
            await expect(
                users.dialog.locator('app-form-field [error]:visible'),
            ).toHaveCount(4);
        });

        test('AC-USR-003-6: saves the user and opens them', async () => {
            await users.goto();

            await users.createWith(() =>
                users.fillNewUser({
                    first_name: 'Grace',
                    last_name: 'Hopper',
                    email: 'grace.hopper@place.tech',
                    password: 'Cobol-1959!',
                }),
            );

            await expect(users.itemName).toHaveText('Grace Hopper');
            await expect(
                users.tabContent.getByRole('link', {
                    name: 'grace.hopper@place.tech',
                }),
            ).toBeVisible();
            await users.search('Grace');
            await expect(users.itemLink('Grace Hopper')).toBeVisible();
        });
    });

    test.describe('US-USR-004: Edit User Details', () => {
        test('AC-USR-004-1: the edit form holds the current email', async () => {
            await users.openUser('Chris Anderson');
            await users.openEditModal();

            await expect(users.field('Email*')).toHaveValue(
                'chris.anderson@place.tech',
            );
        });

        test('AC-USR-004-4: a changed email is kept', async ({ page }) => {
            await users.openUser('Chris Anderson');
            await users.openEditModal();
            await users.field('Email*').fill('chris@place.tech');
            await users.saveButton.click();
            await expect(users.dialog).toBeHidden();

            const email = users.tabContent.getByRole('link', {
                name: 'chris@place.tech',
            });
            await expect(email).toBeVisible();
            await page.reload();
            await users.waitForItemDetails();
            await expect(email).toBeVisible();
        });
    });

    test.describe('US-USR-005: Delete User', () => {
        test('AC-USR-005-2: removes the user from the list', async () => {
            await users.openUser('Chris Anderson');
            await users.deleteSelected();

            await expect(users.itemLink('Chris Anderson')).toHaveCount(0);
            await users.clearSearch();
            await expect(users.itemLink('Adrian Kowalski')).toBeVisible();
        });

        test('AC-USR-005-3: keeps the user when the confirmation is dismissed', async ({
            page,
        }) => {
            await users.openUser('Chris Anderson');
            await users.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(users.itemName).toHaveText('Chris Anderson');
        });
    });

    test.describe('US-USR-009: Manage User Metadata', () => {
        test('AC-USR-009-1: shows the empty metadata list', async () => {
            await users.openUser('Chris Anderson');
            await users.openTab('metadata');

            await expect(users.tabContent).toContainText(
                'No Metadata blocks found',
            );
        });

        test('AC-USR-009-2: shows a spinner while metadata loads', async ({
            page,
        }) => {
            await page.addInitScript(() => {
                sessionStorage.setItem('PLACEOS.mocks.metadata_delay', '1000');
            });
            await users.openUser('Chris Anderson');
            await users.openTab('metadata');

            await expect(users.metadataLoadingSpinner).toBeVisible();
            await expect(users.metadataLoadingSpinner).toBeHidden();
        });
    });

    test.describe('US-USR-010: View User History', () => {
        test('AC-USR-010-1: shows the empty session log', async () => {
            await users.openUser('Chris Anderson');
            await users.openTab('history');

            await expect(users.tabContent).toContainText(
                'No logs found for this user',
            );
        });
    });
});
