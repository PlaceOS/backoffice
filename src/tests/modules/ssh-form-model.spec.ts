import { PlaceDriver, PlaceDriverRole, PlaceModule } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { generateDriverFormModel } from '../../app/drivers/drivers.utilities';
import { generateModuleFormModel } from '../../app/modules/modules.utilities';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('editing SSH resources', () => {
    it('keeps the SSH driver role when opening the form', () => {
        expect(
            generateDriverFormModel(
                new PlaceDriver({ role: PlaceDriverRole.SSH }),
            ).role,
        ).toBe(PlaceDriverRole.SSH);
    });

    it('keeps the SSH module role when opening the form', () => {
        expect(
            generateModuleFormModel(
                new PlaceModule({ role: PlaceDriverRole.SSH }),
            ).role,
        ).toBe(PlaceDriverRole.SSH);
    });
});
