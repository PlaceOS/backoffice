import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';
import { DialogEvent } from 'apps/backoffice/src/app/common/types';

import { BackofficeExtension } from '../extensions.component';

@Component({
    selector: 'extension-modal',
    templateUrl: './extension-modal.component.html',
    styleUrls: ['./extension-modal.component.scss'],
})
export class ExtensionModalComponent extends AsyncHandler implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly available_types = [
        'admin',
        'systems',
        'modules',
        'zones',
        'drivers',
        'repositories',
        'triggers',
        'users',
        'domains',
    ];
    public readonly condition_ops = ['includes', 'equals', 'truthy', 'falsy'];
    public readonly item = this._data.item;
    public loading = false;
    public form = new FormGroup({
        type: new FormControl('systems', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        url: new FormControl('', [Validators.required]),
        conditions: new FormControl([]),
    });

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { item: BackofficeExtension },
        private _hotkey: HotkeysService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'save',
            this._hotkey.listen(['KeyS'], () => this.submit())
        );
        this.form.patchValue(this.item);
    }

    public addCondition() {
        const conditions = this.form.controls.conditions.value;
        conditions.push(['', '', '']);
    }

    public removeCondition(condition: [string, string, any]) {
        this.form.controls.conditions.setValue(
            this.form.controls.conditions.value.filter((c) => c !== condition)
        );
    }

    public submit() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return;
        }
        const value = this.form.value;
        value.conditions = value.conditions.filter((c) => c[0] && c[1]);
        this.event.emit({ reason: 'done', metadata: value });
    }
}
