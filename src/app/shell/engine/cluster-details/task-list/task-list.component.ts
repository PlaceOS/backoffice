import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EngineCluster, EngineProcess } from '@placeos/ts-client';
import { first } from 'rxjs/operators';
import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent, CONFIRM_METADATA } from 'src/app/overlays/confirm-modal/confirm-modal.component';

@Component({
    selector: 'engine-cluster-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class EngineClusterTaskListComponent extends BaseDirective implements OnInit {
    /** Cluster to display tasks details for */
    @Input() public cluster: EngineCluster;
    /** Emitter for close events */
    @Output() public close = new EventEmitter<void>();
    /** List of processes running in the cluster */
    public process_list: EngineProcess[] = [];
    /** Whether the task list is updating */
    public loading: boolean;
    /** ID of the process being killed */
    public killing: string;

    public column_list: string[] = ['id', 'cpu_usage', 'memory_usage', 'module_instances', 'running'];

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this._service.initialised.pipe(first(_ => _)).subscribe(() => {
            this.loadProcesses();
            this.interval('load_tasks', () => this.loadProcesses(), 2000);
        })
    }

    public confirmKillProcess(process: EngineProcess): void {
        const ref = this._dialog.open(ConfirmModalComponent, {
            ...CONFIRM_METADATA,
            data: {
                title: `Kill process`,
                content: `
                    <p>Are you sure you want kill the process for "${process.id}"?</p>
                    <p>The process will be terminated <strong>immediately</strong>.
                    The process may be restarted after a short while.</p>
                `,
                icon: { type: 'icon', class: 'backoffice-trash' }
            }
        });
        this.subscription('confirm_kil', ref.componentInstance.event.subscribe((event) => {
            if (event.reason === 'done') {
                this.killing = process.id;
                ref.componentInstance.loading = 'Processing request...';
                this.killProcess(process).then(() => {
                    this.killing = null;
                    ref.close();
                }, err => {
                    ref.componentInstance.loading = null;
                    this.killing = null;
                    this._service.notifyError(`Error killing process. Error: ${err.message | err}`);
                    ref.close();
                })
            }
        }))

    }

    public killProcess(process: EngineProcess) {
        return this._service.Clusters.delete(this.cluster.id, { driver: process.id });
    }

    private loadProcesses(): void {
        this.loading = true;
        this._service.Clusters.show(this.cluster.id, { include_status: true } as any).then((list) => {
            this.process_list = list || [];
            this.loading = false;
        });
    }
}
