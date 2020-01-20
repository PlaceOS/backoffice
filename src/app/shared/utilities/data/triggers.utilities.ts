
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { EngineTrigger, HashMap, TriggerComparison, TimeCondition, ConditionOperator } from '@acaprojects/ts-composer';

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
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(fields[key].valueChanges.subscribe(value => trigger[key] = value));
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}

export function generateTriggerConditionForm() {
    const fields: HashMap<FormControl> = {
        condition_type: new FormControl('compare'),
        left: new FormControl(),
        operator: new FormControl(ConditionOperator.EQ),
        right: new FormControl(),
        time_type: new FormControl('at'),
        time: new FormControl(dayjs().unix()),
        cron: new FormControl()
    };
    const subscriptions = [];
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
