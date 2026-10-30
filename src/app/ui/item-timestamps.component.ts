import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DateFromPipe } from './pipes/date-from.pipe';
import { TranslatePipe } from './translate.pipe';

/**
 * Created and updated rows for an item details grid. Each row is a label cell
 * and a value cell, so the host takes no space in the grid.
 */
@Component({
    selector: 'item-timestamps',
    template: `
        <div class="flex items-center text-sm font-medium">
            {{ 'COMMON.CREATED_AT' | translate }}
        </div>
        <ng-container
            *ngTemplateOutlet="value; context: { $implicit: created_at() }"
        />
        @if (updated_at()) {
            <div class="flex items-center text-sm font-medium">
                {{ 'COMMON.UPDATED_AT' | translate }}
            </div>
            <ng-container
                *ngTemplateOutlet="value; context: { $implicit: updated_at() }"
            />
        }
        <ng-template #value let-seconds>
            <div class="flex items-center">
                <span
                    class="select-text"
                    [matTooltip]="
                        (seconds * 1000 | date: 'mediumDate') +
                        ', ' +
                        (seconds * 1000 | date: 'shortTime')
                    "
                    matTooltipPosition="right"
                >
                    {{ seconds * 1000 | dateFrom }}
                </span>
            </div>
        </ng-template>
    `,
    styles: [':host { display: contents; }'],
    imports: [
        DatePipe,
        DateFromPipe,
        MatTooltipModule,
        TranslatePipe,
        NgTemplateOutlet,
    ],
})
export class ItemTimestampsComponent {
    /** Unix time in seconds */
    public readonly created_at = input<number>(0);
    /** Unix time in seconds. Hidden when not set. */
    public readonly updated_at = input<number>(0);
}
