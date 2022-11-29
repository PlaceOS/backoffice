import { Injectable } from '@angular/core';
import {
    debug, debug_events,

    ignore, PlaceDebugEvent,
    PlaceModule
} from '@placeos/ts-client';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import { format } from 'date-fns';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseClass } from './base.class';



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
    private _changed = new BehaviorSubject(0);
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

    public readonly changed = this._changed.asObservable();

    /** Current list of debug events */
    public get event_list(): PlaceDebugEvent[] {
        return this._events.getValue();
    }

    /** Observable for changes to the event listing */
    public get events(): Observable<PlaceDebugEvent[]> {
        return this._event_obs;
    }
    
    public get modules() {
        return this._bound_modules;
    }
    
    public get module_names() {
        return this._module_names;
    }

    /** Get terminal display string for all the events */
    public get terminal_string(): string {
        const list = this.event_list.map(
            (event) =>
                `${
                    TERMINAL_COLOURS[event.level] || TERMINAL_COLOURS.debug
                }${format(Date.now(), 'h:mm a')}, ${
                    this._module_names[event.mod_id] ||
                    event.mod_id ||
                    '<UNKNOWN>'
                }, [${event.level.toUpperCase()}]\u001b[0m ${event.message}`
        );
        return list.join('\n');
    }

    /** Whether there are modules listening for debug messages */
    public get is_enabled(): boolean {
        return this._enabled
    }

    /** Whether there are modules listening for debug messages */
    public get is_listening(): boolean {
        return this._enabled && this._bound_modules.length > 0;
    }

    constructor() {
        super();
        debug_events.subscribe((event) => {
            if (this._bound_modules.find((mod) => mod.id === event.mod_id)) {
                let event_list = [...this.event_list, event];
                if (event_list.length > 2000) {
                    const [_, ...events] = event_list;
                    event_list = events;
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
                this._changed.next(Date.now());
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
            this._bound_modules = this._bound_modules.filter(
                (mod) => mod.id !== module.id
            );
            this._changed.next(Date.now());
        }
    }

    public unbindAll() {
        for (const mod of this._bound_modules) {
            this.unbind(mod);
        }
    }
}
