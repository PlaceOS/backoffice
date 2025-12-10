import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { csvToJson, downloadFile, jsonToCsv } from '../../common/general';
import { notifyError } from '../../common/notifications';
import { HashMap } from '../../common/types';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';

@Component({
    selector: 'bulk-item-csv-upload',
    template: `
        @if (!loading) {
            <button
                matRipple
                class="border-base-300 hover:bg-base-200 relative mx-4 flex h-96 w-[24rem] flex-col items-center justify-center space-y-4 rounded-xl border-4 border-dashed"
                [class.hover]="dragging"
                (dragenter)="dragging = true"
                (dragleave)="dragging = false"
                (dragend)="dragging = false"
            >
                <icon class="text-6xl">cloud_upload</icon>
                <div class="text">{{ 'COMMON.BULK_DROP_MSG' | translate }}</div>
                <input
                    class="absolute inset-0 opacity-0"
                    type="file"
                    (change)="loadCSVData($event)"
                />
            </button>
        } @else {
            <div
                class="flex h-96 w-[24rem] flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="text">
                    {{ 'COMMON.BULK_DROP_LOADING' | translate }}
                </div>
            </div>
        }
        @if (template()) {
            <div class="p-4">
                <button
                    btn
                    matRipple
                    class="w-full"
                    (click)="downloadTemplateCSV()"
                >
                    {{ 'COMMON.BULK_DOWNLOAD' | translate }}
                </button>
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
    public dragging: boolean;
    /** Whether CSV data is being processed */
    public loading: boolean;

    public loadCSVData(event) {
        this.loading = true;
        /* istanbul ignore else */
        if (event.target) {
            const element = event.target as HTMLInputElement;
            const file = element.files[0];
            /* istanbul ignore else */
            if (file) {
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.addEventListener('load', (evt) => {
                    this.processCSVData(
                        (evt.target as FileReader).result as string,
                        file.name.endsWith('.csv') ? ',' : '\t',
                    );
                    element.value = '';
                });
                reader.addEventListener('error', (_) => {
                    this.loading = false;
                    notifyError('Error reading file.');
                });
            }
        }
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
            this.list.emit(list);
        } catch (e) {
            console.error(e);
        }
    }
}
