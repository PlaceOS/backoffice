import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addChipItem, removeChipItem } from '../../common/forms';
import { DialogEvent } from '../../common/types';

@Component({
    selector: 'api-key-modal',
    template: `
        <header class="h-12 flex items-center justify-between p-2">
            <h2>New API Key</h2>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon className="backoffice-cross"></app-icon>
            </button>
        </header>
        <main
            class="w-[32rem] max-w-[calc(100vw-2rem)]"
            *ngIf="!loading && form; else load_state"
            [formGroup]="form"
        >
            <div class="flex flex-col">
                <label for="name">Name</label>
                <mat-form-field appearance="outline">
                    <input
                        name="name"
                        formControlName="name"
                        placeholder="Name"
                        matInput
                    />
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="name">Description</label>
                <mat-form-field appearance="outline">
                    <textarea
                        name="description"
                        formControlName="description"
                        placeholder="Description"
                        matInput
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="scope">Scopes</label>
                <mat-form-field appearance="outline">
                    <mat-chip-list #chipList aria-label="Scopes">
                        <mat-chip
                            *ngFor="let scope of scope_list"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeScope(tag)"
                        >
                            {{ scope }}
                            <app-icon
                                matChipRemove
                                className="backoffice-cross"
                            ></app-icon>
                        </mat-chip>
                        <input
                            placeholder="Scopes..."
                            i18n-placeholder="@@apiScopePlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addScope($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
            </div>
            <div class="flex flex-col">
                <label for="permissions">Permissions</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="permissions"
                        formControlName="permissions"
                        placeholder="None"
                    >
                        <mat-option>None</mat-option>
                        <mat-option value="user">User</mat-option>
                        <mat-option value="support">Support</mat-option>
                        <mat-option value="admin">Admin</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </main>
        <footer
            *ngIf="!loading"
            class="p-2 flex items-center justify-center border-t border-gray-100"
        >
            <button mat-button class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                class="flex flex-col items-center justify-center space-y-2 p-8 w-[24rem] h-64"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class APIKeyModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();
    public form: FormGroup;
    public loading: string;

    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly addScope = (e) =>
        addChipItem(this.form.controls.scopes as any, e);
    public readonly removeScope = (i) =>
        removeChipItem(this.form.controls.scopes as any, i);

    constructor() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            scopes: new FormControl([]),
            permissions: new FormControl(''),
        });
    }

    public get scope_list(): string[] {
        return this.form.controls.scopes.value;
    }

    public save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        this.event.emit({ reason: 'done', metadata: this.form.value });
    }
}
