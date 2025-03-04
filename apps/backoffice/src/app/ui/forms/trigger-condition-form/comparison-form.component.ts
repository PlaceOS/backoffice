import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
    PlaceModule,
    PlaceSystem,
    TriggerConditionOperator,
    TriggerStatusVariable,
    queryModules,
    systemModuleState,
} from '@placeos/ts-client';

import { calculateModuleIndex } from 'apps/backoffice/src/app/common/api';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { map } from 'rxjs/operators';
import { i18n } from '../../../common/translate';

@Component({
    selector: 'trigger-condition-comparison-form',
    template: `<div
            class="trigger-condition form comparison"
            *ngIf="form"
            [formGroup]="form"
        >
            <ng-container
                *ngTemplateOutlet="
                    status_variable_form;
                    context: { side: 'left' }
                "
            ></ng-container>
            <div
                *ngIf="form.controls.left.touched && form.controls.left.errors"
                class="error"
            >
                {{ 'TRIGGERS.COMPARE_VARIABLE_ERROR' | translate }}
            </div>
            <div class="field" *ngIf="form.controls.operator">
                <label for="operator" hidden>{{
                    'TRIGGERS.COMPARE_OP' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="operator"
                        formControlName="operator"
                        [placeholder]="'TRIGGERS.COMPARE_OP_SELECT' | translate"
                    >
                        <mat-option
                            *ngFor="let operation of compare_types"
                            [value]="operation.id"
                        >
                            {{ operation.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.operator">
                <label for="compared-to" hidden>{{
                    'TRIGGERS.COMPARE_TO' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="compared-to"
                        [(ngModel)]="rhs_type"
                        (ngModelChange)="form.controls.right.setValue(null)"
                        [ngModelOptions]="{ standalone: true }"
                    >
                        <mat-option
                            *ngFor="let type of right_var_type"
                            [value]="type.id"
                        >
                            {{ type.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <div
                class="field"
                *ngIf="
                    rhs_type === 'constant' && form.controls.right;
                    else rhs_status_var
                "
            >
                <label for="constant" hidden>{{
                    'TRIGGERS.COMPARE_TO' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="constant"
                        formControlName="right"
                        placeholder="true/false, 'string', 123.456"
                    />
                    <mat-error>{{
                        'TRIGGERS.COMPARE_JSON_REQUIRED' | translate
                    }}</mat-error>
                </mat-form-field>
            </div>
        </div>
        <ng-template #rhs_status_var>
            <ng-container
                *ngTemplateOutlet="
                    status_variable_form;
                    context: { side: 'right' }
                "
            ></ng-container>
        </ng-template>
        <ng-template #status_variable_form let-side="side">
            <div class="fieldset">
                <div class="field" *ngIf="this[side + '_side']">
                    <label for="type">{{
                        'MODULES.SINGULAR' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="type"
                            [(ngModel)]="this[side + '_side'].mod"
                            (ngModelChange)="
                                loadSystemStatusVariables($event, side)
                            "
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="
                                'TRIGGERS.COMPARE_MODULE_SELECT' | translate
                            "
                        >
                            <mat-option
                                *ngFor="let mod of module_list"
                                [value]="mod.name"
                            >
                                {{ mod.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div
                    class="field"
                    *ngIf="this[side + '_status_variables']?.length"
                >
                    <label [for]="side + '-status-var'">{{
                        'TRIGGERS.COMPARE_VARIABLE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [name]="side + '-status-var'"
                            [(ngModel)]="this[side + '_side'].status"
                            (ngModelChange)="updateFormForSide(side)"
                            [ngModelOptions]="{ standalone: true }"
                            [placeholder]="
                                'TRIGGERS.COMPARE_VARIABLE_SELECT' | translate
                            "
                        >
                            <mat-option
                                *ngFor="
                                    let mod of this[side + '_status_variables']
                                "
                                [value]="mod.name"
                            >
                                {{ mod.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div
                class="field"
                *ngIf="
                    this[side + '_status_variables'] &&
                    this[side + '_status_variables'].length
                "
            >
                <label [for]="side + '-subkeys'">{{
                    'TRIGGERS.COMPARE_SUBKEYS' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        [ngModel]="this[side + '_keys']"
                        (ngModelChange)="
                            this[side + '_side'].keys = $event.split(',');
                            updateFormForSide(side)
                        "
                        [name]="side + '-subkeys'"
                        [placeholder]="
                            'TRIGGERS.COMPARE_SUBKEYS_PLACEHOLDER' | translate
                        "
                    />
                </mat-form-field>
            </div>
        </ng-template> `,
    styles: [``],
})
export class TriggerConditionComparisonFormComponent
    implements OnChanges, OnInit
{
    /** Group of form fields used for creating the system */
    @Input() public form: UntypedFormGroup;
    /** Systems used for templating the status variables */
    @Input() public system: PlaceSystem;
    /** List of modules associated with the template system */
    public modules: PlaceModule[] = [];
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
    public right_side: TriggerStatusVariable = {
        mod: '',
        status: '',
        keys: [],
    };

    /** Types of trigger conditions */
    public right_var_type: Identity[] = [];

    /** Allowed comparison operators */
    public compare_types: Identity[] = [];

    public get left_keys(): string {
        return this.left_side?.keys?.join(',') || '';
    }
    public get right_keys(): string {
        return this.right_side?.keys?.join(',') || '';
    }

    public ngOnInit() {
        this.right_var_type = [
            { id: 'constant', name: i18n('TRIGGERS.COMPARE_CONSTANT') },
            { id: 'status_var', name: i18n('TRIGGERS.COMPARE_VARIABLE') },
        ];
        this.compare_types = [
            {
                id: TriggerConditionOperator.EQ,
                name: i18n('TRIGGERS.COMPARE_OP_EQUAL'),
            },
            {
                id: TriggerConditionOperator.NEQ,
                name: i18n('TRIGGERS.COMPARE_OP_NOT_EQUAL'),
            },
            {
                id: TriggerConditionOperator.GT,
                name: i18n('TRIGGERS.COMPARE_OP_GREATER'),
            },
            {
                id: TriggerConditionOperator.GTE,
                name: i18n('TRIGGERS.COMPARE_OP_GREATER_EQUAL'),
            },
            {
                id: TriggerConditionOperator.LT,
                name: i18n('TRIGGERS.COMPARE_OP_LESS'),
            },
            {
                id: TriggerConditionOperator.LTE,
                name: i18n('TRIGGERS.COMPARE_OP_LESS_EQUAL'),
            },
            {
                id: TriggerConditionOperator.AND,
                name: i18n('TRIGGERS.COMPARE_OP_AND'),
            },
            {
                id: TriggerConditionOperator.OR,
                name: i18n('TRIGGERS.COMPARE_OP_OR'),
            },
            {
                id: TriggerConditionOperator.XOR,
                name: i18n('TRIGGERS.COMPARE_OP_XOR'),
            },
        ];
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system && this.system) {
            this.loadSystemModules();
        }
    }

    public updateFormForSide(side: 'left' | 'right') {
        if (this.form.controls[side]) {
            if (!this[side + '_side'].keys) {
                this[side + '_side'].keys = [];
            }
            this.form.controls[side].setValue(this[side + '_side']);
        }
    }

    /**
     * Load the list of status variables for the given modules
     * @param module Module to list status variables
     */
    public loadSystemStatusVariables(mod_name: string, side: 'left' | 'right') {
        const name = (mod_name || '').split('_');
        if (!name[0]?.length) return;
        systemModuleState(
            this.system.id,
            name.length > 1
                ? name.slice(0, name.length - 1).join('_')
                : name[0],
            +name[name.length - 1] || 1,
        ).subscribe(
            (var_map) => {
                if (Object.keys(var_map || {}).length <= 0) {
                    var_map = { connected: true };
                }
                this[`${side}_status_variables`] = Object.keys(var_map).map(
                    (key) => ({
                        id: key,
                        name: key,
                    }),
                );
                this.addExistingStatusVariables();
            },
            () =>
                notifyError(
                    i18n('TRIGGERS.COMPARE_VARIABLE_LOAD_ERROR', {
                        system: this.system.id,
                        module: mod_name,
                    }),
                ),
        );
    }

    /**
     * Load the list of modules for the active system
     */
    private loadSystemModules() {
        if (!this.system) {
            return;
        }
        queryModules({ control_system_id: this.system.id })
            .pipe(map((resp) => resp.data))
            .subscribe((module_list) => {
                this.modules = module_list;
                const mod_list = this.system.modules;
                this.modules.sort(
                    (a, b) => mod_list.indexOf(a.id) - mod_list.indexOf(b.id),
                );
                this.module_list = this.modules.map((mod) => {
                    const name = mod.custom_name || mod.name || 'Blank';
                    const index = calculateModuleIndex(this.modules, mod);
                    return {
                        id: mod.id,
                        name: `${name}_${index}`,
                        keys: [],
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
            if (!this.module_list.find((mod) => mod.name === module)) {
                this.module_list.unshift({
                    id: 'old_left_value',
                    name: module,
                    keys: [],
                });
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
            if (!this.module_list.find((mod) => mod.name === module)) {
                this.module_list.unshift({
                    id: 'old_right_value',
                    name: module,
                    keys: [],
                });
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
            if (
                !this.left_status_variables.find(
                    (status) => status.name === this.left_side.status,
                )
            ) {
                this.left_status_variables.unshift({
                    id: this.left_side.status,
                    name: this.left_side.status,
                    keys: [],
                });
            }
        }
        if (this.right_side.status) {
            if (
                !this.right_status_variables.find(
                    (status) => status.name === this.right_side.status,
                )
            ) {
                this.right_status_variables.unshift({
                    id: this.right_side.status,
                    name: this.right_side.status,
                    keys: [],
                });
            }
        }
    }
}
