

import { MOCK_REQ_HANDLER } from '@acaprojects/ngx-composer';
import { BehaviorSubject } from 'rxjs';

import { BaseMockBackend } from './base.mock';

import * as faker from 'faker';
import * as moment from 'moment';
import { Utils } from '../../utility.class';

export class MockBookingsBackend extends BaseMockBackend {
    private static count = 0;

    protected load() {
        this.loadUserBookings();
        this.loadRoomBookings();
    }

    private loadUserBookings() {
        if (this.model.log) { this.model.log('MOCK', 'Loading users bookings and setting up request'); }
        const date = moment().seconds(0).milliseconds(0);
        const bookings: any = {};
        const days = 30;
        for (let i = 0; i < days; i++) {
            date.hours(6).minutes(30);
            const events = Math.floor(Math.random() * 8);
            bookings[date.format('DD/MM/YYYY')] = [];
            for (let k = 0; k < events; k++) {
                date.add(Math.floor(Math.random() * 4 + 1) * 15, 'm');
                if (date.hours() < 6 || date.hours() > 22) {
                    date.hours(date.hours() - 6);
                    break;
                }
                    // Get start and end times for booking
                const start = date.valueOf();
                date.add(Math.floor(Math.random() * 4 + 2) * 15, 'm');
                const end = date.valueOf();
                    // Get attendee list for users
                const attendees = [];
                if (this.model.users && this.model.users.length > 0) {
                    const count = Math.floor(Math.random() * 5);
                    for (let j = 0; j < count; j++) {
                        attendees.push(this.model.users[Math.floor(Math.random() * this.model.users.length)]);
                    }
                }
                let room = null;
                if (this.model.rooms) {
                    room = this.model.rooms[Math.floor(Math.random() * this.model.rooms.length)];
                }
                const organizer = Math.floor(Math.random() * 23456783) % 3 === 0 ? this.model.user || {} : { name: 'Bob Jane', email: 'bob.jane@bobjanetmart.com.au' };
                attendees.push(organizer);
                bookings[date.format('DD/MM/YYYY')].push({
                    id: Utils.padZero(MockBookingsBackend.count++, 4),
                    title: `${faker.commerce.productName()} Meeting`,
                    start, end, attendees,
                    organizer,
                    room_id: room ? room.email : null
                });
            }
            date.add(1, 'd');
        }
        MOCK_REQ_HANDLER.register(`/${this.model.api_route}/bookings`, bookings, (e) => {
            let list = [];
            for (const n in e.data) {
                if (e.data.hasOwnProperty(n)) {
                    list = list.concat(e.data[n]);
                }
            }
            return list || [];
        });
    }

    private loadRoomBookings() {
        if (this.model.log) { this.model.log('MOCK', 'Loading bookings for rooms'); }
        if (this.model.rooms) {
            for (const room of this.model.rooms) {
                let bookings = [];
                // Create bookings for room
                const date = moment();
                const today = this.createBookings(date.valueOf());
                bookings = bookings.concat(today);
                for (let i = 0; i < 14; i++) {
                    date.add(1, 'd');
                    const more_bookings = this.createBookings(date.valueOf());
                    bookings = bookings.concat(more_bookings);
                }
                bookings.forEach((b) => b.room_id = room.email);
                room.settings.bookings = bookings;
                    // Add bookings to system
                if (!(window as any).control) { (window as any).control = {}; }
                const control = (window as any).control;
                if (!control.systems) { control.systems = {}; }
                if (!control.systems[room.id]) { control.systems[room.id] = {}; }
                const system = control.systems[room.id];
                if (!system.Bookings) { system.Bookings = [{}]; }
                system.Bookings[0].today = today;
            }
        }
    }

    private createBookings(date: number) {
        const bookings = [];
        const start = moment(date).hours(7).minutes(30).seconds(0).milliseconds(0);
        const bkn_cnt = Math.floor(Math.random() * 6 + 1);
        for (let i = 0; i < bkn_cnt; i++) {
            // Set booking start time
            start.add(Math.floor(Math.random() * 6 + 2) * 15, 'm');
            const b1s = start.toISOString();
            // Set booking end time
            start.add(Math.floor(Math.random() * 6 + 2) * 15, 'm');
            const b1e = start.toISOString();
            bookings.push({
                id: Utils.padZero(MockBookingsBackend.count++, 4),
                ConferenceRoomAlias: 'cfsydinx',
                Start: b1s,
                End: b1e,
                Subject: `${faker.commerce.productName()} Testing`,
                Location: this.model.city,
                BookingUserAlias: null,
                StartTimeZoneName: null,
                EndTimeZoneName: null,
                start_date: b1s,
                end_date: b1e,
                owner: `${faker.name.findName()}`,
            });
        }
        return bookings;
    }
}
