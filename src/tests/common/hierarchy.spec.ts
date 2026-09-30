import { describe, expect, it, vi } from 'vitest';
import { HierarchyItem, subtreeFilter } from '../../app/common/hierarchy';

// campus -> building -> level-1 -> room-1, and campus -> other
const TREE: Record<string, HierarchyItem> = {
    campus: { id: 'campus', parent_id: '' },
    building: { id: 'building', parent_id: 'campus' },
    'level-1': { id: 'level-1', parent_id: 'building' },
    'room-1': { id: 'room-1', parent_id: 'level-1' },
    other: { id: 'other', parent_id: 'campus' },
};

describe('subtreeFilter', () => {
    it('removes the root and its descendants', async () => {
        const load = vi.fn(async (id: string) => TREE[id]);
        const exclude = subtreeFilter(load);
        const items = ['campus', 'building', 'room-1', 'other'].map(
            (id) => TREE[id],
        );
        const result = await exclude(items, 'building');
        expect(result.map(({ id }) => id)).toEqual(['campus', 'other']);
    });

    it('loads each unknown ancestor once', async () => {
        const load = vi.fn(async (id: string) => TREE[id]);
        const exclude = subtreeFilter(load);
        await exclude([TREE['room-1']], 'other');
        await exclude([TREE['room-1']], 'building');
        expect(load.mock.calls.map(([id]) => id)).toEqual([
            'level-1',
            'building',
            'campus',
        ]);
    });

    it('keeps items whose ancestors fail to load', async () => {
        const exclude = subtreeFilter(() => Promise.reject(new Error('403')));
        const result = await exclude([TREE['room-1']], 'building');
        expect(result).toEqual([TREE['room-1']]);
    });

    it('stops at a parent cycle in bad data', async () => {
        const load = async (id: string) => ({
            id,
            parent_id: id === 'a' ? 'b' : 'a',
        });
        const result = await subtreeFilter(load)(
            [{ id: 'x', parent_id: 'a' }],
            'root',
        );
        expect(result).toHaveLength(1);
    });
});
