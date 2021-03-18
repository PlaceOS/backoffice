import { Injectable } from "@angular/core";
import { HashMap } from "@placeos/ts-client/dist/esm/utilities/types";
import { BehaviorSubject } from "rxjs";

export interface JsonSchema {
    id: string;
    name: string;
    schema: string;
}

@Injectable({
    providedIn: 'root'
})
export class SchemaStateService {
    private _schemas = new BehaviorSubject<JsonSchema[]>([]);

    public readonly schemas = this._schemas.asObservable();

    constructor() {
        this.loadSchemas();
    }

    public loadSchemas(): void {
        const schema_list = JSON.parse(localStorage.getItem('BACKOFFICE.schemas') || '[]');
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        this._schemas.next(schema_list);
    }

    public saveSchema(schema: JsonSchema): void {
        let schema_list = this._schemas.getValue();
        schema_list = [...schema_list.filter(_ => schema.id !== _.id), schema];
        schema_list.sort((a, b) => a.name?.localeCompare(b.name));
        localStorage.setItem('BACKOFFICE.schemas', JSON.stringify(schema_list));
        this._schemas.next(schema_list);
    }
}
