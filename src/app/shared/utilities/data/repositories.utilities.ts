import { Validators, FormControl, FormGroup } from '@angular/forms';
import { HashMap, EngineRepository, EngineRepositoryType } from '@placeos/ts-client';

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
        id: new FormControl(repository.id || ''),
        commit_hash: new FormControl(repository.commit_hash || ''),
        branch: new FormControl(repository.branch || 'master', [Validators.required]),
        name: new FormControl(repository.name || '', [Validators.required]),
        folder_name: new FormControl(repository.folder_name || '', [Validators.required]),
        description: new FormControl(repository.description || ''),
        uri: new FormControl(repository.uri || '', [Validators.required]),
        repo_type: new FormControl(repository.repo_type || EngineRepositoryType.Driver),
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe((value) =>
                    repository.storePendingChange(key as any, value)
                )
            );
        }
    }
    fields.branch.disable();
    if (!repository.id) {
        repository.storePendingChange('commit_hash', 'head');
    } else {
        delete fields.folder_name;
        delete fields.uri;
    }
    return {
        form: new FormGroup(fields),
        subscriptions,
    };
}
