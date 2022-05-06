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
import { map } from 'rxjs/operators';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { AppLink, HashMap } from 'apps/backoffice/src/app/common/types';
import {
    ModuleStateModalData,
    ViewModuleStateModalComponent,
} from 'apps/backoffice/src/app/overlays/view-module-state/view-module-state.component';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-modules',
    template: `
        <ng-container *ngIf="item">
            <section add-module class="flex space-x-2 flex-wrap mb-2">
                <item-search-field
                    class="flex-grow-1 w-full sm:flex-1 sm:w-auto h-12"
                    name="module"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [ngModel]="null"
                    (ngModelChange)="new_module = $event.id"
                ></item-search-field>
                <button
                    mat-button
                    class="flex-1 w-40 sm:w-32 sm:flex-none h-11"
                    [disabled]="!new_module"
                    (click)="addModule()"
                    i18n="@@addExistingAction"
                >
                    Add existing
                </button>
                <button
                    mat-button
                    class="flex-1 w-40 sm:w-32 sm:flex-none h-11"
                    (click)="newModule()"
                    i18n="@@newAction"
                >
                    Add new
                </button>
            </section>
            <section
                exec
                *ngIf="item.id && item.modules && !hide_exec"
                class="mb-2"
            >
                <h3 class="font-medium text-lg mb-2" i18n="@@execHeader">
                    Execute command
                </h3>
                <execute-method-field [system]="item"></execute-method-field>
            </section>
            <section device-list>
                <h3 class="font-medium text-lg mb-2" i18n="@@moduleListHeader">
                    Module List
                </h3>
                <ng-container
                    *ngIf="!(loading | async).modules; else load_state"
                >
                    <div
                        role="table"
                        class="overflow-x-auto"
                        *ngIf="(modules | async)?.length; else empty_state"
                    >
                        <div table-head>
                            <div class="w-10 p-2"></div>
                            <div class="w-12 p-2" i18n="@@moduleStateLabel">
                                State
                            </div>
                            <div class="flex-1 p-2" i18n="@@moduleNameLabel">
                                Name
                            </div>
                            <div class="w-48 p-2" i18n="@@moduleClassLabel">
                                Class
                            </div>
                            <div class="w-48 p-2" i18n="@@moduleIpLabel">
                                IP/URI
                            </div>
                            <div class="w-[3.5rem] p-2" i18n="@@moduleStateLabel">
                                Debug
                            </div>
                            <div class="w-24 p-2 h-9"></div>
                        </div>
                        <div
                            body
                            cdkDropList
                            (cdkDropListDropped)="drop($event)"
                            class="overflow-y-auto"
                        >
                            <div
                                table-row
                                cdkDrag
                                *ngFor="
                                    let device of modules | async;
                                    let i = index
                                "
                                [context-menu]="menu"
                                (contextAction)="
                                    handleContextEvent($event, device)
                                "
                            >
                                <div
                                    class="w-full h-10 border-2 border-dashed border-gray-600 bg-gray-300 bg-opacity-25"
                                    *cdkDragPlaceholder
                                ></div>
                                <div
                                    class="w-10 flex justify-center h-full"
                                    style="cursor: grab"
                                >
                                    <app-icon
                                        className="backoffice-select-arrows"
                                        cdkDragHandle
                                    ></app-icon>
                                </div>
                                <div
                                    class="w-12 flex items-center justify-center p-2 h-full"
                                >
                                    <div
                                        dot
                                        binding
                                        [sys]="item.id"
                                        [mod]="(bindings | async)[i]"
                                        bind="connected"
                                        [(model)]="device.connected"
                                        class="h-4 w-4 rounded-full"
                                        [class.bg-black]="!device.running"
                                        [class.bg-error]="
                                            device.running && !device.connected
                                        "
                                        [class.bg-success]="
                                            device.running && !!device.connected
                                        "
                                        (click)="power(device)"
                                    ></div>
                                </div>
                                <div
                                    class="flex-1 p-2 h-full flex flex-col justify-center"
                                >
                                    <a
                                        [routerLink]="['/modules', device.id]"
                                        (contextmenu)="$event.stopPropagation()"
                                        class="truncate underline underline-offset-4 w-full"
                                        [title]="
                                            device.driver?.name || '<Unnamed>'
                                        "
                                    >
                                        {{
                                            device.driver?.name ||
                                                '&lt;Unnamed&gt;'
                                        }}
                                    </a>
                                    <div
                                        class="text-xs truncate w-full"
                                        *ngIf="device.notes"
                                    >
                                        {{ device.notes }}
                                    </div>
                                </div>
                                <div class="w-48 p-2">
                                    <span
                                        class="truncate"
                                        [title]="(bindings | async)[i]"
                                        >{{ (bindings | async)[i] }}</span
                                    >
                                </div>
                                <div
                                    class="w-48 text-right flex items-center h-full p-2"
                                >
                                    <app-icon
                                        *ngIf="device.tls"
                                        className="backoffice-lock"
                                    ></app-icon>
                                    <a
                                        [href]="
                                            device.ip
                                                ? (device.tls
                                                      ? 'https://'
                                                      : 'http://') + device.ip
                                                : device.uri
                                        "
                                        target="_blank"
                                        class="truncate underline"
                                        >{{ device.ip || device.uri }}</a
                                    >
                                </div>
                                <div
                                    class="w-[3.5rem] flex items-center justify-center p-2 h-full"
                                >
                                    <mat-checkbox
                                        [disabled]="!device.running"
                                        [checked]="
                                            (debugging | async)[device.id]
                                        "
                                        [matTooltip]="
                                            ((debugging | async)[device.id]
                                                ? 'Disable'
                                                : 'Enable') + ' Debugging'
                                        "
                                        matTooltipPosition="left"
                                        (change)="toggleDebug(device)"
                                    >
                                    </mat-checkbox>
                                </div>
                                <div class="w-24 flex px-2 justify-center">
                                    <button
                                        mat-icon-button
                                        (click)="editModule(device)"
                                    >
                                        <app-icon
                                            [icon]="{
                                                class: 'backoffice-edit'
                                            }"
                                        ></app-icon>
                                    </button>
                                    <button
                                        mat-icon-button
                                        [matMenuTriggerFor]="menu"
                                    >
                                        <app-icon
                                            [icon]="{
                                                class: 'backoffice-dots-three-vertical'
                                            }"
                                        ></app-icon>
                                    </button>
                                    <mat-menu #menu="matMenu">
                                        <button
                                            mat-menu-item
                                            *ngFor="
                                                let item of device.running
                                                    ? menu_options
                                                    : offline_options
                                            "
                                            (click)="
                                                handleContextEvent(item, device)
                                            "
                                        >
                                            <app-icon
                                                [icon]="item.icon"
                                            ></app-icon>
                                            <div class="text">
                                                {{ item.name }}
                                            </div>
                                        </button>
                                    </mat-menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </ng-container>
            </section>
        </ng-container>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>Loading modules...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8 mx-auto">
                <p>No devices for system</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
            }

            button[mat-button] {
                min-width: 8rem;
            }

            button.mat-menu-item {
                display: flex;
                align-items: center;
            }

            button .text {
                margin-left: 1rem;
            }

            [role='table'] > div {
                width: 100%;
                min-width: 48rem;
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
export class SystemModulesComponent extends BaseClass {
    /** Whether a device should be listened to */
    public device_listener: HashMap<boolean> = {};
    /** Store for ID of new module to add to system */
    public new_module: string;
    /** Whether to show exec block */
    public hide_exec: boolean;
    /** Whether to refresh the list of active modules in the exec options */
    public refresh_modules: boolean;

    public readonly loading = this._service.loading;
    public readonly modules = this._service.modules;
    public readonly debugging = this._service.debug_state;
    public readonly bindings = this._service.module_bindings;
    /** Actions available for the context menu */
    public menu_options: AppLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' },
        },
        {
            id: 'state',
            name: 'View State',
            icon: { type: 'icon', class: 'backoffice-eye' },
        },
        {
            id: 'reload',
            name: 'Recompile Driver',
            icon: { type: 'icon', class: 'backoffice-cw' },
        },
        {
            id: 'edit',
            name: 'Edit Module',
            icon: { type: 'icon', class: 'backoffice-edit' },
        },
        {
            id: 'remove',
            name: 'Remove Module',
            icon: { type: 'icon', class: 'backoffice-trash' },
        },
        {
            id: 'load',
            name: 'Load Module',
            icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
        },
    ];

    public offline_options: AppLink[] = [
        {
            id: 'power',
            name: 'Toggle Power',
            icon: { type: 'icon', class: 'backoffice-power-plug' },
        },
        {
            id: 'edit',
            name: 'Edit Module',
            icon: { type: 'icon', class: 'backoffice-edit' },
        },
        {
            id: 'remove',
            name: 'Remove Module',
            icon: { type: 'icon', class: 'backoffice-trash' },
        },
        {
            id: 'load',
            name: 'Load Module',
            icon: { type: 'icon', class: 'backoffice-arrow-with-circle-up' },
        },
    ];
    /** Query method for modules */
    public readonly query_fn = (_: string) =>
        queryModules({ q: _ }).pipe(
            map((_) =>
                _.data.map((mod) => ({ ...mod, extra: mod.driver?.name }))
            )
        );
    /** Function for excluding modules already within this system */
    public readonly exclude_fn = (item: PlaceModule) =>
        item.control_system_id === this.item.id ||
        item.role === PlaceDriverRole.Logic;

    public readonly newModule = () => this._service.newModule();
    public readonly removeModule = (d) => this._service.removeModule(d);
    public readonly editModule = (d) => this._service.editModule(d);
    public readonly joinModule = (id) => this._service.joinModule(id);
    public readonly reloadModule = (d) => this._service.reloadModule(d);
    public readonly toggleDebug = (d) => this._service.toggleModuleDebug(d);
    public readonly power = (d) => {
        this._service.toggleModulePower(d);
        this.refresh_modules = !this.refresh_modules;
    };

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
                case 'reload':
                    this.reloadModule(device);
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
    public drop(event: CdkDragDrop<any[]>) {
        if (event && event.previousIndex !== event.currentIndex) {
            this._service.reorderModules(
                event.previousIndex,
                event.currentIndex
            );
        }
    }

    public addModule() {
        if (!this.new_module) return;
        this.joinModule(this.new_module);
        this.new_module = '';
    }
}
