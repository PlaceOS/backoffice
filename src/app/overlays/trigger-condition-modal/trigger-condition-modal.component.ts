import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EngineSystem, EngineZone, EngineTrigger } from '@acaprojects/ts-composer';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { Identity, HashMap, DialogEvent } from 'src/app/shared/utilities/types.utilities';

import * as dayjs from 'dayjs';

export interface TriggerConditionData {
    /** Item to add/update the trigger on */
    item: EngineZone | EngineSystem;
    /** Trigger to add/update */
    trigger: EngineTrigger;
}

@Component({
    selector: 'trigger-condition-modal',
    templateUrl: './trigger-condition-modal.template.html',
    styleUrls: ['./trigger-condition-modal.styles.scss']
})
export class TriggerConditionModalComponent extends BaseDirective implements OnInit {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();

    /** Allowed comparison operators */
    public compare_types: Identity[] = [
        { id: 'equal', name: 'equal to' },
        { id: 'not_equal', name: 'not equal to' },
        { id: 'greater_than', name: 'greater than' },
        { id: 'greater_or_equal', name: 'greater than or equal' },
        { id: 'less_than', name: 'less than' },
        { id: 'less_or_equal', name: 'less than or equal' },
        { id: 'and', name: 'truthy AND' },
        { id: 'or', name: 'truthy OR' },
        { id: 'xor', name: 'truthy XOR' },
    ];
    /** Allowed webhook actions */
    public webhook_types: Identity[] = [
        { id: 'ignore', name: 'Ignore payload(most secure)' },
        { id: 'execute_before', name: 'Execute payload before running actions' },
        { id: 'execute_after', name: 'Execute payload after running actions' },
        { id: 'payload_only', name: 'Execute payload only(actions never run)' },
    ]
    /** Types of trigger conditions */
    public condition_types: Identity[] = [
        { id: 'webhook', name: 'Webhook' },
        { id: 'compare', name: 'Compare values' },
        { id: 'cron', name: 'Particular time' }
    ]
    /** Allowed time periods for CRON triggers */
    public time_types: string[] = ['minute', 'hour', 'day', 'week', 'month', 'year'];
    /** Months of the year */
    public months: string[];
    /** Days of the mont */
    public days_of_month: string[];
    /** Mapping of form fields */
    public form: HashMap = {};
    /** Mapping of errors to form fields */
    public errors: HashMap = {};
    /** Whether actions are loading */
    public loading: boolean;
    /** Item to add trigger to */
    public item: EngineSystem | EngineZone;

    public get has_errors(): boolean {
        return Object.keys(this.errors).length > 0;
    }

    constructor(
        private _dialog: MatDialogRef<TriggerConditionModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: TriggerConditionData,
        private _service: ApplicationService
    ) {
        super();
    }

    public ngOnInit() {
        const date = dayjs().month(0).date(1);
        const end = date.add(1, 'M');
        this.days_of_month = [];
        for (; date.isBefore(end, 'd'); date.add(1, 'd')) {
            this.days_of_month.push(date.format('Do'));
        }
        date.month(0).date(1);
        end.month(0).date(1).add(1, 'y');
        this.months = [];
        for (; date.isBefore(end, 'd'); date.add(1, 'M')) {
            this.months.push(date.format('MMMM'));
        }
    }

    public init() {
        if (this.item) {
            this.form = {
                name: this.item.name,
                tags: (this.item as any).tags,
                description: this.item.description,
                settings: JSON.parse(JSON.stringify(this.item.settings || {}))
            };
        }
    }

    public validate() {
        this.errors = {};
        const form = this.form || {};
    }

    public new() {
        if (this.loading) { return; }
        setTimeout(() => {
            this.loading = true;
            this._service.Zones.add(this.form).then((item) => {
                this._service.notifySuccess('Successfully added new zone');
                this.item = item;
                this.event.emit({ reason: 'done', metadata: { item } });
            }, () => {
                this._service.notifyError('Failed to add new zone');
                this.loading = false;
            });
        }, 300);
    }

    public edit() {
        if (!this.item || this.loading) { return; }
        setTimeout(() => {
            const form = {};
            for (const k in this.form) {
                if (k === 'settings' && JSON.stringify(this.form[k] || {}) !== JSON.stringify(this.item[k] || {})) {
                    form[k] = this.form[k];
                } else if (this.form.hasOwnProperty(k) && this.form[k] !== this.item[k]) {
                    form[k] = this.form[k];
                }
            }
            if (Object.keys(form).length <= 0) {
                this._service.notifyInfo('No changes have been made');
            } else {
                this.loading = true;
                this._service.Zones.update(this.item.id, form).then((item) => {
                    this._service.notifySuccess(`Successfully updated zone "${this.item.id}"`);
                    this.event.emit({ reason: 'done', metadata: { item } });
                }, () => {
                    this._service.notifyError(`Failed to update zone "${this.item.id}"`);
                    this.loading = false;
                });
            }
        }, 300);
    }
}
