import { CommonModule } from '@angular/common';
import {
    Component,
    forwardRef,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
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
import { AsyncHandler } from '../../../common/async-handler.class';
import { TranslatePipe } from '../../translate.pipe';
import { ModuleLike } from './select-module.component';

@Component({
    selector: 'select-module-method',
    template: `
        @if (!loading()) {
            @if ((method_list | async)?.length) {
                <mat-form-field class="h-14 w-full" appearance="outline">
                    <mat-select
                        [placeholder]="
                            'COMMON.EXECUTE_METHOD_SELECT' | translate
                        "
                        [(ngModel)]="method"
                        (ngModelChange)="setValue($event)"
                    >
                        @for (method of method_list | async; track method) {
                            <mat-option [value]="method">
                                {{ method.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            } @else {
                <div class="flex items-center justify-center space-x-2 p-4">
                    <p class="opacity-30">
                        {{ 'COMMON.EXECUTE_METHOD_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'COMMON.EXECUTE_METHOD_LOADING' | translate }}</p>
            </div>
        }
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectMethodComponent),
            multi: true,
        },
    ],
    imports: [
        MatProgressSpinnerModule,
        TranslatePipe,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        CommonModule,
    ],
})
export class SelectMethodComponent
    extends AsyncHandler
    implements OnInit, OnChanges, ControlValueAccessor
{
    /** ID of the system to select the module from */
    public readonly system = input<PlaceSystem>(undefined);
    /** ID of the system to select the module from */
    public readonly module = input<ModuleLike>(undefined);

    private _system = new BehaviorSubject('');
    private _module = new BehaviorSubject<ModuleLike>({} as any);

    public readonly method = signal<PlaceModuleFunction>(undefined);

    public readonly loading = signal(false);

    public method_list = combineLatest([this._system, this._module]).pipe(
        distinctUntilChanged(),
        tap(() => this.loading.set(true)),
        switchMap(([id, { module, index }]) =>
            !!id && !!module ? functionList(id, module, index) : of({}),
        ),
        catchError(() => of({})),
        map((fn_mapping) =>
            Object.keys(fn_mapping || {}).map((i) => ({
                name: i,
                ...fn_mapping[i],
            })),
        ),
        tap(() => this.loading.set(false)),
        shareReplay(1),
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
                    (_) => _.name === (this.method as any)?.name,
                );
                if (active) this.setValue(active);
            }),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system) {
            this._system.next(this.system().id);
        }
        if (changes.module) {
            this._module.next(this.module());
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: PlaceModuleFunction): void {
        this.method.set(new_value);
        if (this._onChange && !this.loading()) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: PlaceModuleFunction) {
        if (!value) return;
        this.method.set(value);
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
