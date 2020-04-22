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
    EngineRepository,
    EncryptionLevel
} from '@placeos/ts-client';
import { FormGroup } from '@angular/forms';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { DialogEvent, EngineServiceLike, Identity } from 'src/app/shared/utilities/types.utilities';
import {
    generateSystemsFormFields,
    FormDetails
} from 'src/app/shared/utilities/data/systems.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { generateModuleFormFields } from 'src/app/shared/utilities/data/modules.utilities';
import { generateZoneFormFields } from 'src/app/shared/utilities/data/zones.utilites';
import { generateDriverFormFields } from 'src/app/shared/utilities/data/drivers.utilities';
import { generateUserFormFields } from 'src/app/shared/utilities/data/users.utilities';
import { generateDomainFormFields } from 'src/app/shared/utilities/data/domains.utilities';
import { generateApplicationFormFields } from 'src/app/shared/utilities/data/applications.utilities';
import {
    generateTriggerFormFields,
    generateTriggerSettingsFormFields
} from 'src/app/shared/utilities/data/triggers.utilities';
import { generateRepositoryFormFields } from 'src/app/shared/utilities/data/repositories.utilities';

export interface CreateEditModalData<T extends Identity = any> {
    /** Service associated with the item being created/edited */
    service: EngineServiceLike;
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

    public get readonly(): boolean {
        return !!this._data.readonly;
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
        let details: FormDetails = null;
        if (this.item instanceof EngineSystem) {
            details = generateSystemsFormFields(this.item);
        } else if (this.item instanceof EngineModule) {
            details = generateModuleFormFields(this.item);
        } else if (this.item instanceof EngineZone) {
            details = generateZoneFormFields(this.item);
        } else if (this.item instanceof EngineDriver) {
            details = generateDriverFormFields(this.item);
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
            if (this._data.external_save) {
                this.event.emit({ reason: 'action', metadata: this.form.value });
                return;
            }
            this.item.save().then(
                item => {
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
                err => {
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
    private async newSettings(item: EngineResource<any>, setting_string: string) {
        const new_settings = new EngineSettings(this._service.EngineSettings, {
            parent_id: item.id,
            setting_string: '',
            encryption_level: EncryptionLevel.None
        });
        new_settings.storePendingChange('settings_string', setting_string);
        const settings = await new_settings.save().catch(err => {
            this.loading = null;
            this._service.notifyError(
                `Error saving settings for ${item.name || item.id}. Error: ${JSON.stringify(err.response || err.message || err)}`
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
