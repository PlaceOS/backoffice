import { CommsService } from '@acaprojects/ngx-composer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as moment from 'moment';
import { Utils } from '../../shared/utility.class';

export interface IUser {
    id: string;
    name: string;
    email: string;
    win_id?: string;
    type?: 'partner' | 'internal' | 'external';
    role?: string;
    state?: string;
    location?: ILocation | string | {};
    image: string;
    phone?: string;
    staff_code?: string;
    organisation_id?: string;
    organisation_name?: string;
    b_unit?: string;
}

export interface ILocation {
    x?: number;
    y?: number;
    map_id?: string;
    building: string | any;
    level: string | any;
    fixed: boolean;
    loc_id?: string;
    display?: any;
}

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public parent: any = null;

    private model: any = {};
    // private timers: any = {};
    private promises: any = {};
    private subjects: any = {};
    private observers: any = {};

    constructor(private http: CommsService, private http_unauth: HttpClient, private router: Router) {
        this.subjects.user_list = new BehaviorSubject<IUser[]>([]);
        this.observers.user_list = this.subjects.user_list.asObservable();
        this.subjects.user = new BehaviorSubject<IUser>(null);
        this.observers.user = this.subjects.user.asObservable();
        this.subjects.state = new BehaviorSubject('loading');
        this.observers.state = this.subjects.state.asObservable();
    }

    /**
     * Initialise service
     */
    public init() {
        if (!this.parent || !this.parent.Settings.setup || (this.parent.Settings.get('mock') && !(window as any).backend.is_loaded)) {
            return setTimeout(() => this.init(), 500);
        }
        this.loadActiveUser();
        if (!this.parent.Settings.get('app.people_min_char')) {
            this.loadUsers();
        }
    }

    /**
     * Get current user
     */
    public current() {
        return this.subjects.user ? this.subjects.user.getValue() : null;
    }

    /**
     * Get list of users
     */
    public list() {
        return this.subjects.user_list ? this.subjects.user_list.getValue() : [];
    }

    /**
     * Listen for changes to service property
     * @param name Name of the property. Possible values user_list, user, and state
     * @param next Callback for changes to property
     */
    public listen(name: string, next: (data: any) => void) {
        return this.subjects[name] ? this.observers[name].subscribe(next) : null;
    }

    /**
     * Get observable for property
     * @param name Name of the property. Possible values user_list, user, and state
     */
    public observer(name: string) {
        return this.subjects[name] ? this.observers[name] : null;
    }

    /**
     * Get state of the users credentials
     */
    public get state() {
        return this.subjects.state.getValue();
    }

    /**
     * Set state of the users credentials
     */
    public set state(value: string) {
        this.subjects.state.next(value);
    }

    /**
     * Login with given credentials
     * @param fields Key value pairs of post parameters
     */
    public login(fields: any = {}) {
        this.subjects.state.next('loading');
        const query = Utils.generateQueryString(fields);
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http_unauth.post('/auth/jwt/callback', query, { headers }).subscribe((res: any) => {
            if (res.status >= 200 && res.status < 400) {
                if (sessionStorage) {
                    const clientId = this.http.hash(`${location.origin}/oauth-resp.html`);
                    sessionStorage.setItem(`${clientId}_login`, 'true');
                }
                this.http.tryLogin();
            } else {
                this.subjects.state.next('invalid');
            }
            return;
        }, (err) => {
            if (err.status >= 400) {
                this.subjects.state.next('error');
            } else {
                if (sessionStorage) {
                    const clientId = this.http.hash(`${location.origin}/oauth-resp.html`);
                    sessionStorage.setItem(`${clientId}_login`, 'true');
                }
                this.http.tryLogin();
            }
        }, () => this.loadActiveUser());
    }


    /**
     * Get list of users in alphabetical order
     */
    public getUsers() {
        const list = this.subjects.user_list.getValue();
        const users = list.sort((a, b) => a.name.localeCompare(b.name));
        return users ? JSON.parse(JSON.stringify(users)) : [];
    }

    /**
     * Get user
     * @param id ID of user
     * @param mutable Get reference of user
     */
    public get(id: string, mutable: boolean = false) {
        const list = this.subjects.user_list.getValue();
        for (const usr of list) {
            if (usr.email === id || usr.id === id || usr.staff_code === id || usr.win_id === id) {
                return mutable ? usr : JSON.parse(JSON.stringify(usr));
            }
        }
        return null;
    }

    /**
     * Open modal to view user details
     * @param item User to view
     */
    public view(item: IUser) {
        if (this.parent) {
            this.parent.Overlay.openModal('user-details', { data: { user: item } })
                .then((inst: any) => inst.subscribe((event) => {
                    if (event.type === 'close') { event.close(); }
                }));
        }
    }

    /**
     * Open modal to create new user
     * @param next Callback for events on the modal
     */
    public new(next?: (event: any) => void) {
        if (this.parent) {
            this.parent.Overlay.openModal('user-details', { data: {} })
                .then((inst: any) => inst.subscribe((event) => {
                    if (event.type === 'close') { event.close(); }
                    if (next && next instanceof Function) {
                        next(event);
                    }
                }));
        }
    }

    /**
     * Add new user
     * @param user User data
     */
    public add(user: any) {
        return new Promise<any>((resolve, reject) => {
            const data: any = {
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                email: user.email,
                organisation: user.organisation,
                organisation_id: null,
            };
            if (user.organisation_id) {
                data.organisation_id = user.organisation_id;
            }
            const url = `${this.parent.api_endpoint}/users`;
            this.http.post(url, data).subscribe(() => null, (err) => {
                reject(err);
                this.parent.Analytics.event('Users', 'add_user_fail');
            }, () => {
                resolve();
                this.parent.Analytics.event('Users', 'added_user');
            });
        });
    }

    /**
     * Get location data for user
     * @param id ID of user to find
     * @param email Email of user to find
     */
    public location(id: string, email: string = id) {
        const key = `location|${id}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.parent.api_endpoint}/people/${id}?desk=${email}`;
                let place: any = null;
                this.http.get(url).subscribe((data) => place = data ? data[0] : {},
                    (err) => {
                        reject(err);
                        this.promises[key] = null;
                    },
                    () => {
                        if (!place || Object.keys(place).length <= 0) {
                            this.updateUserLocation(id, {});
                            reject('User not found');
                        } else {
                            const location: any = {
                                level: place.level,
                                building: place.building,
                                display: {},
                                fixed: true,
                            };
                            const bld = this.parent.Buildings.get(location.building);
                            if (bld) {
                                location.display.building = bld.name;
                                for (const level of bld.levels) {
                                    if (level.id === location.level) {
                                        location.display.level = level.name;
                                        break;
                                    }
                                }
                            }
                            if (place.x && place.y) {
                                location.fixed = false;
                                location.x = (10000 / place.x_max) * place.x;
                                location.y = (10000 / place.x_max) * place.y;
                            } else if (place.at_desk) {
                                location.map_id = `${place.desk_id}`;
                                const is_room = place.desk_id && place.desk_id.indexOf('area-') >= 0;
                                location.display.name = `${place.desk_id && !is_room ? 'Desk ' + place.desk_id.split('-')[1] : 'In their office'}`;
                                location.map_id = place.desk_id;
                            }
                            this.updateUserLocation(id, location);
                            if (this.current().id === id) {
                                this.parent.Analytics.event('Users', 'located_user');
                            }
                            resolve(location);
                        }
                        this.promises[key] = null;
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Store new location data for user
     * @param id ID of user
     * @param data New location data
     */
    public updateUserLocation(id, data) {
        const list = this.subjects.user_list.getValue();
        for (const user of list) {
            if (user.id === id) {
                user.location = data;
            }
        }
    }

    /**
     * Get a filtered list of users
     * @param filter Value to filter on
     * @param items List of users to filter. If not set it will user the global list
     * @param fields Fields to check for matches on each item
     */
    public getFilteredUsers(filter: string, items?: any[], fields: string[] = ['name', 'email']) {
        let users: any[];
            // Tokenise filter string
        const filters = filter.toLowerCase().split(' ');
        const list = {};
        for (const f of filters) {
            if (f) {
                if (!list[f]) { list[f] = 0; }
                list[f]++;
            }
        }
            // Group similar tokens
        const parts = [];
        for (const f in list) {
            if (list.hasOwnProperty(f)) {
                parts.push({ word: f, count: list[f], regex: new RegExp(f, 'gi') });
            }
        }
        parts.sort((a, b) => b.word.length - a.word.length || a.word.localeCompare(b.word));
        const user_list = JSON.parse(JSON.stringify(items || this.getUsers() || []));
        if (filter) {
            users = user_list.filter(
                (user) => {
                    let match_count = 0;
                    user.match_index = 65535;
                    user.match = '';
                    const field_list = {};
                        // Initialise field match variables
                    for (const f of fields) {
                        field_list[f] = {
                            value: (user[f] || '').toLowerCase(),
                            index: 65536,
                            matched: 0
                        };
                    }
                        // Search for matches with the tokenised filter string
                    for (const i of parts) {
                        if (i.word) {
                            // Check fields for matches
                            for (const f of fields) {
                                const field = field_list[f];
                                const index = field.value.indexOf(i.word);
                                field.index = index < field.index ? index : field.index;
                                field.matches = (field.value.match(i.regex) || []).length;
                                field.value = field.value.replace(i.regex, ' ');
                            }
                            // Update token match count
                            for (const f of fields) {
                                const field = field_list[f];
                                if (field.matches >= i.count) {
                                    match_count++;
                                        // Update field matches
                                    let changed = 0;
                                    const tokens = (user[`match_${f}`] || user[f] || '').split(' ');
                                    for (const k of tokens) {
                                        if (changed >= i.count) {
                                            break;
                                        }
                                        if (k.toLowerCase().indexOf(i.word) >= 0 && k.indexOf('`') < 0) {
                                            tokens[tokens.indexOf(k)] = k.replace(i.regex, '`$&`');
                                            changed++;
                                        }
                                    }
                                    user[`match_${f}`] = tokens.join(' ');
                                    break;
                                }
                            }
                        }
                    }
                    // Get field with the most relevent match
                    for (const f of fields) {
                        const field = field_list[f];
                        if (field.index < user.match_index && field.index >= 0) {
                            user.match_index = field.index;
                            user.match = f;
                        }
                    }
                    return user.match_index >= 0 && user.match && (match_count >= parts.length);
                });
        } else {
            users = user_list;
        }
        // Sort by order of relevence then name
        users.sort((a, b) => {
            const diff = a.match_index - b.match_index;
            return diff === 0 ? a.name.localeCompare(b.name) : diff;
        });
        return users;
    }

    /**
     * Update location of the logged in user
     */
    public updateActiveUserLocation() {
        const person = this.current();
        if (person) {
            this.location(person.id, person.win_id).then(
                (loc) => this.subjects.user.next(this.get(person.id)),
                (err) => console.error(err)
            );
        }
    }

    /**
     * Search for user
     * @param fields Key, value pairs for query parameters
     * @param tries Retry value. DON'T USE
     */
    public query(fields?: any, tries: number = 0) {
        if (tries > 4) { return new Promise((rs, rj) => rj('Too many tries')); }
        if (!this.parent || !this.parent.Buildings.current()) {
            return new Promise((rs, rj) =>
                setTimeout(() => this.query(fields, tries).then((v) => rs(v), (e) => rj(e)), 300 * ++tries)
            );
        }
        const query = Utils.generateQueryString(fields);
        const key = `query|${query}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.parent.api_endpoint}/users${query ? '?' + query : ''}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const user_list = [];
                        for (const usr of resp) {
                            user_list.push(this.processStaffMember(usr));
                        }
                        if (!fields || (!fields.q && !fields.limit)) {
                            this.updateUserList(user_list);
                        }
                        resolve(user_list);
                        setTimeout(() => this.promises[key] = null, 5 * 1000);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Get data for user
     * @param email Email of user
     */
    public show(email: string) {
        const key = `show|${email}`;
        if (!this.promises[key]) {
            this.promises[key] = new Promise((resolve, reject) => {
                const url = `${this.parent.api_endpoint}/users/${email}`;
                this.http.get(url).subscribe(
                    (resp: any) => {
                        const user = this.processStaffMember(resp);
                        setTimeout(() => this.promises[key] = null, 60 * 1000);
                        resolve(user);
                    }, (err) => {
                        this.promises[key] = null;
                        reject(err);
                    });
            });
        }
        return this.promises[key];
    }

    /**
     * Get availability of the specified user
     * @param email Email of user
     * @param start Start of availability block
     * @param end End of availability block
     */
    public availability(email: string, start?: number, end?: number) {
        const name = `availability|${email}|${start || 'now'}|${end || 'soon'}`;
        if (!this.promises[name]) {
            this.promises[name] = new Promise((resolve, reject) => {
                let url = `${this.parent.api_endpoint}/bookings/${email}`;
                if (start) {
                    url += `?start=${start}`;
                    if (end) { url += `&end=${end}`; }
                }
                let list = null;
                this.http.get(url).subscribe(
                    (results) => list = results,
                    (err) => {
                        reject(err);
                        setTimeout(() => this.promises[name] = null, 1000);
                    }, () => {
                        resolve(!list || list.length <= 0);
                        setTimeout(() => this.promises[name] = null, 1000);
                    }
                );
            });
        }
        return this.promises[name];
    }

    /**
     * Update user list
     * @param list User array
     */
    private updateUserList(list: any[]) {
        const user_list = this.subjects.user_list.getValue() || [];
        if (list) {
            for (const item of list) {
                let found = false;
                for (const user of user_list) {
                    if (item.id === user.id) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    user_list.push(item);
                }
            }
            user_list.sort((a, b) => a.name.localeCompare(b.name));
            this.subjects.user_list.next(user_list);
        }
    }

    /**
     * Get data for the logged in user
     * @param tries Retry count. DON'T USE.
     */
    private loadActiveUser(tries: number = 0) {
        if (tries > 4) { return; }
        let user = null;
        this.subjects.state.next('loading');
        this.http.get(`${this.parent.endpoint}/control/api/users/current`).subscribe(
            (data: any) => user = data,
            (err) => {
                this.subjects.state.next('invalid');
            }, () => {
                this.subjects.user.next(user);
                this.subjects.state.next('available');
                const user_data = this.get(user.email);
                if (!user_data) {
                    this.query({ q: user.email, limit: 1 }).then((list: IUser[]) => {
                        if (list && list.length) {
                            const person = list[0];
                            this.location(person.id, person.win_id).then(
                                (loc) => this.model.active_user = this.get(person.id),
                                (err) => console.error(err)
                            );
                            this.subjects.user.next(person);
                        }
                    }, (err) => {
                        console.error(err);
                    });
                } else {
                    this.location(user_data.id, user_data.win_id).then(
                        () => this.model.active_user = this.get(user_data.id),
                        (err) => console.error(err)
                    );
                    this.subjects.user.next(user_data);
                }
            },
        );
    }

    /**
     * Get list of users
     * @param tries Retry count. DON'T USE.
     */
    private loadUsers(tries: number = 0) {
        if (tries > 10) { return; }
        const now = moment().seconds(0).milliseconds(0);
        if (localStorage) {
            const user_list = localStorage.getItem('STAFF.user_list');
            const expiry = localStorage.getItem('STAFF.user_list.expiry');
            if (user_list && +expiry > now.valueOf()) {
                this.updateUserList(JSON.parse(user_list));
                return;
            }
        }
        this.query().then((list) => {
            if (localStorage && this.parent.Settings.get('app.store_user_list')) {
                const time = this.parent.Settings.get('user_expiry');
                localStorage.setItem('STAFF.user_list', JSON.stringify(this.subjects.user_list.getValue()));
                localStorage.setItem('STAFF.user_list.expiry', now.add(30, 'seconds').valueOf().toString());
            }
        }, (err) => setTimeout(() => this.loadUsers(tries), 200 * ++tries));
    }

    /**
     * Convert user data to local format
     * @param user User data
     */
    private processStaffMember(user: any) {
        if (user) {
            const u_org = user.organisation;
            const org = {
                id: typeof u_org !== 'string' && u_org ? u_org.id : user.organisation_id,
                name: typeof u_org !== 'string' && u_org ? u_org.name : user.organisation_name || user.organisation,
            };
            const member: IUser = {
                id: user.id || user.email,
                win_id: user.email,
                name: user.name || `${user.first_name} ${user.last_name}`,
                type: user.title ? (user.title.toLowerCase() === 'partner' ? 'partner' : 'internal') : 'external',
                image: null,
                email: user.email,
                location: null,
                phone: user.phone,
                b_unit: user.department,
                organisation_id: org.id,
                organisation_name: org.name,
                staff_code: user.staff_code
            };
            if (member.id) {
                member.image = user.image || `${this.parent.endpoint}/assets/users/${member.id}.png`;
            }
            return member;
        } else {
            return null;
        }
    }

}
