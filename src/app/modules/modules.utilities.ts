import {
    PlaceDriver,
    PlaceDriverRole,
    PlaceEdge,
    PlaceModule,
    PlaceSystem,
} from '@placeos/ts-client';

import {
    max,
    min,
    required,
    SchemaFn,
    validate,
} from '@angular/forms/signals';
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
    system?: PlaceSystem;
    control_system_id: string;
    role: PlaceDriverRole;
    driver?: PlaceDriver;
    driver_id: string;
    edge?: PlaceEdge;
    edge_id: string;
}

export function generateModuleFormModel(mod?: PlaceModule): ModuleFormModel {
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
        system: mod?.system,
        control_system_id: mod?.control_system_id || '',
        role: mod?.role || PlaceDriverRole.Logic,
        driver: undefined,
        driver_id: mod?.driver_id || '',
        edge: undefined,
        edge_id: mod?.edge_id || '',
    };
}

export const applyModuleFormSchema: SchemaFn<ModuleFormModel> = (path) => {
    required(path.driver_id);
    min(path.port, 1);
    max(path.port, 65535);
    validate(path.ip, ({ value }) =>
        validateIpAddress({ value: value() })
            ? { kind: 'pattern', message: 'Invalid IP address' }
            : undefined,
    );
    validate(path.uri, ({ value }) =>
        validateURI({ value: value() })
            ? { kind: 'pattern', message: 'Invalid URI' }
            : undefined,
    );
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
            return role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH;
        },
    });
    required(path.port, {
        when({ valueOf }) {
            const role = valueOf(path.role);
            return role === PlaceDriverRole.Device || role === PlaceDriverRole.SSH;
        },
    });
    required(path.system, {
        when({ valueOf }) {
            return valueOf(path.role) === PlaceDriverRole.Logic;
        },
    });
};
