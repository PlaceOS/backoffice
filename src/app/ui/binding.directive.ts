import {
    Directive,
    ElementRef,
    OnChanges,
    OnDestroy,
    OnInit,
    Renderer2,
    SimpleChanges,
    effect,
    inject,
    input,
    linkedSignal,
    output,
    untracked,
} from '@angular/core';
import type { JsonValue, RealtimeTarget } from '@placeos/ts-client';

import { AsyncHandler } from '../common/async-handler.class';
import { online, realtime } from '../common/placeos';

@Directive({
    selector: 'i[bind], [binding], co-bind',
})
export class BindingDirective<T = unknown>
    extends AsyncHandler
    implements OnInit, OnChanges, OnDestroy
{
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private _renderer = inject(Renderer2);

    /** ID of the system to bind */
    public readonly sys = input('');
    /** Class name of the module to bind */
    public readonly mod = input('');
    /** Index of the system to bind */
    public readonly index = input(1);
    /** Status variable to bind to */
    public readonly bind = input('');
    /** Method to execute */
    public readonly exec = input('');
    /** Method to execute */
    public readonly delay = input(100);
    /** Event to listen for on the parent */
    public readonly onEvent = input('');
    /** JSON arguments of the module method to execute */
    public readonly params = input<JsonValue[] | null>(null);
    public readonly ignore = input(false);
    /** Current value of the binding */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    public readonly modelInput = input<T | null>(null, { alias: 'model' });
    public readonly model = linkedSignal(this.modelInput);
    /** Emitter for changes to the value of the binding */
    public readonly modelChange = output<T | null>();

    private _binding = false;
    private _old_model: T | null = null;

    constructor() {
        super();
        effect(() => {
            if (online()) untracked(() => this.bindVariable());
        });
    }

    public ngOnInit(): void {
        if (online()) this.bindVariable();
    }

    /**
     * Realtime target of the module function or status variable. A module
     * with an index suffix, such as `_TRIGGER__1`, gives that index, as in 6.x
     */
    private _target(name: string): RealtimeTarget {
        const slug = /^(.+)_(\d+)$/.exec(this.mod());
        return slug
            ? {
                  sys: this.sys(),
                  mod: slug[1],
                  index: Math.max(1, +slug[2]),
                  name,
              }
            : { sys: this.sys(), mod: this.mod(), index: this.index(), name };
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.sys || changes.mod || changes.bind) {
            this.bindVariable();
        }
        const model = this.model();
        if (changes.modelInput && this._old_model !== model && model != null) {
            this._old_model = model;
            this.execute();
        }
        const on_event = this.onEvent();
        if (changes.onEvent && on_event) {
            this.subscription(
                'onEvent',
                this._renderer.listen(
                    this._element.nativeElement,
                    on_event,
                    () => this.execute(),
                ),
            );
        }
    }

    /** Bind to set status variable */
    private bindVariable() {
        if (
            online() &&
            this.bind() &&
            this.sys() &&
            this.mod() &&
            !this._binding
        ) {
            this.timeout(
                'bind',
                () => {
                    this._binding = true;
                    const release = realtime().bind(
                        this._target(this.bind()),
                        (state) => {
                            if (state.kind !== 'value' || state.value == null)
                                return;
                            setTimeout(() => {
                                this._binding = false;
                                this.clearTimeout('bound');
                                if (this.ignore()) return;
                                // The module sends JSON. `T` is the type the template expects
                                this.model.set(state.value as T);
                                this._old_model = this.model();
                                this.modelChange.emit(this.model());
                            }, 10);
                        },
                    );
                    this.subscription('binding', release);
                    this.timeout('bound', () => (this._binding = false), 200);
                },
                20,
            );
        }
    }

    /** Excute the set method on the module */
    private execute() {
        if (
            online() &&
            this.exec() &&
            this.sys() &&
            this.mod() &&
            !this._timers['execute']
        ) {
            this.timeout(
                'execute',
                () => {
                    let params = this.params();
                    // The model of a bound variable came from the module as JSON
                    if (this.bind())
                        params = this.params() || [this.model() as JsonValue];
                    realtime()
                        .exec(this._target(this.exec()), params || [])
                        .then((result) => {
                            // Emit exec result if not bound to status variable
                            if (result.ok === false || this.bind()) return;
                            this.model.set(result.value as T);
                            this._old_model = this.model();
                            this.modelChange.emit(this.model());
                        });
                },
                this.delay(),
            );
        }
    }
}
