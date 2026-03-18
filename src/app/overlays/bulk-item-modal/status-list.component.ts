import {
    Component,
    OnChanges,
    SimpleChanges,
    input,
    output,
    signal,
} from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceResource } from '@placeos/ts-client';
import { Observable, firstValueFrom } from 'rxjs';
import { notifyError } from '../../common/notifications';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';

const BATCH_SIZE = 5;

@Component({
    selector: 'bulk-item-status-list',
    template: `
        <div class="flex flex-col items-center px-4 pb-4">
            @if (!is_done()) {
                <div class="info">
                    {{ 'COMMON.BULK_UPLOADING' | translate }}
                </div>
                <div class="text-base-content/60 mb-2 text-sm">
                    {{ completed_count() }} / {{ list().length }} completed
                    @if (error_count() > 0) {
                        ({{ error_count() }} failed)
                    }
                </div>
            } @else {
                <div class="mb-2 text-sm">
                    {{ completed_count() }} succeeded, {{ error_count() }}
                    failed
                </div>
            }
            @for (item of list(); track item.id; let i = $index) {
                <div
                    class="border-base-200 flex w-[24rem] items-center rounded-sm border p-2"
                >
                    <div class="flex flex-1 flex-col justify-center px-2">
                        <div class="name flex-1">{{ item.name }}</div>
                        @if (status[i] && status[i] !== 'done') {
                            <div class="text-error text-xs">
                                {{ status[i] }}
                            </div>
                        }
                    </div>
                    <div class="status">
                        @if (status[i] && status[i] !== 'loading') {
                            <div
                                class="flex h-8 w-8 items-center justify-center rounded-full text-2xl shadow-sm"
                                [class.bg-error]="status[i] !== 'done'"
                                [class.text-error-content]="
                                    status[i] !== 'done'
                                "
                                [class.bg-success]="status[i] === 'done'"
                                [class.text-success-content]="
                                    status[i] === 'done'
                                "
                                [matTooltip]="status[i]"
                            >
                                <icon>
                                    {{
                                        status[i] === 'done' ? 'done' : 'close'
                                    }}
                                </icon>
                            </div>
                        }
                        @if (status[i] === 'loading') {
                            <mat-spinner diameter="24"></mat-spinner>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    styles: [``],
    imports: [
        MatProgressSpinnerModule,
        IconComponent,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class StatusListComponent implements OnChanges {
    /** List of bulk items to add */
    public readonly list = input<Record<string, unknown>[]>([]);
    /** Method to save changes to items in the list */
    public readonly save =
        input<(item: Record<string, unknown>) => Observable<PlaceResource>>(
            undefined,
        );
    /** Emitter for completion status of the item upload */
    public readonly done = output<Record<string, unknown>[]>();
    /** Status of each of the items to be created */
    public status: Record<string, string> = {};
    /** Whether all items have been processed */
    public readonly is_done = signal(false);
    /** Count of successfully completed items */
    public readonly completed_count = signal(0);
    /** Count of failed items */
    public readonly error_count = signal(0);

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
                    this.status[index] = 'loading';
                    try {
                        const saved_item = await firstValueFrom(
                            this.save()({ ...item, id: '' }),
                        );
                        this.status[index] = 'done';
                        success_count++;
                        this.completed_count.set(success_count);
                        results[index] = saved_item;
                    } catch (err) {
                        const message = this.formatError(err);
                        this.status[index] = message;
                        console.error(`Failed to save item ${index}:`, err);
                        notifyError(message);
                        fail_count++;
                        this.error_count.set(fail_count);
                    }
                });
                await Promise.all(batch_promises);
            }

            this.is_done.set(true);
            const clean_list = results.filter((item) => !!item);
            if (clean_list.length > 0) {
                this.done.emit(
                    clean_list as unknown as Record<string, unknown>[],
                );
            }
        } catch (e) {
            console.error(e);
        }
    }

    private formatError(err: unknown): string {
        if (err && typeof err === 'object') {
            const http_err = err as Record<string, unknown>;
            const status = http_err.status || '';
            const status_text = http_err.statusText || '';
            const message =
                http_err.message ||
                (http_err.error &&
                typeof http_err.error === 'object' &&
                (http_err.error as Record<string, unknown>).message
                    ? (http_err.error as Record<string, unknown>).message
                    : '');
            if (status || status_text) {
                return `Error: ${status} ${status_text}`.trim();
            }
            if (message) {
                return `Error: ${message}`;
            }
        }
        return `Error: ${String(err)}`;
    }
}
