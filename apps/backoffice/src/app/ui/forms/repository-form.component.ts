import { Component, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import {
    PlaceRepositoryType,
    listRepositoryBranches,
    listRepositoryCommits,
    GitCommitDetails,
} from '@placeos/ts-client';
import {
    listRemoteRepositoryBranches,
    listRemoteRepositoryCommits,
    listRemoteRepositoryDefaultBranch,
    listRepositoryDefaultBranch,
    listRepositoryReleases,
} from '@placeos/ts-client/dist/esm/repositories/functions';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { format, isAfter, subMinutes } from 'date-fns';
import { combineLatest, merge, of, timer } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilKeyChanged,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { BaseClass } from '../../common/base.class';
import { isValidUrl, validateURL } from '../../common/validation';
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
            <div class="field" *ngIf="form.controls.uri && !hide_uri">
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
                    <mat-select
                        name="type"
                        formControlName="branch"
                        [placeholder]="
                            'Select ' + (is_interface ? 'Release' : 'Branch')
                        "
                    >
                        <mat-option
                            *ngFor="let branch of branch_list | async"
                            [value]="branch"
                        >
                            {{ branch }}
                        </mat-option>
                    </mat-select>
                    <mat-error i18n="@@repoBranchError">
                        Working {{ is_interface ? 'Release' : 'Branch' }} name
                        is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="field commit">
                <label for="commit" i18n="@@repoCommitLabel">
                    Repository Commit:
                </label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="type"
                        formControlName="commit_hash"
                        placeholder="Select commit"
                    >
                        <mat-option
                            *ngFor="let commit of commit_list | async"
                            [value]="commit.hash"
                        >
                            <div class="flex items-center space-x-2">
                                <div class="flex-1 truncate w-1/2">
                                    {{ commit.subject }}
                                </div>
                                <div class="hidden">|</div>
                                <code class="text-xs">{{
                                    commit.hash | slice: 0:8
                                }}</code>
                                <code class="text-xs" *ngIf="commit.author">{{
                                    commit.author
                                }}</code>
                            </div>
                        </mat-option>
                    </mat-select>
                    <mat-error i18n="@@repoBranchError">
                        Commit is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="can_change_commit && is_interface">
                <mat-checkbox
                    class="-mt-4"
                    [ngModel]="follow_latest"
                    [ngModelOptions]="{ standalone: true }"
                    (ngModelChange)="setFollow($event)"
                >
                    Follow latest commit
                </mat-checkbox>
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
        </form>
    `,
    styles: [``],
})
export class RepositoryFormComponent extends BaseClass {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of commits available for repository */
    public commit_list = of([] as GitCommitDetails[]);
    /** List of branches available for repository */
    public branch_list = of([] as string[]);
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
    public unable_to_load_releases = true;
    public date_pipe = new DateFromPipe();

    public get hide_uri() {
        return !this.is_interface && this.form.value.id;
    }

    public get is_interface() {
        return this.form?.value?.repo_type === PlaceRepositoryType.Interface;
    }

    /** Whether commit of the repo is allowed to be changed */
    public get can_change_commit(): boolean {
        const value = this.form.value;
        return !!(
            'repo_type' in value &&
            (value.repo_types !== PlaceRepositoryType.Interface ||
                this.unable_to_load_releases)
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form) {
            this.form.get('branch').disable();
            this.branch_list = merge(
                timer(300),
                this.form.get('uri').valueChanges,
                this.form.get('username').valueChanges,
                this.form.get('password').valueChanges
            ).pipe(
                debounceTime(300),
                switchMap(() => {
                    const { id, uri, username, password } = this.form.value;
                    console.log('Branches:', id, uri);
                    return (
                        id
                            ? listRepositoryBranches(id)
                            : isValidUrl(uri) && uri.startsWith('http')
                            ? listRemoteRepositoryBranches({
                                  repository_url: uri,
                                  username,
                                  password,
                              })
                            : of([])
                    ).pipe(catchError((_) => of([])));
                }),
                tap((_) =>
                    _.length
                        ? this.form.get('branch').enable()
                        : this.form.get('branch').disable()
                ),
                shareReplay(1)
            );
            const default_branch = this.branch_list.pipe(
                debounceTime(300),
                switchMap(() => {
                    const { id, uri, username, password } = this.form.value;
                    return (
                        id
                            ? listRepositoryDefaultBranch(id)
                            : isValidUrl(uri) && uri.startsWith('http')
                            ? listRemoteRepositoryDefaultBranch({
                                  repository_url: uri,
                                  username,
                                  password,
                              })
                            : of('')
                    ).pipe(catchError(() => of('')));
                }),
                shareReplay(1)
            );
            this.subscription(
                'default_branch',
                combineLatest([this.branch_list, default_branch]).subscribe(
                    ([list, branch]) =>
                        !this.form.value.branch ||
                        !list.includes(this.form.value.branch)
                            ? this.form.patchValue({ branch })
                            : ''
                )
            );
            this.commit_list = merge(
                timer(300),
                this.form.get('uri').valueChanges,
                this.form.get('branch').valueChanges,
                this.form.get('username').valueChanges,
                this.form.get('password').valueChanges
            ).pipe(
                debounceTime(300),
                switchMap(() => {
                    const { id, uri, branch, username, password } =
                        this.form.value;
                    return (
                        id
                            ? listRepositoryCommits(id, { branch })
                            : isValidUrl(uri) &&
                              uri.startsWith('http') &&
                              branch
                            ? listRemoteRepositoryCommits({
                                  repository_url: uri,
                                  username,
                                  password,
                                  branch,
                              })
                            : of([])
                    ).pipe(catchError((_) => of([])));
                }),
                map((l) => [
                    { hash: 'HEAD', subject: 'Latest commit on the branch' },
                    ...l,
                ]),
                shareReplay(1)
            );
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
}
