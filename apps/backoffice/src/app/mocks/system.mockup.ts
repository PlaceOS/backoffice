/**
 * @Author: Alex Sorafumo <alex.sorafumo>
 * @Date:   11/01/2017 4:16 PM
 * @Email:  alex@yuion.net
 * @Filename: mock-system.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 03/02/2017 2:26 PM
 */

import { addMinutes, startOfMinute } from "date-fns";

const win = self as any;

win.systemData = win.systemData || {};
win.control = win.control || {};
win.control.systems = win.control.systems || {};
win.control.systems['sys-B0'] = {
    System: [
        {
            name: 'Demo System',
        },
    ],
    Demo: [
        {
            volume: 0,
            mute: false,
            views: 0,
            state: 'Idle',
            $play() {
                this.state = 'Playing';
            },
            $stop() {
                this.state = 'Stopped';
            },
            $volume(value: number) {
                this.volume = value;
                if (this.volume > 100) {
                    this.volume = 100;
                } else if (this.volume < 0) {
                    this.volume = 0;
                }
            },
            $mute(state: boolean) {
                this.mute = state;
            },

            $state(status: string) {
                this.state = status;
            },
        },
    ],
};

setTimeout(() => initMessages(), 500);

function initMessages() {
    if (win.backend && win.backend.model.user) {
        const messages = [
            'Testing',
            'Response to Testing',
            `Hello I'm ${win.backend.model.user.name}`,
            `Hello ${win.backend.model.user.name}, this is the concierge`,
            'Can I book a room for tomorrow at 9:30am?',
            'Sure, how does Activity Space 31.04 sound?',
            "That's exactly what I'm looking for, thanks",
            'Alright, you now have a booking for Activity Space 31.04 at 9:30am tomorrow.',
        ];
        let time = startOfMinute(addMinutes(Date.now(), -messages.length * 30));
        let index = 0;
        for (const msg of messages) {
            win.control.systems['sys-B0'].Slack[0].threads.local.push({
                text: msg,
                username: index % 2 === 0 ? win.backend.model.user.name : '',
                ts: time.valueOf(),
            });
            index++;
            time = addMinutes(time, 30);
        }
    } else {
        setTimeout(() => initMessages(), 500);
    }
}

win.systemData['sys-B0'] = win.control.systems['sys-B0'];
