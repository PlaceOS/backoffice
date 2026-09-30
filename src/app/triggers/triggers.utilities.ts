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
                : left ?? ({} as TriggerStatusVariable),
        operator:
            (condition as TriggerComparison).operator ||
            TriggerConditionOperator.EQ,
        right: right ?? undefined,
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

export type CronPeriod =
    | 'minute'
    | 'hour'
    | 'day'
    | 'week'
    | 'month'
    | 'year'
    | 'custom';

/** Values for the simple schedule editor. Month is 1-12, weekday is 0-6. */
export interface CronParts {
    minute: number;
    hour: number;
    day_of_week: number;
    day_of_month: number;
    month: number;
}

/**
 * Build a cron string from the simple schedule editor values.
 * Returns `null` for the `custom` period as the string is edited directly.
 */
export function buildCronString(
    period: CronPeriod,
    parts: CronParts,
): string | null {
    const minute = parts.minute % 60;
    const { hour, day_of_week, day_of_month, month } = parts;
    switch (period) {
        case 'minute':
            return minute ? `*/${minute} * * * *` : '* * * * *';
        case 'hour':
            return hour ? `${minute} */${hour} * * *` : `${minute} * * * *`;
        case 'day':
            return `${minute} ${hour} * * *`;
        case 'week':
            return `${minute} ${hour} * * ${day_of_week}`;
        case 'month':
            return `${minute} ${hour} ${day_of_month} * *`;
        case 'year':
            return `${minute} ${hour} ${day_of_month} ${month} *`;
    }
    return null;
}

/**
 * Parse a cron string into the simple schedule editor values.
 * Strings with ranges, steps or lists use the `custom` period.
 */
export function parseCronString(cron: string): {
    period: CronPeriod;
    parts: CronParts;
} {
    const cron_str = (cron || '').trim() || '* * * * *';
    const [minute, hour, day, month, weekday] = cron_str.split(/\s+/);
    const parts: CronParts = {
        minute: +minute || 0,
        hour: +hour || 0,
        day_of_week: +weekday || 0,
        day_of_month: +day || 1,
        month: +month || 1,
    };
    if (/[-/,]/.test(cron_str)) return { period: 'custom', parts };
    const is_set = (value?: string) => !!value && value !== '*';
    const period: CronPeriod = is_set(month)
        ? 'year'
        : is_set(day)
          ? 'month'
          : is_set(weekday)
            ? 'week'
            : is_set(hour)
              ? 'day'
              : is_set(minute)
                ? 'hour'
                : 'minute';
    return { period, parts };
}
