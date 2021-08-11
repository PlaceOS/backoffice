import { Component, OnInit } from '@angular/core';
import {
    PlaceMetadata,
    removeMetadata,
    updateMetadata,
    PlaceUser,
} from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { HashMap } from 'apps/backoffice/src/app/common/types';
import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { validateJSONString } from 'apps/backoffice/src/app/common/validation';
import { MatDialog } from '@angular/material/dialog';
import { MetadataDetailsModalComponent } from 'apps/backoffice/src/app/overlays/metadata-details-modal/metadata-details-modal.component';
import {
    ConfirmModalComponent,
    CONFIRM_METADATA,
} from 'apps/backoffice/src/app/overlays/confirm-modal/confirm-modal.component';
import {
    notifySuccess,
    notifyError,
} from 'apps/backoffice/src/app/common/notifications';
import { SchemaStateService } from '../engine/schema-state.service';
import { UsersStateService } from './users-state.service';

@Component({
    selector: 'user-metadata',
    template: `
        <div class="p-4" *ngIf="item">
            <button
                mat-button
                (click)="newMetadata()"
                i18n="@@addMetadataAction"
            >
                Add new Metadata Field
            </button>
            <div class="mt-4" *ngIf="metadata?.length; else empty_state">
                <mat-accordion>
                    <ng-container *ngFor="let item of metadata">
                        <mat-expansion-panel
                            [class.no-padding]="true"
                            *ngIf="form_map[item.name]"
                            [formGroup]="form_map[item.name]"
                        >
                            <mat-expansion-panel-header>
                                <mat-panel-title>
                                    <div edit class="flex-1">
                                        {{
                                            form_map[item.name].controls.name
                                                .value
                                        }}
                                    </div>
                                    <ng-container *ngIf="edited[item.name]">
                                        <button
                                            mat-button
                                            save
                                            *ngIf="
                                                !loading[item.name];
                                                else load_state
                                            "
                                            (click)="$event.stopPropagation()"
                                            (click)="saveMetadata(item)"
                                            i18n="@@saveAction"
                                        >
                                            Save
                                        </button>
                                    </ng-container>
                                    <button
                                        mat-icon-button
                                        matTooltip="Edit Metadata Settings"
                                        (click)="
                                            editMetadataDetails(item);
                                            $event.stopPropagation()
                                        "
                                    >
                                        <app-icon
                                            [icon]="{
                                                class: 'backoffice-edit'
                                            }"
                                        ></app-icon>
                                    </button>
                                    <div class="contents" *ngIf="!item.new">
                                        <button
                                            mat-icon-button
                                            matTooltip="Remove Metadata"
                                            (click)="deleteMetadata(item.name)"
                                        >
                                            <app-icon
                                                [icon]="{
                                                    class: 'backoffice-trash'
                                                }"
                                            ></app-icon>
                                        </button>
                                    </div>
                                </mat-panel-title>
                            </mat-expansion-panel-header>
                            <div class="settings">
                                <settings-form-field
                                    formControlName="details"
                                    lang="json"
                                    [schema]="this.schema_map[item.name]"
                                    [readonly]="false"
                                ></settings-form-field>
                            </div>
                        </mat-expansion-panel>
                    </ng-container>
                </mat-accordion>
            </div>
        </div>
        <ng-template #empty_state>
            <div class="p-8 text-center" i18n="@@userMetadataEmpty">
                No user metadata found
            </div>
        </ng-template>
        <ng-template #load_state>
            <mat-spinner diameter="32"></mat-spinner>
        </ng-template>
    `,
    styles: [
        `
            [edit] app-icon {
                opacity: 0;
                transition: opacity 200ms;
            }

            [edit]:hover app-icon {
                opacity: 1;
            }

            mat-panel-title {
                display: flex;
                align-items: center;
                height: 1.2em;
                overflow: visible;
            }

            mat-panel-title [save] {
                font-size: 0.8em;
                background: none;
                border: none;
                text-decoration: underline;
                color: inherit;
            }

            mat-form-field {
                height: 3em;
            }

            .settings {
                width: 100%;
            }

            .contents {
                display: flex;
                justify-content: flex-end;
                flex: 1;
                min-width: 2em;
            }

            .contents button {
                text-decoration: none;
            }
        `,
    ],
})
export class UserMetadataComponent extends BaseClass implements OnInit {
    /** List of metadata associated with the user */
    public metadata: PlaceMetadata[];
    /** Map of form field groups to metadata fields */
    public form_map: HashMap<FormGroup> = {};
    /** Map of metadata fields to whether they have been edited */
    public edited: HashMap<boolean> = {};
    /** Map of metadata properties to whether they are saving */
    public loading: HashMap<boolean> = {};
    /** Map of metadata schemas to the associated metadata */
    public schema_map: HashMap<HashMap | string> = {};

    public get item(): PlaceUser {
        return this._service.active_item as any;
    }

    private validateName(name_list: string[]) {
        return (control: AbstractControl) => {
            return name_list.indexOf(control.value) >= 0
                ? { name: true }
                : null;
        };
    }

    constructor(
        private _dialog: MatDialog,
        private _service: UsersStateService,
        private _schemas: SchemaStateService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'metadata',
            this._service.metadata.subscribe((d) => {
                this.metadata = d;
                this.generateForms();
            })
        );
    }

    public newMetadata() {
        this.metadata.push({
            name: `new_field_${Math.floor(Math.random() * 999_999_999)}`,
            description: '',
            new: true,
            details: {},
        } as any);
        this.generateForms();
    }

    public editMetadataDetails(field: PlaceMetadata) {
        const form = this.form_map[field.name];
        this._dialog.open(MetadataDetailsModalComponent, {
            maxWidth: '95vw',
            data: {
                form,
            },
        });
    }

    /**
     * Delete the given metadata field
     * @param field Name of the field to remove
     */
    public deleteMetadata(field: string) {
        const ref = this._dialog.open(ConfirmModalComponent, {
            ...CONFIRM_METADATA,
            data: {
                title: `Kill process`,
                content: `
                    <p>Are you sure you want delete the metadata property "${field}"?</p>
                `,
                icon: { type: 'icon', class: 'backoffice-trash' },
            },
        });
        this.subscription(
            'confirm',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    removeMetadata(this.item.id, { name: field }).subscribe(
                        () => {
                            notifySuccess(
                                `Successfully removed "${field}" metadata.`
                            );
                            this.metadata = this.metadata.filter(
                                (prop) => prop.name !== field
                            );
                            this.generateForms();
                        },
                        (err) =>
                            notifyError(
                                `Error removing old "${field}" metadata. Error: ${
                                    err.response || err.message || err
                                }`
                            )
                    );
                }
                ref.close();
            })
        );
    }

    public saveMetadata(field: PlaceMetadata) {
        const form = this.form_map[field.name];
        form.markAllAsTouched();
        if (!form.valid)
            return notifyError(
                `JSON for property "${form.controls.name.value}" is invalid`
            );
        const value = form.value;
        this.loading[field.name] = true;
        updateMetadata(this.item.id, {
            ...value,
            details: JSON.parse(value.details),
        }).subscribe(
            (item: PlaceMetadata) => {
                this.loading[field.name] = false;
                const index = this.metadata.findIndex(
                    (i) => i.name === field.name
                );
                this.edited[field.name] = false;
                if (field.name !== item.name) {
                    removeMetadata(this.item.id, field)
                        .toPromise()
                        .catch((err) =>
                            notifyError(
                                `Error removing old "${
                                    field.name
                                }" metadata. Error: ${JSON.stringify(
                                    err.response || err.message || err
                                )}`
                            )
                        );
                }
                if (index >= 0) {
                    this.metadata.splice(index, 1, {
                        ...item,
                        new: false,
                    } as any);
                }
                notifySuccess(`Saved "${value.name}" metadata.`);
                this.generateForms();
            },
            (err) => {
                this.loading[field.name] = false;
                notifyError(
                    `Error saving "${
                        value.name
                    }" metadata. Error: ${JSON.stringify(
                        err.response || err.message || err
                    )}`
                );
            }
        );
    }

    private generateForms() {
        delete this.form_map;
        this.form_map = {};
        this.metadata.forEach((group) => {
            const details =
                typeof group.details === 'string'
                    ? JSON.parse(group.details)
                    : group.details;
            this.form_map[group.name] = new FormGroup({
                name: new FormControl(group.name, [
                    Validators.required,
                    this.validateName(
                        this.metadata
                            .filter((i) => i.name !== group.name)
                            .map((i) => i.name)
                    ),
                ]),
                description: new FormControl(group.description),
                editors: new FormControl(group.editors),
                details: new FormControl(
                    JSON.stringify(details || {}, undefined, 4),
                    [Validators.required, validateJSONString]
                ),
                schema: new FormControl(group.schema),
            });
            this.subscription(
                `${group.name}_changes`,
                this.form_map[group.name].valueChanges.subscribe(
                    () => (this.edited[group.name] = true)
                )
            );
            this.subscription(
                `${group.name}_schema`,
                this.form_map[
                    group.name
                ].controls.schema.valueChanges.subscribe((_) => {
                    let schema = this._schemas.getSchema(_);
                    if (!schema) {
                        try {
                            schema = JSON.parse(_);
                        } catch (e) {
                            schema = {};
                        }
                    }
                    this.schema_map[group.name] = schema;
                })
            );
        });
    }
}
