import { FormControl, Validators, FormGroup } from '@angular/forms';
import {
    PlaceModule,
    PlaceSystem,
    PlaceDriver,
    PlaceDriverRole,
    PlaceEdge,
} from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import {
    validateURI,
    validateIpAddress,
} from 'apps/backoffice/src/app/common/validation';

export function generateModuleFormFields(mod?: PlaceModule) {
    const fields = {
        id: new FormControl(mod?.id || ''),
        ip: new FormControl(mod?.ip || '', [validateIpAddress]),
        port: new FormControl(mod?.port || null, [
            Validators.min(1),
            Validators.max(65535),
        ]),
        tls: new FormControl(mod?.tls || false),
        udp: new FormControl(mod?.udp || false),
        makebreak: new FormControl(mod?.makebreak || false),
        ignore_connected: new FormControl(mod?.ignore_connected || false),
        uri: new FormControl(mod?.uri || '', [validateURI]),
        notes: new FormControl(mod?.notes || ''),
        name: new FormControl(mod?.name || ''),
        custom_name: new FormControl(mod?.custom_name || ''),
        system: new FormControl(mod?.system),
        control_system_id: new FormControl(mod?.control_system_id),
        role: new FormControl(mod?.role || PlaceDriverRole.Logic),
        driver: new FormControl<PlaceDriver | null>(null),
        driver_id: new FormControl(mod?.driver_id, [Validators.required]),
        edge: new FormControl<PlaceEdge | null>(null),
        edge_id: new FormControl(mod?.edge_id || null),
    };
    const system = mod?.system || fields.system.value || null;
    fields.custom_name.valueChanges.subscribe((value: string) => {
        fields.custom_name.setValue(value?.replace(/ /g, '_'), {
            emitEvent: false,
        });
    });
    if (!mod?.id) {
        fields.system.valueChanges.subscribe((value: PlaceSystem) => {
            fields.control_system_id.setValue(value?.id);
        });
        fields.edge.valueChanges.subscribe((value) => {
            fields.edge_id.setValue(value?.id || null);
        });
        fields.driver.valueChanges.subscribe((value) => {
            fields.driver_id.setValue(value.id);
            fields.name.setValue(value.name || value.module_name);
            fields.uri.setValue(value.default_uri);
            fields.port.setValue(value.default_port || 1);
            fields.role.setValue(value.role || PlaceDriverRole.Logic);
            resetModuleFormValidators(fields);
            switch (value.role) {
                case PlaceDriverRole.Service:
                case PlaceDriverRole.Websocket:
                    fields.uri.setValidators([
                        Validators.required,
                        validateURI,
                    ]);
                    fields.udp.setValue(false);
                    fields.system.setValue(null);
                    break;
                case PlaceDriverRole.Device:
                case PlaceDriverRole.SSH:
                    fields.ip.setValidators([
                        validateIpAddress,
                        Validators.required,
                    ]);
                    fields.port.setValidators([
                        Validators.min(1),
                        Validators.max(65535),
                        Validators.required,
                    ]);
                    fields.system.setValue(null);
                    break;
                case PlaceDriverRole.Logic:
                    fields.system.setValidators([Validators.required]);
                    fields.system.setValue(system);
                    break;
            }
        });
    } else {
        delete fields.system;
        delete fields.driver;
    }
    return new FormGroup(fields);
}

export function resetModuleFormValidators(fields: HashMap<FormControl>) {
    fields.ip.setValidators([validateIpAddress]);
    fields.port.setValidators([Validators.min(1), Validators.max(65535)]);
    fields.uri.setValidators([validateURI]);
    // fields.settings_string.setValidators([validateYAML]);
    fields.system.setValidators([]);
    fields.driver.setValidators([Validators.required]);
}
