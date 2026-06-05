import {
    PlaceDriver,
    PlaceDriverRole,
    PlaceRepository,
} from '@placeos/ts-client';

import { max, min, required, SchemaFn, validate } from '@angular/forms/signals';
import { validateURI } from '../common/validation';

export interface DriverInitData {
    repo: PlaceRepository;
    driver: PlaceDriver;
}

export interface DriverFormModel {
    id: string;
    repository_id: string;
    file_name: string;
    commit: string;
    name: string;
    role: PlaceDriverRole;
    module_name: string;
    default_uri: string;
    default_port: number;
    alert_level: string;
    class_name: string;
    description: string;
    ignore_connected: boolean;
    settings: string;
}

export function generateDriverFormModel(driver?: PlaceDriver): DriverFormModel {
    return {
        id: driver?.id || '',
        repository_id: driver?.repository_id || '',
        file_name: driver?.file_name || '',
        commit: driver?.commit || '',
        name: driver?.name || '',
        role: driver?.role || PlaceDriverRole.Logic,
        module_name: driver?.module_name || '',
        default_uri: driver?.default_uri || '',
        default_port: driver?.default_port || 1,
        alert_level: driver?.alert_level || 'medium',
        class_name: driver?.class_name || '',
        description: driver?.description || '',
        ignore_connected: driver?.ignore_connected || false,
        settings: '',
    };
}

export const applyDriverFormSchema: SchemaFn<DriverFormModel> = (path) => {
    required(path.name);
    required(path.module_name);
    validate(path.default_uri, ({ value }) =>
        validateURI({ value: value() })
            ? { kind: 'pattern', message: 'Invalid URI' }
            : undefined,
    );
    min(path.default_port, 1);
    max(path.default_port, 65535);
};
