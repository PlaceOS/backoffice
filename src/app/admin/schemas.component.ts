import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { create, query, update } from '@placeos/ts-client';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { TranslatePipe } from '../ui/translate.pipe';

export interface JsonSchema {
    id?: string;
    name: string;
    description?: string;
    schema: string;
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
                    <mat-form-field
                        class="no-subscript w-56"
                        appearance="outline"
                    >
                        <mat-select
                            name="type"
                            [(ngModel)]="active_schema"
                            (ngModelChange)="copySchema()"
                            [placeholder]="'ADMIN.SCHEMA_SELECT' | translate"
                        >
                            @for (schema of schema_list(); track schema.id) {
                                <mat-option [value]="schema">
                                    {{ schema.name }}
                                </mat-option>
                            }
                            <mat-option
                                (click)="newSchema(); $event.preventDefault()"
                            >
                                <span class="font-sans italic">{{
                                    'ADMIN.SCHEMA_NEW' | translate
                                }}</span>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="h-12 w-40"
                        (click)="newSchema()"
                    >
                        {{ 'ADMIN.SCHEMA_ADD' | translate }}
                    </button>
                </div>
            </div>
            @if (schema_copy()) {
                <div class="mb-4 flex items-center space-x-2">
                    <div class="flex w-1/2 flex-1 flex-col">
                        <label for="type"
                            >{{ 'ADMIN.SCHEMA_NAME' | translate }}:
                        </label>
                        <mat-form-field
                            class="no-subscript w-full"
                            appearance="outline"
                        >
                            <input matInput [(ngModel)]="schema_copy().name" />
                        </mat-form-field>
                    </div>
                    <button
                        btn
                        matRipple
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
                    ></settings-form-field>
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
        TranslatePipe,
        SettingsFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
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
        let schema_list = this.schema_list();
        const details = {
            query_params: {},
            fn: (_) => _,
            form_data: schema,
            path: 'schema',
        };
        const new_schema = await (schema.id
            ? update<JsonSchema>({
                  ...details,
                  id: schema.id,
                  method: 'patch',
              })
            : create<JsonSchema>({ ...details }));
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

    public getSchema(id: string): Record<string, string> {
        const schema_list = this.schema_list();
        const schema = schema_list.find((_) => _.id === id);
        if (!schema) return null;
        return JSON.parse(schema.schema || '{}');
    }

    public async loadSchemas() {
        const schema_list = await query<JsonSchema>({
            query_params: {},
            fn: (_) =>
                ({
                    name: _.name || '',
                    schema: _.schema || '{}',
                    ..._,
                }) as JsonSchema,
            path: 'schema',
        }).then((_) => _.data as JsonSchema[]);
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        this.schema_list.set(schema_list);
    }
}
