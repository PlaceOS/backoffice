import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'system-trigger-form',
    template: `
        <form system-trigger class="flex flex-col" [formGroup]="form">
            <div class="mb-4 flex space-x-4">
                <div
                    class="relative flex flex-1 items-center rounded border border-base-300 p-4"
                    *ngIf="form.controls.name"
                >
                    <div
                        class="truncation absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 p-2 text-xs"
                    >
                        {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                    </div>
                    <div class="text-xl">{{ form.controls.name.value }}</div>
                </div>
                <div
                    class="relative flex-1 rounded border border-base-300 p-4"
                    *ngIf="form.controls.name"
                >
                    <div
                        class="absolute left-4 top-0 -translate-y-1/2 rounded bg-base-100 p-2 text-xs"
                    >
                        {{ 'SYSTEMS.TRIGGER_ACTIVE' | translate }}
                    </div>
                    <div class="flex">
                        <div
                            class="rounded-full px-4 py-2 text-sm"
                            [class.bg-success]="form.value.triggered"
                            [class.text-success-content]="form.value.triggered"
                            [class.bg-error]="!form.value.triggered"
                            [class.text-error-content]="!form.value.triggered"
                        >
                            {{
                                (form.value.triggered
                                    ? 'COMMON.TRUE'
                                    : 'COMMON.FALSE'
                                ) | translate
                            }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="-mx-2 flex flex-wrap items-center">
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                    formControlName="enabled"
                ></settings-toggle>
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate"
                    formControlName="exec_enabled"
                ></settings-toggle>
                <settings-toggle
                    class="m-2 min-w-[40%] max-w-[calc(50%-1rem)] flex-1"
                    [name]="'SYSTEMS.TRIGGER_IMPORTANT' | translate"
                    formControlName="important"
                ></settings-toggle>
            </div>
        </form>
    `,
    styles: [``],
})
export class SystemTriggerFormComponent {
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
}
