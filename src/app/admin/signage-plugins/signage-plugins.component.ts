import { Component, OnInit, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    SignagePlugin,
    addSignagePlugin,
    querySignagePlugins,
    removeSignagePlugin,
    updateSignagePlugin,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';

import { AsyncHandler } from '../../common/async-handler.class';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { openConfirmModal } from '../../overlays/confirm-modal.component';
import { IconComponent } from '../../ui/icon.component';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { SignagePluginModalComponent } from './signage-plugin-modal.component';
import { SignagePluginTestModalComponent } from './signage-plugin-test-modal.component';

@Component({
    selector: 'admin-signage-plugins',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.SIGNAGE_PLUGINS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <button btn matRipple (click)="newPlugin()">
                        <div class="flex items-center">
                            <icon class="text-2xl">add</icon>
                            <div class="text">
                                {{ 'ADMIN.SIGNAGE_PLUGINS_ADD' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-6xl text-sm"
                    [data]="plugins()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                        },
                        {
                            key: 'description',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            content: description_template,
                        },
                        {
                            key: 'uri',
                            name: 'ADMIN.SIGNAGE_PLUGINS_FIELD_URI' | translate,
                            content: mono_template,
                        },
                        {
                            key: 'playback_type',
                            name:
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE'
                                | translate,
                            content: playback_type_template,
                            size: '8rem',
                        },
                        {
                            key: 'enabled',
                            name:
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED'
                                | translate,
                            content: enabled_template,
                            size: '5rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '8.5rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.SIGNAGE_PLUGINS_LIST_EMPTY' | translate
                    "
                ></simple-table>
            </div>
        </div>
        <ng-template #mono_template let-data="data">
            <div class="max-w-[50vw] truncate p-4 font-mono text-xs">
                {{ data }}
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="p-4 text-xs">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">{{
                        'COMMON.DESCRIPTION_EMPTY' | translate
                    }}</span>
                }
            </div>
        </ng-template>
        <ng-template #playback_type_template let-data="data">
            <div class="p-4 text-xs uppercase">{{ data }}</div>
        </ng-template>
        <ng-template #enabled_template let-data="data">
            @if (data) {
                <div
                    class="bg-success mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-success-content text-2xl">check</icon>
                </div>
            }
            @if (!data) {
                <div
                    class="bg-error mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                >
                    <icon class="text-error-content text-2xl">close</icon>
                </div>
            }
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_TEST' | translate"
                    (click)="testPlugin(row)"
                >
                    <icon>play_circle</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_EDIT' | translate"
                    (click)="editPlugin(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.SIGNAGE_PLUGINS_REMOVE' | translate"
                    (click)="deletePlugin(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
            }
        `,
    ],
    imports: [
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        SimpleTableComponent,
        MatProgressBarModule,
    ],
})
export class AdminSignagePluginsComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog = inject(MatDialog);

    public readonly loading = signal(false);
    public readonly plugins = signal<SignagePlugin[]>([]);

    public ngOnInit(): void {
        this.loadPlugins();
    }

    public newPlugin(): void {
        const ref = this._dialog.open(SignagePluginModalComponent, {
            data: {
                item: new SignagePlugin(),
                save: (item: Partial<SignagePlugin>) => addSignagePlugin(item),
            },
        });
        this.subscription(
            'modal_events',
            ref.afterClosed().subscribe((event) => {
                if (event?.reason !== 'done') return;
                this.loadPlugins();
            }),
        );
    }

    public testPlugin(item: SignagePlugin): void {
        this._dialog.open(SignagePluginTestModalComponent, {
            data: { item },
        });
    }

    public editPlugin(item: SignagePlugin): void {
        const ref = this._dialog.open(SignagePluginModalComponent, {
            data: {
                item,
                save: (updated: Partial<SignagePlugin>) =>
                    updateSignagePlugin(item.id, updated),
            },
        });
        this.subscription(
            'modal_events',
            ref.afterClosed().subscribe((event) => {
                if (event?.reason !== 'done') return;
                this.loadPlugins();
            }),
        );
    }

    public async deletePlugin(item: SignagePlugin): Promise<void> {
        if (!item) return;
        const details = await openConfirmModal(
            {
                title: i18n('ADMIN.SIGNAGE_PLUGINS_REMOVE'),
                content: i18n('ADMIN.SIGNAGE_PLUGINS_REMOVE_MSG'),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details) return;
        details.loading(i18n('ADMIN.SIGNAGE_PLUGINS_REMOVE_LOADING'));
        const err = await removeSignagePlugin(item.id)
            .toPromise()
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                i18n('ADMIN.SIGNAGE_PLUGINS_REMOVE_ERROR', {
                    error: JSON.stringify(err.response || err.message || err),
                }),
            );
        notifySuccess(i18n('ADMIN.SIGNAGE_PLUGINS_REMOVE_SUCCESS'));
        this.loadPlugins();
    }

    public async loadPlugins(): Promise<void> {
        this.loading.set(true);
        try {
            const plugins = await lastValueFrom(
                querySignagePlugins().pipe(map((r) => r.data)),
            );
            this.plugins.set(plugins);
        } catch (err) {
            notifyError(
                i18n('ADMIN.SIGNAGE_PLUGINS_LOAD_ERROR', {
                    error: JSON.stringify(err.response || err.message || err),
                }),
            );
        } finally {
            this.loading.set(false);
        }
    }
}
