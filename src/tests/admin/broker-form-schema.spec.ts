import { TestBed } from '@angular/core/testing';
import { AuthType } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    applyBrokerFormSchema,
    generateBrokerFormModel,
} from '../../app/admin/brokers.utilities';
import { createTestForm } from '../common/form-test.helpers';

// Use the browser entry because the client marks its CommonJS entry as ESM.
vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('broker authentication validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('changes required credentials when the authentication type changes', () => {
        const { fields } = createTestForm(
            generateBrokerFormModel({
                name: 'Broker',
                host: 'mqtt.example.com',
                port: 1883,
            }),
            applyBrokerFormSchema,
        );
        expect(fields().valid()).toBe(true);
        fields.auth_type().value.set(AuthType.UserPassword);
        expect(fields.username().invalid()).toBe(true);
        expect(fields.password().invalid()).toBe(true);
        fields.username().value.set('operator');
        fields.password().value.set('secret');
        expect(fields().valid()).toBe(true);
        fields.auth_type().value.set(AuthType.Certificate);
        expect(fields.certificate().invalid()).toBe(true);
        fields.username().value.set('');
        fields.password().value.set('');
        fields.certificate().value.set('certificate');
        expect(fields().valid()).toBe(true);
        fields.auth_type().value.set(AuthType.NoAuth);
        fields.certificate().value.set('');
        expect(fields().valid()).toBe(true);
    });
});
