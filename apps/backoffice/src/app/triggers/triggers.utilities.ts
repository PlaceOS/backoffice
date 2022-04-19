import {
    AbstractControl, FormControl,
    FormGroup, Validators
} from '@angular/forms';
import {
    PlaceTrigger,




    TriggerAtTimeCondition, TriggerComparison, TriggerConditionOperator,



    TriggerCronTimeCondition,
    TriggerFunction,
    TriggerMailer, TriggerStatusVariable,


    TriggerTimeCondition
} from '@placeos/ts-client';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import { validateJSONString } from 'apps/backoffice/src/app/common/validation';



/**
 * Generate angular form controls
 * @param trigger Trigger to generate the form controls for
 */
export function generateTriggerFormFields(trigger: PlaceTrigger): FormGroup {
    if (!trigger) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(trigger.name || '', [Validators.required]),
        description: new FormControl(trigger.description || ''),
        enable_webhook: new FormControl(trigger.enable_webhook || false),
        supported_methods: new FormControl(trigger.supported_methods || []),
        debounce_period: new FormControl(
            Math.max(0, trigger.debounce_period || 0)
        ),
    };
    return new FormGroup(fields);
}
/**
 * Generate angular form controls
 * @param trigger Trigger to generate the form controls for
 */
export function generateTriggerSettingsFormFields(
    trigger: PlaceTrigger
): FormGroup {
    if (!trigger) {
        throw Error('No Zone passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(trigger.name || ''),
        triggered: new FormControl(+trigger.activated_count > 0),
        exec_enabled: new FormControl(!!trigger.exec_enabled),
        enabled: new FormControl(!!trigger.enabled),
        important: new FormControl(!!trigger.important),
    };
    return new FormGroup(fields);
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
            return !value.mod
                ? { module: true }
                : !value.status
                ? { status: true }
                : null;
        } else {
            return validateJSONString(control);
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
            (condition as TriggerComparison).operator ||
                TriggerConditionOperator.EQ
        ),
        right: new FormControl(right || undefined, [validateCompare]),
        time_type: new FormControl(
            (condition as TriggerTimeCondition).type || 'at'
        ),
        time: new FormControl(
            (+(condition as TriggerAtTimeCondition).time || 0) * 1000 ||
                Date.now()
        ),
        cron: new FormControl(
            (condition as TriggerCronTimeCondition).cron || undefined
        ),
        timezone: new FormControl(
            (condition as TriggerCronTimeCondition).timezone || ''
        ),
    };
    const subscriptions = [];
    return {
        form: new FormGroup(fields),
        subscriptions,
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
            (valid, email) =>
                valid && !Validators.email({ value: email } as any),
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
export function generateTriggerActionForm(
    action: TriggerFunction | TriggerMailer = {} as any
) {
    const type =
        action && (action as TriggerMailer)?.emails ? 'emails' : 'function';
    const fields: HashMap<FormControl> = {
        action_type: new FormControl(type),
        emails: new FormControl((action as TriggerMailer)?.emails || [], [
            Validators.min(1),
            Validators.required,
            validateEmailList,
        ]),
        content: new FormControl((action as TriggerMailer)?.content || '', [
            Validators.required,
        ]),
        method_call: new FormControl((action as TriggerFunction) || null, []),
    };
    const subscriptions = [];
    return {
        form: new FormGroup(fields),
        subscriptions,
    };
}
