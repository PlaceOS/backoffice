import { Component, Input, OnChanges } from '@angular/core';
import { EngineDriver, EngineModule } from '@acaprojects/ts-composer';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'driver-devices',
    templateUrl: './driver-devices.template.html',
    styleUrls: ['./driver-devices.styles.scss']
})
export class DriverDevicesComponent extends BaseDirective implements OnChanges {
    @Input() public item: EngineDriver;

    /** Filter string for the system list */
    public search_str: string;
    /** List of Devices associated with the driver */
    public device_list: EngineModule[] = [];
    /** List of items from an API search */
    public search_results$: Observable<EngineModule[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** Whether systems are being loaded */
    public loading: boolean;

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap(query => {
                this.loading = true;
                return this._service.Modules.query({
                    q: query,
                    dependency_id: this.item.id,
                    offset: 0,
                    limit: 500
                });
            }),
            catchError(err => {
                console.error(err);
                return of([]);
            }),
            map((list: EngineModule[]) => {
                this.loading = false;
                const search = this.search_str.toLowerCase();
                return list.filter(
                    (item: any) =>
                        item.name.toLowerCase().indexOf(search) >= 0 ||
                        (item.email || '').toLowerCase().indexOf(search) >= 0
                );
            })
        );
        // Process API results
        this.subscription(
            'search_results',
            this.search_results$.subscribe(list => (this.device_list = list))
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadDevices();
        }
    }

    public loadDevices(offset: number = 0) {
        this._service.Modules.query({ dependency_id: this.item.id, offset, limit: 500 }).then(
            list => (this.device_list = list),
            () => null
        );
    }

    protected removeDevice(item: EngineModule) {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete device`,
                        content: `<p>Are you sure you want delete this device?</p><p>Deleting this will device <strong>immediately</strong> remove it from any system associated with it</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' }
                    }
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting device...';
                        item.delete().then(
                            () => {
                                this._service.notifySuccess(
                                    `Successfully deleted device "${item.name}".`
                                );
                                this.loadDevices();
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            err => {
                                ref.componentInstance.loading = null;
                                this._service.notifyError(`Error deleting device. Error: ${err}`);
                            }
                        );
                    }
                })
            );
        }
    }
}
