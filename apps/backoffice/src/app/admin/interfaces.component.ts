import { Component, OnInit } from '@angular/core';
import { listInterfaceRepositories } from '@placeos/ts-client';

import { BehaviorSubject } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-interfaces',
    template: `
        <div class="flex items-center justify-between space-x-2 my-4">
            <div class="text-2xl">PlaceOS Interfaces</div>
        </div>
        <simple-table
            class="min-w-[36rem] block text-sm"
            [data]="interfaces"
            [columns]="[
                { key: 'id', name: 'Repository' },
                {
                    key: 'name',
                    name: 'Commit Hash',
                    content: name_template,
                    size: '24rem'
                }
            ]"
            [sortable]="true"
            empty_message="No interfaces"
        ></simple-table>
        <ng-template #name_template let-row="row">
            <div class="p-4">
                <div class="font-mono" *ngIf="row.name">{{ row.name }}</div>
                <span class="text-xs opacity-30" *ngIf="!row.name">
                    No Commit Hash
                </span>
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

    private _change = new BehaviorSubject<number>(0);

    public interfaces = this._change.pipe(
        debounceTime(300),
        switchMap(() => listInterfaceRepositories()),
        map((mapping) => {
            const list = Object.keys(mapping).map((id) => ({
                id,
                name: mapping[id],
            }));
            list.sort((a, b) => `${a.id}`?.localeCompare(`${b.id}`));
            return list;
        }),
        shareReplay(1)
    );

    public ngOnInit() {
        this._change.next(Date.now());
    }
}
