import { Validators, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import {
    EngineTrigger,
    HashMap,
    TriggerStatusVariable,
    TriggerConditionOperator,
    TriggerComparison,
    TriggerTimeCondition,
    TriggerAtTimeCondition,
    TriggerCronTimeCondition,
    TriggerFunction,
    TriggerMailer
} from '@placeos/ts-client';

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
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    trigger.storePendingChange(key as any, value)
                )
            );
        }
    }
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
/**
 * Generate angular form controls
 * @param trigger Trigger to generate the form controls for
 */
export function generateTriggerSettingsFormFields(trigger: EngineTrigger): FormDetails {
    if (!trigger) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(trigger.name || ''),
        triggered: new FormControl(+trigger.activated_count > 0),
        enabled: new FormControl(!!trigger.enabled),
        important: new FormControl(!!trigger.important)
    };
    const subscriptions = [];
    for (const key in fields) {
        if (fields[key] && key.indexOf('settings') < 0) {
            subscriptions.push(
                fields[key].valueChanges.subscribe(value =>
                    trigger.storePendingChange(key as any, value)
                )
            );
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

/**
 * Generate form controls for creating a trigger condition
 */
export function generateTriggerConditionForm(
    condition: TriggerComparison | TriggerTimeCondition = {} as any
) {
    const type = (condition as TriggerTimeCondition).type ? 'time' : 'compare';
    const left =
        typeof (condition as TriggerComparison).left === 'object'
            ? { ...((condition as TriggerComparison).left as any) }
            : (condition as TriggerComparison).left;
    const right =
        typeof (condition as TriggerComparison).right === 'object'
            ? { ...((condition as TriggerComparison).right as any) }
            : (condition as TriggerComparison).right;
    const fields: HashMap<FormControl> = {
        condition_type: new FormControl(type),
        left: new FormControl({ ...(left || {}) }, [validateCompare]),
        operator: new FormControl(
            (condition as TriggerComparison).operator || TriggerConditionOperator.EQ
        ),
        right: new FormControl(right || undefined, [validateCompare]),
        time_type: new FormControl((condition as TriggerTimeCondition).type || 'at'),
        time: new FormControl(
            (+(condition as TriggerAtTimeCondition).time || 0) * 1000 || dayjs().valueOf()
        ),
        cron: new FormControl((condition as TriggerCronTimeCondition).cron || undefined)
    };
    const subscriptions = [];
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}

/**
 * Validate form control storing a list of emails
 * @param control Form control to valid
 */
export function validateEmailList(control: AbstractControl) {
    if (control.value && control.value instanceof Array) {
        const value: string[] = control.value;
        return value.reduce(
            (valid, email) => valid && !Validators.email({ value: email } as any),
            true
        )
            ? null
            : { email: true };
    }
    return null;
}

/**
 * Generate form controls for creating a trigger action
 */
export function generateTriggerActionForm(action: TriggerFunction | TriggerMailer = {} as any) {
    const type = action && (action as TriggerMailer).emails ? 'email' : 'function';
    const fields: HashMap<FormControl> = {
        action_type: new FormControl(type),
        emails: new FormControl((action as TriggerMailer).emails || [], [
            Validators.min(1),
            Validators.required,
            validateEmailList
        ]),
        content: new FormControl((action as TriggerMailer).emails || '', [Validators.required]),
        method_call: new FormControl((action as TriggerFunction) || null, [])
    };
    const subscriptions = [];
    return {
        form: new FormGroup(fields),
        subscriptions
    };
}
