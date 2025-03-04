import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { queryZones } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { TIMEZONES_IANA } from '../../common/timezones';

@Component({
    selector: 'system-form',
    template: `
        <form
            system
            class="flex w-full flex-col"
            *ngIf="form"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.zone">
                <label
                    for="zone"
                    [class.error]="
                        form.controls.zone.invalid && form.controls.zone.touched
                    "
                >
                    {{ 'ZONES.SINGULAR' | translate }}<span>*</span>
                </label>
                <item-search-field
                    name="zone"
                    [query_fn]="query_fn"
                    formControlName="zone"
                ></item-search-field>
                <div
                    class="error"
                    *ngIf="
                        form.controls.zone.invalid && form.controls.zone.touched
                    "
                >
                    {{ 'SYSTEMS.ZONE_REQUIRED' | translate }}
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.name">
                    <label
                        for="system-name"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                    >
                        {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="system-name"
                            placeholder="System Name"
                            formControlName="name"
                            required
                        />
                        <mat-error *ngIf="form.controls.name.invalid">{{
                            'SYSTEMS.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.email">
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
                            [placeholder]="'COMMON.FIELD_EMAIL' | translate"
                            formControlName="email"
                        />
                        <mat-error *ngIf="form.controls.email.invalid">{{
                            'SYSTEMS.EMAIL_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.display_name">
                    <label for="display-name">
                        {{ 'SYSTEMS.DISPLAY_NAME' | translate }}
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="display-name"
                            [placeholder]="'SYSTEMS.DISPLAY_NAME' | translate"
                            formControlName="display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.display_name">
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
            </div>
            <div class="field" *ngIf="form.controls.support_url">
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
                        [placeholder]="'SYSTEMS.SUPPORT_URL' | translate"
                        formControlName="support_url"
                    />
                    <mat-error *ngIf="form.controls.support_url.invalid">
                        {{ 'SYSTEMS.URL_VALID' | translate }}
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset mb-4">
                <div class="field" *ngIf="form.controls.installed_ui_devices">
                    <label
                        for="ui-devices"
                        [class.error]="
                            form.controls.installed_ui_devices.invalid &&
                            form.controls.installed_ui_devices.touched
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
                <div class="field" *ngIf="form.controls.capacity">
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
            <div class="field" *ngIf="form.controls.description">
                <label for="description">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        [placeholder]="'COMMON.FIELD_DESCRIPTION' | translate"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.features">
                <label
                    [class.error]="
                        form.controls.features.invalid &&
                        form.controls.features.touched
                    "
                >
                    {{ 'SYSTEMS.FEATURES' | translate }}
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid #chipList aria-label="Image List">
                        <mat-chip-row
                            *ngFor="let item of feature_list"
                            (removed)="removeFeature(item)"
                        >
                            <div class="max-w-md truncate">{{ item }}</div>
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
            <div class="field" *ngIf="form.controls.map_id">
                <label for="map_id">{{ 'SYSTEMS.MAP_ID' | translate }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="map_id"
                        placeholder="Map SVG ID selector e.g. area-01.10-status"
                        formControlName="map_id"
                    />
                </mat-form-field>
            </div>
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
                    <mat-option
                        *ngFor="let tz of filtered_timezones"
                        [value]="tz"
                    >
                        {{ tz }}
                    </mat-option>
                    <mat-option *ngIf="!timezones.length" [disabled]="true">
                        {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                    </mat-option>
                </mat-autocomplete>
            </div>
            <div class="field" *ngIf="form.controls.images">
                <label for="images">{{ 'COMMON.IMAGES' | translate }}</label>
                <image-list-field
                    name="images"
                    formControlName="images"
                ></image-list-field>
            </div>
        </form>
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
})
export class SystemFormComponent extends AsyncHandler {
    public timezones: string[] = [];
    public filtered_timezones: string[] = [];
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** Function for querying zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));
    /** List of separator characters for features */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public get feature_list(): string[] {
        return this.form.controls.features.value;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            this.updateTimezoneList();
            this.subscription(
                'tz-change',
                this.form.valueChanges.subscribe(
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
        if (!this.form || !this.form.controls.features) return;
        const input = event.input;
        const value = event.value;
        const feature_list = this.feature_list;
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
        const feature_list = this.feature_list;
        const index = feature_list.indexOf(existing_feature);

        if (index >= 0) {
            feature_list.splice(index, 1);
            this.form.controls.features.setValue(feature_list);
        }
    }

    public updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase()),
        );
    }
}
