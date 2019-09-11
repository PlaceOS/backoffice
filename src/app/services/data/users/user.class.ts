import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';

import { BaseDataClass } from '../base-api.class';
import { HashMap, Identity } from '../../../shared/utilities/types.utilities';
import { BaseAPIService } from '../base.service';

export interface ILocation {
    x?: number;
    y?: number;
    name?: string;
    map_id?: string;
    building: string;
    level: string | Identity;
    fixed: boolean;
    loc_id?: string;
    display?: { [name: string]: string };
    confidence?: number;
    another_bld?: boolean;
    at_desk?: boolean;
}

export class User extends BaseDataClass {
    /** First name of the user */
    readonly first_name: string;
    /** Last name of the user */
    readonly last_name: string;
    /** Windows user ID */
    readonly windows_id: string;
    /** Type of user */
    readonly type: 'partner' | 'external' | 'internal';
    /** Contact phone number of the user */
    readonly phone: string;
    /** Organisational department the user is part of */
    readonly business_unit: string;
    /** Whether user is external from the application's organisation */
    readonly external: boolean;
    /** Organisational Identifier for the user */
    readonly staff_code: string;
    /** Organisation the user is associated with */
    private _organisation: Identity;
    /** Map location of the user */
    private _location: ILocation;
    /** List of users that this user can act on behalf */
    private _delegates: string[];

    constructor(protected service: BaseAPIService<User>, raw_data: HashMap = {}) {
        super(service, raw_data);
        this.first_name = raw_data.first_name;
        this.last_name = raw_data.last_name;
        this.windows_id = raw_data.email;
        this.type = raw_data.visitor ? 'external' : raw_data.type || 'internal';
        this.phone = raw_data.phone || raw_data.mobile;
        this.business_unit = raw_data.business_unit || raw_data.department;
        this._organisation = raw_data.organisation || { id: raw_data.organisation_id, name: raw_data.organisation_name };
        this.external = this.type === 'external';
        this._location = null;
        this.staff_code = raw_data.staff_code || raw_data.fmno;
        this._delegates = raw_data.delegates;
    }

    /** Organisation the user is associated with */
    public get organisation() {
        return this._organisation;
    }

    /** Map location of the user */
    public get last_location(): ILocation {
        return this._location ? { ...(this._location) } : null;
    }

    /** List of users that this user can act on behalf */
    public get delegates(): string[] {
        return [...(this._delegates || [])];
    }

    /**
     * Ask the server for the users current location
     */
    public locate(): Promise<ILocation> {
        const service: any = this.service.parent || {};
        return new Promise((resolve, reject) => {
            if (service.Location) {
                service.Location.show(this.id, { desk: this.email }).then(
                    l => {
                        this._location = l;
                        resolve(l);
                    },
                    e => reject(e)
                );
            } else {
                resolve(null);
            }
        });
    }

    /**
     * Whether user is available during the given period
     * @param start Start time as a unix timestamp with milliseconds
     * @param end End time as a unix timestamp with milliseconds
     */
    public available(start?: number, end?: number): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            this.service.query({ email: this.email, start, end })
                .then(l => resolve(l && l.length > 0), _ => resolve(false));
        });
    }

    /**
     * Make a copy of this object
     */
    public clone(): User {
        return new User(this.service, this);
    }

    /**
     * Make a copy of this object without identification data
     */
    public duplicate(): User {
        return new User(this.service, { ...this, id: null, email: null });
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
                value: this.name,
                hide: true
            }),
            new ADynamicFormField({
                key: 'first_name',
                label: 'First Name',
                type: 'input',
                value: this.first_name,
                required: true
            }),
            new ADynamicFormField({
                key: 'last_name',
                label: 'Last Name',
                type: 'input',
                value: this.last_name,
                required: true
            }),
            new ADynamicFormField({
                key: 'email',
                label: 'Email',
                type: 'input',
                value: this.email,
                required: true,
                attributes: { type: 'email' }
            })
        ];
        return fields;
    }
}
