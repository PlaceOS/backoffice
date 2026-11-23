import { AuthType } from '@placeos/ts-client/compat';
import { describe, expect, it } from 'vitest';
import { generateBrokerFormModel } from '../../app/admin/brokers.utilities';

describe('brokers.utilities', () => {
    describe('generateBrokerFormModel', () => {
        it('returns defaults', () => {
            expect(generateBrokerFormModel()).toEqual({
                name: '',
                description: '',
                auth_type: AuthType.UserPassword,
                host: '',
                port: 1883,
                tls: false,
                username: '',
                password: '',
                certificate: '',
                filters: [],
            });
        });

        it('populates values from a broker', () => {
            const model = generateBrokerFormModel({
                name: 'Broker',
                description: 'MQTT broker',
                auth_type: AuthType.UserPassword,
                host: 'mqtt.example.com',
                port: 1883,
                tls: true,
                username: 'user',
                password: 'pass',
                certificate: 'cert',
                filters: ['building/#'],
            } as any);

            expect(model).toMatchObject({
                name: 'Broker',
                auth_type: AuthType.UserPassword,
                host: 'mqtt.example.com',
                port: 1883,
                tls: true,
                username: 'user',
                password: 'pass',
                certificate: 'cert',
                filters: ['building/#'],
            });
        });
    });
});
