
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineDriver, EngineRepository, EngineDriverRole } from '@placeos/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';
import { validateURI } from '../validation.utilities';

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
        role: new FormControl(driver.role || EngineDriverRole.Logic),
        module_name: new FormControl(driver.module_name || '', [Validators.required]),
        default_uri: new FormControl(driver.default_uri || '', [validateURI]),
        default_port: new FormControl(driver.default_port || 1, [Validators.min(1), Validators.max(65535)]),
        class_name: new FormControl(driver.class_name || ''),
        description: new FormControl(driver.description || ''),
        ignore_connected: new FormControl(driver.ignore_connected || false),
        settings: new FormControl('')
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
    if (driver.id) {
        delete fields.class_name;
        delete fields.role;
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
