import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    computed,
    effect,
    inject,
    signal,
} from '@angular/core';
import { FormField, form, submit } from '@angular/forms/signals';
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

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { TranslatePipe } from '../ui/translate.pipe';
import { applyZoneFormSchema, generateZoneFormModel } from './zones.utilites';

@Component({
    selector: 'zone-form',
    template: `
        <fullscreen-modal-shell
            [heading]="heading"
            [loading]="loading()"
            (save)="submit()"
        >
            @if (form) {
                <form zone class="flex flex-col">
                    @if (form.parent_zone) {
                        <div class="field">
                            <label for="parent-zone">
                                {{ 'ZONES.PARENT' | translate }}
                            </label>
                            <item-search-field
                                [placeholder]="'ZONES.SEARCH' | translate"
                                [query_fn]="query_fn"
                                [exclude]="exclude"
                                [formField]="form.parent_zone"
                            />
                        </div>
                    }
                    <div class="fieldset">
                        @if (form.name) {
                            <div class="field">
                                <label
                                    for="zone-name"
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
                                        'ZONES.NAME_REQUIRED' | translate
                                    }}</mat-error>
                                </mat-form-field>
                            </div>
                        }
                        @if (form.display_name) {
                            <div class="field">
                                <label
                                    for="zone-display"
                                    [class.error]="
                                        form.display_name().invalid() &&
                                        form.display_name().touched()
                                    "
                                >
                                    {{ 'ZONES.DISPLAY_NAME' | translate }}
                                </label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'ZONES.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    @if (form.tags) {
                        <div class="field">
                            <label
                                for="tags"
                                [class.error]="
                                    form.tags().invalid() &&
                                    form.tags().touched()
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
                                                type="button"
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
                    <div class="fieldset">
                        @if (form.location) {
                            <div class="field">
                                <label for="location">{{
                                    'ZONES.LOCATION' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'ZONES.LOCATION_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.location"
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
                                    [formField]="form.timezone"
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
                        @if (form.code) {
                            <div class="field">
                                <label for="code">{{
                                    'ZONES.CODE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'ZONES.CODE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @if (form.type) {
                            <div class="field">
                                <label for="type">{{
                                    'ZONES.TYPE' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
                                    <input
                                        matInput
                                        [placeholder]="
                                            'ZONES.TYPE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.type"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    </div>
                    <div class="fieldset mb-4">
                        @if (form.count) {
                            <div class="field">
                                <label for="count">{{
                                    'ZONES.COUNT' | translate
                                }}</label>
                                <a-counter
                                    [formField]="form.count"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                        @if (form.capacity) {
                            <div class="field">
                                <label for="capacity">
                                    {{ 'ZONES.CAPACITY' | translate }}
                                </label>
                                <a-counter
                                    [formField]="form.capacity"
                                    [min]="0"
                                    [max]="999"
                                />
                            </div>
                        }
                    </div>
                    @if (form.map_id) {
                        <div class="field">
                            <label for="map">{{
                                'ZONES.MAP_URL' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'ZONES.MAP_URL' | translate"
                                    [formField]="form.map_id"
                                />
                            </mat-form-field>
                        </div>
                    }
                    @if (form.images) {
                        <div class="field">
                            <label for="images">{{
                                'COMMON.IMAGES' | translate
                            }}</label>
                            <image-list-field [formField]="form.images" />
                        </div>
                    }
                </form>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        ImageListFieldComponent,
        FormField,
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

    public readonly formModel = signal(generateZoneFormModel(this._data.item));
    public readonly form = form(this.formModel, applyZoneFormSchema);
    public readonly timezones = TIMEZONES_IANA as string[];
    public readonly timezone = computed(
        () => `${this.formModel().timezone || ''}`,
    );
    public readonly filtered_timezones = computed(() => {
        const search = this.timezone().toLowerCase();
        return this.timezones.filter((_tz) =>
            _tz.toLowerCase().includes(search),
        );
    });
    public readonly loading = signal<string | null>(null);
    public readonly heading = i18n(
        `${this._name}.${this._data.item?.id ? 'EDIT' : 'NEW'}`,
    );

    constructor() {
        super();
        effect(() => {
            const parent_zone = this.formModel().parent_zone;
            const parent_id = parent_zone?.id || '';
            if (parent_id !== this.formModel().parent_id) {
                this.formModel.update((value) => ({ ...value, parent_id }));
            }
        });
    }

    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Query function for zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).then((resp) => resp.data as PlaceZone[]);
    /** Function to exclude zones */
    public readonly exclude = (zone: PlaceZone) =>
        zone.id === this.formModel().id;

    public readonly addTag = (e: MatChipInputEvent) =>
        this.formModel.update((value) => ({
            ...value,
            tags: addSignalChipItem(value.tags, e),
        }));
    public readonly removeTag = (i: string) =>
        this.formModel.update((value) => ({
            ...value,
            tags: removeSignalChipItem(value.tags, i),
        }));

    public get tag_list(): string[] {
        return this.formModel().tags;
    }

    public ngOnInit(): void {
        this.updateZone();
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public async submit(): Promise<void> {
        await submit(this.form, async () => {
            const item: PlaceZone = this._data.item;
            this.loading.set(i18n(`${this._name}.SAVING`));
            this._dialog_ref.disableClose = true;
            const item_json = item.toJSON ? item.toJSON() : item;
            // `parent_zone` is UI-only; the backend uses `parent_id`, which the
            // effect keeps in sync. Strip it so we never POST `parent_zone: null`.
            const { parent_zone: _parent_zone, ...form_value } =
                this.formModel();
            const form_item = (
                item.id
                    ? cleanObject({ ...item_json, ...form_value }, [undefined])
                    : { ...item_json, ...form_value }
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

    /** Update parent zone details if set */
    private async updateZone() {
        const parent_id = this.formModel().parent_id;
        if (parent_id) {
            const zone = await showZone(parent_id);
            this.formModel.update((value) => ({
                ...value,
                parent_zone: zone,
                parent_id: zone?.id || '',
            }));
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
}
