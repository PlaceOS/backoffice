/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-06-18 15:57:30
 */

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockUsersBackend extends BaseMockBackend {

    constructor(protected model) {
        super(model);
        MOCK_REQ_HANDLER.unregister('/control/api/users/current');
    }

    protected load() {
        this.loadVisitors();
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
        for (const user of this.model.users) {
            this.generateLocationFor(user);
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
                this.generateLocationFor(data, true);
                this.model.user = data;
                setTimeout(() => {
                    MOCK_REQ_HANDLER.register('/control/api/users/current', data);
                    resolve();
                }, 20);
            });
        }
        return this.model.user_promise;
    }

    public loadVisitors() {
        this.model.visitors = [];
        const count = Math.floor(Math.random() * 10 + 2);
        const time = moment().seconds(0).milliseconds(0).add(10, 'm');
        for (let i = 0; i < count; i++) {
            const peeps = Math.floor(Math.random() * 3 + 1);
            const people = [];
            for (let k = 0; k < peeps; k++) {
                const name = faker.name.firstName() + ' ' + faker.name.lastName();
                people.push({
                    name,
                    organisation: {
                        id: 12,
                        name: 'ACA'
                    },
                    email: `${name.split(' ').join('.').toLowerCase()}@${this.model.domain}`
                });
            }
            const visitor = {
                name: `Group ${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[i]}`,
                group: peeps > 1,
                visitors: people,
                date: time.valueOf()
            };
            this.model.visitors.push(visitor);
            time.add(Math.floor(Math.random() * 5) * 15 + 15, 'm');
        }
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/visitors`, this.model.visitors);
    }

    private generateLocationFor(user: any, force: boolean = false) {
        if (!this.model.user_loc) { this.model.user_loc = {}; }
        const id = user.id || user.StaffGUID || user.email;
        if (!(window as any).mock) { (window as any).mock = {}; }
        if (!(window as any).mock.located) { (window as any).mock.located = { wireless: [], fixed: [] }; }
        if (user && id) {
            if ((Math.floor(Math.random() * 289346923)) % 5 === 0 || force) {
                const fixed = (Math.floor(Math.random() * 289346923) % 4) === 0;
                const loc: any = {};
                loc.building = 'zone_bld-01';
                if (fixed) {
                    loc.at_desk = true;
                    if (this.model.desk_id_pool) {
                        const desk = this.model.desk_id_pool[Math.floor(Math.random() * this.model.desk_id_pool.length)];
                        loc.level = desk.level;
                        loc.desk_id = desk.id;
                        loc.building = desk.building;
                    }
                    (window as any).mock.located.fixed.push(user.name);
                } else {
                    loc.x = Math.floor(Math.random() * 6000 + 2000);
                    loc.x_max = 10000;
                    loc.y = Math.floor(Math.random() * 4000 + 3000);
                    loc.y_max = 10000;
                    const level = this.model.bld_data['zone_bld-01'].levels[Math.floor(Math.random() * this.model.bld_data['zone_bld-01'].levels.length)];
                    loc.level = level.level_id;
                    (window as any).mock.located.wireless.push(user.name);
                }
                this.model.user_loc[id] = loc;
            }
        }
    }
}
