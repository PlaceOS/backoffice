import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'system-trigger-form',
    template: `
        <form
            system-trigger
            class="flex flex-col w-[36rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label for="name" i18n="@@nameLabel"> Name: </label>
                <div class="value" name="name">
                    {{ form.controls.name.value }}
                </div>
            </div>
            <div class="field" *ngIf="form.controls.name">
                <label for="triggered" i18n="@@triggeredLabel">
                    Currently Triggered:
                </label>
                <div class="value" name="triggered">
                    {{ !!form.controls.triggered.value }}
                </div>
            </div>
            <div class="field" *ngIf="form.controls.enabled">
                <mat-checkbox
                    name="enabled"
                    formControlName="enabled"
                    i18n="@@enabledLabel"
                >
                    Enabled
                </mat-checkbox>
            </div>
            <div class="field" *ngIf="form.controls.exec_enabled">
                <mat-checkbox
                    name="enabled"
                    formControlName="exec_enabled"
                    i18n="@@execEnabledLabel"
                >
                    Execute Enabled
                </mat-checkbox>
            </div>
            <div class="field" *ngIf="form.controls.important">
                <mat-checkbox
                    name="important"
                    formControlName="important"
                    i18n="@@importantLabel"
                >
                    Important
                </mat-checkbox>
            </div>
        </form>
    `,
    styles: [``],
})
export class SystemTriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
}
