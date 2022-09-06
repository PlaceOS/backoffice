import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    PlaceSystem,
    PlaceModule,
    PlaceZone,
    PlaceDriver,
    PlaceUser,
    PlaceDomain,
    PlaceApplication,
    PlaceSettings,
    PlaceTrigger,
    PlaceRepository,
    PlaceMQTTBroker,
    EncryptionLevel,
    addSettings,
    cleanObject,
} from '@placeos/ts-client';
import { UntypedFormGroup } from '@angular/forms';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import {
    DialogEvent,
    Identity,
    HashMap,
} from 'apps/backoffice/src/app/common/types';
import { generateSystemsFormFields } from 'apps/backoffice/src/app/systems/systems.utilities';
import { generateModuleFormFields } from 'apps/backoffice/src/app/modules/modules.utilities';
import { generateZoneFormFields } from 'apps/backoffice/src/app/zones/zones.utilites';
import { generateDriverFormFields } from 'apps/backoffice/src/app/drivers/drivers.utilities';
import { generateUserFormFields } from 'apps/backoffice/src/app/users/users.utilities';
import { generateDomainFormFields } from 'apps/backoffice/src/app/domains/domains.utilities';
import { generateApplicationFormFields } from 'apps/backoffice/src/app/domains/applications.utilities';
import {
    generateTriggerFormFields,
    generateTriggerSettingsFormFields,
} from 'apps/backoffice/src/app/triggers/triggers.utilities';
import { generateRepositoryFormFields } from 'apps/backoffice/src/app/repositories/repositories.utilities';
import { generateBrokerFormFields } from 'apps/backoffice/src/app/admin/brokers.utilities';
import { Observable } from 'rxjs';
import {
    notifyError,
    notifySuccess,
} from 'apps/backoffice/src/app/common/notifications';
import { HotkeysService } from 'apps/backoffice/src/app/common/hotkeys.service';
import { getInvalidFields } from '../../common/general';

export interface CreateEditModalData<T extends Identity = any> {
    /** Service associated with the item being created/edited */
    save: (item: T) => Observable<T>;
    /** Item being worked on */
    item: T;
    /** Form fields for item */
    form?: any[];
    /** Name of the type of item being worked on */
    name?: string;
    /** Whether parts of the form are readonly */
    readonly?: string;
    /** Whether saving the form details will be handled outside the modal */
    external_save?: boolean;
}

@Component({
    selector: 'item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss'],
})
export class ItemCreateUpdateModalComponent
    extends BaseClass
    implements OnInit
{
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: HashMap<any>;
    /** Saved version of the item */
    public result: any;
    /** List of the form fields needed for the item */
    public form: UntypedFormGroup;
    /** Loading status for the item request is being processed */
    public loading: string;
    /** Whether user is able to submit */
    public can_submit = true;

    public get name(): string {
        return this._data.name;
    }

    public get readonly(): boolean {
        return !!this._data.readonly;
    }

    public get item_type(): string {
        if (this.item instanceof PlaceSystem) {
            return 'system';
        } else if (this.item instanceof PlaceModule) {
            return 'module';
        } else if (this.item instanceof PlaceZone) {
            return 'zone';
        } else if (this.item instanceof PlaceDriver) {
            return 'driver';
        } else if (this.item instanceof PlaceUser) {
            return 'user';
        } else if (this.item instanceof PlaceDomain) {
            return 'domain';
        } else if (this.item instanceof PlaceApplication) {
            return 'application';
        } else if (
            this.item instanceof PlaceTrigger &&
            this._data.external_save
        ) {
            return 'system-trigger';
        } else if (this.item instanceof PlaceTrigger) {
            return 'trigger';
        } else if (this.item instanceof PlaceRepository) {
            return 'repository';
        } else if (this.item instanceof PlaceMQTTBroker) {
            return 'broker';
        }
    }

    constructor(
        private _dialog_ref: MatDialogRef<ItemCreateUpdateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: CreateEditModalData,
        private _hotkey: HotkeysService
    ) {
        super();
    }

    /**
     * Generate the form fields for the item being handled
     */
    public generateFormData() {
        if (this.item instanceof PlaceSystem) {
            return generateSystemsFormFields(this.item);
        } else if (this.item instanceof PlaceModule) {
            return generateModuleFormFields(this.item);
        } else if (this.item instanceof PlaceZone) {
            return generateZoneFormFields(this.item);
        } else if (this.item instanceof PlaceDriver) {
            return generateDriverFormFields(this.item);
        } else if (this.item instanceof PlaceUser) {
            return generateUserFormFields(this.item);
        } else if (this.item instanceof PlaceDomain) {
            return generateDomainFormFields(this.item);
        } else if (this.item instanceof PlaceApplication) {
            return generateApplicationFormFields(this.item);
        } else if (
            this.item instanceof PlaceTrigger &&
            this._data.external_save
        ) {
            return generateTriggerSettingsFormFields(this.item);
        } else if (this.item instanceof PlaceTrigger) {
            return generateTriggerFormFields(this.item);
        } else if (this.item instanceof PlaceRepository) {
            return generateRepositoryFormFields(this.item);
        } else if (this.item instanceof PlaceMQTTBroker) {
            return generateBrokerFormFields(this.item);
        }
        return new UntypedFormGroup({});
    }

    public ngOnInit(): void {
        this.item = this._data.item;
        this.edit = !!this._data.item.id;
        this.form = this.generateFormData();
        this.subscription(
            'save_item_key',
            this._hotkey.listen(['KeyS'], () => this.submit())
        );
    }

    /**
     * Save changes and create item if it does not exist
     */
    public submit() {
        this.form.markAllAsTouched();
        if (!this.item || !this.form.valid) {
            return notifyError(
                `Some form fields are invalid. [${getInvalidFields(
                    this.form
                ).join(', ')}]`
            );
        }
        this.loading = `${this.item.id ? 'Updating' : 'Creating'} ${
            this.name
        }...`;
        this._dialog_ref.disableClose = true;
        const item = this.item.id
            ? cleanObject(
                  { ...this.item.toJSON(), ...this.form.value },
                  this.item_type === 'user'
                      ? [undefined, null, '']
                      : [undefined, null]
              )
            : { ...this.item.toJSON(), ...this.form.value };
        if (this._data.external_save) {
            this.event.emit({ reason: 'action', metadata: item });
            return;
        }
        this._data.save(item).subscribe(
            (item) => {
                this.result = item;
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item } });
                notifySuccess(
                    `Successfully ${this.item.id ? 'updated' : 'added'} ${
                        this.name
                    }`
                );
                if (!this.form.value.id && this.form.controls.settings) {
                    this.newSettings(
                        item,
                        this.form.controls.settings.value
                    ).then(() => this._dialog_ref.close());
                } else {
                    this._dialog_ref.close();
                }
            },
            async (err) => {
                this.loading = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    `Error ${this.item.id ? 'editing' : 'adding new'} ${
                        this.name
                    }. Error: ${JSON.stringify(
                        (await err.text()) || err.message || err
                    )}`
                );
            }
        );
    }

    /**
     * Save initial settings for resources
     */
    private async newSettings(item: HashMap<any>, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id,
            settings_string,
            encryption_level: EncryptionLevel.Support,
        });
        const settings = await addSettings(new_settings)
            .toPromise()
            .catch((err) => {
                this.loading = null;
                notifyError(
                    `Error saving settings for ${
                        item.name || item.id
                    }. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            });
        (item as any).settings[EncryptionLevel.None] = settings;
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog_ref.close();
    }
}
