import { describe, it, expect, vi } from 'vitest';
import { FormGroup } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceDriver: class {},
    PlaceDriverRole: {
        Service: 0,
        Device: 1,
        SSH: 2,
        Logic: 3,
    },
    PlaceRepository: class {},
}));

// Mock validation module
vi.mock('../../app/common/validation', () => ({
    validateURI: vi.fn((control) => {
        const value = control.value;
        if (!value) return null;
        // Basic URI validation
        const uri_pattern = /^[a-zA-Z0-9._-]+$/;
        return uri_pattern.test(value) || value.includes('://')
            ? null
            : { invalidUri: true };
    }),
}));

import { generateDriverFormFields } from '../../app/drivers/drivers.utilities';

describe('drivers.utilities', () => {
    describe('generateDriverFormFields', () => {
        // Note: The source function requires a driver object (even empty)
        // because it accesses driver.id without optional chaining at line 41
        const empty_driver = {} as any;

        describe('form structure for new driver', () => {
            it('should return a FormGroup', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have id control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('id')).toBeTruthy();
            });

            it('should have repository_id control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('repository_id')).toBeTruthy();
            });

            it('should have file_name control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('file_name')).toBeTruthy();
            });

            it('should have commit control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('commit')).toBeTruthy();
            });

            it('should have name control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('name')).toBeTruthy();
            });

            it('should have role control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('role')).toBeTruthy();
            });

            it('should have module_name control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('module_name')).toBeTruthy();
            });

            it('should have default_uri control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('default_uri')).toBeTruthy();
            });

            it('should have default_port control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('default_port')).toBeTruthy();
            });

            it('should have class_name control for new driver', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('class_name')).toBeTruthy();
            });

            it('should have description control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('description')).toBeTruthy();
            });

            it('should have ignore_connected control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('ignore_connected')).toBeTruthy();
            });

            it('should have settings control', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('settings')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty id by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('id')?.value).toBe('');
            });

            it('should have empty name by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('name')?.value).toBe('');
            });

            it('should have Logic role by default (3)', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('role')?.value).toBe(3); // PlaceDriverRole.Logic
            });

            it('should have empty module_name by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('module_name')?.value).toBe('');
            });

            it('should have empty default_uri by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('default_uri')?.value).toBe('');
            });

            it('should have default_port of 1', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('default_port')?.value).toBe(1);
            });

            it('should have empty class_name by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('class_name')?.value).toBe('');
            });

            it('should have empty description by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('description')?.value).toBe('');
            });

            it('should have ignore_connected as false by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('ignore_connected')?.value).toBe(false);
            });

            it('should have empty settings by default', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('settings')?.value).toBe('');
            });
        });

        describe('with driver data', () => {
            const mock_driver = {
                id: '',
                repository_id: 'repo-123',
                file_name: 'driver.cr',
                commit: 'abc123',
                name: 'Test Driver',
                role: 1, // Device
                module_name: 'TestModule',
                default_uri: 'localhost',
                default_port: 8080,
                class_name: 'TestDriver',
                description: 'A test driver',
                ignore_connected: true,
            } as any;

            it('should populate repository_id', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('repository_id')?.value).toBe('repo-123');
            });

            it('should populate file_name', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('file_name')?.value).toBe('driver.cr');
            });

            it('should populate commit', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('commit')?.value).toBe('abc123');
            });

            it('should populate name', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('name')?.value).toBe('Test Driver');
            });

            it('should populate role', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('role')?.value).toBe(1);
            });

            it('should populate module_name', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('module_name')?.value).toBe('TestModule');
            });

            it('should populate default_uri', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('default_uri')?.value).toBe('localhost');
            });

            it('should populate default_port', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('default_port')?.value).toBe(8080);
            });

            it('should populate class_name for new driver', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('class_name')?.value).toBe('TestDriver');
            });

            it('should populate description', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('description')?.value).toBe('A test driver');
            });

            it('should populate ignore_connected', () => {
                const form = generateDriverFormFields(mock_driver);
                expect(form.get('ignore_connected')?.value).toBe(true);
            });
        });

        describe('existing driver (with id)', () => {
            const existing_driver = {
                id: 'driver-123',
                name: 'Existing Driver',
                module_name: 'ExistingModule',
                role: 2, // SSH
                class_name: 'ExistingClass',
            } as any;

            it('should not have class_name control for existing driver', () => {
                const form = generateDriverFormFields(existing_driver);
                expect(form.get('class_name')).toBeFalsy();
            });

            it('should not have role control for existing driver', () => {
                const form = generateDriverFormFields(existing_driver);
                expect(form.get('role')).toBeFalsy();
            });

            it('should still have name control', () => {
                const form = generateDriverFormFields(existing_driver);
                expect(form.get('name')?.value).toBe('Existing Driver');
            });

            it('should still have module_name control', () => {
                const form = generateDriverFormFields(existing_driver);
                expect(form.get('module_name')?.value).toBe('ExistingModule');
            });
        });

        describe('validation', () => {
            it('should require name', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should validate name when provided', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('name')?.setValue('Driver Name');
                expect(form.get('name')?.valid).toBe(true);
            });

            it('should require module_name', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('module_name')?.valid).toBe(false);
                expect(
                    form.get('module_name')?.errors?.['required'],
                ).toBeTruthy();
            });

            it('should validate module_name when provided', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('module_name')?.setValue('ModuleName');
                expect(form.get('module_name')?.valid).toBe(true);
            });

            it('should validate default_port minimum of 1', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('default_port')?.setValue(0);
                expect(form.get('default_port')?.valid).toBe(false);
                expect(form.get('default_port')?.errors?.['min']).toBeTruthy();
            });

            it('should validate default_port maximum of 65535', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('default_port')?.setValue(65536);
                expect(form.get('default_port')?.valid).toBe(false);
                expect(form.get('default_port')?.errors?.['max']).toBeTruthy();
            });

            it('should accept valid port number', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('default_port')?.setValue(8080);
                expect(form.get('default_port')?.valid).toBe(true);
            });

            it('should accept port 1', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('default_port')?.setValue(1);
                expect(form.get('default_port')?.valid).toBe(true);
            });

            it('should accept port 65535', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('default_port')?.setValue(65535);
                expect(form.get('default_port')?.valid).toBe(true);
            });

            it('should accept empty default_uri', () => {
                const form = generateDriverFormFields(empty_driver);
                expect(form.get('default_uri')?.valid).toBe(true);
            });

            it('should accept valid default_uri', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('default_uri')?.setValue('localhost');
                expect(form.get('default_uri')?.valid).toBe(true);
            });
        });

        describe('module_name transformation', () => {
            it('should replace spaces with underscores in module_name', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('module_name')?.setValue('Module Name');
                // The valueChanges subscription should transform spaces to underscores
                expect(form.get('module_name')?.value).toBe('Module_Name');
            });

            it('should replace multiple spaces with underscores', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('module_name')?.setValue('Module   Name   Here');
                expect(form.get('module_name')?.value).toBe(
                    'Module___Name___Here',
                );
            });

            it('should not change module_name without spaces', () => {
                const form = generateDriverFormFields(empty_driver);
                form.get('module_name')?.setValue('ModuleName');
                expect(form.get('module_name')?.value).toBe('ModuleName');
            });
        });
    });
});
