import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceDomain, updateDomain } from '@placeos/ts-client';
import { readError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { notifyError } from '../common/notifications';
import { waitForEvent } from '../common/signals';
import {
    AppComponentExtension,
    AppComponentExtensions,
    DialogEvent,
    ExtensionSection,
} from '../common/types';
import { confirmAndRun } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { LoadingLabelDirective } from '../ui/loading-label.directive';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';
import { AdminDomainSelectComponent } from './admin-domain-select.component';
import { ExtensionModalComponent } from './extension-modal/extension-modal.component';

/** Extension from the domain config, with the keys it is stored under */
export interface BackofficeExtension extends AppComponentExtension {
    /** Section of backoffice to extend */
    type: ExtensionSection;
    /** Display name of the extension */
    name: string;
}

/** Extensions are keyed by type and name, so the same name can exist in each type */
const isSameExtension = (a: BackofficeExtension, b?: BackofficeExtension) =>
    a.type === b?.type && a.name === b?.name;

@Component({
    selector: '[app-extensions]',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.EXTENSIONS_HEADER' | translate }}
                </div>
                <div class="flex items-center space-x-2">
                    <admin-domain-select key="extensions" field_class="h-12" />
                    <button
                        icon
                        default
                        matRipple
                        class="text-xl"
                        (click)="editExtension()"
                        [matTooltip]="'ADMIN.EXTENSIONS_ADD' | translate"
                        [attr.aria-label]="'ADMIN.EXTENSIONS_ADD' | translate"
                    >
                        <icon>add</icon>
                    </button>
                </div>
            </div>
            <div
                class="bg-info text-info-content mx-4 mb-4 flex items-center space-x-4 rounded-sm p-4 text-sm shadow-sm"
            >
                <p>{{ 'ADMIN.EXTENSIONS_NOTICE' | translate }}</p>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-4xl text-sm"
                    [data]="extensions()"
                    [columns]="[
                        {
                            key: 'type',
                            name: 'ADMIN.EXTENSIONS_FIELD_TYPE' | translate,
                            content: type_template,
                            size: '5rem',
                        },
                        {
                            key: 'name',
                            name: 'ADMIN.EXTENSIONS_FIELD_TAB' | translate,
                            size: '10rem',
                        },
                        {
                            key: 'url',
                            name: 'ADMIN.EXTENSIONS_FIELD_URL' | translate,
                            content: url_template,
                        },
                        {
                            key: 'conditions',
                            name: 'ADMIN.EXTENSIONS_FIELD_CHECKS' | translate,
                            content: conditions_template,
                            size: '6rem',
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            size: '6rem',
                            content: actions_template,
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.EXTENSIONS_LIST_EMPTY' | translate"
                />
                <ng-template #type_template let-row="row">
                    <div class="p-4 font-mono text-xs uppercase">
                        {{ row.type }}
                    </div>
                </ng-template>
                <ng-template #url_template let-row="row">
                    <a class="truncate p-4 underline" [href]="row.url">
                        {{ row.url }}
                    </a>
                </ng-template>
                <ng-template #conditions_template let-row="row">
                    <div class="p-4">
                        {{ row.conditions.length }}
                    </div>
                </ng-template>
                <ng-template #actions_template let-row="row">
                    <div class="flex items-center space-x-2 p-2">
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="'ADMIN.EXTENSIONS_EDIT' | translate"
                            (click)="editExtension(row)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            default
                            error
                            matRipple
                            [matTooltip]="'ADMIN.EXTENSIONS_REMOVE' | translate"
                            (click)="removeExtension(row)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                </ng-template>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        AdminDomainSelectComponent,
        LoadingLabelDirective,
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        SimpleTableComponent,
        MatProgressBarModule,
    ],
})
export class PlaceExtensionsComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _admin_data = inject(AdminDataService);

    public readonly changed = signal(0);
    /** Loading state */
    public readonly loading = signal('');
    /** List of available domains */
    public readonly domain = this._admin_data.selectedDomain('extensions');

    public readonly extensions = computed(() => {
        if (!this.domain()) return [];
        const config = this.domain().config?.backoffice?.extend || {};
        const extensions: BackofficeExtension[] = [];
        for (const type in config) {
            if (!config[type]) {
                continue;
            }
            for (const name in config[type]) {
                if (!config[type][name]) continue;
                extensions.push({
                    ...config[type][name],
                    name,
                    type,
                });
            }
        }
        extensions.sort(
            (a, b) =>
                a.type.localeCompare(b.type) || a.name.localeCompare(b.name),
        );
        return extensions;
    });

    public async ngOnInit() {
        this.loading.set('Loading domains...');
        await this._admin_data.selectDefaultDomain('extensions');
        this.loading.set('');
    }

    public editExtension(item?: BackofficeExtension) {
        const ref = this._dialog.open(ExtensionModalComponent, {
            data: { item: item ? JSON.parse(JSON.stringify(item)) : undefined },
        });
        waitForEvent(
            ref.componentInstance.event,
            (__: DialogEvent) => __.reason === 'done',
        ).then(async (event) => {
            ref.componentInstance.loading.set('Saving backoffice extension...');
            let ext_list = this.extensions() || [];
            ext_list = ext_list.filter((i) => !isSameExtension(i, item));
            ext_list.push(event.metadata as BackofficeExtension);
            try {
                await this.updateDomain(ext_list);
            } catch (err) {
                ref.componentInstance.loading.set('');
                return notifyError(
                    `Error saving extension: ${await readError(err)}`,
                );
            }
            ref.componentInstance.loading.set('');
            ref.close();
        });
    }

    public async removeExtension(item: BackofficeExtension) {
        await confirmAndRun(
            this._dialog,
            {
                title: 'Remove extension',
                content: `Are you sure you want to remove the extension "${escapeHtml(item.name)}" from ${escapeHtml(item.type)}?`,
                icon: { content: 'delete' },
            },
            {
                loading: 'Removing extension...',
                action: () =>
                    this.updateDomain(
                        this.extensions().filter(
                            (i) => !isSameExtension(i, item),
                        ),
                    ),
                error: (reason) => `Error removing extension: ${reason}`,
            },
        );
    }

    public async updateDomain(extension_list: BackofficeExtension[]) {
        const domain = this.domain();
        if (!domain) return;
        const extensions: Partial<
            Record<ExtensionSection, AppComponentExtensions>
        > = {};
        for (const { type, name, ...data } of extension_list) {
            extensions[type] = { ...extensions[type], [name]: data };
        }
        const updated = new PlaceDomain({
            ...domain,
            config: {
                ...domain.config,
                backoffice: {
                    ...(domain.config.backoffice || {}),
                    extend: extensions,
                },
            },
        });
        const new_domain = await updateDomain(domain.id, updated);
        this._admin_data.replaceDomain(new_domain);
    }
}
