import { Component, Type, inject, signal } from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { MatRippleModule } from '@angular/material/core';
import {
    PlaceDriver,
    PlaceModule,
    PlaceResource,
    PlaceSystem,
    PlaceUser,
    PlaceZone,
} from '@placeos/ts-client';
import { unique } from '../../common/general';
import { notifyError, notifyWarn } from '../../common/notifications';
import { HashMap, Identity } from '../../common/types';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { CsvUploadComponent } from './csv-upload.component';
import { ListComponent } from './list.component';
import { MatchFieldsComponent } from './match-fields.component';
import { StatusListComponent } from './status-list.component';
import {
    DRIVER_TEMPLATE,
    MODULE_TEMPLATE,
    SYSTEM_TEMPLATE,
    USER_TEMPLATE,
    ZONE_TEMPLATE,
} from './template-data';

const IGNORE_FIELDS = [
    'created_at',
    'updated_at',
    'version',
    'settings',
    'module_list',
];

type BulkItemFlowStep = 'upload' | 'match-fields' | 'list' | 'status';

export interface BulkItemModalData<T = HashMap<unknown>> {
    constr: Type<T>;
    name: string;
    save: (item: Record<string, unknown>) => Promise<PlaceResource>;
}

@Component({
    selector: 'app-bulk-item-modal',
    host: {
        '[class.fullscreen]': "flow_step() !== 'upload'",
    },
    template: `
        <div
            class="bg-base-200 m-4 mb-2 flex items-center justify-between rounded-sm px-4 py-3"
        >
            <div>
                <h3 class="text-xl font-medium">
                    {{ 'COMMON.BULK_ADD' | translate: { type: type } }}
                </h3>
                <p class="text-base-content/60 text-sm">
                    Upload a TSV or CSV, match columns, review rows, then create
                    the items.
                </p>
            </div>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </div>
        <nav
            class="mx-4 mb-4 grid grid-cols-4 overflow-hidden rounded-sm text-xs"
        >
            @for (step of flow_steps; track step.id; let i = $index) {
                <div
                    class="border-base-300 bg-base-100 flex items-center justify-center gap-2 border px-3 py-2 tracking-wide uppercase"
                    [class.bg-info]="i <= currentStepIndex()"
                    [class.text-info-content]="i <= currentStepIndex()"
                    [class.font-medium]="flow_step() === step.id"
                >
                    <span
                        class="flex h-5 w-5 items-center justify-center rounded-full border text-[0.7rem]"
                    >
                        {{ i + 1 }}
                    </span>
                    <span>{{ step.label }}</span>
                </div>
            }
        </nav>
        <main
            class="min-h-0 overflow-auto px-4"
            [class.flex-1]="flow_step() !== 'upload'"
            [class.pb-4]="flow_step() === 'upload'"
            [class.pb-24]="flow_step() !== 'upload'"
        >
            @switch (flow_step()) {
                @case ('status') {
                    <bulk-item-status-list
                        [save]="save"
                        [list]="item_list"
                        (done)="done()"
                        (close_modal)="close()"
                    ></bulk-item-status-list>
                }
                @case ('list') {
                    <bulk-item-list
                        [(list)]="item_list"
                        [fields]="available_fields"
                        [required_fields]="required_fields"
                        [validation_errors]="validation_errors"
                        [duplicate_warnings]="duplicate_warnings"
                        [show_start_modules]="is_system"
                        (next)="showStatus()"
                        (previous)="goTo('match-fields')"
                    ></bulk-item-list>
                }
                @case ('match-fields') {
                    <bulk-item-match-fields
                        [list]="data_list"
                        [field_list]="available_fields"
                        [required_fields]="required_fields"
                        [mappings]="mappings"
                        (new_mappings)="mappings = $event"
                        (mapping_done)="handleList($event, true)"
                        (previous)="goTo('upload')"
                    ></bulk-item-match-fields>
                }
                @default {
                    <bulk-item-csv-upload
                        [template]="template"
                        (list)="handleList($event)"
                    ></bulk-item-csv-upload>
                }
            }
        </main>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
            }

            :host.fullscreen {
                height: 100%;
            }
        `,
    ],
    imports: [
        MatDialogModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        StatusListComponent,
        ListComponent,
        MatchFieldsComponent,
        CsvUploadComponent,
    ],
})
export class BulkItemModalComponent<
    T extends HashMap<unknown> = HashMap<unknown>,
> {
    private _dialog_ref =
        inject<MatDialogRef<BulkItemModalComponent>>(MatDialogRef);
    private _data = inject<BulkItemModalData<T>>(MAT_DIALOG_DATA);

    /** Current step in the bulk add flow */
    public readonly flow_step = signal<BulkItemFlowStep>('upload');
    /** Ordered steps shown to the user */
    public readonly flow_steps: { id: BulkItemFlowStep; label: string }[] = [
        { id: 'upload', label: 'Upload' },
        { id: 'match-fields', label: 'Match' },
        { id: 'list', label: 'Review' },
        { id: 'status', label: 'Create' },
    ];
    /** List of items to bulk add */
    public item_list: HashMap<unknown>[] = [];
    /** List of raw data to use for bulk add */
    public data_list: HashMap<unknown>[] = [];
    /** Whether requests are being processed */
    public loading = false;
    /** Template data for use */
    public template: HashMap<unknown>[] = [];
    public mappings: Record<string, string> = {};

    public available_fields: Identity[] = [];

    /** Required fields for validation depending on resource type */
    private _required_fields: string[] = [];

    public get type(): string {
        return this._data.name;
    }

    public get save() {
        return this._data.save;
    }

    public get is_system(): boolean {
        return this._data.constr === (PlaceSystem as unknown);
    }

    public get required_fields(): string[] {
        return this._required_fields;
    }

    public get validation_errors(): string[] {
        return this.validateItems();
    }

    public get duplicate_warnings(): string[] {
        return this.findDuplicates();
    }

    constructor() {
        this.available_fields = this.getAvailableFields();
        this.template = this.generateTemplate();
        this._required_fields = this.getRequiredFields();
    }

    /**
     * Handle list data
     * @param data List of data to process
     */
    public handleList(data: HashMap<unknown>[], is_mapped = false): void {
        if (!data.length) {
            notifyWarn('No rows were found in the uploaded file.');
            return;
        }
        if (is_mapped) {
            const Resource = this._data.constr;
            this.item_list = data.map((item) => {
                // Values are already parsed by csvToJson/parseCSV,
                // so no need for additional JSON.parse here
                return new Resource(item);
            });
            this.goTo('list');
        } else {
            this.data_list = data;
            this.goTo('match-fields');
        }
    }

    public showStatus() {
        const validation_errors = this.validateItems();
        if (validation_errors.length > 0) {
            notifyError('Fix the highlighted validation errors before saving.');
            return;
        }
        const duplicates = this.findDuplicates();
        if (duplicates.length > 0) {
            notifyWarn('Duplicate values were found. Saving will continue.');
        }
        this.loading = true;
        this.goTo('status');
    }

    public done() {
        this.loading = false;
    }

    public close() {
        this._dialog_ref.close();
    }

    public goTo(step: BulkItemFlowStep) {
        this.flow_step.set(step);
        this.setDialogSize(step);
    }

    public currentStepIndex(): number {
        return this.flow_steps.findIndex(
            (step) => step.id === this.flow_step(),
        );
    }

    private setDialogSize(step: BulkItemFlowStep) {
        if (step === 'upload') {
            this._dialog_ref.updateSize('', '');
        } else {
            this._dialog_ref.updateSize('100vw', '100vh');
        }
    }

    private getAvailableFields(): Identity[] {
        const list: readonly string[] = Object.keys(new this._data.constr());
        const identity_list = list.map((i) => ({
            id: i,
            name: i.split('_').join(' '),
        }));
        return (unique(identity_list, 'id') as Identity[]).filter(
            (field) =>
                (field.id as string) !== 'id' &&
                (field.id as string)[0] !== '_' &&
                !IGNORE_FIELDS.includes(field.id as string),
        );
    }

    private generateTemplate(): HashMap<unknown>[] {
        switch (this._data.constr as unknown) {
            case PlaceSystem:
                return [new PlaceSystem(SYSTEM_TEMPLATE).toJSON()];
            case PlaceModule:
                return [new PlaceModule(MODULE_TEMPLATE).toJSON()];
            case PlaceDriver:
                return [new PlaceDriver(DRIVER_TEMPLATE).toJSON()];
            case PlaceUser:
                return [new PlaceUser(USER_TEMPLATE).toJSON()];
            case PlaceZone:
                return [new PlaceZone(ZONE_TEMPLATE).toJSON()];
        }
    }

    private getRequiredFields(): string[] {
        switch (this._data.constr as unknown) {
            case PlaceUser:
                return ['email', 'authority_id'];
            case PlaceSystem:
                return ['name'];
            case PlaceModule:
                return ['driver_id'];
            case PlaceDriver:
                return ['name', 'module_name', 'role'];
            case PlaceZone:
                return ['name'];
            default:
                return [];
        }
    }

    private validateItems(): string[] {
        const errors: string[] = [];
        this.item_list.forEach((item, index) => {
            for (const field of this._required_fields) {
                const value = item[field];
                if (value === undefined || value === null || value === '') {
                    errors.push(
                        `Row ${index + 1}: Missing required field "${field}"`,
                    );
                }
            }
        });
        return errors;
    }

    private findDuplicates(): string[] {
        const warnings: string[] = [];
        const seen_keys = new Map<string, number>();
        const dedup_field =
            this._data.constr === (PlaceUser as unknown) ? 'email' : 'name';

        this.item_list.forEach((item, index) => {
            const key = String(item[dedup_field] || '')
                .toLowerCase()
                .trim();
            if (key && seen_keys.has(key)) {
                warnings.push(
                    `Row ${index + 1}: Duplicate "${dedup_field}" value "${key}" (same as row ${seen_keys.get(key) + 1})`,
                );
            } else if (key) {
                seen_keys.set(key, index);
            }
        });
        return warnings;
    }
}
