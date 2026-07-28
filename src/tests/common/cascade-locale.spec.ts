import { describe, expect, it, vi } from 'vitest';

vi.mock('@placeos/ts-client', () => ({
    showMetadata: vi.fn(() => ({
        toPromise: () => Promise.resolve({ details: {} }),
    })),
}));

vi.mock('../../app/common/general', () => ({ log: vi.fn() }));

import { LocaleService } from '../../app/common/locale.service';

/**
 * The cascade summary lines are the only place in the app that leans on the
 * locale service's plural lookup (`KEY_<count>` then `KEY_N` then `KEY`), so
 * the singular and plural wording is pinned here against the real locale file.
 */
describe('cascade locale strings', () => {
    const locale = new LocaleService();
    const get = (key: string, count: number) =>
        locale.get(key, { count }, count);

    it.each([
        ['CASCADE.SCOPE_ZONES', 1, 'Scope: this zone and 1 zone beneath it.'],
        ['CASCADE.SCOPE_ZONES', 4, 'Scope: this zone and 4 zones beneath it.'],
        ['CASCADE.REMOVE_SYSTEMS', 1, '1 system left without a zone'],
        ['CASCADE.REMOVE_SYSTEMS', 2, '2 systems left without a zone'],
        [
            'CASCADE.KEEP_SYSTEMS',
            1,
            '1 system also belongs to a zone outside this one and will be kept.',
        ],
        [
            'CASCADE.KEEP_SYSTEMS',
            3,
            '3 systems also belong to zones outside this one and will be kept.',
        ],
        ['CASCADE.REMOVE_APPLICATIONS', 1, '1 OAuth application'],
        ['CASCADE.REMOVE_APPLICATIONS', 2, '2 OAuth applications'],
        ['CASCADE.SUCCESS', 1, 'Removed 1 associated resource.'],
        ['CASCADE.SUCCESS', 5, 'Removed 5 associated resources.'],
    ])('renders %s for a count of %i', (key, count, expected) => {
        expect(get(key as string, count as number)).toBe(expected);
    });

    it('renders the module line for both counts', () => {
        expect(get('CASCADE.REMOVE_MODULES', 1)).toContain('1 module in');
        expect(get('CASCADE.REMOVE_MODULES', 4)).toContain('4 modules in');
    });

    it('renders the tenant line for both counts', () => {
        expect(get('CASCADE.REMOVE_TENANTS', 1)).toContain(
            '1 staff API tenant,',
        );
        expect(get('CASCADE.REMOVE_TENANTS', 2)).toContain(
            '2 staff API tenants,',
        );
    });

    it('resolves the option labels used on the delete confirmation', () => {
        expect(locale.get('ZONES.DELETE_CASCADE')).toBe(
            'Also delete associated resources',
        );
        expect(locale.get('DOMAINS.DELETE_CASCADE')).toBe(
            'Also delete associated resources',
        );
        expect(locale.get('ZONES.DELETE_CASCADE_DESC')).not.toBe(
            'ZONES.DELETE_CASCADE_DESC',
        );
        expect(locale.get('DOMAINS.DELETE_CASCADE_DESC')).not.toBe(
            'DOMAINS.DELETE_CASCADE_DESC',
        );
    });

    it('no longer claims that deleting a zone removes its systems', () => {
        const message = locale.get('ZONES.DELETE_MSG');
        expect(message).toContain('are kept unless you also remove');
        expect(message).not.toContain('remove systems without another zone');
    });
});
