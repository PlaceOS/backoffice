import { Component } from '@angular/core';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';

import { ZonesStateService } from './zones-state.service';

import { marked } from 'marked';

@Component({
    selector: 'zone-about',
    template: `
        <div
            class="mono mb-2 w-full rounded bg-warning p-2 text-center text-xs text-warning-content"
            *ngIf="requires_parent"
        >
            {{ 'ZONES.TAG_WARNING' | translate }}
        </div>
        <section class="mb-4 flex space-x-2">
            <div
                class="flex w-1/3 flex-1 flex-col space-y-2 rounded border border-base-200 p-2"
                *ngIf="(systems | async)?.length"
            >
                <header
                    class="text-lg font-medium"
                    *ngIf="(systems | async)?.length"
                >
                    {{ 'COMMON.EXECUTE_COMMAND' | translate }}
                </header>
                <mat-form-field appearance="outline" class="h-12">
                    <mat-select
                        [(ngModel)]="active_system"
                        [placeholder]="'ZONES.SELECT_SYSTEM' | translate"
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
                class="inline-grid w-1/3 flex-1 gap-2 rounded border border-base-200 p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                <ng-container *ngIf="item?.parent_id">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.PARENT_ID' | translate }}
                    </div>
                    <div>
                        <a
                            class="mono text-sm underline"
                            [routerLink]="['/zones', item?.parent_id, 'about']"
                            >{{ item?.parent_id }}</a
                        >
                    </div>
                </ng-container>
                <ng-container *ngIf="item?.location">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.LOCATION' | translate }}
                    </div>
                    <div>{{ item?.location }}</div>
                </ng-container>
                <ng-container *ngIf="item?.code">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.CODE' | translate }}
                    </div>
                    <div>{{ item?.code }}</div>
                </ng-container>
                <ng-container *ngIf="item?.type">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.TYPE' | translate }}&nbsp;
                    </div>
                    <div>{{ item?.type }}</div>
                </ng-container>
                <ng-container *ngIf="item?.count">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.COUNT' | translate }}
                    </div>
                    <div>{{ item?.count }}</div>
                </ng-container>
                <ng-container *ngIf="item?.capacity">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.CAPACITY' | translate }}
                    </div>
                    <div>{{ item?.capacity }}</div>
                </ng-container>
                <ng-container *ngIf="item?.timezone">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.TIMEZONE' | translate }}
                    </div>
                    <div class="mono text-sm">{{ item?.timezone }}</div>
                </ng-container>
                <ng-container *ngIf="item?.map_id">
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.MAP_URL' | translate }}
                    </div>
                    <a class="truncate underline" [href]="item?.map_id">{{
                        item?.map_id
                    }}</a>
                </ng-container>
                <ng-container *ngIf="item?.tags">
                    <div
                        class="flex items-center text-sm font-medium"
                        for="tags"
                    >
                        {{ 'ZONES.TAGS' | translate }}
                    </div>
                    <div class="-mx-1 flex flex-1 flex-wrap">
                        <div
                            *ngFor="let tag of tag_list"
                            class="mono m-1 h-6 rounded bg-base-200 px-2 py-1 text-[0.625rem]"
                        >
                            {{ tag }}
                        </div>
                        <span *ngIf="!tag_list?.length" class="opacity-30">
                            {{ 'ZONES.TAGS_EMPTY' | translate }}
                        </span>
                    </div>
                </ng-container>
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.CREATED_AT' | translate }}
                </div>
                <div class="flex items-center">
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
                <div class="flex items-center text-sm font-medium">
                    {{ 'COMMON.UPDATED_AT' | translate }}
                </div>
                <div class="flex items-center">
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
        @if (item?.description) {
            <hr class="my-4 text-base-300" />
            <div class="w-full rounded border border-base-200">
                <h3 class="w-full rounded bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="parsed_description | sanitize"
                ></div>
            </div>
        }
        <hr class="my-4" />
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
                <p>{{ 'ZONES.LOADING_SETTINGS' | translate }}</p>
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
    standalone: false,
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
