import {
    Component,
    EventEmitter,
    Injector,
    OnInit,
    Output,
    WritableSignal,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField, disabled, form, submit } from '@angular/forms/signals';

import { DatePipe, SlicePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    EncryptionLevel,
    GitCommitDetails,
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
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidSignalFields } from '../common/forms';
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
import {
    applyRepositoryFormSchema,
    generateRepositoryFormModel,
} from './repositories.utilities';

interface RepositoryCommit extends Partial<GitCommitDetails> {
    hash: string;
    subject: string;
}

@Component({
    selector: 'repository-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading()"
            [loading]="saving()"
            (save)="submit()"
        >
            @if (form) {
                <form repository class="flex flex-col">
                    @if (form.name) {
                        <div class="field">
                            <label
                                for="repository-name"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'COMMON.FIELD_NAME' | translate
                                }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    [formField]="form.name"
                                />
                                <mat-error>{{
                                    'REPOS.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (
                            !is_editing() && form.repo_type && form.folder_name
                        ) {
                            <div class="field">
                                <label for="type">
                                    {{ 'REPOS.TYPE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select [formField]="form.repo_type">
                                        @for (
                                            type of repo_types();
                                            track type
                                        ) {
                                            <mat-option [value]="type.id">
                                                {{ type.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @if (!is_editing() && form.folder_name) {
                            <div class="field">
                                <label
                                    for="folder-name"
                                    [class.error]="
                                        form.folder_name().invalid() &&
                                        form.folder_name().touched()
                                    "
                                >
                                    {{ 'REPOS.FOLDER_NAME' | translate
                                    }}<span>*</span>
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'REPOS.FOLDER_NAME' | translate
                                        "
                                        [formField]="form.folder_name"
                                    />
                                    <mat-error>{{
                                        'REPOS.FOLDER_NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.uri && !hide_uri) {
                        <div class="field">
                            <label
                                for="uri"
                                [class.error]="
                                    form.uri().invalid() && form.uri().touched()
                                "
                            >
                                {{ 'REPOS.URI' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'REPOS.URI' | translate"
                                    [formField]="form.uri"
                                    (blur)="markCredentialsBlur()"
                                />
                                <mat-error>{{
                                    'REPOS.URI_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.username) {
                            <div class="field">
                                <label for="repo-u"
                                    >{{ 'REPOS.USERNAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        autocomplete="off"
                                        [placeholder]="
                                            'REPOS.USERNAME' | translate
                                        "
                                        [formField]="form.username"
                                        (blur)="markCredentialsBlur()"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.password) {
                            <div class="field">
                                <label for="repo-p">
                                    {{ 'REPOS.PASSWORD' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        autocomplete="new-password"
                                        [type]="
                                            show_password()
                                                ? 'text'
                                                : 'password'
                                        "
                                        [placeholder]="
                                            'COMMON.PASSWORD' | translate
                                        "
                                        [formField]="form.password"
                                        (blur)="markCredentialsBlur()"
                                    />
                                    <button
                                        type="button"
                                        matSuffix
                                        (click)="togglePassword()"
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.branch) {
                        <div class="field">
                            <label
                                for="repository-name"
                                [class.error]="
                                    form.branch().invalid() &&
                                    form.branch().touched()
                                "
                            >
                                {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form.branch"
                                    [placeholder]="'Select Branch'"
                                >
                                    @for (
                                        branch of branch_list();
                                        track branch
                                    ) {
                                        <mat-option [value]="branch">
                                            {{ branch }}
                                        </mat-option>
                                    }
                                </mat-select>
                                @if (loading_branches()) {
                                    <div class="suffix ml-2" matSuffix>
                                        <mat-spinner diameter="24" />
                                    </div>
                                }
                                <mat-error>{{
                                    'REPOS.BRANCH_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (is_interface()) {
                        <div class="field commit">
                            <label for="commit">
                                {{ 'REPOS.COMMIT' | translate }}</label
                            >
                            <mat-form-field appearance="outline">
                                <mat-select
                                    [formField]="form.commit_hash"
                                    placeholder="Select commit"
                                >
                                    <mat-select-trigger>
                                        <div
                                            class="flex items-center space-x-4"
                                        >
                                            <div class="flex-1 truncate">
                                                {{
                                                    base_commit()?.subject ||
                                                        'Latest commit'
                                                }}
                                            </div>
                                            <div
                                                class="bg-base-200 mr-4! rounded-sm px-1.5 font-mono text-[0.625rem]"
                                            >
                                                {{
                                                    formModel().commit_hash ||
                                                        'HEAD' | slice: 0 : 8
                                                }}
                                            </div>
                                        </div>
                                    </mat-select-trigger>
                                    @for (
                                        commit of commit_list();
                                        track commit
                                    ) {
                                        <mat-option [value]="commit.hash">
                                            <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
                                            <div
                                                class="flex w-[calc(100%-2.20rem)] flex-1 items-center space-x-2"
                                                [class.w-full!]="
                                                    formModel().commit_hash ===
                                                    commit.hash
                                                "
                                                (click)="
                                                    base_commit.set(commit)
                                                "
                                            >
                                                <div
                                                    class="flex w-px flex-1 flex-col truncate leading-tight"
                                                >
                                                    <div
                                                        class="truncate text-sm"
                                                        [matTooltip]="
                                                            commit.subject
                                                        "
                                                    >
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
                                        <mat-spinner diameter="24" />
                                    </div>
                                }
                            </mat-form-field>
                        </div>
                        <div class="field">
                            <settings-toggle
                                label="Follow latest commit"
                                class="mb-4"
                                [ngModel]="follow_latest()"
                                [ngModelOptions]="{ standalone: true }"
                                (ngModelChange)="setFollow($event)"
                            />
                        </div>
                    }
                    @if (form.description) {
                        <div class="field">
                            <label for="description">
                                {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.root_path) {
                        <div class="field">
                            <label for="root-path">
                                {{ 'REPOS.ROOT_PATH' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'REPOS.ROOT_PATH' | translate
                                    "
                                    [formField]="form.root_path"
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
        FormField,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        MatTooltipModule,
        IconComponent,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
        DatePipe,
        SlicePipe,
    ],
})
export class RepositoryFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<RepositoryFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceRepository; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private _hotkey = inject(HotkeysService);
    private _injector = inject(Injector);
    private readonly _name = 'REPOS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateRepositoryFormModel(this._data.item),
    );
    public readonly saving = signal<string | null>(null);
    public readonly heading = signal('');

    /** List of commits available for repository */
    public commit_list = signal<RepositoryCommit[]>([]);
    /** List of branches available for repository */
    public branch_list = signal<string[]>([]);
    /** Whether repository's branches are being loaded */
    public readonly loading_branches = signal(false);
    /** Whether repository's commits are being loaded */
    public readonly loading_commits = signal(false);
    /** Currently selected commit for the repository */
    public readonly base_commit = signal<RepositoryCommit | null>(null);
    /** Whether to follow the latest branch commits(Auto-update) */
    public readonly follow_latest = signal(false);
    /** List of available types of repositories */
    public readonly repo_types: WritableSignal<Identity[]> = signal([]);
    public readonly show_password = signal(false);
    public date_pipe = new DateFromPipe();
    public readonly is_editing = signal(false);
    /** Emits when URI, username, or password fields lose focus */
    public readonly credentials_blur = signal(0);

    public readonly form = form(this.formModel, (path) => {
        applyRepositoryFormSchema(path);
        disabled(path.branch, () => {
            return this.loading_branches() || !this.branch_list().length;
        });
        disabled(path.commit_hash, () => {
            return (
                this.loading_commits() ||
                !this.commit_list().length ||
                !this.formModel().branch
            );
        });
    });

    public readonly is_interface = computed(
        () => this.formModel().repo_type === PlaceRepositoryType.Interface,
    );

    public get hide_uri() {
        return !this.is_interface() && this.formModel().id;
    }

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading.set(i18n(`${this._name}.${edit ? 'EDIT' : 'NEW'}`));
        this.repo_types.set([
            { id: PlaceRepositoryType.Driver, name: i18n('REPOS.TYPE_DRIVER') },
            {
                id: PlaceRepositoryType.Interface,
                name: i18n('REPOS.TYPE_INTERFACE'),
            },
        ]);
        this.follow_latest.set(this.formModel().commit_hash === 'HEAD');
        this.is_editing.set(!!this.formModel().id);
        this._setupBranchAndCommitStreams();
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item = this._data.item;
            this.saving.set(i18n(`${this._name}.SAVING`));
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            const form_value = { ...this.formModel() };
            if (form_value.root_path) {
                form_value.root_path = form_value.root_path.replace(
                    /^\/+|\/+$/g,
                    '',
                );
            }
            if (item.id) {
                delete form_value.folder_name;
            }
            const form_item = (
                item.id
                    ? cleanObject({ ...item_json, ...form_value }, [undefined])
                    : { ...item_json, ...form_value }
            ) as PlaceRepository;
            try {
                const _item = await (form_item.id
                    ? updateRepository(
                          form_item.id,
                          form_item as unknown as PlaceRepository,
                      )
                    : addRepository(form_item as unknown as PlaceRepository));
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            } catch (err) {
                this.saving.set(null);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this._name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await (err as Response).text?.()) ||
                                (err as Error).message ||
                                err,
                        ),
                    }),
                );
            }
        });
        if (this.form().invalid()) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form).join(', '),
                }),
            );
        }
    }

    public setFollow(value: boolean) {
        this.follow_latest.set(value);
        if (value) {
            this.formModel.update((model) => ({
                ...model,
                commit_hash: 'HEAD',
            }));
        } else if (this.formModel().commit_hash === 'HEAD') {
            this.formModel.update((model) => ({
                ...model,
                commit_hash: this.commit_list()[1]?.hash || '',
            }));
        }
    }

    public markCredentialsBlur() {
        this.credentials_blur.update((value) => value + 1);
    }

    public togglePassword() {
        this.show_password.update((value) => !value);
    }

    private _setupBranchAndCommitStreams() {
        effect(
            () => {
                void this.formModel().uri;
                void this.credentials_blur();
                this.timeout(
                    'repository_branches',
                    () => this._loadBranches(),
                    300,
                );
            },
            { injector: this._injector },
        );
        effect(
            () => {
                void this.formModel().uri;
                void this.formModel().branch;
                void this.credentials_blur();
                this.timeout(
                    'repository_commits',
                    () => this._loadCommits(),
                    300,
                );
            },
            { injector: this._injector },
        );
    }

    private async _loadBranches() {
        const { id, uri, username, password } = this.formModel();
        if (!id && (!isValidUrl(uri) || !uri.startsWith('http'))) {
            this.branch_list.set([]);
            return;
        }
        this.loading_branches.set(true);
        try {
            const list = await (
                id
                    ? listRepositoryBranches(id)
                    : listRemoteRepositoryBranches({
                          repository_url: uri,
                          username,
                          password,
                      })
            ).catch(() => [] as string[]);
            this.branch_list.set(list);
            const branch = await this._loadDefaultBranch();
            if (
                branch &&
                (!this.formModel().branch ||
                    !list.includes(this.formModel().branch))
            ) {
                this.formModel.update((model) => ({ ...model, branch }));
            }
        } finally {
            this.loading_branches.set(false);
        }
    }

    private async _loadDefaultBranch() {
        const { id, uri, username, password } = this.formModel();
        return (
            id
                ? listRepositoryDefaultBranch(id)
                : isValidUrl(uri) && uri.startsWith('http')
                  ? listRemoteRepositoryDefaultBranch({
                        repository_url: uri,
                        username,
                        password,
                    })
                  : Promise.resolve('')
        ).catch(() => '');
    }

    private async _loadCommits() {
        const { id, uri, branch, username, password } = this.formModel();
        if (!id && (!isValidUrl(uri) || !uri.startsWith('http') || !branch)) {
            this.commit_list.set([
                {
                    hash: 'HEAD',
                    subject: 'Latest commit on the branch',
                },
            ]);
            return;
        }
        this.loading_commits.set(true);
        try {
            const list = await (
                id
                    ? listRepositoryCommits(id, { branch })
                    : listRemoteRepositoryCommits({
                          repository_url: uri,
                          username,
                          password,
                          branch,
                      })
            ).catch(() => [] as GitCommitDetails[]);
            const commit_list: RepositoryCommit[] = [
                {
                    hash: 'HEAD',
                    subject: 'Latest commit on the branch',
                },
                ...list.map((commit) => this._normaliseCommit(commit)),
            ];
            this.commit_list.set(commit_list);
            this.base_commit.set(
                commit_list.find(
                    (commit) => commit.hash === this.formModel().commit_hash,
                ) || commit_list[0],
            );
        } finally {
            this.loading_commits.set(false);
        }
    }

    private _normaliseCommit(commit: GitCommitDetails): RepositoryCommit {
        return {
            ...commit,
            hash: commit.commit,
            subject: commit.subject || commit.commit,
        };
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings).catch((err) => {
            this.saving.set(null);
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
