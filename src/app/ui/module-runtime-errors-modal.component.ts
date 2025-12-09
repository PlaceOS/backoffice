import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
    moduleRuntimeError,
    PlaceModule,
    showModule,
} from '@placeos/ts-client';
import { firstValueFrom } from 'rxjs';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'module-runtime-errors-modal',
    template: `
        <header
            class="border-base-100 bg-base-200 sticky top-0 z-10 mx-auto my-2 flex h-14 w-[calc(100%-1rem)] max-w-full items-center justify-between rounded-sm border px-2"
        >
            <h3 class="flex items-center space-x-2 px-2 text-xl font-medium">
                <div>{{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }}</div>
                <div class="bg-base-100 rounded px-2 py-1 font-mono text-xs">
                    {{ module()?.custom_name || module()?.name }}
                </div>
            </h3>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="max-h-[65vh] overflow-auto p-4">
                @if (errors().length) {
                    <code>
                        {{
                            errors().join(
                                '
'
                            )
                        }}
                    </code>
                } @else {
                    <div
                        class="flex h-64 w-md flex-col items-center justify-center space-y-2 opacity-30"
                    >
                        {{ 'MODULES.RUNTIME_ERRORS_NO' | translate }}
                    </div>
                }
            </main>
        } @else {
            <main
                class="flex h-64 w-[24rem] flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="opacity-30">
                    {{ 'MODULES.RUNTIME_ERRORS_LOADING' | translate }}
                </div>
            </main>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        MatProgressSpinnerModule,
        IconComponent,
        MatDialogModule,
        MatRippleModule,
    ],
})
export class ModuleRuntimeErrorsModalComponent {
    private _module_id = inject<string>(MAT_DIALOG_DATA);

    public readonly loading = signal(true);
    public readonly module = signal<PlaceModule | null>(null);
    public readonly errors = signal<string[]>([]);

    constructor() {
        this._loadData();
    }

    private async _loadData() {
        this.loading.set(true);
        try {
            const module = await firstValueFrom(showModule(this._module_id));
            this.module.set(module);
            try {
                const errors = await firstValueFrom(
                    moduleRuntimeError(module.id),
                );
                this.errors.set(errors);
            } catch {
                this.errors.set([]);
            }
        } finally {
            this.loading.set(false);
        }
    }
}
