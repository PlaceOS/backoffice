
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';
import { Utils } from '../../utility.class';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockApplicationsBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('APPLICATIONS', 'Loading mock data for applications...');
        this.loadList();
    }

    private loadList() {
        const item_list = [];
        const count = Math.ceil(Math.floor(Math.random() * 24 + 5) * this.model.scale);
        const domains = this.model.domains || [];
        for (let i = 0; i < count; i++) {
            const domain = domains.length > 0 ? domains[Math.floor(Math.random() * domains.length)] : { id: 'sgrp-test', name: 'Domain Test' };
            const id = `${Utils.padZero(i, 4)}`;
            item_list.push({
                id,
                name: faker.name.jobDescriptor(),
                owner_id: domain.id,
                redirect_uri: `http://${domain.dom}/${faker.name.jobTitle().toLowerCase()}/oath-resp.html`,
                scopes: '',
                secret: '173b2c8f96d4a64608d63e0ac2e7e0e9806c4dd0f7ec0ef8bd65526eeee5f3c9',
                skip_authorization: Math.floor(Math.random() * 1263811) % 2 === 0,
                uid: id,
                created_at: moment().add(Math.floor(Math.random() * 1200 + 5), 'm').unix(),
            });
        }
        this.model.applications = item_list;
        MOCK_REQ_HANDLER.register('/auth/api/applications', this.model.applications, (event) => {
            if (!event.data) { event.data = []; }
            return this.search(event.data, event.fragment);
        });
        this.state.next(true);
    }

    public search(data, fragment) {
        if (fragment.owner) {
            data = data.filter((a) => a.owner_id === fragment.owner);
        }
        return super.search(data, fragment);
    }
}
