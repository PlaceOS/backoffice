import { Component, inject, output } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
            @if (!loading) {
                <div class="body">
                    <div class="content">
                        <p>
                            How many times would you like to duplicate this
                            item?
                        </p>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="times"
                                type="number"
                                [(ngModel)]="times"
                                placeholder="Number of duplications"
                                required
                            />
                        </mat-form-field>
                    </div>
                </div>
            } @else {
                <div class="body">
                    @if (!done) {
                        <div class="info">Creating item duplicates...</div>
                    }
                    @for (itm of temp; track itm.id; let i = $index) {
                        <div class="item">
                            <div class="name">
                                {{ item.name }} ({{ i + 1 }})
                            </div>
                            <div class="status">
                                @if (status[i] !== 'loading') {
                                    <icon [class]="status[i]">
                                        {{
                                            status[i] === 'done'
                                                ? 'done'
                                                : 'close'
                                        }}
                                    </icon>
                                }
                                @if (status[i] === 'loading') {
                                    <mat-spinner diameter="24" />
                                }
                            </div>
                        </div>
                    }
                </div>
            }
        </mat-dialog-content>
        @if (!loading) {
            <mat-dialog-actions>
                <button btn class="inverse" mat-dialog-close>Cancel</button>
                <button
                    btn
                    name="accept"
                    [disabled]="!times || times <= 0"
                    (click)="duplicate()"
                >
                    Duplicate
                </button>
            </mat-dialog-actions>
        }
    `,
    styles: [
        `
            .body {
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 1em 0.5em;
            }

            .icon {
                height: 1.2em;
                width: 1.2em;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2em;
            }

            .content {
                min-width: 16rem;
                text-align: center;
                padding: 1em;
            }

            .info {
                font-size: 0.8em;
                opacity: 0.65;
                margin-bottom: 1em;
            }

            .item {
                display: flex;
                align-items: center;
                min-width: 20em;
                max-width: 24em;
                padding: 0.5em 1em;
                border-radius: 4px;
                &:nth-child(2) {
                    background-color: rgba(#000, 0.1);
                }

                .name {
                    flex: 1;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .status {
                color: var(--error);
            }

            .done {
                color: var(--success);
            }

            mat-dialog-actions {
                button {
                    min-width: 8em;
                }
            }
        `,
    ],
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
    /** Number of times to duplicate the given item */
    public times = 1;
    /** Number of times to duplicate the given item */
    public status: HashMap<string> = {};
    /** Whether request is loading */
    public loading = false;
    /** Temporary array for generating UI elements */
    public temp: HashMap[] = [];
    /** Whether duplication has completed */
    public done = false;

    /** Item selected to be duplicated */
    public get item() {
        return this._data.item;
    }

    /**
     * Create the specified number of duplicate items
     */
    public async duplicate() {
        this.loading = true;
        const ItemConstructor = this.item.constructor as new (
            data: HashMap,
        ) => HashMap;
        const item = this._data.item;
        const list = [];
        this.temp = new Array(this.times).fill({});
        for (let i = 0; i < this.times; i++) {
            const new_item = new ItemConstructor({
                ...item,
                id: '',
                name: `${item.name} (${i + 1})`,
            });
            this.status[i] = 'loading';
            const saved_item = await this._data.save(new_item).catch((err) => {
                this.status[i] = `Error: ${err.message || err}`;
                notifyError(this.status[i]);
            });
            list.push(saved_item);
            if (this.status[i] === 'loading') {
                this.status[i] = 'done';
            }
        }
        const clean_list = list.filter((item) => !!item);
        this.event.emit({
            reason: 'done',
            metadata: clean_list,
        } as DialogEvent);
        this.done = true;
        setTimeout(() => this._dialog_ref.close(), 5000);
    }
}
