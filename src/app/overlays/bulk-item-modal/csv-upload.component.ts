import { Component, input, output, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { csvToJson, downloadFile, jsonToCsv } from '../../common/general';
import { notifyError, notifyWarn } from '../../common/notifications';
import { HashMap } from '../../common/types';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-csv-upload',
    template: `
        @if (!loading) {
            <section class="flex w-132 max-w-full flex-col gap-4">
                <label
                    matRipple
                    class="border-base-300 bg-base-100 hover:bg-base-200 relative flex min-h-80 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-4 border-dashed p-8 text-center transition"
                    [class.border-info]="dragging()"
                    [class.bg-info]="dragging()"
                    [class.text-info-content]="dragging()"
                    (dragenter)="dragging.set(true)"
                    (dragleave)="dragging.set(false)"
                    (dragend)="dragging.set(false)"
                    (dragover)="onDragOver($event)"
                    (drop)="onDrop($event)"
                >
                    <icon class="text-6xl">cloud_upload</icon>
                    <div>
                        <div class="text-lg font-medium">
                            {{ 'COMMON.BULK_DROP_MSG' | translate }}
                        </div>
                        <div class="text-base-content/60 mt-2 text-sm">
                            CSV and TSV files are supported. Download the
                            template first if you need the expected column
                            names.
                        </div>
                    </div>
                    <input
                        class="absolute inset-0 cursor-pointer opacity-0"
                        type="file"
                        accept=".csv,.tsv"
                        aria-label="Upload CSV or TSV file"
                        (change)="loadCSVData($event)"
                    />
                </label>
                @if (template()) {
                    <button
                        btn
                        matRipple
                        class="inverse w-full"
                        (click)="downloadTemplateCSV()"
                    >
                        {{ 'COMMON.BULK_DOWNLOAD' | translate }}
                    </button>
                }
            </section>
        } @else {
            <div
                class="flex h-96 w-132 max-w-full flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="32" />
                <div class="text-center">
                    {{ 'COMMON.BULK_DROP_LOADING' | translate }}
                    @if (file_name()) {
                        <div class="text-base-content/60 mt-2 text-sm">
                            {{ file_name() }}
                        </div>
                    }
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        MatProgressSpinnerModule,
        IconComponent,
    ],
})
export class CsvUploadComponent {
    /** Data for the template CSV */
    readonly template = input<HashMap<unknown>[]>([]);
    /** Emitter for changes to the data displayed */
    public readonly list = output<HashMap<unknown>[]>();
    /** Whether user has dragged item */
    public readonly dragging = signal<boolean | null>(null);
    /** Whether CSV data is being processed */
    public loading: boolean;
    /** Name of the file currently being processed */
    public readonly file_name = signal('');

    public onDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    public onDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.dragging.set(false);
        const file = event.dataTransfer?.files?.[0];
        if (file) {
            this.loadFile(file);
        }
    }

    public loadCSVData(event) {
        /* istanbul ignore else */
        if (event.target) {
            const element = event.target as HTMLInputElement;
            const file = element.files[0];
            /* istanbul ignore else */
            if (file) {
                this.loadFile(file);
                element.value = '';
            }
        }
    }

    private loadFile(file: File) {
        const file_name = file.name.toLowerCase();
        if (!file_name.endsWith('.csv') && !file_name.endsWith('.tsv')) {
            notifyError('Upload a CSV or TSV file.');
            return;
        }
        this.file_name.set(file.name);
        this.loading = true;
        const reader = new FileReader();
        reader.readAsText(file, 'UTF-8');
        reader.addEventListener('load', (evt) => {
            this.processCSVData(
                (evt.target as FileReader).result as string,
                file_name.endsWith('.csv') ? ',' : '\t',
            );
        });
        reader.addEventListener('error', (_) => {
            this.loading = false;
            notifyError('Error reading file.');
        });
    }

    public downloadTemplateCSV() {
        const ignore_keys = ['module_list', 'settings', '_type', 'version'];
        const csv_data = jsonToCsv(
            this.template(),
            Object.keys(this.template()[0]).filter(
                (key) => ignore_keys.indexOf(key) < 0,
            ),
            '\t',
        );
        downloadFile('bulk-upload.tsv', csv_data);
    }

    private processCSVData(data: string, seperator: '\t' | ',' | '  ' = '\t') {
        try {
            const list = csvToJson(data, seperator) || [];
            this.loading = false;
            if (!list.length) {
                notifyWarn('No rows were found in the uploaded file.');
                return;
            }
            this.list.emit(list);
        } catch (e) {
            this.loading = false;
            console.error(e);
            notifyError(
                'Error parsing CSV data. Please check the file format.',
            );
        }
    }
}
