
import { Component, Input } from '@angular/core';
import { EngineDriver } from '@acaengine/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent, ConfirmModalData, CONFIRM_METADATA } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss']
})
export class DriverAboutComponent extends BaseDirective {
    /** Item to render */
    @Input() public item: EngineDriver;

    constructor(private _dialog: MatDialog, private _service: ApplicationService) {
        super();
    }

    public get settings(): string {
        return this.item.settings.settings_string;
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
            })
        );
    }

    public reloadDriver() {
        if (this.item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Reload Driver`,
                        content: `<p>Are you sure you want reload this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
                        icon: { type: 'icon', class: 'backoffice-cycle' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Reloading driver...';
                        this.item.reload().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully reloaded driver "${this.item.name}".`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error reloading driver. Error: ${err}`);
                            }
                        );
                    }
                })
            );
        }
    }

}
