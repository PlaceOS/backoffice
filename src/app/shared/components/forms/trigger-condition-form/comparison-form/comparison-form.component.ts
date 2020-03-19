import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    EngineModule,
    EngineSystem,
    TriggerConditionOperator,
    TriggerStatusVariable
} from '@placeos/ts-client';

import { Identity } from 'src/app/shared/utilities/types.utilities';
import { calculateModuleIndex } from 'src/app/shared/utilities/api.utilities';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'trigger-condition-comparison-form',
    templateUrl: './comparison-form.component.html',
    styleUrls: ['./comparison-form.component.scss']
})
export class TriggerConditionComparisonFormComponent implements OnInit, OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Systems used for templating the status variables */
    @Input() public system: EngineSystem;
    /** List of modules associated with the template system */
    public modules: EngineModule[] = [];
    /** List of status variables associated with the selected module */
    public module_list: Identity[] = [];
    /** List of status variables associated with the selected module */
    public left_status_variables: Identity[] = [];
    /** List of status variables associated with the selected module */
    public right_status_variables: Identity[] = [];
    /** Type of value to compare the left hand side to */
    public rhs_type: 'constant' | 'status_var' = 'constant';
    /** Type of value to compare the left hand side to */
    public rhs_value: string;
    /** Status variable details for the left side of the comparison */
    public left_side: TriggerStatusVariable = { mod: '', status: '', keys: [] };
    /** Status variable details for the right side of the comparison */
    public right_side: TriggerStatusVariable = { mod: '', status: '', keys: [] };

    /** Types of trigger conditions */
    public right_var_type: Identity[] = [
        { id: 'constant', name: 'Constant Value' },
        { id: 'status_var', name: 'Status Variable' }
    ];

    /** Allowed comparison operators */
    public compare_types: Identity[] = [
        { id: TriggerConditionOperator.EQ, name: 'equal to' },
        { id: TriggerConditionOperator.NEQ, name: 'not equal to' },
        { id: TriggerConditionOperator.GT, name: 'greater than' },
        { id: TriggerConditionOperator.GTE, name: 'greater than or equal' },
        { id: TriggerConditionOperator.LT, name: 'less than' },
        { id: TriggerConditionOperator.LTE, name: 'less than or equal' },
        { id: TriggerConditionOperator.AND, name: 'truthy AND' },
        { id: TriggerConditionOperator.OR, name: 'truthy OR' },
        { id: TriggerConditionOperator.XOR, name: 'truthy XOR' }
    ];

    public get left_keys(): string {
        return this.left_side.keys.join(',');
    }
    public get right_keys(): string {
        return this.right_side.keys.join(',');
    }

    constructor(private _service: ApplicationService) {}

    public ngOnInit(): void {}

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system && this.system) {
            this.loadSystemModules();
        }
    }

    public updateFormForSide(side: 'left' | 'right') {
        if (this.form.controls[side]) {
            this.form.controls[side].setValue(this[side + '_side']);
        }
    }

    /**
     * Load the list of status variables for the given modules
     * @param module Module to list status variables
     */
    public loadSystemStatusVariables(mod_name: string, side: 'left' | 'right') {
        const name = mod_name.split('_');
        this._service.Systems.state(this.system.id, name[0], +name[1]).then(
            var_map => {
                if (Object.keys(var_map).length <= 0) {
                    var_map.connected = true;
                }
                this[`${side}_status_variables`] = Object.keys(var_map).map(key => ({
                    id: key,
                    name: key
                }));
                this.addExistingStatusVariables();
            },
            () =>
                this._service.notifyError(
                    `Error loading the status variables for ${this.system.id}, ${mod_name}`
                )
        );
    }

    /**
     * Load the list of modules for the active system
     */
    private loadSystemModules() {
        if (!this.system) {
            return;
        }
        this._service.Modules.query({ control_system_id: this.system.id }).then(module_list => {
            this.modules = module_list;
            const mod_list = this.system.modules;
            this.modules.sort((a, b) => mod_list.indexOf(a.id) - mod_list.indexOf(b.id));
            this.module_list = this.modules.map(mod => {
                const module_class =
                    mod.custom_name || (mod.driver ? mod.driver.class_name : 'System');
                const index = calculateModuleIndex(this.modules, mod);
                return {
                    id: mod.id,
                    name: `${module_class}_${index}`
                };
            });
            this.addExistingModules();
        });
    }

    /**
     * Add pre-exisiting module detail to the available list
     */
    private addExistingModules() {
        if (this.form.controls.left && this.form.controls.left.value) {
            const module = this.form.controls.left.value.mod;
            if (!this.module_list.find(mod => mod.name === module)) {
                this.module_list.unshift({ id: 'old_left_value', name: module });
            }
            this.loadSystemStatusVariables(module, 'left');
            this.left_side = this.form.controls.left.value;
        }
        if (
            this.form.controls.right &&
            this.form.controls.right.value &&
            this.form.controls.right.value.mod
        ) {
            this.rhs_type = 'status_var';
            const module = this.form.controls.right.value.mod;
            if (!this.module_list.find(mod => mod.name === module)) {
                this.module_list.unshift({ id: 'old_right_value', name: module });
            }
            this.loadSystemStatusVariables(module, 'right');
            this.right_side = this.form.controls.right_side.value;
        }
    }

    /**
     * Add pre-exisiting status variables to the available list
     */
    private addExistingStatusVariables() {
        if (this.left_side.status) {
            if (!this.left_status_variables.find(status => status.name === this.left_side.status)) {
                this.left_status_variables.unshift({
                    id: this.left_side.status,
                    name: this.left_side.status
                });
            }
        }
        if (this.right_side.status) {
            if (
                !this.right_status_variables.find(status => status.name === this.right_side.status)
            ) {
                this.right_status_variables.unshift({
                    id: this.right_side.status,
                    name: this.right_side.status
                });
            }
        }
    }
}
