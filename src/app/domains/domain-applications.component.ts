import { Component, inject } from '@angular/core';
import { PlaceApplication, PlaceDomain } from '@placeos/ts-client';

import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { copyToClipboard } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyInfo } from '../common/notifications';
import { HashMap } from '../common/types';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-applications',
    template: `
        <div class="flex h-full w-full flex-col">
            <div header class="">
                <button
                    btn
                    class="mb-4 w-full sm:w-40"
                    (click)="newApplication()"
                >
                    {{ 'DOMAINS.APPLICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="loading() !== true"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-360 text-sm"
                    [data]="applications"
                    [columns]="[
                        { key: 'name', name: 'Name', content: name_template },
                        {
                            key: 'redirect_uri',
                            name: 'DOMAINS.FIELD_REDIRECT_URI' | translate,
                            content: redirect_template,
                            size: '20rem',
                        },
                        {
                            key: 'uid',
                            name: 'DOMAINS.FIELD_CLIENT_ID' | translate,
                            content: client_id_template,
                            size: '17rem',
                        },
                        {
                            key: 'secret',
                            name: 'DOMAINS.FIELD_CLIENT_SECRET' | translate,
                            content: secret_template,
                        },
                        {
                            key: 'scopes',
                            name: 'Scopes',
                            content: scopes_template,
                        },
                        {
                            key: 'subsystems',
                            name: 'DOMAINS.APP_SUBSYSTEMS' | translate,
                            content: subsystems_template,
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            sortable: false,
                            content: actions_template,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.APPLICATIONS_EMPTY' | translate"
                ></simple-table>
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
            </div>
        </ng-template>
        <ng-template #redirect_template let-row="row">
            <a
                [href]="row.redirect_uri"
                target="_blank"
                class="truncate p-4 underline"
            >
                {{ row.redirect_uri }}
            </a>
        </ng-template>
        <ng-template #client_id_template let-row="row">
            <div class="p-4 font-mono text-xs">{{ row.uid }}</div>
        </ng-template>
        <ng-template #secret_template let-row="row">
            <div class="flex items-center gap-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    (click)="copySecret(row)"
                    [matTooltip]="'DOMAINS.COPY_SECRET' | translate"
                >
                    <icon>content_copy</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    (mousedown)="show_secret[row.id] = true"
                    (touchstart)="show_secret[row.id] = true"
                    (window:mouseup)="show_secret[row.id] = false"
                    (window:touchend)="show_secret[row.id] = false"
                    [matTooltip]="'DOMAINS.VIEW_SECRET' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <div class="font-mono text-xs">
                    @if (!show_secret[row.id]) {
                        <span class="bg-base-200 rounded-sm p-2">{{
                            'DOMAINS.SECRET_HIDDEN' | translate
                        }}</span>
                    }
                    @if (show_secret[row.id]) {
                        <span>{{ row.secret }}</span>
                    }
                </div>
            </div>
        </ng-template>
        <ng-template #subsystems_template let-row="row">
            <mat-chip-set class="block max-w-80 p-2" aria-label="Subsystems">
                @for (subsystem of row.subsystems || []; track subsystem) {
                    <mat-chip>{{ subsystem }}</mat-chip>
                }
            </mat-chip-set>
        </ng-template>
        <ng-template #scopes_template let-row="row">
            <mat-chip-set class="block max-w-80 p-2" aria-label="Scopes">
                @for (scope of scopeList(row); track scope) {
                    <mat-chip>{{ scope }}</mat-chip>
                }
            </mat-chip-set>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'DOMAINS.APPLICATION_EDIT' | translate"
                    (click)="editApplication(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'DOMAINS.APPLICATION_REMOVE' | translate"
                    (click)="removeApplication(row)"
                >
                    <icon>delete</icon>
                </button>
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
    imports: [
        SimpleTableComponent,
        IconComponent,
        MatChipsModule,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        MatProgressBarModule,
    ],
})
export class DomainApplicationsComponent {
    private _service = inject(DomainStateService);

    /** List of applications associated with the active domain */
    public readonly applications = this._service.applications;
    public readonly loading = this._service.loading;

    public show_secret: HashMap<boolean> = {};

    public readonly newApplication = () => this._service.editApplication();
    public readonly editApplication = (item) =>
        this._service.editApplication(item);
    public readonly removeApplication = (item) =>
        this._service.deleteApplication(item);

    public readonly scopeList = (item: PlaceApplication): string[] =>
        `${item.scopes || ''}`.split(/\s+/).filter((_) => !!_);

    public get item(): PlaceDomain {
        return this._service.active_item as PlaceDomain;
    }

    public copySecret(item: PlaceApplication) {
        this.show_secret[item.id] = false;
        copyToClipboard(item.secret);
        notifyInfo(i18n('DOMAINS.COPIED_SECRET'));
    }
}
