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
import { FormField, form } from '@angular/forms/signals';
import {
    PlaceZone,
    addZone as addZoneRequest,
    showZone,
    updateZone as updateZoneRequest,
} from '@placeos/ts-client';
import { subtreeFilter } from '../common/hierarchy';
import { querySupportZones as queryZones } from '../common/support-access';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { mergeFormItem, onSaveHotkey, submitFormDialog } from '../common/forms';
import { i18n } from '../common/locale.service';
import { TIMEZONES_IANA } from '../common/timezones';
import { DialogEvent } from '../common/types';
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
import { TranslatePipe } from '../ui/translate.pipe';
import { applyZoneFormSchema, generateZoneFormModel } from './zones.utilites';

/** Most timezone options to render. Typing narrows the full list. */
const TIMEZONE_OPTION_LIMIT = 50;

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
                                <app-form-field>
                                    <input
                                        id="zone-name"
                                        [placeholder]="
                                            'COMMON.FIELD_NAME' | translate
                                        "
                                        [formField]="form.name"
                                    />
                                    <div error>
                                        {{ 'ZONES.NAME_REQUIRED' | translate }}
                                    </div>
                                </app-form-field>
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
                                <app-form-field>
                                    <input
                                        id="zone-display"
                                        [placeholder]="
                                            'ZONES.DISPLAY_NAME' | translate
                                        "
                                        [formField]="form.display_name"
                                    />
                                </app-form-field>
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
                            <app-form-field class="w-full">
                                <app-chip-list
                                    inputId="tags"
                                    aria-label="Tag List"
                                    [placeholder]="'ZONES.TAGS' | translate"
                                    [separators]="['Enter', ',', ' ']"
                                    [formField]="form.tags"
                                />
                            </app-form-field>
                        </div>
                    }
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
                    <div class="fieldset">
                        @if (form.location) {
                            <div class="field">
                                <label for="location">{{
                                    'ZONES.LOCATION' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="location"
                                        [placeholder]="
                                            'ZONES.LOCATION_PLACEHOLDER'
                                                | translate
                                        "
                                        [formField]="form.location"
                                    />
                                </app-form-field>
                            </div>
                        }
                        <div class="field">
                            <label for="timezone">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </label>
                            <app-form-field>
                                <div class="prefix" prefix>
                                    <icon class="relative -left-0.5 text-2xl">
                                        search
                                    </icon>
                                </div>
                                <input
                                    id="timezone"
                                    [formField]="form.timezone"
                                    [placeholder]="
                                        'COMMON.TIMEZONE' | translate
                                    "
                                    [appAutocomplete]="auto"
                                />
                            </app-form-field>
                            <app-autocomplete #auto="appAutocomplete">
                                @for (tz of filtered_timezones(); track tz) {
                                    <app-option [value]="tz">{{
                                        tz
                                    }}</app-option>
                                }
                                @if (!filtered_timezones().length) {
                                    <app-option [disabled]="true">
                                        {{
                                            'COMMON.TIMEZONE_EMPTY' | translate
                                        }}
                                    </app-option>
                                }
                            </app-autocomplete>
                        </div>
                    </div>
                    <div class="fieldset">
                        @if (form.code) {
                            <div class="field">
                                <label for="code">{{
                                    'ZONES.CODE' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="code"
                                        [placeholder]="
                                            'ZONES.CODE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.code"
                                    />
                                </app-form-field>
                            </div>
                        }
                        @if (form.type) {
                            <div class="field">
                                <label for="type">{{
                                    'ZONES.TYPE' | translate
                                }}</label>
                                <app-form-field>
                                    <input
                                        id="type"
                                        [placeholder]="
                                            'ZONES.TYPE_PLACEHOLDER' | translate
                                        "
                                        [formField]="form.type"
                                    />
                                </app-form-field>
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
                            <app-form-field>
                                <input
                                    id="map"
                                    [placeholder]="'ZONES.MAP_URL' | translate"
                                    [formField]="form.map_id"
                                />
                            </app-form-field>
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
        OptionComponent,
        FormFieldComponent,
        ImageListFieldComponent,
        FormField,
        TranslatePipe,
        IconComponent,
        CounterComponent,
        AutocompleteComponent,
        AutocompleteTriggerDirective,
        ChipListComponent,
        ItemSearchFieldComponent,
        FullscreenModalShellComponent,
    ],
})
export class ZoneFormComponent implements OnInit {
    private _dialog_ref =
        inject<DialogRef<unknown, ZoneFormComponent>>(DialogRef);
    private _data = inject<{ item: PlaceZone; readonly?: string }>(DIALOG_DATA);
    private readonly _name = 'ZONES';

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly formModel = signal(generateZoneFormModel(this._data.item));
    public readonly form = form(this.formModel, applyZoneFormSchema);
    public readonly timezones = TIMEZONES_IANA;
    public readonly timezone = computed(
        () => `${this.formModel().timezone || ''}`,
    );
    public readonly filtered_timezones = computed(() => {
        const search = this.timezone().toLowerCase();
        return this.timezones
            .filter((_tz) => _tz.toLowerCase().includes(search))
            .slice(0, TIMEZONE_OPTION_LIMIT);
    });
    public readonly loading = signal<string | null>(null);
    public readonly heading = i18n(
        `${this._name}.${this._data.item?.id ? 'EDIT' : 'NEW'}`,
    );

    constructor() {
        onSaveHotkey(() => this.submit());
        effect(() => {
            // Sync only after the user changes the picker. The parent zone
            // loads async, so an early save must keep the stored `parent_id`.
            if (!this.form.parent_zone().dirty()) return;
            const parent_zone = this.formModel().parent_zone;
            const parent_id = parent_zone?.id || '';
            if (parent_id !== this.formModel().parent_id) {
                this.formModel.update((value) => ({ ...value, parent_id }));
            }
        });
    }

    private readonly _excludeSubtree = subtreeFilter((id) => showZone(id));
    /** Query function for zones. Hides this zone's descendants to prevent cycles */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).then((resp) =>
            this._excludeSubtree(resp.data as PlaceZone[], this.formModel().id),
        );
    /** Function to exclude zones */
    public readonly exclude = (zone: PlaceZone) =>
        zone.id === this.formModel().id;

    public ngOnInit(): void {
        this.updateZone();
    }

    public async submit(): Promise<void> {
        await submitFormDialog(
            this.form,
            {
                loading: this.loading,
                event: this.event,
                close: () => this._dialog_ref.close(),
            },
            `${this._name}.`,
            () => {
                // `parent_zone` is UI-only; the backend uses `parent_id`, which the
                // effect keeps in sync. Strip it so we never POST `parent_zone: null`.
                const { parent_zone: _parent_zone, ...form_value } =
                    this.formModel();
                const form_item = mergeFormItem(
                    this._data.item,
                    form_value,
                ) as unknown as PlaceZone;
                return form_item.id
                    ? updateZoneRequest(form_item.id, form_item)
                    : addZoneRequest(form_item);
            },
        );
    }

    /** Show the stored parent zone in the picker. `parent_id` stays as stored */
    private async updateZone() {
        const parent_id = this.formModel().parent_id;
        if (!parent_id) return;
        const zone = await showZone(parent_id).catch(() => null);
        // Keep the user's choice if they changed the picker while loading
        if (!zone || this.form.parent_zone().dirty()) return;
        this.formModel.update((value) => ({ ...value, parent_zone: zone }));
    }
}
