import { AbstractControl } from '@angular/forms';
import { type System, type Zone } from '@placeos/ts-client';

import { email, required, SchemaFn, validate } from '@angular/forms/signals';
import * as yaml from 'js-yaml';
import { isValidUrl } from '../common/validation';

export function validateYAML(control: AbstractControl) {
    const value = control.value || '';
    let message = '';
    try {
        yaml.load(value);
    } catch (e) {
        // console.error(e);
        message = e.message;
    }
    return message ? { yaml: message } : null;
}

function hasInvalidURLArray(value: string[]) {
    if (!value || !Array.isArray(value) || !value.length) {
        return false;
    }
    return value.some((url) => !isValidUrl(url));
}

function normaliseCameraSnapshotUrls(system?: System): string[] {
    return (system?.camera_snapshot_urls || []).filter(Boolean);
}

export interface SystemFormModel {
    name: string;
    display_name: string;
    email: string;
    code: string;
    support_url: string;
    timetable_url: string;
    camera_url: string;
    camera_snapshot_urls: string[];
    room_booking_url: string;
    installed_ui_devices: number;
    features: string[];
    security_groups: string[];
    capacity: number;
    bookable: boolean;
    signage: boolean;
    public: boolean;
    description: string;
    images: string[];
    map_id: string;
    timezone: string;
    zone?: Zone | null;
    zones: string[];
}

export function generateSystemFormModel(system?: System): SystemFormModel {
    system ||= {} as System;
    return {
        name: system.name || '',
        display_name: system.display_name || '',
        email: system.email || '',
        code: system.code || '',
        support_url: system.support_url || '',
        timetable_url: system.timetable_url || '',
        camera_url: system.camera_url || '',
        camera_snapshot_urls: normaliseCameraSnapshotUrls(system),
        room_booking_url: system.room_booking_url || '',
        installed_ui_devices: system.installed_ui_devices || 0,
        features: [...(system.features || [])],
        security_groups: [...(system.security_groups || [])],
        capacity: system.capacity || 0,
        bookable: system.bookable || false,
        signage: system.signage || false,
        public: system.public || false,
        description: system.description || '',
        images: [...(system.images || [])],
        map_id: system.map_id || '',
        timezone: system.timezone || '',
        // `null` (not `undefined`) so signal forms materialise the field;
        // otherwise `form.zone` is undefined and its picker never renders.
        zone: null,
        zones: [...(system.zones || [])],
    };
}

export const applySystemFormSchema: SchemaFn<SystemFormModel> = (path) => {
    required(path.name);
    email(path.email);
    required(path.zones);
    required(path.zone, {
        when({ valueOf }) {
            return !valueOf(path.zones)?.length;
        },
    });
    for (const url_path of [
        path.support_url,
        path.timetable_url,
        path.camera_url,
        path.room_booking_url,
    ]) {
        validate(url_path, ({ value }) =>
            isValidUrl(value())
                ? undefined
                : { kind: 'url', message: 'Invalid URL' },
        );
    }
    validate(path.camera_snapshot_urls, ({ value }) =>
        hasInvalidURLArray(value())
            ? { kind: 'url', message: 'Invalid URL' }
            : undefined,
    );
};
