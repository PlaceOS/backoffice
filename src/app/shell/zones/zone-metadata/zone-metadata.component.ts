import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { EngineZone, EngineZoneMetadata } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';
import { HashMap } from 'src/app/shared/utilities/types.utilities';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { validateJSONString } from 'src/app/shared/utilities/validation.utilities';
import { MatDialog } from '@angular/material/dialog';
import { MetadataDetailsModalComponent } from 'src/app/overlays/metadata-details-modal/metadata-details-modal.component';

@Component({
    selector: 'zone-metadata',
    templateUrl: './zone-metadata.template.html',
    styleUrls: ['./zone-metadata.styles.scss']
})
export class ZoneMetadataComponent extends BaseDirective implements OnChanges, OnInit {
    @Input() public item: EngineZone;
    /** List of metadata associated with the zone */
    public metadata: EngineZoneMetadata[] = [];
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
            this._service.listen('BACKOFFICE.active_item', item => {
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
            details: {}
        });
        this.generateForms();
    }

    public editMetadataDetails(field: EngineZoneMetadata) {
        const form = this.form_map[field.name];
        this._dialog.open(MetadataDetailsModalComponent, {
            maxWidth: '95vw',
            data: {
                form
            }
        });
    }

    public saveMetadata(field: EngineZoneMetadata) {
        const form = this.form_map[field.name];
        form.markAllAsTouched();
        if (form.valid) {
            const value = form.value;
            this.loading[field.name] = true;
            this._service.Zones.updateMetadata(this.item.id, {
                ...value,
                details: JSON.parse(value.details)
            }).then(
                (item: EngineZoneMetadata) => {
                    this.loading[field.name] = false;
                    const index = this.metadata.findIndex(i => i.name === field.name);
                    this.edited[field.name] = false;
                    if (field.name !== item.name) {
                        this._service.Zones.deleteMetadata(this.item.id, field).catch(err =>
                            this._service.notifyError(
                                `Error removing old "${field.name}" metadata. Error: ${err.message ||
                                    err}`
                            )
                        );
                    }
                    if (index >= 0) {
                        this.metadata.splice(index, 1, item);
                    }
                    this._service.notifySuccess(`Saved "${field.name}" metadata.`);
                },
                err => {
                    this.loading[field.name] = false;
                    this._service.notifyError(
                        `Error saving "${field.name}" metadata. Error: ${err.message || err}`
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
        this._service.Zones.listMetadata(this.item.id).then(map => {
            this.metadata = Object.keys(map).map(key => map[key]);
            this.generateForms();
        });
    }
}
