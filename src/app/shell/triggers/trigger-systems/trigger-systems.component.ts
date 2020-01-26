import { Component, Input, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComposerService } from '@acaengine/composer';
import { EngineTrigger, HashMap } from '@acaengine/ts-client';

import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';

@Component({
    selector: 'trigger-systems',
    templateUrl: './trigger-systems.template.html',
    styleUrls: ['./trigger-systems.styles.scss']
})
export class TriggerSystemsComponent extends BaseDirective implements OnChanges {
    /** Active trigger */
    @Input() public item: EngineTrigger;
    /** List of systems associated with the trigger */
    public system_trigger_list: EngineTrigger[] = [];
    /** Map of systems ids to connected status */
    public connected: HashMap<boolean> = {};

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog,
        private _composer: ComposerService
    ) {
        super();
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadSystemTriggers();
        }
    }

    public loadSystemTriggers(offset: number = 0) {
        this._service.SystemTriggers.query({
            trigger_id: this.item.id,
            offset
        } as any).then(
            list => this.system_trigger_list = list || [],
            () => null
        );
    }

    /**
     * Delete the trigger from system
     */
    protected delete(trigger: EngineTrigger) {
        if (trigger) {
            console.log('Trigger:', trigger);
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Remove trigger`,
                        content: `<p>Are you sure you want remove this trigger?</p><p>Deleting this trigger will <strong>immediately</strong> remove from the system "${trigger.system_name || ''}"</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe(async (event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Removing trigger...';
                        await this.deleteTrigger(trigger).catch(err => {
                            ref.componentInstance.loading = null;
                            this._service.notifyError(
                                `Error removing trigger. Error: ${err.message || err}`
                            );
                            throw err;
                        });
                        this.loadSystemTriggers();
                        ref.close();
                        this.unsub('delete_confirm');
                    }
                })
            );
        }
    }

    /**
     * Remove the trigger from it's associated system
     * @param trigger Trigger to remove
     */
    private deleteTrigger(trigger: EngineTrigger) {
        return new Promise((resolve, reject) => {
            const url = `${this._composer.auth.api_endpoint}/systems/${trigger.system_id}/triggers/${trigger.id}`;
            this._composer.http.delete(url).subscribe(
                _ => null,
                _ => reject(_),
                () => resolve()
            );
        });
    }
}
