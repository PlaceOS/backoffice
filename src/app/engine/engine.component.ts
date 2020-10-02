import { Component } from '@angular/core';

import { BaseClass } from 'src/app/common/base.class';
import { extensionsForItem } from '../common/api';
import { ActiveItemService } from '../common/item.service';
import { SettingsService } from '../common/settings.service';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.scss']
})
export class PlaceComponent extends BaseClass {

    public tab_list = [];

    public get extensions() {
        return extensionsForItem(this._service.active_item, 'admin');
    }

    public updateTabList() {
        this.tab_list = [
            { id: 'about', name: 'About', icon: { class: 'backoffice-info' } },
            { id: 'database', name: 'Database', icon: { class: 'backoffice-database' } },
            { id: 'clusters', name: 'Clusters', icon: { class: 'backoffice-server' } },
            { id: 'interfaces', name: 'Interfaces', icon: { class: 'backoffice-browser' } },
            { id: 'brokers', name: 'MQTT Brokers', icon: { class: 'backoffice-server' } }
        ].concat(this.extensions);
    }

    constructor(private _settings: SettingsService, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {;
        this._settings.title = 'Admin';
        this.updateTabList();
    }
}
