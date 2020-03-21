import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineZone, EngineSettings, EncryptionLevel } from '@placeos/ts-client';

import { FormDetails, validateYAML } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateZoneFormFields(zone: EngineZone): FormDetails {
    if (!zone) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(zone.name || '', [Validators.required]),
        tag_list: new FormControl(((zone as any).tags || '').split('') || []),
        description: new FormControl(zone.description || ''),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    zone.storePendingChange(key as any, value)
                )
            );
        }
    }
    subscriptions.push(
        fields.tag_list.valueChanges.subscribe((value: string[]) =>
            zone.storePendingChange('tags', value.join(','))
        )
    );
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
