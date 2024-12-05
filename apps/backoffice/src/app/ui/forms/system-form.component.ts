import { Component, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { SPACE, ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { EncryptionLevel, queryZones } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { TIMEZONES_IANA } from '../../common/timezones';

@Component({
    selector: 'system-form',
    template: `
        <form
            system
            class="flex flex-col w-full"
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
                    Zone<span>*</span>:
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
                    Zone is required
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
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="system-name"
                            placeholder="System Name"
                            formControlName="name"
                            required
                        />
                        <mat-error *ngIf="form.controls.name.invalid"
                            >System name is required</mat-error
                        >
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
                        Email:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="system-email"
                            placeholder="System Email"
                            formControlName="email"
                        />
                        <mat-error *ngIf="form.controls.email.invalid"
                            >A valid email is required</mat-error
                        >
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.display_name">
                    <label for="display-name">Display Name: </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="display-name"
                            placeholder="Display Name"
                            formControlName="display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.display_name">
                    <label for="code-name">Code: </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="code-name"
                            placeholder="Code"
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
                    Support URL:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="support-url"
                        placeholder="Support URL"
                        formControlName="support_url"
                    />
                    <mat-error *ngIf="form.controls.support_url.invalid">
                        A valid URL is required
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
                        Touch Panels:
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
                        Capacity:
                    </label>
                    <a-counter
                        formControlName="capacity"
                        [min]="0"
                        [max]="999"
                    ></a-counter>
                </div>
            </div>
            <div class="flex items-center space-x-4 mb-4">
                <settings-toggle
                    name="Bookable"
                    class="flex-1"
                    formControlName="bookable"
                ></settings-toggle>
                <settings-toggle
                    name="Signage"
                    class="flex-1"
                    formControlName="signage"
                ></settings-toggle>
                <settings-toggle
                    name="Public"
                    class="flex-1"
                    formControlName="public"
                ></settings-toggle>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description">Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
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
                    Features:
                </label>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-chip-grid #chipList aria-label="Image List">
                        <mat-chip-row
                            *ngFor="let item of feature_list"
                            (removed)="removeFeature(item)"
                        >
                            <div class="truncate max-w-md">{{ item }}</div>
                            <button
                                matChipRemove
                                [attr.aria-label]="'Remove ' + item"
                            >
                                <app-icon>cancel</app-icon>
                            </button>
                        </mat-chip-row>
                    </mat-chip-grid>
                    <input
                        placeholder="Features..."
                        i18n-placeholder
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addFeature($event)"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.map_id">
                <label for="map_id">Map ID:</label>
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
                <label for="timezone">Timezone</label>
                <mat-form-field appearance="outline">
                    <div class="prefix" matPrefix>
                        <app-icon class="text-2xl relative -left-0.5">
                            search
                        </app-icon>
                    </div>
                    <input
                        matInput
                        formControlName="timezone"
                        placeholder="System timezone"
                        [matAutocomplete]="auto"
                    />
                </mat-form-field>
                <mat-autocomplete #auto="matAutocomplete">
                    <mat-option
                        *ngFor="let tz of filtered_timezones"
                        [value]="tz"
                        >{{ tz }}</mat-option
                    >
                    <mat-option *ngIf="!timezones.length" [disabled]="true">
                        No matching timezones
                    </mat-option>
                </mat-autocomplete>
            </div>
            <div class="field" *ngIf="form.controls.images">
                <label for="images">Images:</label>
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
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' },
    ];
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
                            _.toLowerCase().includes(timezone.toLowerCase())
                        ))
                )
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
            _.toLowerCase().includes(timezone.toLowerCase())
        );
    }
}
