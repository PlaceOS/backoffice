import { computed, Service, signal } from '@angular/core';
import {
    debug,
    debug_events,
    ignore,
    PlaceDebugEvent,
    PlaceModule,
} from '@placeos/ts-client';
import { format } from 'date-fns';
import { HashMap } from '../common/types';
import { AsyncHandler } from './async-handler.class';

export type DebugConsolePosition = 'below' | 'side' | 'floating';

const TERMINAL_COLOURS = {
    debug: '\u001b[34m',
    verbose: '\u001b[34m',
    info: '\u001b[32m',
    warning: '\u001b[33m',
    warn: '\u001b[33m',
    error: '\u001b[31m',
    fatal: '\u001b[31m',
};

@Service()
export class PlaceDebugService extends AsyncHandler {
    private _changed = signal(0);
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
    private readonly _formatted_events = new WeakMap<PlaceDebugEvent, string>();
    private _pending_events: PlaceDebugEvent[] = [];

    /** Reuse each event's display text until it leaves the retained history. */
    public readonly terminal_lines = computed(() =>
        this.events().map((event) => this.formatEvent(event)),
    );

    private formatEvent(event: PlaceDebugEvent) {
        const cached = this._formatted_events.get(event);
        if (cached !== undefined) return cached;
        const line = `${TERMINAL_COLOURS[event.level?.toLowerCase()] || TERMINAL_COLOURS.debug}${format(Date.now(), 'h:mm a')}, ${this._module_names[event.mod_id] || event.mod_id || '<UNKNOWN>'}, [${event.level.toUpperCase()}]\u001b[0m ${event.message.split('\n').reverse().join('\n')}`;
        this._formatted_events.set(event, line);
        return line;
    }

    /** Publish at most once per frame, with a bounded queue during bursts. */
    private flushEvents() {
        this.clearTimeout('flush_debug');
        this.events.update((events) =>
            [...events, ...this._pending_events].slice(-2000),
        );
        this._pending_events = [];
    }

    public readonly changed = this._changed.asReadonly();

    public get modules() {
        return this.bound_modules();
    }

    public get module_names() {
        return this._module_names;
    }

    constructor() {
        super();
        this.subscription(
            'debug_events',
            debug_events.subscribe((event) => {
                if (!event) return;
                if (
                    this.bound_modules().find((mod) => mod.id === event.mod_id)
                ) {
                    this.formatEvent(event);
                    this._pending_events.push(event);
                    if (this._pending_events.length >= 2000) {
                        this.flushEvents();
                    } else if (!this._timers['flush_debug']) {
                        this.timeout(
                            'flush_debug',
                            () => this.flushEvents(),
                            16,
                        );
                    }
                }
            }),
        );
    }

    /** Clear existing events */
    public clearEvents() {
        this.clearTimeout('flush_debug');
        this._pending_events = [];
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
                this._changed.update((value) => value + 1);
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
            this._changed.update((value) => value + 1);
        }
    }

    public unbindAll() {
        for (const mod of this.bound_modules()) {
            this.unbind(mod);
        }
        this.bound_modules.set([]);
    }
}
