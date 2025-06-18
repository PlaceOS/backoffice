import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import {
    ApplicationIcon,
    DialogEvent,
} from 'apps/backoffice/src/app/common/types';

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
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ title || 'Confirm' }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <app-icon>close</app-icon>
                </button>
            }
        </header>
        <main confirm-modal>
            @if (!loading) {
                <div
                    class="flex min-w-[24rem] max-w-[28rem] flex-col items-center space-x-4 p-4"
                >
                    <div class="mb-4 flex h-full items-center">
                        <app-icon class="text-5xl" [icon]="icon"></app-icon>
                    </div>
                    <div class="flex flex-col space-y-4 text-center">
                        <p
                            [innerHTML]="
                                content || 'Are you sure?' | safe: 'html'
                            "
                        ></p>
                        @if (extra) {
                            <div
                                [class.bg-info]="extra[0] === 'info'"
                                [class.bg-warning]="extra[0] === 'warning'"
                                [class.bg-error]="extra[0] === 'error'"
                                [class.text-info-content]="extra[0] === 'info'"
                                [class.text-warning-content]="
                                    extra[0] === 'warning'
                                "
                                [class.text-error-content]="
                                    extra[0] === 'error'
                                "
                                class="rounded p-2 text-xs shadow"
                                [innerHTML]="extra[1]"
                            ></div>
                        }
                    </div>
                </div>
            } @else {
                <div
                    class="flex h-56 min-w-[24rem] max-w-[28rem] flex-col items-center justify-center space-y-4 p-4"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            }
        </main>
        @if (!loading) {
            <footer
                class="flex items-center justify-end space-x-2 border-t border-base-200 p-2"
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
        }
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
    standalone: false,
})
export class ConfirmModalComponent extends AsyncHandler {
    private _data = inject<ConfirmModalData>(MAT_DIALOG_DATA);

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
}
