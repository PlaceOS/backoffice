import { describe, expect, it, vi } from 'vitest';
import { generateRepositoryFormModel } from '../../app/repositories/repositories.utilities';

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
});
