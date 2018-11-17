
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';

import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'driver-modal',
    templateUrl: './driver-modal.template.html',
    styleUrls: ['./driver-modal.styles.scss']
})
export class DriverModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
        this.model.discovery = [];
        this.model.roles = ['Logic', 'Device', 'Service', 'SSH'];
    }

    public init() {
        if (this.model.item) {
            this.model.form = {
                id: this.model.item.id,
                name: this.model.item.name,
                class_name: this.model.item.class_name,
                module_name: this.model.item.module_name,
                role: this.model.item.role,
                created: this.model.item.created,
                description: this.model.item.description,
                default: this.model.item.default,
                settings: this.model.item.settings,
            };
        } else {
            this.loadDrivers();
        }
    }

    public validate() {
        this.model.errors = {};
        const form = this.model.form || {};
        if (form.ip && !Utils.validate('ip', form.ip)) {
            this.model.errors.ip = 'Device\'s IP must be a valid IP address';
        }
        if (form.port && (!Utils.validate('number', form.port) || !(+form.port >= 1 && +form.port <= 65535))) {
            this.model.errors.port = 'Device\'s port must be a valid number from 1 - 65535';
        }
        this.model.has_errors = Object.keys(this.model.errors).length > 0;
    }

    public new() {
        if (this.model.loading) { return; }
        setTimeout(() => {
            this.model.loading = true;
            this.service.Modules.add(this.model.form).then((item) => {
                this.service.success('Successfully added new device');
                this.model.id = item.id;
                this.event('Success');
            }, () => {
                this.service.error('Failed to add new device');
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
                this.service.Modules.update(this.model.item.id, form).then((item) => {
                    this.service.success(`Successfully updated device "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this.event('Success');
                }, () => {
                    this.service.error(`Failed to update device "${this.model.item.id}"`);
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

    public loadDrivers(query: string = '') {
        this.load(query, 'Discovery');
    }

    public scan() {
        this.model.scanning = true;
        this.service.Discovery.scan().then(
            () => this.model.scanning = false,
            () => this.model.scanning = false
        );
    }

    public selectDiscovery(item) {
        this.model.form.discovery = item;
        this.model.form.name = item.name;
        this.model.form.class_name = item.class_name;
        this.model.form.settings = item.settings;
        this.model.form.default = item.default;
        this.model.form.description = item.description;
        this.model.form.module_name = item.module_name;
        this.model.form.role = item.role;
        this.model.role = 0;
        for (const role of this.model.roles) {
            if (role.toLowerCase() === this.model.form.role.toLowerCase()) {
                this.model.role = this.model.roles.indexOf(role);
                break;
            }
        }
    }
}
