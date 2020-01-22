import { Validators, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import {
    EngineTrigger,
    HashMap,
    TriggerComparison,
    TimeCondition,
    ConditionOperator,
    TriggerStatusVariable
} from '@acaprojects/ts-composer';

import { FormDetails } from './systems.utilities';

import * as dayjs from 'dayjs';

/**
 * Generate angular form controls
 * @param trigger Trigger to generate the form controls for
 */
export function generateTriggerFormFields(trigger: EngineTrigger): FormDetails {
    if (!trigger) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(trigger.name || '', [Validators.required]),
        description: new FormControl(trigger.description || ''),
        enable_webhook: new FormControl(trigger.enable_webhook || '')
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(fields[key].valueChanges.subscribe(value => (trigger[key] = value)));
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}

/**
 * Validate a side of the comparison pair
 * @param control Control holding the comparison
 */
export function validateCompare(control: AbstractControl) {
    const form = control.parent;
    if (
        form &&
        form instanceof FormGroup &&
        form.controls.condition_type &&
        form.controls.condition_type.value === 'compare'
    ) {
        if (control.value instanceof Object) {
            const value: TriggerStatusVariable = control.value;
            return !value.mod ? { module: true } : !value.status ? { status: true } : null;
        } else {
            return !control.value ? { required: true } : null;
        }
    }
    return null;
}

export function generateTriggerConditionForm() {
    const fields: HashMap<FormControl> = {
        condition_type: new FormControl('compare'),
        left: new FormControl({}, [validateCompare]),
        operator: new FormControl(ConditionOperator.EQ),
        right: new FormControl(undefined, [validateCompare]),
        time_type: new FormControl('at'),
        time: new FormControl(dayjs().valueOf()),
        cron: new FormControl()
    };
    const subscriptions = [];
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
