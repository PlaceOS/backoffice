/**
 * @Author: Alex Sorafumo <alex.sorafumo>
 * @Date:   11/01/2017 4:16 PM
 * @Email:  alex@yuion.net
 * @Filename: mock-system.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 03/02/2017 2:26 PM
 */

import * as dayjs from 'dayjs';

const win = self as any;

win.systemData = win.systemData || {};
win.control = win.control || {};
win.control.systems = win.control.systems || {};
win.control.systems['sys-B0'] = {
    System: [
        {
            name: 'Demo System'
        }
    ],
    Demo: [
        {
            volume: 0,
            mute: false,
            views: 0,
            state: 'Idle',

            $play: () => {
                win.control.systems['sys-B0'].Demo[0].state = 'Playing';
            },

            $stop: () => {
                win.control.systems['sys-B0'].Demo[0].state = 'Stopped';
            },

            $volume: (value: number) => {
                this.volume = value;
                if (this.volume > 100) {
                    this.volume = 100;
                } else if (this.volume < 0) {
                    this.volume = 0;
                }
            },

            $mute: (state: boolean) => {
                this.mute = state;
            },

            $state: (status: string) => {
                this.state = status;
            }
        }
    ]
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
            'That\'s exactly what I\'m looking for, thanks',
            'Alright, you now have a booking for Activity Space 31.04 at 9:30am tomorrow.'
        ];
        const time = dayjs()
            .add(-messages.length * 30, 'm')
            .startOf('s');
        let index = 0;
        for (const msg of messages) {
            win.control.systems['sys-B0'].Slack[0].threads.local.push({
                text: msg,
                username: index % 2 === 0 ? win.backend.model.user.name : '',
                ts: time.valueOf()
            });
            index++;
            time.add(30, 'm');
        }
    } else {
        setTimeout(() => initMessages(), 500);
    }
}

win.systemData['sys-B0'] = win.control.systems['sys-B0'];
