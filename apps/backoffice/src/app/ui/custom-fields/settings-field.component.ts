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
    OnChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { AsyncHandler } from '../../common/base.class';
import { HashMap } from '../../common/types';
import { BackofficeUsersService } from '../../users/users.service';

let MODEL: HashMap<monaco.editor.ITextModel> = {};

@Component({
    selector: 'settings-form-field,[settings-field]',
    template: `
        <div
            class="relative w-full h-[32rem] border border-gray-300"
            editor
            (window:resize)="resizeEditor()"
            #editor
        ></div>
    `,
    styles: [
        `
            [editor],
            [editor] * {
                user-select: initial;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SettingsFieldComponent),
            multi: true,
        },
    ],
})
export class SettingsFieldComponent
    extends AsyncHandler
    implements OnInit, OnChanges, OnDestroy, ControlValueAccessor
{
    /** Whether form field is readonly */
    @Input() public readonly = true;
    /** Resize */
    @Input() public resize: boolean;
    /** List of decorations to apply to the editor */
    @Input() public decorations: HashMap[];
    /** Input language for syntax highlighting and error checking */
    @Input() public lang = 'yaml';
    /** Schema for input validation and key auto-completion */
    @Input() public schema: string | HashMap;
    /** Current value for the */
    public settings_string = ' ';
    /** Form control on change handler */
    private _onChange: (_: string) => void;
    /** Form control on touch handler */
    private _onTouch: (_: string) => void;

    private _active_decorators: string[] = [];

    /** Reference to the element container the monaco editor */
    @ViewChild('editor', { static: true }) private element: ElementRef;
    /** API object for the monaco editor */
    private editor: any;

    constructor(private _users: BackofficeUsersService) {
        super();
        if (!MODEL) {
            MODEL = {
                json: monaco.editor.createModel(
                    '',
                    'json',
                    monaco.Uri.parse(`http://backoffice/schema.json`)
                ),
                yaml: monaco.editor.createModel(
                    '',
                    'yaml',
                    monaco.Uri.parse(`http://backoffice/schema.yaml`)
                ),
            };
        }
    }

    public ngOnInit(): void {
        this.timeout('resize', () => this.createEditor(), 100);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.readonly && this.editor) {
            this.editor.updateOptions({ readOnly: !!this.readonly });
        }
        if (changes.lang && this.editor) {
            this.editor.updateOptions({ language: this.lang || 'yaml' });
        }
        if (changes.resize) {
            this.resizeEditor();
        }
        if (changes.schema && this.schema) {
            this.setSchema(this.schema);
        }
        if (changes.decorations && this.editor) {
            this._active_decorators = this.editor.deltaDecorations(
                this._active_decorators,
                (this.decorations || []).map((i) => ({ ...i }))
            );
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
        if (this.settings_string !== new_value) {
            this.settings_string = new_value;
            if (this._onChange) {
                this._onChange(new_value);
            }
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: string) {
        this.settings_string = `${value}`;
        if (this.editor) {
            this.editor.getModel().detectIndentation(true, 4);
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

    /** Update sizing of the editor after window has resized */
    public resizeEditor() {
        this.timeout('resize', () => this.createEditor(), 100);
    }

    /**
     * Create and render the monaco editor to the component
     */
    private createEditor() {
        if (this.element && this.element.nativeElement) {
            if (this.editor) {
                this.editor.dispose();
                this.editor = null;
            }
            // monaco.languages.register(monaco_yaml);
            this.editor = monaco.editor.create(this.element.nativeElement, {
                value: this.settings_string || '',
                language: this.lang || 'yaml',
                model: MODEL[this.lang || 'yaml'],
                fontFamily: `"Fira Code", monospace`,
                lineNumbers: 'on',
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: this.readonly,
                theme: !this._users.dark_mode ? 'vs' : 'vs-dark',
            });
            this.editor.onDidChangeModelContent((e) => {
                this.setValue(this.editor.getValue());
                if (e.changes[0]?.text === '""') {
                    this.editor.trigger(
                        'Show Autocomplete',
                        'editor.action.triggerSuggest',
                        {}
                    );
                }
            });
            this.timeout(
                'decorations',
                () => {
                    this._active_decorators = this.editor.deltaDecorations(
                        this._active_decorators,
                        (this.decorations || []).map((i) => ({ ...i }))
                    );
                },
                50
            );
        }
    }

    private setSchema(schema: string | HashMap) {
        if (!this.editor) return;
        if (typeof schema !== 'string') {
            // load from source
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                enableSchemaRequest: true,
                validate: true,
                schemas: [
                    {
                        uri: 'http://backoffice/schema/base.json',
                        fileMatch: ['http://backoffice/schema'],
                        schema,
                    },
                ],
            });
        } else {
            // load from server e.g. http://localhost:8000/schema.json
            monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
                enableSchemaRequest: true,
                validate: true,
                schemas: [
                    {
                        uri: schema,
                        fileMatch: ['http://backoffice/schema'],
                    },
                ],
            });
        }
    }
}
