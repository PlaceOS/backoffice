/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-02 20:25:07
 */

import { MockHttpRequestHandlerOptions } from '@acaprojects/ts-composer';

import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';

export class MockUsersBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
    }

    protected load() {
        this.model.log('USERS', 'Loading mock data for users...');
        this.loadUsers();
    }

    private loadUsers() {
        this.model.users = [];
        const count = Math.ceil(Math.floor(Math.random() * 200 + 50) * this.model.scale);
        for (let i = 0; i < count; i++) {
            const firstName: string = faker.name.firstName();
            const lastName: string = faker.name.lastName();
            this.model.users.push({
                department: `${faker.company.companyName()}`,
                phone: Math.floor(Math.random() * 8999 + 1000).toString(),
                email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${this.model.domain}`,
                name: `${firstName} ${lastName}`,
                id: `user-${Math.floor(Math.random() * 899999 + 100000).toString()}`,
                avatar_url: '',
            });
        }
            // Add predefined users
        for (const name of this.model.predefined_users) {
            const split = name.split(' ');
            this.model.users.push({
                department: `${faker.company.companyName()}`,
                // phone: Math.floor(Math.random() * 8999 + 1000).toString(),
                email: `${split[0].toLowerCase()}.${split[1].toLowerCase()}@${this.model.domain}`,
                name,
                id: `user-${Math.floor(Math.random() * 899999 + 100000).toString()}`,
                avatar_url: '',
                organisation_id: 12,
                organisation_name: 'ACA'
            });
        }
        this.model.users.push({
            id: 'current',
            name: 'ACA Test Robot',
            avatar_url: '',
            email: 'robot@acaprojects.com'
        })
        this.model.users.sort((a, b) => a.name.localeCompare(b.name));
        this.setupBasicHandlers('api/engine/v2/users', this.model.users, 'user');
        this.state.next(true);
    }

}