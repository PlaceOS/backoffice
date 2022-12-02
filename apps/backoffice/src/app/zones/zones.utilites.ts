import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlaceZone } from '@placeos/ts-client';

export function generateZoneFormFields(zone?: PlaceZone) {
    const fields = {
        id: new FormControl(zone?.id),
        name: new FormControl(zone?.name || '', [Validators.required]),
        tags: new FormControl(zone?.tags || []),
        description: new FormControl(zone?.description || ''),
        parent_zone: new FormControl<PlaceZone | null>(null),
        parent_id: new FormControl(zone?.parent_id),
        location: new FormControl(zone?.location),
        display_name: new FormControl(zone?.display_name),
        code: new FormControl(zone?.code),
        type: new FormControl(zone?.type),
        count: new FormControl(zone?.count),
        capacity: new FormControl(zone?.capacity),
        map_id: new FormControl(zone?.map_id),
        timezone: new FormControl(zone?.timezone),
        images: new FormControl(zone?.images),
    };

    fields.parent_zone.valueChanges.subscribe((parent_zone: PlaceZone) =>
        fields.parent_id.setValue(parent_zone?.id)
    );
    return new FormGroup(fields);
}
