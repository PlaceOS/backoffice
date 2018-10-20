
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'system-modal',
    templateUrl: './system-modal.template.html',
    styleUrls: ['./system-modal.styles.scss']
})
export class SystemModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
        this.model.zones = [];
        this.model.nodes = [];
    }

    public init() {
        if (this.model.item) {
            this.model.form = {
                name: this.model.item.name,
                email: this.model.item.email,
                support_url: this.model.item.support_url,
                installed_ui_devices: this.model.item.installed_ui_devices,
                bookable: this.model.item.bookable,
                capacity: this.model.item.capacity,
                description: this.model.item.description,
                settings: JSON.parse(JSON.stringify(this.model.item.settings || {})),
                edge_id: this.model.item.edge_id,
                zones: this.model.item.zones
            };
        } else {
            this.loadZones();
            this.loadNodes();
        }
    }

    public validate() {
        this.model.errors = {};
        const form = this.model.form || {};
        if (form.email && !Utils.validate('email', form.email)) {
            this.model.errors.email = 'System\'s email must be a valid email address';
        }
        if (form.support_url && !Utils.validate('url', form.support_url)) {
            this.model.errors.support_url = 'Support URL must contain a valid URL';
        }
        if (form.capacity && !Utils.validate('integer', form.capacity)) {
            this.model.errors.capacity = 'Capacity must be a valid integer';
        }
        if (form.installed_ui_devices && !Utils.validate('integer', form.installed_ui_devices)) {
            this.model.errors.installed_ui_devices = 'Number of touch panels must be a valid integer';
        }
        this.model.has_errors = Object.keys(this.model.errors).length > 0;
    }

    public new() {
        if (this.model.loading) { return; }
        setTimeout(() => {
            this.model.loading = true;
            this.service.Systems.add(this.model.form).then((item) => {
                this.service.success('Successfully added new system');
                this.model.id = item.id;
                this.event('Success');
            }, () => {
                this.service.error('Failed to add new system');
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
                this.service.Systems.update(this.model.item.id, form).then((item) => {
                    this.service.success(`Successfully updated system "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this.event('Success');
                }, () => {
                    this.service.error(`Failed to update system "${this.model.item.id}"`);
                    this.model.loading = false;
                });
            }

        }, 300);
    }

    public load(query: string = '', type: string = 'Zones') {
        if (this.model[`loading_${type}`]) {
            if (this.timers[`${type}`]) { clearTimeout(this.timers[`${type}`]); }
            return this.timers[`${type}`] = setTimeout(() => {
                this.timers[`${type}`] = null;
                this.load(query, type);
            }, 300);
        }
        this.model[`loading_${type}`] = true;
        this.service[`${type}`].query({ q: query, offset: '0' }).then((list) => {
            this.model[`${(type || '').toLowerCase()}`] = list;
            this.model[`loading_${type}`] = false;
        }, () => this.model[`loading_${type}`] = false);
    }

    public loadZones(query: string = '') {
        this.load(query, 'Zones');
    }

    public loadNodes(query: string = '') {
        this.load(query, 'Nodes');
    }
}
