import { PlaceDomain, authority, queryDomains } from '@placeos/ts-client';
import { describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';

vi.mock('@placeos/ts-client', () => ({
    authority: vi.fn(),
    queryDomains: vi.fn(),
}));

describe('AdminDataService', () => {
    it('keeps a domain picked while the domain list is loading', async () => {
        type DomainPage = Awaited<ReturnType<typeof queryDomains>>;
        const current = { id: 'domain-1' } as PlaceDomain;
        const picked = { id: 'domain-2' } as PlaceDomain;
        let resolveDomains: (page: DomainPage) => void;
        vi.mocked(queryDomains).mockReturnValue(
            new Promise<DomainPage>((resolve) => (resolveDomains = resolve)),
        );
        vi.mocked(authority).mockReturnValue({ id: 'domain-1' } as ReturnType<
            typeof authority
        >);
        const service = new AdminDataService();

        const result = service.selectDefaultDomain('zones');
        service.setDomain('zones', picked);
        resolveDomains({ data: [current, picked] } as DomainPage);

        expect(await result).toBe(picked);
        expect(service.selectedDomain('zones')()).toBe(picked);
    });
});
