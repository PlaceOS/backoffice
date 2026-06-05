import { PlaceZone } from '@placeos/ts-client';
import { required, SchemaFn } from '@angular/forms/signals';

export interface ZoneFormModel {
    id: string;
    name: string;
    tags: string[];
    description: string;
    parent_zone?: PlaceZone;
    parent_id: string;
    location: string;
    display_name: string;
    code: string;
    type: string;
    count: number;
    capacity: number;
    map_id: string;
    timezone: string;
    images: string[];
}

export function generateZoneFormModel(zone?: PlaceZone): ZoneFormModel {
    return {
        id: zone?.id || '',
        name: zone?.name || '',
        tags: zone?.tags || [],
        description: zone?.description || '',
        parent_zone: undefined,
        parent_id: zone?.parent_id || '',
        location: zone?.location || '',
        display_name: zone?.display_name || '',
        code: zone?.code || '',
        type: zone?.type || '',
        count: zone?.count || 0,
        capacity: zone?.capacity || 0,
        map_id: zone?.map_id || '',
        timezone: zone?.timezone || '',
        images: zone?.images || [],
    };
}

export const applyZoneFormSchema: SchemaFn<ZoneFormModel> = (path) => {
    required(path.name);
};
