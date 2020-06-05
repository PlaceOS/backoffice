import { Component, OnInit, Input } from '@angular/core';

import { EngineResource } from '@placeos/ts-client';

@Component({
    selector: 'bulk-item-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    /** List of bulk items to add */
    @Input() public list: EngineResource<any>;

    constructor() {}

    ngOnInit() {}
}
