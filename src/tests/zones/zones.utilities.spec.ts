import { describe, expect, it } from 'vitest';
import { generateZoneFormModel } from '../../app/zones/zones.utilites';

describe('zones.utilities', () => {
    describe('generateZoneFormModel', () => {
        it('returns defaults', () => {
            expect(generateZoneFormModel()).toEqual({
                id: '',
                name: '',
                tags: [],
                description: '',
                parent_zone: null,
                parent_id: '',
                location: '',
                display_name: '',
                code: '',
                type: '',
                count: 0,
                capacity: 0,
                map_id: '',
                timezone: '',
                images: [],
            });
        });

        it('populates values from a zone', () => {
            const model = generateZoneFormModel({
                id: 'zone-1',
                name: 'Level 1',
                tags: ['floor'],
                description: 'First level',
                parent_id: 'building-1',
                location: 'Building A',
                display_name: 'L1',
                code: 'L1',
                type: 'level',
                count: 10,
                capacity: 100,
                map_id: 'map-1',
                timezone: 'Australia/Sydney',
                images: ['level.png'],
            } as any);

            expect(model).toMatchObject({
                id: 'zone-1',
                name: 'Level 1',
                tags: ['floor'],
                parent_id: 'building-1',
                location: 'Building A',
                display_name: 'L1',
                capacity: 100,
                images: ['level.png'],
            });
        });
    });
});
