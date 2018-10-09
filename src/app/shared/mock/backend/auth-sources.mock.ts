
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

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
        const count = Math.floor(Math.random() * 24 + 5);
        const domains = this.model.domains || [];
        for (let i = 0; i < count; i++) {
            const domain = domains.length > 0 ? domains[Math.floor(Math.random() * domains.length)] : { id: 'sgrp-test', name: 'Domain Test' };
            const type = types[Math.floor(Math.random() * types.length)];
            const id = `${type}-${Utils.padZero(i, 4)}`;
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
                password: `${Utils.padZero(Math.floor(Math.random() * 99999999), 8)}`,
                port: Math.floor(Math.random() * 32768 + 16383),
                created_at: moment().add(Math.floor(Math.random() * 1200 + 5), 'm').unix(),
            });
        }
        this.model.auth_sources = item_list;
        MOCK_REQ_HANDLER.register('/auth/api/authsources', this.model.auth_sources, (event) => {
            if (!event.data) { event.data = []; }
            let data = event.data;
            if (event.fragment.authority_id) {
                data = event.data.filter((a) => a.authority_id === event.fragment.authority_id);
            }
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(data.length, +(event.fragment.offset));
                const end = Math.min(data.length, +(event.fragment.offset) + 20);
                return { results: data.slice(start, end), total: data.length };
            } else {
                return { results: data.slice(0, 20), total: data.length };
            }
        });
        this.state.next(true);
    }
}
