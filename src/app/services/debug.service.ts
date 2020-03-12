import { Injectable } from '@angular/core';
import { ComposerService } from '@placeos/composer';
import { EngineDebugEvent, EngineModule } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { BaseClass } from '../shared/globals/base.class';
import { HashMap } from '../shared/utilities/types.utilities';

import * as dayjs from 'dayjs';

const TERMINAL_COLOURS = {
    debug: '\u001b[34m',
    info: '\u001b[32m',
    warn: '\u001b[33m',
    error: '\u001b[31m',
    fatal: '\u001b[31m'
};

@Injectable({
    providedIn: 'root'
})
export class EngineDebugService extends BaseClass {
    /** List of the current state of events */
    private _events = new BehaviorSubject<EngineDebugEvent[]>([]);
    /** List of modules listening to debug events */
    private _bound_modules: EngineModule[] = [];
    /** Mapping of module IDs to display names */
    private _module_names: HashMap<string> = {};

    /** Current list of debug events */
    public get events(): EngineDebugEvent[] {
        return this._events.getValue();
    }

    /** Get terminal display string for all the events */
    public get terminal_string(): string {
        return this.events
            .map(
                event =>
                    `${TERMINAL_COLOURS[event.level]}${dayjs().format('h:mm A')}, ${event.module ||
                        this._module_names[event.mod_id] ||
                        event.mod_id ||
                        '<UNKNOWN>'}, [${event.level.toUpperCase()}]\u001b[0m ${event.message}`
            )
            .join('\n');
    }

    /** Whether there are modules listening for debug messages */
    public get is_listening(): boolean {
        return this._bound_modules.length > 0;
    }

    constructor(private _composer: ComposerService) {
        super();
        this._composer.realtime.debug_events.subscribe(event => {
            if (this._bound_modules.find(mod => mod.id === event.mod_id)) {
                const event_list = this.events;
                event_list.push(event);
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
    public isListening(module: EngineModule): boolean {
        return !!this._bound_modules.find(mod => mod.id === module.id);
    }

    /**
     * Start listening to debug events for the given module
     * @param module Module to start listening to
     * @param module_name Display name for the module
     */
    public bind(module: EngineModule, module_name: string) {
        if (module) {
            this.subscription(`debug_${module.id}`, module.debug());
            this._bound_modules.push(module);
            this._module_names[module.id] = module_name;
        }
    }

    /**
     * Stop listening to debug events for module
     * @param module Module to stop listening to
     */
    public unbind(module: EngineModule) {
        if (module) {
            this.unsub(`debug_${module.id}`);
            this._bound_modules = this._bound_modules.filter(mod => mod.id === module.id);
        }
    }
}
