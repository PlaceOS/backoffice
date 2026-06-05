import { describe, expect, it } from 'vitest';
import {
    generateSystemFormModel,
    validateYAML,
} from '../../app/systems/systems.utilities';

describe('systems.utilities', () => {
    describe('validateYAML', () => {
        it('returns null for empty and valid YAML', () => {
            expect(validateYAML({ value: '' } as any)).toBeNull();
            expect(validateYAML({ value: 'foo: bar' } as any)).toBeNull();
        });

        it('returns an error for invalid YAML', () => {
            expect(validateYAML({ value: 'foo: [bar' } as any)).toHaveProperty(
                'yaml',
            );
        });
    });

    describe('generateSystemFormModel', () => {
        it('returns defaults', () => {
            expect(generateSystemFormModel()).toMatchObject({
                name: '',
                display_name: '',
                email: '',
                code: '',
                support_url: '',
                timetable_url: '',
                camera_url: '',
                camera_snapshot_url: '',
                camera_snapshot_urls: [],
                room_booking_url: '',
                installed_ui_devices: 0,
                features: [],
                security_groups: [],
                capacity: 0,
                bookable: false,
                signage: false,
                public: false,
                description: '',
                images: [],
                map_id: '',
                timezone: '',
                zone: undefined,
                zones: [],
            });
        });

        it('populates and normalises values from a system', () => {
            const model = generateSystemFormModel({
                name: 'room-1',
                display_name: 'Room 1',
                email: 'room@example.com',
                features: 'vc whiteboard',
                security_groups: ['support'],
                images: ['room.png'],
                camera_snapshot_url: 'https://example.com/snapshot.jpg',
                zones: ['zone-1'],
            } as any);

            expect(model).toMatchObject({
                name: 'room-1',
                display_name: 'Room 1',
                email: 'room@example.com',
                features: ['vc', 'whiteboard'],
                security_groups: ['support'],
                images: ['room.png'],
                camera_snapshot_urls: ['https://example.com/snapshot.jpg'],
                zones: ['zone-1'],
            });
        });
    });
});
