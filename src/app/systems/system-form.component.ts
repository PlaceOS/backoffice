import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    computed,
    effect,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { form, FormField, submit } from '@angular/forms/signals';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    addSettings,
    addSystem,
    cleanObject,
    EncryptionLevel,
    PlaceResource,
    PlaceSettings,
    PlaceSystem,
    queryZones,
    updateSystem,
} from '@placeos/ts-client';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncHandler } from '../common/async-handler.class';
import {
    addSignalChipItem,
    getInvalidSignalFields,
    removeSignalChipItem,
} from '../common/forms';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { TIMEZONES_IANA } from '../common/timezones';
import { DialogEvent, Identity } from '../common/types';

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
                                [class.error]="
                                    form.zone().invalid() &&
                                    form.zone().touched()
                                "
                            >
                                {{ 'ZONES.SINGULAR' | translate }}<span>*</span>
                            </label>
                            <item-search-field
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        placeholder="System Name"
                                        [formField]="form.name"
                                    />
                                    @if (form.name().invalid()) {
                                        <mat-error>{{
                                            'SYSTEMS.NAME_REQUIRED' | translate
                                        }}</mat-error>
                                    }
                                </mat-form-field>
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
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'COMMON.FIELD_EMAIL' | translate
                                        "
                                        [formField]="form.email"
                                    />
                                    @if (form.email().invalid()) {
                                        <mat-error>{{
                                            'SYSTEMS.EMAIL_REQUIRED' | translate
                                        }}</mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.display_name) {
                            <div class="field">
                                <label for="display-name">
                                    {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'SYSTEMS.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.code) {
                            <div class="field">
                                <label for="code-name"
                                    >{{ 'SYSTEMS.CODE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'SYSTEMS.CODE' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'SYSTEMS.SUPPORT_URL' | translate
                                    "
                                    [formField]="form.support_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        @if (form.installed_ui_devices) {
                            <div class="field">
                                <label
                                    for="ui-devices"
                                    [class.error]="
                                        form.installed_ui_devices().invalid() &&
                                        form.installed_ui_devices().touched()
                                    "
                                >
                                    {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                                </label>
                                <a-counter
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
                                    [class.error]="
                                        form.capacity().invalid() &&
                                        form.capacity().touched()
                                    "
                                >
                                    {{ 'SYSTEMS.CAPACITY' | translate }}
                                </label>
                                <a-counter
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #chipList
                                    aria-label="Image List"
                                >
                                    @for (item of feature_list(); track item) {
                                        <mat-chip-row
                                            (removed)="removeFeature(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'SYSTEMS.REMOVE_ITEM'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="feature-list"
                                    [placeholder]="
                                        'SYSTEMS.FEATURES' | translate
                                    "
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addFeature($event)"
                                />
                            </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #securityGroupChipList
                                    aria-label="Security Group List"
                                >
                                    @for (
                                        item of security_group_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="
                                                removeSecurityGroup(item)
                                            "
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'SYSTEMS.REMOVE_ITEM'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="security-group-list"
                                    [placeholder]="
                                        'SYSTEMS.SECURITY_GROUPS' | translate
                                    "
                                    [matChipInputFor]="securityGroupChipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addSecurityGroup($event)
                                    "
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.map_id) {
                        <div class="field">
                            <label for="map_id">{{
                                'SYSTEMS.MAP_ID' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    placeholder="Map SVG ID selector e.g. area-01.10-status"
                                    [formField]="form.map_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    <div class="field">
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <div class="prefix" matPrefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                            <input
                                matInput
                                [formField]="form.timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of filtered_timezones(); track tz) {
                                <mat-option [value]="tz">
                                    {{ tz }}
                                </mat-option>
                            }
                            @if (!filtered_timezones().length) {
                                <mat-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                    @if (form.images) {
                        <div class="field">
                            <label for="images">{{
                                'COMMON.IMAGES' | translate
                            }}</label>
                            <image-list-field [formField]="form.images" />
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'SYSTEMS.TIMETABLE_URL' | translate
                                    "
                                    [formField]="form.timetable_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_URL' | translate
                                    "
                                    [formField]="form.camera_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
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
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid
                                    #cameraSnapshotChipList
                                    aria-label="Camera Snapshot URL List"
                                >
                                    @for (
                                        item of camera_snapshot_url_list();
                                        track item
                                    ) {
                                        <mat-chip-row
                                            (removed)="
                                                removeCameraSnapshotUrl(item)
                                            "
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                type="button"
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'SYSTEMS.REMOVE_ITEM'
                                                        | translate
                                                            : { item: item }
                                                "
                                            >
                                                <icon>cancel</icon>
                                            </button>
                                        </mat-chip-row>
                                    }
                                </mat-chip-grid>
                                <input
                                    id="camera-snap-url"
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_SNAPSHOT_URL'
                                            | translate
                                    "
                                    [matChipInputFor]="cameraSnapshotChipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="
                                        addCameraSnapshotUrl($event)
                                    "
                                />
                                @if (form.camera_snapshot_urls().invalid()) {
                                    <mat-error>
                                        {{ 'SYSTEMS.URL_VALID' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
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
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'SYSTEMS.ROOM_BOOKING_URL' | translate
                                    "
                                    [formField]="form.room_booking_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [
        `
            mat-checkbox {
                margin-top: 2.5em;
                margin-bottom: 1.5em;
            }

            @media screen and (max-width: 640px) {
                mat-checkbox {
                    margin-top: 0;
                }
            }
        `,
    ],
    imports: [
        ImageListFieldComponent,
        FormField,
        TranslatePipe,
        MatFormFieldModule,
        MatInputModule,
        IconComponent,
        MatChipsModule,
        SettingsToggleComponent,
        CounterComponent,
        ItemSearchFieldComponent,
        MatAutocompleteModule,
        FullscreenModalShellComponent,
    ],
})
export class SystemFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<SystemFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceSystem; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private readonly _name = 'SYSTEMS';
    private _hotkey = inject(HotkeysService);
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
    public feature_list = computed(() => this.formModel().features || []);
    public camera_snapshot_url_list = computed(
        () => this.formModel().camera_snapshot_urls || [],
    );
    public security_group_list = computed(
        () => this.formModel().security_groups || [],
    );

    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).then((resp) => resp.data);
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    private _timezone = computed(() => this.formModel().timezone || '');
    public filtered_timezones = computed(() =>
        this.timezones.filter((_tz) =>
            _tz.toLowerCase().includes(this._timezone().toLowerCase()),
        ),
    );

    constructor() {
        super();
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

    public ngOnInit(): void {
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item = this._data.item as unknown as PlaceResource;
            this.loading.set(i18n(`${this._name}.SAVING`));
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            // `zone` is UI-only; the backend uses `zones`, which the effect
            // keeps in sync. Strip it so we never POST `zone: null`.
            const { zone: _zone, ...form_value } = this.formModel();
            const form_item = (
                item.id
                    ? cleanObject({ ...item_json, ...form_value }, [undefined])
                    : { ...item_json, ...form_value }
            ) as Identity;
            const processed_item = {
                ...form_item,
                support_url: this.processURL(
                    form_item as unknown as PlaceSystem,
                    (form_item as Identity & { support_url?: string })
                        .support_url || '',
                ),
            };
            try {
                const _item = await (processed_item.id
                    ? updateSystem(
                          processed_item.id as string,
                          processed_item as unknown as PlaceSystem,
                      )
                    : addSystem(processed_item as unknown as PlaceSystem));
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                this._dialog_ref.close();
            } catch (err) {
                this.loading.set(null);
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

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings).catch((err) => {
            this.loading.set(null);
            notifyError(
                `Error saving settings for ${
                    item.name || item.id
                }. Error: ${JSON.stringify(
                    err.response || err.message || err,
                )}`,
            );
        });
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addFeature(event: MatChipInputEvent): void {
        this.formModel.update((value) => ({
            ...value,
            features: addSignalChipItem(value.features, event),
        }));
    }

    /**
     * Remove feature from the list
     * @param existing_feature Feature to remove
     */
    public removeFeature(existing_feature: string): void {
        this.formModel.update((value) => ({
            ...value,
            features: removeSignalChipItem(value.features, existing_feature),
        }));
    }

    public addCameraSnapshotUrl(event: MatChipInputEvent): void {
        this.formModel.update((value) => ({
            ...value,
            camera_snapshot_urls: addSignalChipItem(
                value.camera_snapshot_urls,
                event,
            ),
        }));
    }

    public removeCameraSnapshotUrl(url: string): void {
        this.formModel.update((value) => ({
            ...value,
            camera_snapshot_urls: removeSignalChipItem(
                value.camera_snapshot_urls,
                url,
            ),
        }));
    }

    public addSecurityGroup(event: MatChipInputEvent): void {
        this.formModel.update((value) => ({
            ...value,
            security_groups: addSignalChipItem(value.security_groups, event),
        }));
    }

    public removeSecurityGroup(group: string): void {
        this.formModel.update((value) => ({
            ...value,
            security_groups: removeSignalChipItem(value.security_groups, group),
        }));
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
