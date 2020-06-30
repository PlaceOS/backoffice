import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineDomain } from '@placeos/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateDomainFormFields(domain: EngineDomain): FormDetails {
    if (!domain) {
        throw Error('No User passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(domain.name || '', [Validators.required]),
        domain: new FormControl(domain.domain || '', [Validators.required]),
        login_url: new FormControl(domain.login_url || ''),
        logout_url: new FormControl(domain.logout_url || ''),
        config: new FormControl(domain.config || ''),
        internals: new FormControl(domain.internals || ''),
        description: new FormControl(domain.description || ''),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('confirm') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value => domain.storePendingChange(key as any, value))
            );
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
