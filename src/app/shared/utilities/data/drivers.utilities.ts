
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineDriver, EngineRepository, EncryptionLevel } from '@placeos/ts-client';

import { FormDetails, validateYAML } from './systems.utilities';
import { HashMap } from '../types.utilities';

export interface DriverInitData {
    repo: EngineRepository;
    driver: EngineDriver;
}

export function generateDriverFormFields(driver: EngineDriver): FormDetails {
    if (!driver) {
        throw Error('No Driver passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        id: new FormControl(driver.id || ''),
        repository_id: new FormControl(driver.repository_id),
        file_name: new FormControl(driver.file_name),
        commit: new FormControl(driver.commit),
        name: new FormControl(driver.name || '', [Validators.required]),
        role: new FormControl(driver.role || 99),
        module_name: new FormControl(driver.module_name || '', [Validators.required]),
        default_uri: new FormControl(driver.default_uri || ''),
        default_port: new FormControl(driver.default_port || 1, [Validators.min(1), Validators.max(65535)]),
        class_name: new FormControl(driver.class_name || ''),
        description: new FormControl(driver.description || ''),
        ignore_connected: new FormControl(driver.ignore_connected || false),
        settings_encryption_level: new FormControl(driver.settings.encryption_level),
        settings_string: new FormControl(driver.settings.settings_string || '', [validateYAML]),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    driver.storePendingChange(key as any, value)
                )
            );
        }
    }
    subscriptions.push(
        fields.settings_string.valueChanges.subscribe((value: string) => {
            (driver.settings as any).storePendingChange('settings_string', value);
        }
        )
    );
    if (!driver.id) {
        subscriptions.push(
            fields.settings_encryption_level.valueChanges.subscribe((value: EncryptionLevel) =>{
                (driver.settings as any).storePendingChange('encryption_level', value);
            })
        );
        fields.settings_encryption_level.setValue(EncryptionLevel.None);
    } else {
        delete fields.class_name;
        delete fields.role;
        delete fields.settings_encryption_level;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
