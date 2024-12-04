import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { showModule, moduleRuntimeError } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AsyncHandler } from '../common/async-handler.class';

@Component({
    selector: 'module-runtime-errors-modal',
    template: `
        <header class="h-14">
            <h3 class="px-2">
                {{ 'MODULES.RUNTIME_ERRORS_VIEW' | translate }} -
                {{ (module | async)?.custom_name || (module | async)?.name }}
            </h3>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="max-h-[65vh] overflow-auto p-4"
            *ngIf="!loading; else load_state"
        >
            <code *ngIf="(errors | async)?.length; else empty_state">
                {{ (errors | async)?.join('
') }}
            </code>
            <ng-template #empty_state>
                <div
                    class="flex flex-col items-center justify-center w-[24rem] h-64 space-y-2 opacity-30"
                >
                    {{ 'MODULES.RUNTIME_ERRORS_NO' | translate }}
                </div>
            </ng-template>
        </main>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center w-[24rem] h-64 space-y-2"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="opacity-30">
                    {{ 'MODULES.RUNTIME_ERRORS_LOADING' | translate }}
                </div>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class ModuleRuntimeErrorsModalComponent extends AsyncHandler {
    public loading = false;
    public readonly id = new BehaviorSubject('');
    public readonly module = this.id.pipe(
        switchMap((id) => {
            this.loading = true;
            return showModule(id);
        }),
        shareReplay(1)
    );
    public readonly errors = this.module.pipe(
        switchMap(({ id }) =>
            moduleRuntimeError(id).pipe(catchError(() => of([] as string[])))
        ),
        tap(() => (this.loading = false)),
        shareReplay(1)
    );

    constructor(@Inject(MAT_DIALOG_DATA) private _module_id: string) {
        super();
    }

    public ngOnInit() {
        this.id.next(this._module_id);
        this.subscription('errors', this.errors.subscribe());
    }
}
