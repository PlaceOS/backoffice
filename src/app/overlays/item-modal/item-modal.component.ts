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
import { FormGroup } from '@angular/forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { DialogEvent, Identity, HashMap } from 'src/app/shared/utilities/types.utilities';
import { generateSystemsFormFields } from 'src/app/shared/utilities/data/systems.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { generateModuleFormFields } from 'src/app/shared/utilities/data/modules.utilities';
import { generateZoneFormFields } from 'src/app/shared/utilities/data/zones.utilites';
import { generateDriverFormFields } from 'src/app/shared/utilities/data/drivers.utilities';
import { generateUserFormFields } from 'src/app/shared/utilities/data/users.utilities';
import { generateDomainFormFields } from 'src/app/shared/utilities/data/domains.utilities';
import { generateApplicationFormFields } from 'src/app/shared/utilities/data/applications.utilities';
import {
    generateTriggerFormFields,
    generateTriggerSettingsFormFields,
} from 'src/app/shared/utilities/data/triggers.utilities';
import { generateRepositoryFormFields } from 'src/app/shared/utilities/data/repositories.utilities';
import { generateBrokerFormFields } from 'src/app/shared/utilities/data/brokers.utilities';
import { Observable } from 'rxjs';

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
export class ItemCreateUpdateModalComponent extends BaseDirective implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: HashMap<any>;
    /** Saved version of the item */
    public result: any;
    /** List of the form fields needed for the item */
    public form: FormGroup;
    /** Loading status for the item request is being processed */
    public loading: string;

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
        } else if (this.item instanceof PlaceTrigger && this._data.external_save) {
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
        private _service: ApplicationService
    ) {
        super();
    }

    /**
     * Generate the form fields for the item being handled
     */
    public generateFormData(): FormGroup {
        let details: FormGroup = null;
        if (this.item instanceof PlaceSystem) {
            details = generateSystemsFormFields(this.item);
        } else if (this.item instanceof PlaceModule) {
            details = generateModuleFormFields(this.item);
        } else if (this.item instanceof PlaceZone) {
            details = generateZoneFormFields(this.item);
        } else if (this.item instanceof PlaceDriver) {
            details = generateDriverFormFields(this.item);
        } else if (this.item instanceof PlaceUser) {
            details = generateUserFormFields(this.item);
        } else if (this.item instanceof PlaceDomain) {
            details = generateDomainFormFields(this.item);
        } else if (this.item instanceof PlaceApplication) {
            details = generateApplicationFormFields(this.item);
        } else if (this.item instanceof PlaceTrigger && this._data.external_save) {
            details = generateTriggerSettingsFormFields(this.item);
        } else if (this.item instanceof PlaceTrigger) {
            details = generateTriggerFormFields(this.item);
        } else if (this.item instanceof PlaceRepository) {
            details = generateRepositoryFormFields(this.item);
        } else if (this.item instanceof PlaceMQTTBroker) {
            details = generateBrokerFormFields(this.item);
        }
        return details || new FormGroup({});
    }

    public ngOnInit(): void {
        this.item = this._data.item;
        this.edit = !!this._data.item.id;
        this.form = this.generateFormData();
        this.subscription(
            'delete_item',
            this._service.Hotkeys.listen(['KeyS'], () => this.submit())
        );
    }

    /**
     * Save changes and create item if it does not exist
     */
    public submit() {
        this.form.markAllAsTouched();
        if (this.item && this.form.valid) {
            this.loading = `${this.item.id ? 'Updating' : 'Creating'} ${this.name}...`;
            this._dialog_ref.disableClose = true;
            const item = this.item.id
                ? cleanObject({ ...this.item.toJSON(), ...this.form.value }, [undefined, null, ''])
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
                    this._service.notifySuccess(
                        `Successfully ${this.item.id ? 'updated' : 'added'} ${this.name}`
                    );
                    if (!this.form.value.id && this.form.controls.settings) {
                        this.newSettings(item, this.form.controls.settings.value).then(() =>
                            this._dialog_ref.close()
                        );
                    } else {
                        this._dialog_ref.close();
                    }
                },
                (err) => {
                    this.loading = null;
                    this._dialog_ref.disableClose = false;
                    this._service.notifyError(
                        `Error ${this.item.id ? 'editing' : 'adding new'} ${
                            this.name
                        }. Error: ${JSON.stringify(err.response || err.message || err)}`
                    );
                }
            );
        }
    }

    /**
     * Save initial settings for resources
     */
    private async newSettings(item: HashMap<any>, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id,
            settings_string,
            encryption_level: EncryptionLevel.None,
        });
        console.log('Settings:', new_settings, settings_string);
        const settings = await addSettings(new_settings)
            .toPromise()
            .catch((err) => {
                this.loading = null;
                this._service.notifyError(
                    `Error saving settings for ${item.name || item.id}. Error: ${JSON.stringify(
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
