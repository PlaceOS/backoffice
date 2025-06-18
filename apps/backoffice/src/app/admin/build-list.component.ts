import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { del, get, PlaceEdge } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    startWith,
    switchMap,
} from 'rxjs/operators';
import { toQueryString } from '../common/api';
import { openConfirmModal } from '../common/general';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';

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

function queryBuildJobs(q: any = {}): Observable<BuildJob> {
    const query = toQueryString(q);
    return get(`/api/build/v1/monitor${query ? '?' + query : ''}`) as any;
}

function cancelBuildJob(id, q = {}) {
    const query = toQueryString(q);
    return del(`/api/build/v1/cancel/${id}${query ? '?' + query : ''}`);
}

@Component({
    selector: '[admin-build-list]',
    template: `
        <div class="flex h-full w-full flex-col">
            <div class="my-4 flex items-center justify-between space-x-2">
                <div class="text-2xl">
                    {{ 'ADMIN.BUILD_LIST_HEADER' | translate }}
                </div>
            </div>
            <div class="h-1/2 w-full flex-1 overflow-auto">
                <mat-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.opacity-0]="!loading"
                ></mat-progress-bar>
                <simple-table
                    class="block min-w-[64rem] text-sm"
                    [data]="jobs"
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
                ></simple-table>
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
            <div class="w-full select-text overflow-hidden px-4 py-2 text-xs">
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
                    <app-icon>delete</app-icon>
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
    standalone: false,
})
export class PlaceBuildListComponent {
    private _dialog = inject(MatDialog);

    public loading = '';

    private _change = new BehaviorSubject<number>(0);
    private _hide = new BehaviorSubject<string>('');
    public last_change = new BehaviorSubject<PlaceEdge>(null);

    public get item() {
        return this.last_change.getValue();
    }

    private _job_list: Observable<PlaceEdge[]> = this._change.pipe(
        debounceTime(300),
        switchMap((_) => {
            this.loading = 'Loading Edges...';
            return queryBuildJobs();
        }),
        catchError((_) => of({})),
        map((details?: { data: PlaceEdge[] }) => {
            this.loading = '';
            return (details?.data || []).sort((a, b) =>
                a.id?.localeCompare(b.id),
            );
        }),
        startWith([]),
        shareReplay(1),
    );

    public readonly jobs = combineLatest([this._job_list, this._hide]).pipe(
        debounceTime(500),
        map(([list, hide]) => {
            if (!hide) return list;
            const edges = list.filter((_) => _.id !== hide);
            return edges.sort((a, b) => a.id?.localeCompare(b.id));
        }),
    );

    public readonly remove = async (i: BuildJob) => {
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
        const err = await cancelBuildJob(i.id)
            .toPromise()
            .catch((_) => _);
        details.close();
        if (err)
            return notifyError(
                i18n('ADMIN.BUILD_LIST_REMOVE_ERROR', {
                    error: err.statusText || err.message || err,
                }),
            );
        this.last_change.next(null);
        notifySuccess(i18n('ADMIN.BUILD_LIST_REMOVE_SUCCESS'));
        this._hide.next(i.id);
    };
}
