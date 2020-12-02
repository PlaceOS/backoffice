import { Component, OnInit } from '@angular/core';
import { listInterfaceRepositories } from '@placeos/ts-client';

import { Identity } from 'src/app/common/types';

@Component({
    selector: 'app-interfaces',
    template: `
        <div role="table" *ngIf="interfaces && interfaces.length; else load_state">
            <div table-head>
                <div class="flex-1 p-2">Repository</div>
                <div class="w-32 p-2">Commit Hash</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of interfaces">
                    <div class="flex-1 p-2">{{ item.id }}</div>
                    <div class="w-32 p-2">{{ item.name }}</div>
                </div>
            </div>
        </div>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8">
                <app-icon class="mb-4" className="backoffice-cross"></app-icon>
                <p>No interfaces</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class AdminInterfacesComponent implements OnInit {
    /** List of interfaces */
    public interfaces: Identity[] = [];

    ngOnInit() {
        this.loadInterfaces();
    }

    private async loadInterfaces() {
        const interfaces = await listInterfaceRepositories().toPromise();
        this.interfaces = Object.keys(interfaces).map((id) => ({ id, name: interfaces[id] }));
    }
}
