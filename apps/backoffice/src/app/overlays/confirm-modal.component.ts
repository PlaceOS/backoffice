import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApplicationIcon } from 'apps/backoffice/src/app/common/types';
import { DialogEvent } from 'apps/backoffice/src/app/common/types';
import { AsyncHandler } from 'apps/backoffice/src/app/common/base.class';

export type ConfirmExtraType = 'info' | 'warning' | 'error';

export interface ConfirmModalData {
    /** Title of the modal */
    title: string;
    /** Contents of the modal */
    content: string;
    extra?: [ConfirmExtraType, string];
    /** Text displaed on the confirmation button */
    action?: string;
    /** Icon to display on the modal */
    icon: ApplicationIcon;
}

export const CONFIRM_METADATA = {
    height: 'auto',
    width: '24em',
    maxHeight: 'calc(100vh - 2em)',
    maxWidth: 'calc(100vw - 2em)',
};

@Component({
    selector: 'confirm-modal',
    template: `
        <header class="p-4">
            <h3>{{ title || 'Confirm' }}</h3>
        </header>
        <main>
            <div
                class="flex items-center justify-center flex-col p-4 space-y-2 text-center min-w-[16rem]"
                *ngIf="!loading; else load_state"
            >
                <app-icon class="text-3xl" [icon]="icon"></app-icon>
                <p [innerHTML]="content || 'Are you sure?'"></p>
                <div
                    *ngIf="extra"
                    [class.bg-blue-500]="extra[0] === 'info'"
                    [class.bg-yellow-500]="extra[0] === 'warning'"
                    [class.text-white]="
                        extra[0] === 'error' || extra[0] === 'info'
                    "
                    [class.bg-red-500]="extra[0] === 'error'"
                    class="p-2 rounded shadow text-xs"
                    [innerHTML]="extra[1]"
                ></div>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="flex items-center justify-end space-x-2 p-2 border-t border-gray-200"
        >
            <button btn class="inverse min-w-[8rem]" mat-dialog-close>
                Cancel
            </button>
            <button
                btn
                name="accept"
                class="min-w-[8rem]"
                (click)="event.emit({ reason: 'done' })"
            >
                {{ action || 'Ok' }}
            </button>
        </footer>
        <ng-template #load_state>
            <div
                class="flex items-center justify-center flex-col p-4 space-y-4 h-32 w-64"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            .icon {
                height: 1.2em;
                width: 1.2em;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2em;
            }
        `,
    ],
})
export class ConfirmModalComponent extends AsyncHandler {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public readonly title = this._data.title || 'Confirm';
    /** Body of the confirm modal */
    public readonly content = this._data.content || 'Confirm';
    /** Display text on the confirm button */
    public readonly action = this._data.action || 'Ok';
    /** Extra information to display on the confirm modal */
    public readonly extra = this._data.extra;
    /** Display icon properties */
    public readonly icon = this._data.icon;
    /** Loading state */
    public loading: string;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ConfirmModalData) {
        super();
    }
}
