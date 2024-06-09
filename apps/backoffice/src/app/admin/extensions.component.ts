import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    PlaceDomain,
    authority,
    queryDomains,
    updateDomain,
} from '@placeos/ts-client';
import {
    debounceTime,
    first,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import { ApplicationIcon } from 'apps/backoffice/src/app/common/types';
import {
    ConfirmModalComponent,
    ConfirmModalData,
} from 'apps/backoffice/src/app/overlays/confirm-modal.component';
import { ExtensionModalComponent } from './extension-modal/extension-modal.component';
import { BehaviorSubject, combineLatest } from 'rxjs';

export interface BackofficeExtension {
    /** Section of backoffice to extend */
    type:
        | 'admin'
        | 'systems'
        | 'modules'
        | 'zones'
        | 'drivers'
        | 'repositories'
        | 'triggers'
        | 'users'
        | 'domains';
    /** Display name of the extension */
    name: string;
    /** URL to the application to embed */
    url: string;
    /** Conditions for showing the extension */
    conditions: [string, string, any][];
    /** Icon to display next to the name */
    icon: ApplicationIcon;
}

@Component({
    selector: '[app-extensions]',
    template: `
        <div class="flex flex-col h-full w-full">
            <div class="flex items-center justify-between space-x-2 my-4">
                <div class="text-2xl">Extensions</div>
                <div class="flex items-center space-x-2">
                    <mat-form-field appearance="outline" class="h-12">
                        <mat-select
                            name="type"
                            [ngModel]="domain.getValue()"
                            (ngModelChange)="setDomain($event)"
                            placeholder="Select Domain..."
                        >
                            <mat-option
                                *ngFor="let domain of domain_list"
                                [value]="domain"
                            >
                                {{ domain.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                    <button btn matRipple (click)="editExtension()">
                        Add Extension
                    </button>
                </div>
            </div>
            <div
                class="bg-info mb-4 p-4 flex items-center rounded shadow space-x-4 text-sm text-info-content"
            >
                <p>
                    <strong>Note:</strong> Backoffice requires a full page
                    refresh for extension changes and additions to apply
                </p>
            </div>
            <div class="flex-1 w-full h-1/2 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading"
                ></mat-progress-bar>
                <simple-table
                    class="min-w-[40rem] block text-sm"
                    [data]="extensions"
                    [columns]="[
                        {
                            key: 'type',
                            name: 'Type',
                            content: type_template,
                            size: '5rem'
                        },
                        { key: 'name', name: 'Tab Name', size: '10rem' },
                        { key: 'url', name: 'URL', content: url_template },
                        {
                            key: 'conditions',
                            name: 'Checks',
                            content: conditions_template,
                            size: '6rem'
                        },
                        {
                            key: 'actions',
                            name: ' ',
                            size: '6rem',
                            content: actions_template,
                            sortable: false
                        }
                    ]"
                    [sortable]="true"
                    empty_message="No extensions configured for this domain"
                ></simple-table>
                <ng-template #type_template let-row="row">
                    <div class="p-4 uppercase font-mono text-xs">
                        {{ row.type }}
                    </div>
                </ng-template>
                <ng-template #url_template let-row="row">
                    <a
                        class="truncate p-4 underline"
                        [href]="row.url | safe: 'url'"
                    >
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
                        <button icon matRipple (click)="editExtension(row)">
                            <app-icon>edit</app-icon>
                        </button>
                        <button icon matRipple (click)="removeExtension(row)">
                            <app-icon class="text-error">delete</app-icon>
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
})
export class PlaceExtensionsComponent implements OnInit {
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list: PlaceDomain[];

    public readonly domain = new BehaviorSubject<PlaceDomain>(null);

    private _change = new BehaviorSubject<number>(0);

    public extensions = combineLatest([this.domain, this._change]).pipe(
        debounceTime(300),
        map(([domain]) => {
            if (!domain) return [];
            const config = domain.config?.backoffice?.extend || {};
            const extensions: BackofficeExtension[] = [];
            for (const type in config) {
                if (!config[type]) {
                    continue;
                }
                for (const name in config[type]) {
                    if (!config[type][name]) {
                        continue;
                    }
                    extensions.push({
                        ...config[type][name],
                        name,
                        type,
                    });
                }
            }
            extensions.sort(
                (a, b) =>
                    a.type.localeCompare(b.type) || a.name.localeCompare(b.name)
            );
            return extensions;
        }),
        shareReplay(1)
    );

    constructor(private _dialog: MatDialog) {}

    public async ngOnInit() {
        this.loading = 'Loading domains...';
        this.domain_list = await queryDomains()
            .pipe(map((r) => r.data))
            .toPromise();
        const domain = authority();
        if (!this.domain_list?.length) return;
        const match = this.domain_list.find((d) => d.id === domain.id);
        if (match) this.setDomain(match);
        this.loading = '';
    }

    public setDomain(domain: PlaceDomain) {
        this.domain.next(domain);
    }

    public editExtension(item?: BackofficeExtension) {
        const ref = this._dialog.open(ExtensionModalComponent, {
            data: { item: item ? JSON.parse(JSON.stringify(item)) : undefined },
        });
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(async (event) => {
                ref.componentInstance.loading = true;
                let ext_list = await this.extensions.pipe(take(1)).toPromise();
                ext_list = ext_list.filter((i) => i.name !== item.name);
                ext_list.push(event.metadata);
                await this.updateDomain(ext_list);
                ref.componentInstance.loading = false;
                ref.close();
            });
    }

    public async removeExtension(item: BackofficeExtension) {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                data: {
                    title: 'Remove extension',
                    content: `Are you sure you want to remove the extension "${item.name}" from ${item.type}?`,
                    icon: { content: 'delete' },
                },
            }
        );
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(async (_) => {
                ref.componentInstance.loading = 'Removing extension...';
                let ext_list = await this.extensions.pipe(take(1)).toPromise();
                ext_list = ext_list.filter((i) => i.name !== item.name);
                await this.updateDomain(ext_list).catch((e) =>
                    notifyError(`Error removing extension: ${e}`)
                );
                ref.componentInstance.loading = '';
                ref.close();
            });
    }

    public async updateDomain(extension_list: BackofficeExtension[]) {
        const domain = await this.domain.pipe(take(1)).toPromise();
        if (!domain) return;
        const extensions = {};
        for (const ext of extension_list) {
            if (!extensions[ext.type]) {
                extensions[ext.type] = {};
            }
            const data = { ...ext };
            delete data.type;
            delete data.name;
            extensions[ext.type][ext.name] = data;
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
        const new_domain = await updateDomain(domain.id, updated).toPromise();
        this.setDomain(new_domain);
    }
}
