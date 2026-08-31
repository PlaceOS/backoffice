import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
    signageAIUsage,
    SignageAIUsageRow,
    testSignageAIProvider,
} from './signage-ai.fn';

@Component({
    selector: 'app-signage-ai',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div>
                    <div class="text-2xl">
                        {{ 'ADMIN.AI_PROVIDERS_HEADER' | translate }}
                    </div>
                    <!-- there is no domain picker: the API answers for the
                         domain this Backoffice is served from, and a row from
                         another customer is deliberately not reachable -->
                    <p class="text-sm opacity-60">
                        {{ 'ADMIN.AI_PROVIDERS_SCOPE' | translate }}
                    </p>
                </div>
                <div class="flex items-center space-x-2">
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
                @if (provider_error()) {
                    <div
                        class="text-error/60 bg-base-200 w-full rounded-lg p-8 text-center"
                    >
                        {{ provider_error() }}
                    </div>
                }
                <simple-table
                    class="block min-w-176 text-sm"
                    [class.hidden]="provider_error()"
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
                    [empty_message]="'ADMIN.AI_PROVIDERS_EMPTY' | translate"
                />

                <div class="mt-8 mb-2 text-xl">
                    {{ 'ADMIN.AI_USAGE_HEADER' | translate }}
                </div>
                <p class="mb-2 text-sm opacity-60">
                    {{ 'ADMIN.AI_USAGE_HINT' | translate }}
                </p>
                @if (usage_error()) {
                    <div
                        class="text-error/60 bg-base-200 w-full rounded-lg p-8 text-center"
                    >
                        {{ usage_error() }}
                    </div>
                }
                <simple-table
                    class="mb-8 block min-w-176 text-sm"
                    [class.hidden]="usage_error()"
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
            <div class="p-4">
                <code>{{ data }}</code>
            </div>
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
                    [disabled]="!!testing()"
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
        DateFromPipe,
    ],
})
export class SignageAIComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    public readonly loading = signal('');
    public readonly providers = signal<SignageAIProvider[]>([]);
    public readonly usage = signal<SignageAIUsageRow[]>([]);
    public readonly provider_error = signal('');
    public readonly usage_error = signal('');
    public readonly domain_list = this._admin_data.domain_list;

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
            data: { item },
        });
        ref.afterClosed().subscribe(() => this.load());
    }

    public readonly testing = signal('');

    /**
     * Testing a provider asks the vendor for a real image, which is billed, so
     * it confirms first and refuses a second run while one is in flight.
     */
    public async test(item: SignageAIProvider) {
        if (this.testing()) return;
        const resp = await openConfirmModal(
            {
                title: i18n('ADMIN.AI_PROVIDER_TEST_TITLE'),
                content: i18n('ADMIN.AI_PROVIDER_TEST_MSG', {
                    name: item.name,
                }),
                icon: { content: 'bolt' },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.close();

        this.testing.set(item.id);
        this.loading.set(i18n('ADMIN.AI_PROVIDER_TESTING'));
        const result = await testSignageAIProvider(item.id).catch(() => null);
        this.loading.set('');
        this.testing.set('');
        if (result?.ok) {
            notifySuccess(
                i18n('ADMIN.AI_PROVIDER_TEST_OK', {
                    ms: `${result.latency_ms}`,
                }),
            );
        } else {
            notifyError(result?.error || i18n('ADMIN.AI_PROVIDER_TEST_FAILED'));
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
        try {
            await removeSignageAIProvider(item.id);
        } catch (error) {
            // the confirm modal owns its own spinner, so it has to be told
            resp.close();
            notifyError(
                (error as Error)?.message ||
                    i18n('ADMIN.AI_PROVIDER_REMOVE_FAILED'),
            );
            return;
        }
        resp.close();
        this.load();
    }

    public async load() {
        this.loading.set(i18n('ADMIN.AI_PROVIDERS_LOADING'));
        this.provider_error.set('');
        this.usage_error.set('');

        const [provider_result, usage_result] = await Promise.allSettled([
            querySignageAIProviders(),
            signageAIUsage(),
        ]);
        if (provider_result.status === 'fulfilled') {
            this.providers.set(provider_result.value);
        } else {
            this.provider_error.set(i18n('ADMIN.AI_PROVIDERS_LOAD_FAILED'));
        }
        if (usage_result.status === 'fulfilled') {
            this.usage.set(usage_result.value);
        } else {
            this.usage_error.set(i18n('ADMIN.AI_USAGE_LOAD_FAILED'));
        }
        this.loading.set('');
    }
}
