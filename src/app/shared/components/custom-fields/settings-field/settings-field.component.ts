/// <reference path="../../../../../../node_modules/monaco-editor/monaco.d.ts" />

import {
    Component,
    forwardRef,
    ViewChild,
    ElementRef,
    OnInit,
    Input,
    OnDestroy,
    SimpleChanges,
    OnChanges
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';

// import * as monaco_yaml from 'monaco-editor/dev/vs/basic-languages/yaml/yaml.js';

@Component({
    selector: 'settings-form-field',
    templateUrl: './settings-field.component.html',
    styleUrls: ['./settings-field.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SettingsFieldComponent),
            multi: true
        }
    ]
})
export class SettingsFieldComponent extends BaseDirective
    implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    /** Whether form field is readonly */
    @Input() public readonly = true;
    /** Current value for the */
    public settings_string = ' ';
    /** Form control on change handler */
    private _onChange: (_: string) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string) => void;

    /** Reference to the element container the monaco editor */
    @ViewChild('editor', { static: true }) private element: ElementRef;
    /** API object for the monaco editor */
    private editor: any;

    public ngOnInit(): void {
        this.createEditor();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.readonly && this.editor) {
            this.editor.updateOptions({ readOnly: !!this.readonly });
        }
    }

    public ngOnDestroy() {
        if (this.editor) {
            this.editor.dispose();
            this.editor = null;
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        this.settings_string = new_value;
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.settings_string = `${value}`;
        if (this.editor) {
            if (this.readonly) {
                this.editor.updateOptions({ readOnly: false });
                this.editor.setValue(this.settings_string);
                this.editor.updateOptions({ readOnly: true });
            } else {
                this.editor.setValue(this.settings_string);
            }
        }
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: string) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: string) => void): void {
        this._onTouch = fn;
    }

    /**
     * Create and render the monaco editor to the component
     */
    private createEditor() {
        if (this.element && this.element.nativeElement) {
            // monaco.languages.register(monaco_yaml);
            this.editor = monaco.editor.create(this.element.nativeElement, {
                value: this.settings_string || '',
                language: 'yaml',
                fontFamily: `"Fira Code", monospace`,

                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: this.readonly,
                theme: 'vs-dark'
            });
            this.editor.onDidChangeModelContent(() => {
                this.setValue(this.editor.getValue());
            });
        }
    }
}
