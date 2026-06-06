import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { del, get } from '@placeos/ts-client';
import { toQueryString } from '../common/api';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { openConfirmModal } from '../overlays/confirm-modal.component';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';

interface BuildJob {
    state: 'pending' | 'running' | 'cancelled' | 'error' | 'done';
    id: string;
    message: string;
    driver: string;
    repo: string;
    branch: string;
    commit: string;
    timestamp: string;
}

function queryBuildJobs(
    q: Record<string, string> = {},
): Promise<{ data: BuildJob[] }> {
    const query = toQueryString(q);
    return get(`/api/build/v1/monitor${query ? '?' + query : ''}`) as Promise<{
        data: BuildJob[];
    }>;
}

function cancelBuildJob(id, q = {}) {
    const query = toQueryString(q);
    return del(`/api/build/v1/cancel/${id}${query ? '?' + query : ''}`);
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
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading()"
                />
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="jobs()"
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
                            name: ' ',
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
                    matRipple
                    class="text-error"
                    [matTooltip]="'ADMIN.BUILD_LIST_REMOVE' | translate"
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
        IconComponent,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
        SimpleTableComponent,
        MatProgressBarModule,
    ],
})
export class PlaceBuildListComponent implements OnInit {
    private _dialog = inject(MatDialog);

    public readonly loading = signal('');
    public readonly hide_job = signal('');
    public readonly last_change = signal<BuildJob>(null);
    public readonly job_list = signal<BuildJob[]>([]);
    public readonly jobs = computed(() => {
        return this.job_list().filter(({ id }) => id !== this.hide_job());
    });

    public ngOnInit() {
        this.loadJobList();
    }

    public async remove(i: BuildJob) {
        const details = await openConfirmModal(
            {
                title: i18n('ADMIN.BUILD_LIST_REMOVE'),
                content: i18n('ADMIN.BUILD_LIST_REMOVE_MSG', {
                    driver: i.driver,
                    repo: i.repo,
                }),
                icon: { type: 'icon', content: 'delete' },
            },
            this._dialog,
        );
        if (!details) return;
        details.loading(i18n('ADMIN.BUILD_LIST_REMOVE_LOADING'));
        const err = await cancelBuildJob(i.id).catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                i18n('ADMIN.BUILD_LIST_REMOVE_ERROR', {
                    error:
                        (err as { statusText?: string; message?: string })
                            .statusText ||
                        (err as { statusText?: string; message?: string })
                            .message ||
                        err,
                }),
            );
        this.last_change.set(null);
        notifySuccess(i18n('ADMIN.BUILD_LIST_REMOVE_SUCCESS'));
        this.hide_job.set(i.id);
    }

    public async loadJobList() {
        this.loading.set('Loading build jobs...');
        const { data }: { data: BuildJob[] } = await queryBuildJobs().catch(
            () => ({ data: [] }),
        );
        this.job_list.set(
            (data || []).sort((a, b) => a.id?.localeCompare(b.id)),
        );
        this.loading.set('');
    }
}
