import { TestBed } from '@angular/core/testing';
import { PlaceDriverRole, PlaceSystem } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    applyModuleFormSchema,
    generateModuleFormModel,
} from '../../app/modules/modules.utilities';
import { createTestForm } from '../common/form-test.helpers';

// Use the browser entry because the client marks its CommonJS entry as ESM.
vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('module form validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it.each([PlaceDriverRole.Device, PlaceDriverRole.SSH])(
        'requires a host and valid port for role %s',
        (role) => {
            const { fields, model } = createTestForm(
                { ...generateModuleFormModel(), role, driver_id: 'driver-1' },
                applyModuleFormSchema,
            );
            expect(fields.ip().invalid()).toBe(true);
            expect(fields.port().invalid()).toBe(true);
            model.update((value) => ({
                ...value,
                ip: '192.168.1.10',
                port: 1,
            }));
            expect(fields().valid()).toBe(true);
            fields.port().value.set(65535);
            expect(fields().valid()).toBe(true);
            fields.port().value.set(65536);
            expect(fields.port().invalid()).toBe(true);
        },
    );

    it.each([PlaceDriverRole.Service, PlaceDriverRole.Websocket])(
        'requires a URI but permits an unused port for role %s',
        (role) => {
            const { fields } = createTestForm(
                { ...generateModuleFormModel(), role, driver_id: 'driver-1' },
                applyModuleFormSchema,
            );
            expect(fields.uri().invalid()).toBe(true);
            fields.uri().value.set('https://service.example.com');
            expect(fields().valid()).toBe(true);
            fields.uri().value.set('invalid');
            expect(fields.uri().invalid()).toBe(true);
        },
    );

    it('revalidates connection requirements when switching from device to logic', () => {
        const { fields, model } = createTestForm(
            {
                ...generateModuleFormModel(),
                role: PlaceDriverRole.Device,
                driver_id: 'driver-1',
            },
            applyModuleFormSchema,
        );
        expect(fields.ip().invalid()).toBe(true);
        model.update((value) => ({ ...value, role: PlaceDriverRole.Logic }));
        expect(fields.ip().valid()).toBe(true);
        expect(fields.port().valid()).toBe(true);
        expect(fields.system().invalid()).toBe(true);
        fields
            .system()
            .value.set(new PlaceSystem({ id: 'sys-1', name: 'Room' }));
        expect(fields().valid()).toBe(true);
        fields.driver_id().value.set('');
        expect(fields.driver_id().invalid()).toBe(true);
    });
});
