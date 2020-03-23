import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EngineSettings, EngineUser, EncryptionLevel } from '@placeos/ts-client';

import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { validateYAML } from 'src/app/shared/utilities/data/systems.utilities';

import * as yaml from 'js-yaml';
import * as merge from 'deepmerge';

@Component({
    selector: 'a-settings-form',
    templateUrl: './settings-form.component.html',
    styleUrls: ['./settings-form.component.scss']
})
export class SettingsFormComponent extends BaseDirective implements OnChanges, OnInit {
    /** ID of the parent object */
    @Input() id: string;
    /** List of settings for the  */
    @Input() settings: [EngineSettings, EngineSettings, EngineSettings, EngineSettings];
    /** Whether to display merged settings */
    @Input() merge: boolean;
    /** List of settings to merge into the main settings */
    @Input() merge_settings: EngineSettings[];
    /** Form fields for settings */
    public form: FormGroup;
    /** Whether a setting is being saved */
    public saving: [boolean, boolean, boolean, boolean] = [false, false, false, false];
    /** Currently displayed encryption level */
    public encryption_level: EncryptionLevel;
    /** Settings available to display on the UI */
    public used_settings: EngineSettings[] = [];
    /** List of available settings to view */
    public available_levels = this.levels;

    /** Current user */
    public get user(): EngineUser {
        return this._service.Users.user.getValue();
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
    public get shown_option(): Identity {
        return this.available_levels.find(i => i.id === this.encryption_level);
    }

    /** Whether the currently active settings have been edited */
    public get active_edited(): boolean {
        return (
            this.used_settings &&
            this.used_settings[this.encryption_level] &&
            this.used_settings[this.encryption_level].changes &&
            this.used_settings[this.encryption_level].changes.settings_string !== undefined
        );
    }

    /** Number of settings blocks edited */
    public get edited_count(): number {
        let count = 0;
        for (const setting of this.used_settings) {
            if (setting.changes.settings_string !== undefined) {
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
    public get levels(): Identity[] {
        const levels: Identity[] = [
            { id: EncryptionLevel.None, name: 'Unencrypted', active: true },
            {
                id: EncryptionLevel.Support,
                name: 'Support',
                active: this.is_support
            },
            { id: EncryptionLevel.Admin, name: 'Admin', active: this.is_admin },
            { id: EncryptionLevel.NeverDisplay, name: 'Encrypted', active: this.is_admin }
        ];
        if (this.merge) {
            levels.unshift({ id: EncryptionLevel.NeverDisplay + 1, name: 'Merged' });
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

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'save_all',
            this._service.Hotkeys.listen(['KeyA'], () => this.saveAll())
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.merge) {
            this.encryption_level = this.merge
                ? EncryptionLevel.NeverDisplay
                : EncryptionLevel.None;
            this.available_levels = this.levels;
        }
        if (changes.settings) {
            this.used_settings = this.processSettings(this.settings || []);
            this.initForm();
        }
    }

    /** Save changes to the given setting level */
    public save(level: EncryptionLevel) {
        const item = this.used_settings[level];
        if (
            item &&
            !this.saving[level] &&
            item.changes &&
            item.changes.settings_string !== undefined
        ) {
            this.saving[level] = true;
            item.save().then(
                (new_settings: EngineSettings) => {
                    this.saving[level] = false;
                    this.settings[level] = new_settings;
                    this._service.notifySuccess(`Successfully saved ${this.type(level)} settings.`);
                    this.used_settings = this.processSettings(this.settings || []);
                    this.initForm();
                },
                err => {
                    this.saving[level] = false;
                    this._service.notifyError(
                        `Error updating settings. Error: ${err.message || err}`
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
            if (
                this.settings[i] &&
                !this.saving[i] &&
                Object.keys(this.used_settings[i].changes || {}).length
            ) {
                this.saving[i] = true;
                promises.push(this.used_settings[i].save());
            }
        }
        if (promises.length) {
            Promise.all(promises).then(
                (results: EngineSettings[]) => {
                    for (const result of results) {
                        this.saving[result.encryption_level] = false;
                        this.settings[result.encryption_level] = result;
                    }
                    this._service.notifySuccess('Successfully saved all settings.');
                    this.used_settings = this.processSettings(this.settings || []);
                    this.initForm();
                },
                err => {
                    for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
                        this.saving[i] = false;
                    }
                    this._service.notifyError(
                        `Error updating settings. Error: ${err.message || err}`
                    );
                }
            );
        }
    }

    private initForm() {
        this.form = new FormGroup({
            settings0: new FormControl(this.used_settings[0].settings_string, [validateYAML]),
            settings1: new FormControl(this.used_settings[1].settings_string, [validateYAML]),
            settings2: new FormControl(this.used_settings[2].settings_string, [validateYAML]),
            settings3: new FormControl(this.used_settings[3].settings_string, [validateYAML]),
            settings4: new FormControl(this.used_settings[4].settings_string, [validateYAML])
        });
        for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
            this.subscription(
                `setting_change_${i}`,
                this.form.controls[`settings${i}`].valueChanges.subscribe(value => {
                    this.used_settings[i].storePendingChange('settings_string', value);
                })
            );
        }
    }

    private processSettings(settings: EngineSettings[]): EngineSettings[] {
        const processed_settings = [];
        for (let i = 0; i < EncryptionLevel.NeverDisplay + 1; i++) {
            processed_settings.push(this.processSetting(settings[i]));
        }
        processed_settings.push(
            this.merge ? this.generateMergedSettings(processed_settings) : settings[3]
        );
        return processed_settings;
    }

    private processSetting(setting: EngineSettings): EngineSettings {
        if (
            (setting.encryption_level === EncryptionLevel.Admin && !this.is_admin) ||
            (setting.encryption_level === EncryptionLevel.Support && !this.is_support) ||
            setting.encryption_level === EncryptionLevel.NeverDisplay
        ) {
            const obj = {};
            for (const key of setting.keys) {
                obj[key] = '<MASKED>';
            }
            return new EngineSettings(this._service.EngineSettings, {
                ...setting.toJSON(),
                parent_id: this.id,
                settings_string: yaml.safeDump(obj)
            });
        }
        return new EngineSettings(this._service.EngineSettings, { ...setting, parent_id: this.id });
    }

    /** Genereate merged settings from all available settings */
    private generateMergedSettings(settings: EngineSettings[]): EngineSettings {
        const local_settings = (settings || []).map(
            item => yaml.safeLoad(item.settings_string) || {}
        );
        const remote_settings = (this.merge_settings || []).map(
            item => yaml.safeLoad(item.settings_string) || {}
        );
        const merged_settings = merge.all(remote_settings.concat(local_settings));
        return new EngineSettings(null, {
            settings_string: yaml.safeDump(merged_settings, { strict: true }),
            parent_id: this.id,
            keys: Object.keys(merged_settings)
        });
    }
}
