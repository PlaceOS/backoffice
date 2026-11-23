import { type Driver } from '@placeos/ts-client';
import { PlaceDriverRole } from '@placeos/ts-client/compat';

import { max, min, required, SchemaFn, validate } from '@angular/forms/signals';
import { validateURI } from '../common/validation';

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
    alert_level: NonNullable<Driver['alert_level']>;
    class_name: string;
    description: string;
    ignore_connected: boolean;
    settings: string;
}

export function generateDriverFormModel(driver?: Driver): DriverFormModel {
    return {
        id: driver?.id || '',
        repository_id: driver?.repository_id || '',
        file_name: driver?.file_name || '',
        commit: driver?.commit || '',
        name: driver?.name || '',
        role: driver?.role ?? PlaceDriverRole.Logic,
        module_name: driver?.module_name || '',
        default_uri: driver?.default_uri || '',
        default_port: driver?.default_port || 1,
        alert_level: driver?.alert_level || 'medium',
        // The API has no class name. The form fills it from the driver file
        class_name: '',
        description: driver?.description || '',
        ignore_connected: driver?.ignore_connected || false,
        settings: '',
    };
}

/** Defaults of a driver, from `repositories.details`. See `PlaceOS/driver` docs/command_line_options.md */
export interface DriverDetails {
    descriptive_name?: string;
    generic_name?: string;
    tcp_port?: number;
    udp_port?: number;
    default_settings?: string;
    description?: string;
    uri_base?: string;
    makebreak?: boolean;
}

/** Parse the JSON text of `repositories.details`. `null` if it is not an object */
export function parseDriverDetails(text: string): DriverDetails | null {
    try {
        const value: unknown = JSON.parse(text);
        // The API document has no schema for the details
        return value && typeof value === 'object' && !Array.isArray(value)
            ? (value as DriverDetails)
            : null;
    } catch {
        return null;
    }
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
