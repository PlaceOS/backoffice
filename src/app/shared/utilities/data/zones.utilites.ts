import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceZone } from '@placeos/ts-client';

import { HashMap } from '../types.utilities';

export function generateZoneFormFields(zone: PlaceZone): FormGroup {
    if (!zone) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        id: new FormControl(zone.id),
        name: new FormControl(zone.name || '', [Validators.required]),
        tags: new FormControl(zone.tags || []),
        description: new FormControl(zone.description || ''),
        parent_zone: new FormControl(null),
        parent_id: new FormControl(zone.parent_id),
        location: new FormControl(zone.location),
        display_name: new FormControl(zone.display_name),
        code: new FormControl(zone.display_name),
        type: new FormControl(zone.display_name),
        count: new FormControl(zone.count),
        capacity: new FormControl(zone.capacity),
        map_id: new FormControl(zone.map_id),
    };

    fields.parent_zone.valueChanges.subscribe((zone: PlaceZone) =>
        fields.parent_id.setValue(zone.id)
    );
    return new FormGroup(fields);
}
