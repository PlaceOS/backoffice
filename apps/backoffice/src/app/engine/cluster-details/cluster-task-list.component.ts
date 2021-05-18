import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceCluster,
    PlaceProcess,
    terminateProcess,
    queryProcesses,
} from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import {
    ConfirmModalComponent,
    CONFIRM_METADATA,
} from 'apps/backoffice/src/app/overlays/confirm-modal/confirm-modal.component';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';

@Component({
    selector: 'engine-cluster-task-list',
    template: `
        <div class="flex items-center mb-4">
            <button mat-icon-button (click)="close.emit()">
                <app-icon
                    [icon]="{ type: 'icon', class: 'backoffice-arrow-left' }"
                ></app-icon>
            </button>
            <h3 class="text-lg font-medium" i18n="@@clusterHeader">
                Cluster - {{ cluster?.hostname }}
            </h3>
        </div>
        <div role="table">
            <div table-head>
                <div class="flex-1 p-2">Name</div>
                <div class="w-24 p-2">CPU %</div>
                <div class="w-24 p-2">Memory</div>
                <div class="w-24 p-2">Instances</div>
                <div class="w-12 p-2"></div>
            </div>
            <div table-body>
                <div table-row *ngFor="let element of process_list">
                    <div
                        class="flex-1 p-2"
                        [innerHTML]="element.id | driverFormat"
                    ></div>
                    <div class="w-24 p-2">
                        {{ element.cpu_usage.toFixed(2) }}%
                    </div>
                    <div class="w-24 p-2">{{ element.used_memory }}</div>
                    <div class="w-24 p-2">{{ element.module_instances }}</div>
                    <div class="w-12 flex items-center justify-center">
                        <button
                            mat-icon-button
                            (click)="confirmKillProcess(element)"
                        >
                            <app-icon
                                [icon]="{ class: 'backoffice-trash' }"
                            ></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col items-center p-8"
            *ngIf="!process_list || !process_list.length"
        >
            <p i18n="@@processTableEmpty">No tasks running on cluster</p>
        </div>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class PlaceClusterTaskListComponent extends BaseClass implements OnInit {
    /** Cluster to display tasks details for */
    @Input() public cluster: PlaceCluster;
    /** Emitter for close events */
    @Output() public close = new EventEmitter<void>();
    /** List of processes running in the cluster */
    public process_list: PlaceProcess[] = [];
    /** Whether the task list is updating */
    public loading: boolean;
    /** ID of the process being killed */
    public killing: string;

    public column_list: string[] = [
        'id',
        'cpu_usage',
        'memory_usage',
        'module_instances',
        'running',
    ];

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.loadProcesses();
        this.interval('load_tasks', () => this.loadProcesses(), 2000);
    }

    public confirmKillProcess(process: PlaceProcess): void {
        const ref = this._dialog.open(ConfirmModalComponent, {
            ...CONFIRM_METADATA,
            data: {
                title: `Kill process`,
                content: `
                    <p>Are you sure you want kill the process for "${process.id}"?</p>
                    <p>The process will be terminated <strong>immediately</strong>.
                    The process may be restarted after a short while.</p>
                `,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
        });
        this.subscription(
            'confirm_kil',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    this.killing = process.id;
                    ref.componentInstance.loading = 'Processing request...';
                    this.killProcess(process).then(
                        () => {
                            this.killing = null;
                            ref.close();
                        },
                        (err) => {
                            ref.componentInstance.loading = null;
                            this.killing = null;
                            notifyError(
                                `Error killing process. Error: ${JSON.stringify(
                                    err.response || err.message || err
                                )}`
                            );
                            ref.close();
                        }
                    );
                }
            })
        );
    }

    public killProcess(process: PlaceProcess) {
        return terminateProcess(this.cluster.id, process.id).toPromise();
    }

    private loadProcesses(): void {
        this.loading = true;
        queryProcesses(this.cluster.id, {
            include_status: true,
        } as any).subscribe((list) => {
            this.process_list = list || [];
            this.loading = false;
        });
    }
}
