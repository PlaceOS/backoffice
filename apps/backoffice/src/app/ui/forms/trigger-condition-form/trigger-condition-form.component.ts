import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { PlaceSystem } from '@placeos/ts-client';

import { Identity } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'trigger-condition-form',
    template: `
        <form trigger-condition
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]" *ngIf="form" [formGroup]="form">
            <div class="field" *ngIf="form.controls.condition_type">
                <label for="type" i18n="@@conditionTypeLabel"
                    >Condition Type:
                </label>
                <mat-form-field appearance="outline">
                    <mat-select name="type" formControlName="condition_type">
                        <mat-option
                            *ngFor="let type of condition_types"
                            [value]="type.id"
                            i18n="@@triggerConditionType"
                        >
                            { type.id, select, compare { Compare Values } time {
                            Particular Time } }
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <ng-container
                *ngIf="
                    form.controls.condition_type.value === 'compare';
                    else time_form
                "
            >
                <trigger-condition-comparison-form
                    [form]="form"
                    [system]="system"
                ></trigger-condition-comparison-form>
            </ng-container>
        </form>
        <ng-template #time_form>
            <trigger-condition-time-form
                [form]="form"
            ></trigger-condition-time-form>
        </ng-template>
    `,
    styles: [
        `
            :host {
                max-width: 100%;
            }
        `,
    ],
})
export class TriggerConditionFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** Systems used for templating the status variables */
    @Input() public system: PlaceSystem;

    /** Types of trigger conditions */
    public condition_types: Identity[] = [
        { id: 'compare', name: 'Compare values' },
        { id: 'time', name: 'Particular time' },
    ];
}
