import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { EngineRepository, EngineDriver } from '@placeos/ts-client';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import {
    ItemCreateUpdateModalComponent,
    CreateEditModalData
} from 'src/app/overlays/item-modal/item-modal.component';

@Component({
    selector: 'repository-drivers',
    templateUrl: './repository-drivers.template.html',
    styleUrls: ['./repository-drivers.styles.scss']
})
export class RepositoryDriversComponent extends BaseDirective implements OnChanges, OnInit {
    /** Active repository */
    @Input() public item: EngineRepository;
    /** List of drivers available in the repository */
    public driver_list: string[] = [];

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.load();
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item) {
            this.load();
        }
    }

    public load(offset: number = 0) {
        if (!this.item) {
            return;
        }
        this._service.Repositories.listDrivers(this.item.id, { offset } as any).then(
            list => {
                this.driver_list = list || [];
            },
            () => null
        );
    }

    public newDriver(driver: string) {
        if (this.item.id) {
            const ref = this._dialog.open<ItemCreateUpdateModalComponent, CreateEditModalData>(
                ItemCreateUpdateModalComponent,
                {
                    height: 'auto',
                    width: 'auto',
                    maxHeight: 'calc(100vh - 2em)',
                    maxWidth: 'calc(100vw - 2em)',
                    data: {
                        item: new EngineDriver(this._service.Drivers, {
                            name: '',
                            module_name: '',
                            repository_id: this.item.id,
                            file_name: driver
                        }),
                        service: this._service.Drivers
                    }
                }
            );
        }
    }
}
