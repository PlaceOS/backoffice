import { Component, Inject, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    EngineResource,
    EngineSystem,
    EngineModule,
    EngineZone,
    EngineDriver,
    EngineUser,
    EngineDomain,
    EngineApplication,
    EngineSettings,
    EngineTrigger,
    EngineRepository
} from '@acaengine/ts-client';
import { FormGroup } from '@angular/forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { DialogEvent, EngineServiceLike } from 'src/app/shared/utilities/types.utilities';
import {
    generateSystemsFormFields,
    FormDetails
} from 'src/app/shared/utilities/data/systems.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { generateModuleFormFields } from 'src/app/shared/utilities/data/modules.utilities';
import { generateZoneFormFields } from 'src/app/shared/utilities/data/zones.utilites';
import { generateDriverFormFields, DriverInitData } from 'src/app/shared/utilities/data/drivers.utilities';
import { generateUserFormFields } from 'src/app/shared/utilities/data/users.utilities';
import { generateDomainFormFields } from 'src/app/shared/utilities/data/domains.utilities';
import { generateApplicationFormFields } from 'src/app/shared/utilities/data/applications.utilities';
import {
    generateTriggerFormFields,
    generateTriggerSettingsFormFields
} from 'src/app/shared/utilities/data/triggers.utilities';
import { generateRepositoryFormFields } from 'src/app/shared/utilities/data/repositories.utilities';

export interface CreateEditModalData {
    /** Service associated with the item being created/edited */
    service: EngineServiceLike;
    /** Item being worked on */
    item: EngineResource<any>;
    /** Form fields for item */
    form?: any[];
    /** Name of the type of item being worked on */
    name?: string;
    /** Whether saving the form details will be handled outside the modal */
    external_save?: boolean;
    /** Initialisation details for new drivers */
    discovery?: DriverInitData;
}

@Component({
    selector: 'item-modal',
    templateUrl: './item-modal.component.html',
    styleUrls: ['./item-modal.component.scss']
})
export class ItemCreateUpdateModalComponent extends BaseDirective implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: EngineResource<any>;
    /** Saved version of the item */
    public result: any;
    /** List of the form fields needed for the item */
    public form: FormGroup;
    /** Loading status for the item request is being processed */
    public loading: string;

    public get name(): string {
        return this._data.service.name || this._data.service._name;
    }

    public get item_type(): string {
        if (this.item instanceof EngineSystem) {
            return 'system';
        } else if (this.item instanceof EngineModule) {
            return 'module';
        } else if (this.item instanceof EngineZone) {
            return 'zone';
        } else if (this.item instanceof EngineDriver) {
            return 'driver';
        } else if (this.item instanceof EngineUser) {
            return 'user';
        } else if (this.item instanceof EngineDomain) {
            return 'domain';
        } else if (this.item instanceof EngineApplication) {
            return 'application';
        } else if (this.item instanceof EngineTrigger && this._data.external_save) {
            return 'system-trigger';
        } else if (this.item instanceof EngineTrigger) {
            return 'trigger';
        } else if (this.item instanceof EngineRepository) {
            return 'repository';
        }
    }

    constructor(
        private _dialog: MatDialogRef<ItemCreateUpdateModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: CreateEditModalData,
        private _service: ApplicationService
    ) {
        super();
    }

    /**
     * Generate the form fields for the item being handled
     */
    public generateFormData(): FormGroup {
        let details: FormDetails = null;
        if (this.item instanceof EngineSystem) {
            details = generateSystemsFormFields(this.item);
        } else if (this.item instanceof EngineModule) {
            details = generateModuleFormFields(this.item);
        } else if (this.item instanceof EngineZone) {
            details = generateZoneFormFields(this.item);
        } else if (this.item instanceof EngineDriver) {
            details = generateDriverFormFields(this.item, this._data.discovery || null);
        } else if (this.item instanceof EngineUser) {
            details = generateUserFormFields(this.item);
        } else if (this.item instanceof EngineDomain) {
            details = generateDomainFormFields(this.item);
        } else if (this.item instanceof EngineApplication) {
            details = generateApplicationFormFields(this.item);
        } else if (this.item instanceof EngineTrigger && this._data.external_save) {
            details = generateTriggerSettingsFormFields(this.item);
        } else if (this.item instanceof EngineTrigger) {
            details = generateTriggerFormFields(this.item);
        } else if (this.item instanceof EngineRepository) {
            details = generateRepositoryFormFields(this.item);
        }
        if (details) {
            details.subscriptions.forEach((sub, index) =>
                this.subscription(`form_field_${index}`, sub)
            );
            return details.form;
        }
        return new FormGroup({});
    }

    public ngOnInit(): void {
        this.item = this._data.item;
        this.edit = !!this._data.item.id;
        this.form = this.generateFormData();
    }

    /**
     * Save changes and create item if it does not exist
     */
    public submit() {
        this.form.markAllAsTouched();
        if (this.item && this.form.valid) {
            this.loading = `${this.item.id ? 'Updating' : 'Creating'} ${this.name}...`;
            if (this._data.external_save) {
                this.event.emit({ reason: 'action', metadata: this.form.value });
                return;
            }
            this.item.save().then(
                item => {
                    console.log('Item:', item);
                    this.result = item;
                    this.loading = null;
                    const settings: EngineSettings = (this.item as any).settings;
                    if (
                        settings &&
                        settings instanceof EngineSettings &&
                        Object.keys(settings.changes).length &&
                        (settings.changes.encryption_level !== settings.encryption_level ||
                            settings.changes.settings_string)
                    ) {
                        (settings as any).parent_id = item.id;
                        this.loading = `Saving settings for ${item.name}`;
                        ((this.item as any).settings as EngineSettings).save().then(
                            () => {
                                this.loading = null;
                                this.event.emit({ reason: 'done', metadata: { item } });
                                this._dialog.close();
                                this._service.notifySuccess(
                                    `Successfully ${this.item.id ? 'updated' : 'added'} ${
                                        this.name
                                    }`
                                );
                            },
                            err => {
                                this.loading = null;
                                this._service.notifyWarn(
                                    `Successfully ${this.item.id ? 'updated' : 'added'} ${
                                        this.name
                                    }. Error saving settings. Error: ${err.message || err}`
                                );
                                this._dialog.close();
                            }
                        );
                    } else {
                        this.event.emit({ reason: 'done', metadata: { item } });
                        this._service.notifySuccess(
                            `Successfully ${this.item.id ? 'updated' : 'added'} ${this.name}`
                        );
                        this._dialog.close();
                    }
                },
                err => {
                    this.loading = null;
                    this._service.notifyError(
                        `Error ${this.item.id ? 'editing' : 'adding new'} ${
                            this.name
                        }. Error: ${err.message || err}`
                    );
                }
            );
        }
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog.close();
    }
}
