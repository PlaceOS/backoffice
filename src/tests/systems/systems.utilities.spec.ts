import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FormGroup, FormControl } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceSystem: class {},
    PlaceZone: class {},
}));

// Mock validation module
vi.mock('../../app/common/validation', () => ({
    validateURL: vi.fn((control) => {
        const value = control.value;
        if (!value) return null;
        try {
            new URL(value);
            return null;
        } catch {
            return { invalidUrl: true };
        }
    }),
}));

// Mock js-yaml
vi.mock('js-yaml', () => ({
    load: vi.fn((value, options) => {
        // Simple YAML validation mock
        if (value.includes('invalid:yaml:format')) {
            throw new Error('YAML parse error');
        }
        return {};
    }),
}));

import {
    validateYAML,
    generateSystemsFormFields,
} from '../../app/systems/systems.utilities';

describe('systems.utilities', () => {
    describe('validateYAML', () => {
        it('should return null for empty string', () => {
            const control = new FormControl('');
            expect(validateYAML(control)).toBeNull();
        });

        it('should return null for valid YAML', () => {
            const control = new FormControl('key: value');
            expect(validateYAML(control)).toBeNull();
        });

        it('should return null for null value', () => {
            const control = new FormControl(null);
            expect(validateYAML(control)).toBeNull();
        });

        it('should return null for undefined value', () => {
            const control = new FormControl(undefined);
            expect(validateYAML(control)).toBeNull();
        });

        it('should return error for invalid YAML', () => {
            const control = new FormControl('invalid:yaml:format');
            const result = validateYAML(control);
            expect(result).not.toBeNull();
            expect(result?.['yaml']).toBeTruthy();
        });

        it('should include error message in yaml property', () => {
            const control = new FormControl('invalid:yaml:format');
            const result = validateYAML(control);
            expect(typeof result?.['yaml']).toBe('string');
            expect(result?.['yaml'].length).toBeGreaterThan(0);
        });
    });

    describe('generateSystemsFormFields', () => {
        // Minimum system object required by the function
        const min_system = {} as any;

        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have name control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('name')).toBeTruthy();
            });

            it('should have display_name control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('display_name')).toBeTruthy();
            });

            it('should have email control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('email')).toBeTruthy();
            });

            it('should have code control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('code')).toBeTruthy();
            });

            it('should have support_url control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('support_url')).toBeTruthy();
            });

            it('should have timetable_url control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('timetable_url')).toBeTruthy();
            });

            it('should have camera_url control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('camera_url')).toBeTruthy();
            });

            it('should have camera_snapshot_urls control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('camera_snapshot_urls')).toBeTruthy();
            });

            it('should have room_booking_url control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('room_booking_url')).toBeTruthy();
            });

            it('should have installed_ui_devices control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('installed_ui_devices')).toBeTruthy();
            });

            it('should have features control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('features')).toBeTruthy();
            });

            it('should have capacity control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('capacity')).toBeTruthy();
            });

            it('should have bookable control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('bookable')).toBeTruthy();
            });

            it('should have signage control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('signage')).toBeTruthy();
            });

            it('should have public control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('public')).toBeTruthy();
            });

            it('should have description control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('description')).toBeTruthy();
            });

            it('should have images control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('images')).toBeTruthy();
            });

            it('should have map_id control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('map_id')).toBeTruthy();
            });

            it('should have timezone control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('timezone')).toBeTruthy();
            });

            it('should have zone control for new system', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('zone')).toBeTruthy();
            });

            it('should have zones control', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('zones')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty name by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('name')?.value).toBe('');
            });

            it('should have empty display_name by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('display_name')?.value).toBe('');
            });

            it('should have empty email by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('email')?.value).toBe('');
            });

            it('should have empty code by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('code')?.value).toBe('');
            });

            it('should have empty URL fields by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('support_url')?.value).toBe('');
                expect(form.get('timetable_url')?.value).toBe('');
                expect(form.get('camera_url')?.value).toBe('');
                expect(form.get('room_booking_url')?.value).toBe('');
            });

            it('should have empty camera snapshot URLs by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('camera_snapshot_urls')?.value).toEqual([]);
            });

            it('should have 0 for installed_ui_devices by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('installed_ui_devices')?.value).toBe(0);
            });

            it('should have empty features array by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('features')?.value).toEqual([]);
            });

            it('should have 0 for capacity by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('capacity')?.value).toBe(0);
            });

            it('should have false for boolean fields by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('bookable')?.value).toBe(false);
                expect(form.get('signage')?.value).toBe(false);
                expect(form.get('public')?.value).toBe(false);
            });

            it('should have empty images array by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('images')?.value).toEqual([]);
            });

            it('should have null zone by default', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('zone')?.value).toBeNull();
            });
        });

        describe('with system data', () => {
            const mock_system = {
                id: '',
                name: 'Conference Room A',
                display_name: 'Conf Room A',
                email: 'room-a@example.com',
                code: 'CONF-A',
                support_url: 'https://support.example.com',
                timetable_url: 'https://calendar.example.com',
                camera_url: 'https://camera.example.com',
                camera_snapshot_urls: [
                    'https://camera.example.com/snapshot',
                    'https://camera.example.com/snapshot-2',
                ],
                room_booking_url: 'https://booking.example.com',
                installed_ui_devices: 3,
                features: ['video', 'audio', 'screen'],
                capacity: 10,
                bookable: true,
                signage: true,
                public: true,
                description: 'Main conference room',
                images: ['img1.png', 'img2.png'],
                map_id: 'map-123',
                timezone: 'America/New_York',
                zones: ['zone-1', 'zone-2'],
            } as any;

            it('should populate name', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('name')?.value).toBe('Conference Room A');
            });

            it('should populate display_name', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('display_name')?.value).toBe('Conf Room A');
            });

            it('should populate email', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('email')?.value).toBe('room-a@example.com');
            });

            it('should populate code', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('code')?.value).toBe('CONF-A');
            });

            it('should populate URL fields', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('support_url')?.value).toBe(
                    'https://support.example.com',
                );
                expect(form.get('camera_url')?.value).toBe(
                    'https://camera.example.com',
                );
                expect(form.get('camera_snapshot_urls')?.value).toEqual([
                    'https://camera.example.com/snapshot',
                    'https://camera.example.com/snapshot-2',
                ]);
            });

            it('should populate installed_ui_devices', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('installed_ui_devices')?.value).toBe(3);
            });

            it('should populate features array', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('features')?.value).toEqual([
                    'video',
                    'audio',
                    'screen',
                ]);
            });

            it('should populate capacity', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('capacity')?.value).toBe(10);
            });

            it('should populate boolean fields', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('bookable')?.value).toBe(true);
                expect(form.get('signage')?.value).toBe(true);
                expect(form.get('public')?.value).toBe(true);
            });

            it('should populate images', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('images')?.value).toEqual([
                    'img1.png',
                    'img2.png',
                ]);
            });

            it('should populate zones', () => {
                const form = generateSystemsFormFields(mock_system);
                expect(form.get('zones')?.value).toEqual(['zone-1', 'zone-2']);
            });
        });

        describe('features string conversion', () => {
            it('should convert features string to array', () => {
                const system = { features: 'video audio screen' } as any;
                const form = generateSystemsFormFields(system);
                expect(form.get('features')?.value).toEqual([
                    'video',
                    'audio',
                    'screen',
                ]);
            });

            it('should handle features as array', () => {
                const system = { features: ['a', 'b'] } as any;
                const form = generateSystemsFormFields(system);
                expect(form.get('features')?.value).toEqual(['a', 'b']);
            });
        });

        describe('camera snapshot URL normalisation', () => {
            const start_of_today = Math.floor(
                new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000,
            );

            it('should convert legacy camera snapshot URL to array', () => {
                const system = {
                    camera_snapshot_url: 'https://camera.example.com/snapshot',
                } as any;
                const form = generateSystemsFormFields(system);
                expect(form.get('camera_snapshot_urls')?.value).toEqual([
                    'https://camera.example.com/snapshot',
                ]);
            });

            it('should combine legacy and array camera snapshot URLs', () => {
                const system = {
                    updated_at: start_of_today - 1,
                    camera_snapshot_url: 'https://camera.example.com/snapshot',
                    camera_snapshot_urls: [
                        'https://camera.example.com/snapshot-2',
                    ],
                } as any;
                const form = generateSystemsFormFields(system);
                expect(form.get('camera_snapshot_urls')?.value).toEqual([
                    'https://camera.example.com/snapshot-2',
                    'https://camera.example.com/snapshot',
                ]);
            });

            it('should de-duplicate combined camera snapshot URLs', () => {
                const system = {
                    updated_at: start_of_today - 1,
                    camera_snapshot_url: 'https://camera.example.com/snapshot',
                    camera_snapshot_urls: [
                        'https://camera.example.com/snapshot',
                        'https://camera.example.com/snapshot-2',
                    ],
                } as any;
                const form = generateSystemsFormFields(system);
                expect(form.get('camera_snapshot_urls')?.value).toEqual([
                    'https://camera.example.com/snapshot',
                    'https://camera.example.com/snapshot-2',
                ]);
            });

            it('should not add legacy camera snapshot URL for systems updated today', () => {
                const system = {
                    updated_at: start_of_today,
                    camera_snapshot_url: 'https://camera.example.com/snapshot',
                    camera_snapshot_urls: [
                        'https://camera.example.com/snapshot-2',
                    ],
                } as any;
                const form = generateSystemsFormFields(system);
                expect(form.get('camera_snapshot_urls')?.value).toEqual([
                    'https://camera.example.com/snapshot-2',
                ]);
            });
        });

        describe('existing system (with id)', () => {
            const existing_system = {
                id: 'sys-123',
                name: 'Existing System',
                zones: ['zone-1'],
            } as any;

            it('should not have zone control', () => {
                const form = generateSystemsFormFields(existing_system);
                expect(form.get('zone')).toBeFalsy();
            });

            it('should have zones control', () => {
                const form = generateSystemsFormFields(existing_system);
                expect(form.get('zones')).toBeTruthy();
            });
        });

        describe('validation', () => {
            it('should require name', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should validate email format', () => {
                const form = generateSystemsFormFields(min_system);
                form.get('email')?.setValue('invalid-email');
                expect(form.get('email')?.valid).toBe(false);
                expect(form.get('email')?.errors?.['email']).toBeTruthy();
            });

            it('should accept valid email', () => {
                const form = generateSystemsFormFields(min_system);
                form.get('email')?.setValue('valid@example.com');
                expect(form.get('email')?.errors?.['email']).toBeFalsy();
            });

            it('should accept empty email', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('email')?.valid).toBe(true);
            });

            it('should validate URL fields', () => {
                const form = generateSystemsFormFields(min_system);
                form.get('support_url')?.setValue('not-a-url');
                expect(form.get('support_url')?.valid).toBe(false);
            });

            it('should accept valid URLs', () => {
                const form = generateSystemsFormFields(min_system);
                form.get('support_url')?.setValue('https://example.com');
                expect(form.get('support_url')?.valid).toBe(true);
            });

            it('should accept empty URL fields', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('support_url')?.valid).toBe(true);
                expect(form.get('camera_url')?.valid).toBe(true);
                expect(form.get('camera_snapshot_urls')?.valid).toBe(true);
            });

            it('should validate camera snapshot URL arrays', () => {
                const form = generateSystemsFormFields(min_system);
                form.get('camera_snapshot_urls')?.setValue([
                    'https://example.com/snapshot',
                    'not-a-url',
                ]);
                expect(form.get('camera_snapshot_urls')?.valid).toBe(false);
            });

            it('should accept valid camera snapshot URL arrays', () => {
                const form = generateSystemsFormFields(min_system);
                form.get('camera_snapshot_urls')?.setValue([
                    'https://example.com/snapshot',
                    'https://example.com/snapshot-2',
                ]);
                expect(form.get('camera_snapshot_urls')?.valid).toBe(true);
            });

            it('should require zone for new system', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('zone')?.valid).toBe(false);
                expect(form.get('zone')?.errors?.['required']).toBeTruthy();
            });

            it('should require zones', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('zones')?.valid).toBe(false);
                expect(form.get('zones')?.errors?.['required']).toBeTruthy();
            });

            it('should validate installed_ui_devices as numeric', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('installed_ui_devices')?.valid).toBe(true);
            });

            it('should validate capacity as numeric', () => {
                const form = generateSystemsFormFields(min_system);
                expect(form.get('capacity')?.valid).toBe(true);
            });
        });

        describe('zone to zones linking', () => {
            it('should update zones when zone changes', () => {
                const form = generateSystemsFormFields(min_system);
                const zone = { id: 'zone-123', name: 'Test Zone' };

                form.get('zone')?.setValue(zone);
                expect(form.get('zones')?.value).toEqual(['zone-123']);
            });

            it('should set zones to array with zone id', () => {
                const form = generateSystemsFormFields(min_system);
                const zone = { id: 'new-zone-456', name: 'New Zone' };

                form.get('zone')?.setValue(zone);
                expect(form.get('zones')?.value).toEqual(['new-zone-456']);
            });
        });
    });
});
