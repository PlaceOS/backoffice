import { DatePipe } from '@angular/common';
import {
    Component,
    computed,
    input,
    OnChanges,
    output,
    signal,
    SimpleChanges,
} from '@angular/core';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
import {
    GitCommitDetails,
    listRepositoryCommits,
    listRepositoryDriverDetails,
    listRepositoryDrivers,
    PlaceDriverRole,
    PlaceRepositoryType,
    queryRepositories,
    showRepository,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { format, isAfter, subMinutes } from 'date-fns';
import { BehaviorSubject, combineLatest, lastValueFrom, of } from 'rxjs';
import {
    catchError,
    distinctUntilChanged,
    distinctUntilKeyChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import * as yaml from 'js-yaml';
import { nextValueFrom } from '../../../common/general';
import { notifyError } from '../../../common/notifications';

@Component({
    selector: 'driver-form',
    template: `
        @if (!is_editing()) {
            <label for="repos">{{ 'REPOS.SINGULAR' | translate }}</label>
            <item-search-field
                [placeholder]="'REPOS.SEARCH' | translate"
                [options]="repo_list | async"
                [loading]="loading_type().includes('repository')"
                [ngModel]="repo.getValue()"
                (ngModelChange)="
                    repo.next($event); driver.next(null); commit.next(null)
                "
            />
            @if (repo | async) {
                <label for="driver">{{ 'DRIVERS.BASE' | translate }}</label>
                <item-search-field
                    [placeholder]="'DRIVERS.SEARCH' | translate"
                    [options]="driver_list | async"
                    [loading]="loading_type().includes('drivers')"
                    [ngModel]="driver.getValue()"
                    (ngModelChange)="driver.next($event); commit.next(null)"
                />
            }
        }
        @if (driver | async) {
            <label for="commit">{{ 'DRIVERS.COMMIT' | translate }}</label>
            <item-search-field
                [placeholder]="'DRIVERS.COMMIT_SEARCH' | translate"
                [options]="commit_list | async"
                [loading]="loading_type().includes('commits')"
                [ngModel]="commit.getValue()"
                (ngModelChange)="commit.next($event); applyDriverCommit($event)"
            />
        }
        @if ((commit | async) && !loading() && form().controls.id) {
            <div class="flex flex-col" [formGroup]="form()">
                <label for="driver-name" [class.error]="fieldInvalid('name')">
                    {{ 'COMMON.FIELD_NAME' | translate }}
                    <span required>*</span>
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="driver-name"
                        [placeholder]="'COMMON.FIELD_NAME' | translate"
                        formControlName="name"
                        required
                    />
                    <mat-error>
                        {{ 'DRIVERS.NAME_REQUIRED' | translate }}
                    </mat-error>
                </mat-form-field>
                <div class="flex space-x-4">
                    @if (!is_editing) {
                        <div class="flex flex-1 flex-col">
                            <label for="role">
                                {{ 'DRIVERS.ROLE' | translate }}
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-select name="role" formControlName="role">
                                    @for (type of role_types; track type) {
                                        <mat-option [value]="type.id">
                                            {{ type.name | translate }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }
                    <div class="flex flex-1 flex-col">
                        <label
                            for="module-name"
                            [class.error]="fieldInvalid('module_name')"
                        >
                            {{ 'DRIVERS.MODULE_NAME' | translate }}
                            <span required>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="module-name"
                                [placeholder]="
                                    'DRIVERS.MODULE_NAME' | translate
                                "
                                formControlName="module_name"
                                required
                            />
                            <mat-error>
                                {{ 'DRIVERS.MODULE_NAME_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                </div>
                <label for="description">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        [placeholder]="'COMMON.FIELD_DESCRIPTION' | translate"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
                <label for="default-uri">{{
                    'DRIVERS.DEFAULT_URI' | translate
                }}</label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="default-uri"
                        [placeholder]="'DRIVERS.DEFAULT_URI' | translate"
                        formControlName="default_uri"
                    />
                </mat-form-field>
                <div class="flex items-center space-x-4">
                    <div class="flex flex-1 flex-col">
                        <label
                            for="default-port"
                            [class.error]="fieldInvalid('default_port')"
                        >
                            {{ 'DRIVERS.DEFAULT_PORT' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="default-port"
                                type="number"
                                [placeholder]="
                                    'DRIVERS.DEFAULT_PORT' | translate
                                "
                                formControlName="default_port"
                            />
                            <mat-error>
                                {{ 'MODULES.PORT_REQUIRED' | translate }}
                            </mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <div class="h-1 w-full"></div>
                        <settings-toggle
                            class="w-full"
                            [name]="'MODULES.IGNORE_CONNECTED' | translate"
                            formControlName="ignore_connected"
                        ></settings-toggle>
                    </div>
                </div>
            </div>
        }
        <!-- Form fields go here -->
        @if (loading()) {
            <div
                class="flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-base-200 px-8 py-16"
            >
                <mat-spinner [diameter]="32" />
                <p>{{ loading() | translate }}</p>
            </div>
        }
    `,
    styles: [``],
    standalone: false,
})
export class DriverFormComponent extends AsyncHandler implements OnChanges {
    private _date_pipe = new DatePipe('en');
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(new FormGroup({}));
    public readonly is_editing = computed(() => !!this.form().value.id);
    public readonly waiting = output<boolean>();
    public readonly loading = signal('');
    public readonly loading_type = signal([]);
    public readonly role_types = [
        { id: PlaceDriverRole.SSH, name: 'DRIVERS.SSH' },
        { id: PlaceDriverRole.Device, name: 'DRIVERS.DEVICE' },
        { id: PlaceDriverRole.Service, name: 'DRIVERS.SERVICE' },
        { id: PlaceDriverRole.Websocket, name: 'DRIVERS.WEBSOCKET' },
        { id: PlaceDriverRole.Logic, name: 'DRIVERS.LOGIC' },
    ];

    public readonly repo = new BehaviorSubject(null);
    public readonly driver = new BehaviorSubject(null);
    public readonly commit = new BehaviorSubject(null);

    public readonly repo_list = queryRepositories({ limit: 1000 }).pipe(
        map(({ data }) =>
            data.filter((repo) => repo.type === PlaceRepositoryType.Driver),
        ),
        shareReplay(1),
    );

    public readonly driver_list = this.repo.pipe(
        filter((item) => !!item?.id),
        distinctUntilKeyChanged('id'),
        tap(() => this.loading_type.update((types) => [...types, 'drivers'])),
        switchMap(({ id }) =>
            listRepositoryDrivers(id, { limit: 1000 }).pipe(
                catchError(() => of([] as string[])),
            ),
        ),
        map((list) =>
            list.map((_) => ({
                id: _,
                name: _.replace(/\//g, ' > '),
            })),
        ),
        tap(() =>
            this.loading_type.update((types) =>
                types.filter((_) => _ !== 'drivers'),
            ),
        ),
        shareReplay(1),
    );

    public readonly commit_list = combineLatest([this.repo, this.driver]).pipe(
        filter(([repo, driver]) => !!repo?.id && !!driver?.id),
        distinctUntilChanged(
            ([prev_repo, prev_driver], [curr_repo, curr_driver]) =>
                prev_repo?.id === curr_repo?.id &&
                prev_driver?.id === curr_driver?.id,
        ),
        tap(() => this.loading_type.update((types) => [...types, 'commits'])),
        switchMap(([{ id }, driver]) =>
            listRepositoryCommits(id, { driver: driver.id, limit: 1000 }).pipe(
                catchError(() => of([] as GitCommitDetails[])),
            ),
        ),
        map((list) =>
            list.map((item) => ({
                id: item.commit,
                name: `${item.subject}`,
                extra: isAfter(item.date, subMinutes(item.date, 1))
                    ? this._date_pipe.transform(item.date.valueOf())
                    : format(item.date, 'dd MMM yyyy'),
            })),
        ),
        tap(() =>
            this.loading_type.update((types) =>
                types.filter((_) => _ !== 'commits'),
            ),
        ),
        shareReplay(1),
    );

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.form && this.form()) {
            this._loadDetailsFromForm();
        }
    }

    public fieldInvalid(field: string) {
        return (
            this.form().controls[field].invalid &&
            this.form().controls[field].touched
        );
    }

    public async applyDriverCommit(commit: {
        id: string;
        name: string;
        extra: string;
    }) {
        const old_commit = this.commit.getValue();
        this.form().patchValue({ commit: commit.id });
        this.commit.next(commit);
        const repo = this.repo.getValue();
        const driver = this.driver.getValue();
        if (!driver.id) return;
        this.loading.set('DRIVERS.DETAILS_LOADING');
        this.waiting.emit(true);
        this.form().patchValue({
            repository_id: repo.id,
            file_name: driver.id,
        });
        this.subscription(
            'driver_details',
            listRepositoryDriverDetails(repo.id, {
                driver: `${driver.id}`,
                commit: `${commit.id}`,
            })
                .pipe(catchError(() => of(null)))
                .subscribe((details) => {
                    if (!details) {
                        this.form().patchValue({ commit: old_commit.id });
                        this.commit.next(old_commit);
                        this.loading.set('');
                        this.waiting.emit(false);
                        notifyError(
                            `Failed to get driver details for commit "${commit.id}"`,
                        );
                        return;
                    }
                    if (this.form().value.id) {
                        this.loading.set('');
                        this.waiting.emit(false);
                        return;
                    }
                    this._applyDriverDetails(details);
                }),
        );
    }

    private _applyDriverDetails(details: any) {
        if (details == null) {
            this.loading.set('');
            this.waiting.emit(false);
            return;
        }
        const driver = this.driver.getValue();
        let settings = details.default_settings || '';
        try {
            JSON.parse(details.default_settings);
            const doc = yaml.load(details.default_settings);
            settings = yaml.dump(doc);
        } catch (error) {
            console.error(
                'Error parsing settings:',
                error,
                driver.default_settings,
            );
        }
        const port_number = details.tcp_port || details.udp_port || null;
        this.form().patchValue({
            name: details.descriptive_name || '',
            module_name: details.generic_name || '',
            class_name: driver.id || '',
            settings,
            default_port: port_number,
            default_uri: details.uri_base || '',
            role: port_number
                ? port_number === 22
                    ? PlaceDriverRole.SSH
                    : PlaceDriverRole.Device
                : details.uri_base
                  ? details.uri_base.startsWith('ws')
                      ? PlaceDriverRole.Websocket
                      : PlaceDriverRole.Service
                  : PlaceDriverRole.Logic,
            description: details.description || '',
        });
        this.waiting.emit(false);
        this.loading.set('');
    }

    private async _loadDetailsFromForm() {
        const { id, commit, file_name, repository_id } = this.form().value;
        if (!id) return;
        this.loading.set('DRIVERS.DETAILS_LOADING');
        const repo = await lastValueFrom(showRepository(repository_id));
        const driver = {
            id: file_name,
            name: file_name.replace(/\//g, ' > '),
        };
        this.repo.next(repo);
        this.driver.next(driver);
        const commit_list = await nextValueFrom(this.commit_list);
        const active_commit = commit_list.find((c) => c.id === commit);
        if (active_commit) this.commit.next(active_commit);
        this.loading.set('');
    }
}
