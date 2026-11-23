import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    schema as schema_v7,
    type JsonSchema as JsonSchemaData,
} from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { describeError } from '../common/errors';
import { notifyError } from '../common/notifications';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { OptionComponent } from '../ui/controls/option.component';
import { SelectComponent } from '../ui/controls/select.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { IconComponent } from '../ui/icon.component';
import { TranslatePipe } from '../ui/translate.pipe';

/** A JSON schema, with the schema as the JSON text that the editor shows */
export interface JsonSchema {
    id?: string;
    name: string;
    description?: string;
    schema: string;
}

/** The schema for the editor. The server can keep the schema as JSON or as text */
function editorSchema(data: JsonSchemaData): JsonSchema {
    const value = data.schema;
    return {
        id: data.id ?? undefined,
        name: data.name || '',
        description: data.description ?? undefined,
        schema:
            typeof value === 'string'
                ? value || '{}'
                : value == null
                  ? '{}'
                  : JSON.stringify(value),
    };
}

@Component({
    selector: 'admin-schemas',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">
                    {{ 'ADMIN.SCHEMA_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <app-form-field class="no-subscript w-56">
                        <app-select
                            name="type"
                            [(ngModel)]="active_schema"
                            (ngModelChange)="copySchema()"
                            [placeholder]="'ADMIN.SCHEMA_SELECT' | translate"
                        >
                            @for (schema of schema_list(); track schema.id) {
                                <app-option [value]="schema">
                                    {{ schema.name }}
                                </app-option>
                            }
                            <app-option
                                (click)="newSchema(); $event.preventDefault()"
                            >
                                <span class="font-sans italic">{{
                                    'ADMIN.SCHEMA_NEW' | translate
                                }}</span>
                            </app-option>
                        </app-select>
                    </app-form-field>
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        (click)="newSchema()"
                        [appTooltip]="'ADMIN.SCHEMA_ADD' | translate"
                        [attr.aria-label]="'ADMIN.SCHEMA_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            @if (schema_copy()) {
                <div class="mb-4 flex items-center space-x-2">
                    <div class="flex w-1/2 flex-1 flex-col">
                        <label for="schema-name"
                            >{{ 'ADMIN.SCHEMA_NAME' | translate }}:
                        </label>
                        <app-form-field class="no-subscript w-full">
                            <input
                                id="schema-name"
                                [(ngModel)]="schema_copy().name"
                            />
                        </app-form-field>
                    </div>
                    <button
                        btn
                        ripple
                        class="mt-6 h-12 w-40"
                        (click)="saveSchema()"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </div>
            }
            <div class="relative h-1/2 flex-1">
                @if (schema_copy()) {
                    <settings-form-field
                        [(ngModel)]="schema_copy().schema"
                        lang="json"
                        [readonly]="false"
                    />
                } @else {
                    <div
                        class="bg-base-200 absolute inset-x-2 top-2 bottom-5 flex items-center justify-center rounded-xl"
                    >
                        <p class="p-8 opacity-30">
                            {{ 'ADMIN.SCHEMA_SELECT_MSG' | translate }}
                        </p>
                    </div>
                }
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 1rem;
                right: 1rem;
                bottom: 0;
                display: flex;
                flex-direction: column;
            }
        `,
    ],
    imports: [
        TooltipDirective,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        IconComponent,
        TranslatePipe,
        SettingsFieldComponent,
        FormsModule,
    ],
})
export class AdminSchemasComponent implements OnInit {
    public readonly active_schema = signal<JsonSchema>(null);
    public readonly schema_copy = signal<JsonSchema>(null);

    public readonly schema_list = signal<JsonSchema[]>([]);

    public copySchema() {
        if (!this.active_schema()) return;
        this.schema_copy.set(JSON.parse(JSON.stringify(this.active_schema())));
    }

    public async newSchema() {
        this.active_schema.set({
            name: 'New Schema',
            schema: '{}',
        });
        this.copySchema();
    }

    public async saveSchema() {
        const schema = this.schema_copy();
        try {
            JSON.parse(schema.schema || '{}');
        } catch (err) {
            return notifyError(
                `Schema is not valid JSON. ${describeError(err)}`,
            );
        }
        let schema_list = this.schema_list();
        const body = {
            name: schema.name,
            description: schema.description,
            schema: schema.schema,
        };
        let new_schema: JsonSchema;
        try {
            const saved = await (
                schema.id
                    ? schema_v7.update({ id: schema.id, body })
                    : schema_v7.create({ body })
            ).then(orThrow);
            new_schema = editorSchema(saved);
        } catch (err) {
            return notifyError(
                `Failed to save schema. Error: ${describeError(err)}`,
            );
        }
        schema_list = [
            ...schema_list.filter((_) => schema.id !== _.id),
            new_schema,
        ];
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        this.schema_list.set(schema_list);
        this.active_schema.set(null);
        this.schema_copy.set(null);
    }

    public ngOnInit() {
        this.loadSchemas();
    }

    public async loadSchemas() {
        const schema_list = await schema_v7
            .query({})
            .then(orThrowPage)
            .then((_) => _.data.map(editorSchema))
            .catch((err) => {
                notifyError(
                    `Failed to load schemas. Error: ${describeError(err)}`,
                );
                return [] as JsonSchema[];
            });
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        this.schema_list.set(schema_list);
    }
}
