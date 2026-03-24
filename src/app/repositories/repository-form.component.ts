import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import {
    FormsModule,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    EncryptionLevel,
    PlaceRepository,
    PlaceRepositoryType,
    PlaceSettings,
    addRepository,
    addSettings,
    cleanObject,
    listRemoteRepositoryBranches,
    listRemoteRepositoryCommits,
    listRemoteRepositoryDefaultBranch,
    listRepositoryBranches,
    listRepositoryCommits,
    listRepositoryDefaultBranch,
    updateRepository,
} from '@placeos/ts-client';
import { Subject, combineLatest, merge, of, timer } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { isValidUrl } from '../common/validation';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateRepositoryFormFields } from './repositories.utilities';

@Component({
    selector: 'repository-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="saving"
            (save)="submit()"
        >
            @if (form) {
                <form repository class="flex flex-col" [formGroup]="form">
                    @if (form.controls.name) {
                        <div class="field">
                            <label
                                for="repository-name"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="repository-name"
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
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
                            !is_editing() &&
                            form.controls.repo_type &&
                            form.controls.folder_name
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
                        @if (form.controls.folder_name) {
                            <div class="field">
                                <label
                                    for="folder-name"
                                    [class.error]="
                                        form.controls.folder_name.invalid &&
                                        form.controls.folder_name.touched
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
                    @if (form.controls.uri && !hide_uri) {
                        <div class="field">
                            <label
                                for="uri"
                                [class.error]="
                                    form.controls.uri.invalid &&
                                    form.controls.uri.touched
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
                                    (blur)="credentials_blur$.next()"
                                    required
                                />
                                <mat-error>{{
                                    'REPOS.URI_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.controls.username) {
                            <div class="field">
                                <label for="repo-u"
                                    >{{ 'REPOS.USERNAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="repo-u"
                                        autocomplete="off"
                                        [placeholder]="
                                            'REPOS.USERNAME' | translate
                                        "
                                        formControlName="username"
                                        (blur)="credentials_blur$.next()"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.password) {
                            <div class="field">
                                <label for="repo-p">
                                    {{ 'REPOS.PASSWORD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="repo-pwd"
                                        autocomplete="new-password"
                                        [type]="
                                            show_password ? 'text' : 'password'
                                        "
                                        [placeholder]="
                                            'COMMON.PASSWORD' | translate
                                        "
                                        formControlName="password"
                                        (blur)="credentials_blur$.next()"
                                    />
                                    <button
                                        matSuffix
                                        (click)="show_password = !show_password"
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.branch) {
                        <div class="field">
                            <label
                                for="repository-name"
                                [class.error]="
                                    form.controls.branch.invalid &&
                                    form.controls.branch.touched
                                "
                            >
                                {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    name="type"
                                    formControlName="branch"
                                    [placeholder]="'Select Branch'"
                                    [disabled]="
                                        loading_branches() ||
                                        !(branch_list | async)?.length
                                    "
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
                                @if (loading_branches()) {
                                    <div class="suffix ml-2" matSuffix>
                                        <mat-spinner
                                            diameter="24"
                                        ></mat-spinner>
                                    </div>
                                }
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
                                    [disabled]="
                                        loading_commits() ||
                                        !(commit_list | async)?.length
                                    "
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    base_commit?.subject ||
                                                        'Latest commit'
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{
                                                    form.value.commit_hash ||
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
                                            <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
                                            <div
                                                class="flex w-[calc(100%-2.20rem)] flex-1 items-center space-x-2"
                                                [class.w-full!]="
                                                    form.value.commit_hash ===
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
                                                        class="text-base-content truncate font-mono text-[0.625rem] opacity-30"
                                                    >
                                                        {{
                                                            commit.date
                                                                | date: 'medium'
                                                        }}
                                                    </div>
                                                </div>
                                                @if (commit.author) {
                                                    <code
                                                        class="bg-base-200 rounded-sm p-1 text-xs"
                                                        >{{
                                                            commit.author
                                                        }}</code
                                                    >
                                                }
                                                <code
                                                    class="bg-base-200 rounded-sm p-1 text-xs"
                                                    >{{
                                                        commit.hash
                                                            | slice: 0 : 8
                                                    }}</code
                                                >
                                            </div>
                                        </mat-option>
                                    }
                                </mat-select>
                                @if (loading_commits()) {
                                    <div class="suffix ml-2" matSuffix>
                                        <mat-spinner
                                            diameter="24"
                                        ></mat-spinner>
                                    </div>
                                }
                            </mat-form-field>
                        </div>
                        <div class="field">
                            <settings-toggle
                                name="Follow latest commit"
                                class="mb-4"
                                [ngModel]="follow_latest"
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="setFollow($event)"
                            />
                        </div>
                    }
                    @if (form.controls.description) {
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
                    @if (form.controls.root_path) {
                        <div class="field">
                            <label for="root-path">
                                {{ 'REPOS.ROOT_PATH' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="root-path"
                                    [placeholder]="
                                        'REPOS.ROOT_PATH' | translate
                                    "
                                    formControlName="root_path"
                                />
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        CommonModule,
        IconComponent,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
    ],
})
export class RepositoryFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<RepositoryFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceRepository; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private _hotkey = inject(HotkeysService);
    private readonly _name = 'REPOS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public form: UntypedFormGroup;
    public saving: string;
    public heading: string;

    /** List of commits available for repository */
    public commit_list = of([] as Record<string, string>[]);
    /** List of branches available for repository */
    public branch_list = of([] as string[]);
    /** Whether repository's branches are being loaded */
    public readonly loading_branches = signal(false);
    /** Whether repository's commits are being loaded */
    public readonly loading_commits = signal(false);
    /** Currently selected commit for the repository */
    public base_commit: Identity | Record<string, string>;
    /** Whether to follow the latest branch commits(Auto-update) */
    public follow_latest: boolean;
    /** List of available types of repositories */
    public repo_types: Identity[] = [];
    public show_password = false;
    public date_pipe = new DateFromPipe();
    public readonly is_editing = signal(false);
    /** Emits when URI, username, or password fields lose focus */
    public credentials_blur$ = new Subject<void>();

    public get hide_uri() {
        return !this.is_interface && this.form.value.id;
    }

    public get is_interface() {
        return this.form?.value?.repo_type === PlaceRepositoryType.Interface;
    }

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`${this._name}.${edit ? 'EDIT' : 'NEW'}`);
        this.form = generateRepositoryFormFields(item);
        this.repo_types = [
            { id: PlaceRepositoryType.Driver, name: i18n('REPOS.TYPE_DRIVER') },
            {
                id: PlaceRepositoryType.Interface,
                name: i18n('REPOS.TYPE_INTERFACE'),
            },
        ];
        this.follow_latest = this.form?.value.commit_hash === 'HEAD';
        this.is_editing.set(!!this.form?.value.id);
        this._setupBranchAndCommitStreams();
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public submit(): void {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item = this._data.item;
        this.saving = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item: PlaceRepository = item.id
            ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
            : { ...item_json, ...this.form.value };
        (form_item.id
            ? updateRepository(
                  form_item.id,
                  form_item as unknown as PlaceRepository,
              )
            : addRepository(form_item as unknown as PlaceRepository)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                if (!this.form.value.id && this.form.controls.settings) {
                    this.newSettings(
                        _item as any,
                        this.form.controls.settings.value,
                    ).then(() => this._dialog_ref.close());
                } else {
                    this._dialog_ref.close();
                }
            },
            async (err) => {
                this.saving = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text?.()) || err.message || err,
                        ),
                    }),
                );
            },
        );
    }

    public setFollow(value: boolean) {
        this.follow_latest = value;
        if (value) {
            this.form.controls.commit_hash.setValue('HEAD');
        } else if (this.form.controls.commit_hash.value === 'HEAD') {
            this.form.controls.commit_hash.setValue(this.commit_list[1].id);
        }
    }

    private _setupBranchAndCommitStreams() {
        this.form.get('branch').disable();
        // Auto-trigger 1s after URI becomes a valid URL
        const uri_valid$ = this.form.get('uri').valueChanges.pipe(
            debounceTime(1000),
            filter((uri: string) => isValidUrl(uri) && uri.startsWith('http')),
            distinctUntilChanged(),
        );
        // Trigger branch fetch on blur or valid URL after 1s
        const credentials_trigger$ = merge(
            timer(300),
            this.credentials_blur$,
            uri_valid$,
        );
        this.branch_list = credentials_trigger$.pipe(
            debounceTime(300),
            tap(() => this.loading_branches.set(true)),
            switchMap(() => {
                const { id, uri, username, password } = this.form.value;
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
                ).pipe(catchError(() => of([])));
            }),
            tap((_) => {
                this.loading_branches.set(false);
                _.length
                    ? this.form.get('branch').enable()
                    : this.form.get('branch').disable();
            }),
            shareReplay(1),
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
            shareReplay(1),
        );
        this.subscription(
            'default_branch',
            combineLatest([this.branch_list, default_branch]).subscribe(
                ([list, branch]) => {
                    return !this.form.value.branch ||
                        !list.includes(this.form.value.branch)
                        ? this.form.patchValue({ branch })
                        : '';
                },
            ),
        );
        this.commit_list = merge(
            timer(300),
            this.credentials_blur$,
            uri_valid$,
            this.form.get('branch').valueChanges,
        ).pipe(
            debounceTime(300),
            tap(() => this.loading_commits.set(true)),
            switchMap(() => {
                const { id, uri, branch, username, password } = this.form.value;
                return (
                    id
                        ? listRepositoryCommits(id, { branch })
                        : isValidUrl(uri) && uri.startsWith('http') && branch
                          ? listRemoteRepositoryCommits({
                                repository_url: uri,
                                username,
                                password,
                                branch,
                            })
                          : of([])
                ).pipe(catchError(() => of([])));
            }),
            map((l) => [
                { hash: 'HEAD', subject: 'Latest commit on the branch' },
                ...l,
            ]),
            tap((l) => {
                this.loading_commits.set(false);
                const commit =
                    l.find((c) => c.hash === this.form.value.commit_hash) ||
                    l[0];
                this.base_commit = commit;
            }),
            shareReplay(1),
        );
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings)
            .toPromise()
            .catch((err) => {
                this.saving = null;
                notifyError(
                    `Error saving settings for ${
                        item.name || item.id
                    }. Error: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
            });
    }
}
