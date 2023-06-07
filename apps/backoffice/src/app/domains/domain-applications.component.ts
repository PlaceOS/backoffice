import { Component } from '@angular/core';
import { PlaceDomain, PlaceApplication } from '@placeos/ts-client';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import { copyToClipboard } from 'apps/backoffice/src/app/common/general';
import { notifyInfo } from 'apps/backoffice/src/app/common/notifications';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-applications',
    template: `
        <button
            btn
            class="w-full sm:w-40 mb-4"
            (click)="newApplication()"
            i18n="@@newAction"
        >
            New Application
        </button>
        <div
            role="table"
            class="overflow-x-auto"
            *ngIf="(applications | async)?.length; else empty_state"
        >
            <div table-head>
                <div class="w-40 p-2" i18n="@@applicationTableName">Name</div>
                <div class="flex-1 p-2" i18n="@@applicationTableRedirect">
                    Redirect
                </div>
                <div class="w-48 p-2" i18n="@@applicationTableClientId">
                    Client ID
                </div>
                <div class="w-48 p-2" i18n="@@applicationTableClientSecret">
                    Secret
                </div>
                <div class="w-24 p-2" i18n="@@applicationTableScope">Scope</div>
                <div class="w-24"></div>
            </div>
            <div table-body>
                <div table-row *ngFor="let item of applications | async">
                    <div class="w-40 p-2" [matTooltip]="item.id">
                        {{ item.name }}
                    </div>
                    <div class="flex-1 p-2 underline overflow-hidden">
                        <a [href]="item.redirect_uri" class="truncate">{{
                            item.redirect_uri
                        }}</a>
                    </div>
                    <div class="w-48 p-2 truncate text-xs">{{ item.uid }}</div>
                    <div
                        class="w-48 p-2 truncate underline text-center text-xs"
                        (click)="
                            !show_secret[item.id]
                                ? (show_secret[item.id] = true)
                                : copySecret(item)
                        "
                    >
                        {{ show_secret[item.id] ? item.secret : 'Show' }}
                    </div>
                    <div class="w-24 p-2">{{ item.scopes }}</div>
                    <div class="w-24 flex items-center justify-center">
                        <button btn icon (click)="editApplication(item)">
                            <app-icon
                                [icon]="{ class: 'backoffice-edit' }"
                            ></app-icon>
                        </button>
                        <button btn icon (click)="deleteApplication(item)">
                            <app-icon
                                [icon]="{ class: 'backoffice-trash' }"
                            ></app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ng-template #empty_state>
            <div empty-state>
                <p i18n="@@applicationTableEmpty">No applications found</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            [role='table'] > div {
                min-width: 56rem;
            }
        `,
    ],
})
export class DomainApplicationsComponent {
    /** List of applications associated with the active domain */
    public readonly applications = this._service.applications;

    public show_secret: HashMap<boolean> = {};

    public readonly newApplication = () => this._service.editApplication();
    public readonly editApplication = (item) =>
        this._service.editApplication(item);
    public readonly deleteApplication = (item) =>
        this._service.deleteApplication(item);

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(private _service: DomainStateService) {}

    public copySecret(item: PlaceApplication) {
        this.show_secret[item.id] = false;
        copyToClipboard(item.secret);
        notifyInfo('Copied client secret to clipboard');
    }
}
