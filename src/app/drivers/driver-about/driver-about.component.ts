import { Component, Input } from '@angular/core';
import { PlaceDriver, isDriverCompiled, recompileDriver } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { MatDialog } from '@angular/material/dialog';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { notifyError, notifySuccess } from 'src/app/common/notifications';

@Component({
    selector: 'driver-about',
    templateUrl: './driver-about.template.html',
    styleUrls: ['./driver-about.styles.scss'],
})
export class DriverAboutComponent extends BaseClass {
    /** Item to render */
    @Input() public item: PlaceDriver;
    /** Whether driver has a compiled binary on the server */
    public compiled: boolean;

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
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
                        icon: { type: 'icon', class: 'backoffice-cycle' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Recompiling driver...';
                        recompileDriver(this.item.id).subscribe(
                            () => {
                                notifySuccess(
                                    `Successfully recompiled driver "${this.item.name}".`
                                );
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            (err) => {
                                ref.componentInstance.loading = null;
                                notifyError(
                                    `Error recompiling driver. Error: ${JSON.stringify(
                                        err.response || err.message || err
                                    )}`
                                );
                            }
                        );
                    }
                })
            );
        }
    }

    public checkCompiled() {
        isDriverCompiled(this.item.id).subscribe(
            () => (this.compiled = true),
            () => {
                this.compiled = false;
                this.timeout('compiled', () => this.checkCompiled(), 1000);
            },
            () => (this.compiled = true)
        );
    }
}
