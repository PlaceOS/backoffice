import {
    PlaceRepositoryType,
    MockHttpRequestHandler,
    registerMockEndpoint,
} from '@placeos/ts-client';

import { DISCOVERY as DISCOVERY_DATA } from '../data/discovery';

import { generateBasicHandlers, API, generateID } from '../common.mock';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import { subMinutes } from 'date-fns';

const FILTER_FN = (item: any, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            (item.name || '')
                .toLowerCase()
                .indexOf((q.q || '').toLowerCase()) >= 0;
    }
    return match;
};

const REPO_DATA = [
    {
        id: `repo-${generateID()}`,
        name: 'PlaceOS Drivers',
        folder_name: 'drivers/placeos',
        uri: 'https://github.com/PlaceOS/drivers',
        commit_hash: 'HEAD',
        type: PlaceRepositoryType.Driver,
    },
];

const DRIVER_LIST = (DISCOVERY_DATA as any).map((driver) => driver.id);

const COMMIT_LIST = [
    {
        commit: generateID(6, '1234567890abcdef'.split('')),
        date: subMinutes(
            Date.now(),
            Math.floor(Math.random() * 30 * 24 * 60)
        ).valueOf(),
        author: 'alex@place.tech',
        subject: 'feat(drivers): cleanup drivers',
    },
    {
        commit: generateID(6, '1234567890abcdef'.split('')),
        date: subMinutes(
            Date.now(),
            Math.floor(Math.random() * 30 * 24 * 60)
        ).valueOf(),
        author: 'alex@place.tech',
        subject: 'chore(readme): update readme',
    },
    {
        commit: generateID(6, '1234567890abcdef'.split('')),
        date: subMinutes(
            Date.now(),
            Math.floor(Math.random() * 30 * 24 * 60)
        ).valueOf(),
        author: 'alex@place.tech',
        subject: 'refactor(drivers): cleanup lighting driver',
    },
    {
        commit: generateID(6, '1234567890abcdef'.split('')),
        date: subMinutes(
            Date.now(),
            Math.floor(Math.random() * 30 * 24 * 60)
        ).valueOf(),
        author: 'alex@place.tech',
        subject: 'test(drivers): update test coverage',
    },
];

COMMIT_LIST.sort((a, b) => b.date - a.date);

/** Add GET for show */
registerMockEndpoint({
    path: `${API}/repositories/interfaces`,
    metadata: REPO_DATA,
    method: 'GET',
    callback: (_) =>
        REPO_DATA.filter(
            (repo) => repo.type === PlaceRepositoryType.Interface
        ).map((repo) => repo.name),
} as MockHttpRequestHandler);

/** Add basic API handlers for systems */
generateBasicHandlers(`${API}/repositories`, REPO_DATA, FILTER_FN);

/** Add handlers for getting respository drivers */
registerMockEndpoint({
    path: `${API}/repositories/:id/drivers`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            return DRIVER_LIST;
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handlers for getting respository driver's commits */
registerMockEndpoint({
    path: `${API}/repositories/:id/commits`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            return COMMIT_LIST;
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);

/** Add handlers for getting respository driver's details */
registerMockEndpoint({
    path: `${API}/repositories/:id/details`,
    metadata: [],
    method: 'GET',
    callback: (event) => {
        if (event.route_params.id) {
            return DISCOVERY_DATA.find(
                (driver) => driver.id === event.query_params.driver
            );
        }
        throw { status: 404, message: 'System not found' };
    },
} as MockHttpRequestHandler);
