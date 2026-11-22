import { type Domain, domains } from '@placeos/ts-client';
import { mockPage } from '@placeos/ts-client/compat';
import { describe, expect, it, vi } from 'vitest';
import { AdminDataService } from '../../app/admin/admin-data.service';
import { authority } from '../../app/common/placeos';

vi.mock('@placeos/ts-client', { spy: true });
vi.mock('../../app/common/placeos', () => ({ authority: vi.fn() }));

describe('AdminDataService', () => {
    it('keeps a domain picked while the domain list is loading', async () => {
        type DomainPage = Awaited<ReturnType<typeof domains.query>>;
        const current = { id: 'domain-1' } as Domain;
        const picked = { id: 'domain-2' } as Domain;
        let resolveDomains: (page: DomainPage) => void;
        vi.mocked(domains.query).mockImplementation(
            () =>
                new Promise<DomainPage>(
                    (resolve) => (resolveDomains = resolve),
                ),
        );
        vi.mocked(authority).mockReturnValue({ id: 'domain-1' } as ReturnType<
            typeof authority
        >);
        const service = new AdminDataService();

        const result = service.selectDefaultDomain('zones');
        service.setDomain('zones', picked);
        resolveDomains(mockPage({ data: [current, picked] }));

        expect(await result).toBe(picked);
        expect(service.selectedDomain('zones')()).toBe(picked);
    });
});
