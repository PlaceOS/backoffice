import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceCluster,
    PlaceProcess,
    queryClusters,
    queryProcesses,
    terminateProcess,
} from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { lastValueFrom, map } from 'rxjs';
import { AsyncHandler } from '../../common/async-handler.class';
import { i18n } from '../../common/locale.service';
import { notifyError } from '../../common/notifications';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
} from '../../overlays/confirm-modal.component';
import { IconComponent } from '../../ui/icon.component';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';

const task_details = {};

@Component({
    selector: 'engine-cluster-task-list',
    template: `
        <div class="h-full w-full overflow-auto">
            <div
                class="border-base-300 bg-base-200 sticky top-0 left-0 z-20 m-4 mb-4 flex w-[calc(100%-2rem)] items-center rounded-sm border p-2"
            >
                <a icon matRipple [routerLink]="['/admin', 'clusters']">
                    <icon>arrow_back</icon>
                </a>
                <h3 class="text-lg font-medium">
                    {{ 'ADMIN.CLUSTER' | translate }} -
                    {{ cluster()?.hostname }}
                </h3>
                <div class="flex-1"></div>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript bg-base-100 rounded-sm"
                >
                    <div class="prefix" matPrefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        matInput
                        [(ngModel)]="filter"
                        [placeholder]="
                            'ADMIN.CLUSTERS_SEARCH_PROCESSES' | translate
                        "
                    />
                </mat-form-field>
            </div>
            <div class="px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
            </div>
            <div class="mb-4 w-full overflow-auto px-4">
                <simple-table
                    class="block min-w-184 text-sm"
                    [data]="filtered_list()"
                    [columns]="[
                        {
                            key: 'id',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'cpu_usage',
                            name: 'ADMIN.CLUSTERS_FIELD_CPU_USAGE' | translate,
                            content: cpu_template,
                            size: '6rem',
                        },
                        {
                            key: 'used_memory',
                            name:
                                'ADMIN.CLUSTERS_FIELD_MEMORY_USAGE' | translate,
                            size: '7rem',
                        },
                        {
                            key: 'module_instances',
                            name: 'ADMIN.CLUSTERS_FIELD_INSTANCES' | translate,
                            size: '6rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.CLUSTER_PROCESSES_EMPTY' | translate
                    "
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2 font-mono">
                <div class="mb-1">{{ taskDetails(row.id).path }}</div>
                <div class="flex items-center space-x-2 text-[0.625rem]">
                    <div class="bg-info text-info-content rounded-sm px-2">
                        {{ taskDetails(row.id).type }}
                    </div>
                    <div class="bg-base-200 rounded-sm px-2">
                        {{ taskDetails(row.id).hash }}
                    </div>
                    <div class="bg-base-200 rounded-sm px-2">
                        {{ taskDetails(row.id).arch }}
                    </div>
                </div>
            </div>
        </ng-template>
        <ng-template #cpu_template let-row="row">
            <div class="w-full p-4 text-right">
                {{ row.cpu_usage.toFixed(2) }}%
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.CLUSTER_PROCESS_KILL' | translate"
                    (click)="confirmKillProcess(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        SimpleTableComponent,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        RouterModule,
    ],
})
export class PlaceClusterTaskListComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog = inject(MatDialog);
    private _route = inject(ActivatedRoute);
    public readonly cluster = signal<PlaceCluster>(null);
    /** Whether the task list is updating */
    public readonly loading = signal(false);
    /** ID of the process being killed */
    public readonly killing = signal('');

    public readonly process_list = signal([]);
    public readonly filter = signal('');

    public readonly filtered_list = computed(() =>
        this.process_list().filter((item) =>
            item.id.toLowerCase().includes(this.filter().toLowerCase()),
        ),
    );
    public column_list: string[] = [
        'id',
        'cpu_usage',
        'memory_usage',
        'module_instances',
        'running',
    ];

    public taskDetails(id: string) {
        if (task_details[id]) return task_details[id];
        const [type, ...path] = id.split('_');
        const arch = path.pop();
        const hash = path.pop();
        task_details[id] = {
            type,
            path: path.join('/'),
            hash,
            arch,
        };
        return task_details[id];
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    const id = params.get('id');
                    this.loadCluster(id);
                }
            }),
        );
        this.interval('poll', () => this.updateProcessList(), 15 * 1000);
        this.updateProcessList();
    }

    public confirmKillProcess(process: PlaceProcess): void {
        const ref = this._dialog.open(ConfirmModalComponent, {
            ...CONFIRM_METADATA,
            data: {
                title: i18n('ADMIN.CLUSTER_PROCESS_KILL'),
                content: i18n('ADMIN.CLUSTER_PROCESS_KILL_MSG', {
                    id: process.id,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
        });
        this.subscription(
            'confirm_kill',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.killing.set(process.id);
                    ref.componentInstance.loading.set(
                        i18n('ADMIN.CLUSTER_PROCESS_KILL_LOADING'),
                    );
                    this.killProcess(process).then(
                        () => {
                            this.killing.set(null);
                            ref.close();
                        },
                        (err) => {
                            ref.componentInstance.loading.set(null);
                            this.killing.set(null);
                            notifyError(
                                i18n('ADMIN.CLUSTER_PROCESS_KILL_ERROR', {
                                    error: JSON.stringify(
                                        err.response || err.message || err,
                                    ),
                                }),
                            );
                            ref.close();
                        },
                    );
                }
            }),
        );
    }

    public killProcess(process: PlaceProcess) {
        return lastValueFrom(terminateProcess(this.cluster().id, process.id));
    }

    public async loadCluster(id: string) {
        const clusters = await lastValueFrom(
            queryClusters({ q: id } as any).pipe(map((_) => _.data)),
        );
        const match = clusters.find((_) => _.id === id) || clusters[0];
        console.log('Clusters:', clusters);
        this.cluster.set(match);
        this.updateProcessList();
    }

    public async updateProcessList() {
        if (!this.cluster()) return;
        this.loading.set(true);
        const list = await lastValueFrom(
            queryProcesses(this.cluster().id, {
                include_status: true,
            } as any),
        ).catch((_) => []);
        this.process_list.set(
            list.sort((a, b) => b.module_instances - a.module_instances),
        );
        this.loading.set(false);
    }
}
