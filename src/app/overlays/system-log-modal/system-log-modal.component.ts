import { Component, OnInit } from '@angular/core';
import { OverlayItem } from '@acaprojects/ngx-overlays';
import { animate, style, transition, trigger } from '@angular/animations';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { IEngineLogEntry } from 'src/app/services/data/logs.service';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'system-log-modal',
    templateUrl: './system-log-modal.component.html',
    styleUrls: ['./system-log-modal.component.scss'],
    animations: [
        trigger('show', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(100%) scale(0)' }),
                animate(200, style({ opacity: 1, transform: 'translateX(0%) scale(1)' }))
            ]),
            transition(':leave', [
                style({ opacity: 1, transform: 'translateX(0%) scale(1)' }),
                animate(200, style({ opacity: 0, transform: 'translateX(-100%) scale(0)' }))
            ])
        ])
    ]
})
export class SystemLogModalComponent extends BaseDirective implements OnInit {
    /** ID of the system to get logs for */
    public id: string;
    /** List of the available log entries for the set system */
    public logs: IEngineLogEntry[];
    /** Whether the system's logs are loading */
    public loading: boolean;
    /**  */
    public name: string;

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.id = this._item.data.sys_id;
        if (this.id) {
            this.loading = true;
            this._service.SystemLogs.query({ limit: 500, id: this.id }).then((list: IEngineLogEntry[]) => {
                this.logs = list.sort((a, b) => b.created - a.created);
            }, () => {
                this._item.close();
                this._service.notifyError('Error loading logs for system');
            });
        } else {
            this._item.close();
        }
    }
}

OVERLAY_REGISTER.push({ id: 'system-logs', config: { content: SystemLogModalComponent, config: 'modal' } });
