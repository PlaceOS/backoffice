import { describe, expect, it, vi } from 'vitest';
import {
    buildCronString,
    generateTriggerActionFormModel,
    generateTriggerConditionFormModel,
    generateTriggerFormModel,
    generateTriggerSettingsFormModel,
    parseCronString,
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

    it('builds valid cron strings for each schedule period', () => {
        const parts = {
            minute: 30,
            hour: 9,
            day_of_week: 1,
            day_of_month: 15,
            month: 6,
        };
        expect(buildCronString('day', parts)).toBe('30 9 * * *');
        expect(buildCronString('week', parts)).toBe('30 9 * * 1');
        expect(buildCronString('month', parts)).toBe('30 9 15 * *');
        expect(buildCronString('year', parts)).toBe('30 9 15 6 *');
        expect(buildCronString('custom', parts)).toBeNull();
    });

    it.each([
        ['* * * * *', 'minute'],
        ['30 * * * *', 'hour'],
        ['30 9 * * *', 'day'],
        ['30 9 * * 0', 'week'],
        ['30 9 15 * *', 'month'],
        ['30 9 15 6 *', 'year'],
    ] as const)('round-trips %s as a %s schedule', (cron, period) => {
        const parsed = parseCronString(cron);
        expect(parsed.period).toBe(period);
        expect(buildCronString(parsed.period, parsed.parts)).toBe(cron);
    });

    it('treats ranges, steps and lists as custom', () => {
        for (const cron of ['*/5 * * * *', '0 9 * * 1-5', '0 9,17 * * *']) {
            expect(parseCronString(cron).period).toBe('custom');
        }
    });
});
