import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    loadModule,
    PlaceDriverRole,
    PlaceModule,
    PlaceSystem,
    queryModules,
    showModule,
} from '@placeos/ts-client';
import { map, tap } from 'rxjs/operators';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { AppLink, HashMap } from 'apps/backoffice/src/app/common/types';
import {
    ModuleStateModalData,
    ViewModuleStateModalComponent,
} from 'apps/backoffice/src/app/overlays/view-module-state.component';
import { SystemStateService } from './system-state.service';
import { ModuleRuntimeErrorsModalComponent } from '../ui/module-runtime-errors.modal';

@Component({
    selector: 'system-modules',
    template: `
        <div class="w-full h-full flex flex-col" *ngIf="item">
            <section
                exec
                *ngIf="item.id && item.modules && !hide_exec"
                class="mb-4"
            >
                <h3 class="font-medium text-lg mb-2" i18n="@@execHeader">
                    Execute command
                </h3>
                <execute-method-field
                    [system]="item$ | async"
                ></execute-method-field>
            </section>
            <h3 class="font-medium text-lg mb-2" i18n="@@moduleListHeader">
                Module List
            </h3>
            <section add-module class="flex space-x-2 flex-wrap mb-2">
                <item-search-field
                    class="flex-grow-1 w-full sm:flex-1 sm:w-auto h-12"
                    name="module"
                    placeholder="Add existing module"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [ngModel]="null"
                    (ngModelChange)="new_module = $event.id"
                ></item-search-field>
                <button
                    btn
                    class="flex-1 w-40 sm:w-32 sm:flex-none h-11"
                    [disabled]="!new_module"
                    (click)="addModule()"
                    i18n="@@addExistingAction"
                >
                    Add existing
                </button>
                <button
                    btn
                    class="flex-1 w-40 sm:w-32 sm:flex-none h-11"
                    (click)="newModule()"
                    i18n="@@newAction"
                >
                    Add new
                </button>
            </section>
            <section device-list class="flex-1 h-1/2 overflow-auto w-full">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!(loading | async).modules"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[80rem] block text-sm overflow-visible"
                    [data]="modules"
                    [columns]="[
                        {
                            key: 'state',
                            name: 'State',
                            content: state_template,
                            size: '4rem'
                        },
                        {
                            key: 'name',
                            name: 'Name',
                            content: name_template,
                            size: '16rem'
                        },
                        {
                            key: 'type',
                            name: 'Type',
                            content: type_template,
                            size: '7rem'
                        },
                        {
                            key: 'class',
                            name: 'Class',
                            content: class_template,
                            size: '16rem'
                        },
                        {
                            key: 'url',
                            name: 'Address',
                            content: url_template,
                        },
                        {
                            key: 'debug',
                            name: 'Debug',
                            content: debug_template,
                            size: '4.5rem'
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6.5rem',
                            content: actions_template
                        }
                    ]"
                    [can_reorder]="true"
                    [color]="colors | async"
                    (ondrop)="drop($event)"
                    empty_message="No modules for selected system"
                ></simple-table>
                <div class="w-full h-12"></div>
                <ng-template #state_template let-row="row" let-index="index">
                    <button
                        dot
                        binding
                        [sys]="item.id"
                        [mod]="(bindings | async)[index]"
                        bind="connected"
                        [(model)]="row.connected"
                        class="h-4 w-4 rounded-full mx-auto"
                        [class.bg-base-content]="!row.running"
                        [class.bg-error]="
                            row.running && row.connected === false
                        "
                        [class.bg-success]="row.running && !!row.connected"
                        [class.bg-pending]="
                            row.running && row.connected === undefined
                        "
                        [matMenuTriggerFor]="status_menu"
                    ></button>
                    <mat-menu #status_menu="matMenu">
                        <button
                            mat-menu-item
                            *ngFor="
                                let m_item of row.running
                                    ? menu_options
                                    : offline_options
                            "
                            [disabled]="
                                m_item.enable_on && !row[m_item.enable_on]
                            "
                            (click)="handleContextEvent(m_item, row)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon
                                    class="text-xl"
                                    [icon]="m_item.icon"
                                ></app-icon>
                                <div class="text">
                                    {{ m_item.name }}
                                </div>
                            </div>
                        </button>
                    </mat-menu>
                    <mat-spinner
                        *ngIf="row.running && row.connected === undefined"
                        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        diameter="32"
                    ></mat-spinner>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex items-center justify-between space-x-2 px-4 py-2 max-w-full w-full"
                    >
                        <div
                            class="flex-1 flex flex-col items-start leading-snug max-w-full overflow-hidden"
                        >
                            <a
                                class="truncate underline max-w-full"
                                [routerLink]="['/modules', row.id]"
                            >
                                {{ row.driver?.name || row.name }}
                            </a>
                            <div class="text-[0.625rem] opacity-30 font-mono">
                                {{ row.notes || row.id }}
                            </div>
                        </div>
                        <a
                            *ngIf="row.edge_id"
                            icon
                            matRipple
                            class="text-xs h-6 w-6 max-w-6 min-w-6 rounded-full bg-info border border-base-200 text-info-content"
                            [matTooltip]="row.edge_id"
                            [routerLink]="['/admin', 'edge', row.edge_id]"
                        >
                            E
                        </a>
                    </div>
                </ng-template>
                <ng-template #type_template let-row="row">
                    <div class="p-4">
                        {{ driver_type(row.role || row.driver?.role) }}
                    </div>
                </ng-template>
                <ng-template #class_template let-row="row" let-index="index">
                    <div class="p-4 font-mono text-xs">
                        {{ (bindings | async)[index] }}
                    </div>
                </ng-template>
                <ng-template #url_template let-row="row">
                    <div class="p-4 flex items-center max-w-[22rem]">
                        <app-icon [class.opacity-0]="!row.tls" class="text-xl">
                            lock
                        </app-icon>
                        <a
                            [href]="
                                row.ip
                                    ? (row.tls ? 'https://' : 'http://') +
                                      row.ip
                                    : row.uri
                            "
                            target="_blank"
                            class="truncate underline max-w-[20rem]"
                        >
                            {{ row.ip || row.uri }}
                        </a>
                    </div>
                </ng-template>
                <ng-template #debug_template let-row="row">
                    <div class="mx-auto">
                        <mat-checkbox
                            [disabled]="!row.running"
                            [checked]="(debugging | async)[row.id]"
                            [matTooltip]="
                                ((debugging | async)[row.id]
                                    ? 'Disable'
                                    : 'Enable') + ' Debugging'
                            "
                            matTooltipPosition="left"
                            (change)="toggleDebug(row)"
                        >
                        </mat-checkbox>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2 mx-auto">
                        <button icon matRipple (click)="editModule(row)">
                            <app-icon>edit</app-icon>
                        </button>
                        <button icon matRipple [matMenuTriggerFor]="end_menu">
                            <app-icon>more_vert</app-icon>
                        </button>
                        <mat-menu #end_menu="matMenu">
                            <button
                                mat-menu-item
                                *ngFor="
                                    let m_item of row.running
                                        ? menu_options
                                        : offline_options
                                "
                                [disabled]="
                                    m_item.enable_on && !row[m_item.enable_on]
                                "
                                (click)="handleContextEvent(m_item, row)"
                            >
                                <div class="flex items-center space-x-2">
                                    <app-icon
                                        class="text-xl"
                                        [icon]="m_item.icon"
                                    ></app-icon>
                                    <div class="text">
                                        {{ m_item.name }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                </ng-template>
            </section>
        </div>
    `,
    styles: [
        `
            button[btn] {
                min-width: 8rem;
            }

            button.mat-menu-item {
                display: flex;
                align-items: center;
            }

            button .text {
                margin-left: 1rem;
            }

            .bg-success {
                height: 0.5rem !important;
                width: 0.5rem !important;
            }

            [dot] {
                transition: height 200ms, width 200ms;
            }

            mat-checkbox.mat-checkbox-disabled {
                pointer-events: none;
            }
        `,
    ],
})
export class SystemModulesComponent extends AsyncHandler {
    /** Whether a device should be listened to */
    public device_listener: HashMap<boolean> = {};
    /** Store for ID of new module to add to system */
    public new_module: string;
    /** Whether to show exec block */
    public hide_exec: boolean;

    public readonly item$ = this._service.item;
    public readonly loading = this._service.loading;
    public readonly modules = this._service.modules;
    public readonly debugging = this._service.debug_state;
    public readonly bindings = this._service.module_bindings;

    public readonly colors = this.modules.pipe(
        map((list) => {
            const colors: Record<number, string> = {};
            for (const i in list) {
                if (list[i].has_runtime_error) {
                    colors[i] = 'var(--erl)';
                }
            }
            return colors;
        })
    );
    /** Actions available for the context menu */
    public menu_options: AppLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', content: 'power' },
        },
        {
            id: 'state',
            name: 'View State',
            icon: { type: 'icon', content: 'visibility' },
        },
        {
            id: 'edit',
            name: 'Edit Module',
            icon: { type: 'icon', content: 'edit' },
        },
        {
            id: 'load',
            name: 'Load Module',
            icon: { type: 'icon', content: 'cloud_download' },
        },
        {
            id: 'view-error',
            name: 'View Runtime Errors',
            enable_on: 'has_runtime_error',
            icon: { type: 'icon', content: 'error' },
        } as any,
        {
            id: 'remove',
            name: 'Remove Module',
            icon: {
                type: 'icon',
                class: 'material-symbols-rounded text-error',
                content: 'delete',
            },
        },
    ];

    public offline_options: AppLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', content: 'power' },
        },
        {
            id: 'edit',
            name: 'Edit Module',
            icon: { type: 'icon', content: 'edit' },
        },
        {
            id: 'load',
            name: 'Load Module',
            icon: { type: 'icon', content: 'cloud_download' },
        },
        {
            id: 'remove',
            name: 'Remove Module',
            icon: {
                type: 'icon',
                class: 'material-symbols-rounded text-error',
                content: 'delete',
            },
        },
    ];
    /** Query method for modules */
    public readonly query_fn = (_: string) =>
        queryModules({ q: _, no_logic: true }).pipe(
            map((_) =>
                _.data.map((mod) => ({ ...mod, extra: mod.driver?.name }))
            )
        );
    /** Function for excluding modules already within this system */
    public readonly exclude_fn = (item: PlaceModule, _: string) =>
        item.control_system_id === this.item.id ||
        item.role === PlaceDriverRole.Logic;

    public readonly newModule = () => this._service.newModule();
    public readonly removeModule = (d) => this._service.removeModule(d);
    public readonly editModule = (d) => this._service.editModule(d);
    public readonly joinModule = (id) => this._service.joinModule(id);
    public readonly toggleDebug = (d) => this._service.toggleModuleDebug(d);
    public readonly power = (d) => this._service.toggleModulePower(d);

    public driver_type(role: PlaceDriverRole): string {
        if (role == null) return '';
        switch (role) {
            case PlaceDriverRole.Device:
                return 'Device';
            case PlaceDriverRole.SSH:
                return 'SSH';
            case PlaceDriverRole.Service:
                return 'Service';
            case PlaceDriverRole.Websocket:
                return 'Websocket';
        }
        return 'Logic';
    }

    public get item(): PlaceSystem {
        return this._service.active_item as any;
    }

    constructor(
        private _service: SystemStateService,
        private _dialog: MatDialog
    ) {
        super();
    }

    /**
     * Handle context menu event
     * @param event Event posted by the context menu
     * @param device Module associated with the context menu event
     */
    public handleContextEvent(event: AppLink, device: PlaceModule) {
        if (event) {
            switch (event.id) {
                case 'power':
                    this.power(device);
                    break;
                case 'state':
                    this.viewState(device);
                    break;
                case 'remove':
                    this.removeModule(device);
                    break;
                case 'load':
                    this.loadModule(device);
                    break;
                case 'edit':
                    this.editModule(device);
                    break;
                case 'view-error':
                    this.viewRuntimeError(device);
                    break;
            }
        }
    }

    /**
     * Update the state of the module
     * @param device Module to reload
     */
    public async reload(device: PlaceModule) {
        const item = await showModule(device.id).toPromise();
        for (const k in item) {
            if (item.hasOwnProperty(k)) {
                device[k] = item[k];
            }
        }
    }

    public async viewState(device: PlaceModule) {
        const modules = this._service.getModules();
        this._dialog.open<ViewModuleStateModalComponent, ModuleStateModalData>(
            ViewModuleStateModalComponent,
            { data: { system: this.item, module: device, devices: modules } }
        );
    }

    public loadModule(device: PlaceModule) {
        loadModule(device.id)
            .toPromise()
            .then(
                () =>
                    notifySuccess(
                        `Successfully loaded module "${
                            device.name || device.id
                        }"`
                    ),
                (err) =>
                    notifyError(
                        `Error loading module. Error: ${JSON.stringify(
                            err.response || err.message || err
                        )}`
                    )
            );
    }

    /**
     * Handle drop event for reordering the devices
     * @param event Drag drop details
     */
    public drop([previous, current]: [number, number]) {
        if (previous === current) return;
        this._service.reorderModules(previous, current);
    }

    public addModule() {
        if (!this.new_module) return;
        this.joinModule(this.new_module);
        this.new_module = '';
    }

    public viewRuntimeError(device: PlaceModule) {
        this._dialog.open<ModuleRuntimeErrorsModalComponent>(
            ModuleRuntimeErrorsModalComponent,
            { data: device.id }
        );
    }
}
