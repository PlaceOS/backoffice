import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HotkeyService {
    private listeners: any = {};
    private observers: any = {};
    private timers: any = {};
    private key_queue: string[] = [];
    private ignore_combinations: string[] = ['control', 'shift', 'alt', 'meta', 'os'];

    constructor() {
        this.listeners.keydown = new Subject();
        this.observers.keydown = this.listeners.keydown.asObservable();
        window.addEventListener('keydown', (event) => {
            if (event.key && this.key_queue.indexOf(event.key.toLowerCase()) < 0) {
                this.key_queue.push(event.key.toLowerCase());
                this.listeners.keydown.next(event);
                this.clearQueue();
            }
        });
        this.listeners.keyup = new Subject();
        this.observers.keyup = this.listeners.keyup.asObservable();
        window.addEventListener('keyup', (event) => {
            if (event.key && this.key_queue.indexOf(event.key.toLowerCase()) >= 0) {
                this.postCombination();
                this.key_queue.splice(this.key_queue.indexOf(event.key.toLowerCase()), 1);
            }
            this.listeners.keyup.next(event);
        });
    }

    public listen(combination: string[] | string, next: () => void) {
        const combo = combination instanceof Array ? combination.join('+').toLowerCase() : (combination || '').toLowerCase();
        if (combo && !this.listeners[combo]) {
            this.listeners[combo] = new Subject();
            this.observers[combo] = this.listeners[combo].asObservable();
        }
        return combo && this.observers[combo] ? this.observers[combo].subscribe(next) : null;
    }

    private postCombination() {
        if (this.key_queue.length <= 1 && document.activeElement && document.activeElement.tagName !== 'BODY') { return; }
        const combo = this.key_queue.join('+');
        if (this.listeners[combo] && this.ignore_combinations.indexOf(combo) < 0) {
            this.listeners[combo].next({});
        }
    }

    private clearQueue() {
        if (this.timers.clear) {
            clearTimeout(this.timers.clear);
        }
        this.timers.clear = setTimeout(() => {
            this.key_queue = [];
            this.timers.clear = false;
        }, 1000);
    }
}
