import { AbstractControl, Validators } from '@angular/forms';
import { required, SchemaFn, validate } from '@angular/forms/signals';
import {
    type Trigger,
    type TriggerInstance,
    TriggerActionsEmail,
    TriggerActionsFunction,
    TriggerConditionsComparison,
    TriggerConditionsComparisonStatusVariable,
    TriggerConditionsTimeDependent,
} from '@placeos/ts-client';
import {
    TriggerConditionOperator,
    TriggerTimeConditionType,
} from '@placeos/ts-client/compat';
import { validateJSONString } from '../common/validation';

/** Lists of the actions of a trigger */
export interface TriggerActionLists {
    functions: TriggerActionsFunction[];
    mailers: TriggerActionsEmail[];
}

/** Lists of the conditions of a trigger */
export interface TriggerConditionLists {
    comparisons: TriggerConditionsComparison[];
    time_dependents: TriggerConditionsTimeDependent[];
}

/**
 * Copies of the actions of a trigger, with an empty list for a missing one.
 * The 6.x `PlaceTrigger.actions` getter did this.
 */
export function triggerActions(trigger?: Trigger): TriggerActionLists {
    const actions = trigger?.actions;
    return {
        // Copies keep `null` values, so a copy matches its source as JSON
        functions: (actions?.functions || []).map((_) => ({
            ..._,
            args: _.args && { ..._.args },
        })),
        mailers: (actions?.mailers || []).map((_) => ({
            ..._,
            emails: _.emails && [..._.emails],
        })),
    };
}

/**
 * Copies of the conditions of a trigger, with an empty list for a missing
 * one. The 6.x `PlaceTrigger.conditions` getter did this.
 */
export function triggerConditions(trigger?: Trigger): TriggerConditionLists {
    const conditions = trigger?.conditions;
    const copy = (value: TriggerConditionsComparison['left']) =>
        value && typeof value === 'object' ? { ...value } : value;
    return {
        comparisons: (conditions?.comparisons || []).map((_) => ({
            ..._,
            left: copy(_.left),
            right: copy(_.right),
        })),
        time_dependents: (conditions?.time_dependents || []).map((_) => ({
            ..._,
        })),
    };
}

export interface TriggerFormModel {
    name: string;
    description: string;
    enable_webhook: boolean;
    supported_methods: readonly string[];
    debounce_period: number;
}

export function generateTriggerFormModel(trigger?: Trigger): TriggerFormModel {
    return {
        name: trigger?.name || '',
        description: trigger?.description || '',
        enable_webhook: trigger?.enable_webhook || false,
        // A saved trigger keeps its list, also when it is empty. A new trigger
        // (from `newItem`, with an empty list) gets POST. A copy keeps its list
        supported_methods:
            trigger?.id || trigger?.supported_methods?.length
                ? trigger.supported_methods
                : ['POST'],
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
    playlists: readonly string[];
    triggered: boolean;
    exec_enabled: boolean;
    enabled: boolean;
    important: boolean;
}

export function generateTriggerSettingsFormModel(
    trigger?: TriggerInstance,
): TriggerSettingsFormModel {
    return {
        name: trigger?.name || '',
        playlists: trigger?.playlists || [],
        triggered: +trigger?.trigger_count > 0,
        exec_enabled: !!trigger?.exec_enabled,
        enabled: !!trigger?.enabled,
        important: !!trigger?.important,
    };
}

export interface TriggerConditionFormModel {
    condition_type: 'compare' | 'time';
    left: TriggerConditionsComparisonStatusVariable | string | number | boolean;
    operator: TriggerConditionOperator;
    right:
        | TriggerConditionsComparisonStatusVariable
        | string
        | number
        | boolean;
    time_type: TriggerTimeConditionType | string;
    time: number;
    cron: string;
    timezone: string;
}

export function generateTriggerConditionFormModel(
    condition:
        | TriggerConditionsComparison
        | TriggerConditionsTimeDependent = {} as
        | TriggerConditionsComparison
        | TriggerConditionsTimeDependent,
): TriggerConditionFormModel {
    const type = (condition as TriggerConditionsTimeDependent).type
        ? 'time'
        : 'compare';
    const left =
        typeof (condition as TriggerConditionsComparison).left === 'object'
            ? {
                  ...((condition as TriggerConditionsComparison)
                      .left as TriggerConditionsComparisonStatusVariable),
              }
            : (condition as TriggerConditionsComparison).left;
    const right =
        typeof (condition as TriggerConditionsComparison).right === 'object'
            ? {
                  ...((condition as TriggerConditionsComparison)
                      .right as TriggerConditionsComparisonStatusVariable),
              }
            : (condition as TriggerConditionsComparison).right;
    return {
        condition_type: type,
        left:
            typeof left === 'object'
                ? { ...(left as TriggerConditionsComparisonStatusVariable) }
                : (left ?? ({} as TriggerConditionsComparisonStatusVariable)),
        operator:
            (condition as TriggerConditionsComparison).operator ||
            TriggerConditionOperator.EQ,
        right: right ?? undefined,
        time_type: (condition as TriggerConditionsTimeDependent).type || 'at',
        time:
            (+(condition as TriggerConditionsTimeDependent).time || 0) * 1000 ||
            Date.now(),
        cron: (condition as TriggerConditionsTimeDependent).cron || '',
        timezone: (condition as TriggerConditionsTimeDependent).timezone || '',
    };
}

export function applyTriggerConditionFormSchema(
    path,
): ReturnType<SchemaFn<TriggerConditionFormModel>> {
    const valid_compare_value = (value) => {
        if (value instanceof Object) {
            return !(value as TriggerConditionsComparisonStatusVariable).mod
                ? { kind: 'module', message: 'Module is required' }
                : !(value as TriggerConditionsComparisonStatusVariable).status
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
    emails: readonly string[];
    content: string;
    method_call: TriggerActionsFunction;
}

export function generateTriggerActionFormModel(
    action: TriggerActionsFunction | TriggerActionsEmail = {} as
        | TriggerActionsFunction
        | TriggerActionsEmail,
): TriggerActionFormModel {
    const type =
        action && (action as TriggerActionsEmail)?.emails
            ? 'emails'
            : 'function';
    return {
        action_type: type,
        emails: (action as TriggerActionsEmail)?.emails || [],
        content: (action as TriggerActionsEmail)?.content || '',
        method_call: (action as TriggerActionsFunction) || null,
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
