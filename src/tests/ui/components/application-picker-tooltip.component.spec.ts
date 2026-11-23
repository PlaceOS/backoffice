import { mockPage } from '@placeos/ts-client/compat';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const query = vi.hoisted(() => vi.fn());

vi.mock('../../../app/common/placeos', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    authority: () => ({ id: 'authority-1' }),
}));

// Keep the schemas, which `newItem` reads
vi.mock('@placeos/ts-client', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    oauth_applications: { query },
}));

const APPS = [
    { id: 2, name: 'Workplace', redirect_uri: 'https://a.example/workplace/' },
    { id: 1, name: 'Concierge', redirect_uri: 'https://a.example/concierge/' },
    { id: 3, name: 'Native', redirect_uri: 'placeos://callback' },
];

/** Load a new copy of the module, so each test starts with an empty cache */
async function loadPicker() {
    vi.resetModules();
    return import('../../../app/ui/application-picker-tooltip.component');
}

describe('loadApplications', () => {
    beforeEach(() => {
        query.mockReset();
        query.mockResolvedValue(
            mockPage({ data: APPS, total: APPS.length }) as never,
        );
    });

    it('shares one query between calls during a load', async () => {
        const { loadApplications, sidebar_applications } = await loadPicker();
        expect(sidebar_applications()).toBeNull();
        await Promise.all([loadApplications(), loadApplications()]);
        expect(query).toHaveBeenCalledTimes(1);
        expect(sidebar_applications()?.map((app) => app.name)).toEqual([
            'Concierge',
            'Workplace',
        ]);
    });

    it('keeps the last list when a load fails', async () => {
        const { loadApplications, sidebar_applications } = await loadPicker();
        await loadApplications();
        query.mockRejectedValueOnce(new Error('offline'));
        await loadApplications();
        expect(query).toHaveBeenCalledTimes(2);
        expect(sidebar_applications()).toHaveLength(2);
    });
});
