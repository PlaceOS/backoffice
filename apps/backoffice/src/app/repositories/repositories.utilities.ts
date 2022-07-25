import { Validators, FormControl, FormGroup } from '@angular/forms';
import { PlaceRepository, PlaceRepositoryType } from '@placeos/ts-client';

/**
 * Generate angular form controls
 * @param repository Trigger to generate the form controls for
 */
export function generateRepositoryFormFields(
    repository?: PlaceRepository
) {
    const fields = {
        id: new FormControl(repository?.id || ''),
        commit_hash: new FormControl(repository?.commit_hash || 'HEAD'),
        branch: new FormControl(repository?.branch || 'master', [
            Validators.required,
        ]),
        name: new FormControl(repository?.name || '', [Validators.required]),
        folder_name: new FormControl(repository?.folder_name || '', [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9_+\-\(\)\.]*$/),
        ]),
        description: new FormControl(repository?.description || ''),
        uri: new FormControl(repository?.uri || '', [Validators.required]),
        repo_type: new FormControl(
            repository?.repo_type || PlaceRepositoryType.Driver
        ),
        username: new FormControl(repository?.username),
        password: new FormControl(repository?.password),
    };
    if (repository?.id) {
        if (repository?.type === PlaceRepositoryType.Driver) {
            delete fields.uri;
        }
        delete fields.folder_name;
    }
    if (fields.branch) {
        fields.branch.valueChanges.subscribe((name) => {
            if (name !== repository?.branch) {
                fields.commit_hash.disable();
            } else {
                fields.commit_hash.enable();
            }
        });
    }
    return new FormGroup(fields);
}
