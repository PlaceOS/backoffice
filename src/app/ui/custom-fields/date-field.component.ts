import { DatePipe } from '@angular/common';
import {
    Component,
    forwardRef,
    model,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { addYears, endOfDay, set, startOfDay } from 'date-fns';
import { CustomTooltipComponent } from '../custom-tooltip.component';
import { IconComponent } from '../icon.component';
import { TranslatePipe } from '../translate.pipe';
import { DateCalendarComponent } from './date-calendar.component';

@Component({
    selector: 'a-date-field',
    template: `
        <button
            type="button"
            class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border"
            customTooltip
            [content]="calendar_picker"
            yPosition="top"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
        >
            <div
                class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
            >
                <div class="text-base font-normal">
                    @if (date()) {
                        {{ date() | date: 'MMMM d, yyyy' }}
                    } @else {
                        <span class="opacity-30">{{
                            'COMMON.DATE_EMPTY' | translate
                        }}</span>
                    }
                </div>
            </div>
            <div class="flex h-10 w-10 items-center justify-center text-2xl">
                <icon>today</icon>
            </div>
        </button>
        <div class="h-5"></div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-[18rem] rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from"
                    [to]="until"
                    (ngModelChange)="setValue($event)"
                />
            </div>
        </ng-template>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateFieldComponent),
            multi: true,
        },
    ],
    imports: [
        FormsModule,
        DateCalendarComponent,
        IconComponent,
        CustomTooltipComponent,
        TranslatePipe,
        DatePipe,
    ],
})
export class DateFieldComponent implements OnInit, ControlValueAccessor {
    /** Whether form control is disabled */
    public readonly disabled = model<boolean>(false);
    /** Currently selected date */
    public readonly date = signal<number | null>(null);

    public readonly now = Date.now();
    /** Earliest date the user is allowed to pick */
    public readonly from = startOfDay(this.now).valueOf();
    /** Latest date the user is allowed to pick */
    public readonly until = addYears(endOfDay(this.now), 1).valueOf();

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    private readonly _tooltip = viewChild(CustomTooltipComponent);

    public ngOnInit() {
        this.date.set(Date.now());
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        if (this.disabled()) return;
        // Keep hours and minutes of the old date
        const old_date = new Date(this.date());
        let new_date = set(new_value, {
            hours: old_date.getHours(),
            minutes: old_date.getMinutes(),
        }).valueOf();
        // Check that new date is before from
        if (new_date < this.from) new_date = this.from;
        this.date.set(new_date);
        if (this._onChange) {
            this._onChange(new_date);
        }
        this._onTouch?.(new_date);
        this._tooltip()?.close();
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date.set(value);
        this._tooltip()?.close();
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
    }
}
