
import { Component, OnInit } from '@angular/core';
import { OverlayItem } from '@acaprojects/ngx-overlays';

import { BaseComponent } from 'src/app/shared/globals/base.component';
import { ApplicationService } from 'src/app/services/app.service';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'trigger-action-modal',
    templateUrl: './trigger-action-modal.template.html',
    styleUrls: ['./trigger-action-modal.styles.scss']
})
export class TriggerActionModalComponent extends BaseComponent implements OnInit {

    public model: any = {};

    constructor(private _item: OverlayItem, private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
        this.model.action_types = [
            { id: 'exec', name: 'Run command' },
            { id: 'email', name: 'Send email' }
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
            this._service.Zones.add(this.model.form).then((item) => {
                this._service.notifySuccess('Successfully added new zone');
                this.model.id = item.id;
                this._item.post('event', 'Success');
            }, () => {
                this._service.notifyError('Failed to add new zone');
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
                this._service.notifyInfo('No changes have been made');
            } else {
                this.model.loading = true;
                this._service.Zones.update(this.model.item.id, form).then((item) => {
                    this._service.notifySuccess(`Successfully updated zone "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this._item.post('event', 'Success');
                }, () => {
                    this._service.notifyError(`Failed to update zone "${this.model.item.id}"`);
                    this.model.loading = false;
                });
            }
        }, 300);
    }
}

OVERLAY_REGISTER.push({ id: 'trigger-action', config: { content: TriggerActionModalComponent, config: 'modal' } });
