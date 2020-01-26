import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HashMap, EngineModule, EngineSystem } from '@acaengine/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

export interface ModuleStateModalData {
    /** System Data to show the details for */
    system: EngineSystem;
    /** Module to expose the state of */
    module: EngineModule
}

@Component({
    selector: 'view-module-state-modal',
    templateUrl: './view-module-state.template.html',
    styleUrls: ['./view-module-state.styles.scss']
})
export class ViewModuleStateModalComponent extends BaseDirective implements OnInit {
    /** Parent system of the module */
    public system: EngineSystem;
    /** Currently selected module */
    public module: EngineModule;
    /** Current state of the selected module */
    public state: HashMap;
    /** Whether the module state is being loaded */
    public loading: boolean;
    /** Whether the modal is closing */
    public closing: boolean;

    /** Settings for the item */
    public get settings(): string {
        if (this.state) {
            if (typeof this.state === 'object') {
                return JSON.stringify(this.state, null, 4);
            } else if (typeof this.state === 'string') {
                return this.state;
            }
        }
        return '{}';
    }

    constructor(
        private _dialog: MatDialogRef<ViewModuleStateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ModuleStateModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    public ngOnInit() {
        this.system = this._data.system;
        this.module = this._data.module;
        this.updateState();
    }

    /** Update the state of the module */
    public updateState() {
        if (this.system && this.module && this.module.driver) {
            this.loading = true;
            this._service.Systems.state(this.system.id, this.module.driver.module_name, this.module.role + 1).then(
                state => {
                    (this.state = state);
                    this.loading = false;
                },
                err => {
                    this._service.notifyError(err.message || err);
                    this.loading = false;
                }
            );
        }
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog.close();
    }
}

