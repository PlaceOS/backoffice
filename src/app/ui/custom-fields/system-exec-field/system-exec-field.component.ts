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
    forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceModuleFunction,
    TriggerFunction,
    PlaceSystem,
    functionList,
    executeOnSystem,
    queryModules,
} from '@placeos/ts-client';
import { map } from 'rxjs/operators';

import { ViewResponseModalComponent } from 'src/app/overlays/view-response-modal/view-response-modal.component';
import { HashMap } from 'src/app/common/types';
import { validateJSONString } from 'src/app/common/validation';
import { BaseClass } from 'src/app/common/base.class';
import { notifyError, notifySuccess, notifyInfo } from 'src/app/common/notifications';

interface PlaceModuleLike {
    id: string;
    name: string;
    module: string;
    index: number;
}

interface ModuleFunction extends PlaceModuleFunction {
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
            multi: true,
        },
    ],
})
export class SystemExecFieldComponent extends BaseClass
    implements OnChanges, ControlValueAccessor {
    /** ID of the system to execute command on */
    @Input() public system: PlaceSystem;
    /** Whether the selected function is executable from this field */
    @Input() public executable = true;
    /** Toggle for activating a refresh of the module list */
    @Input() public refresh: boolean;
    /** Emitter for exec results */
    @Output() public event = new EventEmitter();
    /** List of modules of the system */
    public devices: PlaceModuleLike[] = [];
    /** List of available functions for the active module  */
    public methods: ModuleFunction[] = [];
    /** Currently selected module */
    public active_module: PlaceModuleLike;
    /** Current selected module function */
    public active_method: any;
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
    /** Parameter list for the active function */
    public param_list: [string, string, any?][] = [];

    /** Form control on change handler */
    private _onChange: (_: TriggerFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: TriggerFunction) => void;

    /** List of elements containing arguments */
    @ViewChildren('argument') private arg_list: QueryList<ElementRef>;

    /** Mapping of function execution details */
    public get function_value(): TriggerFunction {
        if (!this.fields_valid) {
            return null;
        }
        const args = this.processArguments();
        const method: any = this.active_method
            ? this.active_method
            : { order: [], params: {}, name: '' };
        return {
            mod: `${this.active_module.module}_${this.active_module.index}`,
            method: method.name,
            args: args.reduce((map, arg, index) => {
                map[method.order[index]] = arg;
                return map;
            }, {}),
        };
    }

    public get placeholder(): HashMap<string> {
        const map = {};
        for (const arg of this.param_list) {
            map[arg[0]] =
                arg[2] !== undefined ? '[' + arg[0] + (arg[2] ? '=' + arg[2] : '') + ']' : arg[0];
        }
        return map;
    }

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system || changes.refresh) {
            this.devices = [];
            this.loadModules();
        }
    }

    /**
     * Load the available modules for the active system
     * @param offset Page offset of the list
     */
    public loadModules(offset: number = 0) {
        if (this.system) {
            this.timeout('load_modules', () => {
                queryModules({
                    control_system_id: this.system.id,
                    offset,
                    limit: 500,
                    complete: true,
                } as any).pipe(map(resp => resp.data)).subscribe(
                    (list) => {
                        this.devices = (list || [])
                            .filter((device) => device.running)
                            .map((device) => {
                                const module_name = device.custom_name || device.name;
                                return {
                                    id: device.id,
                                    name: device.name,
                                    module: module_name,
                                    index: 1,
                                };
                            });
                        this.devices.sort(
                            (a, b) =>
                                this.system.modules.indexOf(a.id) -
                                this.system.modules.indexOf(b.id)
                        );
                        this.devices.forEach(
                            (device) =>
                                (device.index =
                                    this.devices
                                        .filter((d) => d.module === device.module)
                                        .findIndex((mod) => mod.id === device.id) + 1)
                        );
                        if (
                            this.active_module &&
                            !(this.devices || []).find((mod) => mod.id === this.active_module.id)
                        ) {
                            this.devices.unshift(this.active_module);
                        }
                    },
                    () => null
                );
            });
        }
    }

    /**
     * Load the available functions for the given module
     * @param item Module to grab function list for
     */
    public loadFunctions(item: PlaceModuleLike) {
        this.methods = null;
        this.fields = {};
        this.active_module = item;
        functionList(this.system.id, item.module, item.index).subscribe(
            (list) => {
                if (list) {
                    this.methods = Object.keys(list).map((i) => ({ name: i, ...list[i] }));
                    this.setMethod(this.active_method?.name, this.fields);
                }
            },
            () => {
                notifyInfo('No executable methods returned.');
            }
        );
    }

    public selectFunction(fn: ModuleFunction) {
        this.active_method = fn;
        if (fn) {
            this.param_list = Object.keys(this.active_method.params).map(
                (i) => [i, ...this.active_method.params[i]] as any
            );
        }
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
            const params = this.param_list;
            for (const arg of params || []) {
                if (arg[2] === undefined && !this.fields[arg[0]]) {
                    this.fields_valid = false;
                    return;
                } else {
                    try {
                        JSON.parse(`[${this.fields[arg[0]] || 'null'}]`);
                    } catch (e) {
                        this.error[arg[0]] = true;
                        this.fields_valid = false;
                    }
                }
            }
        }
        // Update field state
        const args = this.arg_list.toArray();
        if (args && args.length > 0) {
            const current = args[this.active_field];
            if (current) {
                this.field_pos = current.nativeElement.selectionEnd;
                this.timeout('field', () => (this.field_value = current.nativeElement.value));
            }
        }
        this.setValue(this.function_value);
    }

    /**
     * Move cursor to the next argument field
     */
    public nextField(e) {
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.active_field].nativeElement;
            const available =
                e.key.toLowerCase() !== 'arrowright' ||
                (e.key.toLowerCase() !== 'arrowright' &&
                    !validateJSONString({ value: current.value } as any));
            const next = this.last_location === (current.value || '').length;
            if (available && next && this.active_field < args.length - 1) {
                const el = args[this.active_field + 1].nativeElement;
                el.focus();
                el.selectionStart = el.selectionEnd = 0;
                if (e && e.preventDefault) {
                    e.preventDefault();
                }
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
        if (!this.executable) {
            return;
        }
        this.checkFields();
        if (this.fields_valid) {
            // Check if any optional arguments have a value
            const args = this.processArguments();
            // Execute function
            const details = {
                method: this.active_method.name,
                module: this.active_module.module,
                index: this.active_module.index,
                args,
            };
            executeOnSystem(
                this.system.id,
                details.method,
                details.module,
                details.index,
                details.args
            ).subscribe(
                (result) => {
                    notifySuccess(
                        'Command successful executed.\nView Response?',
                        'View',
                        () => this.viewDetails(result)
                    );
                },
                (err) => {
                    console.log('Error:', err);
                    if (typeof err === 'string' && err.length < 128) {
                        notifyError(err);
                    } else {
                        notifyError(
                            `Executing '${this.active_method.name}' failed.\nView Error?`,
                            'View',
                            () => this.viewDetails(err)
                        );
                    }
                }
            );
        } else {
            notifyError('One or more fields are invalid.');
        }
    }

    /**
     * Process the active list of argument values
     */
    private processArguments(): any[] {
        const arg_list = [];
        for (const arg of this.active_method.order) {
            arg_list.push(this.fields[arg] || null);
        }
        const len = arg_list.length;
        for (let i = len - 1; i >= 0; i--) {
            if (arg_list[i] || this.active_method.params[this.active_method.order[i]].length < 2) {
                break;
            }
            arg_list.pop();
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
        } catch (e) {
            console.error(e);
        }
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
    public writeValue(value: TriggerFunction) {
        if (value) {
            if (value.mod) {
                const parts = value.mod.split('_');
                this.active_module = {
                    id: value.mod,
                    name: value.mod,
                    module: parts[0],
                    index: +parts[1],
                };
                if (!(this.devices || []).find((mod) => mod.id === this.active_module.id)) {
                    this.devices.unshift(this.active_module);
                }
            }
            this.setMethod(value.method, value.args);
            if (value.args) {
                this.fields = value.args;
            }
        }
    }

    private setMethod(name: string, args: HashMap = {}) {
        if (name) {
            const method = (this.methods || []).find((a_method) => a_method.name === name);
            if (!method) {
                this.active_method = {
                    name,
                    arity: Object.keys(args).length - 1,
                    params: Object.keys(args).map((key) => ['req', key]) as any,
                    order: Object.keys(args),
                };
                this.methods.unshift(this.active_method);
            } else {
                this.active_method = method;
            }
        }
    }

    /** View Results of the execute */
    private async viewDetails(details: Response | HashMap) {
        this._dialog.open<ViewResponseModalComponent>(ViewResponseModalComponent, {
            data: { content: details instanceof Response ? await details.json() : details },
        });
    }

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