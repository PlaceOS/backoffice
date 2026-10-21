import { expect, seedMockData, test } from './fixtures/test-fixtures';
import { FeaturePage } from './pages';

/**
 * Repositories E2E Tests
 *
 * Tests for user stories in `user-stories/repositories.md` (US-REP-*)
 *
 * The mock backend has no branch, pull or remote lookup endpoints, so
 * creating a repository, pulling and branch selection are not covered.
 */

const REPOSITORIES = [
    {
        id: 'repo-drivers',
        name: 'PlaceOS Drivers',
        repo_type: 'driver',
        folder_name: 'drivers',
        uri: 'https://github.com/PlaceOS/drivers',
        branch: 'master',
        commit_hash: 'HEAD',
    },
    {
        id: 'repo-kiosk',
        name: 'Kiosk Interface',
        repo_type: 'interface',
        folder_name: 'kiosk',
        uri: 'https://github.com/PlaceOS/kiosk',
        branch: 'build/prod',
        commit_hash: 'a1b2c3d4',
    },
];

/** Driver the mock lists for every driver repository */
const DRIVER_FILE = 'disc-::Aca::DeviceProbe';

test.describe('Repositories', () => {
    let repositories: FeaturePage;

    test.beforeEach(async ({ page }) => {
        // Interface repositories fetch `/<folder>/CHANGELOG.md`, which the
        // dev proxy can send to a live server. Keep it local.
        await page.route('**/CHANGELOG.md', (route) =>
            route.fulfill({ status: 404 }),
        );
        await seedMockData(page, 'repositories', REPOSITORIES);
        repositories = new FeaturePage(page, 'repositories');
    });

    test.describe('US-REP-001: View Repositories List', () => {
        test('AC-REP-001-1: lists every repository', async () => {
            await repositories.goto();

            await expect(
                repositories.itemLink('PlaceOS Drivers'),
            ).toBeVisible();
            await expect(
                repositories.itemLink('Kiosk Interface'),
            ).toBeVisible();
        });

        test('AC-REP-001-2: search filters the list', async () => {
            await repositories.goto();
            await repositories.search('Kiosk');

            await expect(
                repositories.itemLink('Kiosk Interface'),
            ).toBeVisible();
            await expect(repositories.itemLink('PlaceOS Drivers')).toHaveCount(
                0,
            );
        });

        test('AC-REP-001-3: selecting a repository opens its details', async ({
            page,
        }) => {
            await repositories.goto();
            await repositories.itemLink('Kiosk Interface').click();

            await expect(page).toHaveURL(/#\/repositories\/repo-kiosk\/about/);
            await expect(repositories.itemName).toHaveText('Kiosk Interface');
        });
    });

    test.describe('US-REP-002: View Repository Details', () => {
        test('AC-REP-002-1: shows the repository URL', async () => {
            await repositories.gotoItem('repo-drivers');

            await expect(
                repositories.tabContent.getByRole('link', {
                    name: 'https://github.com/PlaceOS/drivers',
                }),
            ).toHaveAttribute('href', 'https://github.com/PlaceOS/drivers');
        });

        test('AC-REP-002-2: shows the repository type', async () => {
            await repositories.gotoItem('repo-drivers');
            await expect(repositories.tabContent).toContainText(
                'Driver Repository',
            );

            await repositories.itemLink('Kiosk Interface').click();
            await expect(repositories.itemName).toHaveText('Kiosk Interface');
            await expect(repositories.tabContent).toContainText(
                'Interface Repository',
            );
        });

        test('AC-REP-002-4: shows the branch and the latest commit', async () => {
            await repositories.gotoItem('repo-drivers');

            await expect(repositories.tabContent).toContainText('master');
            // Pinned commit, then the latest commit the backend reports
            await expect(
                repositories.tabContent.locator('code').filter({
                    hasText: 'HEAD',
                }),
            ).toHaveText(/^\s*HEAD\s+\([0-9a-f]{6}\)\s*$/);
        });
    });

    test.describe('US-REP-003: Create New Repository', () => {
        test('AC-REP-003-1: the add button opens an empty form that requires name, folder and URI', async () => {
            await repositories.goto();
            await repositories.openAddModal();

            await expect(
                repositories.dialog.getByRole('heading', {
                    name: 'New repository',
                }),
            ).toBeVisible();
            await repositories.saveButton.click();

            await expect(repositories.dialog).toBeVisible();
            await expect(repositories.dialog.locator('mat-error')).toHaveText([
                'A repository name is required',
                'A folder name is required',
                'A URI is required',
            ]);
        });
    });

    test.describe('US-REP-004: Edit Repository Configuration', () => {
        test('AC-REP-004-3: saved changes persist', async ({ page }) => {
            await repositories.gotoItem('repo-drivers');
            await repositories.openEditModal();

            const name = repositories.dialog.getByRole('textbox', {
                name: 'Name*',
            });
            await expect(name).toHaveValue('PlaceOS Drivers');
            await name.fill('Core Drivers');
            await repositories.dialog
                .getByRole('textbox', { name: 'Description' })
                .fill('Drivers for the core platform');
            await repositories.saveButton.click();
            await expect(repositories.dialog).toBeHidden();

            await page.reload();
            await repositories.waitForItemDetails();
            await expect(repositories.itemName).toHaveText('Core Drivers');
            await expect(repositories.tabContent).toContainText(
                'Drivers for the core platform',
            );
            await expect(repositories.itemLink('Core Drivers')).toBeVisible();
        });
    });

    test.describe('US-REP-005: Delete Repository', () => {
        test('AC-REP-005-1: dismissing the confirmation keeps the repository', async ({
            page,
        }) => {
            await repositories.gotoItem('repo-drivers');
            await repositories.openDeleteConfirmation();
            await page.keyboard.press('Escape');

            await expect(page.locator('confirm-modal')).toHaveCount(0);
            await expect(repositories.itemName).toHaveText('PlaceOS Drivers');
            await expect(
                repositories.itemLink('PlaceOS Drivers'),
            ).toBeVisible();
        });

        test('AC-REP-005-3: a deleted repository is removed', async ({
            page,
        }) => {
            await repositories.gotoItem('repo-drivers');
            await repositories.deleteSelected();

            await page.reload();
            await expect(
                repositories.itemLink('Kiosk Interface'),
            ).toBeVisible();
            await expect(repositories.itemLink('PlaceOS Drivers')).toHaveCount(
                0,
            );
        });
    });

    test.describe('US-REP-008: View Drivers in Repository', () => {
        test('AC-REP-008-1: the drivers tab lists every driver', async ({
            page,
        }) => {
            await repositories.gotoItem('repo-drivers', 'drivers');

            const tab = page.locator('item-tablist a[href*="/drivers"]');
            await expect(tab).toContainText('20');
            await expect(
                repositories.tabContent.locator(
                    'button:has(icon:has-text("add"))',
                ),
            ).toHaveCount(20);
            await expect(repositories.tabContent).toContainText(DRIVER_FILE);
        });

        test('AC-REP-008-3: a driver can be added from the repository', async ({
            page,
        }) => {
            await repositories.gotoItem('repo-drivers', 'drivers');
            const row = await repositories.tableRow(DRIVER_FILE);
            await row.getByRole('button').click();

            const dialog = repositories.dialog;
            await expect(
                dialog.getByRole('heading', { name: 'New driver' }),
            ).toBeVisible();
            await expect(
                dialog.getByRole('combobox', {
                    name: 'Search for repositories...',
                }),
            ).toHaveValue('PlaceOS Drivers');
            await expect(
                dialog.getByRole('combobox', { name: 'Search for drivers...' }),
            ).toHaveValue(DRIVER_FILE);

            await dialog
                .getByRole('combobox', { name: 'Search for commit...' })
                .click();
            await dialog.getByRole('option').first().click();
            // The mock driver details have no `descriptive_name` or
            // `generic_name`, so both fields start empty
            await dialog
                .getByRole('textbox', { name: 'Name *', exact: true })
                .fill('Lobby Device Probe');
            await dialog
                .getByRole('textbox', { name: 'Module Name *' })
                .fill('Probe');
            await repositories.saveButton.click();
            await expect(dialog).toBeHidden();

            const drivers = new FeaturePage(page, 'drivers');
            await drivers.goto();
            await expect(drivers.itemLink('Lobby Device Probe')).toBeVisible();
        });
    });
});
