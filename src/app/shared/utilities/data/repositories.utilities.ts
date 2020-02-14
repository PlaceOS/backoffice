
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HashMap, EngineRepository, EngineRepositoryType } from '@acaengine/ts-client';

import { FormDetails } from './systems.utilities';

/**
 * Generate angular form controls
 * @param repository Trigger to generate the form controls for
 */
export function generateRepositoryFormFields(repository: EngineRepository): FormDetails {
    if (!repository) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(repository.name || '', [Validators.required]),
        folder_name: new FormControl(repository.folder_name || '', [Validators.required]),
        description: new FormControl(repository.description || ''),
        uri: new FormControl(repository.uri || '', [Validators.required]),
        type: new FormControl(repository.type || EngineRepositoryType.Driver),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    repository.storePendingChange(key as any, value)
                )
            );
        }
    }
    if (!repository.id) {
        repository.storePendingChange('commit_hash', 'head');
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
