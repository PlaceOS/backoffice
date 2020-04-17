import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineZone } from '@placeos/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateZoneFormFields(zone: EngineZone): FormDetails {
    if (!zone) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        id: new FormControl(zone.id),
        name: new FormControl(zone.name || '', [Validators.required]),
        tag_list: new FormControl(zone.tags ? zone.tags.split(',') : []),
        description: new FormControl(zone.description || ''),
        parent_zone: new FormControl(null),
        parent_id: new FormControl(zone.parent_id)
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && zone.hasOwnProperty(key) && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    {
                        zone.storePendingChange(key as any, value)}
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
        fields.parent_zone.valueChanges.subscribe((zone: EngineZone) =>
            {
                console.log('Zone:', zone);
                fields.parent_id.setValue(zone.id);
            }
        )
    );
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
