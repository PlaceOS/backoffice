
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PlaceModule, PlaceSystem, PlaceDriver, PlaceDriverRole, PlaceEdge } from '@placeos/ts-client';

import { HashMap } from 'src/app/common/types';
import { validateURI, validateIpAddress } from 'src/app/common/validation';

export function generateModuleFormFields(module: PlaceModule): FormGroup {
    if (!module) {
        throw Error('No Module passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        id: new FormControl(module.id || ''),
        ip: new FormControl(module.ip || '', [validateIpAddress]),
        port: new FormControl(module.port || null, [Validators.min(1), Validators.max(65535)]),
        tls: new FormControl(module.tls || false),
        udp: new FormControl(module.udp || false),
        makebreak: new FormControl(module.makebreak || false),
        ignore_connected: new FormControl(module.ignore_connected || false),
        uri: new FormControl(module.uri || '', [validateURI]),
        notes: new FormControl(module.notes || ''),
        name: new FormControl(module.name || ''),
        custom_name: new FormControl(module.custom_name || ''),
        system: new FormControl(module.system),
        control_system_id: new FormControl(module.control_system_id),
        role: new FormControl(module.role || PlaceDriverRole.Logic),
        driver: new FormControl('', [Validators.required]),
        driver_id: new FormControl(module.driver_id),
        edge: new FormControl(''),
        edge_id: new FormControl(module.edge_id || null),
    };
    const system = module.system || fields.system.value || null;
    if (!module.id) {
        fields.system.valueChanges.subscribe((value: PlaceSystem) =>{
            fields.control_system_id.setValue(value?.id);
        })
        fields.edge.valueChanges.subscribe((value: PlaceEdge) =>{
            fields.edge_id.setValue(value?.id || null);
        })
        fields.driver.valueChanges.subscribe((value: PlaceDriver) => {
            fields.driver_id.setValue(value.id)
            fields.name.setValue(value.name || value.module_name);
            fields.uri.setValue(value.default_uri);
            fields.port.setValue(value.default_port || 1);
            fields.role.setValue(value.role || PlaceDriverRole.Logic);
            resetModuleFormValidators(fields);
            switch (value.role) {
                case PlaceDriverRole.Service:
                case PlaceDriverRole.Websocket:
                    fields.uri.setValidators([Validators.required, validateURI]);
                    fields.udp.setValue(false);
                    fields.system.setValue(null);
                    break;
                case PlaceDriverRole.Device:
                case PlaceDriverRole.SSH:
                    fields.ip.setValidators([validateIpAddress, Validators.required]);
                    fields.port.setValidators([Validators.min(1), Validators.max(65535), Validators.required]);
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
