import { AbstractControl, Validators } from '@angular/forms';
import { required, SchemaFn, validate } from '@angular/forms/signals';
import {
    PlaceTrigger,
    TriggerAtTimeCondition,
    TriggerComparison,
    TriggerConditionOperator,
    TriggerCronTimeCondition,
    TriggerFunction,
    TriggerMailer,
    TriggerStatusVariable,
    TriggerTimeCondition,
    TriggerTimeConditionType,
} from '@placeos/ts-client';
import { validateJSONString } from '../common/validation';

export interface TriggerFormModel {
    name: string;
    description: string;
    enable_webhook: boolean;
    supported_methods: string[];
    debounce_period: number;
}

export function generateTriggerFormModel(
    trigger?: PlaceTrigger,
): TriggerFormModel {
    return {
        name: trigger?.name || '',
        description: trigger?.description || '',
        enable_webhook: trigger?.enable_webhook || false,
        supported_methods: [...(trigger?.supported_methods || [])],
        debounce_period: Math.max(0, trigger?.debounce_period || 0),
    };
}

export function applyTriggerFormSchema(
    path,
): ReturnType<SchemaFn<TriggerFormModel>> {
    required(path.name);
}
export interface TriggerSettingsFormModel {
    name: string;
    playlists: string[];
    triggered: boolean;
    exec_enabled: boolean;
    enabled: boolean;
    important: boolean;
}

export function generateTriggerSettingsFormModel(
    trigger?: PlaceTrigger,
): TriggerSettingsFormModel {
    return {
        name: trigger?.name || '',
        playlists: [...(trigger?.playlists || [])],
        triggered: +trigger?.activated_count > 0,
        exec_enabled: !!trigger?.exec_enabled,
        enabled: !!trigger?.enabled,
        important: !!trigger?.important,
    };
}

export interface TriggerConditionFormModel {
    condition_type: 'compare' | 'time';
    left: TriggerStatusVariable | string | number | boolean;
    operator: TriggerConditionOperator;
    right: TriggerStatusVariable | string | number | boolean;
    time_type: TriggerTimeConditionType | string;
    time: number;
    cron: string;
    timezone: string;
}

export function generateTriggerConditionFormModel(
    condition: TriggerComparison | TriggerTimeCondition = {} as
        | TriggerComparison
        | TriggerTimeCondition,
): TriggerConditionFormModel {
    const type = (condition as TriggerTimeCondition).type ? 'time' : 'compare';
    const left =
        typeof (condition as TriggerComparison).left === 'object'
            ? {
                  ...((condition as TriggerComparison)
                      .left as TriggerStatusVariable),
              }
            : (condition as TriggerComparison).left;
    const right =
        typeof (condition as TriggerComparison).right === 'object'
            ? {
                  ...((condition as TriggerComparison)
                      .right as TriggerStatusVariable),
              }
            : (condition as TriggerComparison).right;
    return {
        condition_type: type,
        left:
            typeof left === 'object'
                ? { ...(left as TriggerStatusVariable) }
                : left || ({} as TriggerStatusVariable),
        operator:
            (condition as TriggerComparison).operator ||
            TriggerConditionOperator.EQ,
        right: (right || undefined) as TriggerStatusVariable | string,
        time_type: (condition as TriggerTimeCondition).type || 'at',
        time:
            (+(condition as TriggerAtTimeCondition).time || 0) * 1000 ||
            Date.now(),
        cron: (condition as TriggerCronTimeCondition).cron || '',
        timezone: (condition as TriggerCronTimeCondition).timezone || '',
    };
}

export function applyTriggerConditionFormSchema(
    path,
): ReturnType<SchemaFn<TriggerConditionFormModel>> {
    const valid_compare_value = (value) => {
        if (value instanceof Object) {
            return !(value as TriggerStatusVariable).mod
                ? { kind: 'module', message: 'Module is required' }
                : !(value as TriggerStatusVariable).status
                  ? { kind: 'status', message: 'Status is required' }
                  : undefined;
        }
        return validateJSONString({ value } as AbstractControl)
            ? { kind: 'json', message: 'Valid JSON is required' }
            : undefined;
    };
    validate(path.left, ({ value, valueOf }) =>
        valueOf(path.condition_type) === 'compare'
            ? valid_compare_value(value())
            : undefined,
    );
    validate(path.right, ({ value, valueOf }) =>
        valueOf(path.condition_type) === 'compare'
            ? valid_compare_value(value())
            : undefined,
    );
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
                valid && !Validators.email({ value: email } as AbstractControl),
            true,
        )
            ? null
            : { email: true };
    }
    return null;
}

export interface TriggerActionFormModel {
    action_type: 'emails' | 'function';
    emails: string[];
    content: string;
    method_call: TriggerFunction;
}

export function generateTriggerActionFormModel(
    action: TriggerFunction | TriggerMailer = {} as
        | TriggerFunction
        | TriggerMailer,
): TriggerActionFormModel {
    const type =
        action && (action as TriggerMailer)?.emails ? 'emails' : 'function';
    return {
        action_type: type,
        emails: (action as TriggerMailer)?.emails || [],
        content: (action as TriggerMailer)?.content || '',
        method_call: (action as TriggerFunction) || null,
    };
}

export function applyTriggerActionFormSchema(
    path,
): ReturnType<SchemaFn<TriggerActionFormModel>> {
    required(path.emails, {
        when({ valueOf }) {
            return valueOf(path.action_type) === 'emails';
        },
    });
    validate(path.emails, ({ value, valueOf }) =>
        valueOf(path.action_type) !== 'emails' ||
        validateEmailList({ value: value() } as AbstractControl) === null
            ? undefined
            : { kind: 'email', message: 'Invalid email address' },
    );
    required(path.content, {
        when({ valueOf }) {
            return valueOf(path.action_type) === 'emails';
        },
    });
    required(path.method_call, {
        when({ valueOf }) {
            return valueOf(path.action_type) === 'function';
        },
    });
}
