import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { token, onlineState } from '@placeos/ts-client';

import * as mqtt from 'mqtt/dist/mqtt';
import { BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';

const PORT_MAP = {
    'http:': '80',
    'https:': '443',
};

@Injectable({
    providedIn: 'root',
})
export class MqttDashboardStateService {
    private _client: mqtt.MqttClient;
    private _connected = new BehaviorSubject(false);
    private _topics: Record<string, BehaviorSubject<any>> = {};

    public readonly connected = this._connected.asObservable();
    public readonly filters = new FormGroup({
        org: new FormControl(''),
        bld: new FormControl(''),
        lvl: new FormControl(''),
        area: new FormControl(''),
        sys: new FormControl(''),
        drv: new FormControl(''),
        mod: new FormControl(''),
        idx: new FormControl(''),
        state: new FormControl('connected'),
    });

    public readonly topic = this.filters.valueChanges.pipe(map(() => {
        const { org, bld, lvl, area, sys, drv, mod, idx, state } = this.filters.value;
        return `placeos/${org || '+'}/state/${bld || '+'}/${lvl || '+'}/${area || '+'}/${sys || '+'}/${drv || '+'}/${mod || '+'}/${idx || '+'}/${state || '+'}`
    }));

    constructor() {
        onlineState().pipe(first((_) => _)).subscribe(() => this._init());
        this.filters.enable();
    }

    private async _init() {
        const secure = location.protocol.includes('https');
        this._client = mqtt.connect(
            `ws${secure ? 's' : ''}://${location.host}/api/mqtt/`,
            {
                username: token(),
                password: token(),
            }
        );
        this._client.on('connect', () => this._connected.next(true));
        this._client.on('message', (topic, message) => {
            const match = this.findMatchingTopic(topic);
            if (match) {
                let data = message.toString();
                try {
                    data = JSON.parse(message.toString())
                } catch {}
                const old_data = this._topics[match].getValue().filter(([_]) => _.join('/') !== topic);
                this._topics[match].next([...old_data, [topic.split('/'), data]]);
            }
        });
    }

    /** Run new MQTT query */
    public query(topic: string) {
        if (!this._client) throw new Error('MQTT connection not setup.');
        if (!this._connected) throw new Error('MQTT connection is pending.');
        if (!this._topics[topic]) {
            this._topics[topic] = new BehaviorSubject([]);
        }
        this._client.subscribe(topic, {}, (d) => null);
        return this._topics[topic].asObservable();
    }

    public findMatchingTopic(topic: string) {
        const topic_list = Object.keys(this._topics);
        const topic_tokens = topic.split('/');
        for (const key of topic_list) {
            const key_tokens = key.split('/');
            let i = 0; 
            for (; i < topic_tokens.length; i++) {
                if (key_tokens[i] !== '+' && key_tokens[i] !== topic_tokens[i]) break;
            }
            if (i === topic_tokens.length) return key;
        }
        return '';
    }
}
