
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EngineModule, EngineSystem, EngineDriver, EngineDriverRole } from '@placeos/ts-client';

import { FormDetails, validateYAML } from './systems.utilities';
import { HashMap } from '../types.utilities';
import { validateURI, validateIpAddress } from '../validation.utilities';

export function generateModuleFormFields(module: EngineModule): FormDetails {
    if (!module) {
        throw Error('No Module passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
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
        driver: new FormControl('', [Validators.required])
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0 && key.indexOf('driver') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>{
                    console.log('Change:', key, value, fields[key]);
                    module.storePendingChange(key as any, value);
                })
            );
        }
    }
    if (!module.id) {
        subscriptions.push(
            fields.system.valueChanges.subscribe((value: EngineSystem) =>
                module.storePendingChange('control_system_id', value.id)
            )
        );
        subscriptions.push(
            fields.driver.valueChanges.subscribe((value: EngineDriver) => {
                module.storePendingChange('driver_id', value.id);
                fields.name.setValue(value.name || value.module_name);
                fields.uri.setValue(value.default_uri);
                fields.port.setValue(value.default_port || 1);
                resetModuleFormValidators(fields);
                switch (value.role) {
                    case EngineDriverRole.Service:
                    case EngineDriverRole.Websocket:
                        fields.uri.setValidators([Validators.required, validateURI]);
                        fields.udp.setValue(false);
                        break;
                    case EngineDriverRole.Device:
                    case EngineDriverRole.SSH:
                        fields.ip.setValidators([validateIpAddress, Validators.required]);
                        fields.port.setValidators([Validators.min(1), Validators.max(65535), Validators.required]);
                        break;
                    case EngineDriverRole.Logic:
                        fields.system.setValidators([Validators.required]);
                        break;
                }
            })
        );
    } else {
        delete fields.system;
        delete fields.driver;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}

export function resetModuleFormValidators(fields: HashMap<FormControl>) {
    fields.ip.setValidators([validateIpAddress]);
    fields.port.setValidators([Validators.min(1), Validators.max(65535)]);
    fields.uri.setValidators([validateURI]);
    // fields.settings_string.setValidators([validateYAML]);
    fields.system.setValidators([]);
    fields.driver.setValidators([Validators.required]);
}
