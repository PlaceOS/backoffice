import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, SimpleChanges, input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { queryZones } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { TIMEZONES_IANA } from '../../common/timezones';

@Component({
    selector: 'system-form',
    template: `
        @if (form()) {
            <form system class="flex w-full flex-col" [formGroup]="form()">
                @if (form().controls.zone) {
                    <div class="field">
                        <label
                            for="zone"
                            [class.error]="
                                form().controls.zone.invalid &&
                                form().controls.zone.touched
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
                            form().controls.zone.invalid &&
                            form().controls.zone.touched
                        ) {
                            <div class="error">
                                {{ 'SYSTEMS.ZONE_REQUIRED' | translate }}
                            </div>
                        }
                    </div>
                }
                <div class="fieldset">
                    @if (form().controls.name) {
                        <div class="field">
                            <label
                                for="system-name"
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
                                    name="system-name"
                                    placeholder="System Name"
                                    formControlName="name"
                                    required
                                />
                                @if (form().controls.name.invalid) {
                                    <mat-error>{{
                                        'SYSTEMS.NAME_REQUIRED' | translate
                                    }}</mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                    @if (form().controls.email) {
                        <div class="field">
                            <label
                                for="system-email"
                                [class.error]="
                                    form().controls.email.invalid &&
                                    form().controls.email.touched
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
                                @if (form().controls.email.invalid) {
                                    <mat-error>{{
                                        'SYSTEMS.EMAIL_REQUIRED' | translate
                                    }}</mat-error>
                                }
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="fieldset">
                    @if (form().controls.display_name) {
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
                    @if (form().controls.display_name) {
                        <div class="field">
                            <label for="code-name"
                                >{{ 'SYSTEMS.CODE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="code-name"
                                    [placeholder]="'SYSTEMS.CODE' | translate"
                                    formControlName="code"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                @if (form().controls.support_url) {
                    <div class="field">
                        <label
                            for="support-url"
                            [class.error]="
                                form().controls.support_url.invalid &&
                                form().controls.support_url.touched
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
                            @if (form().controls.support_url.invalid) {
                                <mat-error>
                                    {{ 'SYSTEMS.URL_VALID' | translate }}
                                </mat-error>
                            }
                        </mat-form-field>
                    </div>
                }
                <div class="fieldset mb-4">
                    @if (form().controls.installed_ui_devices) {
                        <div class="field">
                            <label
                                for="ui-devices"
                                [class.error]="
                                    form().controls.installed_ui_devices
                                        .invalid &&
                                    form().controls.installed_ui_devices.touched
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
                    @if (form().controls.capacity) {
                        <div class="field">
                            <label
                                for="capacity"
                                [class.error]="
                                    form().controls.capacity.invalid &&
                                    form().controls.capacity.touched
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
                @if (form().controls.features) {
                    <div class="field">
                        <label
                            [class.error]="
                                form().controls.features.invalid &&
                                form().controls.features.touched
                            "
                        >
                            {{ 'SYSTEMS.FEATURES' | translate }}
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-chip-grid #chipList aria-label="Image List">
                                @for (item of feature_list; track item) {
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
                                                    | translate: { item: item }
                                            "
                                        >
                                            <app-icon>cancel</app-icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                [placeholder]="'SYSTEMS.FEATURES' | translate"
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addFeature($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.map_id) {
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
                            <mat-option [value]="tz">
                                {{ tz }}
                            </mat-option>
                        }
                        @if (!timezones.length) {
                            <mat-option [disabled]="true">
                                {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                            </mat-option>
                        }
                    </mat-autocomplete>
                </div>
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
    standalone: false,
})
export class SystemFormComponent extends AsyncHandler {
    public timezones: string[] = [];
    public filtered_timezones: string[] = [];
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);
    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get feature_list(): string[] {
        return this.form().controls.features.value;
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
        }
    }

    /**
     * Add a feature to the list of features for the item
     * @param event Input event
     */
    public addFeature(event: MatChipInputEvent): void {
        const form = this.form();
        if (!form || !form.controls.features) return;
        const input = event.input;
        const value = event.value;
        const feature_list = this.feature_list;
        if ((value || '').trim()) {
            feature_list.push(value);
            form.controls.features.setValue(feature_list);
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
        const form = this.form();
        if (!form || !form.controls.features) return;
        const feature_list = this.feature_list;
        const index = feature_list.indexOf(existing_feature);

        if (index >= 0) {
            feature_list.splice(index, 1);
            form.controls.features.setValue(feature_list);
        }
    }

    public updateTimezoneList() {
        const timezone = this.form()?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase()),
        );
    }
}
