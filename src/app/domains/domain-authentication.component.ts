import { Component, inject } from '@angular/core';

import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'domain-authentication',
    template: `
        <div class="flex h-full w-full flex-col">
            <div header class="p-4">
                <button
                    btn
                    class="mb-4 w-full sm:w-48"
                    (click)="newAuthSource()"
                >
                    {{ 'DOMAINS.AUTHENTICATION_NEW' | translate }}
                </button>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="loading() !== true"
                />
                <simple-table
                    class="block min-w-160 text-sm"
                    [data]="auth_sources"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'type',
                            name: 'DOMAINS.FIELD_TYPE' | translate,
                            size: '6rem',
                            content: type_template,
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '6.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'DOMAINS.AUTHENTICATION_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div class="text-sm">{{ row.name }}</div>
                <div class="text-xs opacity-30 select-all">{{ row.id }}</div>
            </div>
        </ng-template>
        <ng-template #type_template let-row="row">
            <div class="mono p-4 text-sm uppercase">{{ row.type }}</div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    ripple
                    [appTooltip]="'DOMAINS.AUTHENTICATION_EDIT' | translate"
                    (click)="editAuthSource(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    ripple
                    [appTooltip]="'DOMAINS.AUTHENTICATION_REMOVE' | translate"
                    (click)="removeAuthSource(row)"
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
        `,
    ],
    imports: [
        ProgressBarComponent,
        TooltipDirective,
        SimpleTableComponent,
        IconComponent,
        TranslatePipe,
    ],
})
export class DomainAuthenticationComponent {
    private _service = inject(DomainStateService);

    /** List of auth sources associated with the active domain */
    public readonly auth_sources = this._service.auth_sources;
    public readonly loading = this._service.loading;

    public readonly newAuthSource = () => this._service.editAuthSource();
    public readonly editAuthSource = (source) =>
        this._service.editAuthSource(source);
    public readonly removeAuthSource = (source) =>
        this._service.deleteAuthSource(source);
}
