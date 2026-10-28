import type { MatChipEditedEvent } from '@angular/material/chips';
import { describe, expect, it } from 'vitest';
import { editSignalChipItem, fieldLabel } from '../../app/common/forms';

describe('fieldLabel', () => {
    it('turns form keys into readable names', () => {
        expect(fieldLabel('zone')).toBe('Zone');
        expect(fieldLabel('service_account')).toBe('Service account');
    });
});

describe('editSignalChipItem', () => {
    const items = ['a', 'b', 'c'];
    const edited = (value: string) => ({ value }) as MatChipEditedEvent;

    it('replaces the item in place with the trimmed value', () => {
        expect(editSignalChipItem(items, 'b', edited(' x '))).toEqual([
            'a',
            'x',
            'c',
        ]);
    });

    it('removes the item when the value is empty', () => {
        expect(editSignalChipItem(items, 'b', edited('  '))).toEqual([
            'a',
            'c',
        ]);
    });

    it('merges the item into an existing duplicate', () => {
        expect(editSignalChipItem(items, 'b', edited('c'))).toEqual(['a', 'c']);
    });
});
