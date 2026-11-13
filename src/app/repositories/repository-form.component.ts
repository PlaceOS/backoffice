import {
    Component,
    ElementRef,
    EventEmitter,
    Injector,
    OnInit,
    Output,
    WritableSignal,
    computed,
    effect,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField, disabled, form } from '@angular/forms/signals';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DatePipe, SlicePipe } from '@angular/common';
import {
    GitCommitDetails,
    PlaceRepository,
    PlaceRepositoryType,
    addRepository,
    listRemoteRepositoryBranches,
    listRemoteRepositoryCommits,
    listRemoteRepositoryDefaultBranch,
    listRepositoryBranches,
    listRepositoryCommits,
    listRepositoryDefaultBranch,
    updateRepository,
} from '@placeos/ts-client';
import { AsyncHandler } from '../common/async-handler.class';
import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { notifyError } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { isValidUrl } from '../common/validation';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { OptionComponent } from '../ui/controls/option.component';
import {
    SelectComponent,
    SelectTriggerDirective,
} from '../ui/controls/select.component';
import { SpinnerComponent } from '../ui/controls/spinner.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
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
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'COMMON.FIELD_NAME' | translate
                                    "
                                    id="repository-name"
                                    [formField]="form.name"
                                />
                                <div error>
                                    {{ 'REPOS.NAME_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (
                            !is_editing() && form.repo_type && form.folder_name
                        ) {
                            <div class="field">
                                <label for="repo-type" id="repo-type-label">
                                    {{ 'REPOS.TYPE' | translate }}
                                </label>
                                <app-form-field>
                                    <app-select
                                        id="repo-type"
                                        aria-labelledby="repo-type-label"
                                        [formField]="form.repo_type"
                                    >
                                        @for (
                                            type of repo_types();
                                            track type
                                        ) {
                                            <app-option [value]="type.id">
                                                {{ type.name }}
                                            </app-option>
                                        }
                                    </app-select>
                                </app-form-field>
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
                                <app-form-field>
                                    <input
                                        [placeholder]="
                                            'REPOS.FOLDER_NAME' | translate
                                        "
                                        id="folder-name"
                                        [formField]="form.folder_name"
                                    />
                                    <div error>
                                        {{
                                            'REPOS.FOLDER_NAME_REQUIRED'
                                                | translate
                                        }}
                                    </div>
                                </app-form-field>
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
                            <app-form-field>
                                <input
                                    [placeholder]="'REPOS.URI' | translate"
                                    id="uri"
                                    [formField]="form.uri"
                                    (blur)="markCredentialsBlur()"
                                />
                                <div error>
                                    {{ 'REPOS.URI_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.username) {
                            <div class="field">
                                <label for="repo-u"
                                    >{{ 'REPOS.USERNAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        autocomplete="off"
                                        [placeholder]="
                                            'REPOS.USERNAME' | translate
                                        "
                                        id="repo-u"
                                        [formField]="form.username"
                                        (blur)="markCredentialsBlur()"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.password) {
                            <div class="field">
                                <label for="repo-p">
                                    {{ 'REPOS.PASSWORD' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        autocomplete="new-password"
                                        [type]="
                                            show_password()
                                                ? 'text'
                                                : 'password'
                                        "
                                        [placeholder]="
                                            'COMMON.PASSWORD' | translate
                                        "
                                        id="repo-p"
                                        [formField]="form.password"
                                        (blur)="markCredentialsBlur()"
                                    />
                                    <button
                                        type="button"
                                        suffix
                                        [attr.aria-label]="
                                            'COMMON.PASSWORD_TOGGLE' | translate
                                        "
                                        [attr.aria-pressed]="show_password()"
                                        (click)="togglePassword($event)"
                                    >
                                        <icon>visibility</icon>
                                    </button>
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.branch) {
                        <div class="field">
                            <label
                                for="branch"
                                id="branch-label"
                                [class.error]="
                                    form.branch().invalid() &&
                                    form.branch().touched()
                                "
                            >
                                {{ 'REPOS.BRANCH' | translate }}<span>*</span>
                            </label>
                            <app-form-field>
                                <app-select
                                    id="branch"
                                    aria-labelledby="branch-label"
                                    [formField]="form.branch"
                                    [placeholder]="'Select Branch'"
                                    (openedChange)="setBranchOpen($event)"
                                >
                                    <div select-search>
                                        <input
                                            #branch_search
                                            type="search"
                                            name="branch-search"
                                            [ngModel]="branch_filter()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="
                                                branch_filter.set($event)
                                            "
                                            (mousedown)="
                                                $event.stopPropagation()
                                            "
                                            (click)="$event.stopPropagation()"
                                            (keydown)="$event.stopPropagation()"
                                            [placeholder]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'branches' }
                                            "
                                            [attr.aria-label]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'branches' }
                                            "
                                        />
                                    </div>
                                    <p select-empty>
                                        {{
                                            'COMMON.SEARCH_EMPTY'
                                                | translate
                                                    : { name: 'branches' }
                                        }}
                                    </p>
                                    @for (
                                        branch of filtered_branch_list();
                                        track branch
                                    ) {
                                        <app-option [value]="branch">
                                            {{ branch }}
                                        </app-option>
                                    }
                                </app-select>
                                @if (loading_branches()) {
                                    <div class="suffix ml-2" suffix>
                                        <app-spinner diameter="24" />
                                    </div>
                                }
                                <div error>
                                    {{ 'REPOS.BRANCH_REQUIRED' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (is_interface()) {
                        <div class="field commit">
                            <label for="commit" id="commit-label">
                                {{ 'REPOS.COMMIT' | translate }}</label
                            >
                            <app-form-field>
                                <app-select
                                    id="commit"
                                    aria-labelledby="commit-label"
                                    [formField]="form.commit_hash"
                                    placeholder="Select commit"
                                    (openedChange)="setCommitOpen($event)"
                                >
                                    <app-select-trigger>
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
                                    </app-select-trigger>
                                    <div select-search>
                                        <input
                                            #commit_search
                                            type="search"
                                            name="commit-search"
                                            [ngModel]="commit_filter()"
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            (ngModelChange)="
                                                commit_filter.set($event)
                                            "
                                            (mousedown)="
                                                $event.stopPropagation()
                                            "
                                            (click)="$event.stopPropagation()"
                                            (keydown)="$event.stopPropagation()"
                                            [placeholder]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'commits' }
                                            "
                                            [attr.aria-label]="
                                                'COMMON.SEARCH_FOR'
                                                    | translate
                                                        : { name: 'commits' }
                                            "
                                        />
                                    </div>
                                    <p select-empty>
                                        {{
                                            'COMMON.SEARCH_EMPTY'
                                                | translate: { name: 'commits' }
                                        }}
                                    </p>
                                    @for (
                                        commit of filtered_commit_list();
                                        track commit
                                    ) {
                                        <app-option [value]="commit.hash">
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
                                                        [appTooltip]="
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
                                        </app-option>
                                    }
                                </app-select>
                                @if (loading_commits()) {
                                    <div class="suffix ml-2" suffix>
                                        <app-spinner diameter="24" />
                                    </div>
                                }
                            </app-form-field>
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
                            <app-form-field>
                                <textarea
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    id="description"
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
                        </div>
                    }
                    @if (form.root_path) {
                        <div class="field">
                            <label for="root-path">
                                {{ 'REPOS.ROOT_PATH' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    [placeholder]="
                                        'REPOS.ROOT_PATH' | translate
                                    "
                                    id="root-path"
                                    [formField]="form.root_path"
                                />
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        SpinnerComponent,
        TooltipDirective,
        SelectTriggerDirective,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FormField,
        TranslatePipe,
        FormsModule,
        IconComponent,
        SettingsToggleComponent,
        FullscreenModalShellComponent,
        DatePipe,
        SlicePipe,
    ],
})
export class RepositoryFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<DialogRef<unknown, RepositoryFormComponent>>(DialogRef);
    private _data = inject<{ item: PlaceRepository; readonly?: string }>(
        DIALOG_DATA,
    );
    private _injector = inject(Injector);
    private readonly _name = 'REPOS';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(
        generateRepositoryFormModel(this._data.item),
    );
    private readonly _repository_uri = computed(() => this.formModel().uri);
    private readonly _repository_branch = computed(
        () => this.formModel().branch,
    );
    private readonly _repository_commit = computed(
        () => this.formModel().commit_hash,
    );
    public readonly saving = signal<string | null>(null);
    public readonly heading = signal('');

    /** List of commits available for repository */
    public commit_list = signal<RepositoryCommit[]>([]);
    public readonly commit_filter = signal('');
    public readonly filtered_commit_list = computed(() => {
        const search = this.commit_filter().trim().toLowerCase();
        if (!search) return this.commit_list();
        const selected = this._repository_commit();
        return this.commit_list()
            .filter(
                (commit) =>
                    commit.hash === selected ||
                    `${commit.subject} ${commit.hash} ${commit.author || ''}`
                        .toLowerCase()
                        .includes(search),
            )
            .sort((a, b) =>
                a.hash === selected ? -1 : b.hash === selected ? 1 : 0,
            );
    });
    /** List of branches available for repository */
    public branch_list = signal<string[]>([]);
    public readonly branch_filter = signal('');
    public readonly filtered_branch_list = computed(() => {
        const search = this.branch_filter().trim().toLowerCase();
        if (!search) return this.branch_list();
        const selected = this._repository_branch();
        return this.branch_list()
            .filter(
                (branch) =>
                    branch === selected ||
                    branch.toLowerCase().includes(search),
            )
            .sort((a, b) => (a === selected ? -1 : b === selected ? 1 : 0));
    });
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
    public readonly is_editing = signal(false);
    /** Emits when URI, username, or password fields lose focus */
    public readonly credentials_blur = signal(0);

    private readonly _branch_search_el =
        viewChild<ElementRef<HTMLInputElement>>('branch_search');
    private readonly _commit_search_el =
        viewChild<ElementRef<HTMLInputElement>>('commit_search');

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

    constructor() {
        super();
        onSaveHotkey(() => this.submit());
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
    }

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.saving,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}.`,
            () => {
                // A disabled branch field skips validation, e.g. when branches fail to load
                if (!this.formModel().branch) {
                    notifyError(i18n(`${this._name}.BRANCH_REQUIRED`));
                    return undefined;
                }
                const item = this._data.item;
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
                const form_item = mergeFormItem(
                    item,
                    form_value,
                ) as unknown as PlaceRepository;
                return form_item.id
                    ? updateRepository(form_item.id, form_item)
                    : addRepository(form_item);
            },
        );
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

    /** Show or hide the password. Stops the click so the form field does not focus the input. */
    public togglePassword(event: Event) {
        event.stopPropagation();
        this.show_password.update((value) => !value);
    }

    public setBranchOpen(open: boolean): void {
        if (!open) return;
        this.branch_filter.set('');
        this.timeout('focus_branch_search', () =>
            this._branch_search_el()?.nativeElement.focus(),
        );
    }

    public setCommitOpen(open: boolean): void {
        if (!open) return;
        this.commit_filter.set('');
        this.timeout('focus_commit_search', () =>
            this._commit_search_el()?.nativeElement.focus(),
        );
    }

    private _setupBranchAndCommitStreams() {
        effect(
            () => {
                void this._repository_uri();
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
                void this._repository_uri();
                void this._repository_branch();
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
}
