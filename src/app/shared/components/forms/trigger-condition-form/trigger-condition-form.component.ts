import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EngineSystem, EngineModule, ConditionOperator, TriggerStatusVariable } from '@acaprojects/ts-composer';

import { ApplicationService } from 'src/app/services/app.service';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { calculateModuleIndex } from 'src/app/shared/utilities/api.utilities';

@Component({
    selector: 'trigger-condition-form',
    templateUrl: './trigger-condition-form.component.html',
    styleUrls: ['./trigger-condition-form.component.scss']
})
export class TriggerConditionFormComponent extends BaseDirective implements OnChanges {
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

    /** Types of trigger conditions */
    public condition_types: Identity[] = [
        { id: 'compare', name: 'Compare values' },
        { id: 'time', name: 'Particular time' }
    ];

    /** Types of trigger conditions */
    public right_var_type: Identity[] = [
        { id: 'constant', name: 'Constant Value' },
        { id: 'status_var', name: 'Status Variable' }
    ];

    /** Allowed comparison operators */
    public compare_types: Identity[] = [
        { id: ConditionOperator.EQ, name: 'equal to' },
        { id: ConditionOperator.NEQ, name: 'not equal to' },
        { id: ConditionOperator.GT, name: 'greater than' },
        { id: ConditionOperator.GTE, name: 'greater than or equal' },
        { id: ConditionOperator.LT, name: 'less than' },
        { id: ConditionOperator.LTE, name: 'less than or equal' },
        { id: ConditionOperator.AND, name: 'truthy AND' },
        { id: ConditionOperator.OR, name: 'truthy OR' },
        { id: ConditionOperator.XOR, name: 'truthy XOR' }
    ];
    /** Type of value to compare the left hand side to */
    public rhs_type: 'constant' | 'status_var' = 'constant';
    /** Type of value to compare the left hand side to */
    public rhs_value: string;
    /** Status variable details for the left side of the comparison */
    public left_side: TriggerStatusVariable = { mod: '', status: '', keys: [] };
    /** Status variable details for the right side of the comparison */
    public right_side: TriggerStatusVariable = { mod: '', status: '', keys: [] };

    public get left_keys(): string {
        return this.left_side.keys.join(',');
    }
    public get right_keys(): string {
        return this.right_side.keys.join(',');
    }

    constructor(private _service: ApplicationService) {
        super();
    }

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
        const mod_id = this.module_list.find(mod => mod.name === mod_name).id;
        const module = this.modules.find(mod => mod.id === mod_id);
        if (!module) {
            return;
        }
        const module_class = module.custom_name || (module.driver ? module.driver.class_name : 'System');
        const index = calculateModuleIndex(this.modules, module);
        this._service.Systems.state(this.system.id, module_class, index).then(
            var_map => {
                if (Object.keys(var_map).length <= 0) {
                    var_map.connected = true;
                }
                this[`${side}_status_variables`] = Object.keys(var_map).map(key => ({
                    id: key,
                    name: key
                }));
                console.log('Var Map:', var_map);
                console.log('Status Vars:', this[`${side}_status_variables`]);
            },
            () =>
                this._service.notifyError(
                    `Error loading the status variables for ${this.system.id}, ${module_class}_${index}`
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
        this._service.Modules.query({ system_id: this.system.id }).then(module_list => {
            this.modules = module_list;
            const mod_list = this.system.modules;
            this.modules.sort((a, b) => mod_list.indexOf(a.id) - mod_list.indexOf(b.id));
            this.module_list = this.modules.map(mod => {
                const module_class = mod.custom_name || (mod.driver ? mod.driver.class_name : 'System');
                const index = calculateModuleIndex(this.modules, mod);
                return {
                    id: mod.id,
                    name: `${module_class}_${index}`
                };
            });
            console.log('Modules:', this.modules, this.module_list);
        });
    }
}
