import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, OnInit, signal } from '@angular/core';
import { build_monitor, type BuildMonitorTaskStatus } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { escapeHtml } from '../common/general';
import { i18n } from '../common/locale.service';
import { confirmAndRun } from '../overlays/confirm-modal.component';
import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';

type BuildJob = BuildMonitorTaskStatus;

/** Build jobs. The server sends a message in place of the list when it has none */
async function queryBuildJobs(): Promise<BuildJob[]> {
    const data = await build_monitor.monitor().then(orThrow);
    return Array.isArray(data) ? [...data] : [];
}

function cancelBuildJob(job: string) {
    return build_monitor.cancel({ job }).then(orThrow);
}

@Component({
    selector: '[admin-build-list]',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2 px-4">
                <div class="text-2xl">
                    {{ 'ADMIN.BUILD_LIST_HEADER' | translate }}
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto px-4">
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="job_list()"
                    [columns]="[
                        {
                            key: 'repo',
                            name: 'REPOS.SINGULAR' | translate,
                            content: repo_template,
                        },
                        {
                            key: 'driver',
                            name: 'DRIVERS.SINGULAR' | translate,
                            content: driver_template,
                        },
                        {
                            key: 'message',
                            name: 'COMMON.FIELD_DESCRIPTION' | translate,
                            size: '32rem',
                            content: description_template,
                        },
                        {
                            key: 'actions',
                            name: 'COMMON.ACTIONS' | translate,
                            hide_name: true,
                            content: actions_template,
                            size: '3.5rem',
                            sortable: false,
                        },
                    ]"
                    [sortable]="true"
                    [empty_message]="'ADMIN.BUILD_LIST_EMPTY' | translate"
                />
            </div>
        </div>
        <ng-template #repo_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.repo }}</div>
                <div class="text-xs opacity-30">{{ row.branch }}</div>
            </div>
        </ng-template>
        <ng-template #driver_template let-row="row">
            <div class="flex flex-col px-4 py-2">
                <div>{{ row.driver }}</div>
                <div class="text-xs opacity-30">{{ row.commit }}</div>
            </div>
        </ng-template>
        <ng-template #description_template let-data="data">
            <div class="w-full overflow-hidden px-4 py-2 text-xs select-text">
                {{ data }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                <button
                    icon
                    ripple
                    class="text-error"
                    [appTooltip]="'ADMIN.BUILD_LIST_REMOVE' | translate"
                    (click)="remove(row)"
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                min-height: 10rem;
            }
        `,
    ],
    imports: [
        ProgressBarComponent,
        TooltipDirective,
        IconComponent,
        TranslatePipe,
        SimpleTableComponent,
    ],
})
export class PlaceBuildListComponent implements OnInit {
    private _dialog = inject(Dialog);

    public readonly loading = signal('');
    public readonly job_list = signal<BuildJob[]>([]);

    public ngOnInit() {
        this.loadJobList();
    }

    public async remove(i: BuildJob) {
        const removed = await confirmAndRun(
            this._dialog,
            {
                title: i18n('ADMIN.BUILD_LIST_REMOVE'),
                content: i18n('ADMIN.BUILD_LIST_REMOVE_MSG', {
                    driver: escapeHtml(i.driver),
                    repo: escapeHtml(i.repo),
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            {
                loading: i18n('ADMIN.BUILD_LIST_REMOVE_LOADING'),
                action: () => cancelBuildJob(i.id),
                error: (error) =>
                    i18n('ADMIN.BUILD_LIST_REMOVE_ERROR', { error }),
                success: i18n('ADMIN.BUILD_LIST_REMOVE_SUCCESS'),
            },
        );
        if (removed) {
            this.job_list.update((list) =>
                list.filter(({ id }) => id !== i.id),
            );
        }
    }

    public async loadJobList() {
        this.loading.set('Loading build jobs...');
        const data = await queryBuildJobs().catch((): BuildJob[] => []);
        this.job_list.set(data.sort((a, b) => a.id?.localeCompare(b.id)));
        this.loading.set('');
    }
}
