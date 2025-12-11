import { describe, expect, it } from 'vitest';
import { FormatListPipe } from '../../../app/ui/pipes/format-list.pipe';

describe('FormatListPipe', () => {
    let pipe: FormatListPipe;

    beforeEach(() => {
        pipe = new FormatListPipe();
    });

    describe('transform', () => {
        it('should join array elements with newlines', () => {
            const result = pipe.transform(['item1', 'item2', 'item3']);
            expect(result).toBe('item1\nitem2\nitem3');
        });

        it('should return single item without newline', () => {
            const result = pipe.transform(['single']);
            expect(result).toBe('single');
        });

        it('should return empty string for empty array', () => {
            const result = pipe.transform([]);
            expect(result).toBe('');
        });

        it('should handle array with empty strings', () => {
            const result = pipe.transform(['', 'item', '']);
            expect(result).toBe('\nitem\n');
        });

        it('should handle array with special characters', () => {
            const result = pipe.transform(['line\twith\ttabs', 'another line']);
            expect(result).toBe('line\twith\ttabs\nanother line');
        });
    });
});
