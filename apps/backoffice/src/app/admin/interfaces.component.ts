import { Component, OnInit } from '@angular/core';
import { listInterfaceRepositories } from '@placeos/ts-client';

import { Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'app-interfaces',
    template: `
        <div
            role="table"
            class="pt-4"
            *ngIf="interfaces && interfaces.length; else load_state"
        >
            <div table-head>
                <div class="flex-1 p-2">Repository</div>
                <div class="w-[20rem] p-2">Commit Hash</div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of interfaces">
                    <div class="flex-1 p-2">{{ item.id }}</div>
                    <div class="w-[20rem] p-2">
                        <code>
                            {{ item.name || '~No Commit Hash~' }}
                        </code>
                    </div>
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
        this.interfaces = Object.keys(interfaces).map((id) => ({
            id,
            name: interfaces[id],
        }));
        this.interfaces.sort((a, b) => `${a.id}`?.localeCompare(`${b.id}`));
    }
}
