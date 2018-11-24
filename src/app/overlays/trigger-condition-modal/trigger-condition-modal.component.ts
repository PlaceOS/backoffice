
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'trigger-condition-modal',
    templateUrl: './zone-modal.template.html',
    styleUrls: ['./zone-modal.styles.scss']
})
export class TriggerConditionModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
        this.model.condition_types = [
            { id: 'webhook', name: 'Webhook' },
            { id: 'compare', name: 'Compare values' },
            { id: 'cron', name: 'Particular time' }
        ];
        this.model.webhook_types = [
            { id: 'ignore', name: 'Ignore payload(most secure)' },
            { id: 'execute_before', name: 'Execute payload before running actions' },
            { id: 'execute_after', name: 'Execute payload after running actions' },
            { id: 'payload_only', name: 'Execute payload only(actions never run)' },
        ];
        this.model.time_types = ['minute', 'hour', 'day', 'week', 'month', 'year'];
        this.model.compare_types = [
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
    }

    public init() {
        if (this.model.item) {
            this.model.form = {
                name: this.model.item.name,
                tags: this.model.item.tags,
                description: this.model.item.description,
                settings: JSON.parse(JSON.stringify(this.model.item.settings || {}))
            };
        }
    }

    public validate() {
        this.model.errors = {};
        const form = this.model.form || {};
        this.model.has_errors = Object.keys(this.model.errors).length > 0;
    }

    public new() {
        if (this.model.loading) { return; }
        setTimeout(() => {
            this.model.loading = true;
            this.service.Zones.add(this.model.form).then((item) => {
                this.service.success('Successfully added new zone');
                this.model.id = item.id;
                this.event('Success');
            }, () => {
                this.service.error('Failed to add new zone');
                this.model.loading = false;
            });
        }, 300);
    }

    public edit() {
        if (!this.model.item || this.model.loading) { return; }
        setTimeout(() => {
            const form = {};
            for (const k in this.model.form) {
                if (k === 'settings' && JSON.stringify(this.model.form[k] || {}) !== JSON.stringify(this.model.item[k] || {})) {
                    form[k] = this.model.form[k];
                } else if (this.model.form.hasOwnProperty(k) && this.model.form[k] !== this.model.item[k]) {
                    form[k] = this.model.form[k];
                }
            }
            if (Object.keys(form).length <= 0) {
                this.service.warning('No changes have been made');
            } else {
                this.model.loading = true;
                this.service.Zones.update(this.model.item.id, form).then((item) => {
                    this.service.success(`Successfully updated zone "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this.event('Success');
                }, () => {
                    this.service.error(`Failed to update zone "${this.model.item.id}"`);
                    this.model.loading = false;
                });
            }

        }, 300);
    }
}
