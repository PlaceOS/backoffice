import { Component, OnInit, inject } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DatePipe } from '@angular/common';
import { AsyncHandler } from '../common/async-handler.class';
import { HashMap } from '../common/types';
import { IconComponent } from '../ui/icon.component';

export interface SystemLogModalData {
    /** ID of the system to show the logs for */
    sys_id: string;
}

@Component({
    selector: 'system-log-modal',
    template: `
        <header>
            <h3 mat-dialog-title>System Logs</h3>
            <button btn icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <mat-dialog-content>
            @if (!loading) {
                <div class="body">
                    <table>
                        <thead>
                            <td>User</td>
                            <td>Date/Time</td>
                            <td></td>
                        </thead>
                        <tbody>
                            @for (item of logs; track item.id) {
                                <tr class="item">
                                    <td>{{ $any(item?.user)?.name }}</td>
                                    <td>{{ $any(item)?.created_at | date }}</td>
                                    <td>{{ $any(item)?.installed_device }}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            } @else {
                <div class="body">
                    <div
                        class="flex w-full flex-col items-center justify-center p-16 opacity-30"
                    >
                        <div class="icon">
                            <mat-spinner diameter="32"></mat-spinner>
                        </div>
                        <div class="text">Processing request...</div>
                    </div>
                </div>
            }
        </mat-dialog-content>
    `,
    styles: [
        `
            .body {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 2em;
            }

            .content {
                width: 16rem;
                text-align: center;
                font-size: 0.8em;
            }
        `,
    ],
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        IconComponent,
        DatePipe,
    ],
})
export class SystemLogModalComponent extends AsyncHandler implements OnInit {
    private _dialog =
        inject<MatDialogRef<SystemLogModalComponent>>(MatDialogRef);
    private _data = inject<SystemLogModalData>(MAT_DIALOG_DATA);

    /** ID of the system to get logs for */
    public id: string;
    /** List of the available log entries for the set system */
    public logs: HashMap[] = [];
    /** Whether the system's logs are loading */
    public loading: boolean;
    /**  */
    public name: string;
    /** Whether the modal is closing */
    public closing: boolean;

    public ngOnInit(): void {
        this.id = this._data.sys_id;
        if (this.id) {
            this.loading = true;
        } else {
            this._dialog.close();
        }
    }
}
