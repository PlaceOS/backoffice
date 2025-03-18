import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'fullscreen-modal-shell,[fs-modal-shell]',
    template: `
        <div
            class="flex h-screen w-screen flex-col items-center overflow-auto bg-base-200"
        >
            <div
                class="fixed top-0 mx-auto h-screen w-[40rem] max-w-full border-x border-base-300 bg-base-100"
            ></div>
            <header
                class="sticky top-0 z-10 mx-auto my-2 w-[39rem] max-w-full rounded border border-base-100 bg-base-200 px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    {{ heading }}
                </h2>
                <button icon matRipple mat-dialog-close *ngIf="!loading">
                    <app-icon>close</app-icon>
                </button>
            </header>
            <main
                class="z-0 mx-auto h-1/2 w-[39rem] max-w-full flex-1 space-y-8 px-4 py-2"
            >
                <ng-content></ng-content>
                <div class="h-10 w-full"></div>
            </main>
            <footer
                class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-[39rem] max-w-full -translate-x-1/2 items-center justify-end rounded border border-base-100 bg-base-200 px-4 py-2"
                *ngIf="!loading && !hide_confirm"
            >
                <button btn matRipple class="w-32" (click)="save.emit()">
                    <div class="flex items-center space-x-2">
                        <div>
                            {{ confirm_text || ('COMMON.SAVE' | translate) }}
                        </div>
                        <div
                            class="mono relative top-0.5 text-sm"
                            *ngIf="!confirm_text"
                        >
                            [S]
                        </div>
                    </div>
                </button>
            </footer>
        </div>
        <ng-template #load_state>
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center justify-center p-12"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="text-center">{{ loading }}</p>
            </div>
        </ng-template>
    `,
    standalone: false,
})
export class FullscreenModalShellComponent {
    @Input() public loading = '';
    @Input() public heading = 'Fullscreen Modal';
    @Input() public confirm_text = '';
    @Input() public hide_confirm = false;
    @Output() public save = new EventEmitter();
}
