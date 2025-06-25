import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, SimpleChanges, input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlaceZone, queryZones, showZone } from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    addChipItem,
    removeChipItem,
} from 'apps/backoffice/src/app/common/forms';
import { map } from 'rxjs/operators';
import { TIMEZONES_IANA } from '../../common/timezones';

@Component({
    selector: 'zone-form',
    template: `
        @if (form()) {
            <form zone class="flex flex-col" [formGroup]="form()">
                @if (form().controls.parent_zone) {
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
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="zone-name"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
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
                    @if (form().controls.display_name) {
                        <div class="field">
                            <label
                                for="zone-display"
                                [class.error]="
                                    form().controls.display_name.invalid &&
                                    form().controls.display_name.touched
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
                @if (form().controls.tags) {
                    <div class="field">
                        <label
                            [class.error]="
                                form().controls.tags.invalid &&
                                form().controls.tags.touched
                            "
                        >
                            {{ 'ZONES.TAGS' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Tag List">
                                @for (item of tag_list; track item) {
                                    <mat-chip-row (removed)="removeTag(item)">
                                        <div class="max-w-md truncate">
                                            {{ item }}
                                        </div>
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.ITEM_REMOVE'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <app-icon>cancel</app-icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="'ZONES.TAGS' | translate"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addTag($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.description) {
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
                    @if (form().controls.location) {
                        <div class="field">
                            <label for="location">{{
                                'ZONES.LOCATION' | translate
                            }}</label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="location"
                                    [placeholder]="
                                        'ZONES.LOCATION_PLACEHOLDER' | translate
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
                                <app-icon class="relative -left-0.5 text-2xl">
                                    search
                                </app-icon>
                            </div>
                            <input
                                matInput
                                formControlName="timezone"
                                [placeholder]="'COMMON.TIMEZONE' | translate"
                                [matAutocomplete]="auto"
                            />
                        </mat-form-field>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (tz of filtered_timezones; track tz) {
                                <mat-option [value]="tz">{{ tz }}</mat-option>
                            }
                            @if (!timezones.length) {
                                <mat-option [disabled]="true">
                                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </div>
                </div>
                <div class="fieldset">
                    @if (form().controls.code) {
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
                    @if (form().controls.location) {
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
                    @if (form().controls.count) {
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
                    @if (form().controls.capacity) {
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
                @if (form().controls.map_id) {
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
                @if (form().controls.images) {
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
    `,
    styles: [``],
    standalone: false,
})
export class ZoneFormComponent extends AsyncHandler {
    public timezones: string[] = [];
    public filtered_timezones: string[] = [];
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Query function for zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));
    /** Function to exclude zones */
    public readonly exclude = (zone: PlaceZone) =>
        zone.id === this.form().controls.id.value;

    public readonly addTag = (e) =>
        addChipItem(this.form().controls.tags as any, e);
    public readonly removeTag = (i) =>
        removeChipItem(this.form().controls.tags as any, i);

    public get tag_list(): string[] {
        return this.form().controls.tags.value;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            this.updateTimezoneList();
            this.subscription(
                'tz-change',
                this.form().valueChanges.subscribe(
                    ({ timezone }) =>
                        (this.filtered_timezones = this.timezones.filter((_) =>
                            _.toLowerCase().includes(timezone.toLowerCase()),
                        )),
                ),
            );
            this.updateZone();
        }
    }

    public updateTimezoneList() {
        const timezone = this.form()?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase()),
        );
    }

    /** Update parent zone details if set */
    private async updateZone() {
        const form = this.form();
        const parent_id = form.controls.parent_id
            ? form.controls.parent_id.value
            : '';
        if (parent_id) {
            const zone = await showZone(parent_id).toPromise();
            this.form().controls.parent_zone.setValue(zone);
        }
    }
}
