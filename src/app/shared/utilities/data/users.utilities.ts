import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { EngineUser } from '@acaengine/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function validateMatch(name: string) {
    return (control: AbstractControl) => {
        const group = control.parent;
        if (group) {
            const value = group.controls[name] ? group.controls[name].value : '';
            return value !== control.value ? { match: true } : null;
        }
        return null;
    }
}

export function generateUserFormFields(user: EngineUser): FormDetails {
    if (!user) {
        throw Error('No User passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(user.name || '', [Validators.required]),
        email: new FormControl(user.email || '', [Validators.email, Validators.required]),
        staff_id: new FormControl(user.staff_id || ''),
        support: new FormControl(user.support || false),
        sys_admin: new FormControl(user.sys_admin || false),
        password: new FormControl(undefined),
        confirm_password: new FormControl(undefined, [validateMatch('password')]),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('confirm') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    user.storePendingChange(key as any, value)
                )
            );
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
