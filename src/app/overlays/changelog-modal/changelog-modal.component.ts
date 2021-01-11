import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BaseClass } from 'src/app/common/base.class';

export interface ChangelogModalData {
    changelog: string;
}

@Component({
    selector: 'changelog-modal',
    templateUrl: './changelog-modal.template.html',
    styleUrls: ['./changelog-modal.styles.scss']
})
export class ChangelogModalComponent extends BaseClass {
    /** Whether the changelog is loading */
    public loading: boolean;
    /** Changelog Markdown */
    public item: string;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: ChangelogModalData) {
        super();
    }

    /** HTML string for rendering the change log */
    public get changelog(): string {
        return this._data.changelog || '';
    }
}
