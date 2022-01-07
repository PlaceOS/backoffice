import { Injectable } from '@angular/core';
import { token, onlineState } from '@placeos/ts-client';

import * as mqtt from 'mqtt/dist/mqtt';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

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

    constructor() {
        onlineState().pipe(first((_) => _)).subscribe(() => this._init());
    }

    private async _init() {
        this._client = mqtt.connect(
            `${location.origin}/api/mqtt`,
            {
                username: token(),
                password: token(),
            }
        );
        this._client.on('connect', () => this._connected.next(true));
        this._client.on('message', (topic, message) => {
            console.log('Message:', topic, message.toString());
            if (topic in this._topics) {
                this._topics[topic].next(message.toString());
            }
        });
    }

    /** Run new MQTT query */
    public query(topic: string, payload: string) {
        if (!this._client) throw new Error('MQTT connection not setup.');
        if (!this._connected) throw new Error('MQTT connection is pending.');
        this._client.publish(topic, payload);
        if (!this._topics[topic]) {
            this._topics[topic] = new BehaviorSubject(null);
        }
        return this._topics[topic].asObservable();
    }
}
