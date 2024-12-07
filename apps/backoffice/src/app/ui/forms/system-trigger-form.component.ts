import { Component, Input } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'system-trigger-form',
    template: `
        <form system-trigger class="flex flex-col" [formGroup]="form">
            <div class="flex space-x-4 mb-4">
                <div
                    class="relative p-4 rounded border border-base-300 flex-1 flex items-center"
                    *ngIf="form.controls.name"
                >
                    <div
                        class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded p-2 text-xs truncation"
                    >
                        {{ 'SYSTEMS.TRIGGER_NAME' | translate }}
                    </div>
                    <div class="text-xl">{{ form.controls.name.value }}</div>
                </div>
                <div
                    class="relative p-4 rounded border border-base-300 flex-1"
                    *ngIf="form.controls.name"
                >
                    <div
                        class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded p-2 text-xs"
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
            <div class="flex items-center flex-wrap -mx-2">
                <settings-toggle
                    class="min-w-[40%] flex-1 m-2 max-w-[calc(50%-1rem)]"
                    [name]="'SYSTEMS.TRIGGER_ENABLED' | translate"
                    formControlName="enabled"
                ></settings-toggle>
                <settings-toggle
                    class="min-w-[40%] flex-1 m-2 max-w-[calc(50%-1rem)]"
                    [name]="'SYSTEMS.TRIGGER_EXECUTE_ENABLED' | translate"
                    formControlName="exec_enabled"
                ></settings-toggle>
                <settings-toggle
                    class="min-w-[40%] flex-1 m-2 max-w-[calc(50%-1rem)]"
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
