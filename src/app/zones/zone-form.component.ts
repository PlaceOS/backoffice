import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    computed,
    inject,
} from '@angular/core';
import {
    FormControl,
    ReactiveFormsModule,
    UntypedFormGroup,
} from '@angular/forms';
import {
    EncryptionLevel,
    PlaceSettings,
    PlaceZone,
    addSettings,
    addZone as addZoneRequest,
    cleanObject,
    queryZones,
    showZone,
    updateZone as updateZoneRequest,
} from '@placeos/ts-client';
import { toSignal } from '../common/signals';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { TranslatePipe } from '../ui/translate.pipe';
import { generateZoneFormFields } from './zones.utilites';

@Component({
    selector: 'zone-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form zone class="flex flex-col" [formGroup]="form">
                    @if (form.controls.parent_zone) {
                        <div class="field">
                            <label for="parent-zone">
                                {{ 'ZONES.PARENT' | translate }}
                            </label>
                            <item-search-field
                                [placeholder]="'ZONES.SEARCH' | translate"
                                [query_fn]="query_fn"
                                [exclude]="exclude"
                                formControlName="parent_zone"
                            ></item-search-field>
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.controls.name) {
                            <div class="field">
                                <label
                                    for="zone-name"
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
                                        name="zone-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        formControlName="name"
                                        required
                                    />
                                    <mat-error>{{
                                        'ZONES.NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.display_name) {
                            <div class="field">
                                <label
                                    for="zone-display"
                                    [class.error]="
                                        form.controls.display_name.invalid &&
                                        form.controls.display_name.touched
                                    "
                                >
                                    {{ 'ZONES.DISPLAY_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="zone-display"
                                        [placeholder]="
                                            'ZONES.DISPLAY_NAME' | translate
                                        "
                                        formControlName="display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.controls.tags) {
                        <div class="field">
                            <label
                                for="tags"
                                [class.error]="
                                    form.controls.tags.invalid &&
                                    form.controls.tags.touched
                                "
                            >
                                {{ 'ZONES.TAGS' | translate }}
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <mat-chip-grid #chipList aria-label="Tag List">
                                    @for (item of tag_list; track item) {
                                        <mat-chip-row
                                            (removed)="removeTag(item)"
                                        >
                                            <div class="max-w-md truncate">
                                                {{ item }}
                                            </div>
                                            <button
                                                matChipRemove
                                                [attr.aria-label]="
                                                    'COMMON.ITEM_REMOVE'
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
                                    id="tags"
                                    [placeholder]="'ZONES.TAGS' | translate"
                                    [matChipInputFor]="chipList"
                                    [matChipInputSeparatorKeyCodes]="separators"
                                    [matChipInputAddOnBlur]="true"
                                    (matChipInputTokenEnd)="addTag($event)"
                                />
                            </mat-form-field>
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
                    <div class="fieldset">
                        @if (form.controls.location) {
                            <div class="field">
                                <label for="location">{{
                                    'ZONES.LOCATION' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="location"
                                        [placeholder]="
                                            'ZONES.LOCATION_PLACEHOLDER'
                                                | translate
                                        "
                                        formControlName="location"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        <div class="field">
                            <label for="timezone">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <div class="prefix" matPrefix>
                                    <icon class="relative -left-0.5 text-2xl">
                                        search
                                    </icon>
                                </div>
                                <input
                                    matInput
                                    formControlName="timezone"
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [matAutocomplete]="auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #auto="matAutocomplete">
                                @for (tz of filtered_timezones(); track tz) {
                                    <mat-option [value]="tz">{{
                                        tz
                                    }}</mat-option>
                                }
                                @if (!timezones.length) {
                                    <mat-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                    </div>
                    <div class="fieldset">
                        @if (form.controls.code) {
                            <div class="field">
                                <label for="code">{{
                                    'ZONES.CODE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="code"
                                        [placeholder]="
                                            'ZONES.CODE_PLACEHOLDER' | translate
                                        "
                                        formControlName="code"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.controls.location) {
                            <div class="field">
                                <label for="type">{{
                                    'ZONES.TYPE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        name="type"
                                        [placeholder]="
                                            'ZONES.TYPE_PLACEHOLDER' | translate
                                        "
                                        formControlName="type"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset mb-4">
                        @if (form.controls.count) {
                            <div class="field">
                                <label for="count">{{
                                    'ZONES.COUNT' | translate
                                }}</label>
                                <a-counter
                                    formControlName="count"
                                    [min]="0"
                                    [max]="999"
                                ></a-counter>
                            </div>
                        }
                        @if (form.controls.capacity) {
                            <div class="field">
                                <label for="capacity">
                                    {{ 'ZONES.CAPACITY' | translate }}
                                </label>
                                <a-counter
                                    formControlName="capacity"
                                    [min]="0"
                                    [max]="999"
                                ></a-counter>
                            </div>
                        }
                    </div>
                    @if (form.controls.map_id) {
                        <div class="field">
                            <label for="map">{{
                                'ZONES.MAP_URL' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="map"
                                    [placeholder]="'ZONES.MAP_URL' | translate"
                                    formControlName="map_id"
                                />
                            </mat-form-field>
                        </div>
                    }
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
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        ImageListFieldComponent,
        ReactiveFormsModule,
        TranslatePipe,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        CounterComponent,
        MatAutocompleteModule,
        MatChipsModule,
        ItemSearchFieldComponent,
        FullscreenModalShellComponent,
    ],
})
export class ZoneFormComponent extends AsyncHandler implements OnInit {
    private _dialog_ref = inject<MatDialogRef<ZoneFormComponent>>(MatDialogRef);
    private _data = inject<{ item: PlaceZone; readonly?: string }>(
        MAT_DIALOG_DATA,
    );
    private _hotkey = inject(HotkeysService);
    private readonly _name = 'ZONES';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly form: UntypedFormGroup = generateZoneFormFields(
        this._data.item,
    );
    public readonly timezones = TIMEZONES_IANA as string[];
    public readonly timezone = toSignal(
        this.form.controls.timezone.valueChanges,
        {
            initialValue: `${this.form.value.timezone || ''}`,
        },
    );
    public readonly filtered_timezones = computed(() => {
        const search = this.timezone().toLowerCase();
        return this.timezones.filter((_tz) =>
            _tz.toLowerCase().includes(search),
        );
    });
    public loading: string;
    public readonly heading = i18n(
        `${this._name}.${this._data.item?.id ? 'EDIT' : 'NEW'}`,
    );

    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Query function for zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).then((resp) => resp.data as PlaceZone[]);
    /** Function to exclude zones */
    public readonly exclude = (zone: PlaceZone) =>
        zone.id === this.form.controls.id.value;

    public readonly addTag = (e: MatChipInputEvent) =>
        addChipItem(this.form.controls.tags as FormControl<string[]>, e);
    public readonly removeTag = (i: string) =>
        removeChipItem(this.form.controls.tags as FormControl<string[]>, i);

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

    public ngOnInit(): void {
        this.updateZone();
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const item: PlaceZone = this._data.item;
        this.loading = i18n(`${this._name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = item.toJSON ? item.toJSON() : item;
        const form_item = (
            item.id
                ? cleanObject({ ...item_json, ...this.form.value }, [undefined])
                : { ...item_json, ...this.form.value }
        ) as Identity;
        try {
            const _item = await (form_item.id
                ? updateZoneRequest(
                      form_item.id as string,
                      form_item as unknown as PlaceZone,
                  )
                : addZoneRequest(form_item as unknown as PlaceZone));
            this._dialog_ref.disableClose = false;
            this.event.emit({ reason: 'done', metadata: { item: _item } });
            notifySuccess(i18n(`${this._name}.SAVE_SUCCESS`));
            if (!this.form.value.id && this.form.controls.settings) {
                await this.newSettings(
                    _item as unknown as Identity,
                    this.form.controls.settings.value,
                );
            }
            this._dialog_ref.close();
        } catch (err) {
            this.loading = null;
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
    }

    /** Update parent zone details if set */
    private async updateZone() {
        const parent_id = this.form.controls.parent_id
            ? this.form.controls.parent_id.value
            : '';
        if (parent_id) {
            const zone = await showZone(parent_id);
            this.form.controls.parent_zone.setValue(zone);
        }
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        await addSettings(new_settings).catch((err) => {
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
}
