import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { DialogEvent } from 'apps/backoffice/src/app/common/types';
import { Observable } from 'rxjs';
import { ItemSearchFieldComponent } from '../ui/custom-fields/item-search-field.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface SelectItemModalData<T = any> {
    service_name: string;
    query_fn: (_: string) => Observable<T[]>;
}

@Component({
    selector: 'select-item-modal',
    template: `
        <div
            class="mx-2 mt-2 flex items-center justify-between rounded bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'COMMON.ITEM_ADD' | translate: { item: name } }}
            </h3>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            }
        </div>
        @if (!loading) {
            <main class="h-[65vh] w-[32rem] max-w-[calc(100vw-2rem)] px-2 pt-2">
                <item-search-field
                    class="block h-full"
                    [query_fn]="query_fn"
                    [exclude]="filter_fn"
                    [(ngModel)]="item"
                    [display_list]="true"
                ></item-search-field>
            </main>
        } @else {
            <main class="info-block">
                <div class="icon">
                    <mat-spinner diameter="32"></mat-spinner>
                </div>
                <div class="text">
                    {{ 'COMMON.PROCESSING_REQUEST' | translate }}
                </div>
            </main>
        }
        @if (!loading) {
            <footer class="flex justify-end border-t border-base-200 px-4 py-2">
                <button
                    btn
                    matRipple
                    type="submit"
                    (click)="submit()"
                    [disabled]="!item"
                >
                    {{ 'COMMON.ITEM_ADD_SELECTED' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        ItemSearchFieldComponent,
        FormsModule,
        IconComponent,
    ],
})
export class SelectItemModalComponent extends AsyncHandler {
    private _data = inject<SelectItemModalData>(MAT_DIALOG_DATA);

    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: any;
    /** Whether the item request is being processed */
    public loading: boolean;

    public readonly filter_fn = () => false;

    public get query_fn(): (_: any) => Observable<any[]> {
        return this._data.query_fn;
    }

    public get name(): string {
        return this._data.service_name;
    }

    public submit() {
        this.loading = true;
        this.event.emit({ reason: 'action', metadata: this.item });
    }
}
