import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    WritableSignal,
    input,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldTree, FormField } from '@angular/forms/signals';
import {
    PlaceModule,
    PlaceSystem,
    TriggerConditionOperator,
    TriggerStatusVariable,
    queryModules,
    systemModuleState,
} from '@placeos/ts-client';

import { NgTemplateOutlet } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { calculateModuleIndex } from '../../../common/api';
import { i18n } from '../../../common/locale.service';
import { notifyError } from '../../../common/notifications';
import { Identity } from '../../../common/types';
import { TriggerConditionFormModel } from '../../../triggers/triggers.utilities';
import { TranslatePipe } from '../../translate.pipe';

@Component({
    selector: 'trigger-condition-comparison-form',
    template: `@if (form()) {
            <div class="trigger-condition form comparison">
                <ng-container
                    *ngTemplateOutlet="
                        status_variable_form;
                        context: { side: 'left' }
                    "
                />
                @if (form().left().touched() && form().left().invalid()) {
                    <div class="error">
                        {{ 'TRIGGERS.COMPARE_VARIABLE_ERROR' | translate }}
                    </div>
                }
                @if (form().operator) {
                    <div class="field">
                        <label for="operator" hidden>{{
                            'TRIGGERS.COMPARE_OP' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form().operator"
                                [placeholder]="
                                    'TRIGGERS.COMPARE_OP_SELECT' | translate
                                "
                            >
                                @for (
                                    operation of compare_types();
                                    track operation
                                ) {
                                    <mat-option [value]="operation.id">
                                        {{ operation.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (form().operator) {
                    <div class="field">
                        <label for="compared-to" hidden>{{
                            'TRIGGERS.COMPARE_TO' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                name="compared-to"
                                [(ngModel)]="rhs_type"
                                (ngModelChange)="
                                formModel().update((model) => ({
                                        ...model,
                                        right: '',
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                            >
                                @for (type of right_var_type(); track type) {
                                    <mat-option [value]="type.id">
                                        {{ type.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (rhs_type() === 'constant') {
                    <div class="field">
                        <label for="constant" hidden>{{
                            'TRIGGERS.COMPARE_TO' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [ngModel]="formModel()().right"
                                (ngModelChange)="
                                    formModel().update((model) => ({
                                        ...model,
                                        right: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                placeholder="true/false, 'string', 123.456"
                            />
                            <mat-error>{{
                                'TRIGGERS.COMPARE_JSON_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                } @else {
                    <ng-container
                        *ngTemplateOutlet="
                            status_variable_form;
                            context: { side: 'right' }
                        "
                    />
                }
            </div>
        }
        <ng-template #status_variable_form let-side="side">
            <div class="fieldset">
                @if (this[side + '_side']) {
                    <div class="field">
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
                                @for (mod of module_list(); track mod) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                @if (this[side + '_status_variables']?.length) {
                    <div class="field">
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
                                    'TRIGGERS.COMPARE_VARIABLE_SELECT'
                                        | translate
                                "
                            >
                                @for (
                                    mod of this[side + '_status_variables'];
                                    track mod
                                ) {
                                    <mat-option [value]="mod.name">
                                        {{ mod.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </div>
            @if (
                this[side + '_status_variables'] &&
                this[side + '_status_variables'].length
            ) {
                <div class="field">
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
                                'TRIGGERS.COMPARE_SUBKEYS_PLACEHOLDER'
                                    | translate
                            "
                        />
                    </mat-form-field>
                </div>
            }
        </ng-template>`,
    styles: [``],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
        FormsModule,
        MatSelectModule,
        MatInputModule,
        FormField,
        NgTemplateOutlet,
    ],
})
export class TriggerConditionComparisonFormComponent
    implements OnChanges, OnInit
{
    /** Signal form fields used for editing the trigger condition */
    public readonly form =
        input<FieldTree<TriggerConditionFormModel>>(undefined);
    public readonly formModel =
        input<WritableSignal<TriggerConditionFormModel>>(undefined);
    /** Systems used for templating the status variables */
    public readonly system = input<PlaceSystem>(undefined);
    /** List of modules associated with the template system */
    public modules: PlaceModule[] = [];
    /** List of status variables associated with the selected module */
    public readonly module_list = signal<Identity[]>([]);
    /** List of status variables associated with the selected module */
    public left_status_variables: Identity[] = [];
    /** List of status variables associated with the selected module */
    public right_status_variables: Identity[] = [];
    /** Type of value to compare the left hand side to */
    public readonly rhs_type: WritableSignal<'constant' | 'status_var'> =
        signal('constant');
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
    public readonly right_var_type: WritableSignal<Identity[]> = signal([]);

    /** Allowed comparison operators */
    public readonly compare_types: WritableSignal<Identity[]> = signal([]);

    public get left_keys(): string {
        return this.left_side?.keys?.join(',') || '';
    }
    public get right_keys(): string {
        return this.right_side?.keys?.join(',') || '';
    }

    public ngOnInit() {
        this.right_var_type.set([
            { id: 'constant', name: i18n('TRIGGERS.COMPARE_CONSTANT') },
            { id: 'status_var', name: i18n('TRIGGERS.COMPARE_VARIABLE') },
        ]);
        this.compare_types.set([
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
        ]);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.system && this.system()) {
            this.loadSystemModules();
        }
    }

    public updateFormForSide(side: 'left' | 'right') {
        const form = this.form();
        if (form?.[side]) {
            if (!this[side + '_side'].keys) {
                this[side + '_side'].keys = [];
            }
            this.formModel().update((model) => ({
                ...model,
                [side]: this[side + '_side'],
            }));
        }
    }

    /**
     * Load the list of status variables for the given modules
     * @param module Module to list status variables
     */
    public async loadSystemStatusVariables(
        mod_name: string,
        side: 'left' | 'right',
    ) {
        const name = (mod_name || '').split('_');
        if (!name[0]?.length) return;
        await systemModuleState(
            this.system().id,
            name.length > 1
                ? name.slice(0, name.length - 1).join('_')
                : name[0],
            +name[name.length - 1] || 1,
        )
            .then((var_map) => {
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
            })
            .catch(() =>
                notifyError(
                    i18n('TRIGGERS.COMPARE_VARIABLE_LOAD_ERROR', {
                        system: this.system().id,
                        module: mod_name,
                    }),
                ),
            );
    }

    /**
     * Load the list of modules for the active system
     */
    private async loadSystemModules() {
        const system = this.system();
        if (!system) {
            return;
        }
        const module_list = await queryModules({
            control_system_id: system.id,
        }).then((resp) => resp.data);
        this.modules = module_list;
        const mod_list = this.system().modules;
        this.modules.sort(
            (a, b) => mod_list.indexOf(a.id) - mod_list.indexOf(b.id),
        );
        this.module_list.set(
            this.modules.map((mod) => {
                const name = mod.custom_name || mod.name || 'Blank';
                const index = calculateModuleIndex(this.modules, mod);
                return {
                    id: mod.id,
                    name: `${name}_${index}`,
                    keys: [],
                };
            }),
        );
        this.addExistingModules();
    }

    /**
     * Add pre-exisiting module detail to the available list
     */
    private addExistingModules() {
        const form = this.form();
        const model = this.formModel()();
        if (form.left && model.left) {
            const module = (model.left as TriggerStatusVariable).mod;
            if (!this.module_list().find((mod) => mod.name === module)) {
                this.module_list.update((list) => [
                    {
                        id: 'old_left_value',
                        name: module,
                        keys: [],
                    },
                    ...list,
                ]);
            }
            this.loadSystemStatusVariables(module, 'left');
            this.left_side = model.left as TriggerStatusVariable;
        }
        if (
            form.right &&
            model.right &&
            (model.right as TriggerStatusVariable).mod
        ) {
            this.rhs_type.set('status_var');
            const module = (model.right as TriggerStatusVariable).mod;
            if (!this.module_list().find((mod) => mod.name === module)) {
                this.module_list.update((list) => [
                    {
                        id: 'old_right_value',
                        name: module,
                        keys: [],
                    },
                    ...list,
                ]);
            }
            this.loadSystemStatusVariables(module, 'right');
            this.right_side = model.right as TriggerStatusVariable;
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
