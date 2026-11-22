import {
    type Driver,
    type Edge,
    Module,
    type ModuleInput,
    System,
} from '@placeos/ts-client';
import { PlaceDriverRole } from '@placeos/ts-client/compat';
import { httpError } from '../common/errors';
import { newItem, toBody } from '../common/placeos';

import { max, min, required, SchemaFn, validate } from '@angular/forms/signals';
import { validateIpAddress, validateURI } from '../common/validation';

export interface ModuleFormModel {
    id: string;
    ip: string;
    port: number;
    tls: boolean;
    udp: boolean;
    makebreak: boolean;
    ignore_connected: boolean;
    alert_level: string;
    uri: string;
    notes: string;
    name: string;
    custom_name: string;
    system?: System | null;
    control_system_id: string;
    role: PlaceDriverRole;
    driver?: Driver | null;
    driver_id: string;
    edge?: Edge | null;
    edge_id: string;
}

export function generateModuleFormModel(mod?: Module): ModuleFormModel {
    return {
        id: mod?.id || '',
        ip: mod?.ip || '',
        port: mod?.port || 0,
        tls: mod?.tls || false,
        udp: mod?.udp || false,
        makebreak: mod?.makebreak || false,
        ignore_connected: mod?.ignore_connected || false,
        alert_level: mod?.alert_level || 'medium',
        uri: mod?.uri || '',
        notes: mod?.notes || '',
        name: mod?.name || '',
        custom_name: mod?.custom_name || '',
        // `null` (not `undefined`) so signal forms materialise the field,
        // otherwise `form.driver`/`form.system`/`form.edge` are undefined and
        // their template controls never render for new modules.
        // The API sends the name of the system, but not its id. Without the
        // name, `null` makes the form load the system
        system:
            mod?.control_system_id && mod.control_system?.name
                ? newItem(System, {
                      id: mod.control_system_id,
                      name: mod.control_system.name,
                  })
                : null,
        control_system_id: mod?.control_system_id || '',
        role: mod?.role ?? PlaceDriverRole.Logic,
        driver: null,
        driver_id: mod?.driver_id || '',
        edge: null,
        edge_id: mod?.edge_id || '',
    };
}

export const applyModuleFormSchema: SchemaFn<ModuleFormModel> = (path) => {
    required(path.driver_id);
    // Only device/ssh modules expose the port field, so only they should be
    // blocked by an out-of-range value (new modules default to port 0)
    min(path.port, 1, {
        when({ valueOf }) {
            const role = valueOf(path.role);
            return (
                role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH
            );
        },
    });
    max(path.port, 65535, {
        when({ valueOf }) {
            const role = valueOf(path.role);
            return (
                role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH
            );
        },
    });
    validate(path.ip, ({ value }) =>
        validateIpAddress({ value: value() })
            ? { kind: 'pattern', message: 'Invalid IP address' }
            : undefined,
    );
    // The URI field is only shown for service/websocket modules, so a hidden
    // value (e.g. inherited from a device driver) must not block saving
    validate(path.uri, ({ value, valueOf }) => {
        const role = valueOf(path.role);
        const uses_uri =
            role === PlaceDriverRole.Service ||
            role === PlaceDriverRole.Websocket;
        return uses_uri && validateURI({ value: value() })
            ? { kind: 'pattern', message: 'Invalid URI' }
            : undefined;
    });
    required(path.uri, {
        when({ valueOf }) {
            const role = valueOf(path.role);
            return (
                role === PlaceDriverRole.Service ||
                role === PlaceDriverRole.Websocket
            );
        },
    });
    required(path.ip, {
        when({ valueOf }) {
            const role = valueOf(path.role);
            return (
                role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH
            );
        },
    });
    required(path.port, {
        when({ valueOf }) {
            const role = valueOf(path.role);
            return (
                role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH
            );
        },
    });
    required(path.system, {
        when({ valueOf }) {
            return valueOf(path.role) === PlaceDriverRole.Logic;
        },
    });
};

/**
 * Request body of a module. Removes the details the API sends with a module,
 * as the 6.x `PlaceModule.toJSON` did.
 */
export function moduleBody(item: object): ModuleInput {
    const body: { -readonly [K in keyof ModuleInput]: ModuleInput[K] } = {
        ...toBody(Module, item),
    };
    delete body.driver;
    delete body.control_system;
    delete body.error_timestamp;
    delete body.has_runtime_error;
    if (!body.control_system_id) delete body.control_system_id;
    return body;
}

/** Longest module error to show in a notification */
const SHORT_ERROR_LENGTH = 64;

/**
 * The error message of a failed module call when it is short enough for a
 * notification, else `null`. The server puts the message in the `error`
 * field of the body.
 */
export function shortModuleError(error: unknown) {
    const message =
        typeof error === 'string' ? error : httpError(error)?.message;
    return message && message.length < SHORT_ERROR_LENGTH ? message : null;
}
