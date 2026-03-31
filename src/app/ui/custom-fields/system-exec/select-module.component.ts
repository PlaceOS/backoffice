import { CommonModule } from '@angular/common';
import {
    Component,
    effect,
    forwardRef,
    input,
    OnChanges,
    signal,
    SimpleChanges,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { PlaceSystem, queryModules } from '@placeos/ts-client';
import { combineLatest, of } from 'rxjs';
import {
    catchError,
    distinctUntilChanged,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { calculateModuleIndex } from '../../../common/api';
import { AsyncHandler } from '../../../common/async-handler.class';
import { TranslatePipe } from '../../translate.pipe';

export interface ModuleLike {
    id: string;
    name: string;
    module: string;
    index: number;
}

@Component({
    selector: `select-system-module`,
    template: `
        @if (!loading()) {
            <mat-form-field class="h-14 w-full" appearance="outline">
                <mat-select
                    [placeholder]="'COMMON.EXECUTE_MODULE_SELECT' | translate"
                    [(ngModel)]="module"
                    (ngModelChange)="setValue($event)"
                >
                    @for (mod of modules(); track mod) {
                        <mat-option [disabled]="!mod.running" [value]="mod">
                            {{ mod.module }} {{ mod.index }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.EXECUTE_MODULE_LOADING' | translate }}</p>
            </div>
        }
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectModuleComponent),
            multi: true,
        },
    ],
    imports: [
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        TranslatePipe,
        FormsModule,
        CommonModule,
    ],
})
export class SelectModuleComponent
    extends AsyncHandler
    implements OnChanges, ControlValueAccessor
{
    /** ID of the system to select the module from */
    public readonly system = input<PlaceSystem>(undefined);
    /** Trigger to refresh modules list */
    public readonly refresh = input<number>(0);

    private _system = signal('');
    private _change = signal(0);

    public readonly module = signal<ModuleLike | undefined>(undefined);

    public readonly loading = signal(false);

    private readonly _modules = toSignal(
        combineLatest([
            toObservable(this._system),
            toObservable(this._change),
        ]).pipe(
            distinctUntilChanged(
                ([id1, time1], [id2, time2]) => id1 === id2 && time1 === time2,
            ),
            tap(() => this.loading.set(true)),
            switchMap(([id]) =>
                id
                    ? queryModules({
                          control_system_id: id,
                          limit: 500,
                          complete: true,
                      } as Record<string, unknown>).pipe(
                          map(({ data }) => data),
                      )
                    : of([]),
            ),
            catchError(() => of([])),
            map((mod_list) => {
                mod_list.sort(
                    (a, b) =>
                        this.system().modules.indexOf(a.id) -
                        this.system().modules.indexOf(b.id),
                );
                return mod_list.map((mod) => ({
                    id: mod.id,
                    name: mod.name,
                    running: mod.running,
                    module: mod.custom_name || mod.name,
                    index: calculateModuleIndex(mod_list, mod),
                }));
            }),
            tap(() => this.loading.set(false)),
            shareReplay(1),
        ),
        { initialValue: [] as (ModuleLike & { running: boolean })[] },
    );

    public readonly modules = this._modules;

    /** Form control on change handler */
    private _onChange: (_: ModuleLike) => void;
    /** Form control on touch handler */
    private _onTouch: (_: ModuleLike) => void;

    constructor() {
        super();
        effect(() => {
            const list = this.modules();
            const selected = this.module();
            const active = list.find(
                (_) =>
                    _.module === selected?.module &&
                    _.index === selected?.index,
            );
            if (active) this.setValue(active);
        });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system) {
            const system = this.system();
            this._system.set(system?.id || '');
            this._change.set(system?.updated_at || 0);
        }
        if (changes.refresh && !changes.refresh.firstChange) {
            this._change.set(Date.now());
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: ModuleLike): void {
        this.module.set(new_value);
        if (this._onChange && !this.loading()) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: ModuleLike) {
        if (!value) return;
        this.module.set(value);
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange = (fn) => (this._onChange = fn);

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched = (fn) => (this._onTouch = fn);
}
