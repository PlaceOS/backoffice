import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    OnInit,
} from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import {
    PlaceSettings,
    PlaceUser,
    EncryptionLevel,
    updateSettings,
    addSettings,
} from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { validateYAML } from 'apps/backoffice/src/app/systems/systems.utilities';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';
import { BackofficeUsersService } from 'apps/backoffice/src/app/users/users.service';

import * as yaml from 'js-yaml';
import * as merge from 'deepmerge';

@Component({
    selector: 'a-settings-form',
    templateUrl: './settings-form.component.html',
    styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent
    extends BaseClass
    implements OnChanges, OnInit {
    /** ID of the parent object */
    @Input() id: string;
    /** List of settings for the  */
    @Input() settings: [
        PlaceSettings,
        PlaceSettings,
        PlaceSettings,
        PlaceSettings
    ];
    /** Whether to display merged settings */
    @Input() merge: boolean;
    /** List of settings to merge into the main settings */
    @Input() merge_settings: PlaceSettings[];
    /** Form fields for settings */
    public form: UntypedFormGroup;
    /** Whether a setting is being saved */
    public saving: [boolean, boolean, boolean, boolean] = [
        false,
        false,
        false,
        false,
    ];
    /** Currently displayed encryption level */
    public encryption_level: EncryptionLevel;
    /** Settings available to display on the UI */
    public used_settings: PlaceSettings[] = [];
    /** List of available settings to view */
    public available_levels = this.levels;
    /** Index of the active settings tab */
    public level_index: number;
    /** List of decorations to apply to the merge settings */
    public merge_decorations: HashMap[] = [];

    /** Current user */
    public get user(): PlaceUser {
        return this._users.current();
    }

    /** Whether user is admin */
    public get is_admin(): boolean {
        return !!this.user.sys_admin;
    }

    /** Whether user is support */
    public get is_support(): boolean {
        return !!this.user.sys_admin || !!this.user.support;
    }

    /** Currently shown settings */
    public get shown_option(): {
        id: EncryptionLevel;
        name: string;
        active?: boolean;
    } {
        return this.available_levels.find(
            (i) => i.id === this.encryption_level
        );
    }

    /** Whether the currently active settings have been edited */
    public get active_edited(): boolean {
        return (
            this.used_settings &&
            this.used_settings[this.encryption_level] &&
            this.form.controls[`settings${this.encryption_level}`].dirty
        );
    }

    /** Number of settings blocks edited */
    public get edited_count(): number {
        let count = 0;
        for (const field in this.form.controls) {
            if (this.form.controls[field].dirty) {
                count++;
            }
        }

        return count;
    }

    /** Whether a settings group has errors */
    public get has_errors(): boolean {
        for (const key in this.form.controls) {
            if (this.form.controls[key] && this.form.controls[key].errors) {
                return true;
            }
        }
        return false;
    }

    /** Displayable encryption levels for settings */
    public get levels(): any[] {
        const levels: Identity[] = [
            { id: EncryptionLevel.None, name: 'Unencrypted', active: true },
            {
                id: EncryptionLevel.Support,
                name: 'Support',
                active: this.is_support,
            },
            { id: EncryptionLevel.Admin, name: 'Admin', active: this.is_admin },
            {
                id: EncryptionLevel.NeverDisplay,
                name: 'Encrypted',
                active: this.is_admin,
            },
        ];
        if (this.merge) {
            levels.unshift({
                id: EncryptionLevel.NeverDisplay + 1,
                name: 'Merged',
            });
        }
        return levels;
    }

    public type(level: EncryptionLevel) {
        switch (level) {
            case EncryptionLevel.None:
                return 'Unencrypted';
            case EncryptionLevel.Support:
                return 'Support';
            case EncryptionLevel.Admin:
                return 'Admin';
        }
        return 'Never Display';
    }

    constructor(
        private _hotkey: HotkeysService,
        private _users: BackofficeUsersService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'save_all',
            this._hotkey.listen(['KeyA'], () => this.saveAll())
        );
        this.subscription(
            'clear_all',
            this._hotkey.listen(['KeyC'], () => this.clearChanges())
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.merge) {
            this.encryption_level = this.merge
                ? EncryptionLevel.NeverDisplay + 1
                : EncryptionLevel.None;
            this.available_levels = this.levels;
        }
        if (changes.merge_settings) {
            this.timeout(
                'update_merge',
                () => {
                    this.used_settings = this.processSettings(
                        this.settings || []
                    );
                    this.initForm();
                },
                50
            );
        }
        if (changes.settings) {
            this.used_settings = this.processSettings(this.settings || []);
            this.initForm();
        }
    }

    /** Save changes to the given setting level */
    public save(level: EncryptionLevel) {
        const item = this.used_settings[level];
        if (item && !this.saving[level]) {
            this.saving[level] = true;
            const details = {
                ...item,
                settings_string: this.form.controls[`settings${level}`].value,
            };
            (this.settings[level].id
                ? updateSettings(this.settings[level].id, details)
                : addSettings(details)
            )
                .toPromise()
                .then(
                    (new_settings: PlaceSettings) => {
                        this.saving[level] = false;
                        this.settings[level] = new_settings;
                        notifySuccess(
                            `Successfully saved ${this.type(level)} settings.`
                        );
                        this.used_settings = this.processSettings(
                            this.settings || []
                        );
                        this.initForm();
                    },
                    (err) => {
                        this.saving[level] = false;
                        notifyError(
                            `Error updating settings. Error: ${JSON.stringify(
                                err.response || err.message || err
                            )}`
                        );
                    }
                );
        }
    }

    /** Save all changes to settings */
    public saveAll() {
        if (this.has_errors) {
            return;
        }
        const promises = [];
        for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
            if (this.settings[i] && !this.saving[i]) {
                this.saving[i] = true;
                const details = {
                    ...this.settings[i],
                    settings_string: this.form.controls[`settings${i}`].value,
                };
                promises.push(
                    this.settings[i].id
                        ? updateSettings(this.settings[i].id, details)
                        : addSettings(details)
                );
            }
        }
        if (promises.length) {
            Promise.all(promises).then(
                (results: PlaceSettings[]) => {
                    for (const result of results) {
                        this.saving[result.encryption_level] = false;
                        this.settings[result.encryption_level] = result;
                    }
                    notifySuccess('Successfully saved all settings.');
                    this.used_settings = this.processSettings(
                        this.settings || []
                    );
                    this.initForm();
                },
                (err) => {
                    for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
                        this.saving[i] = false;
                    }
                    notifyError(
                        `Error updating settings. Error: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    );
                }
            );
        }
    }

    public clearChanges() {
        if (this.edited_count < 1) {
            return;
        }
        this.used_settings = this.processSettings(this.settings || []);
        this.initForm();
    }

    private initForm() {
        this.form = new UntypedFormGroup({
            settings0: new UntypedFormControl(this.used_settings[0].settings_string, [
                validateYAML,
            ]),
            settings1: new UntypedFormControl(this.used_settings[1].settings_string, [
                validateYAML,
            ]),
            settings2: new UntypedFormControl(this.used_settings[2].settings_string, [
                validateYAML,
            ]),
            settings3: new UntypedFormControl(this.used_settings[3].settings_string, [
                validateYAML,
            ]),
            settings4: new UntypedFormControl(this.used_settings[4].settings_string, [
                validateYAML,
            ]),
        });
    }

    private processSettings(settings: PlaceSettings[]): PlaceSettings[] {
        const processed_settings = [];
        for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
            processed_settings.push(this.processSetting(settings[i]));
        }
        processed_settings.push(
            this.merge
                ? this.generateMergedSettings(processed_settings)
                : settings[3]
        );
        return processed_settings;
    }

    private processSetting(setting: PlaceSettings): PlaceSettings {
        if (
            (setting.encryption_level === EncryptionLevel.Admin &&
                !this.is_admin) ||
            (setting.encryption_level === EncryptionLevel.Support &&
                !this.is_support) ||
            setting.encryption_level === EncryptionLevel.NeverDisplay
        ) {
            const obj = {};
            for (const key of setting.keys) {
                obj[key] = '<MASKED>';
            }
            const settings_string = (setting.keys || []).length
                ? yaml.safeDump(obj)
                : '';
            return new PlaceSettings({
                ...setting,
                parent_id: this.id,
                settings_string,
            });
        }
        return new PlaceSettings({ ...setting, parent_id: this.id });
    }

    /** Genereate merged settings from all available settings */
    private generateMergedSettings(
        settings: PlaceSettings[] = []
    ): PlaceSettings {
        const merge_settings =
            this.merge_settings?.filter((item) => item.parent_id !== this.id) ||
            [];
        const local_settings = (settings || []).map((item) => {
            let obj = {};
            try {
                obj = yaml.safeLoad(item.settings_string) || {};
            } catch (err) {
                for (const key of item.keys) {
                    obj[key] = '<MASKED>';
                }
            }
            return obj;
        });
        const remote_settings = merge_settings.map((item) => {
            let obj = {};
            try {
                obj = yaml.safeLoad(item.settings_string) || {};
            } catch (err) {
                for (const key of item.keys) {
                    obj[key] = '<MASKED>';
                }
            }
            return obj;
        });
        const merged_settings = remote_settings
            .concat(local_settings)
            .reduce((m, i) => ({ ...m, ...i }), {});
        const settings_string = Object.keys(merged_settings).length
            ? yaml.safeDump(merged_settings, { strict: true })
            : '';
        this.merge_decorations = this.decorationForSettings(
            settings_string,
            merge_settings.concat(settings),
            remote_settings.concat(local_settings)
        );
        return new PlaceSettings({
            id: 'merged',
            settings_string,
            parent_id: this.id,
            keys: Object.keys(merged_settings),
        });
    }

    private decorationForSettings(
        display: string,
        settings: PlaceSettings[],
        setting_maps: HashMap[]
    ) {
        const decorations: HashMap = {};
        for (let i = 0; i < settings.length; i++) {
            const type = Math.max(-1, i - (settings.length - 4));
            this.decorationsForObject(
                decorations,
                setting_maps[i],
                display,
                settings[i],
                type
            );
        }
        return Object.keys(decorations).map((i) => decorations[i]);
    }

    private decorationsForObject(
        decorations: HashMap,
        obj: HashMap,
        display: string,
        settings: PlaceSettings,
        type: number,
        prefix: string = '',
        level: number = 0
    ) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const field = `${prefix}${key}`;
                decorations[field] = {
                    options: {
                        linesDecorationsClassName: `${
                            MAPPING_CLASS[type + 1]
                        }-margin`,
                        inlineClassName: MAPPING_CLASS[type + 1],
                        hoverMessage: {
                            value: this.generateHoverMessage(type, settings),
                            isTrusted: true,
                        },
                    },
                    range: calcRangeOfStringInText(
                        `${whiteSpace(level * 2)}${key}:`,
                        display,
                        level * 2
                    ),
                };
                if (obj[key] instanceof Object) {
                    this.decorationsForObject(
                        decorations,
                        obj[key],
                        display,
                        settings,
                        type,
                        `${field}.`,
                        level + 1
                    );
                }
            }
        }
    }

    private generateHoverMessage(type: number, settings: PlaceSettings) {
        if (type === -1) {
            return `Setting inherited from [${settings.parent_id}](${itemUrl(
                settings.parent_id
            )})(${ENCRYPTION_STRINGS[settings.encryption_level]})`;
        } else {
            return `Local setting from ${
                ENCRYPTION_STRINGS[settings.encryption_level]
            }`;
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
const ENCRYPTION_STRINGS = ['Unencrypted', 'Support', 'Admin', 'Encrypted'];

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
function calcRangeOfStringInText(
    find: string,
    in_text: string,
    index: number = 0
) {
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
