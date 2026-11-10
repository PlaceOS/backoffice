import { PlaceRepositoryType, registerMockEndpoint } from '@placeos/ts-client';

import { DISCOVERY as DISCOVERY_DATA } from '../data/discovery';

import {
    API,
    endpointData,
    generateBasicHandlers,
    generateID,
    nameFilter,
    notFound,
    updateItem,
} from '../common.mock';

const REPO_DATA = [
    {
        id: 'repo-placeos-drivers',
        name: 'PlaceOS Drivers',
        folder_name: 'drivers/placeos',
        uri: 'https://github.com/PlaceOS/drivers',
        branch: 'master',
        commit_hash: 'HEAD',
        repo_type: PlaceRepositoryType.Driver,
    },
    {
        id: 'repo-placeos-interfaces',
        name: 'PlaceOS Interfaces',
        folder_name: 'interfaces/placeos',
        uri: 'https://github.com/PlaceOS/interfaces',
        branch: 'main',
        commit_hash: 'HEAD',
        repo_type: PlaceRepositoryType.Interface,
    },
];

const BRANCHES = ['master', 'main', 'develop', 'release/2.0'];

const DRIVER_LIST = (DISCOVERY_DATA as Record<string, unknown>[]).map(
    (driver) => driver.id,
);

const DAY = 24 * 60 * 60 * 1000;

/** Commits of every repository and branch, newest first */
const COMMIT_LIST = [
    'feat(drivers): cleanup drivers',
    'chore(readme): update readme',
    'refactor(drivers): cleanup lighting driver',
    'test(drivers): update test coverage',
].map((subject, idx) => ({
    commit: generateID(6, '1234567890abcdef'.split('')),
    date: new Date(Date.now() - (idx + 1) * 3 * DAY).toISOString(),
    author: 'dev@place.tech',
    subject,
}));

/** HTML files of an interface repository, for the signage plugin import */
const INTERFACE_FILES = ['weather/index.html', 'clock/index.html'];

/** Names of the interface repositories. Registered before `repositories/:id` */
registerMockEndpoint({
    path: `${API}/repositories/interfaces`,
    method: 'GET',
    callback: () =>
        endpointData(`${API}/repositories`)
            .filter((repo) => repo.repo_type === PlaceRepositoryType.Interface)
            .map((repo) => repo.name),
});

/** Details of a repository that is not added yet */
registerMockEndpoint({
    path: `${API}/repositories/remote_branches`,
    method: 'GET',
    callback: () => BRANCHES,
});

registerMockEndpoint({
    path: `${API}/repositories/remote_default_branch`,
    method: 'GET',
    callback: () => 'master',
});

registerMockEndpoint({
    path: `${API}/repositories/remote_commits`,
    method: 'GET',
    callback: () => COMMIT_LIST,
});

/** Add basic API handlers for repositories */
generateBasicHandlers(`${API}/repositories`, REPO_DATA, {
    filter: nameFilter,
    id_prefix: 'repo-',
});

/** Find a repository, or fail with a 404 */
function findRepo(id: string) {
    return (
        endpointData(`${API}/repositories`).find((repo) => repo.id === id) ||
        notFound('Repository')
    );
}

/** Register a GET handler for a detail of a repository */
function repoDetail(
    name: string,
    value: (repo: Record<string, unknown>) => unknown,
) {
    registerMockEndpoint({
        path: `${API}/repositories/:id/${name}`,
        method: 'GET',
        callback: (event) => value(findRepo(event.route_params.id)),
    });
}

repoDetail('drivers', () => DRIVER_LIST);
repoDetail('commits', () => COMMIT_LIST);
repoDetail('branches', () => BRANCHES);
repoDetail('default_branch', (repo) => repo.branch || 'master');
repoDetail('files', (repo) =>
    repo.repo_type === PlaceRepositoryType.Interface ? INTERFACE_FILES : [],
);

registerMockEndpoint({
    path: `${API}/repositories/:id/details`,
    method: 'GET',
    callback: (event) => {
        findRepo(event.route_params.id);
        const driver = DISCOVERY_DATA.find(
            ({ id }) => id === event.query_params.driver,
        );
        if (!driver) return notFound('Driver');
        // The API sends the default settings as a JSON string
        return {
            ...driver,
            default_settings: JSON.stringify(driver.settings || {}),
        };
    },
});

/** Pull the latest commit. The mock is always up to date */
registerMockEndpoint({
    path: `${API}/repositories/:id/pull`,
    method: 'POST',
    callback: (event) => {
        findRepo(event.route_params.id);
        const commit_hash = COMMIT_LIST[0].commit;
        updateItem(`${API}/repositories`, event.route_params.id, {
            commit_hash,
        });
        return { commit_hash };
    },
});
