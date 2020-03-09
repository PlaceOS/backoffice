
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EngineModule, EngineSystem, EngineDriver, EncryptionLevel } from '@placeos/ts-client';

import { FormDetails, validateYAML } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateModuleFormFields(module: EngineModule): FormDetails {
    if (!module) {
        throw Error('No Module passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        ip: new FormControl(module.ip || '', [Validators.pattern('^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$')]),
        port: new FormControl(module.port || '', [Validators.min(1), Validators.max(65535)]),
        tls: new FormControl(module.tls || false),
        udp: new FormControl(module.udp || false),
        makebreak: new FormControl(module.makebreak || false),
        ignore_connected: new FormControl(module.ignore_connected || false),
        uri: new FormControl(module.uri || '', [Validators.pattern('\w+:(\/?\/?)[^\s]+')]),
        notes: new FormControl(module.notes || ''),
        custom_name: new FormControl(module.custom_name || ''),

        settings_encryption_level: new FormControl(module.settings.encryption_level),
        settings_string: new FormControl(module.settings.settings_string || '', [validateYAML]),
        system: new FormControl('', [Validators.required]),
        dependency: new FormControl('', [Validators.required])
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
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
            fields.dependency.valueChanges.subscribe((value: EngineDriver) =>
            module.storePendingChange('dependency_id', value.id)
            )
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
        delete fields.dependency;
        delete fields.settings_encryption_level;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
