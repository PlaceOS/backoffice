/*
* @Author: alex.sorafumo
* @Date:   2017-04-03 15:50:46
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-03-21 13:14:23
*/

import * as faker from 'faker';

import { MockBuildingsBackend } from './backend/buildings.mock';
import { MockUsersBackend } from './backend/users.mock';
import { MockRoomsBackend } from './backend/rooms.mock';
import { MockBookingsBackend } from './backend/bookings.mock';
import { MockCateringBackend } from './backend/catering.mock';

export class MockBackend {
    public model: any = {
        api_route: 'api/staff',
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
            // Load Buildings
        this.model.backend.buildings = new MockBuildingsBackend(this.model);
        this.model.backend.buildings.listen((state) => {
            if (!state) { return; }
            this.update(this.model.backend.buildings.data);
                // Load Desks
            // this.model.backend.desks = new MockDesksBackend(this.model);
            // this.model.backend.desks.listen((dstate) => {
            //     this.update(this.model.backend.desks.data);
            //     if (!dstate) { return; }
                    // Load Users
                this.model.backend.users = new MockUsersBackend(this.model);
                this.model.backend.users.listen((ustate) => {
                    if (!ustate) { return; }
                    this.update(this.model.backend.users.data);
                        // Load rooms
                    this.model.backend.rooms = new MockRoomsBackend(this.model);
                    this.model.backend.rooms.listen((rstate) => {
                        if (!rstate) { return; }
                        this.update(this.model.backend.rooms.data);
                        this.model.backend.bookings = new MockBookingsBackend(this.model);
                        this.model.backend.catering = new MockCateringBackend(this.model);
                        this.model.loaded = true;
                    });
                });
            // });
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
