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
import { MockStatsBackend } from './backend/stats.mock';
import { MockTestsBackend } from './backend/tests.mock';
import { MockDiscoveryBackend } from './backend/discovery.mock';
import { MockHttpRequestHandlerOptions } from '@acaprojects/ts-composer';

export class MockBackend {
    public model: any = {
        api_route: 'api/engine/v1',
        domain: 'acaprojects.com',
        DESK_OFFSET: 0,
        scale: 1,
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
        if (!window.control) {
            window.control = {};
        }
        if (!window.control.handlers) {
            window.control.handlers = [];
        }
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
                                this.model.backend.stats = new MockStatsBackend(this.model);
                                this.model.backend.stats.listen((stat_state) => {
                                    if (!stat_state) { return; }
                                    this.update(this.model.backend.stats.data);
                                    this.model.loaded = true;
                                });
                                this.model.backend.tests = new MockTestsBackend(this.model);
                                this.model.backend.tests.listen((tests_state) => {
                                    if (!tests_state) { return; }
                                    this.update(this.model.backend.tests.data);
                                    this.model.loaded = true;
                                });
                                this.model.backend.discovery = new MockDiscoveryBackend(this.model);
                                this.model.backend.discovery.listen((discovery_state) => {
                                    if (!discovery_state) { return; }
                                    this.update(this.model.backend.discovery.data);
                                    this.model.loaded = true;
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
        const handler: MockHttpRequestHandlerOptions = {
            path: `/${this.model.api_route}/search`,
            metadata: {},
            method: 'GET',
            callback: (event) => {
                if (event.query_params.q) {
                    let limit = 20;
                    if (event.query_params.offset) { limit += +event.query_params.offset; }
                    event.query_params.limit = limit as any;
                    const fragment = JSON.parse(JSON.stringify(event.query_params));
                    fragment.offset = 0;
                    let total = 0;
                    const results: any[] = [];
                    let data = [];
                    if (this.model.backend.systems) {
                        const list = this.model.backend.systems.search(this.model.systems, fragment);
                        list.results.forEach(element => element.type = 'system');
                        total += list.total;
                        data = data.concat(list.results);
                    }
                    if (this.model.backend.triggers) {
                        const list = this.model.backend.triggers.search(this.model.triggers, fragment);
                        list.results.forEach(element => element.type = 'trigger');
                        total += list.total;
                        data = data.concat(list.results);
                    }
                    if (this.model.backend.modules) {
                        const list = this.model.backend.modules.search(this.model.modules, fragment);
                        list.results.forEach(element => element.type = 'device');
                        total += list.total;
                        data = data.concat(list.results);
                    }
                    if (this.model.backend.zones) {
                        const list = this.model.backend.zones.search(this.model.zones, fragment);
                        list.results.forEach(element => element.type = 'zone');
                        total += list.total;
                        data = data.concat(list.results);
                    }
                    if (this.model.backend.users) {
                        const list = this.model.backend.users.search(this.model.users, fragment);
                        list.results.forEach(element => element.type = 'user');
                        total += list.total;
                        data = data.concat(list.results);
                    }
                    if (event.query_params && event.query_params.offset) {
                        const start = Math.min(data.length, +(event.query_params.offset));
                        const end = Math.min(data.length, +(event.query_params.offset) + 20);
                        return { results: data.slice(start, end), total };
                    } else {
                        return { results: data.slice(0, 20), total };
                    }
                }
            }
        };
        window.control.handlers.push(handler);
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
