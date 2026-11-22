import type { Page } from '@placeos/ts-client/compat';
import { describe, expect, it } from 'vitest';
import { collectPages } from '../../app/common/types';

/** A page of `data`, whose `next` gives `next_page` */
function page(
    data: readonly number[],
    next_page?: () => Promise<Page<readonly number[]>> | null,
): Page<readonly number[]> {
    return { data, total: 0, next_offset: null, next: next_page ?? null };
}

describe('collectPages', () => {
    it('joins every page', async () => {
        const last = page([3]);
        const first = page([1, 2], () => Promise.resolve(last));
        await expect(collectPages(Promise.resolve(first))).resolves.toEqual([
            1, 2, 3,
        ]);
    });

    it('fails when the next page does not move, so a partial list does not look complete', async () => {
        const first = page([1], () => null);
        await expect(collectPages(Promise.resolve(first))).rejects.toThrow(
            'did not move',
        );
    });

    it('fails at the page limit', async () => {
        const endless = (): Promise<Page<readonly number[]>> =>
            Promise.resolve(page([1], endless));
        await expect(collectPages(endless(), 3)).rejects.toThrow(
            'did not complete within 3 pages',
        );
    });
});
