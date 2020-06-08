import { Component, Inject, Type } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    EngineResource,
    SYSTEM_MUTABLE_FIELDS,
    EngineSystem,
    MODULE_MUTABLE_FIELDS,
    EngineModule,
    DRIVER_MUTABLE_FIELDS,
    EngineDriver,
    USER_MUTABLE_FIELDS,
    EngineUser,
    ZONE_MUTABLE_FIELDS,
    EngineZone,
    EngineDriverRole
} from '@placeos/ts-client';
import { HashMap, EngineServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';
import { unique } from 'src/app/shared/utilities/general.utilities';

export interface BulkItemModalData<T = EngineResource<any>> {
    constr: Type<T>;
    service: EngineServiceLike;
}

@Component({
    selector: 'app-bulk-item-modal',
    templateUrl: './bulk-item-modal.component.html',
    styleUrls: ['./bulk-item-modal.component.scss'],
})
export class BulkItemModalComponent<T = EngineResource<any>> {
    /** Current step in the bulk add flow */
    public flow_step: '' | 'match-fields' | 'list' | 'status' = '';
    /** List of items to bulk add */
    public item_list: T[] = [];
    /** List of raw data to use for bulk add */
    public data_list: HashMap[] = [];
    /** Whether requests are being processed */
    public loading: boolean;
    /** Template data for use */
    public template: HashMap[] = [];

    public available_fields: Identity[] = [];

    public get type(): string {
        return this._data.service._name;
    }

    constructor(
        private _dialog_ref: MatDialogRef<BulkItemModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: BulkItemModalData<T>
    ) {
        this.available_fields = this.getAvailableFields();
        this.template = this.generateTemplate();
    }

    /**
     * Handle list data
     * @param data List of data to process
     */
    public handleList(data: HashMap[], is_mapped: boolean = false): void {
        if (data.length) {
            if (is_mapped) {
                console.log('To list:', data);
                const Resource = this._data.constr;
                this.item_list = data.map((item) => new Resource(item));
                this.flow_step = 'list';
            } else {
                this.data_list = data;
                this.flow_step = 'match-fields';
            }
        }
    }

    public showStatus() {
        this.flow_step = 'status';
    }

    public done() {
        setTimeout(() => this._dialog_ref.close(), 3000);
    }

    private getAvailableFields(): Identity[] {
        let list: readonly string[] = [];
        switch (this._data.constr as any) {
            case EngineSystem:
                list = SYSTEM_MUTABLE_FIELDS;
                break;
            case EngineModule:
                list = MODULE_MUTABLE_FIELDS;
                break;
            case EngineDriver:
                list = DRIVER_MUTABLE_FIELDS;
                break;
            case EngineUser:
                list = USER_MUTABLE_FIELDS;
                break;
            case EngineZone:
                list = ZONE_MUTABLE_FIELDS;
                break;
        }
        return unique(
            list.map((i) => ({ id: i, name: i.split('_').join(' ') })),
            'id'
        );
    }

    private generateTemplate(): HashMap[] {
        switch (this._data.constr as any) {
            case EngineSystem:
                return [new EngineSystem({
                    name: 'A System',
                    description: 'A description',
                    email: 'system@place.tech',
                    capacity: 10,
                    features: 'vidConf',
                    bookable: true,
                    installed_ui_devices: 4,
                    support_url: 'https://place.tech/support/test',
                    modules: ['mod-123'],
                    zones: ['zone-123'],
                    map_id: 'area-123',
                    module_data: [{ id: 'mod-001', name: 'A Module' }],
                }).toJSON()];
            case EngineModule:
                return [new EngineModule({
                    name: 'A Module',
                    driver_id: 'dep-001',
                    control_system_id: 'sys-001',
                    ip: '1.1.1.1',
                    tls: false,
                    udp: false,
                    port: 32000,
                    makebreak: false,
                    uri: 'test.com',
                    custom_name: 'mi-name',
                    role: EngineDriverRole.Device,
                    notes: 'Clone wars',
                    ignore_connected: false,
                }).toJSON()];
            case EngineDriver:
                return [new EngineDriver({
                    name: 'A Driver',
                    description: 'In a galaxy far far away...',
                    module_name: 'SteamShip',
                    role: EngineDriverRole.Logic,
                    default_uri: 'Sometimes we default',
                    default_port: 1234,
                    ignore_connected: false,
                    settings: { settings_string: '{ today: false, future: \'Yeah!\' }' },
                    class_name: '::ACA::SolveProblem',
                    repository_id: 'my-repo',
                    file_name: 'fancy-driver.cr',
                    commit: 'some-hash'
                }).toJSON()];
            case EngineUser:
                return [new EngineUser({
                    name: 'A User',
                    authority_id: 'On who\'s authority',
                    email: 'jon@place.tech',
                    phone: '+612000000000',
                    country: 'Australia',
                    image: '',
                    metadata: 'there be none',
                    login_name: 'elitedarklord',
                    staff_id: 'PERSON_12345',
                    first_name: 'Bob',
                    last_name: 'Marley'
                })];
            case EngineZone:
                return [new EngineZone({
                    name: 'A Zone',
                    description: 'In a galaxy far far away...',
                    triggers: ['trig-001'],
                    parent_id: 'zone-123',
                    display_name: 'The Zone',
                    tags: 'building,level,org',
                    code: 'BLD-123',
                    type: 'Client',
                    count: 32,
                    capacity: 2345,
                    location: 'Somewhere close',
                    map_id: 'a/url/to/my/map.svg'
                })];
        }
    }
}
