import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EngineApplication } from '@placeos/ts-client';

import { FormDetails } from './systems.utilities';
import { HashMap } from '../types.utilities';

export function generateApplicationFormFields(app: EngineApplication): FormDetails {
    if (!app) {
        throw Error('No domain application passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(app.name || '', [Validators.required]),
        scopes: new FormControl(app.scopes || ''),
        skip_authorization: new FormControl(app.skip_authorization || ''),
        redirect_uri: new FormControl(app.redirect_uri || '')
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('confirm') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    app.storePendingChange(key as any, value)
                )
            );
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
