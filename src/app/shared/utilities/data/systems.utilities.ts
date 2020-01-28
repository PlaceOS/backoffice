import { EngineSystem, EngineZone, EncryptionLevel } from '@acaengine/ts-client';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { HashMap } from '../types.utilities';

import * as yaml from 'js-yaml';

export interface FormDetails {
    form: FormGroup;
    subscriptions: Subscription[];
}

export function validateYAML(control: AbstractControl) {
    const value = control.value || '';
    let valid = true;
    try {
        console.log('YAML:', yaml.safeLoad(value, { strict: true }));
    } catch (e) {
        valid = false;
    }
    return !valid ? { yaml: { value: control.value } } : null;
}

export const URL_PATTERN =
    '^(?:(?:(?:https?|ftp):)?//)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:.(?:[a-z\u00a1-\uffff]{2,})))(?::d{2,5})?(?:[/?#]S*)?$';

export function generateSystemsFormFields(system: EngineSystem): FormDetails {
    if (!system) {
        throw Error('No System passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(system.name || '', [Validators.required]),
        email: new FormControl(system.email || '', [Validators.email]),
        support_url: new FormControl(system.support_url || '', [Validators.pattern(URL_PATTERN)]),
        installed_ui_devices: new FormControl(system.installed_ui_devices || 0, [
            Validators.pattern('[0-9]*')
        ]),
        capacity: new FormControl(system.capacity, [Validators.pattern('[0-9]*')]),
        bookable: new FormControl(system.bookable || false),
        description: new FormControl(system.description || ''),
        settings_encryption_level: new FormControl(system.settings.encryption_level),
        settings_string: new FormControl(system.settings.settings_string || '', [validateYAML]),
        zone: new FormControl('', [Validators.required])
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    system.storePendingChange(key as any, value)
                )
            );
        }
    }
    if (!system.id) {
        subscriptions.push(
            fields.zone.valueChanges.subscribe((value: EngineZone) =>
                system.storePendingChange('zones', [value.id])
            )
        );
        subscriptions.push(
            fields.settings_encryption_level.valueChanges.subscribe((value: EncryptionLevel) =>{
                system.settings.storePendingChange('encryption_level', value);
            })
        );
        subscriptions.push(
            fields.settings_string.valueChanges.subscribe((value: string) => {
                system.settings.storePendingChange('settings_string', value);
            }
            )
        );
        fields.settings_encryption_level.setValue(EncryptionLevel.None);
    } else {
        delete fields.zone;
        delete fields.settings_encryption_level;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
