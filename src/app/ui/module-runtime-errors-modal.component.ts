import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { moduleRuntimeError, showModule } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'module-runtime-errors-modal',
    template: `
        <header
            class="border-base-100 bg-base-200 sticky top-0 z-10 mx-auto my-2 flex max-w-full items-center justify-between rounded-sm border px-4 py-2"
        >
            <h3 class="px-2">
                {{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }} -
                {{ (module | async)?.custom_name || (module | async)?.name }}
            </h3>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main class="max-h-[65vh] overflow-auto p-4">
                @if ((errors | async)?.length) {
                    <code>
                        {{
                            (errors | async)?.join(
                                '
                '
                            )
                        }}
                    </code>
                } @else {
                    <div
                        class="flex h-64 w-[24rem] flex-col items-center justify-center space-y-2 opacity-30"
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
        CommonModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        IconComponent,
        MatDialogModule,
        MatRippleModule,
    ],
})
export class ModuleRuntimeErrorsModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _module_id = inject(MAT_DIALOG_DATA);

    public loading = false;
    public readonly id = new BehaviorSubject('');
    public readonly module = this.id.pipe(
        switchMap((id) => {
            this.loading = true;
            return showModule(id);
        }),
        shareReplay(1),
    );
    public readonly errors = this.module.pipe(
        switchMap(({ id }) =>
            moduleRuntimeError(id).pipe(catchError(() => of([] as string[]))),
        ),
        tap(() => (this.loading = false)),
        shareReplay(1),
    );

    public ngOnInit() {
        this.id.next(this._module_id);
        this.subscription('errors', this.errors.subscribe());
    }
}
