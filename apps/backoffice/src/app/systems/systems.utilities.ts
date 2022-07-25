import { PlaceSystem, PlaceZone } from '@placeos/ts-client';
import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { Subscription } from 'rxjs';

import * as yaml from 'js-yaml';
import { validateURL } from '../common/validation';

export interface FormDetails {
    form: FormGroup;
    subscriptions: Subscription[];
}

export function validateYAML(control: AbstractControl) {
    const value = control.value || '';
    let message = '';
    try {
        yaml.safeLoad(value, { strict: true });
    } catch (e) {
        console.error(e);
        message = e.message;
    }
    return message ? { yaml: message } : null;
}

export function generateSystemsFormFields(system?: PlaceSystem) {
    const fields = {
        name: new FormControl(system.name || '', [Validators.required]),
        display_name: new FormControl(system.display_name || ''),
        email: new FormControl(system.email || '', [Validators.email]),
        support_url: new FormControl(system.support_url || '', [validateURL]),
        installed_ui_devices: new FormControl(
            system.installed_ui_devices || 0,
            [Validators.pattern('[0-9]*')]
        ),
        features: new FormControl(
            (typeof system.features === 'string'
                ? (system.features as any).split(' ')
                : system.features) || []
        ),
        capacity: new FormControl(system.capacity || 0, [
            Validators.pattern('[0-9]*'),
        ]),
        bookable: new FormControl(system.bookable || false),
        description: new FormControl(system.description || ''),
        images: new FormControl(system.images || []),
        map_id: new FormControl(system.map_id || ''),
        zone: new FormControl<PlaceZone | null>(null, [Validators.required]),
        zones: new FormControl(system.zones, [Validators.required]),
    };
    if (!system.id) {
        fields.zone.valueChanges.subscribe((value: PlaceZone) =>
            fields.zones.setValue([value.id])
        );
    } else {
        delete fields.zone;
    }
    return new FormGroup(fields);
}
