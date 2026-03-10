import { describe, it, expect, vi } from 'vitest';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceDriver: class {},
    PlaceDriverRole: {
        Service: 0,
        Device: 1,
        SSH: 2,
        Logic: 3,
        Websocket: 4,
    },
    PlaceEdge: class {},
    PlaceModule: class {},
    PlaceSystem: class {},
}));

// Mock validation module
vi.mock('../../app/common/validation', () => ({
    validateIpAddress: vi.fn((control) => {
        const value = control.value;
        if (!value) return null;
        const ip_pattern =
            /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const hostname_pattern = /^[a-zA-Z0-9.-]+$/;
        return ip_pattern.test(value) || hostname_pattern.test(value)
            ? null
            : { invalidIp: true };
    }),
    validateURI: vi.fn((control) => {
        const value = control.value;
        if (!value) return null;
        // Simple URI validation
        return /^[a-zA-Z0-9._\-:/]+$/.test(value) ? null : { invalidUri: true };
    }),
}));

import {
    generateModuleFormFields,
    resetModuleFormValidators,
} from '../../app/modules/modules.utilities';

describe('modules.utilities', () => {
    describe('generateModuleFormFields', () => {
        const empty_module = {} as any;

        describe('form structure for new module', () => {
            it('should return a FormGroup', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have id control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('id')).toBeTruthy();
            });

            it('should have ip control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('ip')).toBeTruthy();
            });

            it('should have port control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('port')).toBeTruthy();
            });

            it('should have tls control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('tls')).toBeTruthy();
            });

            it('should have udp control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('udp')).toBeTruthy();
            });

            it('should have makebreak control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('makebreak')).toBeTruthy();
            });

            it('should have ignore_connected control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('ignore_connected')).toBeTruthy();
            });

            it('should have alert_level control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('alert_level')).toBeTruthy();
            });

            it('should have uri control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('uri')).toBeTruthy();
            });

            it('should have notes control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('notes')).toBeTruthy();
            });

            it('should have name control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('name')).toBeTruthy();
            });

            it('should have custom_name control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('custom_name')).toBeTruthy();
            });

            it('should have system control for new module', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('system')).toBeTruthy();
            });

            it('should have control_system_id control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('control_system_id')).toBeTruthy();
            });

            it('should have role control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('role')).toBeTruthy();
            });

            it('should have driver control for new module', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('driver')).toBeTruthy();
            });

            it('should have driver_id control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('driver_id')).toBeTruthy();
            });

            it('should have edge control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('edge')).toBeTruthy();
            });

            it('should have edge_id control', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('edge_id')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty id by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('id')?.value).toBe('');
            });

            it('should have empty ip by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('ip')?.value).toBe('');
            });

            it('should have null port by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('port')?.value).toBeNull();
            });

            it('should have false for boolean flags by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('tls')?.value).toBe(false);
                expect(form.get('udp')?.value).toBe(false);
                expect(form.get('makebreak')?.value).toBe(false);
                expect(form.get('ignore_connected')?.value).toBe(false);
            });

            it('should have medium alert_level by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('alert_level')?.value).toBe('medium');
            });

            it('should have empty uri by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('uri')?.value).toBe('');
            });

            it('should have Logic role by default (3)', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('role')?.value).toBe(3); // PlaceDriverRole.Logic
            });

            it('should have null driver by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('driver')?.value).toBeNull();
            });

            it('should have null edge_id by default', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('edge_id')?.value).toBeNull();
            });
        });

        describe('with module data', () => {
            const mock_module = {
                id: '',
                ip: '192.168.1.100',
                port: 8080,
                tls: true,
                udp: true,
                makebreak: true,
                ignore_connected: true,
                alert_level: 'critical',
                uri: 'https://api.example.com',
                notes: 'Test notes',
                name: 'Test Module',
                custom_name: 'Custom_Module',
                control_system_id: 'sys-123',
                role: 1, // Device
                driver_id: 'driver-123',
                edge_id: 'edge-123',
            } as any;

            it('should populate ip', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('ip')?.value).toBe('192.168.1.100');
            });

            it('should populate port', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('port')?.value).toBe(8080);
            });

            it('should populate boolean flags', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('tls')?.value).toBe(true);
                expect(form.get('udp')?.value).toBe(true);
                expect(form.get('makebreak')?.value).toBe(true);
                expect(form.get('ignore_connected')?.value).toBe(true);
            });

            it('should populate alert_level', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('alert_level')?.value).toBe('critical');
            });

            it('should populate uri', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('uri')?.value).toBe('https://api.example.com');
            });

            it('should populate notes', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('notes')?.value).toBe('Test notes');
            });

            it('should populate name', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('name')?.value).toBe('Test Module');
            });

            it('should populate custom_name', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('custom_name')?.value).toBe('Custom_Module');
            });

            it('should populate role', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('role')?.value).toBe(1);
            });

            it('should populate driver_id', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('driver_id')?.value).toBe('driver-123');
            });

            it('should populate edge_id', () => {
                const form = generateModuleFormFields(mock_module);
                expect(form.get('edge_id')?.value).toBe('edge-123');
            });
        });

        describe('existing module (with id)', () => {
            const existing_module = {
                id: 'mod-123',
                name: 'Existing Module',
                driver_id: 'driver-456',
            } as any;

            it('should not have system control', () => {
                const form = generateModuleFormFields(existing_module);
                expect(form.get('system')).toBeFalsy();
            });

            it('should not have driver control', () => {
                const form = generateModuleFormFields(existing_module);
                expect(form.get('driver')).toBeFalsy();
            });

            it('should have other controls', () => {
                const form = generateModuleFormFields(existing_module);
                expect(form.get('ip')).toBeTruthy();
                expect(form.get('port')).toBeTruthy();
                expect(form.get('uri')).toBeTruthy();
                expect(form.get('name')).toBeTruthy();
            });
        });

        describe('validation', () => {
            it('should require driver_id', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('driver_id')?.valid).toBe(false);
                expect(
                    form.get('driver_id')?.errors?.['required'],
                ).toBeTruthy();
            });

            it('should validate port minimum', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('port')?.setValue(0);
                expect(form.get('port')?.valid).toBe(false);
                expect(form.get('port')?.errors?.['min']).toBeTruthy();
            });

            it('should validate port maximum', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('port')?.setValue(65536);
                expect(form.get('port')?.valid).toBe(false);
                expect(form.get('port')?.errors?.['max']).toBeTruthy();
            });

            it('should accept valid port', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('port')?.setValue(8080);
                expect(form.get('port')?.errors?.['min']).toBeFalsy();
                expect(form.get('port')?.errors?.['max']).toBeFalsy();
            });

            it('should accept null port', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('port')?.setValue(null);
                expect(form.get('port')?.errors?.['min']).toBeFalsy();
            });

            it('should validate IP address format', () => {
                const form = generateModuleFormFields(empty_module);
                // Use a value with special characters that won't match IP or hostname pattern
                form.get('ip')?.setValue('invalid ip with spaces!');
                expect(form.get('ip')?.valid).toBe(false);
            });

            it('should accept valid IP address', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('ip')?.setValue('192.168.1.1');
                expect(form.get('ip')?.valid).toBe(true);
            });

            it('should accept hostname', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('ip')?.setValue('server.example.com');
                expect(form.get('ip')?.valid).toBe(true);
            });

            it('should accept empty IP', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('ip')?.valid).toBe(true);
            });

            it('should accept empty URI', () => {
                const form = generateModuleFormFields(empty_module);
                expect(form.get('uri')?.valid).toBe(true);
            });

            it('should accept valid URI', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('uri')?.setValue('https://api.example.com');
                expect(form.get('uri')?.valid).toBe(true);
            });
        });

        describe('custom_name transformation', () => {
            it('should replace spaces with underscores', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('custom_name')?.setValue('My Custom Name');
                expect(form.get('custom_name')?.value).toBe('My_Custom_Name');
            });

            it('should not change name without spaces', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('custom_name')?.setValue('CustomName');
                expect(form.get('custom_name')?.value).toBe('CustomName');
            });

            it('should replace multiple spaces', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('custom_name')?.setValue('Name  With   Spaces');
                expect(form.get('custom_name')?.value).toBe(
                    'Name__With___Spaces',
                );
            });
        });

        describe('system to control_system_id linking (new module)', () => {
            it('should update control_system_id when system changes', () => {
                const form = generateModuleFormFields(empty_module);
                const system = { id: 'sys-456', name: 'Test System' };

                form.get('system')?.setValue(system);
                expect(form.get('control_system_id')?.value).toBe('sys-456');
            });
        });

        describe('edge to edge_id linking (new module)', () => {
            it('should update edge_id when edge changes', () => {
                const form = generateModuleFormFields(empty_module);
                const edge = { id: 'edge-789' };

                form.get('edge')?.setValue(edge);
                expect(form.get('edge_id')?.value).toBe('edge-789');
            });

            it('should set edge_id to null when edge is null', () => {
                const form = generateModuleFormFields(empty_module);
                form.get('edge')?.setValue({ id: 'edge-123' });
                form.get('edge')?.setValue(null);
                expect(form.get('edge_id')?.value).toBeNull();
            });
        });
    });

    describe('resetModuleFormValidators', () => {
        it('should reset ip validator', () => {
            const fields = {
                ip: new FormControl('', [Validators.required]),
                port: new FormControl(null),
                uri: new FormControl(''),
                system: new FormControl(null),
                driver: new FormControl(null),
            } as any;

            resetModuleFormValidators(fields);

            // ip should only have validateIpAddress, not required
            fields.ip.setValue('');
            expect(fields.ip.errors?.['required']).toBeFalsy();
        });

        it('should reset port validator', () => {
            const fields = {
                ip: new FormControl(''),
                port: new FormControl(null, [Validators.required]),
                uri: new FormControl(''),
                system: new FormControl(null),
                driver: new FormControl(null),
            } as any;

            resetModuleFormValidators(fields);

            // port should only have min/max validators
            fields.port.setValue(null);
            expect(fields.port.errors?.['required']).toBeFalsy();
        });

        it('should reset uri validator', () => {
            const fields = {
                ip: new FormControl(''),
                port: new FormControl(null),
                uri: new FormControl('', [Validators.required]),
                system: new FormControl(null),
                driver: new FormControl(null),
            } as any;

            resetModuleFormValidators(fields);

            // uri should only have validateURI
            fields.uri.setValue('');
            expect(fields.uri.errors?.['required']).toBeFalsy();
        });

        it('should reset system validator', () => {
            const fields = {
                ip: new FormControl(''),
                port: new FormControl(null),
                uri: new FormControl(''),
                system: new FormControl(null, [Validators.required]),
                driver: new FormControl(null),
            } as any;

            resetModuleFormValidators(fields);

            // system should have no validators
            fields.system.setValue(null);
            expect(fields.system.errors?.['required']).toBeFalsy();
        });

        it('should set required validator on driver', () => {
            const fields = {
                ip: new FormControl(''),
                port: new FormControl(null),
                uri: new FormControl(''),
                system: new FormControl(null),
                driver: new FormControl(null),
            } as any;

            resetModuleFormValidators(fields);

            // driver should have required validator
            fields.driver.setValue(null);
            expect(fields.driver.errors?.['required']).toBeTruthy();
        });
    });
});
