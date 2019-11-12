import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ViewChildren, ElementRef, QueryList, SimpleChanges } from '@angular/core';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { EngineModule, EngineModuleFunction, EngineModuleFunctionMap, HashMap } from '@acaprojects/ts-composer';

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
    selector: 'system-exec',
    templateUrl: './system-exec.template.html',
    styleUrls: ['./system-exec.styles.scss']
})
export class SystemExecComponent extends BaseDirective implements OnChanges {
    /** ID of the system to execute command on */
    @Input() public system_id: string;
    /** Emitter for exec results */
    @Output() public event = new EventEmitter();
    /** List of modules of the system */
    public devices: EngineModule[];
    /** List of module associations with the system */
    public modules: EngineModuleLike[];
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

    /** List of elements containing arguments */
    @ViewChildren('argument') private arg_list: QueryList<ElementRef>;

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system_id) {
            this.loadModules();
        }
    }

    /**
     * Load the available modules for the active system
     * @param offset
     */
    public loadModules(offset: number = 0) {
        if (this.system_id) {
            this.service.Modules.query({ system_id: this.system_id, offset }).then((list) => {
                this.devices = list || [];
                if (!offset) { this.modules = []; }
                for (const mod of this.devices) {
                    if (mod.driver) {
                        this.modules.push({
                            id: mod.id,
                            name: `${mod.driver.module_name} ${mod.role + 1}`,
                            module: mod.driver.module_name,
                            index: mod.role + 1
                        });
                    }
                }
            }, () => null);
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
        this.service.Systems.functionList(this.system_id, item.module, item.index).then((list) => {
            if (list) {
                this.methods = Object.keys(list).map(i => ({ name: i, ...list[i] }));
            }
        }, () => null);
    }

    public selectFunction(fn: any) {
        this.active_method = fn;
        this.checkFields();
    }

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
            this.timeout('field', () => this.field_value = current.nativeElement.value);
        }
    }

    public nextField(e) {
        if (e && e.preventDefault) { e.preventDefault(); }
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.active_field].nativeElement;
            const other = e.key.toLowerCase() !== 'arrowright';
            const right_arrow = e.key.toLowerCase() === 'arrowright' && this.last_location === (current.value || '').length;
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

    public previousField(e) {
        if (e && e.preventDefault) { e.preventDefault(); }
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.active_field];
            const backspace = e.key.toLowerCase() === 'backspace' && this.last_location === 0;
            const left_arrow = e.key.toLowerCase() === 'arrowleft' && this.last_location === 0;
            if ((backspace || left_arrow) && current.nativeElement.selectionEnd === 0 && this.active_field > 0) {
                const el = args[this.active_field - 1].nativeElement;
                el.focus();
                el.selectionStart = el.selectionEnd = (el.value || '').length;
            }
            this.last_location = current.nativeElement.selectionEnd;
        }
    }

    public execute() {
        this.checkFields();
        if (this.fields_valid) {
            // Check if any optional arguments have a value
            const arg_list = [];
            for (const arg of this.active_method.params) {
                arg_list.push(this.fields[arg[1]] || null);
            }
            if (this.active_method.arity < 0) {
                const len = arg_list.length;
                for (let i = len - 1; i >= Math.abs(this.active_method.arity) - 1; i--) {
                    if (arg_list[i]) { break; }
                    arg_list.pop();
                }
            }
                // Format arguments
            let args = `[`;
            for (const arg of arg_list) {
                if (args !== '[') { args += ','; }
                args += `${arg}`;
            }
            args += ']';
                // Execute function
            const details = {
                method: this.active_method.name,
                module: this.active_module.module,
                index: this.active_module.index,
                args: JSON.parse(args)
            };
            this.service.Systems.execute(this.system_id, details.module, details.index, details.args).then((result) => {
                this.service.notifySuccess('Command successful executed.<br>View Response?', 'View', () => {
                    // console.log('View response:', result);
                });
            }, (err) => {
                if (typeof err === 'string' && err.length < 64) {
                    this.service.notifyError(err);
                } else {
                    this.service.notifyError(`Executing '${this.active_method.name}' failed.<br>View Error?`, 'View', () => {
                        // console.log('View error:', err);
                    });
                }
            });

        }
    }
}
