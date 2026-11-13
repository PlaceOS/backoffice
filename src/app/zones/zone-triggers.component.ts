import { Component, computed, inject, model } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { DateFromPipe } from '../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { ZonesStateService } from './zones-state.service';

@Component({
    selector: 'zone-triggers',
    template: `
        <div class="p-4">
            <section class="mb-4 flex items-center space-x-2">
                <app-form-field class="h-12 flex-1">
                    <div class="prefix" prefix>
                        <icon class="relative -left-0.5 text-2xl">
                            search
                        </icon>
                    </div>
                    <input
                        [(ngModel)]="filter"
                        [placeholder]="'TRIGGERS.SEARCH' | translate"
                        class="rounded-none"
                    />
                </app-form-field>
                <button btn ripple class="w-32" (click)="selectTrigger()">
                    {{ 'TRIGGERS.ADD' | translate }}
                </button>
            </section>
            <section>
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-lg text-sm"
                    [data]="triggers()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'added',
                            name: 'TRIGGERS.FIELD_ADDED' | translate,
                            content: added_template,
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [empty_message]="'ZONES.TRIGGERS_EMPTY' | translate"
                />
                <ng-template #name_template let-row="row">
                    <div
                        class="flex flex-col items-start px-4 py-2 leading-snug"
                    >
                        <a
                            class="truncate underline"
                            [routerLink]="['/triggers', row.id]"
                        >
                            {{ row.name }}
                        </a>
                        <div class="font-mono text-[0.625rem] opacity-30">
                            {{ row.id }}
                        </div>
                    </div>
                </ng-template>
                <ng-template #added_template let-row="row">
                    <div class="p-4">
                        {{ +row.created_at * 1000 | dateFrom }}
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            error
                            ripple
                            [appTooltip]="'TRIGGERS.REMOVE' | translate"
                            (click)="deleteTrigger(row)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </section>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        ProgressBarComponent,
        TooltipDirective,
        FormFieldComponent,
        IconComponent,
        DateFromPipe,
        RouterModule,
        TranslatePipe,
        FormsModule,
        SimpleTableComponent,
    ],
})
export class ZoneTriggersComponent {
    private _state = inject(ZonesStateService);

    public readonly filter = model('');
    public readonly loading = this._state.loading;
    private readonly _triggers = this._state.triggers;
    /** List of triggers associated with the zone */
    public readonly triggers = computed(() => {
        const filter = this.filter().toLowerCase();
        const triggers = this._triggers();
        return !filter
            ? triggers
            : triggers.filter((sys) => sys.name.toLowerCase().includes(filter));
    });

    public readonly selectTrigger = () => this._state.selectTrigger();
    public readonly deleteTrigger = (t) => this._state.removeTrigger(t);
}
