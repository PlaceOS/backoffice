import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { IconComponent } from './icon.component';

export interface ReorderItemsOptions {
    type: string;
    items: { id: string; name: string }[];
}

@Component({
    selector: 'reorder-items-modal',
    template: `
        <header
            class="flex w-full items-center justify-between border-b border-base-200 p-2"
        >
            <h2 class="p-2">Reorder {{ type }}</h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="max-h-[65vh] min-w-[20rem] overflow-auto p-4">
            <div
                cdkDropList
                class="flex w-full flex-col divide-y divide-base-200 rounded border border-base-200"
                (cdkDropListDropped)="drop($event)"
            >
                @for (item of items | async; track item; let i = $index) {
                    <div class="flex items-center space-x-2 p-2" cdkDrag>
                        <div
                            class="flex h-8 min-w-8 items-center justify-center rounded-full bg-base-200 text-sm font-medium"
                        >
                            {{ i + 1 }}
                        </div>
                        <div class="flex-1 px-2">{{ item.name }}</div>
                        @if (changed.length) {
                            <div></div>
                        }
                        <div
                            class="h-12 w-full border-4 border-dashed border-base-300 bg-base-200"
                            *cdkDragPlaceholder
                        ></div>
                    </div>
                }
            </div>
        </main>
        <footer
            class="flex items-center justify-end space-x-2 border-t border-base-200 p-2"
        >
            <button
                btn
                matRipple
                class="w-40"
                [disabled]="!changed.length"
                [mat-dialog-close]="[changed, order]"
            >
                Apply Order
            </button>
        </footer>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        DragDropModule,
        CommonModule,
        IconComponent,
    ],
})
export class ReorderItemsModalComponent {
    private _data = inject<ReorderItemsOptions>(MAT_DIALOG_DATA);

    public readonly items = new BehaviorSubject([]);
    public type: string = this._data.type;
    public changed: string[] = [];
    public order: string[] = [];

    public ngOnInit() {
        this.items.next(this._data.items);
        this.order = this._data.items.map((i) => i.id);
    }

    public drop(event: CdkDragDrop<string[]>) {
        const list = [...this.items.getValue()];
        moveItemInArray(list, event.previousIndex, event.currentIndex);
        this.changed.push(list[event.currentIndex].id);
        this.order = list.map((i) => i.id);
        this.items.next(list);
    }
}
