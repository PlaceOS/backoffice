import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    input,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    GitCommitDetails,
    PlaceRepositoryType,
    listRemoteRepositoryBranches,
    listRemoteRepositoryCommits,
    listRemoteRepositoryDefaultBranch,
    listRepositoryBranches,
    listRepositoryCommits,
    listRepositoryDefaultBranch,
} from '@placeos/ts-client';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { combineLatest, merge, of, timer } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { AsyncHandler } from '../../common/async-handler.class';
import { i18n } from '../../common/locale.service';
import { isValidUrl } from '../../common/validation';
import { IconComponent } from '../icon.component';
import { DateFromPipe } from '../pipes/date-from.pipe';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'repository-form',
    template: `
        @if (form()) {
            <form repository class="flex flex-col" [formGroup]="form()">
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="repository-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="repository-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            <mat-error>{{
                                'REPOS.NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (
                        !is_edit &&
                        form().controls.repo_type &&
                        form().controls.folder_name
                    ) {
                        <div class="field">
                            <label for="type">
                                {{ 'REPOS.TYPE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="repo_type"
                                >
                                    @for (type of repo_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.folder_name) {
                        <div class="field">
                            <label
                                for="folder-name"
                                [class.error]="
                                    form().controls.folder_name.invalid &&
                                    form().controls.folder_name.touched
                                "
                            >
                                {{ 'REPOS.FOLDER_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="folder-name"
                                    [placeholder]="
                                        'REPOS.FOLDER_NAME' | translate
                                    "
                                    formControlName="folder_name"
                                    required
                                />
                                <mat-error>{{
                                    'REPOS.FOLDER_NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.uri && !hide_uri) {
                    <div class="field">
                        <label
                            for="uri"
                            [class.error]="
                                form().controls.uri.invalid &&
                                form().controls.uri.touched
                            "
                        >
                            {{ 'REPOS.URI' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="uri"
                                [placeholder]="'REPOS.URI' | translate"
                                formControlName="uri"
                                required
                            />
                            <mat-error>{{
                                'REPOS.URI_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.username) {
                        <div class="field">
                            <label for="repo-u"
                                >{{ 'REPOS.USERNAME' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="repo-u"
                                    autocomplete="off"
                                    [placeholder]="'REPOS.USERNAME' | translate"
                                    formControlName="username"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.password) {
                        <div class="field">
                            <label for="repo-p">
                                {{ 'REPOS.PASSWORD' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="repo-pwd"
                                    autocomplete="new-password"
                                    [type]="show_password ? 'text' : 'password'"
                                    [placeholder]="
                                        'COMMON.PASSWORD' | translate
                                    "
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
                    }
                </div>
                @if (form().controls.branch) {
                    <div class="field">
                        <label
                            for="repository-name"
                            [class.error]="
                                form().controls.branch.invalid &&
                                form().controls.branch.touched
                            "
                        >
                            {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="type"
                                formControlName="branch"
                                [placeholder]="'Select Branch'"
                                [disabled]="!(branch_list | async)?.length"
                            >
                                @for (
                                    branch of branch_list | async;
                                    track branch
                                ) {
                                    <mat-option [value]="branch">
                                        {{ branch }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'REPOS.BRANCH_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                }
                @if (is_interface) {
                    <div class="field commit">
                        <label for="commit">
                            {{ 'REPOS.COMMIT' | translate }}</label
                        >
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="commit_hash"
                                placeholder="Select commit"
                                [disabled]="!(commit_list | async)?.length"
                            >
                                <mat-select-trigger>
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-1 truncate">
                                            {{
                                                base_commit?.subject ||
                                                    'Latest commit'
                                            }}
                                        </div>
                                        <div
                                            class="!mr-4 rounded bg-base-200 px-1.5 font-mono text-[0.625rem]"
                                        >
                                            {{
                                                form().value.commit_hash ||
                                                    'HEAD' | slice: 0 : 8
                                            }}
                                        </div>
                                    </div>
                                </mat-select-trigger>
                                @for (
                                    commit of commit_list | async;
                                    track commit
                                ) {
                                    <mat-option [value]="commit.hash">
                                        <div
                                            class="flex w-[calc(100%-2.20rem)] flex-1 items-center space-x-2"
                                            [class.!w-full]="
                                                form().value.commit_hash ===
                                                commit.hash
                                            "
                                            (click)="base_commit = commit"
                                        >
                                            <div
                                                class="flex w-1/2 flex-1 flex-col truncate leading-tight"
                                            >
                                                <div class="truncate">
                                                    {{ commit.subject }}
                                                </div>
                                                <div
                                                    class="truncate font-mono text-[0.625rem] text-base-content opacity-30"
                                                >
                                                    {{
                                                        commit.date
                                                            | date: 'medium'
                                                    }}
                                                </div>
                                            </div>
                                            @if (commit.author) {
                                                <code
                                                    class="rounded bg-base-200 p-1 text-xs"
                                                    >{{ commit.author }}</code
                                                >
                                            }
                                            <code
                                                class="rounded bg-base-200 p-1 text-xs"
                                                >{{
                                                    commit.hash | slice: 0 : 8
                                                }}</code
                                            >
                                        </div>
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <settings-form-field
                            name="Follow latest commit"
                            [ngModel]="follow_latest"
                            [ngModelOptions]="{ standalone: true }"
                            (ngModelChange)="setFollow($event)"
                        ></settings-form-field>
                    </div>
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.root_path) {
                    <div class="field">
                        <label for="root-path">
                            {{ 'REPOS.ROOT_PATH' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="root-path"
                                [placeholder]="'REPOS.ROOT_PATH' | translate"
                                formControlName="root_path"
                            />
                        </mat-form-field>
                    </div>
                }
            </form>
        }
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        CommonModule,
        IconComponent,
    ],
})
export class RepositoryFormComponent
    extends AsyncHandler
    implements OnInit, OnChanges
{
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
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
    public repo_types: Identity[] = [];
    public show_password = false;
    public date_pipe = new DateFromPipe();

    public get hide_uri() {
        return !this.is_interface && this.form().value.id;
    }

    public get is_interface() {
        return this.form()?.value?.repo_type === PlaceRepositoryType.Interface;
    }

    public ngOnInit() {
        this.repo_types = [
            { id: PlaceRepositoryType.Driver, name: i18n('REPOS.TYPE_DRIVER') },
            {
                id: PlaceRepositoryType.Interface,
                name: i18n('REPOS.TYPE_INTERFACE'),
            },
        ];
    }

    public ngOnChanges(changes: SimpleChanges) {
        const form = this.form();
        if (changes.form && form) {
            form.get('branch').disable();
            this.branch_list = merge(
                timer(300),
                form.get('uri').valueChanges,
                form.get('username').valueChanges,
                form.get('password').valueChanges,
            ).pipe(
                debounceTime(300),
                switchMap(() => {
                    const { id, uri, username, password } = this.form().value;
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
                        ? this.form().get('branch').enable()
                        : this.form().get('branch').disable(),
                ),
                shareReplay(1),
            );
            const default_branch = this.branch_list.pipe(
                debounceTime(300),
                switchMap(() => {
                    const { id, uri, username, password } = this.form().value;
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
                shareReplay(1),
            );
            this.subscription(
                'default_branch',
                combineLatest([this.branch_list, default_branch]).subscribe(
                    ([list, branch]) => {
                        const formValue = this.form();
                        return !formValue.value.branch ||
                            !list.includes(formValue.value.branch)
                            ? formValue.patchValue({ branch })
                            : '';
                    },
                ),
            );
            this.commit_list = merge(
                timer(300),
                form.get('uri').valueChanges,
                form.get('branch').valueChanges,
                form.get('username').valueChanges,
                form.get('password').valueChanges,
            ).pipe(
                debounceTime(300),
                switchMap(() => {
                    const { id, uri, branch, username, password } =
                        this.form().value;
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
                tap((l) => {
                    const commit =
                        l.find(
                            (c) => c.hash === this.form().value.commit_hash,
                        ) || l[0];
                    this.base_commit = commit;
                }),
                shareReplay(1),
            );
        }
    }

    public setFollow(value: boolean) {
        this.follow_latest = value;
        const form = this.form();
        if (value) {
            this.form().controls.commit_hash.setValue('HEAD');
        } else if (!value && form.controls.commit_hash.value === 'HEAD') {
            form.controls.commit_hash.setValue(this.commit_list[1].id);
        }
    }
}
