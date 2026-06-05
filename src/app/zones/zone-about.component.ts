import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PlaceSystem, PlaceZone, showZone } from '@placeos/ts-client';

import { ZonesStateService } from './zones-state.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { AsyncHandler } from '../common/async-handler.class';
import { ExecuteMethodFieldComponent } from '../ui/custom-fields/system-exec/execute-method-field.component';
import { SettingsFormComponent } from '../ui/forms/settings-form.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { MarkdownPipe } from '../ui/pipes/markdown.pipe';
import { TranslatePipe } from '../ui/translate.pipe';

@Component({
    selector: 'zone-about',
    template: `
        <div class="p-4">
            @if (requires_parent()) {
                <div
                    class="mono bg-warning text-warning-content mb-2 w-full rounded-sm p-2 text-center text-xs"
                >
                    {{ 'ZONES.TAG_WARNING' | translate }}
                </div>
            }
            <section class="mb-4 flex space-x-2">
                <div class="w-1/3 flex-1">
                    <div
                        class="border-base-200 grid gap-2 rounded-sm border p-4"
                        [style.gridTemplateColumns]="'5.5rem auto'"
                    >
                        @if (item()?.parent_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.PARENT_ID' | translate }}
                            </div>
                            <div>
                                <a
                                    class="mono text-sm underline"
                                    [routerLink]="[
                                        '/zones',
                                        $safeNavigationMigration(
                                            item()?.parent_id
                                        ),
                                        'about',
                                    ]"
                                    >{{
                                        parent()?.display_name ||
                                            parent()?.name ||
                                            item()?.parent_id
                                    }}
                                    @if (parent()) {
                                        ({{ item()?.parent_id }})
                                    }
                                </a>
                            </div>
                        }
                        @if (item()?.location) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.LOCATION' | translate }}
                            </div>
                            <div>{{ item()?.location }}</div>
                        }
                        @if (item()?.code) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.CODE' | translate }}
                            </div>
                            <div>{{ item()?.code }}</div>
                        }
                        @if (item()?.type) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.TYPE' | translate }}&nbsp;
                            </div>
                            <div>{{ item()?.type }}</div>
                        }
                        @if (item()?.count) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.COUNT' | translate }}
                            </div>
                            <div>{{ item()?.count }}</div>
                        }
                        @if (item()?.capacity) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.CAPACITY' | translate }}
                            </div>
                            <div>{{ item()?.capacity }}</div>
                        }
                        @if (item()?.timezone) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'COMMON.TIMEZONE' | translate }}
                            </div>
                            <div class="mono text-sm">
                                {{ item()?.timezone }}
                            </div>
                        }
                        @if (item()?.map_id) {
                            <div class="flex items-center text-sm font-medium">
                                {{ 'ZONES.MAP_URL' | translate }}
                            </div>
                            <a
                                class="truncate underline"
                                [href]="
                                    $safeNavigationMigration(item()?.map_id)
                                "
                                >{{ item()?.map_id }}</a
                            >
                        }
                        @if (item()?.tags) {
                            <div
                                class="flex items-center text-sm font-medium"
                                for="tags"
                            >
                                {{ 'ZONES.TAGS' | translate }}
                            </div>
                            <div class="-mx-1 flex flex-1 flex-wrap">
                                @for (tag of tag_list(); track tag) {
                                    <div
                                        class="mono bg-base-200 m-1 h-6 rounded-sm px-2 py-1 text-[0.625rem]"
                                    >
                                        {{ tag }}
                                    </div>
                                }
                                @if (!tag_list()?.length) {
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
                                    (item().created_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().created_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{ item().created_at * 1000 | dateFrom }}
                            </span>
                        </div>
                        <div class="flex items-center text-sm font-medium">
                            {{ 'COMMON.UPDATED_AT' | translate }}
                        </div>
                        <div class="flex items-center">
                            <span
                                [matTooltip]="
                                    (item().updated_at * 1000
                                        | date: 'mediumDate') +
                                    ', ' +
                                    (item().updated_at * 1000
                                        | date: 'shortTime')
                                "
                                matTooltipPosition="right"
                            >
                                {{
                                    $safeNavigationMigration(
                                        item()?.updated_at
                                    ) * 1000 | dateFrom
                                }}
                            </span>
                        </div>
                    </div>
                </div>
                @if ((systems | async)?.length) {
                    <div class="w-1/3 flex-1">
                        <div
                            class="border-base-200 flex flex-col rounded-sm border"
                        >
                            <header
                                class="bg-base-200 w-full rounded-sm px-4 py-3 text-lg font-medium"
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
                                @if (active_system()?.id) {
                                    <execute-method-field
                                        [zone]="
                                            $safeNavigationMigration(item()?.id)
                                        "
                                        [system]="active_system()"
                                    ></execute-method-field>
                                }
                            </div>
                        </div>
                    </div>
                }
            </section>
            @if (item()?.description) {
                <hr class="text-base-300 my-4" />
                <div class="border-base-200 w-full rounded-sm border">
                    <h3
                        class="bg-base-200 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                    </h3>
                    <div
                        class="markdown w-full overflow-auto p-4 text-sm"
                        [innerHTML]="
                            $safeNavigationMigration(item()?.description)
                                | markdown
                                | async
                        "
                    ></div>
                </div>
            }
            <hr class="my-4" />
            @if (item()?.settings) {
                <section>
                    <a-settings-form
                        [merge]="true"
                        [id]="$safeNavigationMigration(item()?.id)"
                        [settings]="$safeNavigationMigration(item()?.settings)"
                    ></a-settings-form>
                </section>
            } @else {
                <div class="flex flex-col items-center p-8">
                    <mat-spinner class="mb-4" diameter="48"></mat-spinner>
                    <p>{{ 'ZONES.LOADING_SETTINGS' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        SettingsFormComponent,
        TranslatePipe,
        MatTooltipModule,
        DateFromPipe,
        MarkdownPipe,
        ExecuteMethodFieldComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        RouterModule,
    ],
})
export class ZoneAboutComponent extends AsyncHandler {
    private _service = inject(ZonesStateService);

    /** List of associated systems */
    public readonly systems = this._service.systems;
    /** Selected system */
    public readonly active_system = signal<PlaceSystem | undefined>(undefined);
    public readonly item = toSignal(
        this._service.item as Observable<PlaceZone>,
        {
            initialValue: undefined as PlaceZone | undefined,
        },
    );
    public readonly parent = signal<PlaceZone | undefined>(undefined);
    public readonly tag_list = computed(() =>
        this.item() ? this.item()?.tags : [],
    );
    public readonly requires_parent = computed(() => {
        const item = this.item();
        if (!item?.tags?.length) return false;
        return (
            (item.tags.includes('level') ||
                item.tags.includes('building') ||
                item.tags.includes('region')) &&
            !item.parent_id
        );
    });

    constructor() {
        super();
        effect(() => {
            const item = this.item();
            this.parent.set(undefined);
            if (item?.parent_id) void this.loadParent(item.parent_id);
        });
    }

    private async loadParent(parent_id: string) {
        const zone = await lastValueFrom(showZone(parent_id));
        if (this.item()?.parent_id === parent_id && zone) this.parent.set(zone);
    }
}
