import { Component, computed, inject, model, signal } from '@angular/core';
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
import { CustomTooltipComponent } from '../ui/custom-tooltip.component';
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
                            customTooltip
                            [content]="content"
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
                        <ng-template #content>
                            <div
                                class="bg-base-100 border-base-300 relative border"
                            >
                                @let is_loading = loading_systems() === row.id;
                                <div
                                    class="bg-base-100 border-base-300 text-base-content/70 absolute left-1 -translate-y-full rounded-t-lg border-x border-t px-3 py-1 font-mono text-[0.625rem] font-medium"
                                >
                                    {{
                                        'DRIVERS.SYSTEM_COUNT'
                                            | translate
                                                : {
                                                      count: is_loading
                                                          ? '?'
                                                          : systemCount(row.id),
                                                  }
                                                : systemCount(row.id)
                                    }}
                                </div>
                                @if (is_loading) {
                                    <div
                                        class="text-base-content/70 flex min-w-72 items-center space-x-3 px-4 py-3 text-sm"
                                    >
                                        <mat-spinner [diameter]="24" />
                                        <span>{{
                                            'DRIVERS.LOADING_SYSTEMS'
                                                | translate
                                        }}</span>
                                    </div>
                                } @else if (systems()[row.id]?.length) {
                                    <div
                                        class="max-h-80 min-w-72 overflow-auto"
                                    >
                                        @for (
                                            system of systems()[row.id] || [];
                                            track system.id
                                        ) {
                                            <a
                                                mat-menu-item
                                                class="min-h-14 leading-tight"
                                                [routerLink]="[
                                                    '/systems',
                                                    system.id,
                                                ]"
                                            >
                                                <div
                                                    class="flex h-full min-w-0 items-center space-x-3 py-1"
                                                >
                                                    <icon
                                                        class="text-base-content/50 text-xl"
                                                    >
                                                        meeting_room
                                                    </icon>
                                                    <div
                                                        class="flex min-w-0 flex-col justify-center leading-tight"
                                                    >
                                                        <div
                                                            class="text-base-content truncate text-sm font-medium"
                                                        >
                                                            {{
                                                                system.display_name ||
                                                                    system.name
                                                            }}
                                                        </div>
                                                        <div
                                                            class="text-base-content/40 font-mono text-[0.625rem]"
                                                        >
                                                            {{ system.id }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        }
                                    </div>
                                } @else {
                                    <div
                                        class="text-base-content/50 flex min-w-72 items-center space-x-3 px-4 py-3 text-sm"
                                    >
                                        <icon class="text-xl">info</icon>
                                        <span>
                                            {{
                                                'DRIVERS.SYSTEM_COUNT'
                                                    | translate
                                                        : {
                                                              count: 0,
                                                          }
                                                        : 0
                                            }}
                                        </span>
                                    </div>
                                }
                            </div>
                        </ng-template>
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
        CustomTooltipComponent,
    ],
})
export class DriverModulesComponent {
    private _service = inject(DriverStateService);

    public readonly loading_systems = signal('');
    /** Signal holding the value of the search */
    public readonly filter = model('');
    /** Whether systems are being loaded */
    public readonly loading = toSignal(this._service.loading, {
        initialValue: false,
    });
    /** Currently active driver */
    public readonly item = this._service.item;
    /** List of systems associated with modules */
    public readonly systems = signal<Record<string, PlaceSystem[]>>({});
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
    public readonly systemCount = (module_id: string) =>
        this.systems()[module_id]?.length || 0;

    public async loadSystems(mod: PlaceModule) {
        this.loading_systems.set(mod.id);
        this.systems.update((state) => ({ ...state, [mod.id]: [] }));
        try {
            const { data: systems } = await querySystems({ module_id: mod.id });
            this.systems.update((state) => ({
                ...state,
                [mod.id]: systems || [],
            }));
        } finally {
            this.loading_systems.set('');
        }
    }
}
