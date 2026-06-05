import { AbstractControl } from '@angular/forms';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';

import * as yaml from 'js-yaml';
import { email, required, SchemaFn, validate } from '@angular/forms/signals';
import { isValidUrl } from '../common/validation';

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

function hasInvalidURLArray(value: string[]) {
    if (!value || !Array.isArray(value) || !value.length) {
        return false;
    }
    return value.some((url) => !isValidUrl(url));
}

function normaliseCameraSnapshotUrls(system?: PlaceSystem): string[] {
    const snapshot_urls = Array.isArray(system?.camera_snapshot_urls)
        ? system.camera_snapshot_urls.filter(Boolean)
        : [];
    const legacy_snapshot_url = system?.camera_snapshot_url;
    if (!legacy_snapshot_url) return snapshot_urls;
    if (!snapshot_urls.length) return [legacy_snapshot_url];

    const start_of_today = Math.floor(
        new Date(new Date().setHours(0, 0, 0, 0)).getTime() / 1000,
    );
    const should_merge_legacy_url =
        !system?.updated_at || system.updated_at < start_of_today;
    return should_merge_legacy_url
        ? Array.from(new Set([...snapshot_urls, legacy_snapshot_url]))
        : snapshot_urls;
}

export interface SystemFormModel {
    name: string;
    display_name: string;
    email: string;
    code: string;
    support_url: string;
    timetable_url: string;
    camera_url: string;
    camera_snapshot_url: string;
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
    zone?: PlaceZone;
    zones: string[];
}

export function generateSystemFormModel(system?: PlaceSystem): SystemFormModel {
    system ||= {} as PlaceSystem;
    return {
        name: system.name || '',
        display_name: system.display_name || '',
        email: system.email || '',
        code: system.code || '',
        support_url: system.support_url || '',
        timetable_url: system.timetable_url || '',
        camera_url: system.camera_url || '',
        camera_snapshot_url: '',
        camera_snapshot_urls: normaliseCameraSnapshotUrls(system),
        room_booking_url: system.room_booking_url || '',
        installed_ui_devices: system.installed_ui_devices || 0,
        features:
            (typeof system.features === 'string'
                ? (system.features as string).split(' ')
                : system.features) || [],
        security_groups: [...(system.security_groups || [])],
        capacity: system.capacity || 0,
        bookable: system.bookable || false,
        signage: system.signage || false,
        public: system.public || false,
        description: system.description || '',
        images: [...(system.images || [])],
        map_id: system.map_id || '',
        timezone: system.timezone || '',
        zone: undefined,
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
