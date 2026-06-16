import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'fullscreen-modal-shell,[fs-modal-shell]',
    template: `
        <div
            class="bg-base-200 flex h-screen w-screen flex-col items-center overflow-auto"
        >
            <div
                class="border-base-300 bg-base-100 fixed top-0 mx-auto h-screen w-160 max-w-full border-x"
            ></div>
            <header
                class="border-base-100 bg-base-200 sticky top-0 z-10 mx-auto my-2 flex w-156 max-w-full items-center justify-between rounded-sm border px-4 py-2"
            >
                <h2 class="text-xl font-medium">
                    {{ heading() }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            <main
                class="z-0 mx-auto flex min-h-1/2 w-156 max-w-full flex-1 flex-col p-2"
            >
                <ng-content />
                @if (!loading() && !hide_confirm()) {
                    <div class="min-h-16 w-full"></div>
                }
            </main>
            @if (!loading() && !hide_confirm()) {
                <footer
                    class="border-base-100 bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-156 max-w-full -translate-x-1/2 items-center justify-end rounded-sm border px-4 py-2"
                >
                    <button
                        btn
                        matRipple
                        class="w-32 pr-0"
                        (click)="save.emit()"
                    >
                        <div class="flex items-center space-x-2">
                            <div>
                                {{
                                    confirm_text() ||
                                        ('COMMON.SAVE' | translate)
                                }}
                            </div>
                            <div class="flex-1"></div>
                            @if (!confirm_text()) {
                                <div class="keycap">S</div>
                            }
                        </div>
                    </button>
                </footer>
            }
        </div>
        <ng-template #load_state>
            <div
                class="flex h-1/2 w-full flex-1 flex-col items-center justify-center p-12"
            >
                <mat-spinner [diameter]="32" />
                <p class="text-center">{{ loading() }}</p>
            </div>
        </ng-template>
    `,
    imports: [
        MatDialogModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
    ],
})
export class FullscreenModalShellComponent {
    public readonly loading = input('');
    public readonly heading = input('Fullscreen Modal');
    public readonly confirm_text = input('');
    public readonly hide_confirm = input(false);
    public readonly save = output();
}
