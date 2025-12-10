import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import {
    loadModule,
    PlaceDriverRole,
    PlaceModule,
    PlaceSystem,
    queryModules,
    showModule,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { nextValueFrom } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { AppLink, HashMap } from '../common/types';
import {
    ModuleStateModalData,
    ViewModuleStateModalComponent,
} from '../overlays/view-module-state.component';
import { BindingDirective } from '../ui/binding.directive';
import { ContextMenuComponent } from '../ui/context-menu.component';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { ExecuteMethodFieldComponent } from '../ui/custom-fields/system-exec/execute-method-field.component';
import { IconComponent } from '../ui/icon.component';
import { ModuleRuntimeErrorsModalComponent } from '../ui/module-runtime-errors-modal.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { SystemStateService } from './system-state.service';

@Component({
    selector: 'system-modules',
    template: `
        @if (item) {
            @if (item.id && item.modules && !hide_exec) {
                <section exec class="p-4">
                    <h3
                        class="bg-base-200 mb-2 w-full rounded-sm p-4 text-lg font-medium"
                    >
                        {{ 'COMMON.EXECUTE_COMMAND' | translate }}
                    </h3>
                    <execute-method-field
                        [system]="item$ | async"
                    ></execute-method-field>
                </section>
            }
            <h3
                class="bg-base-200 mx-auto mb-2 w-[calc(100%-2rem)] rounded-sm p-4 text-lg font-medium"
            >
                {{ 'SYSTEMS.MODULE_LIST' | translate }}
            </h3>
            <section add-module class="flex w-full flex-wrap space-x-2 px-4">
                <item-search-field
                    class="h-12 w-full grow sm:w-auto sm:flex-1"
                    name="module"
                    [placeholder]="'SYSTEMS.FIND_MODULE' | translate"
                    [query_fn]="query_fn"
                    [exclude]="exclude_fn"
                    [ngModel]="null"
                    (ngModelChange)="new_module.set($event.id)"
                ></item-search-field>
                <button
                    btn
                    matRipple
                    class="h-11 w-40 flex-1 sm:w-32 sm:flex-none"
                    [disabled]="!new_module()"
                    (click)="addModule()"
                >
                    {{ 'COMMON.ADD_EXISTING' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="h-11 w-40 flex-1 sm:w-32 sm:flex-none"
                    (click)="newModule()"
                >
                    {{ 'COMMON.ADD_NEW' | translate }}
                </button>
            </section>
            <section device-list class="overflow-y-auto p-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.opacity-0]="!(loading | async).modules"
                ></mat-progress-bar>
                <mat-menu #context_menu="matMenu">
                    @if (active_item()) {
                        @for (
                            m_item of active_item().running
                                ? menu_options
                                : offline_options;
                            track m_item
                        ) {
                            <button
                                mat-menu-item
                                [disabled]="
                                    m_item.enable_on &&
                                    !active_item()[m_item.enable_on]
                                "
                                (click)="
                                    handleContextEvent(m_item, active_item())
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon
                                        class="text-xl"
                                        [icon]="m_item.icon"
                                    ></icon>
                                    <div class="text">
                                        {{ m_item.name | translate }}
                                    </div>
                                </div>
                            </button>
                        }
                    }
                </mat-menu>
                <div [context-menu]="context_menu" class="flex">
                    <simple-table
                        class="block min-w-312 text-sm"
                        [data]="modules"
                        (enter_row)="setActive($event)"
                        [columns]="[
                            {
                                key: 'state',
                                name: 'SYSTEMS.MODULE_FIELD_STATE' | translate,
                                content: state_template,
                                size: '4rem',
                            },
                            {
                                key: 'name',
                                name: 'SYSTEMS.MODULE_FIELD_NAME' | translate,
                                content: name_template,
                                size: '15rem',
                            },
                            {
                                key: 'type',
                                name: 'SYSTEMS.MODULE_FIELD_TYPE' | translate,
                                content: type_template,
                                size: '6.5rem',
                            },
                            {
                                key: 'class',
                                name: 'SYSTEMS.MODULE_FIELD_CLASS' | translate,
                                content: class_template,
                                size: '15rem',
                            },
                            {
                                key: 'url',
                                name:
                                    'SYSTEMS.MODULE_FIELD_ADDRESS' | translate,
                                content: url_template,
                            },
                            {
                                key: 'debug',
                                name: 'SYSTEMS.MODULE_FIELD_DEBUG' | translate,
                                content: debug_template,
                                size: '4.5rem',
                            },
                            {
                                key: 'actions',
                                name: ' ',
                                size: '6.5rem',
                                content: actions_template,
                            },
                        ]"
                        [can_reorder]="true"
                        [color]="colors | async"
                        (ondrop)="drop($event)"
                        [empty_message]="
                            'SYSTEMS.MODULE_LIST_EMPTY' | translate
                        "
                    />
                    <div class="h-32 w-4 min-w-4"></div>
                </div>
                <ng-template #state_template let-row="row" let-index="index">
                    <button
                        dot
                        binding
                        [sys]="item.id"
                        [mod]="(bindings | async)[index]"
                        bind="connected"
                        [(model)]="row.connected"
                        class="mx-auto h-4 w-4 rounded-full"
                        [class.bg-base-content]="!row.running"
                        [class.bg-error]="
                            row.running && row.connected === false
                        "
                        [class.bg-success]="row.running && !!row.connected"
                        [class.bg-pending]="
                            row.running && row.connected === undefined
                        "
                        (click)="setActive(index)"
                        [matMenuTriggerFor]="context_menu"
                        aria-label="Module connection status"
                    ></button>
                    @if (row.running && row.connected === undefined) {
                        <mat-spinner
                            class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            diameter="32"
                        />
                    }
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex w-full max-w-full items-center justify-between space-x-2 px-4 py-2"
                    >
                        <div
                            class="flex max-w-full flex-1 flex-col items-start overflow-hidden leading-snug"
                        >
                            <a
                                class="max-w-full truncate underline"
                                [routerLink]="['/modules', row.id]"
                            >
                                {{ row.driver?.name || row.name }}
                            </a>
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ row.notes || row.id }}
                            </div>
                        </div>
                        @if (row.edge_id) {
                            <a
                                icon
                                matRipple
                                class="border-base-200 bg-info text-info-content h-6 w-6 max-w-6 min-w-6 rounded-full border text-xs"
                                [matTooltip]="row.edge_id"
                                [routerLink]="['/admin', 'edge', row.edge_id]"
                            >
                                E
                            </a>
                        }
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
                    <div class="flex max-w-88 items-center p-4">
                        <icon [class.opacity-0]="!row.tls" class="text-xl">
                            lock
                        </icon>
                        <a
                            [href]="
                                row.ip
                                    ? (row.tls ? 'https://' : 'http://') +
                                      row.ip
                                    : row.uri
                            "
                            target="_blank"
                            class="max-w-[20rem] truncate underline"
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
                                    ? 'SYSTEMS.DEBUG_DISABLE'
                                    : 'SYSTEMS.DEBUG_ENABLE'
                                ) | translate
                            "
                            matTooltipPosition="left"
                            (change)="toggleDebug(row)"
                            [class.opacity-30]="!row.running"
                        >
                        </mat-checkbox>
                    </div>
                </ng-template>
                <ng-template #actions_template let-i="index" let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button icon matRipple (click)="editModule(row)">
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="setActive(i)"
                            [matMenuTriggerFor]="context_menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        }
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
                transition:
                    height 200ms,
                    width 200ms;
            }

            mat-checkbox.mat-checkbox-disabled {
                pointer-events: none;
            }
        `,
    ],
    imports: [
        MatMenuModule,
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MatCheckboxModule,
        MatTooltipModule,
        CommonModule,
        SimpleTableComponent,
        ExecuteMethodFieldComponent,
        BindingDirective,
        MatProgressSpinnerModule,
        ContextMenuComponent,
        RouterModule,
        ItemSearchFieldComponent,
        FormsModule,
        MatProgressBarModule,
    ],
})
export class SystemModulesComponent extends AsyncHandler {
    private _service = inject(SystemStateService);
    private _dialog = inject(MatDialog);

    /** Whether a device should be listened to */
    public device_listener: HashMap<boolean> = {};
    /** Store for ID of new module to add to system */
    public readonly new_module = signal('');
    /** Whether to show exec block */
    public hide_exec: boolean;

    public readonly active_item = signal<PlaceModule>(null);

    public readonly item$ = this._service.item.pipe(
        map((_) => _ as PlaceSystem),
    );
    public readonly loading = this._service.loading;
    public readonly modules = this._service.modules;
    public readonly debugging = this._service.debug_state;
    public readonly bindings = this._service.module_bindings;

    public readonly colors = this.modules.pipe(
        map((list) => {
            const colors: Record<number, string> = {};
            for (const i in list) {
                if (list[i].has_runtime_error) {
                    colors[i] = 'var(--error-light)';
                }
            }
            return colors;
        }),
    );
    /** Actions available for the context menu */
    public menu_options: AppLink[] = [
        {
            id: 'power',
            name: 'MODULES.TOGGLE_POWER',
            icon: { type: 'icon', content: 'power' },
        },
        {
            id: 'state',
            name: 'MODULES.VIEW_STATE',
            icon: { type: 'icon', content: 'visibility' },
        },
        {
            id: 'edit',
            name: 'MODULES.EDIT',
            icon: { type: 'icon', content: 'edit' },
        },
        {
            id: 'load',
            name: 'MODULES.LOAD',
            icon: { type: 'icon', content: 'cloud_download' },
        },
        {
            id: 'view-error',
            name: 'MODULES.VIEW_ERRORS',
            enable_on: 'has_runtime_error',
            icon: { type: 'icon', content: 'error' },
        } as AppLink,
        {
            id: 'add-to-system',
            name: 'MODULES.ADD_TO_SYSTEM',
            icon: { type: 'icon', content: 'playlist_add' },
        },
        {
            id: 'remove',
            name: 'MODULES.REMOVE',
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
            name: 'MODULES.TOGGLE_POWER',
            icon: { type: 'icon', content: 'power' },
        },
        {
            id: 'edit',
            name: 'MODULES.EDIT',
            icon: { type: 'icon', content: 'edit' },
        },
        {
            id: 'load',
            name: 'MODULES.LOAD',
            icon: { type: 'icon', content: 'cloud_download' },
        },
        {
            id: 'add-to-system',
            name: 'MODULES.ADD_TO_SYSTEM',
            icon: { type: 'icon', content: 'playlist_add' },
        },
        {
            id: 'remove',
            name: 'MODULES.REMOVE',
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
            map(
                (resp) =>
                    resp.data.map((mod: PlaceModule) => ({
                        ...mod,
                        extra: mod.driver?.name,
                    })) as any[],
            ),
        );
    /** Function for excluding modules already within this system */
    public readonly exclude_fn = (item: any, __: string) =>
        item.control_system_id === this.item.id ||
        item.role === PlaceDriverRole.Logic;

    public readonly newModule = () => this._service.newModule();
    public readonly removeModule = (d) => this._service.removeModule(d);
    public readonly editModule = (d) => this._service.editModule(d);
    public readonly joinModule = (id) => this._service.joinModule(id);
    public readonly toggleDebug = (d) => this._service.toggleModuleDebug(d);
    public readonly power = (d) => this._service.toggleModulePower(d);
    public readonly addToSystem = (d) => this._service.addModuleToSystem(d);

    public driver_type(role: PlaceDriverRole): string {
        if (!role && role != 0) return '';
        switch (role) {
            case PlaceDriverRole.Device:
                return i18n('DRIVERS.DEVICE');
            case PlaceDriverRole.SSH:
                return i18n('DRIVERS.SSH');
            case PlaceDriverRole.Service:
                return i18n('DRIVERS.SERVICE');
            case PlaceDriverRole.Websocket:
                return i18n('DRIVERS.WEBSOCKET');
            case PlaceDriverRole.Logic:
                return i18n('DRIVERS.LOGIC');
        }
        return `${i18n('DRIVERS.UNKNOWN')} (${role})`;
    }

    public get item(): PlaceSystem {
        return this._service.active_item as PlaceSystem;
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
                case 'add-to-system':
                    this.addToSystem(device);
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
            if (k in item) device[k] = item[k];
        }
    }

    public async viewState(device: PlaceModule) {
        const modules = this._service.getModules();
        this._dialog.open<ViewModuleStateModalComponent, ModuleStateModalData>(
            ViewModuleStateModalComponent,
            { data: { system: this.item, module: device, devices: modules } },
        );
    }

    public async setActive(idx: number) {
        const modules = await nextValueFrom(this.modules);
        if (modules.length <= idx) this.active_item.set(null);
        else this.active_item.set(modules[idx]);
    }

    public loadModule(device: PlaceModule) {
        loadModule(device.id)
            .toPromise()
            .then(
                () =>
                    notifySuccess(
                        `Successfully loaded module "${
                            device.name || device.id
                        }"`,
                    ),
                (err) =>
                    notifyError(
                        `Error loading module. Error: ${JSON.stringify(
                            err.response || err.message || err,
                        )}`,
                    ),
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
        this.joinModule(this.new_module());
        this.new_module.set('');
    }

    public viewRuntimeError(device: PlaceModule) {
        this._dialog.open<ModuleRuntimeErrorsModalComponent>(
            ModuleRuntimeErrorsModalComponent,
            { data: device.id },
        );
    }
}
