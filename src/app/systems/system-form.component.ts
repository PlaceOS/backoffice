import {
    Component,
    computed,
    effect,
    EventEmitter,
    inject,
    Output,
    signal,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import {
    addSystem,
    PlaceResource,
    PlaceSystem,
    updateSystem,
} from '@placeos/ts-client';
import { querySupportZones as queryZones } from '../common/support-access';

import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { TIMEZONES_IANA } from '../common/timezones';
import { DialogEvent } from '../common/types';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
    AutocompleteComponent,
    AutocompleteTriggerDirective,
} from '../ui/controls/autocomplete.component';
import { ChipListComponent } from '../ui/controls/chip-list.component';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { OptionComponent } from '../ui/controls/option.component';
import { CounterComponent } from '../ui/counter.component';
import { ImageListFieldComponent } from '../ui/custom-fields/image-list-field.component';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    applySystemFormSchema,
    generateSystemFormModel,
} from './systems.utilities';

/** Most timezone options to render. Typing narrows the full list. */
const TIMEZONE_OPTION_LIMIT = 50;

@Component({
    selector: 'system-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form system class="flex w-full flex-col">
                    @if (form.zone && !item().id) {
                        <div class="field">
                            <label
                                for="zone"
                                id="zone-label"
                                [class.error]="
                                    form.zone().invalid() &&
                                    form.zone().touched()
                                "
                            >
                                {{ 'ZONES.SINGULAR' | translate }}<span>*</span>
                            </label>
                            <item-search-field
                                id="zone"
                                role="group"
                                aria-labelledby="zone-label"
                                [query_fn]="query_fn"
                                [formField]="form.zone"
                            />
                            @if (
                                form.zone().invalid() && form.zone().touched()
                            ) {
                                <div class="error">
                                    {{ 'SYSTEMS.ZONE_REQUIRED' | translate }}
                                </div>
                            }
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="system-name"
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
                                        id="system-name"
                                        placeholder="System Name"
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <div error>
                                            {{
                                                'SYSTEMS.NAME_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                </app-form-field>
                            </div>
                        }
                        @if (form.email) {
                            <div class="field">
                                <label
                                    for="system-email"
                                    [class.error]="
                                        form.email().invalid() &&
                                        form.email().touched()
                                    "
                                >
                                    {{ 'COMMON.FIELD_EMAIL' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="system-email"
                                        [placeholder]="
                                            'COMMON.FIELD_EMAIL' | translate
                                        "
                                        [formField]="form.email"
                                    />
                                    @if (form.email().invalid()) {
                                        <div error>
                                            {{
                                                'SYSTEMS.EMAIL_REQUIRED'
                                                    | translate
                                            }}
                                        </div>
                                    }
                                </app-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.display_name) {
                            <div class="field">
                                <label for="display-name">
                                    {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="display-name"
                                        [placeholder]="
                                            'SYSTEMS.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.code) {
                            <div class="field">
                                <label for="code-name"
                                    >{{ 'SYSTEMS.CODE' | translate }}
                                </label>
                                <app-form-field>
                                    <input
                                        id="code-name"
                                        [placeholder]="
                                            'SYSTEMS.CODE' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </app-form-field>
                            </div>
                        }
                    </div>
                    @if (form.support_url) {
                        <div class="field">
                            <label
                                for="support-url"
                                [class.error]="
                                    form.support_url().invalid() &&
                                    form.support_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="support-url"
                                    [placeholder]="
                                        'SYSTEMS.SUPPORT_URL' | translate
                                    "
                                    [formField]="form.support_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        @if (form.installed_ui_devices) {
                            <div class="field">
                                <label
                                    for="ui-devices"
                                    id="ui-devices-label"
                                    [class.error]="
                                        form.installed_ui_devices().invalid() &&
                                        form.installed_ui_devices().touched()
                                    "
                                >
                                    {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                                </label>
                                <a-counter
                                    id="ui-devices"
                                    role="group"
                                    aria-labelledby="ui-devices-label"
                                    [formField]="form.installed_ui_devices"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                        @if (form.capacity) {
                            <div class="field">
                                <label
                                    for="capacity"
                                    id="capacity-label"
                                    [class.error]="
                                        form.capacity().invalid() &&
                                        form.capacity().touched()
                                    "
                                >
                                    {{ 'SYSTEMS.CAPACITY' | translate }}
                                </label>
                                <a-counter
                                    id="capacity"
                                    role="group"
                                    aria-labelledby="capacity-label"
                                    [formField]="form.capacity"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex items-center space-x-4">
                        <settings-toggle
                            [label]="'SYSTEMS.BOOKABLE' | translate"
                            class="flex-1"
                            [formField]="form.bookable"
                        />
                        <settings-toggle
                            [label]="'SYSTEMS.SIGNAGE' | translate"
                            class="flex-1"
                            [formField]="form.signage"
                        />
                        <settings-toggle
                            [label]="'SYSTEMS.PUBLIC' | translate"
                            class="flex-1"
                            [formField]="form.public"
                        />
                    </div>
                    @if (form.description) {
                        <div class="field">
                            <label for="description">
                                {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                            </label>
                            <app-form-field>
                                <textarea
                                    id="description"
                                    [placeholder]="
                                        'COMMON.FIELD_DESCRIPTION' | translate
                                    "
                                    [formField]="form.description"
                                ></textarea>
                            </app-form-field>
                        </div>
                    }
                    @if (form.features) {
                        <div class="field">
                            <label
                                for="feature-list"
                                [class.error]="
                                    form.features().invalid() &&
                                    form.features().touched()
                                "
                            >
                                {{ 'SYSTEMS.FEATURES' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="feature-list"
                                    [attr.aria-label]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                    [placeholder]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.features"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.security_groups) {
                        <div class="field">
                            <label
                                for="security-group-list"
                                [class.error]="
                                    form.security_groups().invalid() &&
                                    form.security_groups().touched()
                                "
                            >
                                {{ 'SYSTEMS.SECURITY_GROUPS' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="security-group-list"
                                    aria-label="Security Group List"
                                    [placeholder]="
                                        'SYSTEMS.SECURITY_GROUPS' | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.security_groups"
                                />
                            </app-form-field>
                        </div>
                    }
                    @if (form.map_id) {
                        <div class="field">
                            <label for="map_id">{{
                                'SYSTEMS.MAP_ID' | translate
                            }}</label>
                            <app-form-field>
                                <input
                                    id="map_id"
                                    placeholder="Map SVG ID selector e.g. area-01.10-status"
                                    [formField]="form.map_id"
                                />
                            </app-form-field>
                        </div>
                    }
                    <div class="field">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <app-form-field>
                            <div class="prefix" prefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                            <input
                                id="timezone"
                                [formField]="form.timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [appAutocomplete]="auto"
                            />
                        </app-form-field>
                        <app-autocomplete #auto="appAutocomplete">
                            @for (tz of filtered_timezones(); track tz) {
                                <app-option [value]="tz">
                                    {{ tz }}
                                </app-option>
                            }
                            @if (!filtered_timezones().length) {
                                <app-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </app-option>
                            }
                        </app-autocomplete>
                    </div>
                    @if (form.images) {
                        <div class="field">
                            <label for="images" id="images-label">{{
                                'COMMON.IMAGES' | translate
                            }}</label>
                            <image-list-field
                                id="images"
                                role="group"
                                aria-labelledby="images-label"
                                [formField]="form.images"
                            />
                        </div>
                    }
                    @if (form.timetable_url) {
                        <div class="field">
                            <label
                                for="timetable-url"
                                [class.error]="
                                    form.timetable_url().invalid() &&
                                    form.timetable_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.TIMETABLE_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="timetable-url"
                                    [placeholder]="
                                        'SYSTEMS.TIMETABLE_URL' | translate
                                    "
                                    [formField]="form.timetable_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (form.camera_url) {
                        <div class="field">
                            <label
                                for="camera-url"
                                [class.error]="
                                    form.camera_url().invalid() &&
                                    form.camera_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.CAMERA_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="camera-url"
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_URL' | translate
                                    "
                                    [formField]="form.camera_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                    @if (form.camera_snapshot_urls) {
                        <div class="field">
                            <label
                                for="camera-snap-url"
                                [class.error]="
                                    form.camera_snapshot_urls().invalid() &&
                                    form.camera_snapshot_urls().touched()
                                "
                            >
                                {{ 'SYSTEMS.CAMERA_SNAPSHOT_URL' | translate }}
                            </label>
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="camera-snap-url"
                                    aria-label="Camera Snapshot URL List"
                                    editable
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_SNAPSHOT_URL'
                                            | translate
                                    "
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.camera_snapshot_urls"
                                />
                                @if (form.camera_snapshot_urls().invalid()) {
                                    <div error>
                                        {{ 'SYSTEMS.URL_VALID' | translate }}
                                    </div>
                                }
                            </app-form-field>
                        </div>
                    }
                    @if (form.room_booking_url) {
                        <div class="field">
                            <label
                                for="room-booking-url"
                                [class.error]="
                                    form.room_booking_url().invalid() &&
                                    form.room_booking_url().touched()
                                "
                            >
                                {{ 'SYSTEMS.ROOM_BOOKING_URL' | translate }}
                            </label>
                            <app-form-field>
                                <input
                                    id="room-booking-url"
                                    [placeholder]="
                                        'SYSTEMS.ROOM_BOOKING_URL' | translate
                                    "
                                    [formField]="form.room_booking_url"
                                />
                                <div error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </div>
                            </app-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    imports: [
        OptionComponent,
        FormFieldComponent,
        ImageListFieldComponent,
        FormField,
        TranslatePipe,
        IconComponent,
        ChipListComponent,
        SettingsToggleComponent,
        CounterComponent,
        ItemSearchFieldComponent,
        AutocompleteComponent,
        AutocompleteTriggerDirective,
        FullscreenModalShellComponent,
    ],
})
export class SystemFormComponent {
    private _dialog_ref =
        inject<DialogRef<unknown, SystemFormComponent>>(DialogRef);
    private _data = inject<{ item: PlaceSystem; readonly?: string }>(
        DIALOG_DATA,
    );
    private readonly _name = 'SYSTEMS';
    public readonly item = signal(this._data.item);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly timezones = TIMEZONES_IANA;
    public readonly formModel = signal(
        generateSystemFormModel(this._data.item),
    );
    public readonly form = form(this.formModel, applySystemFormSchema);
    public readonly loading = signal<string | null>(null);
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );

    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).then((resp) => resp.data);

    private _timezone = computed(() => this.formModel().timezone || '');
    public filtered_timezones = computed(() => {
        const search = this._timezone().toLowerCase();
        return this.timezones
            .filter((_tz) => _tz.toLowerCase().includes(search))
            .slice(0, TIMEZONE_OPTION_LIMIT);
    });

    constructor() {
        onSaveHotkey(() => this.submit());
        effect(() => {
            const model = this.formModel();
            const zone = model.zone;
            if (
                zone?.id &&
                (model.zones.length !== 1 || model.zones[0] !== zone.id)
            ) {
                this.formModel.update((value) => ({
                    ...value,
                    zones: [zone.id],
                }));
            }
        });
    }

    public async submit(): Promise<void> {
        if (this.loading()) return;
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}.`,
            () => {
                // `zone` is UI-only; the backend uses `zones`, which the effect
                // keeps in sync. Strip it so we never POST `zone: null`.
                const { zone: _zone, ...form_value } = this.formModel();
                const form_item = mergeFormItem(
                    this._data.item as unknown as PlaceResource,
                    form_value,
                ) as unknown as PlaceSystem;
                const processed_item = {
                    ...form_item,
                    support_url: this.processURL(
                        form_item,
                        form_item.support_url || '',
                    ),
                } as unknown as PlaceSystem;
                return processed_item.id
                    ? updateSystem(processed_item.id, processed_item)
                    : addSystem(processed_item);
            },
        );
    }

    private processURL(system: PlaceSystem, url: string): string {
        for (const key in system) {
            url = url.replace(
                new RegExp(`{{${key}}}`, 'g'),
                `${(system as unknown as Record<string, unknown>)[key]}`,
            );
        }
        url = url.replace(new RegExp(`{{origin}}`, 'g'), location.origin);
        url = url.replace(new RegExp(`{{host}}`, 'g'), location.host);
        url = url.replace(new RegExp(`{{pathname}}`, 'g'), location.pathname);
        return url;
    }
}
