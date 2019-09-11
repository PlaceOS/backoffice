import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';
import { Subject } from 'rxjs';

import { BaseClass } from '../../shared/globals/base.class';
import { HashMap } from '../../shared/utilities/types.utilities';

export interface IDataClassEvent {
    type: string;
    metadata: HashMap;
}

export class BaseDataClass extends BaseClass {
    /** Unique Identifier of the object */
    readonly id: string;
    /** Human readable name of the object */
    readonly name: string;
    /** Email address associated with the object */
    readonly email: string;
    /** Subject for change events to the class object */
    readonly changeEvents = new Subject<IDataClassEvent>();
    /** Form Fields for the object */
    protected _form_fields: ADynamicFormField[];
    /** Metadata to pass to form fields */
    protected _form_metadata: HashMap;

    constructor(protected service: any, raw_data: HashMap) {
        super();
        this.id = raw_data.id || raw_data.zone_id || raw_data.email || `${Math.floor(Math.random() * 9999999999)}`;
        this.name = raw_data.name;
        this.email = (raw_data.email || '').toLowerCase();
        this._form_metadata = raw_data.form_metadata || {};
    }

    /** Get form field metadata for the object */
    public get form_fields(): ADynamicFormField[] {
        if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
        }
        return this._form_fields;
    }

    /** Whether form fields are valid */
    public get valid(): boolean {
        return this._form_fields ? this._form_fields.reduce((a, i) => a && i.isValid(), true) : false;
    }

    /** Whether the form has changes */
    public get changes(): boolean {
        return this.formChanges().length > 0;
    }

    /**
     * Reset the values on the form to their initial state
     */
    public resetForm(): void {
        if (this._form_fields) {
            for (const field of this._form_fields) {
                field.setValue(this[field.key]);
            }
        }
    }

    /**
     * Get a list of the field names that have changed values
     */
    public formChanges(): string[] {
        const changed: string[] = [];
        if (this._form_fields) {
            for (const field of this._form_fields) {
                if (field.getValue() !== this[field.key]) {
                    changed.push(field.key);
                }
            }
        }
        return changed;
    }

    /**
     * Save form changes to server
     */
    public save(): Promise<BaseDataClass> {
        if (this.changes && this.service) {
            this._form_fields.forEach(i => i.showErrors(true));
            if (this.valid) {
                const form = this.formValues();
                return this.id
                    ? this.service.update(this.id, form)
                    : this.service.add(form);
            }
        }
    }

    /**
     * Delete this item from the server
     */
    public delete(): Promise<void> {
        if (this.id) {
            return this.service.delete(this.id);
        }
    }

    /**
     * Run task for this item on the service
     * @param task_name Name of the task
     * @param parameters Parameters to pass to the task request
     */
    public runTask(task_name: string, parameters: HashMap): Promise<void> {
        if (this.id) {
            return this.service.task(this.id, task_name, parameters);
        }
    }

    /**
     * Get a map of the field values
     */
    public toJSON(): HashMap {
        if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
        }
        const json = this.formValues();
        json.id = this.id;
        delete json.changed_fields;
        return json;
    }

    /**
     * Emits change event
     * @param type Type of change that has occurred
     * @param metadata Supporting metadata for the event
     */
    public emit(type: string, metadata?: HashMap): void {
        this.changeEvents.next({ type, metadata })
    }

    /**
     * Make a copy of this object
     */
    public clone(): BaseDataClass {
        return new BaseDataClass(this.service, this);
    }

    /**
     * Make a copy of this object without identification data
     */
    public duplicate(): BaseDataClass {
        return new BaseDataClass(this.service, { ...this, id: null, email: null });
    }

    /**
     * Get the mapped values of the form fields
     */
    protected formValues(field_list: ADynamicFormField[] = this._form_fields, changes: boolean = true): HashMap {
        const values: HashMap = {};
        for (const field of field_list) {
            if (field.children && field.children.length > 0) {
                values[field.key] = this.formValues(field.children, false);
            } else {
                values[field.key] = field.getValue();
            }
        }
        if (changes) {
            values.changed_fields = this.formChanges();
        }
        return values;
    }

    /**
     * Initialise the form field metadata for the field
     */
    protected initialiseFormFields(): ADynamicFormField[] {
        const edit = !!this.id;
        const fields: ADynamicFormField[] = [
            new ADynamicFormField({
                key: 'name',
                type: 'input',
                value: this.name
            }),
            new ADynamicFormField({
                key: 'email',
                type: 'input',
                value: this.email,
                required: true,
                attributes: { type: 'email' }
            })
        ];
        return fields;
    }
}
