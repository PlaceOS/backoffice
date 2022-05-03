import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
    PlaceRepositoryType,
    listRepositoryBranches,
    listRepositoryCommits,
} from '@placeos/ts-client';
import { listRepositoryReleases } from '@placeos/ts-client/dist/esm/repositories/functions';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { format, isAfter, subMinutes } from 'date-fns';
import { DateFromPipe } from '../pipes/date-from.pipe';

@Component({
    selector: 'repository-form',
    template: `
        <form
            repository
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.branch">
                <label
                    for="repository-name"
                    [class.error]="
                        form.controls.branch.invalid &&
                        form.controls.branch.touched
                    "
                    i18n="@@branchLabel"
                >
                    {{ is_interface ? 'Release' : 'Branch' }}<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        *ngIf="
                            !branch_list || !branch_list.length;
                            else options
                        "
                        matInput
                        name="branch-name"
                        [placeholder]="
                            (is_interface ? 'Release' : 'Branch') + ' name'
                        "
                        i18n-placeholder="@@repositoryBranchPlaceholder"
                        formControlName="branch"
                        required
                    />
                    <ng-template #options>
                        <mat-select
                            name="type"
                            formControlName="branch"
                            [placeholder]="'Select ' + (is_interface ? 'Release' : 'Branch')"
                        >
                            <mat-option
                                *ngFor="let branch of branch_list"
                                [value]="branch"
                            >
                                {{ branch }}
                            </mat-option>
                        </mat-select>
                    </ng-template>
                    <mat-error i18n="@@repoBranchError">
                        Working {{ is_interface ? 'Release' : 'Branch' }} name is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="field commit" *ngIf="is_edit && can_change_commit">
                <label for="commit" i18n="@@repoCommitLabel">
                    Repository Commit:
                </label>
                <item-search-field
                    name="commit"
                    [options]="commit_list | slice: 1"
                    [disabled]="follow_latest"
                    [loading]="loading_commits"
                    [ngModel]="base_commit"
                    [ngModelOptions]="{ standalone: true }"
                    (ngModelChange)="
                        form.controls.commit_hash.setValue($event.id)
                    "
                ></item-search-field>
            </div>
            <div class="field" *ngIf="can_change_commit">
                <mat-checkbox
                    class="-mt-4"
                    [ngModel]="follow_latest"
                    [ngModelOptions]="{ standalone: true }"
                    (ngModelChange)="setFollow($event)"
                >
                    Follow latest commit
                </mat-checkbox>
            </div>
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="repository-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@nameLabel"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="repository-name"
                        placeholder="Repository Name"
                        i18n-placeholder="@@repositoryNamePlaceholder"
                        formControlName="name"
                        required
                    />
                    <mat-error i18n="@@repoNameError"
                        >Repository name is required</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.folder_name">
                <label
                    for="folder-name"
                    [class.error]="
                        form.controls.folder_name.invalid &&
                        form.controls.folder_name.touched
                    "
                    i18n="@@folderNameLabel"
                >
                    Folder Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="folder-name"
                        placeholder="Folder Name"
                        i18n-placeholder="@@folderNamePlaceholder"
                        formControlName="folder_name"
                        required
                    />
                    <mat-error i18n="@@folderNameError">
                        A valid folder name is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description" i18n="@@descriptionLabel">
                    Description:
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        i18n-placeholder="@@descriptionPlaceholder"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.uri">
                <label
                    for="uri"
                    [class.error]="
                        form.controls.uri.invalid && form.controls.uri.touched
                    "
                    i18n="@@repoUriLabel"
                >
                    Repository URI<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="uri"
                        placeholder="Repository URI"
                        i18n-placeholder="@@repoUriPlaceholder"
                        formControlName="uri"
                        required
                    />
                    <mat-error i18n="@@repoUriError">URI is required</mat-error>
                </mat-form-field>
            </div>
            <div
                class="field"
                *ngIf="
                    !is_edit &&
                    form.controls.repo_type &&
                    form.controls.folder_name
                "
            >
                <label for="type" i18n="@@repoTypeLabel">
                    Repository Type:
                </label>
                <mat-form-field appearance="outline">
                    <mat-select name="type" formControlName="repo_type">
                        <mat-option
                            *ngFor="let type of repo_types"
                            [value]="type.id"
                            i18n="@@repoType"
                        >
                            { type.name, select, Driver { Driver } Interface {
                            Interface } other { Other } }
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.username">
                <label for="repo-u" i18n="@@usernameLabel">
                    Repository Username:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="repo-u"
                        autocomplete="off"
                        placeholder="Username"
                        i18n-placeholder="@@usernamePlaceholder"
                        formControlName="username"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.password">
                <label for="repo-p" i18n="@@passwordLabel">
                    Repository Password:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="repo-p"
                        autocomplete="new-password"
                        [type]="show_password ? 'text' : 'password'"
                        placeholder="Password"
                        i18n-placeholder="@@passwordPlaceholder"
                        formControlName="password"
                    />
                    <app-icon
                        matSuffix
                        (click)="show_password = !show_password"
                    >
                        visibility
                    </app-icon>
                </mat-form-field>
            </div>
        </form>
    `,
    styles: [``],
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
    public unable_to_load_releases = false;
    public date_pipe = new DateFromPipe();

    /** Whether item is being edited */
    public get is_edit(): boolean {
        return (
            this.form && this.form.value.id
        );
    }

    public get is_interface() {
        return (
            !this.unable_to_load_releases &&
            this.form?.value?.repo_type === PlaceRepositoryType.Interface
        );
    }

    /** Whether commit of the repo is allowed to be changed */
    public get can_change_commit(): boolean {
        const value = this.form.value;
        return !!(
            'commit_hash' in value &&
            'repo_type' in value &&
            (value.repo_types !== PlaceRepositoryType.Interface ||
                this.unable_to_load_releases)
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form) {
            this.loadBranches().catch((_) => {
                this.unable_to_load_releases = true;
                if (
                    this.form.value.repo_types === PlaceRepositoryType.Interface
                ) {
                    this.loadBranches(true);
                }
            });
        }
    }

    public async loadCommits() {
        console.log('Load Commits')
        if (!this.is_edit || !this.can_change_commit) return;
        const id = this.form.controls.id.value;
        const commits: any[] = await listRepositoryCommits(id).toPromise();
        const commit_list = (commits || []).map((commit) => {
            const date = new Date(commit.date || Date.now()).valueOf();
            return {
                id: commit.commit,
                name: commit.subject,
                extra: isAfter(date, subMinutes(date, 1))
                    ? this.date_pipe.transform(date)
                    : format(date, 'dd MMM YYYY'),
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

    public async loadBranches(force_branches = false) {
        if (!this.is_edit || !this.form.controls.branch) return;
        const { id, repo_type } = this.form.value;
        const list_fn =
            repo_type === PlaceRepositoryType.Interface && !force_branches
                ? listRepositoryReleases
                : listRepositoryBranches;
        this.branch_list = (await list_fn(id).toPromise()) || [];
        if (!force_branches && this.branch_list.length <= 0) {
            this.unable_to_load_releases = true;
            return this.loadBranches(true);
        }
        this.loadCommits();
    }
}
