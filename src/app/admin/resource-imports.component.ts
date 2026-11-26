import { Dialog } from '@angular/cdk/dialog';
import {
    Component,
    ElementRef,
    inject,
    Injector,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { systems as systems_v7 } from '@placeos/ts-client';
import { orThrow, orThrowPage } from '@placeos/ts-client/compat';
import { place } from '@placeos/ts-client/staff';
import { mapLimit } from '../common/cascade-delete';
import { readError } from '../common/errors';
import { refocusIfLost } from '../common/focus';
import { escapeHtml } from '../common/general';
import { i18n } from '../common/locale.service';
import {
    notifyError,
    notifyInfo,
    notifySuccess,
} from '../common/notifications';
import { collectPages } from '../common/types';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';
import { AdminDomainSelectComponent } from './admin-domain-select.component';

/** Max number of systems created at once */
const IMPORT_LIMIT = 5;
/** Emails per systems lookup. 100 emails make a URL of about 3 KB. */
const EMAIL_CHUNK_SIZE = 100;

export interface ExternalResource {
    id: string;
    booking_type: string;
    capacity: number;
    display_name: string;
    email: string;
    is_accessible: boolean;
    nickname: string;
    phone: string;
    tags: readonly string[];
    imported?: boolean;
    system_id?: string;
}

@Component({
    selector: 'resource-imports',
    template: `
        <div class="flex h-full w-full flex-col">
            <!-- On a phone the controls go below the title -->
            <div
                class="my-4 flex flex-wrap items-center justify-between gap-2 px-4"
            >
                <h2
                    #heading
                    tabindex="-1"
                    class="text-2xl outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solid"
                >
                    {{ 'ADMIN.RESOURCE_IMPORTS_HEADER' | translate }}
                </h2>
                <div class="flex min-w-0 flex-wrap items-center gap-2">
                    <!-- The rooms do not depend on the domain, so a change does not load them again -->
                    <span
                        id="resource-imports-prefix"
                        class="text-sm opacity-60"
                    >
                        {{ 'ADMIN.RESOURCE_IMPORTS_PREFIX' | translate }}
                    </span>
                    <admin-domain-select
                        key="resource-imports"
                        labelled_by="resource-imports-prefix"
                        field_class="no-subscript w-56 max-w-full"
                    />
                    @if (domains_failed()) {
                        <span role="alert" class="text-sm">
                            {{ 'ADMIN.DOMAINS_LOAD_ERROR' | translate }}
                        </span>
                        <button
                            btn
                            ripple
                            class="clear"
                            [attr.aria-busy]="domains_loading()"
                            [attr.aria-disabled]="domains_loading()"
                            (click)="loadDomains(true)"
                        >
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    }
                    <button
                        icon
                        default
                        ripple
                        class="text-xl"
                        [disabled]="!domain() || !resource_list()?.length"
                        (click)="importMissingResources()"
                        [appTooltip]="'ADMIN.RESOURCE_IMPORTS_ALL' | translate"
                        [attr.aria-label]="
                            'ADMIN.RESOURCE_IMPORTS_ALL' | translate
                        "
                    >
                        <icon>download</icon>
                    </button>
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                    [class.invisible]="!loading()"
                />
                @if (load_error()) {
                    <div
                        role="alert"
                        class="bg-base-200 mb-4 flex items-center gap-4 rounded-sm p-4"
                    >
                        <p class="flex-1">{{ load_error() }}</p>
                        <button
                            btn
                            ripple
                            [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="loadResourceList(true)"
                        >
                            {{ 'COMMON.RETRY' | translate }}
                        </button>
                    </div>
                }
                <simple-table
                    class="mb-4 block min-w-5xl text-sm"
                    [data]="resource_list()"
                    [columns]="[
                        {
                            key: 'display_name',
                            name: 'COMMON.FIELD_NAME' | translate,
                            content: name_template,
                        },
                        {
                            key: 'email',
                            name: 'COMMON.FIELD_EMAIL' | translate,
                            content: email_template,
                        },
                        {
                            key: 'imported',
                            name: 'ADMIN.RESOURCE_IMPORTS_IMPORTED' | translate,
                            content: bool_template,
                            size: '5.5rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            sortable: false,
                            size: '6.25rem',
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="
                        loading() || load_error()
                            ? ''
                            : ('ADMIN.RESOURCE_IMPORTS_EMPTY' | translate)
                    "
                />
                <ng-template #email_template let-data="data">
                    <div class="mono p-4 text-xs">{{ data }}</div>
                </ng-template>
                <ng-template #bool_template let-data="data">
                    <div
                        [class.bg-error]="!data"
                        [class.bg-success]="data"
                        class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                    >
                        <icon>{{ data ? 'done' : 'close' }}</icon>
                    </div>
                </ng-template>
                <ng-template #name_template let-row="row">
                    <div
                        class="flex items-center justify-between space-x-2 px-4 py-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <div class="w-full truncate">
                                {{ row.display_name }}
                            </div>
                            @if (row.nickname !== row.display_name) {
                                <div class="text-xs opacity-30">
                                    {{ row.nickname }}
                                </div>
                            }
                        </div>
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="mx-auto flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            ripple
                            (click)="importResource(row)"
                            [disabled]="row.imported || !domain()"
                            [appTooltip]="
                                'ADMIN.RESOURCE_IMPORTS_IMPORT' | translate
                            "
                        >
                            <icon>publish</icon>
                        </button>
                        @if (row.system_id) {
                            <a
                                icon
                                default
                                ripple
                                [appTooltip]="
                                    'ADMIN.RESOURCE_IMPORTS_VIEW' | translate
                                "
                                [routerLink]="[
                                    '/systems',
                                    row.system_id,
                                    'about',
                                ]"
                            >
                                <icon>visibility</icon>
                            </a>
                        } @else {
                            <button icon default disabled>
                                <icon>visibility</icon>
                            </button>
                        }
                    </div>
                </ng-template>
            </div>
        </div>
    `,
    styles: [``],
    imports: [
        ProgressBarComponent,
        TooltipDirective,
        AdminDomainSelectComponent,
        IconComponent,
        RouterModule,
        TranslatePipe,
        SimpleTableComponent,
    ],
})
export class ResourceImportsComponent implements OnInit {
    private _dialog = inject(Dialog);
    private _admin_data = inject(AdminDataService);
    private _injector = inject(Injector);
    private readonly _heading = viewChild<ElementRef<HTMLElement>>('heading');

    public readonly loading = signal(false);
    /**
     * The domain that names the imported systems. The staff API has no
     * domain input: it lists the rooms of the tenant of the host.
     */
    public readonly domain =
        this._admin_data.selectedDomain('resource-imports');
    public readonly resource_list = signal<ExternalResource[]>([]);
    /** Why the rooms did not load. Imports stay off until they load */
    public readonly load_error = signal('');
    /** Whether no domains loaded. An import needs a domain. */
    public readonly domains_failed = signal(false);
    public readonly domains_loading = signal(false);
    /** Import in flight for each room email, so a room gets one system */
    private readonly _importing = new Map<string, Promise<boolean>>();

    /**
     * Load the domains for the picker, and select the default domain. The
     * error, with its Retry button, stays until the domains load.
     * @param retry From the Retry button. When the domains load, the button
     * goes, so the heading gets the focus.
     */
    public async loadDomains(retry = false) {
        if (this.domains_loading()) return;
        this.domains_loading.set(true);
        const domain = await this._admin_data
            .selectDefaultDomain('resource-imports')
            .finally(() => this.domains_loading.set(false));
        const failed = !domain && !this._admin_data.domain_list().length;
        this.domains_failed.set(failed);
        if (retry && !failed)
            refocusIfLost(this._injector, () => this._heading()?.nativeElement);
    }

    public ngOnInit() {
        // Load the domain list for the picker. The rooms do not wait for it.
        this.loadDomains();
        this.loadResourceList();
    }

    public async importMissingResources() {
        const domain = this.domain();
        if (!domain) return;
        const list = this.resource_list();
        const missing = list.filter((_) => !_.imported);
        if (!missing.length) {
            return notifyInfo(i18n('ADMIN.RESOURCE_IMPORTS_ALL_WARNING'));
        }
        const resp = await openConfirmModal(
            {
                title: i18n('ADMIN.RESOURCE_IMPORTS_ALL_TITLE'),
                content: `
                <p class="mb-4">${i18n('ADMIN.RESOURCE_IMPORTS_ALL_MSG', {
                    count: missing.length,
                })}</p>
                <ul class="list-disc ml-4 text-left px-8 text-sm">${missing
                    .map((_) => `<li>${escapeHtml(_.display_name)}</li>`)
                    .join('')}</ul>
                `,
                icon: { type: 'icon', content: 'publish' },
                confirm_text: 'Import',
            },
            this._dialog,
        );

        if (resp?.reason !== 'done') return;
        resp.loading(i18n('ADMIN.RESOURCE_IMPORTS_ALL_LOADING'));
        let failed = 0;
        await mapLimit(missing, IMPORT_LIMIT, async (resource) => {
            if (!(await this.importResource(resource, false))) failed += 1;
        });
        resp.close();
        if (failed) {
            notifyError(
                i18n('ADMIN.RESOURCE_IMPORTS_ALL_ERROR', { count: failed }),
            );
        }
        if (missing.length > failed) {
            notifySuccess(
                i18n('ADMIN.RESOURCE_IMPORTS_ALL_SUCCESS', {
                    count: missing.length - failed,
                }),
            );
        }
    }

    /**
     * Create a system for the resource.
     * Returns whether the import succeeded.
     */
    public importResource(
        resource: ExternalResource,
        notify = true,
    ): Promise<boolean> {
        // A second call, such as a double click or Import All while a row
        // import runs, gets the result of the import in flight
        const pending = this._importing.get(resource.email);
        if (pending) return pending;
        const run = this._importResource(resource, notify).finally(() =>
            this._importing.delete(resource.email),
        );
        this._importing.set(resource.email, run);
        return run;
    }

    private async _importResource(
        resource: ExternalResource,
        notify: boolean,
    ): Promise<boolean> {
        const domain = this.domain();
        if (!domain) return false;
        // Import All works from a copy of the list. A row import can have
        // finished since then, so read the row as it is now.
        const current = this.resource_list().find(
            (item) => item.email === resource.email,
        );
        if (current?.imported) return true;
        const system = await systems_v7
            .create({
                body: {
                    name: `[${domain.name}] ${resource.display_name}`,
                    email: resource.email,
                    display_name: resource.display_name,
                    capacity: resource.capacity,
                },
            })
            .then(orThrow)
            .catch(async (error) => {
                if (notify) {
                    notifyError(
                        i18n('ADMIN.RESOURCE_IMPORTS_ERROR', {
                            name: resource.display_name,
                            error: await readError(error),
                        }),
                    );
                }
                return null;
            });
        if (!system) return false;
        // Replace the row so the zoneless table updates
        this.resource_list.update((list) =>
            list.map((item) =>
                item.email === resource.email
                    ? { ...item, system_id: system.id, imported: true }
                    : item,
            ),
        );
        if (notify) {
            notifySuccess(
                i18n('ADMIN.RESOURCE_IMPORTS_SUCCESS', {
                    name: resource.display_name,
                }),
            );
        }
        return true;
    }

    /**
     * Load the rooms and check which ones have a system.
     * @param retry From the Retry button. When the rooms load, the button
     * goes, so the heading gets the focus.
     */
    public async loadResourceList(retry = false) {
        // The error, with its Retry button, stays until the rooms load
        if (this.loading()) return;
        // The domains can have failed with the rooms. Then load them again too.
        if (retry && !this.domain()) this.loadDomains();
        this.resource_list.set([]);
        this.loading.set(true);
        // The staff API lists the rooms of the tenant of this domain. It
        // ignored the `limit` and `authority_id` that 6.x sent, so they are gone
        const rooms = await place
            .query({})
            .then(orThrow)
            .catch(async (err) => {
                this.load_error.set(
                    `Failed to load rooms. Error: ${await readError(err)}`,
                );
                return null;
            });
        if (!rooms) {
            this.loading.set(false);
            return;
        }
        const list: ExternalResource[] = rooms.map((_) => ({
            id: _.id || '',
            booking_type: _.bookingType,
            capacity: _.capacity,
            display_name: _.displayName || '',
            email: _.emailAddress || '',
            is_accessible: _.isWheelChairAccessible ?? false,
            nickname: _.nickname || '',
            phone: _.phone || '',
            tags: _.tags || [],
            imported: false,
            system_id: '',
        }));
        const emails = list.map((_) => _.email).filter((_) => _);
        const system_ids = new Map<string, string>();
        try {
            // Send the emails in chunks to keep each URL under common 8 KB limits
            for (let i = 0; i < emails.length; i += EMAIL_CHUNK_SIZE) {
                const systems = await collectPages(
                    systems_v7
                        .findByEmail({
                            in: emails.slice(i, i + EMAIL_CHUNK_SIZE),
                        })
                        .then(orThrowPage),
                );
                for (const system of systems) {
                    const email = system.email?.toLowerCase();
                    if (email && !system_ids.has(email))
                        system_ids.set(email, system.id);
                }
            }
        } catch (err) {
            this.load_error.set(
                `Failed to check imported resources. Error: ${await readError(err)}`,
            );
            // Without the check, every room looks new, and an import would
            // make a second system for a room that has one. Show no rooms.
            this.loading.set(false);
            return;
        }
        for (const resource of list) {
            const system_id = system_ids.get(resource.email.toLowerCase());
            if (system_id) {
                resource.imported = true;
                resource.system_id = system_id;
            }
        }
        this.load_error.set('');
        this.resource_list.set(list);
        this.loading.set(false);
        if (retry)
            refocusIfLost(this._injector, () => this._heading()?.nativeElement);
    }
}
