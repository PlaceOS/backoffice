
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineZone, EncryptionLevel } from '@placeos/ts-client';

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
        settings_encryption_level: new FormControl(zone.settings.encryption_level),
        settings_string: new FormControl(zone.settings.settings_string || '', [validateYAML]),
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
    subscriptions.push(
        fields.settings_string.valueChanges.subscribe((value: string) => {
            zone.settings.storePendingChange('settings_string', value);
        }
        )
    );
    if (!zone.id) {
        subscriptions.push(
            fields.settings_encryption_level.valueChanges.subscribe((value: EncryptionLevel) =>{
                zone.settings.storePendingChange('encryption_level', value);
            })
        );
        fields.settings_encryption_level.setValue(EncryptionLevel.None);
    } else {
        delete fields.settings_encryption_level;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
