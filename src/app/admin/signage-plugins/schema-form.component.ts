import {
    Component,
    computed,
    effect,
    forwardRef,
    input,
    signal,
} from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    FormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SettingsToggleComponent } from '../../ui/settings-toggle.component';

/** A loosely-typed record for JSON Schema objects. */
type JsonSchema = Record<string, unknown>;

/** Describes a single field derived from a JSON Schema property. */
export interface SchemaField {
    key: string;
    type: 'string' | 'number' | 'boolean' | 'select';
    label: string;
    description: string;
    required: boolean;
    default_value: unknown;
    options?: { label: string; value: unknown }[];
}

/**
 * Parses a JSON Schema `properties` block into a flat list of form fields.
 * Supports string, number/integer, boolean, and string enums.
 */
export function parseSchemaFields(schema: JsonSchema): SchemaField[] {
    if (!schema?.properties) return [];
    const required_keys: string[] = (schema.required as string[]) || [];
    const properties = schema.properties as Record<string, JsonSchema>;
    return Object.entries(properties).map(([key, prop]) => {
        const json_type = prop.type as string;
        const has_enum = Array.isArray(prop.enum);
        let type: SchemaField['type'] = 'string';
        if (has_enum) {
            type = 'select';
        } else if (json_type === 'boolean') {
            type = 'boolean';
        } else if (json_type === 'number' || json_type === 'integer') {
            type = 'number';
        }
        const options = has_enum
            ? (prop.enum as unknown[]).map((v) => ({
                  label: String(v),
                  value: v,
              }))
            : undefined;
        return {
            key,
            type,
            label: (prop.title as string) || key,
            description: (prop.description as string) || '',
            required: required_keys.includes(key),
            default_value: prop.default ?? null,
            options,
        };
    });
}

/**
 * Builds a defaults object from parsed schema fields and optional existing
 * default values.
 */
export function buildFormFromFields(
    fields: SchemaField[],
    defaults: Record<string, unknown> = {},
): Record<string, unknown> {
    const values: Record<string, unknown> = {};
    for (const field of fields) {
        values[field.key] = defaults[field.key] ?? field.default_value ?? null;
    }
    return values;
}

@Component({
    selector: 'schema-form',
    template: `
        @if (fields().length) {
            <div class="flex flex-col gap-2">
                @for (field of fields(); track field.key) {
                    @switch (field.type) {
                        @case ('boolean') {
                            <settings-toggle
                                [ngModel]="fieldValue(field.key)"
                                [disabled]="disabled()"
                                (ngModelChange)="updateField(field.key, $event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                {{ field.label }}
                            </settings-toggle>
                            @if (field.description) {
                                <p class="mt-0 text-xs opacity-60">
                                    {{ field.description }}
                                </p>
                            }
                        }
                        @case ('select') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <mat-select
                                        [ngModel]="fieldValue(field.key)"
                                        [disabled]="disabled()"
                                        (ngModelChange)="
                                            updateField(field.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                    >
                                        @for (
                                            opt of field.options;
                                            track opt.value
                                        ) {
                                            <mat-option [value]="opt.value">
                                                {{ opt.label }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                            </div>
                        }
                        @case ('number') {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        type="number"
                                        [ngModel]="fieldValue(field.key)"
                                        [disabled]="disabled()"
                                        (ngModelChange)="
                                            updateField(field.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                        @default {
                            <div class="field">
                                <label [for]="field.key">
                                    {{ field.label }}
                                    @if (field.required) {
                                        <span>*</span>
                                    }
                                </label>
                                @if (field.description) {
                                    <p class="mt-0 text-xs opacity-60">
                                        {{ field.description }}
                                    </p>
                                }
                                <mat-form-field
                                    appearance="outline"
                                    class="no-subscript w-full"
                                >
                                    <input
                                        matInput
                                        [ngModel]="fieldValue(field.key)"
                                        [disabled]="disabled()"
                                        (ngModelChange)="
                                            updateField(field.key, $event)
                                        "
                                        [ngModelOptions]="{
                                            standalone: true,
                                        }"
                                        [placeholder]="field.label"
                                    />
                                </mat-form-field>
                            </div>
                        }
                    }
                }
            </div>
        }
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SchemaFormComponent),
            multi: true,
        },
    ],
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        SettingsToggleComponent,
    ],
})
export class SchemaFormComponent implements ControlValueAccessor {
    public readonly schema = input<JsonSchema>(null);
    public readonly disabled = signal(false);

    public readonly fields = computed(() => {
        const s = this.schema();
        return s ? parseSchemaFields(s) : [];
    });

    public readonly defaults_form = signal<Record<string, unknown>>(null);

    private _on_change: (value: Record<string, unknown>) => void;
    private _on_touch: () => void;
    private _value: Record<string, unknown> = {};

    constructor() {
        effect(() => {
            const schema_fields = this.fields();
            if (!schema_fields.length) {
                this.defaults_form.set(null);
                return;
            }
            this._value = buildFormFromFields(schema_fields, this._value);
            this.defaults_form.set(this._value);
        });
    }

    public writeValue(value: Record<string, unknown>): void {
        this._value = value || {};
        this.defaults_form.set(buildFormFromFields(this.fields(), this._value));
    }

    public registerOnChange(
        fn: (value: Record<string, unknown>) => void,
    ): void {
        this._on_change = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this._on_touch = fn;
    }

    public setDisabledState(disabled: boolean): void {
        this.disabled.set(disabled);
    }

    public fieldValue(key: string) {
        return this.defaults_form()?.[key] ?? null;
    }

    public updateField(key: string, value: unknown) {
        if (this.disabled()) return;
        this._value = { ...(this.defaults_form() || {}), [key]: value };
        this.defaults_form.set(this._value);
        this._on_change?.(this._value);
        this._on_touch?.();
    }

    /** Returns true if the generated defaults form is valid. */
    public isValid(): boolean {
        const value = this.defaults_form() || {};
        return this.fields().every((field) => {
            if (!field.required) return true;
            const field_value = value[field.key];
            if (field_value == null) return false;
            if (typeof field_value === 'string') return field_value.length > 0;
            if (Array.isArray(field_value)) return field_value.length > 0;
            return true;
        });
    }
}
