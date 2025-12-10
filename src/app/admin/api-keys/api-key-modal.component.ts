import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    computed,
    inject,
    signal,
    viewChild,
} from '@angular/core';
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
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { PlaceDomain, PlaceUser, queryUsers } from '@placeos/ts-client';
import { lastValueFrom, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncHandler } from '../../common/async-handler.class';
import { addChipItem, removeChipItem } from '../../common/forms';
import { getInvalidFields } from '../../common/general';
import { i18n } from '../../common/locale.service';
import { notifyError } from '../../common/notifications';
import { DialogEvent } from '../../common/types';
import { ActionFieldComponent } from '../../ui/custom-fields/action-field.component';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { APIKeyService } from './api-keys.service';

@Component({
    selector: 'api-key-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="'ADMIN.APP_KEYS_NEW' | translate"
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
                            class="no-subscript w-full px-2"
                            (click)="
                                $event.preventDefault();
                                $event.stopPropagation()
                            "
                        >
                            <input
                                matInput
                                #input
                                [(ngModel)]="search_term"
                                (ngModelChange)="setSearch($event)"
                                [ngModelOptions]="{ standalone: true }"
                                [placeholder]="'USERS.SEARCH' | translate"
                            />
                        </mat-form-field>
                        @for (item of users() | slice: 0 : 10; track item) {
                            <button
                                mat-menu-item
                                class="min-w-[24rem]"
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
                        @if (!users()?.length) {
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
    imports: [
        CommonModule,
        TranslatePipe,
        FormsModule,
        ReactiveFormsModule,
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatSelectModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatInputModule,
        MatChipsModule,
        ActionFieldComponent,
    ],
})
export class APIKeyModalComponent extends AsyncHandler implements OnInit {
    private _service = inject(APIKeyService);
    private _domain: PlaceDomain = inject(MAT_DIALOG_DATA);

    @Output() public event = new EventEmitter<DialogEvent>();
    public readonly scopes = this._service.available_scopes;

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

    public readonly loading = signal('');
    public readonly search_term = signal('');
    public readonly domain = signal<PlaceDomain>(null);
    public readonly permissions = signal('');
    public readonly user_list = signal<PlaceUser[]>([]);
    public readonly users = computed(() => {
        if (this.permissions() === 'admin')
            return this.user_list().filter((_) => _.sys_admin);
        if (this.permissions() === 'support')
            return this.user_list().filter((_) => _.support || _.sys_admin);
        return this.user_list().sort((a, b) => a.name?.localeCompare(b.name));
    });
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly _input_el =
        viewChild<ElementRef<HTMLInputElement>>('input');

    public readonly focusInput = () =>
        setTimeout(() => this._input_el()?.nativeElement?.focus(), 100);
    public readonly setSearch = (term?: string) => this.loadUsers();

    public readonly addScope = (e: MatChipInputEvent | { input: any; value: string }) =>
        addChipItem(this.form.controls.scopes as FormControl<string[]>, e as MatChipInputEvent);
    public readonly removeScope = (i: string) =>
        removeChipItem(this.form.controls.scopes as FormControl<string[]>, i);

    public ngOnInit() {
        this.domain.set(this._domain);
        this.subscription(
            'changes',
            this.form.controls.permissions.valueChanges.subscribe((v) =>
                this.permissions.set(v),
            ),
        );
        this.timeout(
            'reset_perms',
            () => this.form.patchValue({ permissions: null }),
            100,
        );
        this.loadUsers();
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

    public loadUsers() {
        this.timeout('load_users', async () => {
            const users = await lastValueFrom(
                this.domain()
                    ? queryUsers({
                          authority_id: this.domain().id,
                          q: this.search_term(),
                      }).pipe(map((_) => _.data as PlaceUser[]))
                    : of([] as PlaceUser[]),
            );
            this.user_list.set(users);
        });
    }
}
