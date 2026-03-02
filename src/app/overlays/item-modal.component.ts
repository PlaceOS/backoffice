import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    EncryptionLevel,
    PlaceApplication,
    PlaceDomain,
    PlaceDriver,
    PlaceMQTTBroker,
    PlaceModule,
    PlaceRepository,
    PlaceResource,
    PlaceSettings,
    PlaceSystem,
    PlaceTrigger,
    PlaceUser,
    PlaceZone,
    addSettings,
    cleanObject,
} from '@placeos/ts-client';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { generateBrokerFormFields } from '../admin/brokers.utilities';
import { AsyncHandler } from '../common/async-handler.class';
import { getInvalidFields } from '../common/general';
import { HotkeysService } from '../common/hotkeys.service';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { DialogEvent, Identity } from '../common/types';
import { generateApplicationFormFields } from '../domains/applications.utilities';
import { generateDomainFormFields } from '../domains/domains.utilities';
import { generateDriverFormFields } from '../drivers/drivers.utilities';
import { generateModuleFormFields } from '../modules/modules.utilities';
import { generateRepositoryFormFields } from '../repositories/repositories.utilities';
import {
    CameraSnapshotUrlFields,
    generateSystemsFormFields,
    normaliseCameraSnapshotUrls,
} from '../systems/systems.utilities';
import {
    generateTriggerFormFields,
    generateTriggerSettingsFormFields,
} from '../triggers/triggers.utilities';
import { ApplicationFormComponent } from '../ui/forms/application-form.component';
import { BrokerFormComponent } from '../ui/forms/broker-form.component';
import { DomainFormComponent } from '../ui/forms/domain-form.component';
import { DriverFormComponent } from '../ui/forms/driver-form.component';
import { ModuleFormComponent } from '../ui/forms/module-form.component';
import { RepositoryFormComponent } from '../ui/forms/repository-form.component';
import { SystemFormComponent } from '../ui/forms/system-form.component';
import { SystemTriggerFormComponent } from '../ui/forms/system-trigger-form.component';
import { TriggerFormComponent } from '../ui/forms/trigger-form.component';
import { UserFormComponent } from '../ui/forms/user-form.component';
import { ZoneFormComponent } from '../ui/forms/zone-form.component';
import { FullscreenModalShellComponent } from '../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { generateUserFormFields } from '../users/users.utilities';
import { generateZoneFormFields } from '../zones/zones.utilites';

export interface CreateEditModalData<T extends Identity = Identity> {
    /** Service associated with the item being created/edited */
    save: (item: T) => Observable<T>;
    /** Item being worked on */
    item: T;
    /** Form fields for item */
    form?: unknown[];
    /** Translation key for new item */
    name?: string;
    /** Whether parts of the form are readonly */
    readonly?: string;
    /** Whether saving the form details will be handled outside the modal */
    external_save?: boolean;
}

@Component({
    selector: 'item-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                name +
                    ((name.includes('ADMIN') || name.startsWith('DOMAINS.')
                        ? '_'
                        : '.') +
                        (item && edit ? 'EDIT' : 'NEW'))
                    | uppercase
                    | translate
            "
            [loading]="loading"
            (save)="submit()"
        >
            @switch (item_type) {
                @case ('repository') {
                    <repository-form [form]="form" />
                }
                @case ('trigger') {
                    <trigger-form [form]="form" />
                }
                @case ('system-trigger') {
                    <system-trigger-form [form]="form" />
                }
                @case ('application') {
                    <application-form [form]="form" />
                }
                @case ('domain') {
                    <domain-form [form]="form" />
                }
                @case ('user') {
                    <user-form [form]="form" />
                }
                @case ('driver') {
                    <driver-form
                        [form]="form"
                        (waitingChange)="can_submit = !$event"
                    />
                }
                @case ('zone') {
                    <zone-form [form]="form" />
                }
                @case ('module') {
                    <module-form [form]="form" [readonly]="readonly" />
                }
                @case ('broker') {
                    <broker-form [form]="form" />
                }
                @default {
                    <system-form [form]="form" />
                }
            }
        </fullscreen-modal-shell>
    `,
    styles: [''],
    imports: [
        FullscreenModalShellComponent,
        CommonModule,
        TranslatePipe,
        RepositoryFormComponent,
        TriggerFormComponent,
        SystemTriggerFormComponent,
        ApplicationFormComponent,
        DomainFormComponent,
        UserFormComponent,
        DriverFormComponent,
        ZoneFormComponent,
        ModuleFormComponent,
        BrokerFormComponent,
        SystemFormComponent,
    ],
})
export class ItemCreateUpdateModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog_ref =
        inject<MatDialogRef<ItemCreateUpdateModalComponent>>(MatDialogRef);
    private _data = inject<CreateEditModalData>(MAT_DIALOG_DATA);
    private _hotkey = inject(HotkeysService);

    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether the item is being editing */
    public edit: boolean;
    /** Item to edit */
    public item: PlaceResource | Identity;
    /** Saved version of the item */
    public result: unknown;
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
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    /**
     * Save changes and create item if it does not exist
     */
    public submit() {
        this.form.markAllAsTouched();
        if (!this.item || !this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading = i18n(`${this.name}.SAVING`);
        this._dialog_ref.disableClose = true;
        const item_json = (this.item as PlaceResource).toJSON
            ? (this.item as PlaceResource).toJSON()
            : this.item;
        const form_item = (
            this.item.id
                ? cleanObject(
                      { ...item_json, ...this.form.value },
                      this.item_type === 'user'
                          ? [undefined, null, '']
                          : [undefined, null],
                  )
                : { ...item_json, ...this.form.value }
        ) as Identity;
        const item = this.normaliseItemPayload(form_item);
        if (this._data.external_save) {
            this.event.emit({ reason: 'action', metadata: item });
            return;
        }
        this._data.save(item).subscribe(
            (_item) => {
                this.result = _item;
                this._dialog_ref.disableClose = false;
                this.event.emit({ reason: 'done', metadata: { item: _item } });
                notifySuccess(i18n(`${this.name}.SAVE_SUCCESS`));
                if (!this.form.value.id && this.form.controls.settings) {
                    this.newSettings(
                        _item,
                        this.form.controls.settings.value,
                    ).then(() => this._dialog_ref.close());
                } else {
                    this._dialog_ref.close();
                }
            },
            async (err) => {
                this.loading = null;
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n(`${this.name}.SAVE_ERROR`, {
                        error: JSON.stringify(
                            (await err.text()) || err.message || err,
                        ),
                    }),
                );
            },
        );
    }

    /**
     * Save initial settings for resources
     */
    private normaliseItemPayload<T extends Identity>(item: T): T {
        if (this.item_type !== 'system') {
            return item;
        }
        const {
            camera_snapshot_url,
            camera_snapshot_urls,
            ...system_item
        } = item as T & CameraSnapshotUrlFields;
        return {
            ...system_item,
            camera_snapshot_urls: normaliseCameraSnapshotUrls({
                ...system_item,
                camera_snapshot_url,
                camera_snapshot_urls,
            }),
        } as unknown as T;
    }

    private async newSettings(item: Identity, settings_string: string) {
        const new_settings = new PlaceSettings({
            parent_id: item.id as string,
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
                        err.response || err.message || err,
                    )}`,
                );
            });
        (item as Record<string, unknown>).settings[EncryptionLevel.None] =
            settings;
    }

    /**
     * Close the modal
     */
    public close() {
        this._dialog_ref.close();
    }
}
