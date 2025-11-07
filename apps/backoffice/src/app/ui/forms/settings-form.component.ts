import {
    Component,
    computed,
    inject,
    input,
    model,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import {
    addSettings,
    EncryptionLevel,
    PlaceSettings,
    updateSettings,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { HashMap, Identity } from 'apps/backoffice/src/app/common/types';
import { validateYAML } from 'apps/backoffice/src/app/systems/systems.utilities';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as yaml from 'js-yaml';
import { lastValueFrom } from 'rxjs';
import { i18n } from '../../common/locale.service';
import { SettingsFieldComponent } from '../custom-fields/settings-field.component';
import { IconComponent } from '../icon.component';
import { DateFromPipe } from '../pipes/date-from.pipe';
import { UserPipe } from '../pipes/user.pipe';
import { TranslatePipe } from '../translate.pipe';

type SettingsArray = [
    PlaceSettings,
    PlaceSettings,
    PlaceSettings,
    PlaceSettings,
];

@Component({
    selector: 'a-settings-form',
    template: `
        <header
            class="mb-2 flex h-16 w-full items-center justify-between rounded bg-base-200 px-2 text-lg font-medium"
        >
            <h3 class="px-2">{{ 'COMMON.SETTINGS' | translate }}</h3>
            @if (active_edited()) {
                <div class="flex items-center space-x-2">
                    <button
                        icon
                        matRipple
                        class="rounded border border-secondary bg-base-100 text-secondary"
                        [disabled]="edited_count() <= 0"
                        [matTooltip]="'COMMON.CLEAR' | translate"
                        (click)="clearChanges()"
                    >
                        @if (!saving()[shown_option().id]) {
                            <icon class="text-2xl">delete_sweep</icon>
                        } @else {
                            <mat-spinner diameter="32"></mat-spinner>
                        }
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded bg-secondary text-secondary-content"
                        [disabled]="
                            !active_edited() ||
                            (has_errors() && !saving()[shown_option().id])
                        "
                        [matTooltip]="'COMMON.SAVE' | translate"
                        (click)="save(shown_option().id)"
                    >
                        @if (!saving()[shown_option().id]) {
                            <icon class="text-2xl">save</icon>
                        } @else {
                            <mat-spinner diameter="32"></mat-spinner>
                        }
                    </button>
                </div>
            }
        </header>
        @if (form() && used_settings() && used_settings().length) {
            <form [formGroup]="form()">
                <mat-tab-group
                    [selectedIndex]="level_index"
                    (selectedIndexChange)="
                        encryption_level.set(levels()[$event].id)
                    "
                    class="border-x border-t border-base-300"
                >
                    @for (option of levels(); track $index) {
                        <mat-tab
                            [label]="
                                option.name +
                                (option.id !== 4 &&
                                form().controls['settings' + option.id]?.dirty
                                    ? ' *'
                                    : '')
                            "
                        >
                        </mat-tab>
                    }
                </mat-tab-group>
                @for (option of levels(); track $index; let i = $index) {
                    @if (
                        form() &&
                        encryption_level() === option.id &&
                        form().controls['settings' + option.id]
                    ) {
                        <div
                            [class.error-border]="
                                form().controls['settings' + option.id]?.errors
                            "
                        >
                            <settings-form-field
                                [decorations]="
                                    option.id === 4 ? merge_decorations : []
                                "
                                [formControlName]="'settings' + option.id"
                                [readonly]="
                                    !option.active || this.saving()[option.id]
                                "
                            ></settings-form-field>
                        </div>
                        @if (form().controls['settings' + option.id]?.errors) {
                            <div class="error-display">
                                {{
                                    form().controls['settings' + option.id]
                                        .errors.yaml
                                }}
                            </div>
                        }
                        @if (
                            option.name !== 'Merged' &&
                            settings()[i - 1]?.modified_by_id
                        ) {
                            <div
                                class="border-gray-300 mb-4 flex items-center justify-between space-x-2 border-x border-b border-base-300 p-1"
                            >
                                <div class="pl-2 text-xs">
                                    {{
                                        (
                                            settings()[i - 1]?.modified_by_id
                                            | user
                                            | async
                                        )?.name
                                    }}
                                </div>
                                <code
                                    class="text-xs"
                                    [matTooltip]="
                                        settings()[i - 1]?.updated_at * 1000 ||
                                            0 | date: 'medium'
                                    "
                                >
                                    {{ 'COMMON.LAST_EDIT' | translate }}:
                                    {{
                                        settings()[i - 1]?.updated_at * 1000
                                            | dateFrom
                                    }}
                                </code>
                            </div>
                        }
                    }
                }
            </form>
        }
        <ng-template #spinner>
            <mat-spinner diameter="32" />
        </ng-template>
    `,
    styles: [
        `
            .settings {
                position: relative;
                width: calc(100vw - 29em);
                height: calc(100vh - 32em);

                @media screen and (max-width: 640px) {
                    width: calc(100vw - 3em);
                }
            }

            .error-border {
                border: 2px solid var(--error);
            }

            .error-display {
                color: #fff;
                background-color: var(--error);
                white-space: pre-wrap;
                margin: 0 0.5em 0.5em;
                padding: 0.5em;
                border-radius: 0 0 4px 4px;
                font-family: var(--mono-font);
                @apply shadow;
            }

            .actions {
                display: flex;
                align-items: center;
                justify-content: end;
                padding: 0.5em 0;
                margin-top: -2em;
                height: 3em;
                @media screen and (max-width: 640px) {
                    margin-left: 4.5em;
                }

                button {
                    @media screen and (max-width: 640px) {
                        font-size: 0.8em;
                    }
                }
            }

            .off-screen {
                position: absolute;
                left: 110vw;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        DateFromPipe,
        SettingsFieldComponent,
        MatTabsModule,
        MatTooltipModule,
        MatRippleModule,
        ReactiveFormsModule,
        IconComponent,
        UserPipe,
    ],
})
export class SettingsFormComponent
    extends AsyncHandler
    implements OnChanges, OnInit
{
    private _hotkey = inject(HotkeysService);
    private _users = inject(BackofficeUsersService);

    public readonly changed = signal(0);

    /** ID of the parent object */
    public readonly id = input<string>(undefined);
    /** List of settings for the  */
    public readonly settings = model<SettingsArray>(undefined);
    /** Whether to display merged settings */
    public readonly merge = input<boolean>(undefined);
    /** List of settings to merge into the main settings */
    public readonly merge_settings = input<PlaceSettings[]>(undefined);
    /** Form fields for settings */
    public readonly form = signal<UntypedFormGroup>(
        new FormGroup({
            settings0: new FormControl('', [validateYAML]),
            settings1: new FormControl('', [validateYAML]),
            settings2: new FormControl('', [validateYAML]),
            settings3: new FormControl('', [validateYAML]),
            settings4: new FormControl('', [validateYAML]),
        }),
    );
    /** Whether a setting is being saved */
    public readonly saving = signal<[boolean, boolean, boolean, boolean]>([
        false,
        false,
        false,
        false,
    ]);
    /** Currently displayed encryption level */
    public readonly encryption_level = signal<EncryptionLevel>(undefined);
    /** Settings available to display on the UI */
    public readonly used_settings = signal<PlaceSettings[]>([]);
    /** Index of the active settings tab */
    public level_index = signal<number>(0);
    /** List of decorations to apply to the merge settings */
    public merge_decorations: HashMap[] = [];

    public readonly user = this._users.currentSignal();
    /** Whether user is admin */
    public readonly is_admin = computed(() => this.user().sys_admin);
    /** Whether user is support */
    public readonly is_support = computed(
        () => this.user().sys_admin || this.user().support,
    );

    /** Currently shown settings */
    public readonly shown_option = computed(() => {
        return this.levels().find(
            (i) => i.id === this.encryption_level(),
        ) as any;
    });

    /** Whether the currently active settings have been edited */
    public readonly active_edited = computed(() => {
        this.changed();
        return (
            this.used_settings() &&
            this.used_settings()[this.encryption_level()] &&
            this.form().controls[`settings${this.encryption_level()}`]?.dirty
        );
    });

    /** Number of settings blocks edited */
    public readonly edited_count = computed(() => {
        this.changed();
        let count = 0;
        for (const field in this.form().controls) {
            if (this.form().controls[field].dirty) {
                count++;
            }
        }

        return count;
    });

    /** Whether a settings group has errors */
    public readonly has_errors = computed(() => {
        this.changed();
        for (const key in this.form().controls) {
            if (this.form().controls[key] && this.form().controls[key].errors) {
                return true;
            }
        }
        return false;
    });

    public readonly levels = computed(() => {
        const levels: Identity[] = [
            {
                id: EncryptionLevel.None,
                name: i18n('COMMON.SETTINGS_PLAINTEXT'),
                active: true,
            },
            {
                id: EncryptionLevel.Support,
                name: i18n('COMMON.SETTINGS_SUPPORT'),
                active: this.is_support,
            },
            {
                id: EncryptionLevel.Admin,
                name: i18n('COMMON.SETTINGS_ADMIN'),
                active: this.is_admin(),
            },
            {
                id: EncryptionLevel.NeverDisplay,
                name: i18n('COMMON.SETTINGS_ENCRYPTED'),
                active: this.is_admin,
            },
        ];
        if (this.merge()) {
            levels.unshift({
                id: EncryptionLevel.NeverDisplay + 1,
                name: i18n('COMMON.SETTINGS_MERGED'),
            });
        }
        return levels;
    });

    public type(level: EncryptionLevel) {
        switch (level) {
            case EncryptionLevel.None:
                return i18n('COMMON.SETTINGS_PLAINTEXT');
            case EncryptionLevel.Support:
                return i18n('COMMON.SETTINGS_SUPPORT');
            case EncryptionLevel.Admin:
                return i18n('COMMON.SETTINGS_ADMIN');
        }
        return i18n('COMMON.SETTINGS_ENCRYPTED');
    }

    public ngOnInit(): void {
        this.subscription(
            'save_all',
            this._hotkey.listen(['KeyA'], () => this.saveAll()),
        );
        this.subscription(
            'clear_all',
            this._hotkey.listen(['KeyC'], () => this.clearChanges()),
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.merge) {
            this.encryption_level.set(
                this.merge()
                    ? EncryptionLevel.NeverDisplay + 1
                    : EncryptionLevel.None,
            );
        }
        if (changes.merge_settings) {
            this.timeout('update_merge', () => this.clearChanges(), 50);
        }
        if (changes.settings) {
            this.clearChanges();
        }
    }

    /** Save changes to the given setting level */
    public save(level: EncryptionLevel) {
        const item = this.used_settings()[level];
        console.log('Save:', item, level, this.form().controls);
        if (!item && this.saving()[level]) return;
        this.saving.update((s) => {
            s[level] = true;
            return s;
        });
        const details = {
            ...item,
            settings_string: this.form().controls[`settings${level}`].value,
        };
        const settings = this.settings();
        lastValueFrom(
            settings[level].id
                ? updateSettings(settings[level].id, details)
                : addSettings(details),
        ).then(
            (new_settings: PlaceSettings) => {
                this.saving.update((s) => {
                    s[level] = false;
                    return s;
                });
                this.settings.update((s) => {
                    s[level] = new_settings;
                    return s;
                });
                notifySuccess(
                    i18n('COMMON.SETTINGS_SAVE_SUCCESS', {
                        type: this.type(level),
                    }),
                );
                this.clearChanges();
            },
            (err) => {
                this.saving.update((s) => {
                    s[level] = false;
                    return s;
                });
                notifyError(
                    i18n('COMMON.SETTINGS_SAVE_ERROR', {
                        error: JSON.stringify(
                            err.response || err.message || err,
                        ),
                    }),
                );
            },
        );
    }

    /** Save all changes to settings */
    public saveAll() {
        if (this.has_errors())
            return notifyError('Some of the settings are invalid');
        const promises = [];
        for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
            const settings = this.settings();
            if (settings[i] && !this.saving()[i]) {
                this.saving.update((s) => {
                    s[i] = true;
                    return s;
                });
                const details = {
                    ...settings[i],
                    settings_string: this.form().controls[`settings${i}`].value,
                };
                promises.push(
                    settings[i].id
                        ? updateSettings(settings[i].id, details)
                        : addSettings(details),
                );
            }
        }
        if (promises.length) {
            Promise.all(promises).then(
                (results: PlaceSettings[]) => {
                    for (const result of results) {
                        this.saving.update((s) => {
                            s[result.encryption_level] = false;
                            return s;
                        });
                        this.settings.update((s) => {
                            s[result.encryption_level] = result;
                            return s;
                        });
                    }
                    notifySuccess(i18n('COMMON.SETTINGS_SAVE_SUCCESS_ALL'));
                    this.clearChanges();
                },
                (err) => {
                    for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
                        this.saving.update((s) => {
                            s[i] = false;
                            return s;
                        });
                    }
                    notifyError(
                        i18n('COMMON.SETTINGS_SAVE_ERROR', {
                            error: JSON.stringify(
                                err.response || err.message || err,
                            ),
                        }),
                    );
                },
            );
        }
    }

    public clearChanges() {
        console.log('Settings', this.settings());
        this.used_settings.set(this._processSettings(this.settings() || []));
        this._initForm();
    }

    private _initForm() {
        const used = this.used_settings();
        this.form.set(
            new FormGroup({
                settings0: new FormControl(used[0].settings_string, [
                    validateYAML,
                ]),
                settings1: new FormControl(used[1].settings_string, [
                    validateYAML,
                ]),
                settings2: new FormControl(used[2].settings_string, [
                    validateYAML,
                ]),
                settings3: new FormControl(used[3].settings_string, [
                    validateYAML,
                ]),
                settings4: new FormControl(used[4].settings_string, [
                    validateYAML,
                ]),
            }),
        );
        this.subscription(
            'changes',
            this.form().valueChanges.subscribe(() =>
                this.changed.set(Date.now()),
            ),
        );
    }

    private _processSettings(settings: PlaceSettings[]): PlaceSettings[] {
        if (!settings.length) return [];
        const processed_settings = [];
        for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
            const setting = settings?.find((_) => _.encryption_level === i);
            if (!setting) {
                processed_settings.push(
                    this._processSetting(
                        new PlaceSettings({ encryption_level: i }),
                    ),
                );
                continue;
            }
            processed_settings.push(this._processSetting(settings[i]));
        }
        processed_settings.push(
            this.merge()
                ? this._generateMergedSettings(processed_settings)
                : settings[3],
        );
        return processed_settings;
    }

    private _processSetting(setting: PlaceSettings): PlaceSettings {
        if (
            (setting.encryption_level === EncryptionLevel.Admin &&
                !this.is_admin) ||
            (setting.encryption_level === EncryptionLevel.Support &&
                !this.is_support) ||
            setting.encryption_level === EncryptionLevel.NeverDisplay
        ) {
            const obj = {};
            for (const key of setting.keys) {
                obj[key] = `<${i18n('COMMON.SETTINGS_MASKED')}>`;
            }
            const settings_string = (setting.keys || []).length
                ? yaml.dump(obj)
                : '';
            return new PlaceSettings({
                ...setting,
                parent_id: this.id(),
                settings_string,
            });
        }
        return new PlaceSettings({ ...setting, parent_id: this.id() });
    }

    /** Genereate merged settings from all available settings */
    private _generateMergedSettings(
        settings: PlaceSettings[] = [],
    ): PlaceSettings {
        const merge_settings =
            this.merge_settings()?.filter(
                (item) => item.parent_id !== this.id(),
            ) || [];
        const local_settings = (settings || []).map((item) => {
            let obj = {};
            try {
                obj = yaml.load(item.settings_string) || {};
            } catch (err) {
                for (const key of item.keys) {
                    obj[key] = `<${i18n('COMMON.SETTINGS_MASKED')}>`;
                }
            }
            return obj;
        });
        const remote_settings = merge_settings.map((item) => {
            let obj = {};
            try {
                obj = yaml.load(item.settings_string) || {};
            } catch (err) {
                for (const key of item.keys) {
                    obj[key] = `<${i18n('COMMON.SETTINGS_MASKED')}>`;
                }
            }
            return obj;
        });
        const merged_settings = remote_settings
            .concat(local_settings)
            .reduce((m, i) => ({ ...m, ...i }), {});
        console.log(
            'Settings:',
            local_settings,
            remote_settings,
            merge_settings,
        );
        const settings_string = Object.keys(merged_settings).length
            ? yaml.dump(merged_settings, { strict: true })
            : '';
        this.merge_decorations = this._decorationForSettings(
            settings_string,
            merge_settings.concat(settings),
            remote_settings.concat(local_settings),
        );
        return new PlaceSettings({
            id: 'merged',
            settings_string,
            parent_id: this.id(),
            keys: Object.keys(merged_settings),
        });
    }

    private _decorationForSettings(
        display: string,
        settings: PlaceSettings[],
        setting_maps: HashMap[],
    ) {
        const decorations: HashMap = {};
        for (let i = 0; i < settings.length; i++) {
            const type = Math.max(-1, i - (settings.length - 4));
            this._decorationsForObject(
                decorations,
                setting_maps[i],
                display,
                settings[i],
                type,
            );
        }
        return Object.keys(decorations).map((i) => decorations[i]);
    }

    private _decorationsForObject(
        decorations: HashMap,
        obj: HashMap,
        display: string,
        settings: PlaceSettings,
        type: number,
        prefix = '',
        level = 0,
    ) {
        for (const key in obj) {
            if (key in obj) {
                const field = `${prefix}${key}`;
                decorations[field] = {
                    options: {
                        linesDecorationsClassName: `${
                            MAPPING_CLASS[type + 1]
                        }-margin`,
                        inlineClassName: MAPPING_CLASS[type + 1],
                        hoverMessage: {
                            value: this._generateHoverMessage(type, settings),
                            isTrusted: true,
                        },
                    },
                    range: calcRangeOfStringInText(
                        `${whiteSpace(level * 2)}${key}:`,
                        display,
                        level * 2,
                    ),
                };
                if (obj[key] instanceof Object) {
                    this._decorationsForObject(
                        decorations,
                        obj[key],
                        display,
                        settings,
                        type,
                        `${field}.`,
                        level + 1,
                    );
                }
            }
        }
    }

    private _generateHoverMessage(type: number, settings: PlaceSettings) {
        if (type === -1) {
            return i18n('COMMON.SETTINGS_INHERITED', {
                parent: settings.parent_id,
                path: itemUrl(settings.parent_id),
                type: this.type(settings.encryption_level),
            });
        } else {
            return i18n('COMMON.SETTINGS_LOCAL', {
                type: this.type(settings.encryption_level),
            });
        }
    }
}

const MAPPING_CLASS = [
    'external-setting',
    'encryption-none',
    'encryption-support',
    'encryption-admin',
    'encryption-hide',
];

function whiteSpace(char_len: number) {
    return new Array(char_len).fill(' ').join('');
}

function itemUrl(id: string) {
    const path = `${location.origin}${location.pathname}`.replace(/\/$/g, '');
    if (id.indexOf('sys-') === 0) {
        return `${path}/#/systems/${id}/about`;
    } else if (id.indexOf('mod-') === 0) {
        return `${path}/#/modules/${id}/about`;
    } else if (id.indexOf('zone-') === 0) {
        return `${path}/#/zones/${id}/about`;
    } else if (id.indexOf('driver-') === 0) {
        return `${path}/#/drivers/${id}/about`;
    }
    return '';
}

/**
 * Calculates the editor compatible position of the string in the text
 * @param find String to find in text
 * @param in_text Text to search for string
 */
function calcRangeOfStringInText(find: string, in_text: string, index = 0) {
    const lines = in_text.split('\n');
    let line = '';
    let line_number = 0;
    for (line of lines) {
        line_number++;
        if (line.indexOf(find) === 0) {
            break;
        }
    }
    return {
        startColumn: index + 1,
        startLineNumber: line_number,
        endColumn: find.length,
        endLineNumber: line_number,
    };
}
