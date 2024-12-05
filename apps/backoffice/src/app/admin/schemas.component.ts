import { Component } from '@angular/core';
import { map, shareReplay, take } from 'rxjs/operators';
import { randomInt } from '../common/general';
import { JsonSchema, SchemaStateService } from './schema-state.service';

@Component({
    selector: 'admin-schemas',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
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
                            <mat-option
                                *ngFor="let schema of schema_list | async"
                                [value]="schema"
                            >
                                {{ schema.name }}
                            </mat-option>
                            <mat-option
                                (click)="newSchema(); $event.preventDefault()"
                            >
                                <span class="italic font-sans">{{
                                    'ADMIN.SCHEMA_NEW' | translate
                                }}</span>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button
                        btn
                        matRipple
                        class="w-40 h-12"
                        (click)="newSchema()"
                    >
                        {{ 'ADMIN.SCHEMA_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="flex items-center space-x-2 mb-4" *ngIf="schema_copy">
                <div class="flex flex-col flex-1 w-1/2">
                    <label for="type"
                        >{{ 'ADMIN.SCHEMA_NAME' | translate }}:
                    </label>
                    <mat-form-field
                        class="no-subscript w-full"
                        appearance="outline"
                    >
                        <input matInput [(ngModel)]="schema_copy.name" />
                    </mat-form-field>
                </div>
                <button btn class="mt-6 w-40 h-12" (click)="saveSchema()">
                    {{ 'COMMON.SAVE' | translate }}
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
                    <p class="p-8 opacity-30">
                        {{ 'ADMIN.SCHEMA_SELECT_MSG' | translate }}
                    </p>
                </div>
            </ng-template>
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
