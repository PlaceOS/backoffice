import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { openConfirmModal } from '../../overlays/confirm-modal.component';
import { IconComponent } from '../../ui/icon.component';
import { DateFromPipe } from '../../ui/pipes/date-from.pipe';
import { SimpleTableComponent } from '../../ui/simple-table.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { AdminDataService } from '../admin-data.service';
import { SignageAIProviderModalComponent } from './signage-ai-provider-modal.component';
import {
    querySignageAIProviders,
    removeSignageAIProvider,
    SignageAIProvider,
    SignageAIUsageRow,
    signageAIUsage,
    testSignageAIProvider,
} from './signage-ai.fn';

@Component({
    selector: 'app-signage-ai',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.AI_PROVIDERS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <mat-form-field class="h-12" appearance="outline">
                        <mat-select
                            name="domain"
                            [(ngModel)]="domain"
                            (ngModelChange)="load()"
                            [placeholder]="'ADMIN.ALL_DOMAINS' | translate"
                        >
                            <mat-option [value]="{}">{{
                                'ADMIN.ALL_DOMAINS' | translate
                            }}</mat-option>
                            @for (option of domain_list(); track option.id) {
                                <mat-option [value]="option">
                                    {{ option.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple class="w-40" (click)="edit()">
                        {{ 'ADMIN.AI_PROVIDER_ADD' | translate }}
                    </button>
                </div>
            </div>
            <div class="w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
                <simple-table
                    class="block min-w-176 text-sm"
                    [data]="provider_list()"
                    [columns]="[
                        {
                            key: 'name',
                            name: 'ADMIN.AI_PROVIDER_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'provider',
                            name: 'ADMIN.AI_PROVIDER_VENDOR' | translate,
                            content: code_template,
                            size: '10rem',
                        },
                        {
                            key: 'default_model',
                            name: 'ADMIN.AI_PROVIDER_MODEL' | translate,
                            content: code_template,
                        },
                        {
                            key: 'updated_at',
                            name: 'COMMON.UPDATED_AT' | translate,
                            content: date_from_template,
                            size: '10rem',
                        },
                        {
                            key: 'enabled',
                            name: 'ADMIN.AI_PROVIDER_ENABLED' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'is_default',
                            name: 'ADMIN.AI_PROVIDER_IS_DEFAULT' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            content: actions_template,
                            size: '9rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        'ADMIN.AI_PROVIDERS_EMPTY' | translate
                    "
                />

                <div class="mt-8 mb-2 text-xl">
                    {{ 'ADMIN.AI_USAGE_HEADER' | translate }}
                </div>
                <p class="mb-2 text-sm opacity-60">
                    {{ 'ADMIN.AI_USAGE_HINT' | translate }}
                </p>
                <simple-table
                    class="mb-8 block min-w-176 text-sm"
                    [data]="usage()"
                    [columns]="[
                        {
                            key: 'provider',
                            name: 'ADMIN.AI_PROVIDER_VENDOR' | translate,
                            content: code_template,
                        },
                        {
                            key: 'model',
                            name: 'ADMIN.AI_PROVIDER_MODEL' | translate,
                            content: code_template,
                        },
                        {
                            key: 'jobs',
                            name: 'ADMIN.AI_USAGE_JOBS' | translate,
                            content: plain_template,
                        },
                        {
                            key: 'candidates',
                            name: 'ADMIN.AI_USAGE_ASKED' | translate,
                            content: plain_template,
                        },
                        {
                            key: 'images_produced',
                            name: 'ADMIN.AI_USAGE_MADE' | translate,
                            content: plain_template,
                        },
                    ]"
                    [empty_message]="'ADMIN.AI_USAGE_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #name_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.name }}</div>
                <div class="text-xs opacity-30">
                    {{ row.domain?.name || row.authority_id || 'Any domain' }}
                </div>
            </div>
        </ng-template>
        <ng-template #code_template let-data="data">
            <div class="p-4"><code>{{ data }}</code></div>
        </ng-template>
        <ng-template #plain_template let-data="data">
            <div class="p-4">{{ data }}</div>
        </ng-template>
        <ng-template #date_from_template let-data="data">
            <div class="p-4">{{ +data * 1000 | dateFrom }}</div>
        </ng-template>
        <ng-template #bool_template let-data="data">
            <div class="flex h-full w-full items-center justify-center">
                <div
                    class="flex h-8 w-8 items-center justify-center rounded-sm"
                    [class.bg-success]="data"
                    [class.text-success-content]="data"
                    [class.bg-error]="!data"
                    [class.text-error-content]="!data"
                >
                    <icon class="text-2xl">{{ data ? 'check' : 'close' }}</icon>
                </div>
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="mx-auto flex items-center space-x-2 p-2">
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.AI_PROVIDER_TEST' | translate"
                    (click)="test(row)"
                >
                    <icon>bolt</icon>
                </button>
                <button
                    icon
                    default
                    matRipple
                    [matTooltip]="'ADMIN.AI_PROVIDER_EDIT' | translate"
                    (click)="edit(row)"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    default
                    error
                    matRipple
                    [matTooltip]="'ADMIN.AI_PROVIDER_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        IconComponent,
        MatRippleModule,
        TranslatePipe,
        MatTooltipModule,
        SimpleTableComponent,
        MatProgressBarModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        DateFromPipe,
    ],
})
export class SignageAIComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    public readonly loading = signal('');
    public readonly providers = signal<SignageAIProvider[]>([]);
    public readonly usage = signal<SignageAIUsageRow[]>([]);
    public readonly domain_list = this._admin_data.domain_list;
    public readonly domain = this._admin_data.selectedDomain('signage-ai');

    public readonly provider_list = computed(() =>
        this.providers().map((provider) => ({
            ...provider,
            domain: this.domain_list().find(
                (d) => d.id === provider.authority_id,
            ),
        })),
    );

    public async ngOnInit() {
        this.loading.set(i18n('ADMIN.AI_PROVIDERS_LOADING'));
        await this._admin_data.loadDomains();
        await this.load();
        this.loading.set('');
    }

    public edit(item?: SignageAIProvider) {
        const ref = this._dialog.open(SignageAIProviderModalComponent, {
            data: { item, domain: this.domain()?.id },
        });
        ref.afterClosed().subscribe(() => this.load());
    }

    public async test(item: SignageAIProvider) {
        this.loading.set(i18n('ADMIN.AI_PROVIDER_TESTING'));
        const result = await testSignageAIProvider(item.id).catch(() => null);
        this.loading.set('');
        if (result?.ok) {
            notifySuccess(
                i18n('ADMIN.AI_PROVIDER_TEST_OK', {
                    ms: `${result.latency_ms}`,
                }),
            );
        } else {
            notifyError(
                result?.error || i18n('ADMIN.AI_PROVIDER_TEST_FAILED'),
            );
        }
    }

    public async remove(item: SignageAIProvider) {
        const resp = await openConfirmModal(
            {
                title: i18n('ADMIN.AI_PROVIDER_REMOVE_TITLE'),
                content: i18n('ADMIN.AI_PROVIDER_REMOVE_MSG', {
                    name: item.name,
                }),
                icon: { content: 'delete_forever' },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading(i18n('ADMIN.AI_PROVIDER_REMOVING'));
        await removeSignageAIProvider(item.id);
        resp.close();
        this.load();
    }

    public async load() {
        this.loading.set(i18n('ADMIN.AI_PROVIDERS_LOADING'));
        const authority_id = this.domain()?.id;
        this.providers.set(
            await querySignageAIProviders({ authority_id }).catch(() => []),
        );
        this.usage.set(await signageAIUsage().catch(() => []));
        this.loading.set('');
    }
}
