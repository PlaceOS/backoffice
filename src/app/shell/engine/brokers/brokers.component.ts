import { Component, OnInit } from '@angular/core';

import { PlaceMQTTBroker } from '@placeos/ts-client';
import { ComposerService } from '@placeos/composer';

@Component({
    selector: 'app-brokers',
    templateUrl: './brokers.component.html',
    styleUrls: ['./brokers.component.scss'],
})
export class AdminBrokersComponent implements OnInit {
    public brokers: PlaceMQTTBroker[] = [];

    constructor(private _composer: ComposerService) {}

    ngOnInit() {
        this.loadBrokers();
    }

    private async loadBrokers() {
        const brokers = await this._composer.brokers.query();
        this.brokers = brokers;
    }
}
