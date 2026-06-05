import { describe, expect, it, vi } from 'vitest';
import {
    generateTriggerActionFormModel,
    generateTriggerConditionFormModel,
    generateTriggerFormModel,
    generateTriggerSettingsFormModel,
    validateEmailList,
} from '../../app/triggers/triggers.utilities';

const mocks = vi.hoisted(() => ({
    TriggerConditionOperator: {
        EQ: 'eq',
    },
    TriggerTimeConditionType: {
        CRON: 'cron',
    },
}));

vi.mock('@placeos/ts-client', () => ({
    TriggerConditionOperator: mocks.TriggerConditionOperator,
    TriggerTimeConditionType: mocks.TriggerTimeConditionType,
}));

describe('triggers.utilities', () => {
    it('generates trigger defaults and populated settings', () => {
        expect(generateTriggerFormModel()).toEqual({
            name: '',
            description: '',
            enable_webhook: false,
            supported_methods: [],
            debounce_period: 0,
        });

        expect(
            generateTriggerSettingsFormModel({
                name: 'Trigger',
                playlists: ['playlist-1'],
                activated_count: 2,
                exec_enabled: true,
                enabled: true,
                important: true,
            } as any),
        ).toMatchObject({
            name: 'Trigger',
            playlists: ['playlist-1'],
            triggered: true,
            exec_enabled: true,
            enabled: true,
            important: true,
        });
    });

    it('generates comparison and time condition models', () => {
        expect(generateTriggerConditionFormModel()).toMatchObject({
            condition_type: 'compare',
            operator: mocks.TriggerConditionOperator.EQ,
            time_type: 'at',
            cron: '',
            timezone: '',
        });

        expect(
            generateTriggerConditionFormModel({
                type: mocks.TriggerTimeConditionType.CRON,
                cron: '* * * * *',
                timezone: 'Australia/Sydney',
            } as any),
        ).toMatchObject({
            condition_type: 'time',
            time_type: mocks.TriggerTimeConditionType.CRON,
            cron: '* * * * *',
            timezone: 'Australia/Sydney',
        });
    });

    it('generates action models and validates email lists', () => {
        expect(generateTriggerActionFormModel()).toMatchObject({
            action_type: 'function',
            emails: [],
            content: '',
        });
        expect(
            generateTriggerActionFormModel({
                emails: ['ops@example.com'],
                content: 'Alert',
            } as any),
        ).toMatchObject({
            action_type: 'emails',
            emails: ['ops@example.com'],
            content: 'Alert',
        });
        expect(
            validateEmailList({ value: ['ops@example.com'] } as any),
        ).toBeNull();
        expect(validateEmailList({ value: ['invalid'] } as any)).toEqual({
            email: true,
        });
    });
});
