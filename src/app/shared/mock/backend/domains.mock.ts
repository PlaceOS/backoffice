
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockDomainsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('DOMAINS', 'Loading mock data for domain...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 5 + 2) * this.model.scale);
        const zones = this.model.zones || [];
        for (let i = 0; i < count; i++) {
            const id = `sgrp-${Utils.padZero(i, 4)}`;
            item_list.push({
                id,
                created_at: moment().add(Math.floor(Math.random() * 1200 + 5), 'm').unix(),
                description: null,
                dom: faker.internet.domainName(),
                login_url: '/login?continue={{url}}',
                logout_url: '/',
                internals: {},
                config: {},
                name: `Test Domain ${i + 1}`
            });
        }
        this.model.domains = item_list;
        this.setupBasicHandlers('/auth/api/domains', this.model.domains, 'sgrp');
        this.state.next(true);
    }
}
