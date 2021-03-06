import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
    PlaceRepositoryType,
    listRepositoryBranches,
    listRepositoryCommits,
} from '@placeos/ts-client';
import { Identity } from 'apps/backoffice/src/app/common/types';

import * as dayjs from 'dayjs';

@Component({
    selector: 'repository-form',
    templateUrl: './repository-form.component.html',
    styleUrls: ['./repository-form.component.scss'],
})
export class RepositoryFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of commits available for repository */
    public commit_list: Identity[] = [];
    /** List of branches available for repository */
    public branch_list: string[] = [];
    /** Whether repository's commits are being loaded */
    public loading_commits: boolean;
    /** Currently selected commit for the repository */
    public base_commit: Identity;
    /** Whether to follow the latest branch commits(Auto-update) */
    public follow_latest: boolean;
    /** List of available types of repositories */
    public repo_types: Identity[] = [
        { id: PlaceRepositoryType.Driver, name: 'Driver' },
        { id: PlaceRepositoryType.Interface, name: 'Interface' },
    ];
    public show_password: boolean = false;

    /** Whether item is being edited */
    public get is_edit(): boolean {
        return (
            this.form && this.form.controls.id && this.form.controls.id.value
        );
    }

    /** Whether commit of the repo is allowed to be changed */
    public get can_change_commit(): boolean {
        return !!(
            this.form &&
            this.form.controls.commit_hash &&
            this.form.controls.repo_type &&
            this.form.controls.repo_type.value === PlaceRepositoryType.Interface
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form) {
            this.loadCommits();
            this.loadBranches();
        }
    }

    public async loadCommits() {
        if (!this.is_edit || !this.can_change_commit) {
            return;
        }
        const id = this.form.controls.id.value;
        const commits: any[] = await listRepositoryCommits(id).toPromise();
        const commit_list = (commits || []).map((commit) => {
            const date = dayjs(commit.date);
            return {
                id: commit.commit,
                name: commit.subject,
                extra: date.isAfter(dayjs().subtract(1, 'm'))
                    ? date.fromNow()
                    : date.format('DD MMM YYYY'),
            };
        });
        this.commit_list = [
            {
                ...commit_list[0],
                id: 'HEAD',
            },
            ...commit_list,
        ];
        const active_commit = this.form.controls.commit_hash.value;
        this.base_commit = this.commit_list.find(
            (commit) => `${commit.id}` === active_commit
        );
        if (!this.base_commit) {
            this.base_commit = this.commit_list[0] || null;
        }
        if (this.base_commit?.id === 'HEAD') {
            this.setFollow(true);
        }
    }

    public setFollow(value: boolean) {
        this.follow_latest = value;
        if (value) {
            this.form.controls.commit_hash.setValue('HEAD');
        } else if (!value && this.form.controls.commit_hash.value === 'HEAD') {
            this.form.controls.commit_hash.setValue(this.commit_list[1].id);
        }
    }

    public async loadBranches() {
        if (!this.is_edit || !this.form.controls.branch) {
            return;
        }
        const id = this.form.controls.id.value;
        this.branch_list = (await listRepositoryBranches(id).toPromise()) || [];
    }
}
