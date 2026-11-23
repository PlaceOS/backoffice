import { computed, Service, signal } from '@angular/core';
import type { DebugMessage, Module } from '@placeos/ts-client';
import { format } from 'date-fns';
import { HashMap } from '../common/types';
import { AsyncHandler } from './async-handler.class';
import { realtime } from './placeos';

/** A debug message of a bound module */
export interface DebugEvent extends DebugMessage {
    /** ID of the module that sent the message */
    readonly mod_id: string;
}

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
    public readonly bound_modules = signal<Module[]>([]);
    public readonly module_count = computed(() => this.bound_modules().length);
    public readonly events = signal<DebugEvent[]>([]);
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
    private readonly _formatted_events = new WeakMap<DebugEvent, string>();
    private _pending_events: DebugEvent[] = [];

    /** Reuse each event's display text until it leaves the retained history. */
    public readonly terminal_lines = computed(() =>
        this.events().map((event) => this.formatEvent(event)),
    );

    private formatEvent(event: DebugEvent) {
        const cached = this._formatted_events.get(event);
        if (cached !== undefined) return cached;
        const level = event.level || 'debug';
        const line = `${TERMINAL_COLOURS[level.toLowerCase()] || TERMINAL_COLOURS.debug}${format(event.received_at_ms, 'h:mm a')}, ${this._module_names[event.mod_id] || event.mod_id || '<UNKNOWN>'}, [${level.toUpperCase()}]\u001b[0m ${event.message.split('\n').reverse().join('\n')}`;
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

    /** Queue a debug message of a bound module */
    private addEvent(event: DebugEvent) {
        if (!this.bound_modules().find((mod) => mod.id === event.mod_id))
            return;
        this.formatEvent(event);
        this._pending_events.push(event);
        if (this._pending_events.length >= 2000) {
            this.flushEvents();
        } else if (!this._timers['flush_debug']) {
            this.timeout('flush_debug', () => this.flushEvents(), 16);
        }
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
    public isListening(module: Module): boolean {
        return !!this.bound_modules().find((mod) => mod.id === module.id);
    }

    /**
     * Start listening to debug events for the given module
     * @param module Module to start listening to
     * @param module_name Display name for the module
     * @param sys System of the module. A shared module has no
     * `control_system_id`, so give the system that shows it
     */
    public bind(
        module: Module,
        module_name: string,
        sys = module?.control_system_id,
    ) {
        if (module && sys) {
            this.enabled.set(true);
            const release = realtime().debug(
                { sys, module_id: module.id },
                (message) => this.addEvent({ ...message, mod_id: module.id }),
            );
            this.subscription(`debug_${module.id}`, release);
            this.bound_modules.update((l) => [...l, module]);
            this._module_names[module.id] = module_name;
            this._changed.update((value) => value + 1);
        }
    }

    /**
     * Stop listening to debug events for module
     * @param module Module to stop listening to
     */
    public unbind(module: Module) {
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
