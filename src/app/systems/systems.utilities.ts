import {
    AbstractControl,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';
import { Subscription } from 'rxjs';

import * as yaml from 'js-yaml';
import { validateURL } from '../common/validation';

export interface FormDetails {
    form: FormGroup;
    subscriptions: Subscription[];
}

export interface CameraSnapshotUrlFields {
    updated_at?: number;
    camera_snapshot_url?: string;
    camera_snapshot_urls?: string[];
}

export function validateYAML(control: AbstractControl) {
    const value = control.value || '';
    let message = '';
    try {
        yaml.load(value, { strict: true });
    } catch (e) {
        // console.error(e);
        message = e.message;
    }
    return message ? { yaml: message } : null;
}

function startOfTodayUnixSeconds() {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return Math.floor(date.getTime() / 1000);
}

function includeLegacyCameraSnapshotUrl(updated_at?: number) {
    return !updated_at || updated_at < startOfTodayUnixSeconds();
}

function uniqueUrls(urls: string[]) {
    return [...new Set(urls)];
}

export function normaliseCameraSnapshotUrls(
    system?: CameraSnapshotUrlFields,
): string[] {
    const snapshot_urls = Array.isArray(system?.camera_snapshot_urls)
        ? system.camera_snapshot_urls
        : [];
    const legacy_snapshot_urls =
        includeLegacyCameraSnapshotUrl(system?.updated_at) &&
        system?.camera_snapshot_url
            ? [system.camera_snapshot_url]
            : [];
    return uniqueUrls([...snapshot_urls, ...legacy_snapshot_urls]);
}

function validateURLArray(control: AbstractControl) {
    const value = control.value;
    if (!value || !Array.isArray(value) || !value.length) {
        return null;
    }
    return value.every((url) => !validateURL({ value: url } as AbstractControl))
        ? null
        : { url: 'invalid' };
}

export function generateSystemsFormFields(system?: PlaceSystem) {
    const fields = {
        name: new FormControl(system.name || '', [Validators.required]),
        display_name: new FormControl(system.display_name || ''),
        email: new FormControl(system.email || '', [Validators.email]),
        code: new FormControl(system.code || ''),
        support_url: new FormControl(system.support_url || '', [validateURL]),
        timetable_url: new FormControl(system.timetable_url || '', [
            validateURL,
        ]),
        camera_url: new FormControl(system.camera_url || '', [validateURL]),
        camera_snapshot_url: new FormControl(
            system.camera_snapshot_url || system.camera_snapshot_urls[0] || '',
        ),
        camera_snapshot_urls: new FormControl(
            normaliseCameraSnapshotUrls(system),
            [validateURLArray],
        ),
        room_booking_url: new FormControl(system.room_booking_url || '', [
            validateURL,
        ]),
        installed_ui_devices: new FormControl(
            system.installed_ui_devices || 0,
            [Validators.pattern('[0-9]*')],
        ),
        features: new FormControl(
            (typeof system.features === 'string'
                ? (system.features as string).split(' ')
                : system.features) || [],
        ),
        capacity: new FormControl(system.capacity || 0, [
            Validators.pattern('[0-9]*'),
        ]),
        bookable: new FormControl(system.bookable || false),
        signage: new FormControl(system.signage || false),
        public: new FormControl(system.public || false),
        description: new FormControl(system.description || ''),
        images: new FormControl(system.images || []),
        map_id: new FormControl(system.map_id || ''),
        timezone: new FormControl(system.timezone || ''),
        zone: new FormControl<PlaceZone | null>(null, [Validators.required]),
        zones: new FormControl(system.zones, [Validators.required]),
    };
    if (!system.id) {
        fields.zone.valueChanges.subscribe((value: PlaceZone) =>
            fields.zones.setValue([value.id]),
        );
    } else delete fields.zone;
    return new FormGroup(fields);
}
