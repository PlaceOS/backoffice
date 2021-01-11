import { Component, EventEmitter, Output, Input } from '@angular/core';

import { HashMap } from 'src/app/common/types';
import { csvToJson, jsonToCsv, downloadFile } from 'src/app/common/general';
import { notifyError } from 'src/app/common/notifications';

@Component({
    selector: 'bulk-item-csv-upload',
    templateUrl: './csv-upload.component.html',
    styleUrls: ['./csv-upload.component.scss'],
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
                    this.processCSVData((evt.srcElement as any).result);
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
            Object.keys(this.template[0]).filter((key) => ignore_keys.indexOf(key) < 0),
            '\t'
        );
        downloadFile('bulk-upload.tsv', csv_data);
    }

    private processCSVData(data: string) {
        try {
            const list = csvToJson(data, '\t') || [];
            this.loading = false;
            this.list.emit(list);
        } catch (e) {
            console.error(e);
        }
    }
}
