
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'device-modal',
    templateUrl: './device-modal.template.html',
    styleUrls: ['./device-modal.styles.scss']
})
export class DeviceModalComponent extends OverlayContentComponent implements OnInit {

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
                dependency_id: this.model.item.dependency_id,
                control_system_id: this.model.item.system_id,
                edge_id: this.model.item.edge_id,
                custom_name: this.model.item.custom_name,
                notes: this.model.item.notes,
                ip: this.model.item.ip,
                port: this.model.item.port,
                settings: JSON.parse(JSON.stringify(this.model.item.settings || {})),
                tls: this.model.item.tls,
                udp: this.model.item.udp,
                uri: this.model.item.uri,
                makebreak: this.model.item.makebreak,
                ignore_connected: this.model.ignore_connected
            };
        } else {
            this.loadDrivers();
            this.loadNodes();
            this.loadSystems();
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

    public loadSystems(query: string = '') {
        this.load(query, 'Systems');
    }

    public loadDrivers(query: string = '') {
        this.load(query, 'Drivers');
    }

    public loadNodes(query: string = '') {
        this.load(query, 'Nodes');
    }
}
