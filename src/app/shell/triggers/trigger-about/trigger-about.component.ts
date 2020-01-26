import { Component, Input, OnInit } from '@angular/core';
import { EngineTrigger, EngineSystem, EngineSystemsService } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import {
    TriggerActionModalComponent,
    TriggerActionModalData
} from 'src/app/overlays/trigger-action-modal/trigger-action-modal.component';
import {
    TriggerConditionModalComponent,
    TriggerConditionData
} from 'src/app/overlays/trigger-condition-modal/trigger-condition-modal.component';

@Component({
    selector: 'trigger-about',
    templateUrl: './trigger-about.template.html',
    styleUrls: ['./trigger-about.styles.scss']
})
export class TriggerAboutComponent extends BaseDirective {
    /** Active trigger */
    @Input() public item: EngineTrigger;
    /** System to use for conditions with systen variables and functions */
    public template_system: EngineSystem;

    /** Service for handling system endpoint requests */
    public get system_service(): EngineSystemsService {
        return this._service.Systems;
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    /**
     * Add new condition to trigger
     */
    public addCondition() {
        this._dialog.open<TriggerConditionModalComponent, TriggerConditionData>(
            TriggerConditionModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {
                    trigger: this.item,
                    system: this.template_system
                }
            }
        );
    }

    /**
     * Add new action to trigger
     */
    public addAction() {
        this._dialog.open<TriggerActionModalComponent, TriggerActionModalData>(
            TriggerActionModalComponent,
            {
                data: {
                    trigger: this.item,
                    system: this.template_system
                }
            }
        );
    }
}
