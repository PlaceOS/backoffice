import {
    Component,
    forwardRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PlaceSystem, queryModules } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    distinctUntilChanged,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { calculateModuleIndex } from '../../../common/api';
import { BaseClass } from '../../../common/base.class';

export interface ModuleLike {
    id: string;
    name: string;
    module: string;
    index: number;
}

@Component({
    selector: `select-system-module`,
    template: `
        <mat-form-field
            class="w-full h-12"
            appearance="outline"
            *ngIf="!loading; else load_state"
        >
            <mat-select
                placeholder="Select module"
                [(ngModel)]="module"
                (ngModelChange)="setValue($event)"
            >
                <mat-option
                    [disabled]="!mod.running"
                    *ngFor="let mod of modules | async"
                    [value]="mod"
                >
                    {{ mod.module }} {{ mod.index }}
                </mat-option>
            </mat-select>
        </mat-form-field>
        <ng-template #load_state>
            <div class="p-4 flex space-x-2 items-center justify-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p>Loading module list...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectModuleComponent),
            multi: true,
        },
    ],
})
export class SelectModuleComponent
    extends BaseClass
    implements OnInit, OnChanges, ControlValueAccessor
{
    /** ID of the system to select the module from */
    @Input() public system: PlaceSystem;

    private _system = new BehaviorSubject('');
    private _change = new BehaviorSubject(0);

    public module: ModuleLike;

    public loading: boolean;

    public modules = combineLatest([this._system, this._change]).pipe(
        distinctUntilChanged(
            ([id1, time1], [id2, time2]) => id1 === id2 && time1 === time2
        ),
        tap(() => (this.loading = true)),
        switchMap(([id]) =>
            id
                ? queryModules({
                      control_system_id: id,
                      limit: 500,
                      complete: true,
                  } as any).pipe(map(({ data }) => data))
                : of([])
        ),
        catchError(() => of([])),
        map((mod_list) => {
            mod_list.sort(
                (a, b) =>
                    this.system.modules.indexOf(a.id) -
                    this.system.modules.indexOf(b.id)
            );
            return mod_list.map((mod) => ({
                id: mod.id,
                name: mod.name,
                running: mod.running,
                module: mod.custom_name || mod.name,
                index: calculateModuleIndex(mod_list, mod),
            }));
        }),
        tap(() => (this.loading = false)),
        shareReplay(1)
    );

    /** Form control on change handler */
    private _onChange: (_: ModuleLike) => void;
    /** Form control on touch handler */
    private _onTouch: (_: ModuleLike) => void;

    public ngOnInit() {
        this.subscription(
            'modules',
            this.modules.subscribe((list) => {
                const active = list.find(
                    (_) =>
                        _.module === this.module?.module &&
                        _.index === this.module?.index
                );
                if (active) this.setValue(active);
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system) {
            this._system.next(this.system.id);
            this._change.next(this.system.updated_at);
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: ModuleLike): void {
        this.module = new_value;
        if (this._onChange && !this.loading) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: ModuleLike) {
        if (!value) return;
        this.module = value;
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
