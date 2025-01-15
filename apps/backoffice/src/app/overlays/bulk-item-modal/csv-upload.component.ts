import { Component, EventEmitter, Output, Input } from '@angular/core';

import { HashMap } from 'apps/backoffice/src/app/common/types';
import {
    csvToJson,
    jsonToCsv,
    downloadFile,
} from 'apps/backoffice/src/app/common/general';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';

@Component({
    selector: 'bulk-item-csv-upload',
    template: `
        <button
            matRipple
            class="relative flex flex-col items-center justify-center space-y-4 h-[24rem] w-[24rem] border-4 border-dashed border-base-300 rounded-xl mx-4 hover:bg-base-200"
            *ngIf="!loading; else load_state"
            [class.hover]="dragging"
            (dragenter)="dragging = true"
            (dragleave)="dragging = false"
            (dragend)="dragging = false"
        >
            <app-icon class="text-6xl">cloud_upload</app-icon>
            <div class="text">{{ 'COMMON.BULK_DROP_MSG' | translate }}</div>
            <input
                class="absolute inset-0 opacity-0"
                type="file"
                (change)="loadCSVData($event)"
            />
        </button>
        <div class="p-4" *ngIf="template">
            <button
                btn
                matRipple
                class="w-full"
                (click)="downloadTemplateCSV()"
            >
                {{ 'COMMON.BULK_DOWNLOAD' | translate }}
            </button>
        </div>
        <ng-template #load_state>
            <div
                class="flex flex-col items-center justify-center space-y-4 h-[24rem] w-[24rem] "
            >
                <mat-spinner diameter="32"></mat-spinner>
                <div class="text">
                    {{ 'COMMON.BULK_DROP_LOADING' | translate }}
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class CsvUploadComponent {
    /** Data for the template CSV */
    @Input() template: HashMap[] = [];
    /** Emitter for changes to the data displayed */
    @Output() public list = new EventEmitter<HashMap[]>();
    /** Whether user has dragged item */
    public dragging: boolean;
    /** Whether CSV data is being processed */
    public loading: boolean;

    constructor() {}

    public loadCSVData(event: InputEvent) {
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
                        (evt.srcElement as any).result,
                        file.name.endsWith('.csv') ? ',' : '\t'
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
            this.template,
            Object.keys(this.template[0]).filter(
                (key) => ignore_keys.indexOf(key) < 0
            ),
            '\t'
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
