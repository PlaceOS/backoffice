import { Component, inject } from '@angular/core';
import { PlaceSystem, PlaceZone } from '@placeos/ts-client';

import { ZonesStateService } from './zones-state.service';

import { marked } from 'marked';

@Component({
    selector: 'zone-about',
    template: `
        @if (requires_parent) {
            <div
                class="mono mb-2 w-full rounded bg-warning p-2 text-center text-xs text-warning-content"
            >
                {{ 'ZONES.TAG_WARNING' | translate }}
            </div>
        }
        <section class="mb-4 flex space-x-2">
            @if ((systems | async)?.length) {
                <div
                    class="flex w-1/3 flex-1 flex-col rounded border border-base-200"
                >
                    <header
                        class="w-full rounded bg-base-200 px-4 py-3 text-lg font-medium"
                    >
                        {{ 'COMMON.EXECUTE_COMMAND' | translate }}
                    </header>
                    <div class="w-full p-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript mb-2 w-full"
                        >
                            <mat-select
                                [(ngModel)]="active_system"
                                [placeholder]="
                                    'ZONES.SELECT_SYSTEM' | translate
                                "
                            >
                                @for (
                                    system of systems | async;
                                    track system.id
                                ) {
                                    <mat-option [value]="system">
                                        {{ system.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                        @if (active_system && active_system.id) {
                            <execute-method-field
                                [zone]="item?.id"
                                [system]="active_system"
                            ></execute-method-field>
                        }
                    </div>
                </div>
            }
            <div
                class="inline-grid w-1/3 flex-1 gap-2 rounded border border-base-200 p-4"
                [style.gridTemplateColumns]="'5.5rem auto'"
            >
                @if (item?.parent_id) {
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
                }
                @if (item?.location) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.LOCATION' | translate }}
                    </div>
                    <div>{{ item?.location }}</div>
                }
                @if (item?.code) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.CODE' | translate }}
                    </div>
                    <div>{{ item?.code }}</div>
                }
                @if (item?.type) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.TYPE' | translate }}&nbsp;
                    </div>
                    <div>{{ item?.type }}</div>
                }
                @if (item?.count) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.COUNT' | translate }}
                    </div>
                    <div>{{ item?.count }}</div>
                }
                @if (item?.capacity) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.CAPACITY' | translate }}
                    </div>
                    <div>{{ item?.capacity }}</div>
                }
                @if (item?.timezone) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'COMMON.TIMEZONE' | translate }}
                    </div>
                    <div class="mono text-sm">{{ item?.timezone }}</div>
                }
                @if (item?.map_id) {
                    <div class="flex items-center text-sm font-medium">
                        {{ 'ZONES.MAP_URL' | translate }}
                    </div>
                    <a class="truncate underline" [href]="item?.map_id">{{
                        item?.map_id
                    }}</a>
                }
                @if (item?.tags) {
                    <div
                        class="flex items-center text-sm font-medium"
                        for="tags"
                    >
                        {{ 'ZONES.TAGS' | translate }}
                    </div>
                    <div class="-mx-1 flex flex-1 flex-wrap">
                        @for (tag of tag_list; track tag) {
                            <div
                                class="mono m-1 h-6 rounded bg-base-200 px-2 py-1 text-[0.625rem]"
                            >
                                {{ tag }}
                            </div>
                        }
                        @if (!tag_list?.length) {
                            <span class="opacity-30">
                                {{ 'ZONES.TAGS_EMPTY' | translate }}
                            </span>
                        }
                    </div>
                }
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
        @if (item?.settings) {
            <section>
                <a-settings-form
                    [merge]="true"
                    [id]="item?.id"
                    [settings]="item?.settings"
                ></a-settings-form>
            </section>
        } @else {
            <div class="flex flex-col items-center p-8">
                <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                <p>{{ 'ZONES.LOADING_SETTINGS' | translate }}</p>
            </div>
        }
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
    private _service = inject(ZonesStateService);

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
}
