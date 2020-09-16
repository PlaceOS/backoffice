import { Component, OnInit } from '@angular/core';
import { listInterfaceRepositories } from '@placeos/ts-client';

import { Identity } from 'src/app/common/types';

@Component({
    selector: 'app-interfaces',
    templateUrl: './interfaces.component.html',
    styleUrls: ['./interfaces.component.scss'],
})
export class AdminInterfacesComponent implements OnInit {
    /** List of interfaces */
    public interfaces: Identity[] = [];

    ngOnInit() {
        this.loadInterfaces();
    }

    private async loadInterfaces() {
        const interfaces = await listInterfaceRepositories().toPromise();
        this.interfaces = Object.keys(interfaces).map(id => ({ id, name: interfaces[id] }));
    }
}
