import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaceDomain, queryDomains, updateDomain } from '@placeos/ts-client';
import { first, map } from 'rxjs/operators';
import { notifyError } from 'src/app/common/notifications';
import { ApplicationIcon } from 'src/app/common/types';
import {
    ConfirmModalComponent,
    ConfirmModalData,
} from 'src/app/overlays/confirm-modal/confirm-modal.component';
import { ExtensionModalComponent } from './extension-modal/extension-modal.component';

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
    templateUrl: './extensions.component.html',
    styleUrls: ['./extensions.component.scss'],
})
export class PlaceExtensionsComponent implements OnInit {
    /** Loading state */
    public loading: string = '';
    /** List of available domains */
    public domain_list: PlaceDomain[];
    /** Currently active domain */
    public domain: PlaceDomain;
    /** List of extension available on the current domain */
    public extension_list: BackofficeExtension[] = [];

    constructor(private _dialog: MatDialog) {}

    public async ngOnInit() {
        this.loading = 'Loading domains...';
        this.domain_list = await queryDomains()
            .pipe(map((r) => r.data))
            .toPromise();
        this.setDomain(this.domain_list[0]);
        this.loading = '';
    }

    public setDomain(domain: PlaceDomain) {
        this.domain = domain;
        const config = this.domain.config?.backoffice?.extend || {};
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
        this.extension_list = extensions;
        this.extension_list.sort(
            (a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name)
        );
    }

    public editExtension(item?: BackofficeExtension) {
        const ref = this._dialog.open(ExtensionModalComponent, {
            data: { item: item ? JSON.parse(JSON.stringify(item)) : undefined },
        });
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(async (event) => {
                ref.componentInstance.loading = true;
                if (item) {
                    this.extension_list = this.extension_list.filter((i) => i !== item);
                }
                this.extension_list.push(event.metadata);
                await this.updateDomain();
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
                    icon: { class: 'backoffice-trash' },
                },
            }
        );
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(async _ => {
                ref.componentInstance.loading = 'Removing extension...';
                this.extension_list = this.extension_list.filter((i) => i !== item);
                await this.updateDomain().catch((e) =>
                    notifyError(`Error removing extension: ${e}`)
                );
                ref.componentInstance.loading = '';
                ref.close();
            });
    }

    public async updateDomain() {
        const extensions = {};
        for (const ext of this.extension_list) {
            if (!extensions[ext.type]) {
                extensions[ext.type] = {};
            }
            const data = { ...ext };
            delete data.type;
            delete data.name;
            extensions[ext.type][ext.name] = data;
        }
        const updated = new PlaceDomain({
            ...this.domain,
            config: {
                ...this.domain.config,
                backoffice: {
                    ...(this.domain.config.backoffice || {}),
                    extend: extensions,
                },
            },
        });
        const domain = await updateDomain(this.domain.id, updated).toPromise();
        this.setDomain(domain);
    }
}
