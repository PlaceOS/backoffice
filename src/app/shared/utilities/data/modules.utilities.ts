
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EngineModule, EngineSystem, EngineDriver, EncryptionLevel, EngineDriverRole } from '@placeos/ts-client';

import { FormDetails, validateYAML } from './systems.utilities';
import { HashMap } from '../types.utilities';
import { validateURI, validateIpAddress } from '../validation.utilities';

export function generateModuleFormFields(module: EngineModule): FormDetails {
    if (!module) {
        throw Error('No Module passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        ip: new FormControl(module.ip || '', [validateIpAddress]),
        port: new FormControl(module.port || '', [Validators.min(1), Validators.max(65535)]),
        tls: new FormControl(module.tls || false),
        udp: new FormControl(module.udp || false),
        makebreak: new FormControl(module.makebreak || false),
        ignore_connected: new FormControl(module.ignore_connected || false),
        uri: new FormControl(module.uri || '', [validateURI]),
        notes: new FormControl(module.notes || ''),
        name: new FormControl(module.name || ''),
        custom_name: new FormControl(module.custom_name || ''),

        settings_encryption_level: new FormControl(module.settings.encryption_level),
        settings_string: new FormControl(module.settings.settings_string || '', [validateYAML]),
        system: new FormControl(module.system),
        driver: new FormControl('', [Validators.required])
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0 && key.indexOf('driver') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    module.storePendingChange(key as any, value)
                )
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
            fields.driver.valueChanges.subscribe((value: EngineDriver) =>{
                module.storePendingChange('driver_id', value.id);
                fields.name.setValue(value.name || value.module_name);
                fields.uri.setValue(value.default_uri);
                fields.port.setValue(value.default_port || 1)
                resetModuleFormValidators(fields);
                switch (value.role) {
                    case EngineDriverRole.Websocket:
                        fields.uri.setValidators([Validators.required, validateURI]);
                        fields.udp.setValue(false);
                        break;
                    case EngineDriverRole.SSH:
                        fields.ip.setValidators([validateIpAddress, Validators.required]);
                        fields.port.setValidators([Validators.min(1), Validators.max(65535), Validators.required]);
                        break;
                    case EngineDriverRole.Logic:
                        fields.system.setValidators([Validators.required])
                        break;
                }
            })
        );
        subscriptions.push(
            fields.settings_encryption_level.valueChanges.subscribe((value: EncryptionLevel) =>{
                module.settings.storePendingChange('encryption_level', value);
            })
        );
        subscriptions.push(
            fields.settings_string.valueChanges.subscribe((value: string) => {
                module.settings.storePendingChange('settings_string', value);
            }
            )
        );
        fields.settings_encryption_level.setValue(EncryptionLevel.None);
    } else {
        delete fields.system;
        delete fields.driver;
        delete fields.settings_encryption_level;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}

export function resetModuleFormValidators(fields: HashMap<FormControl>) {
    fields.ip.setValidators([validateIpAddress]),
    fields.port.setValidators([Validators.min(1), Validators.max(65535)]),
    fields.uri.setValidators([Validators.pattern('\w+:(\/?\/?)[^\s]+')]),
    fields.settings_string.setValidators([validateYAML]),
    fields.system.setValidators([]),
    fields.driver.setValidators([Validators.required])
}
