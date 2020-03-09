
import { MockHttpRequestHandler, MockHttpRequest } from '@placeos/ts-client';
import { API } from '../common.mock';
import { initialiseGlobals } from './base.mock';

export const MOCK_SETTINGS: any[] = [];

initialiseGlobals();

// Add handler for users index
window.control.handlers.push({
    path: `${API}/settings`,
    metadata: MOCK_SETTINGS,
    callback: event => {
        if (event.query_params.parent_id) {
            return MOCK_SETTINGS.filter(item => item.parent_id === event.query_params.parent_id);
        }
        return [];
    }
} as MockHttpRequestHandler);

const handlerCreateEdit = (event: MockHttpRequest) => {
    let old_version = event.route_params.id ? MOCK_SETTINGS.filter(item => item.id === event.route_params.id)[0] : null;
    if (!old_version && !event.body && !event.body.parent_id) {
        throw { status: 400, message: 'Settings require a parent' };
    }
    const version = MOCK_SETTINGS.filter(item => item.parent_id === event.body.parent_id).length + 1;
    MOCK_SETTINGS.push(old_version ? { ...old_version, ...event.body, version } : { ...event.body, version });
    return '';
}

// Add handler for settings index
window.control.handlers.push({
    path: `${API}/settings`,
    metadata: MOCK_SETTINGS,
    method: 'POST',
    callback: handlerCreateEdit
} as MockHttpRequestHandler);

// Add handler for settings show
window.control.handlers.push({
    path: `${API}/settings/:id`,
    metadata: MOCK_SETTINGS,
    method: 'GET',
    callback: _ => {
        throw { status: 400, message: 'Endpoint does not resolve' };
    }
});

// Add handler for users index
window.control.handlers.push({
    path: `${API}/settings/:id`,
    metadata: MOCK_SETTINGS,
    method: 'PUT',
    callback: handlerCreateEdit
} as MockHttpRequestHandler);

// Add handler for users index
window.control.handlers.push({
    path: `${API}/settings/:id`,
    metadata: MOCK_SETTINGS,
    method: 'DELETE',
    callback: event => {
        const settings = MOCK_SETTINGS.find(item => item.id === event.route_params.id);
        if (!settings) {
            throw { status: 404, message: `Setting with the ID ${event.route_params.id} not found` };
        }
        MOCK_SETTINGS.splice(MOCK_SETTINGS.indexOf(settings), 1);
        return '';
    }
} as MockHttpRequestHandler);

