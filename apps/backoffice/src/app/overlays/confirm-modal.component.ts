import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ApplicationIcon } from 'apps/backoffice/src/app/common/types';
import { DialogEvent } from 'apps/backoffice/src/app/common/types';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';

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

export const CONFIRM_METADATA = {};

@Component({
    selector: 'confirm-modal',
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{ title || 'Confirm' }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main confirm-modal>
            <div
                class="flex flex-col items-center p-4 space-x-4 min-w-[24rem] max-w-[28rem]"
                *ngIf="!loading; else load_state"
            >
                <div class="h-full flex items-center mb-4">
                    <app-icon class="text-5xl" [icon]="icon"></app-icon>
                </div>
                <div class="flex flex-col space-y-4 text-center">
                    <p
                        [innerHTML]="content || 'Are you sure?' | safe: 'html'"
                    ></p>
                    <div
                        *ngIf="extra"
                        [class.bg-info]="extra[0] === 'info'"
                        [class.bg-warning]="extra[0] === 'warning'"
                        [class.bg-error]="extra[0] === 'error'"
                        [class.text-info-content]="extra[0] === 'info'"
                        [class.text-warning-content]="extra[0] === 'warning'"
                        [class.text-error-content]="extra[0] === 'error'"
                        class="p-2 rounded shadow text-xs"
                        [innerHTML]="extra[1]"
                    ></div>
                </div>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="flex items-center justify-end space-x-2 p-2 border-t border-base-200"
        >
            <button
                btn
                name="accept"
                class="w-1/2"
                (click)="event.emit({ reason: 'done' })"
            >
                {{ action || 'COMMON.CONFIRM' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div
                class="flex items-center justify-center flex-col p-4 space-y-4 min-w-[24rem] max-w-[28rem]"
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
    public readonly action = this._data.action;
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
