import { APIRequestContext } from '@playwright/test';
import { ENGINE_API, uniqueName } from '../../support/api';
import { expect, test } from '../../support/fixtures';
import { FeaturePage } from '../pages';

interface Zone {
    id: string;
    name: string;
}

/** Make a zone through the API. The spec that makes it removes it */
async function createZone(api: APIRequestContext): Promise<Zone> {
    const res = await api.post(`${ENGINE_API}/zones`, {
        data: { name: uniqueName('E2E Zone') },
    });
    expect(res.ok(), await res.text()).toBe(true);
    return res.json();
}

async function deleteZone(api: APIRequestContext, id: string) {
    await api.delete(`${ENGINE_API}/zones/${encodeURIComponent(id)}`);
}

test.describe('Zones on the local backend', () => {
    test('AC-ZON-003-5: a zone made in the form is saved', async ({
        page,
        api,
    }) => {
        const zones = new FeaturePage(page, 'zones');
        const name = uniqueName('E2E Zone');
        await zones.goto();

        const id = await zones.createWith(async () => {
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill(name);
        });
        try {
            const res = await api.get(`${ENGINE_API}/zones/${id}`);
            expect(res.status()).toBe(200);
            expect((await res.json()).name).toBe(name);
        } finally {
            await deleteZone(api, id);
        }
    });

    test('AC-ZON-004-5: a renamed zone is saved', async ({ page, api }) => {
        const zone = await createZone(api);
        const zones = new FeaturePage(page, 'zones');
        const name = uniqueName('E2E Renamed');
        try {
            await zones.gotoItem(zone.id);
            await zones.openEditModal();
            await zones.dialog
                .getByRole('textbox', { name: 'Name*', exact: true })
                .fill(name);
            await zones.saveButton.click();
            await expect(zones.dialog).toBeHidden();

            await expect(zones.itemName).toHaveText(name);
            await expect
                .poll(async () => {
                    const res = await api.get(`${ENGINE_API}/zones/${zone.id}`);
                    return (await res.json()).name;
                })
                .toBe(name);
        } finally {
            await deleteZone(api, zone.id);
        }
    });

    test('AC-ZON-005-3: a deleted zone is removed', async ({ page, api }) => {
        const zone = await createZone(api);
        const zones = new FeaturePage(page, 'zones');
        try {
            await zones.gotoItem(zone.id);
            await zones.deleteSelected();

            const res = await api.get(`${ENGINE_API}/zones/${zone.id}`);
            expect(res.status()).toBe(404);
        } finally {
            await deleteZone(api, zone.id);
        }
    });
});
