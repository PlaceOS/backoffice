import { describe, it, expect, vi, beforeEach } from 'vitest';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    PlaceTrigger: class {},
    TriggerConditionOperator: {
        EQ: '==',
        NEQ: '!=',
        LT: '<',
        LTE: '<=',
        GT: '>',
        GTE: '>=',
        AND: '&&',
        OR: '||',
    },
}));

// Mock validation module
vi.mock('../../app/common/validation', () => ({
    validateJSONString: vi.fn((control) => {
        try {
            if (
                typeof control.value === 'string' &&
                control.value.trim() !== ''
            ) {
                JSON.parse(control.value);
            }
            return null;
        } catch {
            return { invalidJSON: true };
        }
    }),
}));

import {
    generateTriggerFormFields,
    generateTriggerSettingsFormFields,
    validateCompare,
    generateTriggerConditionForm,
    validateEmailList,
    generateTriggerActionForm,
} from '../../app/triggers/triggers.utilities';

describe('triggers.utilities', () => {
    describe('generateTriggerFormFields', () => {
        it('should return a FormGroup', () => {
            const form = generateTriggerFormFields();
            expect(form).toBeInstanceOf(FormGroup);
        });

        it('should have name control', () => {
            const form = generateTriggerFormFields();
            expect(form.get('name')).toBeTruthy();
        });

        it('should have description control', () => {
            const form = generateTriggerFormFields();
            expect(form.get('description')).toBeTruthy();
        });

        it('should have enable_webhook control', () => {
            const form = generateTriggerFormFields();
            expect(form.get('enable_webhook')).toBeTruthy();
        });

        it('should have supported_methods control', () => {
            const form = generateTriggerFormFields();
            expect(form.get('supported_methods')).toBeTruthy();
        });

        it('should have debounce_period control', () => {
            const form = generateTriggerFormFields();
            expect(form.get('debounce_period')).toBeTruthy();
        });

        it('should have empty defaults without trigger', () => {
            const form = generateTriggerFormFields();
            expect(form.get('name')?.value).toBe('');
            expect(form.get('description')?.value).toBe('');
            expect(form.get('enable_webhook')?.value).toBe(false);
            expect(form.get('supported_methods')?.value).toEqual([]);
            expect(form.get('debounce_period')?.value).toBe(0);
        });

        it('should populate values from trigger', () => {
            const trigger = {
                name: 'Test Trigger',
                description: 'Test description',
                enable_webhook: true,
                supported_methods: ['GET', 'POST'],
                debounce_period: 5000,
            } as any;

            const form = generateTriggerFormFields(trigger);
            expect(form.get('name')?.value).toBe('Test Trigger');
            expect(form.get('description')?.value).toBe('Test description');
            expect(form.get('enable_webhook')?.value).toBe(true);
            expect(form.get('supported_methods')?.value).toEqual([
                'GET',
                'POST',
            ]);
            expect(form.get('debounce_period')?.value).toBe(5000);
        });

        it('should require name field', () => {
            const form = generateTriggerFormFields();
            expect(form.get('name')?.valid).toBe(false);
            expect(form.get('name')?.errors?.['required']).toBeTruthy();
        });

        it('should be valid when name is provided', () => {
            const form = generateTriggerFormFields();
            form.get('name')?.setValue('Test');
            expect(form.valid).toBe(true);
        });

        it('should handle negative debounce_period', () => {
            const trigger = { debounce_period: -100 } as any;
            const form = generateTriggerFormFields(trigger);
            expect(form.get('debounce_period')?.value).toBe(0);
        });
    });

    describe('generateTriggerSettingsFormFields', () => {
        it('should return a FormGroup', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form).toBeInstanceOf(FormGroup);
        });

        it('should have name control', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('name')).toBeTruthy();
        });

        it('should have playlists control', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('playlists')).toBeTruthy();
        });

        it('should have triggered control', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('triggered')).toBeTruthy();
        });

        it('should have exec_enabled control', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('exec_enabled')).toBeTruthy();
        });

        it('should have enabled control', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('enabled')).toBeTruthy();
        });

        it('should have important control', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('important')).toBeTruthy();
        });

        it('should have false defaults without trigger', () => {
            const form = generateTriggerSettingsFormFields();
            expect(form.get('name')?.value).toBe('');
            expect(form.get('playlists')?.value).toEqual([]);
            expect(form.get('triggered')?.value).toBe(false);
            expect(form.get('exec_enabled')?.value).toBe(false);
            expect(form.get('enabled')?.value).toBe(false);
            expect(form.get('important')?.value).toBe(false);
        });

        it('should set triggered true when activated_count > 0', () => {
            const trigger = { activated_count: 5 } as any;
            const form = generateTriggerSettingsFormFields(trigger);
            expect(form.get('triggered')?.value).toBe(true);
        });

        it('should set triggered false when activated_count is 0', () => {
            const trigger = { activated_count: 0 } as any;
            const form = generateTriggerSettingsFormFields(trigger);
            expect(form.get('triggered')?.value).toBe(false);
        });

        it('should populate all boolean fields', () => {
            const trigger = {
                name: 'Test',
                playlists: ['playlist1'],
                exec_enabled: true,
                enabled: true,
                important: true,
            } as any;

            const form = generateTriggerSettingsFormFields(trigger);
            expect(form.get('exec_enabled')?.value).toBe(true);
            expect(form.get('enabled')?.value).toBe(true);
            expect(form.get('important')?.value).toBe(true);
        });
    });

    describe('validateCompare', () => {
        it('should return null when no parent form', () => {
            const control = new FormControl({});
            expect(validateCompare(control)).toBeNull();
        });

        it('should return null when condition_type is not compare', () => {
            const group = new FormGroup({
                condition_type: new FormControl('time'),
                left: new FormControl({}),
            });
            const control = group.get('left')!;
            expect(validateCompare(control)).toBeNull();
        });

        it('should validate object with mod and status', () => {
            const group = new FormGroup({
                condition_type: new FormControl('compare'),
                left: new FormControl({ mod: 'MyModule', status: 'active' }),
            });
            const control = group.get('left')!;
            expect(validateCompare(control)).toBeNull();
        });

        it('should return module error when mod is missing', () => {
            const group = new FormGroup({
                condition_type: new FormControl('compare'),
                left: new FormControl({ status: 'active' }),
            });
            const control = group.get('left')!;
            expect(validateCompare(control)).toEqual({ module: true });
        });

        it('should return status error when status is missing', () => {
            const group = new FormGroup({
                condition_type: new FormControl('compare'),
                left: new FormControl({ mod: 'MyModule' }),
            });
            const control = group.get('left')!;
            expect(validateCompare(control)).toEqual({ status: true });
        });

        it('should validate JSON string when value is not object', () => {
            const group = new FormGroup({
                condition_type: new FormControl('compare'),
                left: new FormControl('{"valid": true}'),
            });
            const control = group.get('left')!;
            const result = validateCompare(control);
            expect(result).toBeNull();
        });

        it('should return error for invalid JSON string', () => {
            const group = new FormGroup({
                condition_type: new FormControl('compare'),
                left: new FormControl('invalid json'),
            });
            const control = group.get('left')!;
            const result = validateCompare(control);
            expect(result).toEqual({ invalidJSON: true });
        });
    });

    describe('generateTriggerConditionForm', () => {
        it('should return a FormGroup', () => {
            const form = generateTriggerConditionForm();
            expect(form).toBeInstanceOf(FormGroup);
        });

        it('should have all required controls', () => {
            const form = generateTriggerConditionForm();
            expect(form.get('condition_type')).toBeTruthy();
            expect(form.get('left')).toBeTruthy();
            expect(form.get('operator')).toBeTruthy();
            expect(form.get('right')).toBeTruthy();
            expect(form.get('time_type')).toBeTruthy();
            expect(form.get('time')).toBeTruthy();
            expect(form.get('cron')).toBeTruthy();
            expect(form.get('timezone')).toBeTruthy();
        });

        it('should default to compare condition type', () => {
            const form = generateTriggerConditionForm();
            expect(form.get('condition_type')?.value).toBe('compare');
        });

        it('should set time condition type when type is present', () => {
            const form = generateTriggerConditionForm({ type: 'at' } as any);
            expect(form.get('condition_type')?.value).toBe('time');
        });

        it('should default operator to EQ', () => {
            const form = generateTriggerConditionForm();
            expect(form.get('operator')?.value).toBe('==');
        });

        it('should default time_type to at', () => {
            const form = generateTriggerConditionForm();
            expect(form.get('time_type')?.value).toBe('at');
        });

        it('should populate comparison values', () => {
            const condition = {
                left: { mod: 'Module1', status: 'power' },
                right: true,
                operator: '!=',
            } as any;

            const form = generateTriggerConditionForm(condition);
            expect(form.get('left')?.value).toEqual({
                mod: 'Module1',
                status: 'power',
            });
            expect(form.get('right')?.value).toBe(true);
            expect(form.get('operator')?.value).toBe('!=');
        });

        it('should handle cron condition', () => {
            const condition = {
                type: 'cron',
                cron: '0 * * * *',
                timezone: 'UTC',
            } as any;

            const form = generateTriggerConditionForm(condition);
            expect(form.get('cron')?.value).toBe('0 * * * *');
            expect(form.get('timezone')?.value).toBe('UTC');
        });
    });

    describe('validateEmailList', () => {
        it('should return null for null value', () => {
            const control = new FormControl(null);
            expect(validateEmailList(control)).toBeNull();
        });

        it('should return null for empty array', () => {
            const control = new FormControl([]);
            expect(validateEmailList(control)).toBeNull();
        });

        it('should return null for non-array value', () => {
            const control = new FormControl('test@example.com');
            expect(validateEmailList(control)).toBeNull();
        });

        it('should return null for valid email list', () => {
            const control = new FormControl([
                'test@example.com',
                'user@domain.com',
            ]);
            expect(validateEmailList(control)).toBeNull();
        });

        it('should return error for invalid email in list', () => {
            const control = new FormControl(['invalid-email', 'test@example.com']);
            expect(validateEmailList(control)).toEqual({ email: true });
        });

        it('should return error for all invalid emails', () => {
            const control = new FormControl(['invalid1', 'invalid2']);
            expect(validateEmailList(control)).toEqual({ email: true });
        });
    });

    describe('generateTriggerActionForm', () => {
        it('should return a FormGroup', () => {
            const form = generateTriggerActionForm();
            expect(form).toBeInstanceOf(FormGroup);
        });

        it('should have action_type control', () => {
            const form = generateTriggerActionForm();
            expect(form.get('action_type')).toBeTruthy();
        });

        it('should have emails control', () => {
            const form = generateTriggerActionForm();
            expect(form.get('emails')).toBeTruthy();
        });

        it('should have content control', () => {
            const form = generateTriggerActionForm();
            expect(form.get('content')).toBeTruthy();
        });

        it('should have method_call control', () => {
            const form = generateTriggerActionForm();
            expect(form.get('method_call')).toBeTruthy();
        });

        it('should default to function action type', () => {
            const form = generateTriggerActionForm();
            expect(form.get('action_type')?.value).toBe('function');
        });

        it('should set emails action type when emails present', () => {
            const action = {
                emails: ['test@example.com'],
                content: 'Email content',
            } as any;

            const form = generateTriggerActionForm(action);
            expect(form.get('action_type')?.value).toBe('emails');
        });

        it('should populate email action fields', () => {
            const action = {
                emails: ['test@example.com', 'user@domain.com'],
                content: 'Alert message',
            } as any;

            const form = generateTriggerActionForm(action);
            expect(form.get('emails')?.value).toEqual([
                'test@example.com',
                'user@domain.com',
            ]);
            expect(form.get('content')?.value).toBe('Alert message');
        });

        it('should have empty defaults without action', () => {
            const form = generateTriggerActionForm();
            expect(form.get('emails')?.value).toEqual([]);
            expect(form.get('content')?.value).toBe('');
            // method_call is set to the action object which is empty when not provided
            expect(form.get('method_call')?.value).toEqual({});
        });

        it('should populate method_call for function action', () => {
            const action = {
                mod: 'Module1',
                method: 'turnOn',
                args: [],
            } as any;

            const form = generateTriggerActionForm(action);
            expect(form.get('method_call')?.value).toEqual(action);
        });
    });
});
