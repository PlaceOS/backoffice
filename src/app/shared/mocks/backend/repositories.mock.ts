import { MockHttpRequestHandler } from '@placeos/ts-client';

import { padZero, randomInt } from '../../utilities/general.utilities';
import { API } from '../common.mock';

import * as faker from 'faker';
import * as dayjs from 'dayjs';

export function generateMockRepository(overrides: any = {}) {
    if (typeof overrides !== 'object' || !overrides) {
        overrides = {};
    }
    const company = faker.company
        .companyName()
        .split(' ')
        .join('-')
        .toLowerCase();
    const product = faker.commerce
        .productName()
        .split(' ')
        .join('-');
    return {
        id: `repo-${Math.floor(Math.random() * 999_999_999)}`,
        name: `${product}`,
        folder_name: `${company}/${product}`,
        description: faker.lorem.paragraph(),
        uri: `https://github.com/placeos/${company}-drivers`,
        commit_hash: 'HEAD',
        type: Math.floor(Math.random() * 999_999_999) % 2,
        ...overrides
    };
}

export const MOCK_REPOSITORIES = Array(5)
    .fill(0)
    .map(_ => generateMockRepository());

const MOCK_DRIVERS = window.backend.model.backend.drivers.model.drivers;

MOCK_REPOSITORIES.forEach(repo => {
    repo.commits = Array(5)
        .fill(0)
        .map(_ => padZero(randomInt(99_999_999), 8));
    repo.drivers = Array(randomInt(10))
        .fill(0)
        .map(_ => MOCK_DRIVERS[randomInt(MOCK_DRIVERS.length)].id);
});

// Add handler for repositories index endpoint
window.control.handlers.push({
    path: `${API}/repositories`,
    metadata: MOCK_REPOSITORIES,
    callback: event => {
        let data = [...MOCK_REPOSITORIES];
        if (event.query_params.q) {
            const search = event.query_params.q.toLowerCase();
            data = data.filter(repo => (repo.name || '').toLowerCase().indexOf(search));
        }
        return { total: data.length, results: data };
    }
} as MockHttpRequestHandler);

// Add handler for repository show endpoint
window.control.handlers.push({
    path: `${API}/repositories/:id`,
    metadata: MOCK_REPOSITORIES,
    callback: event => {
        const item = MOCK_REPOSITORIES.find(repo => repo.id === event.route_params.id);
        if (item) {
            return item;
        }
        throw {
            status: 404,
            message: `Unable to find repository with ID ${event.route_params.id}`
        };
    }
} as MockHttpRequestHandler);

// Add handler for repository POST endpoint
window.control.handlers.push({
    path: `${API}/repositories`,
    metadata: MOCK_REPOSITORIES,
    method: 'POST',
    callback: event => {
        const new_item = { ...event.body, id: `repo-${randomInt(999_999_999)}` };
        MOCK_REPOSITORIES.push(new_item);
        return new_item;
    }
} as MockHttpRequestHandler);

// Add handler for repository PUT endpoint
window.control.handlers.push({
    path: `${API}/repositories/:id`,
    metadata: MOCK_REPOSITORIES,
    method: 'PUT',
    callback: event => {
        const item = MOCK_REPOSITORIES.find(repo => repo.id === event.route_params.id);
        if (item) {
            const updated_item = { ...item, ...event.body };
            MOCK_REPOSITORIES.splice(MOCK_REPOSITORIES.indexOf(item), 1, updated_item);
            return updated_item;
        }
        throw {
            status: 404,
            message: `Unable to find repository with ID ${event.route_params.id}`
        };
    }
} as MockHttpRequestHandler);

// Add handler for repository show endpoint
window.control.handlers.push({
    path: `${API}/repositories/:id/drivers`,
    metadata: MOCK_REPOSITORIES,
    callback: event => {
        const repo = MOCK_REPOSITORIES.find(a_repo => a_repo.id === event.route_params.id);
        if (repo) {
            const driver_list = repo.drivers.map(id =>
                MOCK_DRIVERS.find(a_driver => a_driver.id === id)
                    .name.split(' ')
                    .join('/')
            );
            return driver_list;
        }
        throw {
            status: 404,
            message: `Unable to find repository with ID ${event.route_params.id}`
        };
    }
} as MockHttpRequestHandler);

// Add handler for repository show endpoint
window.control.handlers.push({
    path: `${API}/repositories/:id/commits`,
    metadata: MOCK_REPOSITORIES,
    callback: event => {
        const repo = MOCK_REPOSITORIES.find(a_repo => a_repo.id === event.route_params.id);
        if (repo) {
            const driver = MOCK_DRIVERS.find(
                a_driver => a_driver.name.split(' ').join('/') === event.query_params.driver
            );
            if (!driver)
                throw {
                    status: 404,
                    message: `Unable to find driver with ID ${event.query_params.driver}`
                };
            return repo.commits
                .map(hash => ({
                    commit: hash,
                    date: dayjs()
                        .subtract(randomInt(999, 10) * 20, 'm')
                        .unix(),
                    author: `${faker.name.firstName()} ${faker.name.lastName()}`,
                    subject: `chore(${driver.class}): various changes`
                }))
                .sort((a, b) => a.date - b.date);
        }
        throw {
            status: 404,
            message: `Unable to find repository with ID ${event.route_params.id}`
        };
    }
} as MockHttpRequestHandler);

// Add handler for repository show endpoint
window.control.handlers.push({
    path: `${API}/repositories/:id/details`,
    metadata: MOCK_REPOSITORIES,
    callback: event => {
        const repo = MOCK_REPOSITORIES.find(a_repo => a_repo.id === event.route_params.id);
        if (repo) {
            const driver = MOCK_DRIVERS.find(
                a_driver => a_driver.name.split(' ').join('/') === event.query_params.driver
            );
            if (!driver)
                throw {
                    status: 404,
                    message: `Unable to find driver with ID ${event.query_params.driver}`
                };
            return {
                descriptive_name: driver.name,
                generic_name: driver.module_name,
                class_name: driver.class,
                description: driver.description,
                default_settings: driver.settings
            };
        }
        throw {
            status: 404,
            message: `Unable to find repository with ID ${event.route_params.id}`
        };
    }
} as MockHttpRequestHandler);
