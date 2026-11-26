import {
    ENGINE_API,
    lastWord,
    uniqueName,
    waitForListed,
} from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';
import {
    createDriver,
    createRepository,
    fieldOf,
    Repository,
    statusOf,
} from './support/drivers';

/**
 * Repositories on the local stack (`user-stories/repositories.md`).
 *
 * The stack has no core and rest-api cannot reach frontend-loader, so every
 * git lookup (branches, commits, drivers of a repository, pull) fails. These
 * tests use repository records only.
 */
test.describe('Repositories on the local backend', () => {
    test('AC-REP-001-2 and AC-REP-001-3: search finds a repository and opens it', async ({
        page,
        api,
        cleanup,
    }) => {
        const found = await createRepository(api, cleanup, {
            name: uniqueName('E2E Lighting Repo'),
        });
        const other = await createRepository(api, cleanup, {
            name: uniqueName('E2E Audio Repo'),
        });
        // Search comes from Elasticsearch, which indexes a new item late
        for (const repo of [found, other]) {
            await waitForListed(
                api,
                `${ENGINE_API}/repositories`,
                lastWord(repo.name),
                repo.id,
            );
        }
        const repositories = new FeaturePage(page, 'repositories');
        await repositories.goto();

        // The last word of a unique name is unique, so it finds one repository
        await repositories.search(lastWord(other.name));
        await expect(repositories.itemLink(other.name)).toBeVisible();
        await repositories.search(lastWord(found.name));
        await expect(repositories.itemLink(found.name)).toBeVisible();
        await expect(repositories.itemLink(other.name)).toHaveCount(0);

        await repositories.itemLink(found.name).click();
        await expect(page).toHaveURL(
            new RegExp(`#/repositories/${found.id}/about`),
        );
        await expect(repositories.itemName).toHaveText(found.name);
    });

    test('AC-REP-002-1, AC-REP-002-2 and AC-REP-002-4: details show the URI, type, branch and commit', async ({
        page,
        api,
        cleanup,
    }) => {
        const repo = await createRepository(api, cleanup, {
            branch: 'release/e2e',
            commit_hash: 'a1b2c3d4e5',
        });
        // A repository that does not exist, so frontend-loader clones nothing
        const iface = await createRepository(api, cleanup, {
            repo_type: 'interface',
            uri: 'https://github.com/PlaceOS/e2e-no-such-repository',
            branch: 'main',
        });
        const repositories = new FeaturePage(page, 'repositories');

        await repositories.gotoItem(repo.id);
        await expect(
            repositories.tabContent.getByRole('link', { name: repo.uri }),
        ).toHaveAttribute('href', repo.uri);
        await expect(repositories.tabContent).toContainText(
            'Driver Repository',
        );
        await expect(
            repositories.tabContent.locator('code').filter({
                hasText: 'release/e2e',
            }),
        ).toBeVisible();
        await expect(
            repositories.tabContent.locator('code').filter({
                hasText: 'a1b2c3d4e5',
            }),
        ).toBeVisible();

        await repositories.gotoItem(iface.id);
        await expect(repositories.itemName).toHaveText(iface.name);
        await expect(repositories.tabContent).toContainText(
            'Interface Repository',
        );
    });

    test('AC-REP-004-3: an edited repository is saved', async ({
        page,
        api,
        cleanup,
    }) => {
        const repo = await createRepository(api, cleanup);
        const repositories = new FeaturePage(page, 'repositories');
        const name = uniqueName('E2E Renamed Repo');

        await repositories.gotoItem(repo.id);
        await repositories.openEditModal();
        const name_field = repositories.dialog.getByRole('textbox', {
            name: 'Name*',
        });
        await expect(name_field).toHaveValue(repo.name);
        await name_field.fill(name);
        await repositories.dialog
            .getByRole('textbox', { name: 'Description' })
            .fill('Drivers for the e2e tests');
        await repositories.saveButton.click();
        await expect(repositories.dialog).toBeHidden();

        await expect(repositories.itemName).toHaveText(name);
        const saved = await fieldOf<Repository, 'name'>(
            api,
            'repositories',
            repo.id,
            'name',
        );
        expect(saved).toBe(name);
        expect(
            await fieldOf<Repository, 'description'>(
                api,
                'repositories',
                repo.id,
                'description',
            ),
        ).toBe('Drivers for the e2e tests');
    });

    test('AC-REP-005-1: a dismissed delete keeps the repository', async ({
        page,
        api,
        cleanup,
    }) => {
        const repo = await createRepository(api, cleanup);
        const repositories = new FeaturePage(page, 'repositories');

        await repositories.gotoItem(repo.id);
        await repositories.openDeleteConfirmation();
        await page.keyboard.press('Escape');

        await expect(page.locator('confirm-modal')).toHaveCount(0);
        await expect(repositories.itemName).toHaveText(repo.name);
        expect(await statusOf(api, 'repositories', repo.id)).toBe(200);
    });

    // The backend deletes the drivers, and their modules, with the repository
    test('AC-REP-005-2: the delete confirmation warns about the drivers of the repository', async ({
        page,
        api,
        cleanup,
    }) => {
        const repo = await createRepository(api, cleanup);
        await createDriver(api, cleanup, repo.id);
        const repositories = new FeaturePage(page, 'repositories');

        await repositories.gotoItem(repo.id);
        await repositories.openDeleteConfirmation();

        await expect(page.locator('confirm-modal')).toContainText(
            'Its drivers and their modules are removed immediately',
        );
    });

    test('AC-REP-005-3: a deleted repository is removed with its drivers', async ({
        page,
        api,
        cleanup,
    }) => {
        const repo = await createRepository(api, cleanup);
        const driver = await createDriver(api, cleanup, repo.id);
        const repositories = new FeaturePage(page, 'repositories');

        await repositories.gotoItem(repo.id);
        await repositories.deleteSelected();

        expect(await statusOf(api, 'repositories', repo.id)).toBe(404);
        expect(await statusOf(api, 'drivers', driver.id)).toBe(404);
    });
});
