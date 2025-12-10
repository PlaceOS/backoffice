import { Component, input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CounterComponent } from '../counter.component';
import { SettingsToggleComponent } from '../settings-toggle.component';
import { TranslatePipe } from '../translate.pipe';

@Component({
    selector: 'trigger-form',
    template: `
        @if (form()) {
            <form
                trigger
                class="flex w-xl max-w-[calc(100vw-4rem)] flex-col"
                [formGroup]="form()"
            >
                @if (form().controls.name) {
                    <div class="field">
                        <label
                            for="trigger-name"
                            [class.error]="
                                form().controls.name.invalid &&
                                form().controls.name.touched
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
                }
                @if (form().controls.description) {
                    <div class="field">
                        <label for="description">{{
                            'COMMON.FIELD_DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form().controls.enable_webhook) {
                    <div class="field mb-4 w-[calc(50%-0.75rem)]">
                        <settings-toggle
                            [name]="'TRIGGERS.ENABLE_WEBHOOK' | translate"
                            formControlName="enable_webhook"
                        ></settings-toggle>
                    </div>
                }
                <div class="flex items-center space-x-4">
                    @if (
                        form().controls.enable_webhook.value &&
                        form().controls.debounce_period
                    ) {
                        <div class="field">
                            <label
                                for="debounce-period"
                                [class.error]="
                                    form().controls.name.invalid &&
                                    form().controls.name.touched
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
                    }
                    @if (
                        form().controls.enable_webhook.value &&
                        form().controls.supported_methods
                    ) {
                        <div class="field">
                            <label for="methods">
                                {{ 'TRIGGERS.SUPPORTED_METHODS' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript"
                            >
                                <mat-select
                                    name="methods"
                                    multiple
                                    formControlName="supported_methods"
                                >
                                    <mat-option value="GET">GET</mat-option>
                                    <mat-option value="POST">POST</mat-option>
                                    <mat-option value="PUT">PUT</mat-option>
                                    <mat-option value="PATCH">PATCH</mat-option>
                                    <mat-option value="DELETE"
                                        >DELETE</mat-option
                                    >
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                </div>
            </form>
        }
    `,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        CounterComponent,
        SettingsToggleComponent,
        MatInputModule,
        TranslatePipe,
    ],
})
export class TriggerFormComponent {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);

    public readonly render_debounce = (v: number) => `${v} ms`;
}
