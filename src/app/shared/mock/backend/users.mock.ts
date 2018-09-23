/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-02 20:25:07
 */

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as moment from 'moment';

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
        for (let i = 0; i < 200; i++) {
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
        this.model.users.sort((a, b) => a.name.localeCompare(b.name));
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/users`, this.model.users, (event) => {
            if (event.fragment && event.fragment.offset) {
                const start = Math.min(event.data.length, +(event.fragment.offset));
                const end = Math.min(event.data.length, +(event.fragment.offset) + 20);
                return { results: event.data.slice(start, end), total: event.data.length };
            } else {
                return { results: event.data.slice(0, 20), total: event.data.length };
            }
        });

        const user_index = Math.floor(Math.random() * this.model.users.length);

        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/users/:id`, this.model.users, (event) => {
            if (event && event.params && event.params.id) {
                if (event.params.id === 'current') {
                    return event.data[user_index];
                }
                for (const item of event.data) {
                    if (item.id === event.params.id) {
                        return item;
                    }
                }
            }
            return null;
        });
        this.state.next(true);
    }

    private loadBasicUser(user?: any, tries: number = 0) {
        if (!this.model.user_promise) {
            this.model.user_promise = new Promise((resolve) => {
                if (tries > 10) {
                    this.model.user_promise = null;
                    return resolve();
                }
                if (!user && this.model && this.model.users) {
                    user = this.model.users[
                        Math.floor(Math.random() * this.model.users.length)
                    ];
                } else if (!user && (!this.model ||  !this.model.users || this.model.users.length <= 0)) {
                    return setTimeout(() => {
                        this.model.user_promise = null;
                        this.loadBasicUser(user, ++tries).then(() => resolve());
                    }, 300);
                }
                const data = {
                    id: user.StaffGUID || user.id,
                    name: user.StaffName || user.name,
                    win_id: user.StaffWindowID || user.email,
                    email: user.StaffEmailID || user.email,
                    image: `/assets/users/${user.StaffGUID || user.id}.png`,
                };
                this.model.user = data;
                setTimeout(() => {
                    MOCK_REQ_HANDLER.register('/control/api/users/current', data);
                    resolve();
                }, 20);
            });
        }
        return this.model.user_promise;
    }

}
