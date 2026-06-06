import { Component, computed, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { PlaceModule, PlaceSystem, querySystems } from '@placeos/ts-client';
import { toSignal } from '../common/signals';

import { BindingDirective } from '../ui/binding.directive';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DriverStateService } from './driver-state.service';

@Component({
    selector: 'driver-devices',
    template: `
        <div class="p-4">
            <section class="mb-4 flex items-center">
                <mat-form-field appearance="outline" class="h-12 flex-1">
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        matInput
                        [placeholder]="'MODULES.SEARCH' | translate"
                        class="rounded-none"
                    />
                </mat-form-field>
            </section>
            <section>
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="modules()"
                    [columns]="[
                        {
                            key: 'state',
                            name: 'MODULES.FIELD_STATE' | translate,
                            content: state_template,
                            size: '4rem',
                            sortable: false,
                        },
                        {
                            key: 'name',
                            name: 'DRIVERS.MODULE_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '6rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DRIVERS.MODULES_EMPTY' | translate"
                />
                <ng-template #state_template let-row="row">
                    @if (row.system) {
                        <i
                            binding
                            [(model)]="row.connected"
                            [sys]="row.system.id"
                            [mod]="row"
                            bind="connected"
                        ></i>
                    }
                    <div
                        class="mx-auto h-2 w-2 rounded-full"
                        [class.bg-base-content]="!row.running"
                        [class.bg-error]="row.running && !row.connected"
                        [class.bg-success]="row.running && row.connected"
                    ></div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/modules', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="'DRIVERS.VIEW_SYSTEMS' | translate"
                            [matMenuTriggerFor]="menu"
                            (click)="loadSystems(row)"
                        >
                            <icon>visibility</icon>
                        </button>
                        <button
                            icon
                            default
                            error
                            matRipple
                            [matTooltip]="'MODULES.DELETE' | translate"
                            (click)="removeModule(row)"
                        >
                            <icon>delete</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <div
                                class="bg-base-200 mx-1 -mt-1 mb-1 min-w-64 rounded-sm px-4 py-2 text-sm opacity-70"
                            >
                                {{
                                    'DRIVERS.SYSTEM_COUNT'
                                        | translate
                                            : {
                                                  count: $safeNavigationMigration(
                                                      systems[row.id]?.length
                                                  ),
                                              }
                                            : $safeNavigationMigration(
                                                  systems[row.id]?.length
                                              )
                                }}
                            </div>
                            @if (loading_systems) {
                                <div
                                    class="flex items-center space-x-2 p-2 text-sm"
                                >
                                    <mat-spinner [diameter]="32" />
                                    <span>{{
                                        'DRIVERS.LOADING_SYSTEMS' | translate
                                    }}</span>
                                </div>
                            }
                            @for (
                                system of systems[row.id] || [];
                                track system.id
                            ) {
                                <a
                                    mat-menu-item
                                    class="leading-tight"
                                    [routerLink]="['/systems', system.id]"
                                >
                                    <div
                                        class="flex h-full flex-col justify-center px-2 leading-tight"
                                    >
                                        <div class="text-base">
                                            {{
                                                system.display_name ||
                                                    system.name
                                            }}
                                        </div>
                                        <div class="text-xs opacity-30">
                                            {{ system.id }}
                                        </div>
                                    </div>
                                </a>
                            }
                        </mat-menu>
                    </div>
                </ng-template>
            </section>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [role='table'] > div {
                width: 100%;
                min-width: 28rem;
            }
        `,
    ],
    imports: [
        MatMenuModule,
        RouterModule,
        MatRippleModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        MatTooltipModule,
        SimpleTableComponent,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        IconComponent,
        RouterModule,
        BindingDirective,
    ],
})
export class DriverModulesComponent {
    private _service = inject(DriverStateService);

    public loading_systems = false;
    /** Signal holding the value of the search */
    public readonly filter = model('');
    /** Whether systems are being loaded */
    public readonly loading = toSignal(this._service.loading, {
        initialValue: false,
    });
    /** Currently active driver */
    public readonly item = this._service.item;
    /** List of systems associated with modules */
    public readonly systems: Record<string, PlaceSystem[]> = {};
    /** Whether systems are being loaded */
    /** List of modules */
    public readonly module_list = toSignal(this._service.modules, {
        initialValue: [] as PlaceModule[],
    });
    public readonly modules = computed(() => {
        const filter = this.filter().toLowerCase();
        const modules = this.module_list();
        return filter
            ? modules.filter(
                  (mod) =>
                      mod.name.toLowerCase().includes(filter) ||
                      mod.custom_name.toLowerCase().includes(filter),
              )
            : modules;
    });

    public readonly removeModule = (d) => this._service.removeModule(d);

    public async loadSystems(mod: PlaceModule) {
        this.loading_systems = true;
        const { data: systems } = await querySystems({ module_id: mod.id });
        this.systems[mod.id] = systems || [];
        this.loading_systems = false;
    }
}
