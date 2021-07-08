import {
    Component,
    forwardRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    functionList,
    PlaceModuleFunction,
    PlaceSystem,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    distinctUntilChanged,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { BaseClass } from '../../../common/base.class';
import { ModuleLike } from './select-module.component';

@Component({
    selector: 'select-module-method',
    template: `
        <ng-container *ngIf="!loading; else load_state">
            <mat-form-field
                class="w-full h-12"
                appearance="outline"
                *ngIf="(method_list | async)?.length; else empty_state"
            >
                <mat-select
                    placeholder="Select method"
                    [(ngModel)]="method"
                    (ngModelChange)="setValue($event)"
                >
                    <mat-option
                        *ngFor="let method of method_list | async"
                        [value]="method"
                    >
                        {{ method.name }}
                    </mat-option>
                </mat-select>
            </mat-form-field>
        </ng-container>
        <ng-template #load_state>
            <div class="p-4 flex space-x-2 items-center justify-center">
                <mat-spinner diameter="32"></mat-spinner>
                <p>Loading method list...</p>
            </div>
        </ng-template>
        <ng-template #empty_state>
            <div class="p-4 flex space-x-2 items-center justify-center">
                <p>No available methods for module</p>
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectMethodComponent),
            multi: true,
        },
    ],
})
export class SelectMethodComponent
    extends BaseClass
    implements OnInit, OnChanges, ControlValueAccessor {
    /** ID of the system to select the module from */
    @Input() public system: PlaceSystem;
    /** ID of the system to select the module from */
    @Input() public module: ModuleLike;

    private _system = new BehaviorSubject('');
    private _module = new BehaviorSubject<ModuleLike>({} as any);

    public method: PlaceModuleFunction;

    public loading: boolean;

    public method_list = combineLatest([this._system, this._module]).pipe(
        distinctUntilChanged(),
        tap(([id, { module, index }]) => {
            console.log(id, module, index, !!id && !!module);
            this.loading = true;
        }),
        switchMap(([id, { module, index }]) =>
            !!id && !!module ? functionList(id, module, index) : of({})
        ),
        catchError(() => of({})),
        map((fn_mapping) =>
            Object.keys(fn_mapping || {}).map((i) => ({
                name: i,
                ...fn_mapping[i],
            }))
        ),
        tap(() => (this.loading = false)),
        shareReplay(1)
    );

    /** Form control on change handler */
    private _onChange: (_: PlaceModuleFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: PlaceModuleFunction) => void;

    public ngOnInit() {
        this.subscription(
            'methods',
            this.method_list.subscribe((list) => {
                const active = list.find(
                    (_) => _.name === (this.method as any).name
                );
                if (active) this.setValue(active);
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system) {
            this._system.next(this.system.id);
        }
        if (changes.module) {
            this._module.next(this.module);
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: PlaceModuleFunction): void {
        this.method = new_value;
        if (this._onChange && !this.loading) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: PlaceModuleFunction) {
        if (!value) return;
        this.method = value;
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
