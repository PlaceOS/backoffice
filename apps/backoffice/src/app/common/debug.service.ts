import { computed, Injectable, signal } from '@angular/core';
import {
    debug,
    debug_events,
    ignore,
    PlaceDebugEvent,
    PlaceModule,
} from '@placeos/ts-client';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import { format } from 'date-fns';
import { BehaviorSubject } from 'rxjs';
import { AsyncHandler } from './async-handler.class';

export type DebugConsolePosition = 'below' | 'side' | 'floating';

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
export class PlaceDebugService extends AsyncHandler {
    private _changed = new BehaviorSubject(0);
    /** List of the current state of events */
    /** Mapping of module IDs to display names */
    private _module_names: HashMap<string> = {};
    /** List of modules listening to debug events */
    public readonly bound_modules = signal<PlaceModule[]>([]);
    public readonly module_count = computed(() => this.bound_modules().length);
    public readonly events = signal<PlaceDebugEvent[]>([]);
    public readonly event_count = computed(() => this.events().length);
    /** Whether debug console is enabled */
    public readonly enabled = signal(false);
    /** Whether debug console is showing */
    public readonly is_shown = signal(true);
    public readonly position = signal<DebugConsolePosition>('below');
    /** Whether there are modules listening for debug messages */
    public readonly is_listening = computed(
        () => this.enabled() && this.bound_modules().length > 0,
    );
    /** Get terminal display string for all the events */
    public readonly terminal_string = computed(() => {
        const list = this.events().map(
            (event) =>
                `${
                    TERMINAL_COLOURS[event.level] || TERMINAL_COLOURS.debug
                }${format(Date.now(), 'h:mm a')}, ${
                    this._module_names[event.mod_id] ||
                    event.mod_id ||
                    '<UNKNOWN>'
                }, [${event.level.toUpperCase()}]\u001b[0m ${event.message
                    .split('\n')
                    .reverse()
                    .join('\n')}`,
        );
        return list.join('\n');
    });

    public readonly changed = this._changed.asObservable();

    public get modules() {
        return this.bound_modules();
    }

    public get module_names() {
        return this._module_names;
    }

    constructor() {
        super();
        debug_events.subscribe((event) => {
            if (this.bound_modules().find((mod) => mod.id === event.mod_id)) {
                let event_list = [...this.events(), event];
                if (event_list.length > 2000) {
                    const [_, ...events] = event_list;
                    event_list = events;
                }
                this.events.set(event_list);
            }
        });
    }

    /** Clear existing events */
    public clearEvents() {
        this.events.set([]);
    }

    /**
     * Whether module is listening for debug events
     */
    public isListening(module: PlaceModule): boolean {
        return !!this.bound_modules().find((mod) => mod.id === module.id);
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
            this.enabled.set(true);
            debug(options).then(() => {
                this.subscription(`debug_${module.id}`, () => ignore(options));
                this.bound_modules.update((l) => [...l, module]);
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
            this.bound_modules.update((l) =>
                l.filter((mod) => mod.id !== module.id),
            );
            this._changed.next(Date.now());
        }
    }

    public unbindAll() {
        for (const mod of this.bound_modules()) {
            this.unbind(mod);
        }
        this.bound_modules.set([]);
    }
}
