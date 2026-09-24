import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import {
    listRepositoryFiles,
    PlaceRepository,
    PlaceRepositoryType,
    queryRepositories,
    SignagePlugin,
} from '@placeos/ts-client';

import { AsyncHandler } from '../../common/async-handler.class';
import { i18n } from '../../common/locale.service';
import { notifyError } from '../../common/notifications';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { PluginLoadedPayload } from './signage-plugin-embed.component';
import {
    forEachWithLimit,
    probeSignagePlugin,
} from './signage-plugins.utilities';

/** Number of plugin files loaded at the same time */
const PROBE_LIMIT = 6;

interface PluginProbe {
    uri: string;
    status: 'loading' | 'valid' | 'invalid';
    details?: PluginLoadedPayload;
}

/**
 * Wizard to find the plugins in an interface repository.
 * Closes with the selected plugin (name, URI and type) as `SignagePlugin`,
 * or `undefined` when cancelled.
 */
@Component({
    selector: 'signage-plugin-import-modal',
    template: `
        <div
            class="bg-base-200 mx-2 mt-2 flex items-center justify-between rounded-sm px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'ADMIN.SIGNAGE_PLUGINS_IMPORT' | translate }}
            </h3>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </div>
        <main
            class="flex h-[65vh] w-lg max-w-[calc(100vw-2rem)] flex-col px-4 pt-4"
        >
            <mat-form-field appearance="outline" class="w-full">
                <mat-select
                    [placeholder]="
                        'ADMIN.SIGNAGE_PLUGINS_IMPORT_REPOSITORY' | translate
                    "
                    [value]="repository_id()"
                    (valueChange)="selectRepository($event)"
                >
                    @for (repo of repositories(); track repo.id) {
                        <mat-option [value]="repo.id">
                            {{ repo.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-progress-bar
                [mode]="loading_files() ? 'indeterminate' : 'determinate'"
                [value]="progress()"
                [class.opacity-0]="!loading_files() && progress() >= 100"
            />
            <div class="flex-1 space-y-2 overflow-auto py-2">
                @for (probe of plugins(); track probe.uri) {
                    <button
                        matRipple
                        class="border-base-300 hover:bg-base-200 flex w-full items-center gap-4 rounded-sm border px-4 py-2 text-left"
                        (click)="selectPlugin(probe)"
                    >
                        <div class="min-w-0 flex-1">
                            <div class="truncate font-medium">
                                {{ probe.details.plugin.name }}
                            </div>
                            <div class="truncate font-mono text-xs opacity-60">
                                {{ probe.uri }}
                            </div>
                        </div>
                        <div class="text-xs uppercase opacity-60">
                            {{ probe.details.plugin.type }}
                        </div>
                        <icon class="text-xl">chevron_right</icon>
                    </button>
                } @empty {
                    <div
                        class="bg-base-200 rounded-sm p-8 text-center text-sm opacity-60"
                    >
                        {{ empty_message() | translate }}
                    </div>
                }
            </div>
        </main>
    `,
    styles: [``],
    imports: [
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSelectModule,
        TranslatePipe,
    ],
})
export class SignagePluginImportModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog_ref =
        inject<MatDialogRef<SignagePluginImportModalComponent, SignagePlugin>>(
            MatDialogRef,
        );

    public readonly repositories = signal<PlaceRepository[]>([]);
    public readonly repository_id = signal('');
    public readonly loading_files = signal(false);
    public readonly probes = signal<PluginProbe[]>([]);
    public readonly plugins = computed(() =>
        this.probes().filter((probe) => probe.status === 'valid'),
    );
    public readonly progress = computed(() => {
        const probes = this.probes();
        if (!probes.length) return 100;
        const done = probes.filter((_) => _.status !== 'loading').length;
        return (done / probes.length) * 100;
    });
    public readonly empty_message = computed(() => {
        if (!this.repository_id())
            return 'ADMIN.SIGNAGE_PLUGINS_IMPORT_SELECT_REPOSITORY';
        if (this.loading_files() || this.progress() < 100)
            return 'ADMIN.SIGNAGE_PLUGINS_IMPORT_SEARCHING';
        return 'ADMIN.SIGNAGE_PLUGINS_IMPORT_EMPTY';
    });

    public async ngOnInit() {
        try {
            const { data } = await queryRepositories({ limit: 1000 });
            this.repositories.set(
                data.filter(
                    (repo) => repo.repo_type === PlaceRepositoryType.Interface,
                ),
            );
        } catch (err) {
            this._notifyError(err);
        }
    }

    /** Find the HTML files in the repository and check which are plugins */
    public async selectRepository(id: string) {
        const controller = new AbortController();
        // Replacing the subscription aborts the probes of the previous repository
        this.subscription('probes', () => controller.abort());
        this.repository_id.set(id);
        this.probes.set([]);
        this.loading_files.set(true);
        let files: string[] = [];
        try {
            files = await listRepositoryFiles(id, { pattern: '*.html' });
        } catch (err) {
            if (!controller.signal.aborted) this._notifyError(err);
        }
        if (controller.signal.aborted) return;
        this.loading_files.set(false);
        this.probes.set(files.map((uri) => ({ uri, status: 'loading' })));
        await forEachWithLimit(files, PROBE_LIMIT, async (uri) => {
            const details = await probeSignagePlugin(uri, {
                signal: controller.signal,
            });
            if (controller.signal.aborted) return;
            this.probes.update((list) =>
                list.map((probe) =>
                    probe.uri === uri
                        ? {
                              uri,
                              details,
                              status: details ? 'valid' : 'invalid',
                          }
                        : probe,
                ),
            );
        });
    }

    public selectPlugin(probe: PluginProbe) {
        this._dialog_ref.close(
            new SignagePlugin({
                name: probe.details.plugin.name,
                uri: probe.uri,
                plugin_type: probe.details.plugin.type,
            }),
        );
    }

    private _notifyError(err: { response?: unknown; message?: string }) {
        notifyError(
            i18n('ADMIN.SIGNAGE_PLUGINS_IMPORT_ERROR', {
                error: JSON.stringify(err.response || err.message || err),
            }),
        );
    }
}
