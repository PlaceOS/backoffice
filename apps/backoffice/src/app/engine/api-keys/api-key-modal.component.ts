import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import {
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { addChipItem, removeChipItem } from '../../common/forms';
import { DialogEvent } from '../../common/types';
import { APIKeyService } from './api-keys.service';

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
                <label for="user">User<span>*</span></label>
                <an-action-field
                    [matMenuTriggerFor]="menu"
                    yPosition="below"
                    class="mb-8"
                    (click)="focusInput()"
                >
                    <div [class.opacity-30]="!form.value.user?.id">
                        {{ form.value.user?.name || 'Select user' }}
                    </div>
                </an-action-field>
                <mat-menu #menu="matMenu">
                    <mat-form-field
                        appearance="outline"
                        class="px-2 h-12"
                        (click)="
                            $event.preventDefault(); $event.stopPropagation()
                        "
                    >
                        <input
                            matInput
                            #input
                            ngModel
                            (ngModelChange)="setSearch($event)"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="Search users..."
                        />
                    </mat-form-field>
                    <button
                        mat-menu-item
                        *ngFor="let item of users | async | slice: 0:10"
                        (click)="
                            form.patchValue({ user: item, user_id: item.id });
                            setSearch('')
                        "
                        [class.text-primary]="form.value.user?.id === item.id"
                    >
                        {{ item.name }}
                    </button>
                </mat-menu>
            </div>
            <div class="flex flex-col">
                <label for="permissions">Permissions</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        name="permissions"
                        formControlName="permissions"
                        placeholder="None"
                    >
                        <mat-option [value]="null">None</mat-option>
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
    public form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        user: new FormControl(null),
        user_id: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        scopes: new FormControl([]),
        permissions: new FormControl(''),
    });
    public loading: string;
    public readonly search_str = new BehaviorSubject('');

    @ViewChild('input') public _input_el: ElementRef<HTMLInputElement>;

    public readonly users = combineLatest([
        this._service.users,
        this.form.valueChanges,
    ]).pipe(
        map(([users, { permissions }]) => {
            if (permissions === 'admin')
                return users.filter((_) => _.sys_admin);
            if (permissions === 'support')
                return users.filter((_) => _.support || _.sys_admin);
            return users.sort((a, b) => a.name?.localeCompare(b.name));
        })
    );

    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly focusInput = () =>
        setTimeout(() => this._input_el?.nativeElement?.focus(), 100);
    public readonly setSearch = (s) => this._service.setSearch(s);

    public readonly addScope = (e) =>
        addChipItem(this.form.controls.scopes as any, e);
    public readonly removeScope = (i) =>
        removeChipItem(this.form.controls.scopes as any, i);

    constructor(private _service: APIKeyService) {
        setTimeout(() => this.form.patchValue({ permissions: null }), 100);
    }

    public get scope_list(): string[] {
        return this.form.controls.scopes.value;
    }

    public save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) return;
        const data = { ...this.form.value };
        delete data.user;
        this.event.emit({ reason: 'done', metadata: this.form.value });
    }
}
