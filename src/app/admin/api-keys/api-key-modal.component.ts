import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    computed,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
    PlaceDomain,
    PlaceUser,
    queryUsers,
    showUser,
} from '@placeos/ts-client';
import { lastValueFrom, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AsyncHandler } from '../../common/async-handler.class';
import { addChipItem, removeChipItem } from '../../common/forms';
import { getInvalidFields } from '../../common/general';
import { i18n } from '../../common/locale.service';
import { notifyError } from '../../common/notifications';
import { DialogEvent } from '../../common/types';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { UserAvatarComponent } from '../../ui/user-avatar.component';
import { PlaceAPIKeyDetails } from './api-key-details.class';
import { APIKeyService } from './api-keys.service';

export interface APIKeyModalData {
    domain: PlaceDomain;
    key?: PlaceAPIKeyDetails;
}

@Component({
    selector: 'api-key-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (editing ? 'ADMIN.APP_KEYS_EDIT' : 'ADMIN.APP_KEYS_NEW')
                    | translate
            "
            [loading]="loading()"
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
                                    [removable]="true"
                                    (removed)="removeScope(scope)"
                                >
                                    {{ scope }}
                                    <icon matChipRemove>close</icon>
                                </mat-chip>
                            }
                            <input
                                #chip_input
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
                                        addScope({
                                            input: chip_input,
                                            value: option,
                                        })
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
                    <mat-form-field appearance="outline">
                        @if (form.value.user?.id) {
                            <a-user-avatar
                                matPrefix
                                class="relative -left-1"
                                [user]="form.value.user"
                            ></a-user-avatar>
                        } @else {
                            <div class="prefix" matPrefix>
                                <icon class="relative -left-0.5 text-2xl">
                                    search
                                </icon>
                            </div>
                        }
                        <input
                            id="user"
                            matInput
                            autocomplete="off"
                            [ngModel]="search_term()"
                            (ngModelChange)="setSearch($event)"
                            [ngModelOptions]="{ standalone: true }"
                            [matAutocomplete]="userAuto"
                            [placeholder]="'USERS.SEARCH' | translate"
                            (focus)="setSearch(search_term())"
                            (blur)="resetUserSearch()"
                        />
                        <div matSuffix class="flex items-center gap-2">
                            @if (user_list_loading()) {
                                <span matSuffix class="px-2">
                                    <span
                                        class="border-base-300 border-t-info inline-block h-4 w-4 animate-spin rounded-full border-2"
                                    ></span>
                                </span>
                            }
                            @if (form.value.user?.id) {
                                <button
                                    icon
                                    type="button"
                                    (click)="clearUser()"
                                >
                                    <icon>close</icon>
                                </button>
                            }
                        </div>
                        <mat-error>{{
                            'COMMON.FIELD_REQUIRED' | translate
                        }}</mat-error>
                        <mat-autocomplete
                            #userAuto="matAutocomplete"
                            (optionSelected)="selectUser($event.option.value)"
                        >
                            @for (item of users(); track item.id) {
                                <mat-option [value]="item">
                                    <div
                                        class="flex min-w-0 items-center space-x-3 py-2"
                                    >
                                        <a-user-avatar
                                            class="shrink-0"
                                            [user]="item"
                                        ></a-user-avatar>
                                        <div
                                            class="min-w-0 flex-1 leading-tight"
                                        >
                                            <div class="truncate font-medium">
                                                {{ item.name || item.email }}
                                            </div>
                                            <div
                                                class="text-base-content/60 truncate text-xs"
                                            >
                                                {{ item.email }}
                                            </div>
                                        </div>
                                        @if (item.sys_admin || item.support) {
                                            <code
                                                class="border-base-300 border px-2"
                                                >{{
                                                    (item.sys_admin
                                                        ? 'COMMON.USER_ADMIN'
                                                        : 'COMMON.USER_SUPPORT'
                                                    ) | translate
                                                }}</code
                                            >
                                        }
                                    </div>
                                </mat-option>
                            }
                            @if (!users()?.length) {
                                <mat-option [disabled]="true">
                                    No results
                                </mat-option>
                            }
                        </mat-autocomplete>
                    </mat-form-field>
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
    imports: [
        CommonModule,
        TranslatePipe,
        FormsModule,
        ReactiveFormsModule,
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatInputModule,
        MatChipsModule,
        IconComponent,
        UserAvatarComponent,
    ],
})
export class APIKeyModalComponent extends AsyncHandler implements OnInit {
    private _service = inject(APIKeyService);
    private _data: APIKeyModalData = inject(MAT_DIALOG_DATA);

    @Output() public event = new EventEmitter<DialogEvent>();
    public readonly scopes = this._service.available_scopes;

    public readonly editing = !!this._data.key?.id;

    public form = new FormGroup({
        id: new FormControl(''),
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

    public readonly loading = signal('');
    public readonly search_term = signal('');
    public readonly domain = signal<PlaceDomain>(null);
    public readonly user_list = signal<PlaceUser[]>([]);
    public readonly user_list_loading = signal(false);
    public readonly permissions = toSignal(
        this.form.controls.permissions.valueChanges.pipe(
            startWith(this.form.controls.permissions.value),
        ),
        { initialValue: this.form.controls.permissions.value },
    );
    public readonly users = computed(() => {
        return this.user_list().sort((a, b) => a.name?.localeCompare(b.name));
    });
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly setSearch = (term = '') => {
        this.search_term.set(term);
        this.loadUsers();
    };

    public readonly addScope = (
        e: MatChipInputEvent | { input: HTMLInputElement; value: string },
    ) =>
        addChipItem(
            this.form.controls.scopes as FormControl<string[]>,
            e as MatChipInputEvent,
        );
    public readonly removeScope = (i: string) =>
        removeChipItem(this.form.controls.scopes as FormControl<string[]>, i);

    public ngOnInit() {
        this.domain.set(this._data.domain);
        if (this.editing) {
            const key = this._data.key;
            this.form.patchValue({
                id: key.id,
                name: key.name,
                description: key.description,
                scopes: key.scopes || [],
                user: (key as PlaceAPIKeyDetails & { user?: PlaceUser }).user || null,
                user_id: key.user_id,
                permissions: key.permissions,
            });
        } else {
            this.timeout(
                'reset_perms',
                () => this.form.patchValue({ permissions: null }),
                100,
            );
        }
        this.loadSelectedUser();
        this.loadUsers();
    }

    public selectUser(user: PlaceUser) {
        this.form.patchValue({ user, user_id: user.id });
        this.search_term.set(this._userLabel(user));
    }

    public clearUser() {
        this.form.patchValue({ user: null, user_id: '' });
        this.search_term.set('');
        this.loadUsers();
    }

    public resetUserSearch() {
        setTimeout(() => {
            const user = this.form.value.user;
            this.search_term.set(user ? this._userLabel(user) : '');
        }, 150);
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
        this.event.emit({ reason: 'done', metadata: this.form.value });
    }

    public async loadSelectedUser() {
        const user_id = this.form.value.user_id;
        if (!user_id || this.form.value.user) return;
        const user = await lastValueFrom(showUser(user_id)).catch(() => null);
        if (!user) return;
        this.form.patchValue({ user });
        this.search_term.set(this._userLabel(user));
    }

    public loadUsers() {
        this.timeout('load_users', async () => {
            this.user_list_loading.set(true);
            try {
                const users = await lastValueFrom(
                    this.domain()
                        ? queryUsers({
                              authority_id: this.domain().id,
                              q: this.search_term(),
                          }).pipe(map((_) => _.data as PlaceUser[]))
                        : of([] as PlaceUser[]),
                );
                this.user_list.set(users);
                if (
                    this.editing &&
                    !this.form.value.user &&
                    this._data.key.user_id
                ) {
                    const user = users.find(
                        (u) => u.id === this._data.key.user_id,
                    );
                    if (user) {
                        this.form.patchValue({ user });
                        this.search_term.set(this._userLabel(user));
                    }
                }
            } finally {
                this.user_list_loading.set(false);
            }
        });
    }

    private _userLabel(user: PlaceUser) {
        return user?.name || user?.email || '';
    }
}
