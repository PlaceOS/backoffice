import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    executeOnSystem,
    PlaceModuleFunction,
    PlaceSystem,
    TriggerFunction,
} from '@placeos/ts-client';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { notifyError, notifySuccess } from '../../../common/notifications';
import { ViewResponseModalComponent } from '../../../overlays/view-response-modal/view-response-modal.component';
import { ModuleLike } from './select-module.component';

@Component({
    selector: 'execute-method-field',
    template: `
        <div class="relative">
            <div [class.pointer-events-none]="loading">
                <select-system-module
                    [system]="system"
                    [(ngModel)]="module"
                    (ngModelChange)="fn = null"
                ></select-system-module>
                <select-module-method
                    *ngIf="module"
                    [system]="system"
                    [module]="module"
                    [(ngModel)]="fn"
                    (ngModelChange)="
                        fn?.order?.length === 0 ? postArguments({}) : ''
                    "
                ></select-module-method>
                <function-arguments
                    *ngIf="fn"
                    [method]="fn"
                    [ngModel]="arguments"
                    (ngModelChange)="postArguments($event)"
                ></function-arguments>
                <div
                    class="w-full flex items-center space-x-2 mt-2"
                    *ngIf="can_execute"
                >
                    <button class="inverse flex-1" mat-button (click)="clear()">
                        Clear Selection
                    </button>
                    <button
                        class="flex-1"
                        [disabled]="!fn"
                        mat-button
                        (click)="execute()"
                    >
                        Execute
                    </button>
                </div>
            </div>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80"
                *ngIf="loading"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>Executing method...</p>
            </div>
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
})
export class ExecuteMethodFieldComponent implements ControlValueAccessor {
    /** ID of the system to select the module from */
    @Input() public system: PlaceSystem;
    /** Whether component is allowed to execute methods on the system */
    @Input() public can_execute = true;

    public module: ModuleLike;
    public fn: PlaceModuleFunction;
    public arguments: HashMap;

    public loading = false;

    /** Form control on change handler */
    private _onChange: (_: TriggerFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: TriggerFunction) => void;

    constructor(private _dialog: MatDialog) {}

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: TriggerFunction): void {
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: TriggerFunction) {
        if (!value) return;
        const parts = value.mod.split('_');
        const index = parts.pop();
        this.module = { module: parts.join('_'), index: +index } as any;
        this.fn = { name: value.method } as any;
        const args = {};
        for (const key in value.args || {}) {
            let v = value.args[key];
            try {
                v = JSON.parse(value.args[key]);
            } catch (e) {}
            args[key] = JSON.stringify(v);
        }
        this.arguments = args;
    }

    public postArguments(arg_map: HashMap) {
        if (!this.fn?.params) return;
        const args = {};
        for (const key in arg_map) {
            args[key] = arg_map[key];
            try {
                args[key] = JSON.parse(arg_map[key]);
            } catch (e) {}
        }
        this.setValue({
            mod: `${this.module.module}_${this.module.index}`,
            method: (this.fn as any).name,
            args,
        });
        this.arguments = arg_map;
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange = (fn) => (this._onChange = fn);

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched = (fn) => (this._onTouch = fn);

    public clear() {
        this.module = null;
        this.fn = null;
        this.arguments = {};
    }

    public async execute() {
        this.loading = true;
        this.arguments = this.arguments || {};
        const result = await executeOnSystem(
            this.system.id,
            (this.fn as any).name,
            this.module.module,
            this.module.index,
            this.fn.order.map((key) => {
                const fn_details: any = this.fn.params[key];
                try {
                    return JSON.parse(this.arguments[key]);
                } catch {
                    return this.arguments[key] ?? fn_details?.default ?? null;
                }
            })
        )
            .toPromise()
            .catch((err) => {
                console.log('Error:', err);
                if (typeof err === 'string' && err.length < 128) {
                    notifyError(err);
                } else {
                    notifyError(
                        `Executing '${
                            (this.fn as any).name
                        }' failed.\nView Error?`,
                        'View',
                        () => this.viewDetails(err)
                    );
                }
                this.loading = false;
                throw err;
            });
        notifySuccess(
            'Command successful executed.\nView Response?',
            'View',
            () => this.viewDetails(result)
        );
        this.loading = false;
    }

    /** View Results of the execute */
    private async viewDetails(details: Response | HashMap) {
        this._dialog.open<ViewResponseModalComponent>(
            ViewResponseModalComponent,
            {
                data: {
                    content:
                        details instanceof Response
                            ? await details.json()
                            : details,
                },
            }
        );
    }
}
