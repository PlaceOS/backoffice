import { Component } from '@angular/core';
import { PlaceZone, PlaceSystem } from '@placeos/ts-client';

import { ZonesStateService } from './zones-state.service';

import * as marked from 'marked';

@Component({
    selector: 'zone-about',
    template: `
        <header class="font-medium text-lg" *ngIf="(systems | async)?.length" i18n="@@execHeader">
            Execute Command
        </header>
        <section *ngIf="(systems | async)?.length" class="mb-4">
            <mat-form-field appearance="outline" class="h-12">
                <mat-select [(ngModel)]="active_system" placeholder="Select system">
                    <mat-option *ngFor="let system of systems | async" [value]="system">
                        {{ system.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
            <system-exec-field
                *ngIf="active_system && active_system.id"
                [system]="active_system"
            ></system-exec-field>
        </section>
        <section class="space-y-2">
            <div class="flex items-center space-x-2" *ngIf="item?.parent_id">
                <label i18n="@@zoneParentLabel">Parent ID:</label>
                <div class="value underline">
                    <a [routerLink]="['/zones', item?.parent_id, 'about']">{{ item?.parent_id }}</a>
                </div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.created_at">
                <label i18n="@@zoneCreatedAtLabel">Created:</label>
                <div class="value">{{ item?.created_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.updated_at">
                <label i18n="@@zoneUpdatedAtLabel">Updated:</label>
                <div class="value">{{ item?.updated_at * 1000 | dateFrom }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.location">
                <label i18n="@@zoneLocationLabel">Location:</label>
                <div class="value">{{ item?.location }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.code">
                <label i18n="@@zoneCodeLabel">Code:</label>
                <div class="value">{{ item?.code }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.type">
                <label i18n="@@zoneTypeLabel">Type:&nbsp;</label>
                <div class="value">{{ item?.type }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.count">
                <label i18n="@@zoneCountLabel">Count:</label>
                <div class="value">{{ item?.count }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.capacity">
                <label i18n="@@zoneCapacityLabel">Capacity:</label>
                <div class="value">{{ item?.capacity }}</div>
            </div>
            <div class="flex items-center space-x-2" *ngIf="item?.map_id">
                <label i18n="@@zoneMapLabel">Map:</label>
                <a class="underline" [href]="item?.map_id">{{ item?.map_id }}</a>
            </div>
        </section>
        <header class="font-medium text-lg" *ngIf="item?.description" i18n="@@descriptionLabel">
            Description
        </header>
        <section
            class="description"
            *ngIf="item?.description"
            [innerHTML]="parsed_description"
        ></section>
        <section class="flex space-x-2 mt-1" *ngIf="item && tag_list">
            <label class="my-1" for="tags" i18n="@@zoneTagsLabel">Tags:</label>
            <div class="value" *ngIf="tag_list && tag_list.length; else empty_tag_state">
                <mat-chip-list name="tags">
                    <mat-chip *ngFor="let tag of tag_list">{{ tag }}</mat-chip>
                </mat-chip-list>
            </div>
        </section>
        <hr class="my-4" />
        <header class="font-medium text-lg" i18n="@@settingsLabel">Settings</header>
        <section *ngIf="item?.settings; else load_state">
            <a-settings-form
                [merge]="true"
                [id]="item?.id"
                [settings]="item?.settings"
            ></a-settings-form>
        </section>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8">
                <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                <p i18n="@@zoneLoadingLabel">Loading zone settings...</p>
            </div>
        </ng-template>
        <ng-template #empty_tag_state>
            <p class="text-center py-1" i18n="@@zoneTagsEmpty">&lt;No Tags&gt;</p>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class ZoneAboutComponent {
    /** List of associated systems */
    public readonly systems = this._service.systems;
    /** Selected system */
    public active_system: PlaceSystem;

    public get item(): PlaceZone {
        return this._service.active_item as any;
    }

    public get parsed_description() {
        return this.item ? marked(this.item?.description) : '';
    }

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return this.item ? this.item?.tags : [];
    }

    constructor(private _service: ZonesStateService) {}
}
