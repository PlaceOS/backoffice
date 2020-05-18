import { Component, OnInit, Input } from '@angular/core';

import { EngineResource } from '@placeos/ts-client';

@Component({
    selector: 'bulk-item-status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss'],
})
export class StatusListComponent implements OnInit {
    /** List of bulk items to add */
    @Input() public list: EngineResource<any>;

    constructor() {}

    ngOnInit() {}
}
