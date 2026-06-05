import { authority, PlaceGroup } from '@placeos/ts-client';
import { required, SchemaFn } from '@angular/forms/signals';

export interface GroupFormModel {
    name: string;
    description: string;
    parent_id: string;
    authority_id: string;
    subsystems: string[];
}

export function generateGroupFormModel(group?: PlaceGroup): GroupFormModel {
    return {
        name: group?.name || '',
        description: group?.description || '',
        parent_id: group?.parent_id || '',
        authority_id: group?.authority_id || authority()?.id || '',
        subsystems: group?.subsystems || [],
    };
}

export const applyGroupFormSchema: SchemaFn<GroupFormModel> = (path) => {
    required(path.name);
};
