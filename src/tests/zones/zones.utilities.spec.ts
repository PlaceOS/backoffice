import { describe, it, expect, vi } from 'vitest';
import { FormGroup } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceZone: class {},
}));

import { generateZoneFormFields } from '../../app/zones/zones.utilites';

describe('zones.utilities', () => {
    describe('generateZoneFormFields', () => {
        describe('form structure', () => {
            it('should return a FormGroup', () => {
                const form = generateZoneFormFields();
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have id control', () => {
                const form = generateZoneFormFields();
                expect(form.get('id')).toBeTruthy();
            });

            it('should have name control', () => {
                const form = generateZoneFormFields();
                expect(form.get('name')).toBeTruthy();
            });

            it('should have tags control', () => {
                const form = generateZoneFormFields();
                expect(form.get('tags')).toBeTruthy();
            });

            it('should have description control', () => {
                const form = generateZoneFormFields();
                expect(form.get('description')).toBeTruthy();
            });

            it('should have parent_zone control', () => {
                const form = generateZoneFormFields();
                expect(form.get('parent_zone')).toBeTruthy();
            });

            it('should have parent_id control', () => {
                const form = generateZoneFormFields();
                expect(form.get('parent_id')).toBeTruthy();
            });

            it('should have location control', () => {
                const form = generateZoneFormFields();
                expect(form.get('location')).toBeTruthy();
            });

            it('should have display_name control', () => {
                const form = generateZoneFormFields();
                expect(form.get('display_name')).toBeTruthy();
            });

            it('should have code control', () => {
                const form = generateZoneFormFields();
                expect(form.get('code')).toBeTruthy();
            });

            it('should have type control', () => {
                const form = generateZoneFormFields();
                expect(form.get('type')).toBeTruthy();
            });

            it('should have count control', () => {
                const form = generateZoneFormFields();
                expect(form.get('count')).toBeTruthy();
            });

            it('should have capacity control', () => {
                const form = generateZoneFormFields();
                expect(form.get('capacity')).toBeTruthy();
            });

            it('should have map_id control', () => {
                const form = generateZoneFormFields();
                expect(form.get('map_id')).toBeTruthy();
            });

            it('should have timezone control', () => {
                const form = generateZoneFormFields();
                expect(form.get('timezone')).toBeTruthy();
            });

            it('should have images control', () => {
                const form = generateZoneFormFields();
                expect(form.get('images')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have null/undefined id by default', () => {
                const form = generateZoneFormFields();
                // id may be null or undefined depending on the FormControl initialization
                const value = form.get('id')?.value;
                expect(value === undefined || value === null).toBe(true);
            });

            it('should have empty name by default', () => {
                const form = generateZoneFormFields();
                expect(form.get('name')?.value).toBe('');
            });

            it('should have empty tags array by default', () => {
                const form = generateZoneFormFields();
                expect(form.get('tags')?.value).toEqual([]);
            });

            it('should have empty description by default', () => {
                const form = generateZoneFormFields();
                expect(form.get('description')?.value).toBe('');
            });

            it('should have null parent_zone by default', () => {
                const form = generateZoneFormFields();
                expect(form.get('parent_zone')?.value).toBeNull();
            });

            it('should have null/undefined parent_id by default', () => {
                const form = generateZoneFormFields();
                // parent_id starts undefined but may be set to undefined by valueChanges
                const value = form.get('parent_id')?.value;
                expect(value === undefined || value === null).toBe(true);
            });
        });

        describe('with zone data', () => {
            const mock_zone = {
                id: 'zone-123',
                name: 'Test Zone',
                tags: ['building', 'floor-1'],
                description: 'A test zone',
                parent_id: 'zone-parent',
                location: 'Building A',
                display_name: 'Test Display Name',
                code: 'TZ001',
                type: 'office',
                count: 10,
                capacity: 50,
                map_id: 'map-123',
                timezone: 'America/New_York',
                images: ['image1.png', 'image2.png'],
            } as any;

            it('should populate id', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('id')?.value).toBe('zone-123');
            });

            it('should populate name', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('name')?.value).toBe('Test Zone');
            });

            it('should populate tags', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('tags')?.value).toEqual(['building', 'floor-1']);
            });

            it('should populate description', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('description')?.value).toBe('A test zone');
            });

            it('should populate parent_id', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('parent_id')?.value).toBe('zone-parent');
            });

            it('should populate location', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('location')?.value).toBe('Building A');
            });

            it('should populate display_name', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('display_name')?.value).toBe('Test Display Name');
            });

            it('should populate code', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('code')?.value).toBe('TZ001');
            });

            it('should populate type', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('type')?.value).toBe('office');
            });

            it('should populate count', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('count')?.value).toBe(10);
            });

            it('should populate capacity', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('capacity')?.value).toBe(50);
            });

            it('should populate map_id', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('map_id')?.value).toBe('map-123');
            });

            it('should populate timezone', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('timezone')?.value).toBe('America/New_York');
            });

            it('should populate images', () => {
                const form = generateZoneFormFields(mock_zone);
                expect(form.get('images')?.value).toEqual([
                    'image1.png',
                    'image2.png',
                ]);
            });
        });

        describe('validation', () => {
            it('should require name', () => {
                const form = generateZoneFormFields();
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should validate name when provided', () => {
                const form = generateZoneFormFields();
                form.get('name')?.setValue('Zone Name');
                expect(form.get('name')?.valid).toBe(true);
            });

            it('should be invalid without required fields', () => {
                const form = generateZoneFormFields();
                expect(form.valid).toBe(false);
            });

            it('should be valid with name provided', () => {
                const form = generateZoneFormFields();
                form.get('name')?.setValue('Test Zone');
                expect(form.valid).toBe(true);
            });

            it('should not require description', () => {
                const form = generateZoneFormFields();
                expect(form.get('description')?.valid).toBe(true);
            });

            it('should not require parent_id', () => {
                const form = generateZoneFormFields();
                expect(form.get('parent_id')?.valid).toBe(true);
            });

            it('should not require tags', () => {
                const form = generateZoneFormFields();
                expect(form.get('tags')?.valid).toBe(true);
            });
        });

        describe('parent_zone to parent_id linking', () => {
            it('should update parent_id when parent_zone changes', () => {
                const form = generateZoneFormFields();
                const parent_zone = { id: 'parent-zone-123', name: 'Parent' };

                form.get('parent_zone')?.setValue(parent_zone);
                expect(form.get('parent_id')?.value).toBe('parent-zone-123');
            });

            it('should set parent_id to undefined when parent_zone is null', () => {
                const form = generateZoneFormFields();
                const parent_zone = { id: 'parent-zone-123', name: 'Parent' };

                form.get('parent_zone')?.setValue(parent_zone);
                expect(form.get('parent_id')?.value).toBe('parent-zone-123');

                form.get('parent_zone')?.setValue(null);
                expect(form.get('parent_id')?.value).toBeUndefined();
            });

            it('should handle parent_zone without id', () => {
                const form = generateZoneFormFields();
                form.get('parent_zone')?.setValue({ name: 'No ID Parent' });
                expect(form.get('parent_id')?.value).toBeUndefined();
            });
        });
    });
});
