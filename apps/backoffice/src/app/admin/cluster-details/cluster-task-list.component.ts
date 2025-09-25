import {
    Component,
    computed,
    inject,
    input,
    OnInit,
    output,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceCluster,
    PlaceProcess,
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
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
} from 'apps/backoffice/src/app/overlays/confirm-modal.component';
import { lastValueFrom } from 'rxjs';
import { i18n } from '../../common/locale.service';
import { IconComponent } from '../../ui/icon.component';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';

const task_details = {};

@Component({
    selector: 'engine-cluster-task-list',
    template: `
        <div
            class="sticky left-0 top-0 z-20 mb-4 flex w-full items-center rounded bg-base-200 p-2"
        >
            <button btn icon (click)="closed.emit()">
                <app-icon>arrow_back</app-icon>
            </button>
            <h3 class="text-lg font-medium">
                {{ 'ADMIN.CLUSTER' | translate }} - {{ cluster()?.hostname }}
            </h3>
            <div class="flex-1"></div>
            <mat-form-field
                appearance="outline"
                class="no-subscript rounded bg-base-100"
            >
                <div class="prefix" matPrefix>
                    <app-icon class="relative -left-0.5 text-2xl">
                        search
                    </app-icon>
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
        <mat-progress-bar
            mode="indeterminate"
            class="w-full"
            [class.opacity-0]="!loading()"
        />
        <simple-table
            class="block min-w-[46rem] text-sm"
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
                    name: 'ADMIN.CLUSTERS_FIELD_MEMORY_USAGE' | translate,
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
            [empty_message]="'ADMIN.CLUSTER_PROCESSES_EMPTY' | translate"
        />
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2 font-mono">
                <div class="mb-1">{{ taskDetails(row.id).path }}</div>
                <div class="flex items-center space-x-2 text-[0.625rem]">
                    <div class="rounded bg-info px-2 text-info-content">
                        {{ taskDetails(row.id).type }}
                    </div>
                    <div class="rounded bg-base-200 px-2">
                        {{ taskDetails(row.id).hash }}
                    </div>
                    <div class="rounded bg-base-200 px-2">
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
                    <app-icon>delete</app-icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                padding: 1rem;
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
    ],
})
export class PlaceClusterTaskListComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog = inject(MatDialog);
    /** Cluster to display tasks details for */
    public readonly cluster = input<PlaceCluster>(undefined);
    /** Emitter for close events */
    public readonly closed = output<void>();
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

    public async updateProcessList() {
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
