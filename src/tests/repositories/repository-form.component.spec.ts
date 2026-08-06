import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import {
    PlaceRepositoryType,
    listRepositoryBranches,
} from '@placeos/ts-client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { RepositoryFormComponent } from '../../app/repositories/repository-form.component';

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
                provideNoopAnimations(),
                { provide: MatDialogRef, useValue: { close: vi.fn() } },
                {
                    provide: MAT_DIALOG_DATA,
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
});
