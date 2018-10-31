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
import { MockTriggersBackend } from './backend/triggers.mock';
import { MockModulesBackend } from './backend/modules.mock';
import { MockSystemsBackend } from './backend/systems.mock';
import { MockDomainsBackend } from './backend/domains.mock';
import { MockApplicationsBackend } from './backend/applications.mock';
import { MockAuthSourcesBackend } from './backend/auth-sources.mock';
import { MockSystemTriggersBackend } from './backend/systems-triggers.mock';
import { MockNodesBackend } from './backend/nodes.mock';
import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';

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
        // Load engine domain
        this.model.backend.domains = new MockDomainsBackend(this.model);
        this.model.backend.domains.listen((dstate) => {
            if (!dstate) { return; }
            // Load edge nodes
            this.model.backend.nodes = new MockNodesBackend(this.model);
            this.model.backend.nodes.listen((nstate) => {
                if (!nstate) { return; }
                this.update(this.model.backend.nodes.data);
                // Load applications
                this.model.backend.applications = new MockApplicationsBackend(this.model);
                this.model.backend.applications.listen((astate) => {
                    if (!astate) { return; }
                    this.update(this.model.backend.applications.data);
                });
                // Load auth sources
                this.model.backend.authsources = new MockAuthSourcesBackend(this.model);
                this.model.backend.authsources.listen((asstate) => {
                    if (!asstate) { return; }
                    this.update(this.model.backend.authsources.data);
                });
                // Load users
                this.model.backend.users = new MockUsersBackend(this.model);
                this.model.backend.users.listen((ustate) => {
                    if (!ustate) { return; }
                    this.update(this.model.backend.users.data);
                    this.model.backend.zones = new MockZonesBackend(this.model);
                    this.model.backend.zones.listen((zstate) => {
                        if (!zstate) { return; }
                        this.update(this.model.backend.zones.data);

                        this.model.backend.systems = new MockSystemsBackend(this.model);
                        this.model.backend.systems.listen((sysstate) => {
                            if (!sysstate) { return; }
                            this.update(this.model.backend.systems.data);

                            this.model.backend.triggers = new MockTriggersBackend(this.model);
                            this.model.backend.triggers.listen((tstate) => {
                                if (!tstate) { return; }
                                this.update(this.model.backend.triggers.data);
                                // Load system triggers
                                this.model.backend.system_triggers = new MockSystemTriggersBackend(this.model);
                                this.model.backend.system_triggers.listen((astate) => {
                                    if (!astate) { return; }
                                    this.update(this.model.backend.system_triggers.data);
                                });
                            });

                            this.model.backend.drivers = new MockDriversBackend(this.model);
                            this.model.backend.drivers.listen((depstate) => {
                                if (!depstate) { return; }
                                this.update(this.model.backend.drivers.data);
                                this.model.backend.modules = new MockModulesBackend(this.model);
                                this.model.backend.modules.listen((mstate) => {
                                    if (!mstate) { return; }
                                    this.update(this.model.backend.modules.data);
                                    this.model.loaded = true;
                                    this.loadSearch();
                                });
                            });
                        });
                    });
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

    private loadSearch() {
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/search`, null, (event) => {
            if (event.fragment.q) {
                return {
                    systems: this.model.backend.systems.search(this.model.systems, event.fragment),
                    triggers: this.model.backend.triggers.search(this.model.triggers, event.fragment),
                    modules: this.model.backend.modules.search(this.model.modules, event.fragment),
                    zones: this.model.backend.zones.search(this.model.zones, event.fragment),
                    users: this.model.backend.users.search(this.model.users, event.fragment)
                };
            }
        });
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
