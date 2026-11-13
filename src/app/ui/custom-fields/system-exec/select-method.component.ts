import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    input,
    model,
    OnChanges,
    resource,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
    functionList,
    PlaceModuleFunction,
    PlaceSystem,
} from '@placeos/ts-client';
import { AsyncHandler } from '../../../common/async-handler.class';
import { FormFieldComponent } from '../../controls/form-field.component';
import { OptionComponent } from '../../controls/option.component';
import { SelectComponent } from '../../controls/select.component';
import { SpinnerComponent } from '../../controls/spinner.component';
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
                <app-form-field class="h-14 w-full">
                    <app-select
                        [placeholder]="
                            'COMMON.EXECUTE_METHOD_SELECT' | translate
                        "
                        [disabled]="disabled()"
                        [(ngModel)]="method"
                        (ngModelChange)="setValue($event)"
                        (openedChange)="setOpen($event)"
                    >
                        <div select-search>
                            <input
                                #method_search
                                name="method-search"
                                [ngModel]="method_filter()"
                                (ngModelChange)="method_filter.set($event)"
                                (mousedown)="$event.stopPropagation()"
                                (click)="$event.stopPropagation()"
                                (keydown)="$event.stopPropagation()"
                                [placeholder]="
                                    'COMMON.SEARCH_FOR'
                                        | translate: { name: 'methods' }
                                "
                            />
                        </div>
                        <p select-empty>
                            {{
                                'COMMON.SEARCH_EMPTY'
                                    | translate: { name: 'methods' }
                            }}
                        </p>
                        @for (method of filtered_method_list(); track method) {
                            <app-option [value]="method">
                                {{ method.name }}
                            </app-option>
                        }
                    </app-select>
                </app-form-field>
            } @else {
                <div class="flex items-center justify-center space-x-2 p-4">
                    <p class="opacity-30">
                        {{ 'COMMON.EXECUTE_METHOD_EMPTY' | translate }}
                    </p>
                </div>
            }
        } @else {
            <div class="flex items-center justify-center space-x-2 p-4">
                <app-spinner diameter="32" />
                <p>{{ 'COMMON.EXECUTE_METHOD_LOADING' | translate }}</p>
            </div>
        }
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectMethodComponent),
            multi: true,
        },
    ],
    imports: [
        SpinnerComponent,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        TranslatePipe,
        FormsModule,
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
    public readonly disabled = model(false);

    public readonly loading = signal(false);

    private readonly _method_list = resource({
        params: () => ({
            id: this._system(),
            module: this._module(),
        }),
        loader: async ({ params }) => {
            const { id, module } = params;
            if (!id || !module?.module) return [] as MethodOption[];
            this.loading.set(true);
            try {
                const fn_mapping = await functionList(
                    id,
                    module.module,
                    module.index,
                ).catch(() => ({}));
                return Object.keys(fn_mapping || {})
                    .map((i) => ({
                        name: i,
                        ...fn_mapping[i],
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name));
            } finally {
                this.loading.set(false);
            }
        },
    });

    public readonly method_list = computed(
        () => this._method_list.value() || [],
    );
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
        if (this.disabled()) return;
        this.method.set(new_value);
        if (this._onChange && !this.loading()) {
            this._onChange(new_value);
        }
        this._onTouch?.(new_value);
    }

    /** Handle dropdown opening to reset and focus method search. */
    public setOpen(open: boolean): void {
        if (!open) {
            this._onTouch?.(this.method());
            return;
        }
        if (this.disabled()) return;
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

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }
}
