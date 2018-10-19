
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';

@Component({
    selector: 'system-modal',
    templateUrl: './system-modal.template.html',
    styleUrls: ['./system-modal.styles.scss']
})
export class SystemModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
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
                edge_id: this.model.item.edge_id
            };
        } else {
            this.loadZones();
            this.loadNodes();
        }
    }

    public new() {

    }

    public edit() {

    }

    public load(query: string = '', type: string = 'Zones') {
        if (this.model[`loading_${type}`]) {
            if (this.timers[`${type}`]) { clearTimeout(this.timers[`${type}`]); }
            return this.timers[`${type}`] = setTimeout(() => {
                this.timers[`${type}`] = null;
                this.loadZones();
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
        // this.load(query, 'Nodes');
    }

}
