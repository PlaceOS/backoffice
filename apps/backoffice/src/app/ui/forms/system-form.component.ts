import { Component, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { SPACE, ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { EncryptionLevel, queryZones } from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { TIMEZONES_IANA } from '../../common/timezones';

@Component({
    selector: 'system-form',
    template: `
        <form
            system
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            *ngIf="form"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.zone">
                <label
                    for="zone"
                    [class.error]="
                        form.controls.zone.invalid && form.controls.zone.touched
                    "
                    i18n="@@zoneLabel"
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
                    i18n="@@zoneError"
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
                        i18n="@@nameLabel"
                    >
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="system-name"
                            placeholder="System Name"
                            i18n-placeholder="@@systemNamePlaceholder"
                            formControlName="name"
                            required
                        />
                        <mat-error
                            *ngIf="form.controls.name.invalid"
                            i18n="@@systemNameError"
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
                        i18n="@@emailLabel"
                    >
                        Email:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="system-email"
                            placeholder="System Email"
                            i18n-placeholder="@@systemEmailPlaceholder"
                            formControlName="email"
                        />
                        <mat-error
                            *ngIf="form.controls.email.invalid"
                            i18n="@@emailError"
                            >A valid email is required</mat-error
                        >
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.display_name">
                    <label for="display-name" i18n="@@displayNameLabel"
                        >Display Name:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="display-name"
                            placeholder="Display Name"
                            i18n-placeholder="@@displayNamePlaceholder"
                            formControlName="display_name"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.display_name">
                    <label for="code-name" i18n="@@codeNameLabel">Code: </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="code-name"
                            placeholder="Code"
                            i18n-placeholder="@@codeNamePlaceholder"
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
                    i18n="@@supportUrlLabel"
                >
                    Support URL:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="support-url"
                        placeholder="Support URL"
                        i18n-placeholder="@@suportUrlPlaceholder"
                        formControlName="support_url"
                    />
                    <mat-error
                        *ngIf="form.controls.support_url.invalid"
                        i18n="@@urlError"
                    >
                        A valid URL is required
                    </mat-error>
                </mat-form-field>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.installed_ui_devices">
                    <label
                        for="ui-devices"
                        [class.error]="
                            form.controls.installed_ui_devices.invalid &&
                            form.controls.installed_ui_devices.touched
                        "
                        i18n="@@panelCountLabel"
                    >
                        Number of Touch Panels:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="ui-devices"
                            type="number"
                            placeholder="Number of Touch Panels"
                            i18n-placeholder="@@panelCountPlaceholder"
                            formControlName="installed_ui_devices"
                        />
                        <mat-error
                            *ngIf="form.controls.installed_ui_devices.invalid"
                            i18n="@@panelCountError"
                        >
                            A valid positive number is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.capacity">
                    <label
                        for="capacity"
                        [class.error]="
                            form.controls.capacity.invalid &&
                            form.controls.capacity.touched
                        "
                        i18n="@@capacityLabel"
                    >
                        Capacity:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="capacity"
                            type="number"
                            placeholder="Capacity"
                            i18n-placeholder="@@capacityPlaceholder"
                            formControlName="capacity"
                        />
                        <mat-error
                            *ngIf="form.controls.capacity.invalid"
                            i18n="@@capacityError"
                        >
                            A valid positive number is required
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.bookable">
                    <mat-checkbox
                        name="bookable"
                        formControlName="bookable"
                        i18n="@@bookableLabel"
                    >
                        Bookable
                    </mat-checkbox>
                </div>
                <div class="field" *ngIf="form.controls.public">
                    <mat-checkbox
                        name="public"
                        formControlName="public"
                        i18n="@@publicLabel"
                    >
                        Public
                    </mat-checkbox>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description" i18n="@@descriptionLabel"
                    >Description:</label
                >
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        i18n="@@descriptionPlaceholder"
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
                    i18n="@@featuresLabel"
                >
                    Features:
                </label>
                <mat-form-field appearance="outline">
                    <mat-chip-list #chipList aria-label="System features">
                        <mat-chip
                            *ngFor="let feature of feature_list"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeFeature(feature)"
                        >
                            {{ feature }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'backoffice-cross' }"
                            ></app-icon>
                        </mat-chip>
                        <input
                            placeholder="Features..."
                            i18n-placeholder="@@featuresPlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addFeature($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.map_id">
                <label for="map_id" i18n="@@mapIdLabel">Map ID:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="map_id"
                        i18n-placeholder="@@mapIdPlaceholder"
                        placeholder="Map SVG ID selector e.g. area-01.10-status"
                        formControlName="map_id"
                    />
                </mat-form-field>
            </div>
            <div class="field">
                <label for="timezone">Timezone</label>
                <mat-form-field appearance="outline">
                    <app-icon matPrefix class="text-2xl">search</app-icon>
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
                <label for="images" i18n="@@imagesLabel">Images:</label>
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
export class SystemFormComponent extends BaseClass {
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
