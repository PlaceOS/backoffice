import { FormControl, FormGroup, Validators } from '@angular/forms';
import { authority, PlaceGroup } from '@placeos/ts-client';

export function generateGroupFormFields(group?: PlaceGroup) {
    return new FormGroup({
        name: new FormControl(group?.name || '', [Validators.required]),
        description: new FormControl(group?.description || ''),
        parent_id: new FormControl(group?.parent_id || ''),
        authority_id: new FormControl(group?.authority_id || authority()?.id || ''),
        subsystems: new FormControl(group?.subsystems || []),
    });
}
