import { Component, Input, Output, EventEmitter, OnInit, OnChanges, ViewChildren, ElementRef, QueryList } from '@angular/core';

import { AppService } from '../../../services/app.service';
import { BaseComponent } from '../base.component';

@Component({
    selector: 'system-exec',
    templateUrl: './system-exec.template.html',
    styleUrls: ['./system-exec.styles.scss']
})
export class SystemExecComponent extends BaseComponent implements OnInit, OnChanges {
    @Input() public system_id: string;
    @Output() public event = new EventEmitter();

    public model: any = {};

    @ViewChildren('argument') private arg_list: QueryList<ElementRef>;

    constructor(private service: AppService) {
        super();
    }

    public ngOnInit() {

    }

    public ngOnChanges(changes: any) {
        if (changes.system_id) {
            this.loadModules();
        }
    }

    public loadModules(offset: number = 0) {
        if (this.system_id) {
            this.service.Modules.query({ sys_id: this.system_id, offset }).then((list) => {
                this.model.devices = list;
                if (!offset) { this.model.modules = []; }
                for (const mod of this.model.devices) {
                    this.model.modules.push({
                        name: `${mod.dependency.module_name} ${mod.role + 1}`,
                        module: mod.dependency.module_name,
                        index: mod.role + 1
                    });
                }
            }, () => null);
        }
    }

    public loadFunctions(item) {
        this.model.fn = null;
        this.model.active_module = item;
        this.model.exec_index = -1;
        this.service.Systems.funcs(this.system_id, { index: item.index, module: item.module }).then((list) => {
            this.model.fn_list = list || {};
            this.model.fn_names = Object.keys(this.model.fn_list);
        }, () => null);
    }

    public selectFunction(fn: any, name?: string) {
        fn.name = name;
        this.model.fields = {};
        this.model.fn = fn;
        this.checkFields();
    }

    public checkFields() {
        // Check fields
        this.model.fields_valid = !!this.model.fn;
        this.model.error = {};
        if (this.model.fn) {
            for (const arg of this.model.fn.args) {
                if (arg[0] === 'req' && !this.model.fields[arg[1]]) {
                    this.model.fields_valid = false;
                    return;
                } else {
                    try {
                        JSON.parse(`[${this.model.fields[arg[1]] || '""'}]`);
                    } catch (e) {
                        this.model.error[arg[1]] = true;
                        this.model.fields_valid = false;
                    }
                }
            }
        }
        // Update field state
        const args = this.arg_list.toArray();
        if (args && args.length > 0) {
            const current = args[this.model.active_field];
            this.model.field_pos = current.nativeElement.selectionEnd;
            this.timeout('field', () => this.model.field_value = current.nativeElement.value);
        }
    }

    public nextField(e) {
        if (e && e.preventDefault) { e.preventDefault(); }
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.model.active_field].nativeElement;
            const other = e.key.toLowerCase() !== 'arrowright';
            const right_arrow = e.key.toLowerCase() === 'arrowright' && this.model.last_location === (current.value || '').length;
            if ((other || right_arrow) && this.model.active_field < args.length - 1) {
                const el = args[this.model.active_field + 1].nativeElement;
                el.focus();
                el.selectionStart = el.selectionEnd = 0;
            }
            this.model.last_location = current.selectionEnd;
        }
    }

    public focused(index: number) {
        this.model.active_field = index;
        const args = this.arg_list.toArray();
        const current = args[this.model.active_field];
        this.model.field_pos = current.nativeElement.selectionEnd;
        this.model.last_location = (current.nativeElement.value || '').length;
    }

    public previousField(e) {
        if (e && e.preventDefault) { e.preventDefault(); }
        if (this.arg_list) {
            const args = this.arg_list.toArray();
            const current = args[this.model.active_field];
            const backspace = e.key.toLowerCase() === 'backspace' && this.model.last_location === 0;
            const left_arrow = e.key.toLowerCase() === 'arrowleft' && this.model.last_location === 0;
            if ((backspace || left_arrow) && current.nativeElement.selectionEnd === 0 && this.model.active_field > 0) {
                const el = args[this.model.active_field - 1].nativeElement;
                el.focus();
                el.selectionStart = el.selectionEnd = (el.value || '').length;
            }
            this.model.last_location = current.nativeElement.selectionEnd;
        }
    }

    public execute() {
        this.checkFields();
        if (this.model.fields_valid) {
            // Check if any optional arguments have a value
            const arg_list = [];
            for (const arg of this.model.fn.args) {
                arg_list.push(this.model.fields[arg[1]] || null);
            }
            if (this.model.fn.arity < 0) {
                const len = arg_list.length;
                for (let i = len - 1; i >= Math.abs(this.model.fn.arity) - 1; i--) {
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
                method: this.model.fn.name,
                module: this.model.active_module.module,
                index: this.model.active_module.index,
                args: JSON.parse(args)
            };
            this.service.Systems.execute(this.system_id, details).then((result) => {
                this.service.success('Command successful executed.<br>View Response?', 'View', () => {
                    console.log('View response:', result);
                });
            }, (err) => {
                if (typeof err === 'string' && err.length < 64) {
                    this.service.error(err);
                } else {
                    this.service.error(`Executing '${this.model.fn.name}' failed.<br>View Error?`, 'View', () => {
                        console.log('View error:', err);
                    });
                }
            });

        }
    }
}
