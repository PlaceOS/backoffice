
import { Component, Input } from '@angular/core';
import { EngineDriver, EncryptionLevel } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmModalComponent, ConfirmModalData, CONFIRM_METADATA } from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent, Identity } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss']
})
export class DriverAboutComponent extends BaseDirective {
    /** Item to render */
    @Input() public item: EngineDriver;
    /** Whether driver has a compiled binary on the server */
    public compiled: boolean;

    /** Whether application is loading settings for item */
    public get loading_settings(): boolean {
        return this._service.get('loading_settings');
    }

    constructor(private _dialog: MatDialog, private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
            })
        );
        this.checkCompiled();
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

    public checkCompiled() {
        this._service.Drivers.isCompiled(this.item.id)
            .then(_ => this.compiled = true, _ => {
                this.compiled = false;
                this.timeout('compiled', () => this.checkCompiled(), 1000)
            })
    }

}
