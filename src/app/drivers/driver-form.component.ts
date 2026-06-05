import { CommonModule, DatePipe } from '@angular/common';
import {
    Component,
    effect,
    EventEmitter,
    OnInit,
    Output,
    computed,
    inject,
    resource,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, submit } from '@angular/forms/signals';
import {
    EncryptionLevel,
    GitCommitDetails,
    PlaceDriver,
    PlaceDriverDetails,
    PlaceDriverRole,
    PlaceRepository,
    PlaceRepositoryType,
    PlaceSettings,
    addDriver,
    addSettings,
    cleanObject,
    listRepositoryCommits,
    listRepositoryDriverDetails,
    listRepositoryDrivers,
    queryRepositories,
    showRepository,
    updateDriver,
} from '@placeos/ts-client';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { format, isAfter, subMinutes } from 'date-fns';
import { AsyncHandler } from '../common/async-handler.class';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import * as yaml from 'js-yaml';
import { getInvalidSignalFields } from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';

import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { applyDriverFormSchema, generateDriverFormModel } from './drivers.utilities';

@Component({
    selector: 'driver-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="saving"
            (save)="submit()"
        >
            @if (!is_editing()) {
                <label for="repos">{{ 'REPOS.SINGULAR' | translate }}</label>
                <item-search-field
                    [placeholder]="'REPOS.SEARCH' | translate"
                    [options]="repo_list()"
                    [loading]="loading_type().includes('repository')"
                    [(ngModel)]="repo"
                    (ngModelChange)="driver.set(null); commit.set(null)"
                />
                @if (repo()) {
                    <label for="driver">{{ 'DRIVERS.BASE' | translate }}</label>
                    <item-search-field
                        [placeholder]="'DRIVERS.SEARCH' | translate"
                        [options]="driver_list()"
                        [loading]="loading_type().includes('drivers')"
                        [(ngModel)]="driver"
                        (ngModelChange)="commit.set(null)"
                    />
                }
            }
            @if (driver()) {
                <label for="commit" [class.error]="commit_error()">
                    {{ 'DRIVERS.COMMIT' | translate }}
                </label>
                <item-search-field
                    [placeholder]="'DRIVERS.COMMIT_SEARCH' | translate"
                    [options]="commit_list()"
                    [loading]="loading_type().includes('commits')"
                    [ngModel]="commit()"
                    (ngModelChange)="
                        commit.set($event); applyDriverCommit($event)
                    "
                />
                @if (commit_error()) {
                    <div class="text-error text-xs">
                        {{ 'DRIVERS.DETAILS_ERROR_1' | translate }}
                        {{ 'DRIVERS.DETAILS_ERROR_2' | translate }}
                    </div>
                }
            }
            @if (commit() && !loading() && form.id) {
                <div class="flex flex-col">
                    <label
                        for="driver-name"
                        [class.error]="fieldInvalid('name')"
                    >
                        {{ 'COMMON.FIELD_NAME' | translate }}
                        <span required>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>
                            {{ 'DRIVERS.NAME_REQUIRED' | translate }}
                        </mat-error>
                    </mat-form-field>
                    <div class="flex space-x-4">
                        @if (!is_editing()) {
                            <div class="flex flex-1 flex-col">
                                <label for="role">
                                    {{ 'DRIVERS.ROLE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <mat-select [formField]="form.role">
                                        @for (type of role_types; track type) {
                                            <mat-option [value]="type.id">
                                                {{ type.name | translate }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        <div class="flex flex-1 flex-col">
                            <label
                                for="module-name"
                                [class.error]="fieldInvalid('module_name')"
                            >
                                {{ 'DRIVERS.MODULE_NAME' | translate }}
                                <span required>*</span>
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'DRIVERS.MODULE_NAME' | translate
                                    "
                                    [formField]="form.module_name"
                                />
                                <mat-error>
                                    {{
                                        'DRIVERS.MODULE_NAME_REQUIRED'
                                            | translate
                                    }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    </div>
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
                    <label for="default-uri">{{
                        'DRIVERS.DEFAULT_URI' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'DRIVERS.DEFAULT_URI' | translate"
                            [formField]="form.default_uri"
                        />
                    </mat-form-field>
                    <div class="flex items-center space-x-4">
                        <div class="flex flex-1 flex-col">
                            <label
                                for="default-port"
                                [class.error]="fieldInvalid('default_port')"
                            >
                                {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    type="number"
                                    [placeholder]="
                                        'DRIVERS.DEFAULT_PORT' | translate
                                    "
                                    [formField]="form.default_port"
                                />
                                <mat-error>
                                    {{ 'MODULES.PORT_REQUIRED' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <div class="h-1 w-full"></div>
                            <settings-toggle
                                class="w-full"
                                [label]="'MODULES.IGNORE_CONNECTED' | translate"
                                [formField]="form.ignore_connected"
                            ></settings-toggle>
                        </div>
                    </div>
                    <label for="alert-level">
                        {{ 'COMMON.ALERT_LEVEL' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.alert_level"
                        >
                            @for (level of alert_levels; track level.id) {
                                <mat-option [value]="level.id">
                                    {{ level.name | translate }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            <!-- Form fields go here -->
            @if (loading()) {
                <div
                    class="bg-base-200 flex w-full flex-col items-center justify-center space-y-4 rounded-xl px-8 py-16"
                >
                    <mat-spinner [diameter]="32" />
                    <p>{{ loading() | translate }}</p>
                </div>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        CommonModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        SettingsToggleComponent,
        MatFormFieldModule,
        MatInputModule,
        FormField,
        MatSelectModule,
        ItemSearchFieldComponent,
        FormsModule,
        FullscreenModalShellComponent,
    ],
})
export class DriverFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<DriverFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceDriver; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'DRIVERS';
    private _hotkey = inject(HotkeysService);
    private _date_pipe = new DatePipe('en');

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(generateDriverFormModel(this._data.item));
    public readonly form = form(this.formModel, applyDriverFormSchema);
    public saving: string;
    public heading: string;

    public readonly is_editing = computed(() => !!this.formModel().id);
    public readonly loading = signal('');
    public readonly loading_type = signal<string[]>([]);
    public readonly commit_error = signal(false);
    private readonly _details_request = signal(0);
    public readonly role_types = [
        { id: PlaceDriverRole.SSH, name: 'DRIVERS.SSH' },
        { id: PlaceDriverRole.Device, name: 'DRIVERS.DEVICE' },
        { id: PlaceDriverRole.Service, name: 'DRIVERS.SERVICE' },
        { id: PlaceDriverRole.Websocket, name: 'DRIVERS.WEBSOCKET' },
        { id: PlaceDriverRole.Logic, name: 'DRIVERS.LOGIC' },
    ];
    public readonly alert_levels = [
        { id: 'low', name: 'COMMON.ALERT_LOW' },
        { id: 'medium', name: 'COMMON.ALERT_MEDIUM' },
        { id: 'high', name: 'COMMON.ALERT_HIGH' },
        { id: 'critical', name: 'COMMON.ALERT_CRITICAL' },
    ];

    public readonly repo = signal<PlaceRepository | null>(null);
    public readonly driver = signal<{
        id: string;
        name: string;
        default_settings?: unknown;
    } | null>(null);
    public readonly commit = signal<{
        id: string;
        name: string;
        extra: string | null;
    } | null>(null);

    private readonly _repo_list = resource({
        loader: async () => {
            this._setLoadingType('repository', true);
            try {
                const { data } = await queryRepositories({ limit: 1000 });
                return data.filter(
                    (repo) => repo.type === PlaceRepositoryType.Driver,
                );
            } finally {
                this._setLoadingType('repository', false);
            }
        },
    });
    public readonly repo_list = computed(() => this._repo_list.value() || []);

    private readonly _driver_list = resource({
        params: () => this.repo()?.id,
        loader: async ({ params: repo_id }) => {
            if (!repo_id) return [];
            this._setLoadingType('drivers', true);
            try {
                const list = await listRepositoryDrivers(repo_id, {
                    limit: 1000,
                }).catch(() => [] as string[]);
                return list.map((_) => ({
                    id: _,
                    name: _.replace(/\//g, ' > '),
                }));
            } finally {
                this._setLoadingType('drivers', false);
            }
        },
    });
    public readonly driver_list = computed(
        () => this._driver_list.value() || [],
    );

    private readonly _commit_list = resource({
        params: () => ({
            repo_id: this.repo()?.id,
            driver_id: this.driver()?.id,
        }),
        loader: async ({ params }) => {
            if (!params.repo_id || !params.driver_id) return [];
            return this._loadCommitList(params.repo_id, params.driver_id);
        },
    });
    public readonly commit_list = computed(
        () => this._commit_list.value() || [],
    );

    public ngOnInit(): void {
        const item = this._data.item;
        const edit = !!item.id;
        this.heading = i18n(`${this._name}.${edit ? 'EDIT' : 'NEW'}`);
        this._loadDetailsFromForm();
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    constructor() {
        super();
        effect(() => {
            const module_name = this.formModel().module_name;
            const clean_name = module_name?.replace(/ /g, '_') || '';
            if (module_name !== clean_name) {
                this.formModel.update((value) => ({
                    ...value,
                    module_name: clean_name,
                }));
            }
        });
    }

    public fieldInvalid(field: string) {
        const form_field = this.form[
            field as keyof typeof this.form
        ] as unknown as () => {
            invalid: () => boolean;
            touched: () => boolean;
        };
        return typeof form_field === 'function'
            ? form_field().invalid() && form_field().touched()
            : false;
    }

    public async applyDriverCommit(commit: {
        id: string;
        name: string;
        extra: string | null;
    }) {
        const request_id = this._details_request() + 1;
        this._details_request.set(request_id);
        const old_commit = this.commit();
        this.formModel.update((value) => ({ ...value, commit: commit.id }));
        this.commit.set(commit);
        this.commit_error.set(false);
        const repo = this.repo();
        const driver = this.driver();
        if (!repo?.id || !driver?.id) return;
        this.loading.set('DRIVERS.DETAILS_LOADING');
        this.formModel.update((value) => ({
            ...value,
            repository_id: repo.id,
            file_name: driver.id,
        }));
        const details = await listRepositoryDriverDetails(repo.id, {
            driver: `${driver.id}`,
            commit: `${commit.id}`,
        }).catch(() => null);
        if (request_id !== this._details_request()) return;
        if (!details) {
            this.formModel.update((value) => ({
                ...value,
                commit: old_commit?.id || '',
            }));
            this.commit.set(old_commit);
            this.loading.set('');
            this.commit_error.set(true);
            notifyError(
                `Failed to get driver details for commit "${commit.id}"`,
            );
            return;
        }
        if (this.formModel().id) {
            this.loading.set('');
            return;
        }
        this._applyDriverDetails(details);
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item = this._data.item;
            this.saving = i18n(`${this._name}.SAVING`);
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            const form_value = { ...this.formModel() };
            if (item.id) {
                delete form_value.role;
                delete form_value.class_name;
            }
            const form_item = (
                item.id
                    ? cleanObject(
                          { ...item_json, ...form_value },
                          [undefined],
                      )
                    : { ...item_json, ...form_value }
            ) as Identity;
            try {
                const _item = await (form_item.id
                    ? updateDriver(
                          form_item.id as string,
                          form_item as unknown as PlaceDriver,
                      )
                    : addDriver(form_item as unknown as PlaceDriver));
                this._dialog_ref.disableClose = false;
                this.event.emit({
                    reason: 'done',
                    metadata: { item: _item as unknown as Identity },
                });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                if (!this.formModel().id && this.formModel().settings) {
                    await this.newSettings(
                        _item as unknown as Identity,
                        this.formModel().settings,
                    );
                }
                this._dialog_ref.close();
            } catch (err) {
                this.saving = null;
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

    private _applyDriverDetails(details: PlaceDriverDetails) {
        if (details == null) {
            this.loading.set('');
            return;
        }
        const driver = this.driver();
        const details_any = details;
        let settings = details_any.default_settings || '';
        try {
            JSON.parse(details_any.default_settings);
            const doc = yaml.load(details_any.default_settings);
            settings = yaml.dump(doc);
        } catch (error) {
            console.error(
                'Error parsing settings:',
                error,
                driver.default_settings,
            );
        }
        const port_number =
            details_any.tcp_port || details_any.udp_port || null;
        this.formModel.update((value) => ({
            ...value,
            name: details_any.descriptive_name || '',
            module_name: details_any.generic_name || '',
            class_name: driver.id || '',
            settings,
            default_port: port_number,
            default_uri: details_any.uri_base || '',
            role: port_number
                ? port_number === 22
                    ? PlaceDriverRole.SSH
                    : PlaceDriverRole.Device
                : details_any.uri_base
                  ? details_any.uri_base.startsWith('ws')
                      ? PlaceDriverRole.Websocket
                      : PlaceDriverRole.Service
                  : PlaceDriverRole.Logic,
            description: details_any.description || '',
        }));
        this.loading.set('');
    }

    private async _loadDetailsFromForm() {
        const { id, commit, file_name, repository_id } = this.formModel();
        if (!id) return;
        this.loading.set('DRIVERS.DETAILS_LOADING');
        const repo = await showRepository(repository_id);
        const driver = {
            id: file_name,
            name: file_name.replace(/\//g, ' > '),
        };
        this.repo.set(repo);
        this.driver.set(driver);
        const commit_list = await this._loadCommitList(
            repository_id,
            file_name,
        );
        const active_commit = commit_list.find((c) => c.id === commit);
        if (active_commit) this.commit.set(active_commit);
        this.loading.set('');
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings).catch((err) => {
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

    private async _loadCommitList(repo_id: string, driver_id: string) {
        this._setLoadingType('commits', true);
        try {
            const list = await listRepositoryCommits(repo_id, {
                driver: driver_id,
                limit: 1000,
            }).catch(() => [] as GitCommitDetails[]);
            return list.map((item) => ({
                id: item.commit,
                name: `${item.subject}`,
                extra: isAfter(item.date, subMinutes(item.date, 1))
                    ? this._date_pipe.transform(item.date.valueOf())
                    : format(item.date, 'dd MMM yyyy'),
            }));
        } finally {
            this._setLoadingType('commits', false);
        }
    }

    private _setLoadingType(type: string, loading: boolean) {
        this.loading_type.update((types) => {
            const list = types.filter((_) => _ !== type);
            return loading ? [...list, type] : list;
        });
    }
}
