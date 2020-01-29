import { Component, Input, OnChanges } from '@angular/core';
import { EngineSystem, EngineTrigger } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { MatDialog } from '@angular/material/dialog';
import {
    SelectItemModalComponent,
    SelectItemModalData
} from 'src/app/overlays/select-item-modal/select-item-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
    ConfirmModalData
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ComposerService } from '@acaengine/composer';
import { ItemCreateUpdateModalComponent } from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'system-triggers',
    templateUrl: './system-triggers.template.html',
    styleUrls: ['./system-triggers.styles.scss']
})
export class SystemTriggersComponent extends BaseDirective implements OnChanges {
    /** Active System */
    @Input() public item: EngineSystem;
    /** List of triggers associated with the active system */
    public trigger_list: EngineTrigger[] = [];
    /** Filter string for listing of triggers */
    public search_str: string;

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog,
        private _composer: ComposerService
    ) {
        super();
    }

    public ngOnChanges(changes: any): void {
        if (changes.item) {
            this.loadSystemTriggers();
        }
    }

    public loadSystemTriggers(offset: number = 0): void {
        this._service.SystemTriggers.query({ sys_id: this.item.id, offset } as any).then(
            list => {
                this.trigger_list = list;
            },
            () => null
        );
    }

    /**
     * Open the modal to create a new system
     */
    public editTrigger(trigger: EngineTrigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open(ItemCreateUpdateModalComponent, {
                height: 'auto',
                width: 'auto',
                maxHeight: 'calc(100vh - 2em)',
                maxWidth: 'calc(100vw - 2em)',
                data: {
                    item: trigger,
                    service: this._service.SystemTriggers,
                    external_save: true
                }
            });
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'action') {
                        ref.componentInstance.loading = 'Saving trigger settings...';
                        const url = `${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${trigger.id}`;
                        this._composer.http.put(url, trigger.toJSON(true)).subscribe(
                            () => null,
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error updating trigger settings. Error: ${err.message || err}`);
                            },
                            () => {
                                this._service.notifySuccess(
                                    `Successfully updated trigger settings.`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            }
                        );
                    }
                })
            );
        }
    }

    /**
     * Remove a trigger from the active system
     * @param trigger Trigger to remove
     */
    public deleteTrigger(trigger: EngineTrigger) {
        if (this.item && trigger) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Remove trigger`,
                        content: `<p>Are you sure you want remove trigger "${trigger.name}"?</p><p>Configuration will be updated <strong>immediately</strong>.</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting system...';
                        const url = `${this._composer.auth.api_endpoint}/systems/${this.item.id}/triggers/${trigger.id}`;
                        this._composer.http.delete(url).subscribe(
                            () => null,
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error removing trigger. Error: ${err.message || err}`);
                            },
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted trigger "${this.item.name}".`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            }
                        );
                    }
                })
            );
        }
    }

    /**
     * Open modal to select a trigger to add
     */
    public selectTriggerToAdd(): void {
        const ref = this._dialog.open<SelectItemModalComponent, SelectItemModalData>(
            SelectItemModalComponent,
            {
                height: 'auto',
                width: 'auto',
                data: {
                    service_name: 'Triggers'
                }
            }
        );
        this.subscription(
            'dialog_events',
            ref.componentInstance.event.subscribe((event: DialogEvent) => {
                const item = ref.componentInstance.item;
                if (event.reason === 'action' && item) {
                    this.addTrigger(item);
                    ref.close();
                }
            })
        );
        ref.afterClosed().subscribe(() => this.unsub('dialog_events'));
    }

    /**
     * Add the selected trigger to the active system
     * @param trigger Trigger to add to system
     */
    private addTrigger(trigger: EngineTrigger): void {
        this._service.Systems.task(this.item.id, 'triggers', {
            control_system_id: this.item.id,
            enabled: true,
            important: false,
            trigger_id: trigger.id
        });
    }
}
