import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PlaceDriver, PlaceModule, removeModule, queryModules } from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';

import { BaseClass } from 'src/app/common/base.class';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { DialogEvent } from 'src/app/shared/utilities/types.utilities';
import { notifyError, notifySuccess } from 'src/app/common/notifications';

@Component({
    selector: 'driver-devices',
    templateUrl: './driver-devices.template.html',
    styleUrls: ['./driver-devices.styles.scss'],
})
export class DriverModulesComponent extends BaseClass implements OnChanges, OnInit {
    @Input() public item: PlaceDriver;

    /** Filter string for the system list */
    public search_str: string;
    /** List of Modules associated with the driver */
    public device_list: PlaceModule[] = [];
    /** List of items from an API search */
    public search_results$: Observable<PlaceModule[]>;
    /** Subject holding the value of the search */
    public search$ = new Subject<string>();
    /** Whether systems are being loaded */
    public loading: boolean;

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.search_results$ = this.search$.pipe(
            debounceTime(400),
            distinctUntilChanged(),
            switchMap((query) => {
                this.loading = true;
                return queryModules({
                    q: query,
                    driver_id: this.item.id,
                    complete: true,
                    offset: 0,
                    limit: 500,
                } as any).pipe(map((resp) => resp.data));
            }),
            catchError((err) => {
                console.error(err);
                return of([]);
            }),
            map((list: PlaceModule[]) => {
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
            this.search_results$.subscribe((list) => (this.device_list = list))
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.loadModules();
        }
    }

    public async loadModules(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this.device_list = await queryModules({ driver_id: this.item.id, offset, limit: 500 })
            .pipe(map((resp) => resp.data))
            .toPromise();
    }

    public removeModule(item: PlaceModule) {
        if (item) {
            const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
                ConfirmModalComponent,
                {
                    ...CONFIRM_METADATA,
                    data: {
                        title: `Delete module`,
                        content: `<p>Are you sure you want delete this module?</p><p>Deleting this will module <strong>immediately</strong> remove it from any system associated with it</p>`,
                        icon: { type: 'icon', class: 'backoffice-trash' },
                    },
                }
            );
            this.subscription(
                'delete_confirm',
                ref.componentInstance.event.subscribe((event: DialogEvent) => {
                    if (event.reason === 'done') {
                        ref.componentInstance.loading = 'Deleting module...';
                        removeModule(item.id).subscribe(
                            () => {
                                notifySuccess(
                                    `Successfully deleted module "${item.name}".`
                                );
                                this.loadModules();
                                ref.close();
                                this.unsub('delete_confirm');
                            },
                            (err) => {
                                ref.componentInstance.loading = null;
                                notifyError(
                                    `Error deleting module. Error: ${JSON.stringify(
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
}
