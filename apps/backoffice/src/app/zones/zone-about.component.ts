import { Component } from '@angular/core';
import { PlaceZone, PlaceSystem } from '@placeos/ts-client';

import { ZonesStateService } from './zones-state.service';

import { marked } from 'marked';

@Component({
    selector: 'zone-about',
    template: `
        <div
            class="p-2 rounded bg-warning text-warning-content mono text-xs text-center mb-2 w-full"
            *ngIf="requires_parent"
        >
            Tags set in this zone require a parent zone to work correctly.
        </div>
        <section class="mb-4 flex space-x-2">
            <div
                class="rounded p-2 border border-base-200  space-y-2 w-1/3 flex-1 flex flex-col"
                *ngIf="(systems | async)?.length"
            >
                <header
                    class="font-medium text-lg"
                    *ngIf="(systems | async)?.length"
                >
                    Execute Command
                </header>
                <mat-form-field appearance="outline" class="h-12">
                    <mat-select
                        [(ngModel)]="active_system"
                        placeholder="Select system"
                    >
                        <mat-option
                            *ngFor="let system of systems | async"
                            [value]="system"
                        >
                            {{ system.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <execute-method-field
                    *ngIf="active_system && active_system.id"
                    [zone]="item?.id"
                    [system]="active_system"
                ></execute-method-field>
            </div>
            <div
                class="rounded p-4 border border-base-200 w-1/3 flex-1 inline-grid gap-2"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <ng-container *ngIf="item?.parent_id">
                    <div class="text-sm font-medium flex items-center">
                        Parent ID:
                    </div>
                    <div>
                        <a
                            class="underline mono text-sm"
                            [routerLink]="['/zones', item?.parent_id, 'about']"
                            >{{ item?.parent_id }}</a
                        >
                    </div>
                </ng-container>
                <ng-container *ngIf="item?.location">
                    <div class="text-sm font-medium flex items-center">
                        Location:
                    </div>
                    <div>{{ item?.location }}</div>
                </ng-container>
                <ng-container *ngIf="item?.code">
                    <div class="text-sm font-medium flex items-center">
                        Code:
                    </div>
                    <div>{{ item?.code }}</div>
                </ng-container>
                <ng-container *ngIf="item?.type">
                    <div class="text-sm font-medium flex items-center">
                        Type:&nbsp;
                    </div>
                    <div>{{ item?.type }}</div>
                </ng-container>
                <ng-container *ngIf="item?.count">
                    <div class="text-sm font-medium flex items-center">
                        Count:
                    </div>
                    <div>{{ item?.count }}</div>
                </ng-container>
                <ng-container *ngIf="item?.capacity">
                    <div class="text-sm font-medium flex items-center">
                        Capacity:
                    </div>
                    <div>{{ item?.capacity }}</div>
                </ng-container>
                <ng-container *ngIf="item?.timezone">
                    <div class="text-sm font-medium flex items-center">
                        Timezone:
                    </div>
                    <div class="mono text-sm">{{ item?.timezone }}</div>
                </ng-container>
                <ng-container *ngIf="item?.map_id">
                    <div class="text-sm font-medium flex items-center">
                        Map:
                    </div>
                    <a class="underline truncate" [href]="item?.map_id">{{
                        item?.map_id
                    }}</a>
                </ng-container>
                <ng-container *ngIf="item?.tags">
                    <div
                        class="text-sm font-medium flex items-center"
                        for="tags"
                    >
                        Tags:
                    </div>
                    <div class="flex flex-wrap flex-1 -mx-1">
                        <div
                            *ngFor="let tag of tag_list"
                            class="mono text-[0.625rem] px-2 py-1 m-1 bg-base-200 rounded"
                        >
                            {{ tag }}
                        </div>
                        <span *ngIf="!tag_list?.length" class="opacity-30">
                            No tags
                        </span>
                    </div>
                </ng-container>
                <div class="text-sm font-medium flex items-center">
                    Created:
                </div>
                <div class=" flex items-center">
                    <span
                        [matTooltip]="
                            (item.created_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.created_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.created_at * 1000 | dateFrom }}
                    </span>
                </div>
                <div class="text-sm font-medium flex items-center">
                    Updated:
                </div>
                <div class=" flex items-center">
                    <span
                        [matTooltip]="
                            (item.updated_at * 1000 | date: 'mediumDate') +
                            ', ' +
                            (item.updated_at * 1000 | date: 'shortTime')
                        "
                        matTooltipPosition="right"
                    >
                        {{ item.updated_at * 1000 | dateFrom }}
                    </span>
                </div>
            </div>
        </section>
        <header class="font-medium text-lg" *ngIf="item?.description">
            Description
        </header>
        <section
            class="description"
            *ngIf="item?.description"
            [innerHTML]="parsed_description"
        ></section>
        <hr class="my-4" />
        <header class="font-medium text-lg">Settings</header>
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
                <p>Loading zone settings...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
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

    public get requires_parent() {
        return (
            (this.item.tags.includes('level') ||
                this.item.tags.includes('building') ||
                this.item.tags.includes('region')) &&
            !this.item.parent_id
        );
    }

    constructor(private _service: ZonesStateService) {}
}
