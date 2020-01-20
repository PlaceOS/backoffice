
import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as dayjs from 'dayjs';
import { padZero } from '../../utilities/general.utilities';

export class MockAuthSourcesBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('AUTH SOURCES', 'Loading mock data for authentication sources...');
        this.loadList();
    }

    private loadList() {
        const types = ['ldap', 'ldaps', 'adfs', 'oauth2', 'saml2'];
        const item_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 24 + 5) * this.model.scale);
        const domains = this.model.domains || [];
        for (let i = 0; i < count; i++) {
            const domain = domains.length > 0 ? domains[Math.floor(Math.random() * domains.length)] : { id: 'sgrp-test', name: 'Domain Test' };
            const type = types[Math.floor(Math.random() * types.length)];
            const id = `${type}-${padZero(i, 4)}`;
            item_list.push({
                id,
                uid: id,
                authority_id: domain.id,
                type,
                name: faker.name.jobType(),
                auth_method: 'c',
                base: 'a',
                bind_dn: 'd',
                filter: 'e',
                host: faker.internet.domainName(),
                password: `${padZero(Math.floor(Math.random() * 99999999), 8)}`,
                port: Math.floor(Math.random() * 32768 + 16383),
                created_at: dayjs().add(Math.floor(Math.random() * 1200 + 5), 'm').unix(),
            });
        }
        this.model.auth_sources = item_list;
        this.setupBasicHandlers('api/engine/v2/authsources', this.model.auth_sources, 'auth');
        this.state.next(true);
    }

    public search(data, fragment) {
        if (fragment.authority_id) {
            data = data.filter((a) => a.authority_id === fragment.authority_id);
        }
        return super.search(data, fragment);
    }
}
