/**
 * @Author: Alex Sorafumo <alex.sorafumo>
 * @Date:   11/01/2017 4:16 PM
 * @Email:  alex@yuion.net
 * @Filename: mock-system.ts
 * @Last modified by:   Alex Sorafumo
 * @Last modified time: 03/02/2017 2:26 PM
 */

import { addMinutes, startOfMinute } from 'date-fns';

interface MockBackend {
    model?: {
        user?: {
            name: string;
        };
    };
}

interface MockControlSystem {
    [key: string]: unknown;
    Slack?: Array<{
        threads: {
            local: Array<{
                text: string;
                username: string;
                ts: number;
            }>;
        };
    }>;
}

declare global {
    interface Window {
        systemData: Record<string, unknown>;
        control: Record<string, Record<string, MockControlSystem>>;
        backend: MockBackend;
    }
}

window.systemData = window.systemData || {};
window.control = window.control || {};
window.control.systems = window.control.systems || {};
window.control.systems['sys-B0'] = {
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
    const user = window.backend?.model?.user;
    if (user) {
        const messages = [
            'Testing',
            'Response to Testing',
            `Hello I'm ${user.name}`,
            `Hello ${user.name}, this is the concierge`,
            'Can I book a room for tomorrow at 9:30am?',
            'Sure, how does Activity Space 31.04 sound?',
            "That's exactly what I'm looking for, thanks",
            'Alright, you now have a booking for Activity Space 31.04 at 9:30am tomorrow.',
        ];
        let time = startOfMinute(addMinutes(Date.now(), -messages.length * 30));
        let index = 0;
        for (const msg of messages) {
            window.control.systems['sys-B0'].Slack?.[0].threads.local.push({
                text: msg,
                username: index % 2 === 0 ? user.name : '',
                ts: time.valueOf(),
            });
            index++;
            time = addMinutes(time, 30);
        }
    } else {
        setTimeout(() => initMessages(), 500);
    }
}

window.systemData['sys-B0'] = window.control.systems['sys-B0'];
