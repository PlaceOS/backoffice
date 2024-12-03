import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'system-trigger-form',
    template: `
        <form
            system-trigger
            class="flex flex-col w-[32rem] max-w-[calc(100vw-4rem)]"
            [formGroup]="form"
        >
            <div class="flex space-x-4 mb-4">
                <div
                    class="relative p-4 rounded border border-base-300 flex-1"
                    *ngIf="form.controls.name"
                >
                    <div
                        class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded p-2 text-xs truncation"
                    >
                        Trigger Name
                    </div>
                    <div>{{ form.controls.name.value }}</div>
                </div>
                <div
                    class="relative p-4 rounded border border-base-300 flex-1"
                    *ngIf="form.controls.name"
                >
                    <div
                        class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded p-2 text-xs"
                    >
                        Currently Triggered:
                    </div>
                    <div class="flex">
                        <div
                            class="rounded-full px-4 py-2 text-sm"
                            [class.bg-success]="form.value.triggered"
                            [class.text-success-content]="form.value.triggered"
                            [class.bg-error]="!form.value.triggered"
                            [class.text-error-content]="!form.value.triggered"
                        >
                            {{ form.value.triggered ? 'Yes' : 'No' }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center flex-wrap">
                <button
                    btn
                    matRipple
                    class="rounded-full flex-1 m-1"
                    [class.error]="!form.value.enabled"
                    [class.inverse]="!form.value.enabled"
                    (click)="form.patchValue({ enabled: !form.value.enabled })"
                >
                    <div class="flex items-center space-x-4">
                        <div>Enabled</div>
                        <div
                            class="rounded-2xl px-2 py-1 text-xs"
                            [class.bg-success]="form.value.enabled"
                            [class.text-success-content]="form.value.enabled"
                            [class.bg-error]="!form.value.enabled"
                            [class.text-error-content]="!form.value.enabled"
                        >
                            {{ form.value.enabled ? 'Yes' : 'No' }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-full flex-1 m-1"
                    [class.error]="!form.value.exec_enabled"
                    [class.inverse]="!form.value.exec_enabled"
                    (click)="
                        form.patchValue({
                            exec_enabled: !form.value.exec_enabled
                        })
                    "
                >
                    <div class="flex items-center space-x-4">
                        <div>Execute Enabled</div>
                        <div
                            class="rounded-2xl px-2 py-1 text-xs"
                            [class.bg-success]="form.value.exec_enabled"
                            [class.text-success-content]="
                                form.value.exec_enabled
                            "
                            [class.bg-error]="!form.value.exec_enabled"
                            [class.text-error-content]="
                                !form.value.exec_enabled
                            "
                        >
                            {{ form.value.exec_enabled ? 'Yes' : 'No' }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    class="rounded-full flex-1 m-1"
                    [class.error]="!form.value.important"
                    [class.inverse]="!form.value.important"
                    (click)="
                        form.patchValue({ important: !form.value.important })
                    "
                >
                    <div class="flex items-center space-x-4">
                        <div>Important</div>
                        <div
                            class="rounded-2xl px-2 py-1 text-xs"
                            [class.bg-success]="form.value.important"
                            [class.text-success-content]="form.value.important"
                            [class.bg-error]="!form.value.important"
                            [class.text-error-content]="!form.value.important"
                        >
                            {{ form.value.important ? 'Yes' : 'No' }}
                        </div>
                    </div>
                </button>
            </div>
        </form>
    `,
    styles: [``],
})
export class SystemTriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
}
