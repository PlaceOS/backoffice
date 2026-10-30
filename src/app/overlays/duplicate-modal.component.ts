import {
    Component,
    inject,
    output,
    signal,
    WritableSignal,
} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
    MatDialogState,
} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { describeError } from '../common/errors';
import { notifyError } from '../common/notifications';
import { DialogEvent, HashMap } from '../common/types';
import { IconComponent } from '../ui/icon.component';

export interface DuplicateModalData {
    item: HashMap;
    save: <T>(_: T) => Promise<T>;
}

@Component({
    selector: 'app-duplicate-modal',
    template: `
        <header>
            <h3 mat-dialog-title>Duplicate Item</h3>
        </header>
        <mat-dialog-content>
            @if (!loading()) {
                <div class="flex flex-col items-center p-4 text-center">
                    <p>How many times would you like to duplicate this item?</p>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="times"
                            type="number"
                            min="1"
                            [max]="MAX_TIMES"
                            step="1"
                            [(ngModel)]="times"
                            placeholder="Number of duplications"
                            required
                        />
                    </mat-form-field>
                </div>
            } @else {
                <div class="flex flex-col items-center px-2 py-4">
                    @if (!done()) {
                        <div class="mb-4 text-sm opacity-60">
                            Creating item duplicates...
                        </div>
                    }
                    @for (itm of temp(); track $index; let i = $index) {
                        <div
                            class="odd:bg-base-200 flex w-80 items-center rounded px-4 py-2"
                        >
                            <div class="flex-1 truncate">
                                {{ item.name }} ({{ i + 1 }})
                            </div>
                            @if (status()[i] === 'loading') {
                                <mat-spinner diameter="24" />
                            } @else if (status()[i] === 'done') {
                                <icon class="text-success">done</icon>
                            } @else {
                                <icon class="text-error">close</icon>
                            }
                        </div>
                    }
                </div>
            }
        </mat-dialog-content>
        @if (!loading()) {
            <mat-dialog-actions>
                <button btn class="inverse min-w-32" mat-dialog-close>
                    Cancel
                </button>
                <button
                    btn
                    name="accept"
                    class="min-w-32"
                    [disabled]="!validTimes()"
                    (click)="duplicate()"
                >
                    Duplicate
                </button>
            </mat-dialog-actions>
        }
    `,
    imports: [
        MatDialogModule,
        IconComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule,
    ],
})
export class DuplicateModalComponent {
    private _data = inject<DuplicateModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<DuplicateModalComponent>>(MatDialogRef);

    /** Emitter for user action on the modal */
    public readonly event = output<DialogEvent>();
    public readonly MAX_TIMES = 50;
    /** Number of times to duplicate the given item */
    public times = 1;
    /** Number of times to duplicate the given item */
    public readonly status = signal<HashMap<string>>({});
    /** Whether request is loading */
    public readonly loading = signal(false);
    /** Temporary array for generating UI elements */
    public readonly temp: WritableSignal<HashMap[]> = signal([]);
    /** Whether duplication has completed */
    public readonly done = signal(false);

    /** Item selected to be duplicated */
    public get item() {
        return this._data.item;
    }

    /**
     * Create the specified number of duplicate items
     */
    public validTimes() {
        const times = +this.times;
        return Number.isInteger(times) && times >= 1 && times <= this.MAX_TIMES;
    }

    public async duplicate() {
        if (this.loading()) return;
        if (!this.validTimes()) {
            return notifyError(
                `Number of duplicates must be a whole number from 1 to ${this.MAX_TIMES}`,
            );
        }
        this.times = +this.times;
        this.loading.set(true);
        const ItemConstructor = this.item.constructor as new (
            data: HashMap,
        ) => HashMap;
        const item = this._data.item;
        const list = [];
        this.temp.set(new Array(this.times).fill({}));
        for (let i = 0; i < this.times; i++) {
            // Stop creating duplicates if the user closes the dialog
            if (this._dialog_ref.getState() !== MatDialogState.OPEN) break;
            const new_item = new ItemConstructor({
                ...item,
                id: '',
                name: `${item.name} (${i + 1})`,
            });
            this.setStatus(i, 'loading');
            const saved_item = await this._data.save(new_item).catch((err) => {
                this.setStatus(i, `Error: ${describeError(err)}`);
                notifyError(this.status()[i]);
            });
            list.push(saved_item);
            if (this.status()[i] === 'loading') {
                this.setStatus(i, 'done');
            }
        }
        const clean_list = list.filter((item) => !!item);
        this.event.emit({
            reason: 'done',
            metadata: clean_list,
        } as DialogEvent);
        this.done.set(true);
        setTimeout(() => this._dialog_ref.close(), 5000);
    }

    private setStatus(index: number, value: string): void {
        this.status.update((status) => ({ ...status, [index]: value }));
    }
}
