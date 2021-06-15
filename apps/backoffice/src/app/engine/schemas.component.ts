import { Component } from '@angular/core';
import { map, shareReplay, take } from 'rxjs/operators';
import { randomInt } from '../common/general';
import { JsonSchema, SchemaStateService } from './schema-state.service';

@Component({
    selector: 'admin-schemas',
    template: `
        <div class="flex items-center space-x-2 my-4">
            <div class="flex flex-col">
                <label for="type">Schema: </label>
                <mat-form-field class="h-12" appearance="outline">
                    <mat-select
                        name="type"
                        [(ngModel)]="active_schema"
                        (ngModelChange)="copySchema()"
                        placeholder="Select Schema..."
                    >
                        <mat-option
                            *ngFor="let schema of schema_list | async"
                            [value]="schema"
                        >
                            {{ schema.name }}
                        </mat-option>
                        <mat-option
                            (click)="newSchema(); $event.preventDefault()"
                        >
                            <span class="italic font-sans">New Schema</span>
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
            <button mat-button class="mt-6" (click)="newSchema()">
                Add Schema
            </button>
        </div>
        <div class="flex items-center space-x-2 mb-4" *ngIf="schema_copy">
            <div class="flex flex-col">
                <label for="type">Schema Name: </label>
                <mat-form-field class="h-12" appearance="outline">
                    <input matInput [(ngModel)]="schema_copy.name" />
                </mat-form-field>
            </div>
            <button mat-button class="mt-6" (click)="saveSchema()">
                Save Schema
            </button>
        </div>
        <div class="relative flex-1 h-1/2">
            <ng-container *ngIf="schema_copy; else empty_state">
                <settings-form-field
                    [(ngModel)]="schema_copy.schema"
                    lang="json"
                    [readonly]="false"
                ></settings-form-field>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div class="absolute inset-0 flex items-center justify-center">
                <p class="p-8">Select a schema to edit</p>
            </div>
        </ng-template>
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
})
export class AdminSchemasComponent {
    public active_schema: JsonSchema;
    public schema_copy: JsonSchema;

    public readonly schema_list = this._state.schemas.pipe(shareReplay(1));
    constructor(private _state: SchemaStateService) {}

    public copySchema() {
        if (!this.active_schema) return;
        this.schema_copy = JSON.parse(JSON.stringify(this.active_schema));
    }

    public async newSchema() {
        this.active_schema = {
            id: `schema-${randomInt(999_999_999, 100_000_000)}`,
            name: 'New Schema',
            schema: '{}',
        };
        this.copySchema();
    }

    public saveSchema() {
        this._state.saveSchema(this.schema_copy);
        this.active_schema = null;
        this.schema_copy = null;
    }
}
