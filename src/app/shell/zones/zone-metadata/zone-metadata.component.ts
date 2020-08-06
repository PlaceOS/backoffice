import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { PlaceZone, PlaceMetadata, removeMetadata, updateMetadata, showMetadata } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { HashMap } from 'src/app/shared/utilities/types.utilities';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { validateJSONString } from 'src/app/shared/utilities/validation.utilities';
import { MatDialog } from '@angular/material/dialog';
import { MetadataDetailsModalComponent } from 'src/app/overlays/metadata-details-modal/metadata-details-modal.component';
import {
    ConfirmModalComponent,
    CONFIRM_METADATA
} from 'src/app/overlays/confirm-modal/confirm-modal.component';

@Component({
    selector: 'zone-metadata',
    templateUrl: './zone-metadata.template.html',
    styleUrls: ['./zone-metadata.styles.scss']
})
export class ZoneMetadataComponent extends BaseDirective implements OnChanges, OnInit {
    @Input() public item: PlaceZone;
    /** List of metadata associated with the zone */
    public metadata: PlaceMetadata[] = [];
    /** Map of form field groups to metadata fields */
    public form_map: HashMap<FormGroup> = {};
    /** Map of metadata fields to whether they have been edited */
    public edited: HashMap<boolean> = {};
    /** Map of metadata properties to whether they are saving */
    public loading: HashMap<boolean> = {};

    private validateName(name_list: string[]) {
        return (control: AbstractControl) => {
            return name_list.indexOf(control.value) >= 0 ? { name: true } : null;
        };
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item').subscribe(item => {
                this.item = item;
                this.ngOnChanges({ item: new SimpleChange(null, this.item, false) });
            })
        );
    }

    public ngOnChanges(changes: any) {
        if (changes.item && this.item) {
            this.loadMetadata();
        }
    }

    public newMetadata() {
        this.metadata.push({
            name: `new_field_${Math.floor(Math.random() * 999_999_999)}`,
            description: '',
            new: true,
            details: {}
        } as any);
        this.generateForms();
    }

    public editMetadataDetails(field: PlaceMetadata) {
        const form = this.form_map[field.name];
        this._dialog.open(MetadataDetailsModalComponent, {
            maxWidth: '95vw',
            data: {
                form
            }
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
                icon: { type: 'icon', class: 'backoffice-trash' }
            }
        });
        this.subscription(
            'confirm',
            ref.componentInstance.event.subscribe(event => {
                if (event.reason === 'done') {
                    removeMetadata(this.item.id, { name: field }).subscribe(
                        () => {
                            this._service.notifySuccess(
                                `Successfully removed "${field}" metadata.`
                            );
                            this.metadata = this.metadata.filter(prop => prop.name !== field);
                            this.generateForms();
                        },
                        err =>
                            this._service.notifyError(
                                `Error removing old "${field}" metadata. Error: ${err.response || err.message ||
                                    err}`
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
        if (form.valid) {
            const value = form.value;
            this.loading[field.name] = true;
            updateMetadata(this.item.id, {
                ...value,
                details: JSON.parse(value.details)
            }).subscribe(
                (item: PlaceMetadata) => {
                    this.loading[field.name] = false;
                    const index = this.metadata.findIndex(i => i.name === field.name);
                    this.edited[field.name] = false;
                    if (field.name !== item.name) {
                        removeMetadata(this.item.id, field).toPromise().catch(err =>
                            this._service.notifyError(
                                `Error removing old "${
                                    field.name
                                }" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`
                            )
                        );
                    }
                    if (index >= 0) {
                        this.metadata.splice(index, 1, { ...item, new: false } as any);
                    }
                    this._service.notifySuccess(`Saved "${value.name}" metadata.`);
                    this.generateForms();
                },
                err => {
                    this.loading[field.name] = false;
                    this._service.notifyError(
                        `Error saving "${value.name}" metadata. Error: ${JSON.stringify(err.response || err.message || err)}`
                    );
                }
            );
        } else {
            this._service.notifyError(`JSON for property "${form.controls.name.value}" is invalid`);
        }
    }

    private generateForms() {
        delete this.form_map;
        this.form_map = {};
        this.metadata.forEach(group => {
            this.form_map[group.name] = new FormGroup({
                name: new FormControl(group.name, [
                    Validators.required,
                    this.validateName(
                        this.metadata.filter(i => i.name !== group.name).map(i => i.name)
                    )
                ]),
                description: new FormControl(group.name),
                details: new FormControl(JSON.stringify(group.details || {}, undefined, 4), [
                    Validators.required,
                    validateJSONString
                ])
            });
            this.subscription(
                `${group.name}_name`,
                this.form_map[group.name].controls.name.valueChanges.subscribe(
                    () => (this.edited[group.name] = true)
                )
            );
            this.subscription(
                `${group.name}_description`,
                this.form_map[group.name].controls.description.valueChanges.subscribe(
                    () => (this.edited[group.name] = true)
                )
            );
            this.subscription(
                `${group.name}_details`,
                this.form_map[group.name].controls.details.valueChanges.subscribe(
                    () => (this.edited[group.name] = true)
                )
            );
        });
    }

    private loadMetadata() {
        showMetadata(this.item.id).subscribe(map => {
            this.metadata = Object.keys(map).map(key => map[key]);
            this.generateForms();
        });
    }
}
