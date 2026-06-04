import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    Signal,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    EncryptionLevel,
    PlaceResource,
    PlaceSettings,
    PlaceSystem,
    addSettings,
    addSystem,
    cleanObject,
    queryZones,
    updateSystem,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncHandler } from '../common/async-handler.class';
import { addChipItem, removeChipItem } from '../common/forms';
import { getInvalidFields } from '../common/general';
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
import { generateSystemsFormFields } from './systems.utilities';

@Component({
    selector: 'system-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form system class="flex w-full flex-col" [formGroup]="form">
                    @if (form.controls.zone) {
                        <div class="field">
                            <label
                                for="zone"
                                [class.error]="
                                    form.controls.zone.invalid &&
                                    form.controls.zone.touched
                                "
                            >
                                {{ 'ZONES.SINGULAR' | translate }}<span>*</span>
                            </label>
                            <item-search-field
                                name="zone"
                                [query_fn]="query_fn"
                                formControlName="zone"
                            ></item-search-field>
                            @if (
                                form.controls.zone.invalid &&
                                form.controls.zone.touched
                            ) {
                                <div class="error">
                                    {{ 'SYSTEMS.ZONE_REQUIRED' | translate }}
                                </div>
                            }
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.controls.name) {
                            <div class="field">
                                <label
                                    for="system-name"
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
                                        name="system-name"
                                        placeholder="System Name"
                                        formControlName="name"
                                        required
                                    />
                                    @if (form.controls.name.invalid) {
                                        <mat-error>{{
                                            'SYSTEMS.NAME_REQUIRED' | translate
                                        }}</mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.email) {
                            <div class="field">
                                <label
                                    for="system-email"
                                    [class.error]="
                                        form.controls.email.invalid &&
                                        form.controls.email.touched
                                    "
                                >
                                    {{ 'COMMON.FIELD_EMAIL' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="system-email"
                                        [placeholder]="
                                            'COMMON.FIELD_EMAIL' | translate
                                        "
                                        formControlName="email"
                                    />
                                    @if (form.controls.email.invalid) {
                                        <mat-error>{{
                                            'SYSTEMS.EMAIL_REQUIRED' | translate
                                        }}</mat-error>
                                    }
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset">
                        @if (form.controls.display_name) {
                            <div class="field">
                                <label for="display-name">
                                    {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="display-name"
                                        [placeholder]="
                                            'SYSTEMS.DISPLAY_NAME' | translate
                                        "
                                        formControlName="display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.display_name) {
                            <div class="field">
                                <label for="code-name"
                                    >{{ 'SYSTEMS.CODE' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="code-name"
                                        [placeholder]="
                                            'SYSTEMS.CODE' | translate
                                        "
                                        formControlName="code"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.support_url) {
                        <div class="field">
                            <label
                                for="support-url"
                                [class.error]="
                                    form.controls.support_url.invalid &&
                                    form.controls.support_url.touched
                                "
                            >
                                {{ 'SYSTEMS.SUPPORT_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="support-url"
                                    [placeholder]="
                                        'SYSTEMS.SUPPORT_URL' | translate
                                    "
                                    formControlName="support_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    <div class="fieldset mb-4">
                        @if (form.controls.installed_ui_devices) {
                            <div class="field">
                                <label
                                    for="ui-devices"
                                    [class.error]="
                                        form.controls.installed_ui_devices
                                            .invalid &&
                                        form.controls.installed_ui_devices
                                            .touched
                                    "
                                >
                                    {{ 'SYSTEMS.PANEL_COUNT' | translate }}
                                </label>
                                <a-counter
                                    formControlName="installed_ui_devices"
                                    [min]="0"
                                    [max]="999"
                                ></a-counter>
                            </div>
                        }
                        @if (form.controls.capacity) {
                            <div class="field">
                                <label
                                    for="capacity"
                                    [class.error]="
                                        form.controls.capacity.invalid &&
                                        form.controls.capacity.touched
                                    "
                                >
                                    {{ 'SYSTEMS.CAPACITY' | translate }}
                                </label>
                                <a-counter
                                    formControlName="capacity"
                                    [min]="0"
                                    [max]="999"
                                ></a-counter>
                            </div>
                        }
                    </div>
                    <div class="mb-4 flex items-center space-x-4">
                        <settings-toggle
                            [name]="'SYSTEMS.BOOKABLE' | translate"
                            class="flex-1"
                            formControlName="bookable"
                        ></settings-toggle>
                        <settings-toggle
                            [name]="'SYSTEMS.SIGNAGE' | translate"
                            class="flex-1"
                            formControlName="signage"
                        ></settings-toggle>
                        <settings-toggle
                            [name]="'SYSTEMS.PUBLIC' | translate"
                            class="flex-1"
                            formControlName="public"
                        ></settings-toggle>
                    </div>
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
                    @if (form.controls.features) {
                        <div class="field">
                            <label
                                for="feature-list"
                                [class.error]="
                                    form.controls.features.invalid &&
                                    form.controls.features.touched
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
                    @if (form.controls.security_groups) {
                        <div class="field">
                            <label
                                for="security-group-list"
                                [class.error]="
                                    form.controls.security_groups.invalid &&
                                    form.controls.security_groups.touched
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
                                            (removed)="removeSecurityGroup(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
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
                    @if (form.controls.map_id) {
                        <div class="field">
                            <label for="map_id">{{
                                'SYSTEMS.MAP_ID' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="map_id"
                                    placeholder="Map SVG ID selector e.g. area-01.10-status"
                                    formControlName="map_id"
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
                                formControlName="timezone"
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
                    @if (form.controls.images) {
                        <div class="field">
                            <label for="images">{{
                                'COMMON.IMAGES' | translate
                            }}</label>
                            <image-list-field
                                name="images"
                                formControlName="images"
                            ></image-list-field>
                        </div>
                    }
                    @if (form.controls.timetable_url) {
                        <div class="field">
                            <label
                                for="timetable-url"
                                [class.error]="
                                    form.controls.timetable_url.invalid &&
                                    form.controls.timetable_url.touched
                                "
                            >
                                {{ 'SYSTEMS.TIMETABLE_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="timetable-url"
                                    [placeholder]="
                                        'SYSTEMS.TIMETABLE_URL' | translate
                                    "
                                    formControlName="timetable_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.camera_url) {
                        <div class="field">
                            <label
                                for="camera-url"
                                [class.error]="
                                    form.controls.camera_url.invalid &&
                                    form.controls.camera_url.touched
                                "
                            >
                                {{ 'SYSTEMS.CAMERA_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="camera-url"
                                    [placeholder]="
                                        'SYSTEMS.CAMERA_URL' | translate
                                    "
                                    formControlName="camera_url"
                                />
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.camera_snapshot_urls) {
                        <div class="field">
                            <label
                                for="camera-snap-url"
                                [class.error]="
                                    form.controls.camera_snapshot_urls
                                        .invalid &&
                                    form.controls.camera_snapshot_urls.touched
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
                                @if (
                                    form.controls.camera_snapshot_urls.invalid
                                ) {
                                    <mat-error>
                                        {{ 'SYSTEMS.URL_VALID' | translate }}
                                    </mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.room_booking_url) {
                        <div class="field">
                            <label
                                for="room-booking-url"
                                [class.error]="
                                    form.controls.room_booking_url.invalid &&
                                    form.controls.room_booking_url.touched
                                "
                            >
                                {{ 'SYSTEMS.ROOM_BOOKING_URL' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="room-booking-url"
                                    [placeholder]="
                                        'SYSTEMS.ROOM_BOOKING_URL' | translate
                                    "
                                    formControlName="room_booking_url"
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
        ReactiveFormsModule,
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

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly timezones = TIMEZONES_IANA;
    public form: UntypedFormGroup = generateSystemsFormFields(this._data.item);
    public loading: string;
    public heading = i18n(
        `${this._name}.${this._data.item.id ? 'EDIT' : 'NEW'}`,
    );
    public feature_list: Signal<string[]> = this.form.controls.features
        ? toSignal(this.form.controls.features.valueChanges, {
              initialValue: this.form.controls.features.value || [],
          })
        : signal([]);
    public camera_snapshot_url_list: Signal<string[]> = this.form.controls
        .camera_snapshot_urls
        ? toSignal(this.cameraSnapshotUrlsControl.valueChanges, {
              initialValue: this.cameraSnapshotUrlsControl.value || [],
          })
        : signal([]);
    public security_group_list: Signal<string[]> = this.form.controls
        .security_groups
        ? toSignal(this.securityGroupsControl.valueChanges, {
              initialValue: this.securityGroupsControl.value || [],
          })
        : signal([]);

    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    private _timezone: Signal<string> = toSignal(
        this.form.controls.timezone.valueChanges,
        {
            initialValue: this.form.controls.timezone.value || '',
        },
    );
    public filtered_timezones: Signal<string[]> = computed(() =>
        this.timezones.filter((_tz) =>
            _tz.toLowerCase().includes(this._timezone().toLowerCase()),
        ),
    );

    private get cameraSnapshotUrlsControl(): FormControl<string[]> {
        return this.form.controls.camera_snapshot_urls as FormControl<string[]>;
    }

    private get securityGroupsControl(): FormControl<string[]> {
        return this.form.controls.security_groups as FormControl<string[]>;
    }

    public ngOnInit(): void {
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
        const item = this._data.item as unknown as PlaceResource;
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        const processed_item = {
            ...form_item,
            support_url: this.processURL(
                form_item as unknown as PlaceSystem,
                (form_item as Identity & { support_url?: string }).support_url ||
                    '',
            ),
        };
        (processed_item.id
            ? updateSystem(
                  processed_item.id as string,
                  processed_item as unknown as PlaceSystem,
              )
            : addSystem(processed_item as unknown as PlaceSystem)
        ).subscribe(
            (_item) => {
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
                if (!this.form.value.id && this.form.controls.settings) {
                    this.newSettings(
                        _item as unknown as Identity,
                        this.form.controls.settings.value,
                    ).then(() => this._dialog_ref.close());
                } else {
                    this._dialog_ref.close();
                }
            },
            async (err) => {
                this.loading = null;
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

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings)
            .toPromise()
            .catch((err) => {
                this.loading = null;
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
        if (!this.form || !this.form.controls.features) return;
        const input = event.input;
        const value = event.value;
        const feature_list = [...this.feature_list()];
        if ((value || '').trim()) {
            feature_list.push(value);
            this.form.controls.features.setValue(feature_list);
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Remove feature from the list
     * @param existing_feature Feature to remove
     */
    public removeFeature(existing_feature: string): void {
        if (!this.form || !this.form.controls.features) return;
        const feature_list = [...this.feature_list()];
        const index = feature_list.indexOf(existing_feature);

        if (index >= 0) {
            feature_list.splice(index, 1);
            this.form.controls.features.setValue(feature_list);
        }
    }

    public addCameraSnapshotUrl(event: MatChipInputEvent): void {
        addChipItem(this.cameraSnapshotUrlsControl, event);
    }

    public removeCameraSnapshotUrl(url: string): void {
        removeChipItem(this.cameraSnapshotUrlsControl, url);
    }

    public addSecurityGroup(event: MatChipInputEvent): void {
        addChipItem(this.securityGroupsControl, event);
    }

    public removeSecurityGroup(group: string): void {
        removeChipItem(this.securityGroupsControl, group);
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
