/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-08-12 21:12:49
 */

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockUsersBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
        MOCK_REQ_HANDLER.unregister('/control/api/users/current');
    }

    protected load() {
        this.model.log('USERS', 'Loading mock data for users...');
        this.loadUsers();
        this.loadUser().then(() => {
            this.state.next(true);
            MOCK_REQ_HANDLER.register(`/${this.model.api_route}/people/:user`, this.model.user_loc, (event) => {
                if (event.params.user) {
                    const id = event.params.user;
                    if (event.data && event.data[id]) {
                        return [event.data[id]];
                    }
                }
                return null;
            });
        });
    }

    private loadUser(tries: number = 0) {
        return new Promise((resolve) => {
            if (tries > 10) {
                return resolve();
            }
            if (localStorage) {
                let user: any = null;
                const email = localStorage.getItem('STAFF.user_email');
                if (email && this.model.users) {
                    for (const usr of this.model.users) {
                        if (email === usr.email) { user = usr; }
                    }
                    if (!user) {
                        return this.loadBasicUser().then(() => resolve());
                    }
                } else {
                    setTimeout(() => this.loadUser(++tries).then(() => resolve()), 300);
                }
            }
            this.loadBasicUser().then(() => {
                resolve();
            });
        });
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
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/users`, this.model.users, (e) => {
            if (e.fragment.q) {
                const q = e.fragment.q.toLowerCase();
                const list = [];
                for (const u of e.data) {
                    if (u.email.toLowerCase().indexOf(q) >= 0 || u.name.toLowerCase().indexOf(q) >= 0) {
                        list.push(u);
                        if (e.fragment.limit && list.length >= +e.fragment.limit) {
                            break;
                        }
                    }
                }
                return list;
            } else {
                return e.data;
            }
        });

        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/users/:email`, this.model.users, (e) => {
            if (e.params.email) {
                for (const user of e.data) {
                    if (user.email.toLowerCase().indexOf(e.params.email.toLowerCase())) {
                        user.phone = Math.floor(Math.random() * 8999 + 1000).toString();
                        return user;
                    }
                }
            }
            return null;
        });
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
