import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'object-list-field',
    template: `
        <div class="object-list" *ngIf="fields && fields.length">
            <div
                class="header row text-sm h-6"
                *ngIf="active_list && active_list.length"
            >
                <div
                    class="field capitalize"
                    *ngFor="let field of fields"
                    [attr.name]="field"
                >
                    {{ field }}
                </div>
                <div class="w-10"></div>
            </div>
            <div class="row" *ngFor="let item of active_list">
                <div
                    class="field"
                    *ngFor="let field of fields"
                    [attr.name]="field"
                >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [name]="field"
                            [placeholder]="field"
                            i18n-placeholder
                            [(ngModel)]="item[field]"
                            (ngModelChange)="setValue(active_list)"
                        />
                    </mat-form-field>
                </div>
                <button btn icon class="!mt-2" (click)="removeRow(item)">
                    <app-icon [icon]="{ class: 'backoffice-trash' }"></app-icon>
                </button>
            </div>
            <div class="row h-10 text-center">
                <button btn type="button" class="w-full" (click)="addRow()">
                    <div class="contents">
                        <app-icon
                            [icon]="{ class: 'backoffice-plus' }"
                        ></app-icon>
                        <div class="text" i18n="@@newItem">New Item</div>
                    </div>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            :host,
            mat-form-field {
                width: 100%;
            }

            .row {
                display: flex;
                width: 100%;
                height: 3.5em;
            }

            .row > * {
                margin: 0 0.25em;
            }

            .row > *:first-child {
                margin-left: 0;
            }

            .row > *:last-child {
                margin-right: 0;
            }

            .header > * {
                padding: 0 0.5em;
            }

            .field {
                flex: 1;
                min-width: 1px;
            }

            button .contents {
                display: flex;
                align-items: center;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ObjectListFieldComponent),
            multi: true,
        },
    ],
})
export class ObjectListFieldComponent
    extends AsyncHandler
    implements ControlValueAccessor
{
    /** List of fields that can be populated for each object */
    @Input() public fields: string[];
    /** List of objects */
    public active_list: HashMap[] = [];

    /** Form control on change handler */
    private _onChange: (_: HashMap[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: HashMap[]) => void;

    /** Add a new item the the active list */
    public addRow() {
        if (!this.active_list) {
            this.active_list = [];
        }
        this.active_list.push({});
        this.setValue(this.active_list);
    }

    /**
     * Remove item from the active list
     * @param item Item to remove
     */
    public removeRow(item: HashMap) {
        const index = this.active_list.indexOf(item);
        if (index >= 0) {
            this.active_list.splice(index, 1);
        }
        this.setValue(this.active_list);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: HashMap[]): void {
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: HashMap[]) {
        this.active_list = value;
    }

    /**
     * Registers a callback function that is called when the
     * control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: HashMap[]) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms
     * API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: HashMap[]) => void): void {
        this._onTouch = fn;
    }
}
