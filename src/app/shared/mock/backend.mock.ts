/*
* @Author: alex.sorafumo
* @Date:   2017-04-03 15:50:46
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-09-02 20:25:40
*/

import * as faker from 'faker';

import { MockUsersBackend } from './backend/users.mock';
import { MockZonesBackend } from './backend/zones.mock';
import { MockDriversBackend } from './backend/driver.mock';

export class MockBackend {
    public model: any = {
        api_route: 'control/api',
        domain: 'acaprojects.com',
        DESK_OFFSET: 0,
        city: 'Sydney',
        predefined_users: [
            'Alex Sorafumo', 'Ben Hoad', 'Jonathan McFarlane',
            'Candy Russo', 'Cameron Reeves', 'Kim Burgess',
            'William Le', 'Steph Georgiadis', 'Shane Boseley',
            'Matt Mathers'
        ],
        backend: {},
    };

    private desk_id_pool: any[] = [];

    constructor() {
        this.log('MOCK', 'Initialising Requests');
        this.model.log = (type: string, msg: string, args?: any, out: string = 'debug', color?: string) => {
            this.log(type, msg, args, out, color);
        };
        faker.seed(999);

        this.model.backend.users = new MockUsersBackend(this.model);
        this.model.backend.users.listen((ustate) => {
            if (!ustate) { return; }
            this.update(this.model.backend.users.data);
            this.model.backend.zones = new MockZonesBackend(this.model);
            this.model.backend.zones.listen((zstate) => {
                if (!zstate) { return; }
                this.update(this.model.backend.zones.data);
                this.model.backend.drivers = new MockDriversBackend(this.model);
                this.model.backend.drivers.listen((depstate) => {
                    if (!depstate) { return; }
                    this.update(this.model.backend.drivers.data);
                    this.model.loaded = true;
                });
            });
        });
    }

    public get is_loaded() {
        return this.model.loaded;
    }

    public log(type: string, msg: string, args?: any, out: string = 'debug', color?: string) {
        const clr = color ? color : '#009688';
        const COLOURS = ['color: #6A1B9A', `color:${clr}`, 'color:rgba(#000, 0.87)'];
        if (args) {
            if (this.hasColours()) {
                console[out](`%c[BACKEND]%c[${type}] %c${msg}`, ...COLOURS, args);
            } else {
                console[out](`[BACKEND][${type}] ${msg}`, args);
            }
        } else {
            if (this.hasColours()) {
                console[out](`%c[BACKEND]%c[${type}] %c${msg}`, ...COLOURS);
            } else {
                console[out](`[BACKEND][${type}] ${msg}`);
            }
        }
    }

    private hasColours() {
        const doc = document as any;
        return !(doc.documentMode || /Edge/.test(navigator.userAgent));
    }

    private update(model: any) {
        for (const k in model) {
            if (model.hasOwnProperty(k)) {
                this.model[k] = model[k];
            }
        }
    }
}

const win = window as any;
win.backend = new MockBackend();
