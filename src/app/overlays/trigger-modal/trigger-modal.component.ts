
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'trigger-modal',
    templateUrl: './trigger-modal.template.html',
    styleUrls: ['./trigger-modal.styles.scss']
})
export class TriggerModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
    }

    public init() {
        if (this.model.item) {
            this.model.form = {
                name: this.model.item.name,
                description: this.model.item.description
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
            this.service.Triggers.add(this.model.form).then((item) => {
                this.service.success('Successfully added new trigger');
                this.model.id = item.id;
                this.event('Success');
            }, () => {
                this.service.error('Failed to add new trigger');
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
                this.service.Triggers.update(this.model.item.id, form).then((item) => {
                    this.service.success(`Successfully updated trigger "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this.event('Success');
                }, () => {
                    this.service.error(`Failed to update trigger "${this.model.item.id}"`);
                    this.model.loading = false;
                });
            }

        }, 300);
    }
}
