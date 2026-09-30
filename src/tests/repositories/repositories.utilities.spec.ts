import { describe, expect, it, vi } from 'vitest';
import {
    generateRepositoryFormModel,
    maskUriCredentials,
} from '../../app/repositories/repositories.utilities';

const mocks = vi.hoisted(() => ({
    PlaceRepositoryType: {
        Driver: 'driver',
        Interface: 'interface',
    },
}));

vi.mock('@placeos/ts-client', () => ({
    PlaceRepositoryType: mocks.PlaceRepositoryType,
}));

describe('repositories.utilities', () => {
    describe('generateRepositoryFormModel', () => {
        it('returns defaults', () => {
            expect(generateRepositoryFormModel()).toEqual({
                id: '',
                commit_hash: 'HEAD',
                branch: '',
                name: '',
                folder_name: '',
                description: '',
                uri: '',
                repo_type: mocks.PlaceRepositoryType.Driver,
                root_path: '',
                username: '',
                password: '',
            });
        });

        it('populates values from a repository', () => {
            const model = generateRepositoryFormModel({
                id: 'repo-1',
                commit_hash: 'abc123',
                branch: 'main',
                name: 'Drivers',
                folder_name: 'drivers',
                description: 'Driver repository',
                uri: 'https://example.com/repo.git',
                repo_type: mocks.PlaceRepositoryType.Interface,
                root_path: '/drivers',
                username: 'user',
                password: 'pass',
            } as any);

            expect(model).toMatchObject({
                id: 'repo-1',
                commit_hash: 'abc123',
                branch: 'main',
                name: 'Drivers',
                folder_name: 'drivers',
                repo_type: mocks.PlaceRepositoryType.Interface,
                username: 'user',
                password: 'pass',
            });
        });
    });

    describe('maskUriCredentials', () => {
        it('removes a username and password with special characters', () => {
            expect(
                maskUriCredentials(
                    'https://my_user+1:p%40ss_w%2Bd@github.com/org/repo.git',
                ),
            ).toBe('https://github.com/org/repo.git');
        });

        it('keeps a URI without credentials', () => {
            expect(maskUriCredentials('https://github.com/org/repo')).toBe(
                'https://github.com/org/repo',
            );
        });

        it('removes credentials from a URI that does not parse', () => {
            expect(maskUriCredentials('//user:pass@host/repo')).toBe(
                '//host/repo',
            );
        });
    });
});
