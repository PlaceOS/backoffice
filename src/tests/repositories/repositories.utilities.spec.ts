import { describe, it, expect, vi } from 'vitest';
import { FormGroup } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceRepository: class {},
    PlaceRepositoryType: {
        Driver: 0,
        Interface: 1,
    },
}));

import { generateRepositoryFormFields } from '../../app/repositories/repositories.utilities';

describe('repositories.utilities', () => {
    describe('generateRepositoryFormFields', () => {
        describe('form structure for new repository', () => {
            it('should return a FormGroup', () => {
                const form = generateRepositoryFormFields();
                expect(form).toBeInstanceOf(FormGroup);
            });

            it('should have id control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('id')).toBeTruthy();
            });

            it('should have commit_hash control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('commit_hash')).toBeTruthy();
            });

            it('should have branch control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('branch')).toBeTruthy();
            });

            it('should have name control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('name')).toBeTruthy();
            });

            it('should have folder_name control for new repo', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('folder_name')).toBeTruthy();
            });

            it('should have description control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('description')).toBeTruthy();
            });

            it('should have uri control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('uri')).toBeTruthy();
            });

            it('should have repo_type control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('repo_type')).toBeTruthy();
            });

            it('should have root_path control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('root_path')).toBeTruthy();
            });

            it('should have username control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('username')).toBeTruthy();
            });

            it('should have password control', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('password')).toBeTruthy();
            });
        });

        describe('default values', () => {
            it('should have empty id by default', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('id')?.value).toBe('');
            });

            it('should have HEAD as default commit_hash', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('commit_hash')?.value).toBe('HEAD');
            });

            it('should have empty branch by default', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('branch')?.value).toBe('');
            });

            it('should have empty name by default', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('name')?.value).toBe('');
            });

            it('should have empty folder_name by default', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('folder_name')?.value).toBe('');
            });

            it('should have empty description by default', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('description')?.value).toBe('');
            });

            it('should have empty uri by default', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('uri')?.value).toBe('');
            });

            it('should have Driver as default repo_type', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('repo_type')?.value).toBe(0); // PlaceRepositoryType.Driver
            });
        });

        describe('with repository data', () => {
            const mock_repo = {
                id: '',
                commit_hash: 'abc123',
                branch: 'main',
                name: 'Test Repository',
                folder_name: 'test-repo',
                description: 'A test repository',
                uri: 'https://github.com/example/repo.git',
                repo_type: 1, // Interface
                root_path: '/drivers',
                username: 'user',
                password: 'pass',
            } as any;

            it('should populate commit_hash', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('commit_hash')?.value).toBe('abc123');
            });

            it('should populate branch', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('branch')?.value).toBe('main');
            });

            it('should populate name', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('name')?.value).toBe('Test Repository');
            });

            it('should populate folder_name for new repo', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('folder_name')?.value).toBe('test-repo');
            });

            it('should populate uri', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('uri')?.value).toBe(
                    'https://github.com/example/repo.git',
                );
            });

            it('should populate repo_type', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('repo_type')?.value).toBe(1);
            });

            it('should populate credentials', () => {
                const form = generateRepositoryFormFields(mock_repo);
                expect(form.get('username')?.value).toBe('user');
                expect(form.get('password')?.value).toBe('pass');
            });
        });

        describe('existing repository (with id)', () => {
            const existing_repo = {
                id: 'repo-123',
                name: 'Existing Repo',
                branch: 'main',
                uri: 'https://github.com/example/repo.git',
                folder_name: 'existing-folder',
            } as any;

            it('should not have folder_name control', () => {
                const form = generateRepositoryFormFields(existing_repo);
                expect(form.get('folder_name')).toBeFalsy();
            });

            it('should have other controls', () => {
                const form = generateRepositoryFormFields(existing_repo);
                expect(form.get('name')).toBeTruthy();
                expect(form.get('branch')).toBeTruthy();
                expect(form.get('uri')).toBeTruthy();
            });
        });

        describe('validation', () => {
            it('should require branch', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('branch')?.valid).toBe(false);
                expect(form.get('branch')?.errors?.['required']).toBeTruthy();
            });

            it('should require name', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('name')?.valid).toBe(false);
                expect(form.get('name')?.errors?.['required']).toBeTruthy();
            });

            it('should require folder_name for new repo', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('folder_name')?.valid).toBe(false);
                expect(
                    form.get('folder_name')?.errors?.['required'],
                ).toBeTruthy();
            });

            it('should require uri', () => {
                const form = generateRepositoryFormFields();
                expect(form.get('uri')?.valid).toBe(false);
                expect(form.get('uri')?.errors?.['required']).toBeTruthy();
            });

            describe('folder_name pattern validation', () => {
                it('should accept alphanumeric folder_name', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('myFolder123');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeFalsy();
                });

                it('should accept folder_name with underscores', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my_folder_name');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeFalsy();
                });

                it('should accept folder_name with hyphens', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my-folder-name');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeFalsy();
                });

                it('should accept folder_name with dots', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my.folder.name');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeFalsy();
                });

                it('should accept folder_name with parentheses', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my(folder)name');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeFalsy();
                });

                it('should accept folder_name with plus sign', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my+folder');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeFalsy();
                });

                it('should reject folder_name with spaces', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my folder');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeTruthy();
                });

                it('should reject folder_name with special characters', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my@folder');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeTruthy();
                });

                it('should reject folder_name with slashes', () => {
                    const form = generateRepositoryFormFields();
                    form.get('folder_name')?.setValue('my/folder');
                    expect(
                        form.get('folder_name')?.errors?.['pattern'],
                    ).toBeTruthy();
                });
            });
        });

        describe('branch and commit_hash interaction', () => {
            it('should disable commit_hash when branch is cleared', () => {
                const repo = { branch: 'main' } as any;
                const form = generateRepositoryFormFields(repo);

                // Initially enabled
                expect(form.get('commit_hash')?.disabled).toBe(false);

                // Clear branch
                form.get('branch')?.setValue('');
                expect(form.get('commit_hash')?.disabled).toBe(true);
            });

            it('should enable commit_hash when branch is set', () => {
                const form = generateRepositoryFormFields();

                // Set branch after form creation
                form.get('branch')?.setValue('');
                form.get('branch')?.setValue('develop');
                expect(form.get('commit_hash')?.disabled).toBe(false);
            });

            it('should keep commit_hash enabled with valid branch', () => {
                const repo = { branch: 'main' } as any;
                const form = generateRepositoryFormFields(repo);

                form.get('branch')?.setValue('develop');
                expect(form.get('commit_hash')?.disabled).toBe(false);
            });
        });
    });
});
