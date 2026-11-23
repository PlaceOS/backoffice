import { Driver, Module } from '@placeos/ts-client';
import { PlaceDriverRole } from '@placeos/ts-client/compat';
import { describe, expect, it } from 'vitest';
import { newItem } from '../../app/common/placeos';
import { generateDriverFormModel } from '../../app/drivers/drivers.utilities';
import { generateModuleFormModel } from '../../app/modules/modules.utilities';

describe('editing SSH resources', () => {
    it('keeps the SSH driver role when opening the form', () => {
        expect(
            generateDriverFormModel(
                newItem(Driver, { role: PlaceDriverRole.SSH }),
            ).role,
        ).toBe(PlaceDriverRole.SSH);
    });

    it('keeps the SSH module role when opening the form', () => {
        expect(
            generateModuleFormModel(
                newItem(Module, { role: PlaceDriverRole.SSH }),
            ).role,
        ).toBe(PlaceDriverRole.SSH);
    });
});
