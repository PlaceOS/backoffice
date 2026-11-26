import {
    Component,
    computed,
    input,
    OnChanges,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import type { SaveWarning } from '../../common/actions';
import { describeError, readError } from '../../common/errors';
import { i18n } from '../../common/locale.service';
import { notify } from '../../common/notifications';
import { PlaceResource } from '../../common/types';
import { SpinnerComponent } from '../../ui/controls/spinner.component';
import { TooltipDirective } from '../../ui/controls/tooltip.directive';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { VirtualScrollComponent } from '../../ui/virtual-scroll.component';

const BATCH_SIZE = 5;

/** Status of one row. `message` gives the reason of a warning or an error */
interface RowStatus {
    state: '' | 'loading' | 'done' | 'warning' | 'error';
    message?: string;
}

@Component({
    selector: 'bulk-item-status-list',
    template: `
        <div class="flex h-full min-h-0 w-full flex-col items-center pb-4">
            @if (!is_done()) {
                <div class="info font-medium">
                    {{ 'COMMON.BULK_UPLOADING' | translate }}
                </div>
                <div class="text-base-content/60 mb-2 text-sm">
                    {{ processed_count() }} / {{ list().length }} processed
                    @if (error_count() > 0) {
                        ({{ error_count() }} failed)
                    }
                </div>
            } @else {
                <div class="mb-2 text-sm font-medium">
                    {{
                        'COMMON.BULK_SUMMARY'
                            | translate
                                : {
                                      created: completed_count(),
                                      warnings: warning_count(),
                                      failed: error_count(),
                                  }
                    }}
                </div>
            }
            <div
                class="bg-base-200 mb-4 h-2 w-full overflow-hidden rounded-full"
            >
                <div
                    class="bg-info h-full rounded-full transition-all"
                    [class.bg-success]="is_done() && !has_issues()"
                    [class.bg-warning]="is_done() && has_issues()"
                    [style.width.%]="progress()"
                ></div>
            </div>
            <!-- Virtual rows keep large imports to the visible rows only -->
            <div class="min-h-0 w-full flex-1">
                <virtual-scroll
                    [items]="list()"
                    [item_size]="64"
                    [item_template]="row_template"
                />
            </div>
            @if (is_done()) {
                <div
                    class="bg-base-100 border-base-200 fixed right-0 bottom-0 left-0 z-20 flex justify-end border-t px-4 py-4 shadow-lg"
                >
                    <button
                        btn
                        ripple
                        class="w-36"
                        (click)="close_modal.emit()"
                    >
                        Close
                    </button>
                </div>
            }
        </div>
        <ng-template #row_template let-item="item" let-i="index">
            @let state = status()[i]();
            <div
                class="border-base-200 flex h-16 w-full items-center rounded-sm border p-2"
            >
                <div class="flex min-w-0 flex-1 flex-col justify-center px-2">
                    <div class="name truncate">{{ item.name }}</div>
                    @if (state.message) {
                        <!-- Focus shows the full reason in the tooltip -->
                        <div
                            tabindex="0"
                            class="truncate rounded-sm text-xs"
                            [class]="
                                state.state === 'error'
                                    ? 'text-(--error-text)'
                                    : ''
                            "
                            [appTooltip]="state.message"
                        >
                            {{ state.message }}
                        </div>
                    }
                </div>
                <div class="status">
                    @if (state.state && state.state !== 'loading') {
                        <div
                            class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow-sm"
                            [class.bg-error]="state.state === 'error'"
                            [class.text-error-content]="state.state === 'error'"
                            [class.bg-warning]="state.state === 'warning'"
                            [class.text-warning-content]="
                                state.state === 'warning'
                            "
                            [class.bg-success]="state.state === 'done'"
                            [class.text-success-content]="
                                state.state === 'done'
                            "
                        >
                            <icon>
                                {{
                                    state.state === 'done'
                                        ? 'done'
                                        : state.state === 'warning'
                                          ? 'warning'
                                          : 'close'
                                }}
                            </icon>
                        </div>
                    }
                    @if (state.state === 'loading') {
                        <app-spinner diameter="24" />
                    }
                </div>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
            }
        `,
    ],
    imports: [
        SpinnerComponent,
        TooltipDirective,
        IconComponent,
        TranslatePipe,
        VirtualScrollComponent,
    ],
})
export class StatusListComponent implements OnChanges {
    /** List of bulk items to add */
    public readonly list = input<Record<string, unknown>[]>([]);
    /** Method to save changes to items in the list */
    public readonly save =
        input<
            (
                item: Record<string, unknown>,
            ) => Promise<PlaceResource & SaveWarning>
        >(undefined);
    /** Emitter for completion status of the item upload */
    public readonly done = output<Record<string, unknown>[]>();
    /** Emitter to close the modal once the user has reviewed results */
    public readonly close_modal = output<void>();
    /**
     * Status of each of the items to be created. One signal per row, so an
     * update re-checks that row only.
     */
    public readonly status = computed(() =>
        this.list().map(() => signal<RowStatus>({ state: '' })),
    );
    /** Whether all items have been processed */
    public readonly is_done = signal(false);
    /** Count of successfully completed items */
    public readonly completed_count = signal(0);
    /** Count of failed items */
    public readonly error_count = signal(0);
    /** Count of items created with a warning. They are in `completed_count` too */
    public readonly warning_count = signal(0);
    /** Whether an item failed or has a warning */
    public readonly has_issues = computed(
        () => this.error_count() > 0 || this.warning_count() > 0,
    );

    public processed_count(): number {
        return this.completed_count() + this.error_count();
    }

    public progress(): number {
        const total = this.list().length || 1;
        return Math.round((this.processed_count() / total) * 100);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.list && this.list()) {
            this.saveItems();
        }
    }

    public async saveItems() {
        try {
            const items = this.list();
            const results: (PlaceResource | undefined)[] = new Array(
                items.length,
            );
            let success_count = 0;
            let fail_count = 0;

            for (let i = 0; i < items.length; i += BATCH_SIZE) {
                const batch = items.slice(i, i + BATCH_SIZE);
                const batch_promises = batch.map(async (item, batch_index) => {
                    const index = i + batch_index;
                    this.setStatus(index, { state: 'loading' });
                    try {
                        // A blank cell gets the default of the server. 6.x
                        // classes filled them, and v7 rejects `''` for a number
                        const row = Object.fromEntries(
                            Object.entries(item).filter(
                                ([key, value]) => key !== 'id' && value !== '',
                            ),
                        );
                        const saved_item = await this.save()(row);
                        // The item exists, so the row counts as created
                        const warning = saved_item.save_warning;
                        if (warning) {
                            const message = i18n('COMMON.BULK_SAVE_WARNING', {
                                reason: warning,
                            });
                            this.setStatus(index, {
                                state: 'warning',
                                message,
                            });
                            notify('warn', message);
                            this.warning_count.update((count) => count + 1);
                        } else {
                            this.setStatus(index, { state: 'done' });
                        }
                        success_count++;
                        this.completed_count.set(success_count);
                        results[index] = saved_item;
                    } catch (err) {
                        const message = `Error: ${await readError(err)}`;
                        this.setStatus(index, { state: 'error', message });
                        // The message can have data from the response, so log the status only
                        console.error(
                            `Failed to save item ${index}: ${describeError(err)}`,
                        );
                        // `notify`, not `notifyError`: the message stays out of the console
                        notify('error', message);
                        fail_count++;
                        this.error_count.set(fail_count);
                    }
                });
                await Promise.all(batch_promises);
            }

            this.is_done.set(true);
            const clean_list = results.filter((item) => !!item);
            this.done.emit(clean_list as unknown as Record<string, unknown>[]);
        } catch (e) {
            console.error(e);
        }
    }

    private setStatus(index: number, value: RowStatus): void {
        this.status()[index].set(value);
    }
}
