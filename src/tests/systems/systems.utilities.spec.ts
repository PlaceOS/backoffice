import type { PlaceSystem } from '@placeos/ts-client';
import { afterEach, describe, expect, it, vi } from 'vitest';
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
                zone: null,
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

        describe('with legacy and current snapshot URLs', () => {
            const legacy_url = 'https://example.com/legacy.jpg';
            const current_url = 'https://example.com/current.jpg';
            // Local midnight at the start of the frozen day, in seconds
            const midnight = new Date(2026, 0, 2).getTime() / 1000;

            afterEach(() => vi.useRealTimers());

            it.each([
                { saved: 'never', updated_at: undefined, merged: true },
                {
                    saved: 'before today',
                    updated_at: midnight - 1,
                    merged: true,
                },
                { saved: 'today', updated_at: midnight, merged: false },
            ])(
                'merges the legacy URL ($merged) for a system saved $saved',
                ({ updated_at, merged }) => {
                    vi.useFakeTimers({ toFake: ['Date'] });
                    vi.setSystemTime(new Date(2026, 0, 2, 12));
                    const model = generateSystemFormModel({
                        camera_snapshot_url: legacy_url,
                        camera_snapshot_urls: [current_url],
                        updated_at,
                    } as PlaceSystem);

                    expect(model.camera_snapshot_urls).toEqual(
                        merged ? [current_url, legacy_url] : [current_url],
                    );
                },
            );
        });
    });
});
