import { Component, forwardRef, inject, input, signal } from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    executeOnSystem,
    executeOnZone,
    PlaceModuleFunction,
    PlaceSystem,
    TriggerFunction,
} from '@placeos/ts-client';
import { lastValueFrom } from '../../../common/general';
import { notifyError, notifySuccess } from '../../../common/notifications';
import { ViewResponseModalComponent } from '../../../overlays/view-response-modal.component';
import { TranslatePipe } from '../../translate.pipe';
import { FunctionArgumentComponent } from './function-argument.component';
import { SelectMethodComponent } from './select-method.component';
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
                ></select-system-module>
                @if (module()) {
                    <select-module-method
                        [system]="system()"
                        [module]="module()"
                        [disabled]="disabled()"
                        [(ngModel)]="fn"
                        (ngModelChange)="
                            fn()?.order?.length === 0 ? postArguments({}) : ''
                        "
                    ></select-module-method>
                }
                @if (fn()) {
                    <function-arguments
                        [method]="fn()"
                        [disabled]="disabled()"
                        [ngModel]="arguments()"
                        (valid)="valid.set($event)"
                        (ngModelChange)="postArguments($event)"
                    ></function-arguments>
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
                            matRipple
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
                    <mat-spinner diameter="32"></mat-spinner>
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
        TranslatePipe,
        MatProgressSpinnerModule,
        MatRippleModule,
        FormsModule,
        SelectModuleComponent,
        SelectMethodComponent,
        FunctionArgumentComponent,
    ],
})
export class ExecuteMethodFieldComponent implements ControlValueAccessor {
    private _dialog = inject(MatDialog);

    public readonly zone = input<string>(undefined);
    /** ID of the system to select the module from */
    public readonly system = input<PlaceSystem>(undefined);
    /** Whether component is allowed to execute methods on the system */
    public readonly can_execute = input(true);
    /** Trigger to refresh modules list */
    public readonly refresh = input<number>(0);

    public readonly valid = signal(true);
    public readonly module = signal<ModuleLike>(undefined);
    public readonly fn = signal<PlaceModuleFunction>(undefined);
    public readonly arguments = signal<Record<string, unknown>>({});
    public readonly disabled = signal(false);

    public loading = signal(false);

    /** Form control on change handler */
    private _onChange: (_: TriggerFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: TriggerFunction) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: TriggerFunction): void {
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
    public writeValue(value: TriggerFunction) {
        if (!value) return;
        const parts = value.mod.split('_');
        const index = parts.pop();
        this.module.set({
            module: parts.join('_'),
            index: +index,
        } as ModuleLike);
        this.fn.set({ name: value.method } as unknown as PlaceModuleFunction);
        const args: Record<string, string> = {};
        for (const key in value.args || {}) {
            let v = value.args[key];
            try {
                v = JSON.parse(value.args[key]);
            } catch {
                // Keep original value if parse fails
            }
            args[key] = JSON.stringify(v);
        }
        this.arguments.set(args);
    }

    public postArguments(arg_map: Record<string, unknown>) {
        if (this.disabled()) return;
        if (!this.fn()?.params) return;
        const args: Record<string, unknown> = {};
        for (const key in arg_map) {
            args[key] = arg_map[key];
            try {
                args[key] = JSON.parse(arg_map[key] as string);
            } catch {
                // Keep original value if parse fails
            }
        }
        this.setValue({
            mod: `${this.module().module}_${this.module().index}`,
            method: (this.fn() as unknown as { name: string }).name,
            args,
        });
        this.arguments.set(arg_map as Record<string, unknown>);
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange = (fn: (_: TriggerFunction) => void) =>
        (this._onChange = fn);

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched = (fn: (_: TriggerFunction) => void) =>
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
        const method = this.zone() ? executeOnZone : executeOnSystem;
        const result = await lastValueFrom(
            method(
                this.zone() || this.system().id,
                (this.fn() as unknown as { name: string }).name,
                this.module().module,
                this.module().index,
                this.fn().order.map((key) => {
                    const fn_details = this.fn().params[
                        key
                    ] as unknown as Record<string, unknown>;
                    try {
                        return JSON.parse(this.arguments()[key] as string);
                    } catch {
                        return (
                            (this.arguments()[key] !== ''
                                ? this.arguments()[key]
                                : null) ??
                            fn_details?.default ??
                            null
                        );
                    }
                }),
            ),
        ).catch((err) => {
            if (typeof err === 'string' && err.length < 128) {
                notifyError(err);
            } else {
                notifyError(
                    `Executing '${(this.fn() as unknown as { name: string }).name}' failed.\nView Error?`,
                    'View',
                    () => this.viewDetails(err),
                );
            }
            this.loading.set(false);
            throw err;
        });
        notifySuccess(
            'Command successful executed.\nView Response?',
            'View',
            () => this.viewDetails(result),
        );
        this.loading.set(false);
    }

    /** View Results of the execute */
    private async viewDetails(details: unknown) {
        this._dialog.open<ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: {
                    content:
                        details instanceof Response
                            ? await details.json()
                            : details,
                },
            },
        );
    }
}
