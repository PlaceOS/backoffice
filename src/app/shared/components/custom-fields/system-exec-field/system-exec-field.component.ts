import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    ViewChildren,
    ElementRef,
    QueryList,
    SimpleChanges,
    forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
    EngineModule,
    EngineModuleFunction,
    HashMap,
    TriggerFunction,
    EngineSystem
} from '@acaengine/ts-client';

import { ApplicationService } from '../../../../services/app.service';
import { BaseDirective } from '../../../globals/base.directive';

interface EngineModuleLike {
    id: string;
    name: string;
    module: string;
    index: number;
}

interface ModuleFunction extends EngineModuleFunction {
    name?: string;
}

@Component({
    selector: 'system-exec-field',
    templateUrl: './system-exec-field.template.html',
    styleUrls: ['./system-exec-field.styles.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SystemExecFieldComponent),
            multi: true
        }
    ]
})
export class SystemExecFieldComponent extends BaseDirective
    implements OnChanges, ControlValueAccessor {
    /** ID of the system to execute command on */
    @Input() public system: EngineSystem;
    /** Whether the selected function is executable from this field */
    @Input() public executable = true;
    /** Emitter for exec results */
    @Output() public event = new EventEmitter();
    /** List of modules of the system */
    public devices: EngineModuleLike[];
    /** List of available functions for the active module  */
    public methods: ModuleFunction[];
    /** Currently selected module */
    public active_module: EngineModuleLike;
    /** Current selected module function */
    public active_method: ModuleFunction;
    /** Mapping or errors to field names */
    public error: HashMap<boolean> = {};
    /** Whether the selected function's params are valid */
    public fields_valid: boolean;
    /** Mapping of function arguments to values */
    public fields: HashMap = {};
    /** Index of the active function param field */
    public active_field: number;
    /** Current location with the input fields for function params */
    public field_pos: number;
    /** Previous location with the input fields for function params */
    public last_location: number;
    /** Current value of the active input field */
    public field_value: string;

    /** Form control on change handler */
    private _onChange: (_: TriggerFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: TriggerFunction) => void;

    /** List of elements containing arguments */
    @ViewChildren('argument') private arg_list: QueryList<ElementRef>;

    /** Mapping of function execution details */
    public get function_value(): TriggerFunction {
        if (!this.fields_valid) { return null; }
        const args = this.processArguments();
        const method = this.active_method ? this.active_method : { params: [], name: '' };
        return {
            mod: `${this.active_module.module}_${this.active_module.index}`,
            method: method.name,
            args: args.reduce((map, arg, index) => {
                map[method.params[index][1]] = arg;
                return map;
            }, {})
        };
    }

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system) {
            this.devices = [];
            this.loadModules();
        }
    }

    /**
     * Load the available modules for the active system
     * @param offset
     */
    public loadModules(offset: number = 0) {
        if (this.system) {
            this.service.Modules.query({ system_id: this.system.id, offset, limit: 500 }).then(
                list => {
                    this.devices = (list || []).map(device => {
                        const module_name =
                            device.custom_name ||
                            (device.driver ? device.driver.module_name : 'System');
                        return {
                            id: device.id,
                            name: device.name,
                            module: module_name,
                            index: 1
                        };
                    });
                    this.devices.sort(
                        (a, b) =>
                            this.system.modules.indexOf(a.id) - this.system.modules.indexOf(b.id)
                    );
                    this.devices.forEach(
                        device =>
                            (device.index =
                                this.devices
                                    .filter(d => d.module === device.module)
                                    .findIndex(mod => mod.id === device.id) + 1)
                    );
                },
                () => null
            );
        }
    }

    /**
     * Load the available functions for the given module
     * @param item
     */
    public loadFunctions(item: EngineModuleLike) {
        this.methods = null;
        this.fields = {};
        this.active_module = item;
        this.service.Systems.functionList(this.system.id, item.module, item.index).then(
            list => {
                if (list) {
                    this.methods = Object.keys(list).map(i => ({ name: i, ...list[i] }));
                }
            },
            () => null
        );
    }

    public selectFunction(fn: ModuleFunction) {
        this.active_method = fn;
        this.checkFields();
    }

    /**
     * Validate the arguments are valid JSON types
     */
    public checkFields() {
        // Check fields
        this.fields_valid = !!this.active_method;
        this.error = {};
        if (this.active_method) {
            for (const arg of this.active_method.params) {
                if (arg[0] === 'req' && !this.fields[arg[1]]) {
                    this.fields_valid = false;
                    return;
                } else {
                    try {
                        JSON.parse(`[${this.fields[arg[1]] || '""'}]`);
                    } catch (e) {
                        this.error[arg[1]] = true;
                        this.fields_valid = false;
                    }
                }
            }
        }
        // Update field state
        const args = this.arg_list.toArray();
        if (args && args.length > 0) {
            const current = args[this.active_field];
            this.field_pos = current.nativeElement.selectionEnd;
            this.timeout('field', () => (this.field_value = current.nativeElement.value));
        }
        this.setValue(this.function_value);
    }

    /**
     * Move cursor to the next argument field
     */
    public nextField(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.active_field].nativeElement;
            const other = e.key.toLowerCase() !== 'arrowright';
            const right_arrow =
                e.key.toLowerCase() === 'arrowright' &&
                this.last_location === (current.value || '').length;
            if ((other || right_arrow) && this.active_field < args.length - 1) {
                const el = args[this.active_field + 1].nativeElement;
                el.focus();
                el.selectionStart = el.selectionEnd = 0;
            }
            this.last_location = current.selectionEnd;
        }
    }

    public focused(index: number) {
        this.active_field = index;
        const args = this.arg_list.toArray();
        const current = args[this.active_field];
        this.field_pos = current.nativeElement.selectionEnd;
        this.last_location = (current.nativeElement.value || '').length;
    }

    /**
     * Move cursor to the previous argument field
     */
    public previousField(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.active_field];
            const backspace = e.key.toLowerCase() === 'backspace' && this.last_location === 0;
            const left_arrow = e.key.toLowerCase() === 'arrowleft' && this.last_location === 0;
            if (
                (backspace || left_arrow) &&
                current.nativeElement.selectionEnd === 0 &&
                this.active_field > 0
            ) {
                const el = args[this.active_field - 1].nativeElement;
                el.focus();
                el.selectionStart = el.selectionEnd = (el.value || '').length;
            }
            this.last_location = current.nativeElement.selectionEnd;
        }
    }

    /**
     * Execute the selected method
     */
    public execute() {
        if (!this.executable) return;
        this.checkFields();
        if (this.fields_valid) {
            // Check if any optional arguments have a value
            const args = this.processArguments();
            // Execute function
            const details = {
                method: this.active_method.name,
                module: this.active_module.module,
                index: this.active_module.index,
                args
            };
            this.service.Systems.execute(
                this.system.id,
                details.module,
                details.index,
                details.args
            ).then(
                result => {
                    this.service.notifySuccess(
                        'Command successful executed.\nView Response?',
                        'View',
                        () => {
                            console.log('View response:', result);
                        }
                    );
                },
                err => {
                    if (typeof err === 'string' && err.length < 64) {
                        this.service.notifyError(err);
                    } else {
                        this.service.notifyError(
                            `Executing '${this.active_method.name}' failed.\nView Error?`,
                            'View',
                            () => {
                                console.log('View error:', err);
                            }
                        );
                    }
                }
            );
        }
    }

    /**
     * Process the active list of argument values
     */
    private processArguments(): any[] {
        const arg_list = [];
        for (const arg of this.active_method.params) {
            arg_list.push(this.fields[arg[1]] || null);
        }
        if (this.active_method.arity < 0) {
            const len = arg_list.length;
            for (let i = len - 1; i >= Math.abs(this.active_method.arity) - 1; i--) {
                if (arg_list[i]) {
                    break;
                }
                arg_list.pop();
            }
        }
        // Format arguments
        let args = `[`;
        for (const arg of arg_list) {
            if (args !== '[') {
                args += ',';
            }
            args += `${arg}`;
        }
        args += ']';
        let argument_list = [];
        try {
            argument_list = JSON.parse(args);
        } catch (e) {}
        return argument_list;
    }

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
    public writeValue(value: TriggerFunction) {}

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: TriggerFunction) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: TriggerFunction) => void): void {
        this._onTouch = fn;
    }
}
