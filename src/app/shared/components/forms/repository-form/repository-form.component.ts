import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PlaceRepositoryType, listRepositoryBranches, listRepositoryCommits } from '@placeos/ts-client';

import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';

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
    /** List of available types of repositories */
    public repo_types: Identity[] = [
        { id: PlaceRepositoryType.Driver, name: 'Driver' },
        { id: PlaceRepositoryType.Interface, name: 'Interface' },
    ];

    /** Whether item is being edited */
    public get is_edit(): boolean {
        return this.form && this.form.controls.id && this.form.controls.id.value;
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

    constructor(private _service: ApplicationService) {}

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
        this.commit_list = (commits || []).map((commit) => {
            const date = dayjs(commit.date);
            return {
                id: commit.commit,
                name: commit.subject,
                extra: date.isAfter(dayjs().subtract(1, 'm'))
                    ? date.fromNow()
                    : date.format('DD MMM YYYY'),
            };
        });
        const active_commit = this.form.controls.commit_hash.value;
        this.base_commit = this.commit_list.find((commit) => `${commit.id}` === active_commit);
        if (!this.base_commit) {
            this.base_commit = this.commit_list[0] || null;
        }
    }

    public async loadBranches() {
        if (!this.is_edit || !this.form.controls.branch) {
            return;
        }
        const id = this.form.controls.id.value;
        this.branch_list = await listRepositoryBranches(id).toPromise() || [];
    }
}
