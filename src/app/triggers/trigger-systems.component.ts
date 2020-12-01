import { Component } from '@angular/core';
import { PlaceTrigger } from '@placeos/ts-client';

import { HashMap } from 'src/app/common/types';

import { TriggerStateService } from './trigger-state.service';

@Component({
    selector: 'trigger-systems',
    template: `
        <div role="table" *ngIf="(systems | async)?.length; else empty_state">
            <div table-head>
                <td class="w-12"></td>
                <td class="flex-1" i18n="@@systemTableName">Name</td>
                <td class="w-32" i18n="@@systemTableAdded">Added</td>
                <td class="w-12"></td>
            </div>
            <div table-head>
                <div table-row *ngFor="let system of systems | async">
                    <div class="w-12 flex items-center justify-center">
                        <div class="h-2 w-2 rounded-full bg-black" [class.active]="system.bookable"></div>
                    </div>
                    <div class="flex-1 p-2">
                        <a
                            *ngIf="system.id"
                            [routerLink]="['/systems', system.id]"
                            [matTooltip]="system.id"
                        >
                            {{ system.name }}
                        </a>
                    </div>
                    <div class="w-32">{{ +system.created_at * 1000 | dateFrom }}</div>
                    <div class="w-12 flex items-center justify-center">
                        <button mat-icon-button (click)="deleteTrigger(system)">
                            <app-icon className="backoffice-trash"></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="flex flex-col items-center p-8">
                <div class="text" i18n="@@systemTableEmpty">No systems with trigger</div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                padding: 1rem;
                height: 100%;
                width: 100%;
            }

            .active {
                background-color: var(--success) !important;
            }
        `,
    ],
})
export class TriggerSystemsComponent {
    /** List of systems associated with the trigger */
    public readonly systems = this._service.systems;
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    public readonly deleteTrigger = (s) => this._service.removeTriggerFromSystem(s);

    public get item(): PlaceTrigger {
        return this._service.active_item as any;
    }

    constructor(private _service: TriggerStateService) {}
}
