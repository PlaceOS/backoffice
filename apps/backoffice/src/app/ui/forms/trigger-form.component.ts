import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'trigger-form',
    template: `
        <form
            trigger
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            *ngIf="form"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="trigger-name"
                    [class.error]="
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@nameLabel"
                    >Name<span>*</span>:</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="trigger-name"
                        placeholder="Trigger Name"
                        i18n-placeholder="@@triggerNamePlaceholder"
                        formControlName="name"
                        required
                    />
                    <mat-error i18n="@@triggerError"
                        >Trigger name is required</mat-error
                    >
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
                <label for="description" i18n="@@descriptionLabel"
                    >Description:</label
                >
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Description"
                        i18n-placeholder="@@descriptionPlaceholder"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.enable_webhook">
                <mat-checkbox
                    name="enable-webhook"
                    formControlName="enable_webhook"
                    i18n="@@enableWebhooklabel"
                >
                    Enable Webhook
                </mat-checkbox>
            </div>
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
                        form.controls.name.invalid && form.controls.name.touched
                    "
                    i18n="@@debounceLabel"
                >
                    Debounce Period:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="debounce-period"
                        type="number"
                        placeholder="Debounce Period"
                        i18n-placeholder="@@debouncePlaceholder"
                        formControlName="debounce_period"
                        required
                    />
                    <mat-error i18n="@@debounceError"
                        >Debounce period must be 0 or greater</mat-error
                    >
                </mat-form-field>
            </div>
            <div
                class="field"
                *ngIf="
                    form.controls.enable_webhook.value &&
                    form.controls.supported_methods
                "
            >
                <label for="methods" i18n="@@supportedMethodsLabel">
                    Supported Methods:
                </label>
                <mat-form-field appearance="outline">
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
        </form>
    `,
    styles: [``],
})
export class TriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
}
