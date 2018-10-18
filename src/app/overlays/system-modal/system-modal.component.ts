
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';

@Component({
    selector: 'system-modal',
    templateUrl: './system-modal.template.html',
    styleUrls: ['./system-modal.styles.scss']
})
export class SystemModalComponent extends OverlayContentComponent implements OnInit {

    public ngOnInit() {
        this.model.form = {};
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
        }
    }

    public new() {

    }

    public edit() {

    }

}
