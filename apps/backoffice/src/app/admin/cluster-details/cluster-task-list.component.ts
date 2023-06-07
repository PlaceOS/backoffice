import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceCluster,
    PlaceProcess,
    terminateProcess,
    queryProcesses,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/base.class';
import {
    ConfirmModalComponent,
    CONFIRM_METADATA,
} from 'apps/backoffice/src/app/overlays/confirm-modal.component';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import { BehaviorSubject, combineLatest, interval, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    tap,
} from 'rxjs/operators';

@Component({
    selector: 'engine-cluster-task-list',
    template: `
        <div class="flex items-center mb-4">
            <button btn icon (click)="close.emit()">
                <app-icon
                    [icon]="{ type: 'icon', class: 'backoffice-arrow-left' }"
                ></app-icon>
            </button>
            <h3 class="text-lg font-medium" i18n="@@clusterHeader">
                Cluster - {{ cluster?.hostname }}
            </h3>
            <div class="flex-1"></div>
            <mat-form-field appearance="outline" class="h-12">
                <app-icon
                    matPrefix
                    className="backoffice-magnifying-glass"
                ></app-icon>
                <input
                    matInput
                    [ngModel]="filter.getValue()"
                    (ngModelChange)="filter.next($event)"
                    placeholder="Filter processes..."
                />
            </mat-form-field>
        </div>
        <div
            role="table"
            class="h-1/2 flex-1"
            *ngIf="(filtered_list | async)?.length; else empty_state"
        >
            <div table-head>
                <div class="flex-1 p-2">Name</div>
                <div class="w-24 p-2">CPU %</div>
                <div class="w-24 p-2">Memory</div>
                <div class="w-24 p-2">Instances</div>
                <div class="w-12 p-2"></div>
            </div>
            <div table-body>
                <div table-row *ngFor="let element of filtered_list | async">
                    <div class="flex-1 p-2" [title]="element.id">
                        <code
                            class="truncate"
                            [innerHTML]="element.id | driverFormat"
                        ></code>
                    </div>
                    <div class="w-24 p-2 text-right justify-end">
                        {{ element.cpu_usage.toFixed(2) }}%
                    </div>
                    <div class="w-24 p-2 text-right justify-end">
                        {{ element.used_memory }}
                    </div>
                    <div class="w-24 p-2 text-right justify-end">
                        {{ element.module_instances }}
                    </div>
                    <div class="w-12 flex items-center justify-center">
                        <button btn icon (click)="confirmKillProcess(element)">
                            <app-icon className="backoffice-trash"></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <p i18n="@@processTableEmpty">No tasks running on cluster</p>
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
})
export class PlaceClusterTaskListComponent extends AsyncHandler {
    /** Cluster to display tasks details for */
    @Input() public cluster: PlaceCluster;
    /** Emitter for close events */
    @Output() public close = new EventEmitter<void>();
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

    public filter = new BehaviorSubject('');

    private _poll = new BehaviorSubject(0);

    public readonly process_list: Observable<PlaceProcess[]> = this._poll.pipe(
        filter(() => !this.loading),
        switchMap(() => {
            this.loading = true;
            return queryProcesses(this.cluster.id, {
                include_status: true,
            } as any).pipe(
                catchError((_) => {
                    console.error(_);
                    return of([]);
                })
            );
        }),
        map((l) =>
            (l || []).sort((a, b) => b.module_instances - a.module_instances)
        ),
        tap(() => (this.loading = false)),
        shareReplay(1)
    );

    public readonly filtered_list = combineLatest([
        this.filter,
        this.process_list,
    ]).pipe(
        map(([filter, processes]) => {
            return processes.filter((_) =>
                _.id.toLowerCase().includes(filter.toLowerCase())
            );
        }),
        shareReplay(1)
    );

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit() {
        this._poll.next(Date.now());
        this.interval('poll', () => this._poll.next(Date.now()), 5000);
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
            'confirm_kill',
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
}
