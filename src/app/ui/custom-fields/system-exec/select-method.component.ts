import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    input,
    OnChanges,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
    functionList,
    PlaceModuleFunction,
    PlaceSystem,
} from '@placeos/ts-client';
import { combineLatest, of } from 'rxjs';
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

interface MethodOption extends PlaceModuleFunction {
    name: string;
}

@Component({
    selector: 'select-module-method',
    template: `
        @if (!loading()) {
            @if (method_list().length) {
                <mat-form-field class="h-14 w-full" appearance="outline">
                    <mat-select
                        [placeholder]="
                            'COMMON.EXECUTE_METHOD_SELECT' | translate
                        "
                        [(ngModel)]="method"
                        (ngModelChange)="setValue($event)"
                        (openedChange)="setOpen($event)"
                    >
                        <mat-option class="relative hover:bg-transparent!">
                            <input
                                #method_search
                                matInput
                                name="method-search"
                                [ngModel]="method_filter()"
                                (ngModelChange)="method_filter.set($event)"
                                (mousedown)="$event.stopPropagation()"
                                (click)="$event.stopPropagation()"
                                (keydown)="$event.stopPropagation()"
                                class="method-search-input pointer-event-auto focus:bg-base-200/30 absolute inset-1 h-auto w-[calc(100%-0.5rem)] cursor-text rounded-sm p-4"
                                [placeholder]="
                                    'COMMON.SEARCH_FOR'
                                        | translate: { name: 'methods' }
                                "
                            />
                        </mat-option>
                        @for (method of filtered_method_list(); track method) {
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
    styles: [
        `
            .method-search-input {
                width: 100%;
                outline: none;
            }

            .method-search-input::placeholder {
                color: var(--base-400, currentColor);
                opacity: 0.65;
            }
        `,
    ],
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
        MatInputModule,
        MatSelectModule,
        FormsModule,
        CommonModule,
    ],
})
export class SelectMethodComponent
    extends AsyncHandler
    implements OnChanges, ControlValueAccessor
{
    /** ID of the system to select the module from */
    public readonly system = input<PlaceSystem>(undefined);
    /** ID of the system to select the module from */
    public readonly module = input<ModuleLike>(undefined);

    private _system = signal('');
    private _module = signal<ModuleLike>({} as ModuleLike);

    public readonly method = signal<PlaceModuleFunction>(undefined);
    public readonly method_filter = signal('');

    public readonly loading = signal(false);

    private readonly _method_list = toSignal(
        combineLatest([
            toObservable(this._system),
            toObservable(this._module),
        ]).pipe(
            distinctUntilChanged(),
            tap(() => this.loading.set(true)),
            switchMap(([id, { module, index }]) =>
                !!id && !!module ? functionList(id, module, index) : of({}),
            ),
            catchError(() => of({})),
            map((fn_mapping) =>
                Object.keys(fn_mapping || {})
                    .map((i) => ({
                        name: i,
                        ...fn_mapping[i],
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name)),
            ),
            tap(() => this.loading.set(false)),
            shareReplay(1),
        ),
        { initialValue: [] as MethodOption[] },
    );

    public readonly method_list = this._method_list;
    public readonly filtered_method_list = computed(() => {
        const search = this.method_filter().trim().toLowerCase();
        if (!search) return this.method_list();
        return this.method_list().filter((method) =>
            method.name.toLowerCase().includes(search),
        );
    });

    private readonly _search_el =
        viewChild<ElementRef<HTMLInputElement>>('method_search');

    /** Form control on change handler */
    private _onChange: (_: PlaceModuleFunction) => void;
    /** Form control on touch handler */
    private _onTouch: (_: PlaceModuleFunction) => void;

    constructor() {
        super();
        effect(() => {
            const list = this.method_list();
            const selected = this.method() as { name?: string } | undefined;
            const active = list.find((_) => _.name === selected?.name);
            if (active) this.setValue(active);
        });
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.system) {
            this._system.set(this.system()?.id || '');
        }
        if (changes.module) {
            this._module.set(this.module());
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

    /** Handle dropdown opening to reset and focus method search. */
    public setOpen(open: boolean): void {
        if (!open) return;
        this.method_filter.set('');
        this.timeout('focus_search', () =>
            this._search_el()?.nativeElement.focus(),
        );
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
