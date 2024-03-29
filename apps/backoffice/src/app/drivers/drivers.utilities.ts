import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
    PlaceDriver,
    PlaceRepository,
    PlaceDriverRole,
} from '@placeos/ts-client';

import { validateURI } from 'apps/backoffice/src/app/common/validation';

export interface DriverInitData {
    repo: PlaceRepository;
    driver: PlaceDriver;
}

export function generateDriverFormFields(driver?: PlaceDriver) {
    const fields = {
        id: new FormControl(driver?.id || ''),
        repository_id: new FormControl(driver?.repository_id),
        file_name: new FormControl(driver?.file_name),
        commit: new FormControl(driver?.commit),
        name: new FormControl(driver?.name || '', [Validators.required]),
        role: new FormControl(driver?.role || PlaceDriverRole.Logic),
        module_name: new FormControl(driver?.module_name || '', [
            Validators.required,
        ]),
        default_uri: new FormControl(driver?.default_uri || '', [validateURI]),
        default_port: new FormControl(driver?.default_port || 1, [
            Validators.min(1),
            Validators.max(65535),
        ]),
        class_name: new FormControl(driver?.class_name || ''),
        description: new FormControl(driver?.description || ''),
        ignore_connected: new FormControl(driver?.ignore_connected || false),
        settings: new FormControl(''),
    };
    fields.module_name.valueChanges.subscribe((value: string) => {
        fields.module_name.setValue(value?.replace(/ /g, '_'), {
            emitEvent: false,
        });
    });
    if (driver.id) {
        delete fields.class_name;
        delete fields.role;
    }
    return new FormGroup(fields);
}
