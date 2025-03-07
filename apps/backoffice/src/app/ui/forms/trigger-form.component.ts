import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'trigger-form',
    template: `
        <form
            trigger
            class="flex w-[36rem] max-w-[calc(100vw-4rem)] flex-col"
            *ngIf="form"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="trigger-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                >
                    {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="trigger-name"
                        [placeholder]="'COMMON.FIELD_NAME' | translate"
                        formControlName="name"
                        required
                    />
                    <mat-error>Trigger name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description">{{
                    'COMMON.FIELD_DESCRIPTION' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        [placeholder]="'COMMON.FIELD_DESCRIPTION' | translate"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div
                class="field mb-4 w-[calc(50%-0.75rem)]"
                *ngIf="form.controls.enable_webhook"
            >
                <settings-toggle
                    [name]="'TRIGGERS.ENABLE_WEBHOOK' | translate"
                    formControlName="enable_webhook"
                ></settings-toggle>
            </div>
            <div class="flex items-center space-x-4">
                <div
                    class="field"
                    *ngIf="
                        form.controls.enable_webhook.value &&
                        form.controls.debounce_period
                    "
                >
                    <label
                        for="debounce-period"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                    >
                        {{ 'TRIGGERS.DEBOUNCE_PERIOD' | translate }}
                    </label>
                    <a-counter
                        formControlName="debounce_period"
                        [min]="0"
                        [step]="100"
                        [max]="24 * 60 * 60"
                        [render_fn]="render_debounce"
                    ></a-counter>
                </div>
                <div
                    class="field"
                    *ngIf="
                        form.controls.enable_webhook.value &&
                        form.controls.supported_methods
                    "
                >
                    <label for="methods">
                        {{ 'TRIGGERS.SUPPORTED_METHODS' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="no-subscript">
                        <mat-select
                            name="methods"
                            multiple
                            formControlName="supported_methods"
                        >
                            <mat-option value="GET">GET</mat-option>
                            <mat-option value="POST">POST</mat-option>
                            <mat-option value="PUT">PUT</mat-option>
                            <mat-option value="PATCH">PATCH</mat-option>
                            <mat-option value="DELETE">DELETE</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
        </form>
    `,
    styles: [``],
    standalone: false
})
export class TriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;

    public readonly render_debounce = (v) => `${v} ms`;
}
