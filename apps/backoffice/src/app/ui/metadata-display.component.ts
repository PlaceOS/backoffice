import {
    Component,
    inject,
    input,
    OnChanges,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    listMetadata,
    PlaceMetadata,
    removeMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
import { VERSION } from '../../environments/version';
// import { SchemaStateService } from '../admin/schema-state.service';
import { ANIMATION_SHOW_CONTRACT_EXPAND } from '../common/angular-animations';
import { AsyncHandler } from '../common/async-handler.class';
import { notifyError, notifySuccess } from '../common/notifications';
import { HashMap } from '../common/types';
import { currentUser } from '../common/user-state';
import { validateJSONString } from '../common/validation';
import {
    CONFIRM_METADATA,
    ConfirmModalComponent,
} from '../overlays/confirm-modal.component';
import { MetadataDetailsModalComponent } from '../overlays/metadata-details-modal.component';
import { MetadataHistoryModalComponent } from '../overlays/metadata-history-modal.component';
import { SettingsFieldComponent } from './custom-fields/settings-field.component';
import { IconComponent } from './icon.component';
import { DateFromPipe } from './pipes/date-from.pipe';
import { TranslatePipe } from './translate.pipe';

function replaceDescTag(inputString, newContent) {
    return inputString.replace(/^\[.*?\]/, `[${newContent}]`);
}

@Component({
    selector: 'metadata-display',
    template: `
        <div class="flex items-center justify-between space-x-2">
            <button btn (click)="newMetadata()">
                {{ 'COMMON.METADATA_NEW' | translate }}
            </button>
            <mat-form-field appearance="outline" class="no-subscript">
                <icon matPrefix class="relative -left-1 text-2xl">search</icon>
                <input
                    matInput
                    [(ngModel)]="search_text"
                    (ngModelChange)="filterMetadata()"
                    placeholder="Search metadata blocks..."
                />
            </mat-form-field>
        </div>
        @if (metadata()?.length > 0) {
            <div class="mt-4 space-y-2">
                @for (item of metadata(); track item.name) {
                    <div
                        block
                        [id]="'md-block-' + item.name"
                        class="rounded border border-base-300"
                        [class.shadow]="show_view === item.name"
                        [class.opacity-30]="item.match === false"
                        [formGroup]="form_map()[item.name]"
                    >
                        <button
                            header
                            class="flex w-full items-center space-x-2 bg-base-200 px-2 py-1"
                            (click)="toggleView(item)"
                        >
                            <h3 class="truncate px-2 font-mono text-sm">
                                {{ form_map()[item.name].controls.name.value }}
                            </h3>
                            <div class="flex-1"></div>
                            <div
                                class="whitespace-nowrap rounded border border-base-300 px-2 py-1 font-mono text-[0.625rem]"
                            >
                                {{ item.updated_at | dateFrom }}
                            </div>
                            <button
                                class="flex items-center rounded-full border border-base-300 bg-base-100"
                                (click)="$event.stopPropagation()"
                            >
                                <button
                                    icon
                                    matRipple
                                    (click)="saveMetadata(item)"
                                    [disabled]="!edited[item.name]"
                                    [matTooltip]="'COMMON.SAVE' | translate"
                                >
                                    <icon class="text-xl">save</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    (click)="editMetadataDetails(item)"
                                    [matTooltip]="
                                        'COMMON.METADATA_EDIT' | translate
                                    "
                                >
                                    <icon class="text-xl">edit</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    (click)="viewMetadataHistory(item)"
                                    [matTooltip]="
                                        'COMMON.METADATA_HISTORY' | translate
                                    "
                                >
                                    <icon class="text-xl">history</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="text-error"
                                    (click)="deleteMetadata(item.name)"
                                    [matTooltip]="
                                        'COMMON.METADATA_REMOVE' | translate
                                    "
                                >
                                    <icon class="text-xl">delete</icon>
                                </button>
                            </button>
                            <button icon matRipple>
                                <icon class="text-2xl">{{
                                    show_view() === item.name
                                        ? 'keyboard_arrow_down'
                                        : 'chevron_right'
                                }}</icon>
                            </button>
                        </button>
                        <div
                            body
                            class="overflow-hidden"
                            [@show]="
                                show_view() === item.name ? 'show' : 'hide'
                            "
                        >
                            <div
                                class="h-[32.5rem] border-t border-base-300 p-1"
                            >
                                @if (show_view() === item.name) {
                                    <settings-form-field
                                        formControlName="details"
                                        lang="json"
                                        [schema]="schema_map()[item.name]"
                                        [readonly]="false"
                                    ></settings-form-field>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        } @else {
            <div
                class="flex w-full flex-col items-center justify-center space-y-8 p-16 opacity-30"
            >
                <app-icon class="text-8xl">settings_alert</app-icon>
                <div>{{ 'COMMON.METADATA_EMPTY' | translate }}</div>
            </div>
        }
        <ng-template #load_state>
            <mat-spinner diameter="32" />
        </ng-template>
    `,
    styles: [
        `
            [block] {
                transition: opacity 0.2s ease-in-out;
            }
        `,
    ],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        SettingsFieldComponent,
        MatTooltipModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        DateFromPipe,
    ],
})
export class MetadataDisplayComponent
    extends AsyncHandler
    implements OnChanges
{
    private _dialog = inject(MatDialog);
    // private _schemas = inject(SchemaStateService);

    public readonly item = input<any>(undefined);
    /** List of metadata associated with the zone */
    public readonly metadata = signal<PlaceMetadata[]>([]);
    /** Map of form field groups to metadata fields */
    public readonly form_map = signal<HashMap<FormGroup>>({});
    /** Map of metadata fields to whether they have been edited */
    public readonly edited = signal<HashMap<boolean>>({});
    /** Map of metadata properties to whether they are saving */
    public readonly loading = signal<HashMap<boolean>>({});
    /** Map of metadata schemas to the associated metadata */
    public readonly schema_map = signal<HashMap<HashMap | string>>({});
    /** Metadata contents to view */
    public readonly show_view = signal('');
    /** Search text for filtering metadata */
    public readonly search_text = signal('');

    private validateName(name_list: string[]) {
        return (control: AbstractControl) => {
            return name_list.indexOf(control.value) >= 0
                ? { name: true }
                : null;
        };
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item()) {
            this.loadMetadata();
        }
    }

    public toggleView(item: any) {
        this.show_view.update((current) =>
            current === item.name ? '' : item.name,
        );
        this.search_text.set('');
        this.filterMetadata();
    }

    public newMetadata() {
        this.metadata.update((l) => {
            l.push({
                name: `new_field_${Math.floor(Math.random() * 999_999_999)}`,
                description: '',
                new: true,
                details: {},
            } as any);
            return l;
        });
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
                title: `Remove Metadata block`,
                content: `
                    <p>Are you sure you want delete the metadata property "${field}"?</p>
                `,
                icon: { type: 'icon', content: 'delete' },
            },
        });
        this.subscription(
            'confirm',
            ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'done') {
                    removeMetadata(this.item().id, { name: field }).subscribe({
                        next: () => {
                            notifySuccess(
                                `Successfully removed "${field}" metadata.`,
                            );
                            this.metadata.set(
                                this.metadata().filter(
                                    (prop) => prop && prop.name !== field,
                                ),
                            );
                            this.generateForms();
                        },
                        error: (err) =>
                            notifyError(
                                `Error removing old "${field}" metadata. Error: ${
                                    err.response || err.message || err
                                }`,
                            ),
                    });
                }
                ref.close();
            }),
        );
    }

    public filterMetadata() {
        const search = this.search_text().toLowerCase();
        if (search) this.show_view.set('');
        this.metadata.update((list) => {
            for (const block of list) {
                (block as any).match =
                    block.name.toLowerCase().includes(search) ||
                    `${this.form_map()[block.name].controls.name.value}`
                        .toLowerCase()
                        .includes(search);
            }
            return list;
        });
    }

    public saveMetadata(field: PlaceMetadata) {
        const form = this.form_map()[field.name];
        form.markAllAsTouched();
        if (!form.valid)
            return notifyError(
                `JSON for property "${form.controls.name.value}" is invalid`,
            );
        const value = form.value;
        this.loading.update((m) => {
            m[field.name] = true;
            return m;
        });
        const desc = value.description;
        const new_desc = replaceDescTag(desc, `${VERSION.hash}|B`);
        const data = JSON.parse(value.details);
        if (/^\[.*?\]/.test(desc)) {
            const user = currentUser();
            data.edited_by = {
                id: user.id,
                name: user.name,
                email: user.email,
                auth_id: user.authority_id,
                role: user.sys_admin
                    ? 'Admin'
                    : user.support
                      ? 'Support'
                      : 'User',
            };
        }
        updateMetadata(this.item().id, {
            ...value,
            description: new_desc,
            details: data,
        }).subscribe({
            next: (item: PlaceMetadata) => {
                this.loading[field.name] = false;
                const index = this.metadata().findIndex(
                    (i) => i.name === field.name,
                );
                this.edited[field.name] = false;
                if (field.name !== item.name) {
                    lastValueFrom(removeMetadata(this.item().id, field)).catch(
                        (err) =>
                            notifyError(
                                `Error removing old "${
                                    field.name
                                }" metadata. Error: ${JSON.stringify(
                                    err.response || err.message || err,
                                )}`,
                            ),
                    );
                }
                if (index >= 0) {
                    this.metadata.update((l) => {
                        l.splice(index, 1, {
                            ...item,
                            new: false,
                        } as any);
                        return l;
                    });
                }
                notifySuccess(`Saved "${value.name}" metadata.`);
                this.generateForms();
            },
            error: (err) => {
                this.loading[field.name] = false;
                notifyError(
                    `Error saving "${
                        value.name
                    }" metadata. Error: ${JSON.stringify(
                        err.response || err.message || err,
                    )}`,
                );
            },
        });
    }

    private generateForms() {
        this.form_map.set({});
        this.metadata().forEach((group) => {
            const details =
                typeof group.details === 'string'
                    ? JSON.parse(group.details)
                    : group.details;
            this.form_map.update((m) => {
                m[group.name] = new FormGroup({
                    name: new FormControl(group.name, [
                        Validators.required,
                        this.validateName(
                            this.metadata()
                                .filter((i) => i.name !== group.name)
                                .map((i) => i.name),
                        ),
                    ]),
                    description: new FormControl(group.description),
                    editors: new FormControl(group.editors),
                    details: new FormControl(
                        JSON.stringify(details || {}, undefined, 4),
                        [Validators.required, validateJSONString],
                    ),
                    schema: new FormControl(group.schema),
                });
                return m;
            });
            this.subscription(
                `${group.name}_changes`,
                this.form_map()[group.name].valueChanges.subscribe(
                    () => (this.edited[group.name] = true),
                ),
            );
            // this.subscription(
            //     `${group.name}_schema`,
            //     this.form_map()[
            //         group.name
            //     ].controls.schema.valueChanges.subscribe((_) => {
            //         let schema = this._schemas.getSchema(_);
            //         if (!schema) {
            //             try {
            //                 schema = JSON.parse(_);
            //             } catch (e) {
            //                 schema = {};
            //             }
            //         }
            //         this.schema_map[group.name] = schema;
            //     }),
            // );
        });
    }

    private loadMetadata() {
        listMetadata(this.item().id).subscribe((map) => {
            this.metadata.set(
                Object.keys(map)
                    .map((key) => map[key])
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .filter((m) => !!m),
            );
            this.generateForms();
        });
    }

    public viewMetadataHistory(item: PlaceMetadata) {
        const itemValue = this.item();
        this._dialog.open(MetadataHistoryModalComponent, {
            data: {
                id: this.item().id,
                parent_name: itemValue.display_name || itemValue.name,
                name: item.name,
            },
        });
    }
}
