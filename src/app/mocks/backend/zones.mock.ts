import { registerMockEndpoint } from '@placeos/ts-client';
import { HashMap } from '../../common/types';
import {
    API,
    endpointData,
    generateBasicHandlers,
    notFound,
} from '../common.mock';
import { UI_MOCKS } from '../data/ui-mocks';

const FILTER_FN = (item: Record<string, unknown>, q: HashMap) => {
    if (!q || Object.keys(q).length <= 0) {
        return true;
    }
    let match = true;
    if (q.q) {
        match =
            match &&
            `${item.name || ''}`
                .toLowerCase()
                .indexOf(((q.q as string) || '').toLowerCase()) >= 0;
    }
    if (q.parent_id) {
        // Matches the API: a comma separated list of parents, plus the
        // special `root` value for zones without one.
        const parents = `${q.parent_id}`.split(',').filter((_) => !!_);
        const parent_id = `${item.parent_id || ''}`;
        match =
            match &&
            parents.some((parent) =>
                parent === 'root' ? !parent_id : parent === parent_id,
            );
    }
    if (q.control_system_id) {
        const system = endpointData(`${API}/systems`).find(
            (sys) => sys.id === q.control_system_id,
        );
        match = match && system && system.zones.includes(item.id);
    }
    return match;
};

/** Tags used by the zones. Registered before `zones/:id` */
registerMockEndpoint({
    path: `${API}/zones/tags`,
    method: 'GET',
    callback: () =>
        [
            ...new Set(
                endpointData(`${API}/zones`).flatMap((zone) => zone.tags || []),
            ),
        ].sort(),
});

/** Add basic API handlers for zones. The zones are the same as in the
 *  user-interfaces mocks */
generateBasicHandlers(`${API}/zones`, UI_MOCKS.zones, {
    filter: FILTER_FN,
    id_prefix: 'zone-',
});

/** Triggers added to the zone */
registerMockEndpoint({
    path: `${API}/zones/:id/triggers`,
    method: 'GET',
    callback: (event) => {
        const zone =
            endpointData(`${API}/zones`).find(
                ({ id }) => id === event.route_params.id,
            ) || notFound('Zone');
        return endpointData(`${API}/triggers`).filter(({ id }) =>
            (zone.triggers || []).includes(id),
        );
    },
});
