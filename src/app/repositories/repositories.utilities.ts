import { PlaceRepository, PlaceRepositoryType } from '@placeos/ts-client';
import { required, SchemaFn, validate } from '@angular/forms/signals';

export interface RepositoryFormModel {
    id: string;
    commit_hash: string;
    branch: string;
    name: string;
    folder_name: string;
    description: string;
    uri: string;
    repo_type: PlaceRepositoryType;
    root_path: string;
    username: string;
    password: string;
}

/**
 * Generate repository form defaults.
 */
export function generateRepositoryFormModel(
    repository?: PlaceRepository,
): RepositoryFormModel {
    return {
        id: repository?.id || '',
        commit_hash: repository?.commit_hash || 'HEAD',
        branch: repository?.branch || '',
        name: repository?.name || '',
        folder_name: repository?.folder_name || '',
        description: repository?.description || '',
        uri: repository?.uri || '',
        repo_type: repository?.repo_type || PlaceRepositoryType.Driver,
        root_path: repository?.root_path || '',
        username: repository?.username || '',
        password: repository?.password || '',
    };
}

export const applyRepositoryFormSchema: SchemaFn<RepositoryFormModel> = (
    path,
) => {
    required(path.branch);
    required(path.name);
    required(path.folder_name, {
        when({ valueOf }) {
            return !valueOf(path.id);
        },
    });
    validate(path.folder_name, ({ value, valueOf }) => {
        if (valueOf(path.id)) return undefined;
        return /^[a-zA-Z0-9_+\-().]*$/.test(value())
            ? undefined
            : { kind: 'pattern', message: 'Invalid folder name' };
    });
    required(path.uri);
};
