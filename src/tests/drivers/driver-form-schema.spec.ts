import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    applyDriverFormSchema,
    generateDriverFormModel,
} from '../../app/drivers/drivers.utilities';
import { createTestForm } from '../common/form-test.helpers';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('driver form validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('requires a display name and module class name', () => {
        const { fields } = createTestForm(
            generateDriverFormModel(),
            applyDriverFormSchema,
        );
        expect(fields.name().invalid()).toBe(true);
        expect(fields.module_name().invalid()).toBe(true);
        fields.name().value.set('Display');
        fields.module_name().value.set('Display');
        expect(fields().valid()).toBe(true);
    });

    it.each([0, 65536])(
        'rejects port %s and accepts both valid boundaries',
        (port) => {
            const { fields } = createTestForm(
                {
                    ...generateDriverFormModel(),
                    name: 'Display',
                    module_name: 'Display',
                    default_port: port,
                },
                applyDriverFormSchema,
            );
            expect(fields.default_port().invalid()).toBe(true);
            fields.default_port().value.set(1);
            expect(fields().valid()).toBe(true);
            fields.default_port().value.set(65535);
            expect(fields().valid()).toBe(true);
        },
    );
});
