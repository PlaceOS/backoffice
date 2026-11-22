import { Dialog } from '@angular/cdk/dialog';
import { Component, forwardRef, inject, input, signal } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
    type JsonValue,
    type System,
    systems,
    TriggerActionsFunction,
    zones,
} from '@placeos/ts-client';
import { CallFailed, orThrow } from '@placeos/ts-client/compat';
import { notifyError, notifySuccess } from '../../../common/notifications';
import { ViewResponseModalComponent } from '../../../overlays/view-response-modal.component';
import { SpinnerComponent } from '../../controls/spinner.component';
import { TranslatePipe } from '../../translate.pipe';
import { FunctionArgumentComponent } from './function-argument.component';
import {
    type ModuleFunction,
    SelectMethodComponent,
} from './select-method.component';
import { ModuleLike, SelectModuleComponent } from './select-module.component';

@Component({
    selector: 'execute-method-field',
    template: `
        <div class="relative">
            <div [class.pointer-events-none]="loading()">
                <select-system-module
                    [system]="system()"
                    [refresh]="refresh()"
                    [disabled]="disabled()"
                    [(ngModel)]="module"
                    (ngModelChange)="fn.set(null)"
                />
                @if (module()) {
                    <select-module-method
                        [system]="system()"
                        [module]="module()"
                        [disabled]="disabled()"
                        [(ngModel)]="fn"
                        (ngModelChange)="
                            fn()?.order?.length === 0 ? postArguments({}) : ''
                        "
                    />
                }
                @if (fn()) {
                    <function-arguments
                        [method]="fn()"
                        [disabled]="disabled()"
                        [ngModel]="arguments()"
                        (valid)="valid.set($event)"
                        (ngModelChange)="postArguments($event)"
                    />
                }
                @if (can_execute()) {
                    <div class="flex w-full items-center space-x-2">
                        <button
                            class="inverse flex-1"
                            btn
                            [disabled]="disabled()"
                            (click)="clear()"
                        >
                            {{ 'COMMON.EXECUTE_CLEAR' | translate }}
                        </button>
                        <button
                            class="flex-1"
                            [disabled]="disabled() || !fn() || !valid()"
                            btn
                            ripple
                            (click)="execute()"
                        >
                            {{ 'COMMON.EXECUTE_PERFORM' | translate }}
                        </button>
                    </div>
                }
            </div>
            @if (loading()) {
                <div
                    class="absolute -inset-2 flex flex-col items-center justify-center rounded-sm"
                >
                    <div class="bg-base-100 absolute inset-0 opacity-60"></div>
                    <app-spinner diameter="32" />
                    <p>{{ 'COMMON.EXECUTE_LOADING' | translate }}</p>
                </div>
            }
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ExecuteMethodFieldComponent),
            multi: true,
        },
    ],
    imports: [
        SpinnerComponent,
        TranslatePipe,
        FormsModule,
        SelectModuleComponent,
        SelectMethodComponent,
        FunctionArgumentComponent,
    ],
})
export class ExecuteMethodFieldComponent implements ControlValueAccessor {
    private _dialog = inject(Dialog);

    public readonly zone = input<string>(undefined);
    /** ID of the system to select the module from */
    public readonly system = input<System>(undefined);
    /** Whether component is allowed to execute methods on the system */
    public readonly can_execute = input(true);
    /** Trigger to refresh modules list */
    public readonly refresh = input<number>(0);

    public readonly valid = signal(true);
    public readonly module = signal<ModuleLike>(undefined);
    public readonly fn = signal<ModuleFunction>(undefined);
    public readonly arguments = signal<Record<string, unknown>>({});
    public readonly disabled = signal(false);

    public loading = signal(false);

    /** Form control on change handler */
    private _onChange: (_: TriggerActionsFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: TriggerActionsFunction) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: TriggerActionsFunction): void {
        if (this.disabled()) return;
        if (this._onChange) {
            this._onChange(new_value);
        }
        this._onTouch?.(new_value);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: TriggerActionsFunction) {
        if (!value) return;
        const parts = value.mod.split('_');
        const index = parts.pop();
        this.module.set({
            module: parts.join('_'),
            index: +index,
        } as ModuleLike);
        // The value has only the name. The method list fills the details
        this.fn.set({ name: value.method } as ModuleFunction);
        const args: Record<string, string> = {};
        for (const key in value.args || {}) {
            const raw = value.args[key];
            let v: JsonValue = raw;
            if (typeof raw === 'string') {
                try {
                    v = JSON.parse(raw);
                } catch {
                    // Keep original value if parse fails
                }
            }
            args[key] = JSON.stringify(v);
        }
        this.arguments.set(args);
    }

    public postArguments(arg_map: Record<string, unknown>) {
        if (this.disabled()) return;
        if (!this.fn()?.params) return;
        const args: Record<string, JsonValue> = {};
        for (const key in arg_map) {
            try {
                args[key] = JSON.parse(arg_map[key] as string);
            } catch {
                // Keep the text of the argument field if it is not JSON
                args[key] = arg_map[key] as JsonValue;
            }
        }
        this.setValue({
            mod: `${this.module().module}_${this.module().index}`,
            method: this.fn().name,
            args,
        });
        this.arguments.set(arg_map as Record<string, unknown>);
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange = (fn: (_: TriggerActionsFunction) => void) =>
        (this._onChange = fn);

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched = (fn: (_: TriggerActionsFunction) => void) =>
        (this._onTouch = fn);

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }

    public clear() {
        if (this.disabled()) return;
        this.module.set(null);
        this.fn.set(null);
        this.arguments.set({});
        this._onTouch?.(null);
    }

    public async execute() {
        if (this.disabled()) return;
        this.loading.set(true);
        this.arguments.set(this.arguments() || {});
        const module_slug = `${this.module().module}_${this.module().index}`;
        const method = this.fn().name;
        const body: JsonValue[] = this.fn().order.map((key) => {
            const fn_details = this.fn().params[key];
            const value = this.arguments()[key];
            try {
                return JSON.parse(value as string);
            } catch {
                const default_value =
                    fn_details && typeof fn_details === 'object'
                        ? (fn_details as { default?: JsonValue }).default
                        : null;
                // Arguments are the text of the argument fields
                return (
                    (value !== '' ? (value as JsonValue) : null) ??
                    default_value ??
                    null
                );
            }
        });
        const request = this.zone()
            ? zones.zoneExecute({ id: this.zone(), module_slug, method, body })
            : systems.execute({
                  sys_id: this.system().id,
                  module_slug,
                  method,
                  body,
              });
        let failed = false;
        const result = await request.then(orThrow).catch((err) => {
            if (typeof err === 'string' && err.length < 128) {
                notifyError(err);
            } else {
                notifyError(
                    `Executing '${this.fn().name}' failed.\nView Error?`,
                    'View',
                    () =>
                        this.viewDetails(
                            err instanceof CallFailed &&
                                err.error.kind === 'http'
                                ? err.error.body
                                : err,
                        ),
                );
            }
            this.loading.set(false);
            failed = true;
            return null;
        });
        if (failed) return;
        notifySuccess(
            'Command successfully executed.\nView Response?',
            'View',
            () => this.viewDetails(result),
        );
        this.loading.set(false);
    }

    /** View Results of the execute */
    private viewDetails(details: unknown) {
        this._dialog.open<unknown, unknown, ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: { content: details },
            },
        );
    }
}
