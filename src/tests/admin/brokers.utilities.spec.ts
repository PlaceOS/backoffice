import { describe, expect, it, vi } from 'vitest';
import { generateBrokerFormModel } from '../../app/admin/brokers.utilities';

const mocks = vi.hoisted(() => ({
    AuthType: {
        NoAuth: 'none',
        UserPassword: 'userpass',
        Certificate: 'cert',
    },
}));

vi.mock('@placeos/ts-client', () => ({ AuthType: mocks.AuthType }));

describe('brokers.utilities', () => {
    describe('generateBrokerFormModel', () => {
        it('returns defaults', () => {
            expect(generateBrokerFormModel()).toEqual({
                name: '',
                description: '',
                auth_type: mocks.AuthType.NoAuth,
                host: '',
                port: 0,
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
                auth_type: mocks.AuthType.UserPassword,
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
                auth_type: mocks.AuthType.UserPassword,
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
