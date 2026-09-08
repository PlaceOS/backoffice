import { TestBed } from '@angular/core/testing';
import { TriggerConditionOperator } from '@placeos/ts-client';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import {
    applyTriggerActionFormSchema,
    applyTriggerConditionFormSchema,
    generateTriggerActionFormModel,
    generateTriggerConditionFormModel,
} from '../../app/triggers/triggers.utilities';
import { createTestForm } from '../common/form-test.helpers';

vi.mock('@placeos/ts-client', () =>
    vi.importActual('@placeos/ts-client/dist/index.es.js'),
);

describe('trigger conditions and actions', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it.each([0, false])(
        'preserves comparison constant %j on both sides when editing',
        (value) => {
            const model = generateTriggerConditionFormModel({
                left: value,
                right: value,
                operator: TriggerConditionOperator.EQ,
            });
            expect(model.left).toBe(value);
            expect(model.right).toBe(value);
        },
    );

    it('requires a module and status for a comparison variable', () => {
        const { fields } = createTestForm(
            generateTriggerConditionFormModel({
                left: { mod: '', status: '', keys: [] },
                right: 'true',
                operator: TriggerConditionOperator.EQ,
            }),
            applyTriggerConditionFormSchema,
        );
        expect(fields.left().errors()).toEqual([
            expect.objectContaining({ kind: 'module' }),
        ]);
        fields.left().value.set({ mod: 'Display_1', status: '', keys: [] });
        expect(fields.left().errors()).toEqual([
            expect.objectContaining({ kind: 'status' }),
        ]);
        fields
            .left()
            .value.set({ mod: 'Display_1', status: 'power', keys: [] });
        expect(fields().valid()).toBe(true);
        fields.right().value.set('not json');
        expect(fields.right().invalid()).toBe(true);
        fields.condition_type().value.set('time');
        expect(fields().valid()).toBe(true);
        fields.condition_type().value.set('compare');
        expect(fields.right().invalid()).toBe(true);
    });

    it('validates every email recipient and clears email errors when changing to a function action', () => {
        const { fields } = createTestForm(
            generateTriggerActionFormModel({ emails: [], content: '' }),
            applyTriggerActionFormSchema,
        );
        expect(fields.content().invalid()).toBe(true);
        fields.content().value.set('Room alert');
        fields.emails().value.set(['ops@example.com', 'invalid']);
        expect(fields.emails().invalid()).toBe(true);
        fields.emails().value.set(['ops@example.com', 'support@example.com']);
        expect(fields().valid()).toBe(true);
        fields.emails().value.set(['invalid']);
        fields.content().value.set('');
        fields.action_type().value.set('function');
        fields
            .method_call()
            .value.set({ mod: 'Display_1', method: 'power_on' });
        expect(fields().valid()).toBe(true);
    });
});
