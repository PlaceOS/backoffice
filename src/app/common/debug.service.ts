import { Injectable } from '@angular/core';
import { PlaceDebugEvent, PlaceModule, debug_events, debug, ignore } from '@placeos/ts-client';
import { BehaviorSubject, Observable } from 'rxjs';

import { HashMap } from 'src/app/common/types';
import { BaseClass } from './base.class';

import * as dayjs from 'dayjs';

const TERMINAL_COLOURS = {
    debug: '\u001b[34m',
    verbose: '\u001b[34m',
    info: '\u001b[32m',
    warning: '\u001b[33m',
    error: '\u001b[31m',
    fatal: '\u001b[31m',
};

@Injectable({
    providedIn: 'root',
})
export class PlaceDebugService extends BaseClass {
    /** List of the current state of events */
    private _events = new BehaviorSubject<PlaceDebugEvent[]>([]);
    /** Observable for changes to the event listing */
    private _event_obs = this._events.asObservable();
    /** List of modules listening to debug events */
    private _bound_modules: PlaceModule[] = [];
    /** Mapping of module IDs to display names */
    private _module_names: HashMap<string> = {};
    /** Whether debug console is enabled */
    private _enabled: boolean;

    /** Current list of debug events */
    public get event_list(): PlaceDebugEvent[] {
        return this._events.getValue();
    }

    /** Observable for changes to the event listing */
    public get events(): Observable<PlaceDebugEvent[]> {
        return this._event_obs;
    }

    /** Get terminal display string for all the events */
    public get terminal_string(): string {
        return this.event_list
            .map(
                (event) =>
                    `${TERMINAL_COLOURS[event.level] || TERMINAL_COLOURS.debug}${dayjs().format(
                        'h:mm A'
                    )}, ${
                        this._module_names[event.mod_id] || event.mod_id || '<UNKNOWN>'
                    }, [${event.level.toUpperCase()}]\u001b[0m ${event.message}`
            )
            .join('\n');
    }

    /** Whether there are modules listening for debug messages */
    public get is_listening(): boolean {
        return this._enabled;
    }

    constructor() {
        super();
        debug_events.subscribe((event) => {
            if (this._bound_modules.find((mod) => mod.id === event.mod_id)) {
                let event_list = this.event_list;
                event_list.push(event);
                let size = event_list.reduce((c, i) => c + (i.message || '').length, 0);
                while (event_list.length > 8000 || size > 32 * 1024 * 1024) {
                    event_list.shift();
                    size = event_list.reduce((c, i) => c + (i.message || '').length, 0);
                }
                this._events.next(event_list);
            }
        });
    }

    /** Clear existing events */
    public clearEvents() {
        this._events.next([]);
    }

    /**
     * Whether module is listening for debug events
     */
    public isListening(module: PlaceModule): boolean {
        return !!this._bound_modules.find((mod) => mod.id === module.id);
    }

    /**
     * Start listening to debug events for the given module
     * @param module Module to start listening to
     * @param module_name Display name for the module
     */
    public bind(module: PlaceModule, module_name: string) {
        if (module) {
            const parts = module_name.split('_');
            const index = +parts.splice(parts.length - 1, 1);
            const options = {
                sys: module.system_id,
                mod: module.id,
                index,
                name: 'debug',
            };
            this._enabled = true;
            debug(options).then(() => {
                this.subscription(`debug_${module.id}`, () => ignore(options));
                this._bound_modules.push(module);
                this._module_names[module.id] = module_name;
            });
        }
    }

    /**
     * Stop listening to debug events for module
     * @param module Module to stop listening to
     */
    public unbind(module: PlaceModule) {
        if (module) {
            this.unsub(`debug_${module.id}`);
            this._bound_modules = this._bound_modules.filter((mod) => mod.id !== module.id);
        }
    }
}
