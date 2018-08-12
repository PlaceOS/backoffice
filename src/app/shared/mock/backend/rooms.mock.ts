/*
 * @Author: alex.sorafumo
 * @Date:   2017-04-03 15:50:46
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-06-19 13:24:24
 */

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as moment from 'moment';

export class MockRoomsBackend extends BaseMockBackend {
    protected load() {
        if (!this.model) { this.model = {}; }
        this.loadRooms();
    }

    private loadRooms() {
        if (this.model.log) { this.model.log('MOCK', 'Loading request for room list'); }

        const room_list: any[] = [
            { name: 'Meeting Room', area: '1.01', capacity: 4, bookable: true, zone: 'zone_lvl-01' },
            { name: 'Meeting Room', area: '2.01', capacity: 8, bookable: true, zone: 'zone_lvl-02' },
            { name: 'Meeting Room', area: '3.01', capacity: 16, bookable: true, zone: 'zone_lvl-03' },
            { name: 'Meeting Room', area: '10.05', capacity: 16, bookable: true, zone: 'zone_lvl-10', searchable: false },
            { name: 'Meeting Room', area: '10.06', capacity: 16, bookable: true, zone: 'zone_lvl-10' },
            { name: 'Nose meeting', area: '10.27', capacity: 8, bookable: true, zone: 'zone_lvl-10' },
            { name: 'Nose moom', area: '10.10', capacity: 8, bookable: true, zone: 'zone_lvl-10' },
        ];

        const bld = this.model.bld_data[Object.keys(this.model.bld_data)[0]];
        const extras = bld.settings.discovery_info.extras;
        const rooms: any[] = [];
        for (const room of room_list) {
            const id = `sys_rm-${room.area}`;
            let extra_list = '';
            for (let i = 0; i < 2; i++) {
                if (extra_list) { extra_list += ' '; }
                const e = extras[Math.floor(Math.random() * extras.length)];
                if (extra_list.indexOf(e.extra_id) < 0) { extra_list += e.extra_id; }
            }
            rooms.push({
                id,
                name: `${room.name} ${room.area}`,
                email: `${this.model.city}-${room.area}@${this.model.domain}`,
                bookable: room.bookable,
                capacity: room.capacity || Math.floor(Math.random() * 32 + 2),
                features: '',
                zones: [room.zone || 'zone_lvl-01'],
                settings: {
                    map_id: `${room.area}`,
                    bookings: [],
                    room_id: id,
                    extra_features: extra_list,
                    cost_hour: room.cost || 0
                },
                support_url: `http://aca.engin.run/demo/aca/control/` // `/meeting/#/?ctrl=${id}`
            });
        }
        this.model.rooms = rooms;

        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/rooms/:id`, this.model.rooms, (event) => {
            if (event.params.id) {
                if (event.fragment.available_from) {
                    const start = moment(event.fragment.available_from * 1000);
                    const end = event.fragment.available_to ? moment(event.fragment.available_to * 1000) : moment(start).add(60, 'm');
                    const available = this.getAvailableRooms(event.data, start.valueOf(), moment.duration(end.diff(start)).asMinutes());
                    for (const rm of available) {
                        if (rm.id === event.params.id) {
                            rm.available = true;
                            return rm;
                        }
                    }
                } else {
                    for (const rm of event.data) {
                        if (event.params.id === rm.id) {
                            return rm;
                        }
                    }
                }
            }
            return null;
        });

            // Get bookable rooms from room list
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/rooms`, this.model.rooms, (event) => {
            if (event.fragment.available_from) {
                const start = moment(event.fragment.available_from * 1000);
                const end = event.fragment.available_to ? moment(event.fragment.available_to * 1000) : moment(start).add(60, 'm');
                return this.getAvailableRooms(event.data, start.valueOf(), moment.duration(end.diff(start)).asMinutes());
            } else {
                const results: any[] = [];
                for (const i of event.data) {
                    if (i.bookable) {
                        i.available = Math.floor(Math.random() * 2349873421) % 3 === 0;
                        results.push(i);
                    }
                }
                return results;
            }
        });
        this.state.next(true);
    }

    private getAvailableRooms(list: any[], start_time: number, duration: number = 60) {
        const results = [];
        const start = moment(start_time);
        const end = moment(start).add(duration, 'm');
        for (const rm of list) {
            let clash = false;
            for (const bkn of rm.settings.bookings) {
                const bkn_start = moment(bkn.Start);
                const bkn_end = moment(bkn.End);
                if (start.isBetween(bkn_start, bkn_end, 'm', '[)') || end.isBetween(bkn_start, bkn_end, 'm', '(]')) {
                    clash = true;
                }
            }
            if (!clash) {
                rm.available = true;
                rm.settings.available = true;
                results.push(rm);
            }
        }
        return results;
    }
}
