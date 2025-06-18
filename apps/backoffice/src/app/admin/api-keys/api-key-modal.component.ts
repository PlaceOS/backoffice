import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { addChipItem, removeChipItem } from '../../common/forms';
import { getInvalidFields } from '../../common/general';
import { i18n } from '../../common/locale.service';
import { notifyError } from '../../common/notifications';
import { DialogEvent } from '../../common/types';
import { APIKeyService } from './api-keys.service';

@Component({
    selector: 'api-key-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="'ADMIN.APP_KEYS_NEW' | translate"
            [loading]="loading"
            (save)="save()"
        >
            <form class="w-full" [formGroup]="form">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'COMMON.FIELD_NAME' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            name="name"
                            formControlName="name"
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            matInput
                        />
                        <mat-error>{{
                            'ADMIN.APP_KEYS_NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="name">{{
                        'COMMON.FIELD_DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            name="description"
                            formControlName="description"
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            matInput
                        ></textarea>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="scope"
                        >{{ 'ADMIN.APP_KEYS_FIELD_SCOPES' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <mat-chip-grid #chipList aria-label="Scopes">
                            @for (scope of scope_list; track scope) {
                                <mat-chip
                                    [selectable]="true"
                                    [removable]="true"
                                    (removed)="removeScope(scope)"
                                >
                                    {{ scope }}
                                    <app-icon matChipRemove>close</app-icon>
                                </mat-chip>
                            }
                            <input
                                matInput
                                placeholder="Scopes..."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addScope($event)"
                                [matAutocomplete]="auto"
                            />
                        </mat-chip-grid>
                        <mat-error>{{
                            'ADMIN.APP_KEYS_SCOPES_REQUIRED' | translate
                        }}</mat-error>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (option of scopes | async; track option) {
                                <mat-option
                                    (click)="
                                        addScope({ input: {}, value: option })
                                    "
                                >
                                    {{ option }}
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </mat-form-field>
                </div>
                <div class="flex flex-col">
                    <label for="user">
                        {{ 'USERS.SINGULAR' | translate }}<span>*</span>
                    </label>
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
                            class="no-subscript min-w-[20rem] px-2"
                            (click)="
                                $event.preventDefault();
                                $event.stopPropagation()
                            "
                        >
                            <input
                                matInput
                                #input
                                ngModel
                                (ngModelChange)="setSearch($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'USERS.SEARCH' | translate"
                            />
                        </mat-form-field>
                        @for (
                            item of users | async | slice: 0 : 10;
                            track item
                        ) {
                            <button
                                mat-menu-item
                                (click)="
                                    form.patchValue({
                                        user: item,
                                        user_id: item.id,
                                    });
                                    setSearch('')
                                "
                                [class.text-secondary]="
                                    form.value.user?.id === item.id
                                "
                            >
                                <div class="flex w-full items-center space-x-4">
                                    <div class="flex-1 leading-tight">
                                        <div>{{ item.name }}</div>
                                        <div class="text-xs opacity-30">
                                            {{ item.email }}
                                        </div>
                                    </div>
                                    @if (item.sys_admin || item.support) {
                                        <code class="px-2">{{
                                            (item.sys_admin
                                                ? 'COMMON.USER_ADMIN'
                                                : 'COMMON.USER_SUPPORT'
                                            ) | translate
                                        }}</code>
                                    }
                                </div>
                            </button>
                        }
                        @if (!(users | async)?.length) {
                            <button
                                mat-menu-item
                                [disabled]="true"
                                class="min-w-[20rem] text-center"
                            >
                                No results
                            </button>
                        }
                    </mat-menu>
                </div>
                <div class="flex flex-col">
                    <label for="permissions">{{
                        'ADMIN.PERMISSIONS' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            name="permissions"
                            formControlName="permissions"
                            placeholder="None"
                        >
                            <mat-option [value]="null">{{
                                'ADMIN.PERMISSIONS_NONE' | translate
                            }}</mat-option>
                            <mat-option value="user">{{
                                'ADMIN.PERMISSIONS_USER' | translate
                            }}</mat-option>
                            <mat-option value="support">{{
                                'ADMIN.PERMISSIONS_SUPPORT' | translate
                            }}</mat-option>
                            <mat-option value="admin">{{
                                'ADMIN.PERMISSIONS_ADMIN' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class APIKeyModalComponent {
    private _service = inject(APIKeyService);

    @Output() public event = new EventEmitter<DialogEvent>();
    public form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        user: new FormControl(null),
        user_id: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        scopes: new FormControl(
            [],
            [Validators.required, Validators.minLength(1)],
        ),
        permissions: new FormControl(''),
    });
    public loading: string;
    public readonly search_str = new BehaviorSubject('');
    public readonly scopes = this._service.available_scopes;

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
        }),
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

    constructor() {
        setTimeout(() => this.form.patchValue({ permissions: null }), 100);
    }

    public get scope_list(): string[] {
        return this.form.controls.scopes.value;
    }

    public save() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        const data = { ...this.form.value };
        delete data.user;
        this.event.emit({ reason: 'done', metadata: this.form.value });
    }
}
