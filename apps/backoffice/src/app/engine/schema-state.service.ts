import { Injectable } from '@angular/core';
import { create, query, update } from '@placeos/ts-client';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface JsonSchema {
    id?: string;
    name: string;
    description?: string;
    schema: string;
}

@Injectable({
    providedIn: 'root',
})
export class SchemaStateService {
    private _schemas = new BehaviorSubject<JsonSchema[]>([]);

    public readonly schemas = this._schemas.asObservable();

    constructor() {
        this.loadSchemas();
    }

    public getSchema(id: string): HashMap {
        const schema_list = this._schemas.getValue();
        const schema = schema_list.find((_) => _.id === id);
        if (!schema) return null;
        return JSON.parse(schema.schema || '{}');
    }

    public async loadSchemas() {
        const schema_list = await query<JsonSchema>({
            query_params: {},
            fn: (_) => _ as any,
            path: 'schema',
        })
            .pipe(map((_) => _.data))
            .toPromise();
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        this._schemas.next(schema_list);
    }

    public async saveSchema(schema: JsonSchema) {
        let schema_list = this._schemas.getValue();
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
            : create<JsonSchema>({ ...details })
        ).toPromise();
        schema_list = [
            ...schema_list.filter((_) => schema.id !== _.id),
            new_schema,
        ];
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        this._schemas.next(schema_list);
    }
}
