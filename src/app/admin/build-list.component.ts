import { Dialog } from '@angular/cdk/dialog';
import {
    afterNextRender,
    Component,
    ElementRef,
    inject,
    Injector,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import {
    build_monitor,
    type BuildMonitorState,
    type BuildMonitorTaskStatus,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { AsyncHandler } from '../common/async-handler.class';
import { describeError } from '../common/errors';
import { escapeHtml } from '../common/general';
import { i18n } from '../common/locale.service';
import { confirmAndRun } from '../overlays/confirm-modal.component';
import { ProgressBarComponent } from '../ui/controls/progress-bar.component';
import { TooltipDirective } from '../ui/controls/tooltip.directive';
import { IconComponent } from '../ui/icon.component';
import { SimpleTableComponent } from '../ui/simple-table.component';
import { TranslatePipe } from '../ui/translate.pipe';

type BuildJob = BuildMonitorTaskStatus;

/** Locale key of the label of each job state */
const STATE_LABELS: Record<BuildMonitorState, string> = {
    pending: 'ADMIN.BUILD_LIST_STATE_PENDING',
    running: 'ADMIN.BUILD_LIST_STATE_RUNNING',
    cancelled: 'ADMIN.BUILD_LIST_STATE_CANCELLED',
    error: 'ADMIN.BUILD_LIST_STATE_ERROR',
    done: 'ADMIN.BUILD_LIST_STATE_DONE',
};

/** States of a job that the user can cancel */
const ACTIVE_STATES: readonly BuildMonitorState[] = ['pending', 'running'];

/** States of a finished job. These jobs can have large output */
const FINISHED_STATES: readonly BuildMonitorState[] = [
    'cancelled',
    'error',
    'done',
];

/** Milliseconds between refreshes of the active jobs */
const POLL_INTERVAL_MS = 5 * 1000;

/** Milliseconds between refreshes of the finished jobs */
const FINISHED_POLL_INTERVAL_MS = 60 * 1000;

/** Most jobs to show, so a long job history does not make the table slow */
const MAX_JOBS = 500;

/**
 * Jobs of one state. The server sends a message in place of the list when it
 * has none
 */
async function queryJobsInState(state: BuildMonitorState): Promise<BuildJob[]> {
    const data = await build_monitor.monitor({ state }).then(orThrow);
    return Array.isArray(data) ? [...data] : [];
}

/**
 * Jobs in the given states. The API gives only pending jobs when no state is
 * set, so ask for each state. It waits for all requests to settle, also when
 * one fails, so no request runs after it returns.
 */
async function queryBuildJobs(
    states: readonly BuildMonitorState[],
): Promise<BuildJob[]> {
    const results = await Promise.allSettled(states.map(queryJobsInState));
    const failed = results.find(
        (result): result is PromiseRejectedResult =>
            result.status === 'rejected',
    );
    if (failed) throw failed.reason;
    return results.flatMap((result) =>
        result.status === 'fulfilled' ? result.value : [],
    );
}

/**
 * One list of the jobs, sorted by id. A job can change state between two
 * requests and come back twice: it shows once, in the later state.
 */
function mergeJobs(jobs: readonly BuildJob[]): BuildJob[] {
    const order = Object.keys(STATE_LABELS) as BuildMonitorState[];
    // In the order a job goes through, so a later state wins
    const sorted = [...jobs].sort(
        (a, b) => order.indexOf(a.state) - order.indexOf(b.state),
    );
    const by_id = new Map(sorted.map((job) => [job.id, job]));
    return [...by_id.values()]
        .slice(0, MAX_JOBS)
        .sort((a, b) => a.id?.localeCompare(b.id));
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
            <!-- Gets focus when a refresh removes the focused element -->
            <div
                #job_table
                tabindex="-1"
                class="h-1/2 w-full flex-1 overflow-auto px-4"
            >
                <app-progress-bar
                    mode="indeterminate"
                    class="w-full"
                    [class.invisible]="!loading()"
                />
                @if (load_error()) {
                    <p
                        role="alert"
                        class="px-4 py-2 text-sm text-(--error-text)"
                    >
                        {{
                            'ADMIN.BUILD_LIST_LOAD_ERROR'
                                | translate: { error: load_error() }
                        }}
                    </p>
                }
                <simple-table
                    class="block min-w-5xl text-sm"
                    [data]="job_list()"
                    [columns]="[
                        {
                            key: 'state',
                            name: 'ADMIN.BUILD_LIST_FIELD_STATE' | translate,
                            content: state_template,
                            size: '8rem',
                        },
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
                            name: 'ADMIN.BUILD_LIST_FIELD_OUTPUT' | translate,
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
        <ng-template #state_template let-data="data">
            <div
                class="px-4 py-2"
                [class]="
                    data === 'error' ? 'font-medium text-(--error-text)' : ''
                "
            >
                {{ stateLabel(data) | translate }}
            </div>
        </ng-template>
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
            <div
                class="max-h-48 w-full overflow-auto px-4 py-2 text-xs select-text"
            >
                @if (data) {
                    <span class="whitespace-pre-wrap">{{ data }}</span>
                } @else {
                    <span class="opacity-30">
                        {{ 'COMMON.DESCRIPTION_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #actions_template let-row="row">
            <div class="flex items-center space-x-2 p-2">
                @if (isActive(row)) {
                    <button
                        icon
                        ripple
                        class="text-error"
                        [appTooltip]="'ADMIN.BUILD_LIST_REMOVE' | translate"
                        (click)="remove(row)"
                    >
                        <icon>delete</icon>
                    </button>
                }
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
export class PlaceBuildListComponent extends AsyncHandler implements OnInit {
    private _dialog = inject(Dialog);
    private _injector = inject(Injector);
    private _job_table = viewChild<ElementRef<HTMLElement>>('job_table');
    /** Jobs that are pending or running, from the last refresh */
    private _active_jobs: BuildJob[] = [];
    /** Jobs that have finished, from the last refresh of them */
    private _finished_jobs: BuildJob[] = [];
    /** Whether the next refresh must also load the finished jobs */
    private _finished_stale = true;
    /** Count of jobs cancelled. A refresh that started before a cancel is old */
    private _cancel_count = 0;

    public readonly loading = signal('');
    public readonly job_list = signal<BuildJob[]>([]);
    /** Text of the error of the last refresh, or empty when it loaded */
    public readonly load_error = signal('');

    public ngOnInit() {
        this.loadJobList();
        // Refresh so the user sees when a job changes state
        this.interval('poll', () => this.loadJobList(), POLL_INTERVAL_MS);
        this.interval(
            'poll_finished',
            () => (this._finished_stale = true),
            FINISHED_POLL_INTERVAL_MS,
        );
    }

    /** Locale key of the label of a job state */
    public stateLabel(state: BuildMonitorState) {
        return STATE_LABELS[state] ?? state;
    }

    /** Whether the job has not finished, so the user can cancel it */
    public isActive(job: BuildJob) {
        return ACTIVE_STATES.includes(job.state);
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
        if (!removed) return;
        this._cancel_count++;
        this._active_jobs = this._active_jobs.filter(({ id }) => id !== i.id);
        this._finished_stale = true;
        this.setJobList(this.job_list().filter(({ id }) => id !== i.id));
        // When a refresh is in progress, it loads again after it settles
        this.loadJobList();
    }

    /**
     * Loads the job list. It loads the active jobs each time, and the finished
     * jobs when they are stale or an active job has left the active list.
     * It skips the load while the page is hidden or a load is in progress.
     * A failed load keeps the last list and sets `load_error`.
     */
    public async loadJobList() {
        if (this.loading() || document.hidden) return;
        this.loading.set('Loading build jobs...');
        const cancel_count = this._cancel_count;
        try {
            // Active jobs first: a job that finishes after this query is in
            // the finished query that follows, so it does not disappear
            const active = await queryBuildJobs(ACTIVE_STATES);
            const ids = new Set(active.map(({ id }) => id));
            // A job that left the active list has finished: get its new state
            const load_finished =
                this._finished_stale ||
                this._active_jobs.some(({ id }) => !ids.has(id));
            const finished = load_finished
                ? await queryBuildJobs(FINISHED_STATES)
                : this._finished_jobs;
            // A cancel removed a job that this result can still show as active
            if (cancel_count !== this._cancel_count) return;
            this._active_jobs = active;
            this._finished_jobs = finished;
            if (load_finished) this._finished_stale = false;
            this.setJobList(mergeJobs([...active, ...finished]));
            this.load_error.set('');
        } catch (error) {
            if (cancel_count === this._cancel_count) {
                this.load_error.set(describeError(error));
            }
        } finally {
            this.loading.set('');
            // Load once more for the result that was discarded
            if (cancel_count !== this._cancel_count) this.loadJobList();
        }
    }

    /**
     * Sets the shown jobs. When this removes the focused element, such as the
     * Cancel button of a job that finished, focus moves to the table.
     */
    private setJobList(list: BuildJob[]) {
        const host = this._job_table()?.nativeElement;
        const focused = document.activeElement;
        const had_focus = !!host && host !== focused && host.contains(focused);
        this.job_list.set(list);
        if (!had_focus) return;
        afterNextRender(
            () => {
                if (!focused?.isConnected) host.focus();
            },
            { injector: this._injector },
        );
    }
}
