import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { repositories } from '@placeos/ts-client';
import { mockReply, PlaceRepositoryType } from '@placeos/ts-client/compat';
import { EMPTY } from 'rxjs';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { notifyError } from '../../app/common/notifications';
import { RepositoryFormComponent } from '../../app/repositories/repository-form.component';
const { fromV1Mock } = await vi.hoisted(
    () => import('@placeos/ts-client/compat'),
);

vi.mock('../../app/common/notifications', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    notifyError: vi.fn(),
}));

vi.mock('@placeos/ts-client', async (importOriginal) => ({
    ...(await importOriginal<object>()),
    repositories: {
        create: vi.fn(fromV1Mock(undefined, ['body'])),
        remoteBranches: vi.fn(fromV1Mock(undefined, ['...'])),
        remoteCommits: vi.fn(fromV1Mock(undefined, ['...'])),
        remoteDefaultBranch: vi.fn(fromV1Mock(undefined, ['...'])),
        branches: vi.fn(
            fromV1Mock(() => Promise.resolve(['main', 'dev']), ['id']),
        ),
        commits: vi.fn(fromV1Mock(() => Promise.resolve([]), ['id', '...'])),
        defaultBranch: vi.fn(fromV1Mock(() => Promise.resolve('main'), ['id'])),
        update: vi.fn(fromV1Mock(undefined, ['id', 'body'])),
    },
    settings: { create: vi.fn(fromV1Mock(undefined, ['body', '...'])) },
    metadata: {
        show: vi.fn(
            fromV1Mock(
                () => Promise.resolve({}),
                ['id', 'name'],
                'data',
                'name',
            ),
        ),
    },
}));

describe('RepositoryFormComponent', () => {
    let fixture: ComponentFixture<RepositoryFormComponent>;

    beforeEach(async () => {
        vi.clearAllMocks();
        vi.mocked(repositories.branches).mockResolvedValue(
            mockReply(['main', 'dev']),
        );
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
            expect(repositories.branches).toHaveBeenCalledTimes(1),
        );
    });

    afterEach(() => fixture.destroy());

    it('does not loop branch loads when the select opens after credential blur', async () => {
        vi.mocked(repositories.branches).mockResolvedValue(mockReply(['dev']));
        fixture.componentInstance.markCredentialsBlur();
        fixture.componentInstance.setBranchOpen(true);

        await new Promise((resolve) => setTimeout(resolve, 750));

        expect(repositories.branches).toHaveBeenCalledTimes(2);
    });

    it('does not save without a branch when the branch list is empty', async () => {
        const component = fixture.componentInstance;
        component.branch_list.set([]);
        component.formModel.update((model) => ({ ...model, branch: '' }));

        await component.submit();

        expect(repositories.update).not.toHaveBeenCalled();
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
                expect(repositories.branches).toHaveBeenCalledTimes(2);
                expect(component.loading_branches()).toBe(false);
            });

            expect(component.formModel().branch).toBe(expected);
        },
    );
});
