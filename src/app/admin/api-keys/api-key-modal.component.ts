import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { format, fromUnixTime, getUnixTime } from 'date-fns';

import {
    Component,
    computed,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    form,
    FormField,
    minLength,
    required,
    submit,
} from '@angular/forms/signals';
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
import { AsyncHandler } from '../../common/async-handler.class';
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
            <form class="w-full">
                <div class="flex flex-col">
                    <label for="name"
                        >{{ 'COMMON.FIELD_NAME' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            [placeholder]="'COMMON.FIELD_NAME' | translate"
                            [formField]="form.name"
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
                            [placeholder]="
                                'COMMON.FIELD_DESCRIPTION' | translate
                            "
                            [formField]="form.description"
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
                                (input)="scope_search.set($any($event.target).value)"
                                [matAutocomplete]="auto"
                            />
                        </mat-chip-grid>
                        <mat-error>{{
                            'ADMIN.APP_KEYS_SCOPES_REQUIRED' | translate
                        }}</mat-error>
                        <mat-autocomplete #auto="matAutocomplete">
                            @for (option of filtered_scopes(); track option) {
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
                        @if (formModel().user?.id) {
                            <a-user-avatar
                                matPrefix
                                class="relative -left-1"
                                [user]="formModel().user"
                            />
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
                            @if (formModel().user?.id) {
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
                                        />
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
                            id="permissions"
                            data-testid="api-key-permissions"
                            placeholder="None"
                            [formField]="form.permissions"
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
                <div class="flex flex-col">
                    <label for="expires_at">{{
                        'ADMIN.APP_KEYS_FIELD_EXPIRES_AT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            id="expires_at"
                            matInput
                            type="datetime-local"
                            [ngModel]="expires_at_input()"
                            (ngModelChange)="setExpiry($event)"
                            [ngModelOptions]="{ standalone: true }"
                        />
                        @if (formModel().expires_at) {
                            <button
                                icon
                                matSuffix
                                type="button"
                                (click)="setExpiry('')"
                            >
                                <icon>close</icon>
                            </button>
                        }
                    </mat-form-field>
                </div>
                @if (!editing) {
                    <div class="flex flex-col">
                        <label for="ttl">{{
                            'ADMIN.APP_KEYS_FIELD_TTL' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                id="ttl"
                                data-testid="api-key-ttl"
                                [placeholder]="
                                    'ADMIN.APP_KEYS_FIELD_TTL_HINT' | translate
                                "
                                [ngModel]="formModel().ttl"
                                (ngModelChange)="setTTL($event)"
                                [ngModelOptions]="{ standalone: true }"
                            >
                                <mat-option [value]="null">{{
                                    'ADMIN.APP_KEYS_TTL_NONE' | translate
                                }}</mat-option>
                                @for (preset of ttl_presets; track preset.seconds) {
                                    <mat-option [value]="preset.seconds">{{
                                        preset.label | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        FormsModule,
        FormField,
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

    public readonly formModel = signal<{
        id: string;
        name: string;
        user?: PlaceUser;
        user_id: string;
        description: string;
        scopes: string[];
        permissions: string | null;
        expires_at: number | null;
        ttl: number | null;
    }>({
        id: '',
        name: '',
        user_id: '',
        description: '',
        scopes: [],
        permissions: null,
        expires_at: null,
        ttl: null,
    });
    public readonly form = form(this.formModel, (p) => {
        required(p.name);
        required(p.user_id);
        required(p.scopes);
        minLength(p.scopes, 1);
    });

    public readonly loading = signal('');
    public readonly search_term = signal('');
    public readonly scope_search = signal('');
    public readonly domain = signal<PlaceDomain>(null);
    public readonly user_list = signal<PlaceUser[]>([]);
    public readonly user_list_loading = signal(false);
    public readonly permissions = computed(() => this.formModel().permissions);
    /** `expires_at` epoch (seconds) formatted for the datetime-local input */
    public readonly expires_at_input = computed(() => {
        const ts = this.formModel().expires_at;
        return ts ? format(fromUnixTime(ts), "yyyy-MM-dd'T'HH:mm") : '';
    });

    public readonly setExpiry = (value: string) => {
        const ts = value ? getUnixTime(new Date(value)) : null;
        this.formModel.update((model) => ({ ...model, expires_at: ts }));
    };

    public readonly setTTL = (value: string | number) => {
        const ttl = value === '' || value == null ? null : Number(value);
        this.formModel.update((model) => ({
            ...model,
            ttl: ttl == null || isNaN(ttl) ? null : ttl,
        }));
    };
    public readonly filtered_scopes = computed(() => {
        const search = this.scope_search().trim().toLowerCase();
        const selected = this.formModel().scopes;
        return this.scopes().filter(
            (scope) =>
                !selected.includes(scope) &&
                (!search || scope.toLowerCase().includes(search)),
        );
    });
    public readonly users = computed(() => {
        const search = this.search_term().trim().toLowerCase();
        const list = [...this.user_list()].sort((a, b) =>
            (a.name || '').localeCompare(b.name || ''),
        );
        // The selected user's label fills the input; don't filter it away.
        if (!search || search === this._userLabel(this.formModel().user).toLowerCase()) {
            return list;
        }
        return list.filter((user) =>
            `${user.name || ''} ${user.email || ''}`
                .toLowerCase()
                .includes(search),
        );
    });
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];
    /** Selectable TTL presets, value in seconds from creation */
    public readonly ttl_presets: { label: string; seconds: number }[] = [
        { label: 'ADMIN.APP_KEYS_TTL_HOUR', seconds: 3600 },
        { label: 'ADMIN.APP_KEYS_TTL_6_HOURS', seconds: 21600 },
        { label: 'ADMIN.APP_KEYS_TTL_DAY', seconds: 86400 },
        { label: 'ADMIN.APP_KEYS_TTL_WEEK', seconds: 604800 },
        { label: 'ADMIN.APP_KEYS_TTL_MONTH', seconds: 2592000 },
        { label: 'ADMIN.APP_KEYS_TTL_90_DAYS', seconds: 7776000 },
        { label: 'ADMIN.APP_KEYS_TTL_YEAR', seconds: 31536000 },
    ];

    public readonly setSearch = (term = '') => {
        this.search_term.set(term);
        this.loadUsers();
    };

    public readonly addScope = (
        e: MatChipInputEvent | { input: HTMLInputElement; value: string },
    ) => {
        const value = `${e.value || ''}`.trim();
        if (!value) return;
        this.formModel.update((model) => ({
            ...model,
            scopes: model.scopes.includes(value)
                ? model.scopes
                : [...model.scopes, value],
        }));
        e.input.value = '';
        this.scope_search.set('');
    };
    public readonly removeScope = (i: string) =>
        this.formModel.update((model) => ({
            ...model,
            scopes: model.scopes.filter((scope) => scope !== i),
        }));

    public ngOnInit() {
        this.domain.set(this._data.domain);
        if (this.editing) {
            const key = this._data.key;
            this.formModel.update((value) => ({
                ...value,
                id: key.id,
                name: key.name,
                description: key.description,
                scopes: key.scopes || [],
                user:
                    (key as PlaceAPIKeyDetails & { user?: PlaceUser }).user ||
                    undefined,
                user_id: key.user_id,
                permissions: key.permissions || null,
                expires_at: key.expires_at ?? null,
            }));
        } else {
            this.timeout(
                'reset_perms',
                () =>
                    this.formModel.update((value) => ({
                        ...value,
                        permissions: null,
                    })),
                100,
            );
        }
        this.loadSelectedUser();
        this.loadUsers();
    }

    public selectUser(user: PlaceUser) {
        this.formModel.update((value) => ({
            ...value,
            user,
            user_id: user.id,
        }));
        this.search_term.set(this._userLabel(user));
    }

    public clearUser() {
        this.formModel.update((value) => ({
            ...value,
            user: undefined,
            user_id: '',
        }));
        this.search_term.set('');
        this.loadUsers();
    }

    public resetUserSearch() {
        setTimeout(() => {
            const user = this.formModel().user;
            this.search_term.set(user ? this._userLabel(user) : '');
        }, 150);
    }

    public get scope_list(): string[] {
        return this.formModel().scopes;
    }

    public async save() {
        await submit(this.form, async () => {
            const metadata = { ...this.formModel() };
            // `ttl` is only valid on create; drop it (and empty values) otherwise
            if (this.editing || metadata.ttl == null) delete metadata.ttl;
            if (metadata.expires_at == null) delete metadata.expires_at;
            this.event.emit({ reason: 'done', metadata });
        });
        if (this.form().invalid()) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: this._invalidFields().join(', '),
                }),
            );
        }
    }

    public async loadSelectedUser() {
        const { user: selected_user, user_id } = this.formModel();
        if (!user_id || selected_user) return;
        const user = await showUser(user_id).catch(() => null);
        if (!user) return;
        this.formModel.update((value) => ({ ...value, user }));
        this.search_term.set(this._userLabel(user));
    }

    public loadUsers() {
        this.timeout('load_users', async () => {
            this.user_list_loading.set(true);
            try {
                const users = this.domain()
                    ? (
                          await queryUsers({
                              authority_id: this.domain().id,
                              q: this.search_term(),
                          })
                      ).data
                    : [];
                this.user_list.set(users);
                if (
                    this.editing &&
                    !this.formModel().user &&
                    this._data.key.user_id
                ) {
                    const user = users.find(
                        (u) => u.id === this._data.key.user_id,
                    );
                    if (user) {
                        this.formModel.update((value) => ({ ...value, user }));
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

    private _invalidFields() {
        const fields: string[] = [];
        if (this.form.name().invalid()) fields.push('name');
        if (this.form.user_id().invalid()) fields.push('user_id');
        if (this.form.scopes().invalid()) fields.push('scopes');
        return fields;
    }
}
