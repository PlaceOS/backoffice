import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import {
    applySystemFormSchema,
    generateSystemFormModel,
} from '../../app/systems/systems.utilities';
import { createTestForm } from '../common/form-test.helpers';

describe('system form validation', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('requires a name and zone membership', () => {
        const { fields } = createTestForm(
            generateSystemFormModel(),
            applySystemFormSchema,
        );
        expect(fields.name().invalid()).toBe(true);
        expect(fields.zone().invalid()).toBe(true);
        fields.name().value.set('Meeting room');
        fields.zones().value.set(['zone-1']);
        expect(fields().valid()).toBe(true);
        fields.zones().value.set([]);
        expect(fields.zone().invalid()).toBe(true);
    });

    it.each([
        'support_url',
        'timetable_url',
        'camera_url',
        'room_booking_url',
    ] as const)('validates %s only when supplied', (key) => {
        const { fields } = createTestForm(
            {
                ...generateSystemFormModel(),
                name: 'Meeting room',
                zones: ['zone-1'],
            },
            applySystemFormSchema,
        );
        expect(fields().valid()).toBe(true);
        fields[key]().value.set('invalid');
        expect(fields[key]().invalid()).toBe(true);
        fields[key]().value.set('https://example.com/room');
        expect(fields().valid()).toBe(true);
    });

    it('rejects a snapshot list containing an invalid URL', () => {
        const { fields } = createTestForm(
            {
                ...generateSystemFormModel(),
                name: 'Meeting room',
                zones: ['zone-1'],
            },
            applySystemFormSchema,
        );
        fields
            .camera_snapshot_urls()
            .value.set(['https://example.com/one.jpg', 'invalid']);
        expect(fields.camera_snapshot_urls().invalid()).toBe(true);
        fields
            .camera_snapshot_urls()
            .value.set([
                'https://example.com/one.jpg',
                'https://example.com/two.jpg',
            ]);
        expect(fields().valid()).toBe(true);
    });
});
