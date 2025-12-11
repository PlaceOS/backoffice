import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { beforeEach, describe, expect, it } from 'vitest';
import { addChipItem, removeChipItem } from '../../app/common/forms';

describe('forms.ts utilities', () => {
    describe('addChipItem', () => {
        let control: FormControl<string[]>;
        let mock_input: HTMLInputElement;

        beforeEach(() => {
            control = new FormControl<string[]>([]);
            mock_input = document.createElement('input');
        });

        it('should add item to empty control', () => {
            const event: MatChipInputEvent = {
                value: 'new-tag',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(control.value).toEqual(['new-tag']);
        });

        it('should add item to existing list', () => {
            control.setValue(['tag1', 'tag2']);
            const event: MatChipInputEvent = {
                value: 'tag3',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(control.value).toEqual(['tag1', 'tag2', 'tag3']);
        });

        it('should trim whitespace from value', () => {
            const event: MatChipInputEvent = {
                value: '  trimmed  ',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(control.value).toEqual(['trimmed']);
        });

        it('should reset input value after adding', () => {
            mock_input.value = 'test';
            const event: MatChipInputEvent = {
                value: 'new-tag',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(mock_input.value).toBe('');
        });

        it('should not add empty value', () => {
            const event: MatChipInputEvent = {
                value: '',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(control.value).toEqual([]);
        });

        it('should not add whitespace-only value', () => {
            const event: MatChipInputEvent = {
                value: '   ',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(control.value).toEqual([]);
        });

        it('should handle null control gracefully', () => {
            const event: MatChipInputEvent = {
                value: 'tag',
                input: mock_input,
                chipInput: {} as any,
            };

            // Should not throw
            expect(() => addChipItem(null as any, event)).not.toThrow();
        });

        it('should handle null input element', () => {
            const event: MatChipInputEvent = {
                value: 'tag',
                input: null as any,
                chipInput: {} as any,
            };

            addChipItem(control, event);

            expect(control.value).toEqual(['tag']);
        });

        it('should work with typed arrays', () => {
            const typed_control = new FormControl<number[]>([1, 2]);
            const event: MatChipInputEvent = {
                value: '3',
                input: mock_input,
                chipInput: {} as any,
            };

            addChipItem(typed_control as any, event);

            // Value will be string '3' after trimming
            expect(typed_control.value).toContain('3');
        });
    });

    describe('removeChipItem', () => {
        let control: FormControl<string[]>;

        beforeEach(() => {
            control = new FormControl<string[]>(['tag1', 'tag2', 'tag3']);
        });

        it('should remove existing item', () => {
            removeChipItem(control, 'tag2');

            expect(control.value).toEqual(['tag1', 'tag3']);
        });

        it('should remove first item', () => {
            removeChipItem(control, 'tag1');

            expect(control.value).toEqual(['tag2', 'tag3']);
        });

        it('should remove last item', () => {
            removeChipItem(control, 'tag3');

            expect(control.value).toEqual(['tag1', 'tag2']);
        });

        it('should not modify list if item not found', () => {
            removeChipItem(control, 'nonexistent');

            expect(control.value).toEqual(['tag1', 'tag2', 'tag3']);
        });

        it('should handle empty control', () => {
            control.setValue([]);

            removeChipItem(control, 'tag');

            expect(control.value).toEqual([]);
        });

        it('should handle null control gracefully', () => {
            // Should not throw
            expect(() => removeChipItem(null as any, 'tag')).not.toThrow();
        });

        it('should remove only first occurrence of duplicate', () => {
            control.setValue(['tag', 'duplicate', 'duplicate', 'tag']);

            removeChipItem(control, 'duplicate');

            expect(control.value).toEqual(['tag', 'duplicate', 'tag']);
        });

        it('should work with object items', () => {
            const obj1 = { id: 1, name: 'First' };
            const obj2 = { id: 2, name: 'Second' };
            const obj_control = new FormControl<object[]>([obj1, obj2]);

            removeChipItem(obj_control as any, obj1);

            expect(obj_control.value).toEqual([obj2]);
        });
    });
});
