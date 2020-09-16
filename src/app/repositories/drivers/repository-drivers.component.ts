import { Component, Input, OnChanges } from '@angular/core';
import { PlaceRepository, PlaceDriver, addDriver, listRepositoryDrivers } from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass } from 'src/app/common/base.class';
import {
    ItemCreateUpdateModalComponent,
    CreateEditModalData,
} from 'src/app/overlays/item-modal/item-modal.component';
import { ActiveItemService } from 'src/app/common/item.service';

@Component({
    selector: 'repository-drivers',
    templateUrl: './repository-drivers.template.html',
    styleUrls: ['./repository-drivers.styles.scss'],
})
export class RepositoryDriversComponent extends BaseClass {
    /** Whether driver list is loading */
    public loading: boolean;
    /** List of drivers available in the repository */
    public driver_list: string[] = [];

    public get item(): PlaceRepository {
        return this._service.active_item as any;
    }

    constructor(private _dialog: MatDialog, private _service: ActiveItemService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription('item', this._service.item.subscribe((item) => {
            this.load();
        }))
    }

    public load(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this.loading = true;
        listRepositoryDrivers(this.item.id, { offset } as any).subscribe(
            (list) => {
                this.loading = false;
                this.driver_list = list || [];
            },
            () => (this.loading = false)
        );
    }

    public newDriver(driver: string) {
        if (this.item.id) {
            this._dialog.open<ItemCreateUpdateModalComponent, CreateEditModalData>(
                ItemCreateUpdateModalComponent,
                {
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                    data: {
                        item: new PlaceDriver({
                            name: '',
                            module_name: '',
                            repository_id: this.item.id,
                            file_name: driver,
                        }),
                        name: 'Driver',
                        save: (item) => addDriver(item),
                    },
                }
            );
        }
    }
}
