import { Component, Input, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlaceZone, showZone, queryZones } from '@placeos/ts-client';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { map } from 'rxjs/operators';
import {
    addChipItem,
    removeChipItem,
} from 'apps/backoffice/src/app/common/forms';
import { TIMEZONES_IANA } from '../../common/timezones';

@Component({
    selector: 'zone-form',
    template: `
        <form
            zone
            *ngIf="form"
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.parent_zone">
                <label for="parent-zone" i18n="@@parentZoneLabel"
                    >Parent Zone:
                </label>
                <item-search-field
                    name="parent-zone"
                    [query_fn]="query_fn"
                    [exclude]="exclude"
                    formControlName="parent_zone"
                ></item-search-field>
            </div>
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="zone-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@nameLabel"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="zone-name"
                        placeholder="Zone Name"
                        i18n-placeholder="@@zoneNamePlaceholder"
                        formControlName="name"
                        required
                    />
                    <mat-error i18n="@@zoneNameError"
                        >Zone name is required</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.display_name">
                <label
                    for="zone-display"
                    [class.error]="
                        form.controls.display_name.invalid &&
                        form.controls.display_name.touched
                    "
                >
                    Display Name:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="zone-display"
                        placeholder="Zone display name"
                        i18n-placeholder="@@zoneDisplayNamePlaceholder"
                        formControlName="display_name"
                    />
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.tags">
                <label
                    for="system-email"
                    [class.error]="
                        form.controls.tags.invalid && form.controls.tags.touched
                    "
                    i18n="@@tagsLabel"
                >
                    Tags:
                </label>
                <mat-form-field appearance="outline">
                    <mat-chip-list #chipList aria-label="Zone Tags">
                        <mat-chip
                            *ngFor="let tag of tag_list"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeTag(tag)"
                        >
                            {{ tag }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'backoffice-cross' }"
                            ></app-icon>
                        </mat-chip>
                        <input
                            placeholder="Zone tags..."
                            i18n-placeholder="@@zoneTagsPlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addTag($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
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
                        i18n-placeholder="@@descriptionPlaceholder"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.location">
                <label for="location" i18n="@@locationLabel">Location:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="location"
                        placeholder="Geo-location details for zone. <lat, long>"
                        i18n-placeholder="@@locationPlaceholder"
                        formControlName="location"
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
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.code">
                    <label for="code" i18n="@@codeLabel">Code:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="code"
                            placeholder="Organisation Code"
                            i18n-placeholder="@@codePlaceholder"
                            formControlName="code"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.location">
                    <label for="type" i18n="@@typeLabel">Type:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="type"
                            placeholder="Organisational Categorisation"
                            i18n-placeholder="@@zoneTypePlaceholder"
                            formControlName="type"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="fieldset">
                <div class="field" *ngIf="form.controls.count">
                    <label for="count" i18n="@@countLabel">Count:</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="count"
                            type="number"
                            placeholder="Resource count. Desks, Hardware, etc."
                            i18n-placeholder="@@zoneFeatureCountPlaceholder"
                            formControlName="count"
                        />
                    </mat-form-field>
                </div>
                <div class="field" *ngIf="form.controls.capacity">
                    <label for="capacity" i18n="@@capacityLabel"
                        >Capacity:</label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="capacity"
                            type="number"
                            placeholder="Physical capacity of the zone"
                            i18n-placeholder="@@zoneCapacityPlaceholder"
                            formControlName="capacity"
                        />
                    </mat-form-field>
                </div>
            </div>
            <div class="field" *ngIf="form.controls.map_id">
                <label for="map" i18n="@@mapUrlLabel">Map:</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="map"
                        placeholder="Map ID or URL"
                        i18n-placeholder="@@mapUrlPlaceholder"
                        formControlName="map_id"
                    />
                </mat-form-field>
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
    styles: [``],
})
export class ZoneFormComponent extends BaseClass {
    public timezones: string[] = [];
    public filtered_timezones: string[] = [];
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Query function for zones */
    public readonly query_fn = (_: string) =>
        queryZones({ q: _ }).pipe(map((resp) => resp.data));
    /** Function to exclude zones */
    public readonly exclude = (zone: PlaceZone) =>
        zone.id === this.form.controls.id.value;

    public readonly addTag = (e) =>
        addChipItem(this.form.controls.tags as any, e);
    public readonly removeTag = (i) =>
        removeChipItem(this.form.controls.tags as any, i);

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
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
            this.updateZone();
        }
    }

    public updateTimezoneList() {
        const timezone = this.form?.value?.timezone || '';
        this.timezones = TIMEZONES_IANA;
        this.filtered_timezones = this.timezones.filter((_) =>
            _.toLowerCase().includes(timezone.toLowerCase())
        );
    }

    /** Update parent zone details if set */
    private async updateZone() {
        const parent_id = this.form.controls.parent_id
            ? this.form.controls.parent_id.value
            : '';
        if (parent_id) {
            const zone = await showZone(parent_id).toPromise();
            this.form.controls.parent_zone.setValue(zone);
        }
    }
}
