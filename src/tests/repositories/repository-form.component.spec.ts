import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    PlaceRepositoryType,
    listRepositoryBranches,
    updateRepository,
} from '@placeos/ts-client';
import { EMPTY } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { notifyError } from '../../app/common/notifications';
import { RepositoryFormComponent } from '../../app/repositories/repository-form.component';

vi.mock('../../app/common/notifications', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    notifyError: vi.fn(),
}));

vi.mock('@placeos/ts-client', () => ({
    EncryptionLevel: { Support: 2 },
    PlaceRepositoryType: { Driver: 'driver', Interface: 'interface' },
    PlaceSettings: class PlaceSettings {},
    addRepository: vi.fn(),
    addSettings: vi.fn(),
    cleanObject: (value: unknown) => value,
    listRemoteRepositoryBranches: vi.fn(),
    listRemoteRepositoryCommits: vi.fn(),
    listRemoteRepositoryDefaultBranch: vi.fn(),
    listRepositoryBranches: vi.fn(() => Promise.resolve(['main', 'dev'])),
    listRepositoryCommits: vi.fn(() => Promise.resolve([])),
    listRepositoryDefaultBranch: vi.fn(() => Promise.resolve('main')),
    showMetadata: vi.fn(() => Promise.resolve({})),
    updateRepository: vi.fn(),
}));

describe('RepositoryFormComponent', () => {
    let fixture: ComponentFixture<RepositoryFormComponent>;

    beforeEach(async () => {
        vi.clearAllMocks();
        vi.mocked(listRepositoryBranches).mockResolvedValue(['main', 'dev']);
        await TestBed.configureTestingModule({
            imports: [RepositoryFormComponent],
            providers: [
                provideZonelessChangeDetection(),
                {
                    provide: DialogRef,
                    useValue: {
                        close: vi.fn(),
                        backdropClick: EMPTY,
                        keydownEvents: EMPTY,
                    },
                },
                {
                    provide: DIALOG_DATA,
                    useValue: {
                        item: {
                            id: 'repo-1',
                            name: 'Repository',
                            branch: 'main',
                            commit_hash: 'HEAD',
                            repo_type: PlaceRepositoryType.Driver,
                            uri: 'https://example.com/repository.git',
                        },
                    },
                },
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(RepositoryFormComponent);
        await fixture.whenStable();
        await vi.waitFor(() =>
            expect(listRepositoryBranches).toHaveBeenCalledTimes(1),
        );
    });

    afterEach(() => fixture.destroy());

    it('does not loop branch loads when the select opens after credential blur', async () => {
        vi.mocked(listRepositoryBranches).mockResolvedValue(['dev']);
        fixture.componentInstance.markCredentialsBlur();
        fixture.componentInstance.setBranchOpen(true);

        await new Promise((resolve) => setTimeout(resolve, 750));

        expect(listRepositoryBranches).toHaveBeenCalledTimes(2);
    });

    it('does not save without a branch when the branch list is empty', async () => {
        const component = fixture.componentInstance;
        component.branch_list.set([]);
        component.formModel.update((model) => ({ ...model, branch: '' }));

        await component.submit();

        expect(updateRepository).not.toHaveBeenCalled();
        expect(notifyError).toHaveBeenCalledWith('REPOS.BRANCH_REQUIRED');
    });

    it('keeps selected options at the top when filtering', async () => {
        const component = fixture.componentInstance;
        component.branch_list.set(['dev', 'main']);
        component.branch_filter.set('dev');
        component.commit_list.set([
            { hash: 'abc123', subject: 'Feature commit' },
            { hash: 'def456', subject: 'Other commit' },
            { hash: 'HEAD', subject: 'Latest commit' },
        ]);
        component.commit_filter.set('feature');

        await fixture.whenStable();

        expect(component.filtered_branch_list()).toEqual(['main', 'dev']);
        expect(
            component.filtered_commit_list().map(({ hash }) => hash),
        ).toEqual(['HEAD', 'abc123']);
    });

    it('pins the newest commit when following HEAD is turned off', () => {
        const component = fixture.componentInstance;
        component.commit_list.set([
            { hash: 'HEAD', subject: 'Latest commit' },
            { hash: 'abc123', subject: 'Newest commit' },
            { hash: 'def456', subject: 'Older commit' },
        ]);

        component.setFollow(false);
        expect(component.follow_latest()).toBe(false);
        expect(component.formModel().commit_hash).toBe('abc123');

        component.setFollow(true);
        expect(component.follow_latest()).toBe(true);
        expect(component.formModel().commit_hash).toBe('HEAD');
    });

    it.each([
        { selected: '', expected: 'main' },
        { selected: 'missing', expected: 'main' },
        { selected: 'dev', expected: 'dev' },
    ])(
        'selects $expected after branches load when the branch is $selected',
        async ({ selected, expected }) => {
            const component = fixture.componentInstance;
            component.formModel.update((model) => ({
                ...model,
                branch: selected,
            }));

            component.markCredentialsBlur();
            await vi.waitFor(() => {
                expect(listRepositoryBranches).toHaveBeenCalledTimes(2);
                expect(component.loading_branches()).toBe(false);
            });

            expect(component.formModel().branch).toBe(expected);
        },
    );
});
