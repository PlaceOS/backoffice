import {
    Component,
    computed,
    effect,
    ElementRef,
    forwardRef,
    input,
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { PlaceSystem, queryModules } from '@placeos/ts-client';
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
                    (openedChange)="setOpen($event)"
                >
                    <mat-option class="relative hover:bg-transparent!">
                        <input
                            #module_search
                            matInput
                            name="module-search"
                            [ngModel]="module_filter()"
                            (ngModelChange)="module_filter.set($event)"
                            (mousedown)="$event.stopPropagation()"
                            (click)="$event.stopPropagation()"
                            (keydown)="$event.stopPropagation()"
                            class="module-search-input pointer-event-auto focus:bg-base-200/30 absolute inset-1 h-auto w-[calc(100%-0.5rem)] cursor-text rounded-sm p-4"
                            [placeholder]="
                                'COMMON.SEARCH_FOR'
                                    | translate: { name: 'modules' }
                            "
                        />
                    </mat-option>
                    @for (mod of filtered_modules(); track mod) {
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
    styles: [
        `
            .module-search-input {
                width: 100%;
                outline: none;
            }

            .module-search-input::placeholder {
                color: var(--base-400, currentColor);
                opacity: 0.65;
            }
        `,
    ],
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
        MatInputModule,
        MatSelectModule,
        TranslatePipe,
        FormsModule,
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
    public readonly module_filter = signal('');

    public readonly loading = signal(false);

    private readonly _modules = resource({
        params: () => ({ id: this._system(), change: this._change() }),
        loader: async ({ params }) => {
            if (!params.id) return [] as (ModuleLike & { running: boolean })[];
            this.loading.set(true);
            try {
                const mod_list = await queryModules({
                    control_system_id: params.id,
                    limit: 500,
                    complete: true,
                } as Record<string, unknown>)
                    .then(({ data }) => data)
                    .catch(() => []);
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
            } finally {
                this.loading.set(false);
            }
        },
    });

    public readonly modules = computed(() => this._modules.value() || []);
    public readonly filtered_modules = computed(() => {
        const search = this.module_filter().trim().toLowerCase();
        if (!search) return this.modules();
        return this.modules().filter((mod) =>
            `${mod.module} ${mod.name} ${mod.index}`
                .toLowerCase()
                .includes(search),
        );
    });

    private readonly _search_el =
        viewChild<ElementRef<HTMLInputElement>>('module_search');

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

    /** Handle dropdown opening to reset and focus module search. */
    public setOpen(open: boolean): void {
        if (!open) return;
        this.module_filter.set('');
        this.timeout('focus_search', () =>
            this._search_el()?.nativeElement.focus(),
        );
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
