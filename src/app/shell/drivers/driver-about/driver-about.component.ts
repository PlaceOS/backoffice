
import { Component, Input } from '@angular/core';
import { PlaceDriver, EncryptionLevel, isDriverCompiled, recompileDriver } from '@placeos/ts-client';

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
    @Input() public item: PlaceDriver;
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
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
            })
        );
        this.checkCompiled();
    }

    public recompileDriver() {
        if (this.item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Recompile Driver`,
                        content: `<p>Are you sure you want recompile this driver?</p><p>New driver code will be loaded and device settings will be updated.</p>`,
                        icon: { type: 'icon', class: 'backoffice-cycle' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Recompiling driver...';
                        recompileDriver(this.item.id).toPromise().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully recompiled driver "${this.item.name}".`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error recompiling driver. Error: ${JSON.stringify(err.response || err.message || err)}`);
                            }
                        );
                    }
                })
            );
        }
    }

    public checkCompiled() {
        isDriverCompiled(this.item.id)
            .toPromise().then(_ => this.compiled = true, _ => {
                this.compiled = false;
                this.timeout('compiled', () => this.checkCompiled(), 1000)
            })
    }

}
