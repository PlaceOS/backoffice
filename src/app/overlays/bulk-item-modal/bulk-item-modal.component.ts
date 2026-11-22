import { Component, computed, inject, signal } from '@angular/core';

import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
    Driver,
    Module,
    type Schema,
    System,
    User,
    Zone,
} from '@placeos/ts-client';
import { unique } from '../../common/general';
import { notifyError, notifyWarn } from '../../common/notifications';
import { newItem } from '../../common/placeos';
import { HashMap, Identity, PlaceResource } from '../../common/types';
import { DialogCloseDirective } from '../../ui/controls/dialog';
import { DialogTitleDirective } from '../../ui/dialog-title.directive';
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

type BulkItemKind = 'systems' | 'modules' | 'drivers' | 'users' | 'zones';

/** Types that support bulk add, with their template and required fields */
const BULK_KINDS = new Map<
    Schema<unknown, unknown>,
    {
        kind: BulkItemKind;
        template: Record<string, unknown>;
        required: string[];
    }
>([
    [
        System,
        { kind: 'systems', template: SYSTEM_TEMPLATE, required: ['name'] },
    ],
    [
        Module,
        { kind: 'modules', template: MODULE_TEMPLATE, required: ['driver_id'] },
    ],
    [
        Driver,
        {
            kind: 'drivers',
            template: DRIVER_TEMPLATE,
            required: ['name', 'module_name', 'role'],
        },
    ],
    [
        User,
        {
            kind: 'users',
            template: USER_TEMPLATE,
            required: ['email', 'authority_id'],
        },
    ],
    [Zone, { kind: 'zones', template: ZONE_TEMPLATE, required: ['name'] }],
]);

export interface BulkItemModalData<T = HashMap<unknown>> {
    /** Schema of the items. `ActiveItemService` gives `ItemActions.schema` */
    schema: Schema<T, unknown>;
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
                <h3 appDialogTitle class="text-xl font-medium">
                    {{ 'COMMON.BULK_ADD' | translate: { type: type } }}
                </h3>
                <p class="text-base-content/60 text-sm">
                    Upload a TSV or CSV, match columns, review rows, then create
                    the items.
                </p>
            </div>
            @if (!loading) {
                <button
                    icon
                    ripple
                    appDialogClose
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
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
                        [list]="item_list()"
                        (done)="done()"
                        (close_modal)="close()"
                    />
                }
                @case ('list') {
                    <bulk-item-list
                        [(list)]="item_list"
                        [fields]="available_fields"
                        [required_fields]="required_fields"
                        [validation_errors]="validation_errors()"
                        [duplicate_warnings]="duplicate_warnings()"
                        [show_start_modules]="is_system"
                        (next)="showStatus()"
                        (previous)="goTo('match-fields')"
                    />
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
                    />
                }
                @default {
                    <bulk-item-csv-upload
                        [template]="template"
                        (list)="handleList($event)"
                    />
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
        DialogCloseDirective,
        DialogTitleDirective,
        TranslatePipe,
        IconComponent,
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
        inject<DialogRef<unknown, BulkItemModalComponent>>(DialogRef);
    private _data = inject<BulkItemModalData<T>>(DIALOG_DATA);
    private _kind = BULK_KINDS.get(this._data.schema);

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
    public readonly item_list = signal<HashMap<unknown>[]>([]);
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
        return this._kind?.kind === 'systems';
    }

    public get required_fields(): string[] {
        return this._required_fields;
    }

    /** Missing required fields, checked again only when the list changes */
    public readonly validation_errors = computed(() => this.validateItems());
    /** Duplicate names or emails, checked again only when the list changes */
    public readonly duplicate_warnings = computed(() => this.findDuplicates());

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
            notifyError('No rows were found in the uploaded file.');
            return;
        }
        if (is_mapped) {
            // Values are already parsed by parseCSV. Rows stay plain objects,
            // as the save of a system reads columns that are not in the schema
            this.item_list.set(data.map((item) => ({ ...item })));
            this.goTo('list');
        } else {
            // A new file may have different columns, so drop old mappings
            this.mappings = {};
            this.data_list = data;
            this.goTo('match-fields');
        }
    }

    public showStatus() {
        if (this.validation_errors().length > 0) {
            notifyError('Fix the highlighted validation errors before saving.');
            return;
        }
        if (this.duplicate_warnings().length > 0) {
            notifyWarn('Duplicate values were found. Saving will continue.');
        }
        this.loading = true;
        // Keep the dialog open while items are being created
        this._dialog_ref.disableClose = true;
        this.goTo('status');
    }

    public done() {
        this.loading = false;
        this._dialog_ref.disableClose = false;
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
        const list: readonly string[] = Object.keys(newItem(this._data.schema));
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

    /** Template row with the template fields that the schema has */
    private generateTemplate(): HashMap<unknown>[] {
        if (!this._kind) return [];
        const blank = newItem(this._data.schema);
        return [
            Object.fromEntries(
                Object.entries(this._kind.template).filter(
                    ([key, value]) =>
                        key in blank &&
                        key !== 'created_at' &&
                        value !== '' &&
                        value != null,
                ),
            ),
        ];
    }

    private getRequiredFields(): string[] {
        return this._kind?.required || [];
    }

    private validateItems(): string[] {
        const errors: string[] = [];
        this.item_list().forEach((item, index) => {
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
        const dedup_field = this._kind?.kind === 'users' ? 'email' : 'name';

        this.item_list().forEach((item, index) => {
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
