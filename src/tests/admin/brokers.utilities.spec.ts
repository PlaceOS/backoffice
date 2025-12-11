import { describe, expect, it, vi } from 'vitest';

// Mock AuthType enum from @placeos/ts-client
enum AuthType {
    NoAuth = 0,
    UserPassword = 1,
    Certificate = 2,
}

// Mock @placeos/ts-client before importing the module under test
vi.mock('@placeos/ts-client', () => ({
    AuthType: {
        NoAuth: 0,
        UserPassword: 1,
        Certificate: 2,
    },
    PlaceMQTTBroker: class {},
}));

import { generateBrokerFormFields } from '../../app/admin/brokers.utilities';

// Mock PlaceMQTTBroker interface
interface MockPlaceMQTTBroker {
    name?: string;
    description?: string;
    auth_type?: number;
    host?: string;
    port?: number;
    tls?: boolean;
    username?: string;
    password?: string;
    certificate?: string;
    filters?: string[];
}

describe('brokers.utilities', () => {
    describe('generateBrokerFormFields', () => {
        it('should create form group with all fields', () => {
            const broker: MockPlaceMQTTBroker = {
                name: 'Test Broker',
                host: 'mqtt.example.com',
                port: 1883,
            };
            const form = generateBrokerFormFields(broker as any);

            expect(form.get('name')).toBeTruthy();
            expect(form.get('description')).toBeTruthy();
            expect(form.get('auth_type')).toBeTruthy();
            expect(form.get('host')).toBeTruthy();
            expect(form.get('port')).toBeTruthy();
            expect(form.get('tls')).toBeTruthy();
            expect(form.get('username')).toBeTruthy();
            expect(form.get('password')).toBeTruthy();
            expect(form.get('certificate')).toBeTruthy();
            expect(form.get('filters')).toBeTruthy();
        });

        it('should set initial values from broker', () => {
            const broker: MockPlaceMQTTBroker = {
                name: 'My Broker',
                description: 'Description text',
                host: 'mqtt.test.com',
                port: 8883,
                tls: true,
            };
            const form = generateBrokerFormFields(broker as any);

            expect(form.get('name')?.value).toBe('My Broker');
            expect(form.get('description')?.value).toBe('Description text');
            expect(form.get('host')?.value).toBe('mqtt.test.com');
            expect(form.get('port')?.value).toBe(8883);
            expect(form.get('tls')?.value).toBe(true);
        });

        it('should have required validator on name', () => {
            const broker: MockPlaceMQTTBroker = { name: '' };
            const form = generateBrokerFormFields(broker as any);

            form.get('name')?.setValue('');
            expect(form.get('name')?.valid).toBe(false);

            form.get('name')?.setValue('Valid Name');
            expect(form.get('name')?.valid).toBe(true);
        });

        it('should have required validator on host', () => {
            const broker: MockPlaceMQTTBroker = { host: '' };
            const form = generateBrokerFormFields(broker as any);

            form.get('host')?.setValue('');
            expect(form.get('host')?.valid).toBe(false);

            form.get('host')?.setValue('mqtt.example.com');
            expect(form.get('host')?.valid).toBe(true);
        });

        it('should have required validator on port', () => {
            const broker: MockPlaceMQTTBroker = { port: undefined };
            const form = generateBrokerFormFields(broker as any);

            form.get('port')?.setValue(null);
            expect(form.get('port')?.valid).toBe(false);

            form.get('port')?.setValue(1883);
            expect(form.get('port')?.valid).toBe(true);
        });

        describe('auth_type: NoAuth', () => {
            it('should not require username, password, or certificate', () => {
                const broker: MockPlaceMQTTBroker = {
                    auth_type: AuthType.NoAuth,
                    name: 'Test',
                    host: 'mqtt.test.com',
                    port: 1883,
                };
                const form = generateBrokerFormFields(broker as any);

                expect(form.get('username')?.valid).toBe(true);
                expect(form.get('password')?.valid).toBe(true);
                expect(form.get('certificate')?.valid).toBe(true);
            });
        });

        describe('auth_type: UserPassword', () => {
            it('should require username and password', () => {
                const broker: MockPlaceMQTTBroker = {
                    auth_type: AuthType.UserPassword,
                    name: 'Test',
                    host: 'mqtt.test.com',
                    port: 1883,
                };
                const form = generateBrokerFormFields(broker as any);

                expect(form.get('username')?.valid).toBe(false);
                expect(form.get('password')?.valid).toBe(false);
                expect(form.get('certificate')?.valid).toBe(true);

                form.get('username')?.setValue('user');
                form.get('password')?.setValue('pass');

                expect(form.get('username')?.valid).toBe(true);
                expect(form.get('password')?.valid).toBe(true);
            });
        });

        describe('auth_type: Certificate', () => {
            it('should require certificate', () => {
                const broker: MockPlaceMQTTBroker = {
                    auth_type: AuthType.Certificate,
                    name: 'Test',
                    host: 'mqtt.test.com',
                    port: 1883,
                };
                const form = generateBrokerFormFields(broker as any);

                expect(form.get('username')?.valid).toBe(true);
                expect(form.get('password')?.valid).toBe(true);
                expect(form.get('certificate')?.valid).toBe(false);

                form.get('certificate')?.setValue('CERT_DATA');
                expect(form.get('certificate')?.valid).toBe(true);
            });
        });

        describe('auth_type changes', () => {
            it('should update validators when auth_type changes to UserPassword', () => {
                const broker: MockPlaceMQTTBroker = {
                    auth_type: AuthType.NoAuth,
                    name: 'Test',
                    host: 'mqtt.test.com',
                    port: 1883,
                };
                const form = generateBrokerFormFields(broker as any);

                // Initially no auth - all optional
                expect(form.get('username')?.valid).toBe(true);
                expect(form.get('password')?.valid).toBe(true);

                // Change to UserPassword
                form.get('auth_type')?.setValue(AuthType.UserPassword);

                // Now username and password are required
                expect(form.get('username')?.valid).toBe(false);
                expect(form.get('password')?.valid).toBe(false);
            });

            it('should update validators when auth_type changes to Certificate', () => {
                const broker: MockPlaceMQTTBroker = {
                    auth_type: AuthType.NoAuth,
                    name: 'Test',
                    host: 'mqtt.test.com',
                    port: 1883,
                };
                const form = generateBrokerFormFields(broker as any);

                // Initially no auth - all optional
                expect(form.get('certificate')?.valid).toBe(true);

                // Change to Certificate
                form.get('auth_type')?.setValue(AuthType.Certificate);

                // Now certificate is required
                expect(form.get('certificate')?.valid).toBe(false);
            });

            it('should update validators when auth_type changes to NoAuth', () => {
                const broker: MockPlaceMQTTBroker = {
                    auth_type: AuthType.UserPassword,
                    name: 'Test',
                    host: 'mqtt.test.com',
                    port: 1883,
                };
                const form = generateBrokerFormFields(broker as any);

                // Initially UserPassword - username/password required
                expect(form.get('username')?.valid).toBe(false);
                expect(form.get('password')?.valid).toBe(false);

                // Change to NoAuth
                form.get('auth_type')?.setValue(AuthType.NoAuth);

                // Now all optional
                expect(form.get('username')?.valid).toBe(true);
                expect(form.get('password')?.valid).toBe(true);
                expect(form.get('certificate')?.valid).toBe(true);
            });
        });

        it('should set tls to false by default', () => {
            const broker: MockPlaceMQTTBroker = { tls: undefined };
            const form = generateBrokerFormFields(broker as any);

            expect(form.get('tls')?.value).toBe(false);
        });

        it('should preserve filters array', () => {
            const broker: MockPlaceMQTTBroker = {
                filters: ['topic/+/data', 'sensor/#'],
            };
            const form = generateBrokerFormFields(broker as any);

            expect(form.get('filters')?.value).toEqual([
                'topic/+/data',
                'sensor/#',
            ]);
        });
    });
});
