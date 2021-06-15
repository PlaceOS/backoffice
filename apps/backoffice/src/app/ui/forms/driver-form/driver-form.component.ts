import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    EventEmitter,
    Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    PlaceRepositoryCommit,
    PlaceRepository,
    PlaceRepositoryType,
    PlaceDriverRole,
    listRepositoryDriverDetails,
    listRepositoryCommits,
    listRepositoryDrivers,
    showRepository,
    queryRepositories,
} from '@placeos/ts-client';

import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import { Identity } from 'apps/backoffice/src/app/common/types';
import {
    debounceTime,
    distinctUntilChanged,
    switchMap,
    catchError,
    map,
} from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';

import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

@Component({
    selector: 'driver-form',
    templateUrl: './driver-form.component.html',
    styleUrls: ['./driver-form.component.scss'],
})
export class DriverFormComponent extends BaseClass implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;

    @Output() public waiting = new EventEmitter<boolean>();
    /** List of driver roles */
    public role_types: Identity[] = [
        { id: PlaceDriverRole.SSH, name: 'SSH' },
        { id: PlaceDriverRole.Device, name: 'Device' },
        { id: PlaceDriverRole.Service, name: 'Service' },
        { id: PlaceDriverRole.Websocket, name: 'Websocket' },
        { id: PlaceDriverRole.Logic, name: 'Logic' },
    ];

    /** Driver used as a template for the new driver being created */
    public base_repo: PlaceRepository;
    /** Driver used as a template for the new driver being created */
    public base_commit: PlaceRepositoryCommit;
    /** Driver used as a template for the new driver being created */
    public base_driver: Identity;
    /** List of available drivers for the active repository */
    public driver_list: Identity[] = [];
    /** List of available commits for the active driver */
    public commit_list: Identity[] = [];
    /** List of items from an API search */
    public driver_list$: Observable<Identity[]>;
    /** List of items from an API search */
    public commit_list$: Observable<Identity[]>;
    /** Subject holding the value of the search */
    public readonly repo$ = new Subject<string>();
    /** Subject holding the value of the search */
    public readonly driver$ = new Subject<string>();
    /** Whether driver details are being loaded */
    public loading: boolean;
    /** Whether driver listings are being loaded */
    public loading_drivers: boolean;
    /** Whether driver commits are being loaded */
    public loading_commits: boolean;
    /** Function to query repositories */
    public readonly query_fn = (_: string) =>
        queryRepositories({ q: _ }).pipe(map((resp) => resp.data));
    /** Function to check repo that are excluded from being listed */
    public readonly exclude_fn = (repo: PlaceRepository) =>
        repo.type === PlaceRepositoryType.Interface;

    public get editing(): boolean {
        return this.form.controls.id && this.form.controls.id.value;
    }

    public ngOnInit(): void {
        this.driver_list$ = this.repo$.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            switchMap((repo_id) => {
                this.loading_drivers = true;
                this.driver_list = [];
                this.commit_list = [];
                return listRepositoryDrivers(repo_id);
            }),
            catchError((_) => {
                notifyError(
                    `Error loading driver list. Error: ${_.message || _}`
                );
                return of([]);
            }),
            map((list: any[]) => {
                this.loading_drivers = false;
                return (list || []).map((driver) => ({
                    id: driver,
                    name: driver.replace(/\//g, ' > '),
                }));
            })
        );
        this.subscription(
            'driver_list',
            this.driver_list$.subscribe((list) => (this.driver_list = list))
        );
        this.commit_list$ = this.driver$.pipe(
            debounceTime(120),
            distinctUntilChanged(),
            switchMap((driver_id) => {
                this.loading_commits = true;
                this.commit_list = [];
                return listRepositoryCommits(this.base_repo.id, {
                    driver: `${driver_id}`,
                });
            }),
            catchError((_) => {
                notifyError(
                    `Error loading driver's commit list. Error: ${
                        _.message || _
                    }`
                );
                return of([]);
            }),
            map((list: any[]) => {
                this.loading_commits = false;
                if (this.form.controls.commit) {
                    this.base_commit = this.commit_list.find(
                        (commit) =>
                            commit.id === this.form.controls.commit.value
                    ) as any;
                }
                return (list || []).map((commit: PlaceRepositoryCommit) => {
                    const date = dayjs(commit.date);
                    return {
                        id: commit.commit,
                        name: `${commit.subject}`,
                        extra: date.isAfter(dayjs().subtract(1, 'm'))
                            ? date.fromNow()
                            : date.format('DD MMM YYYY'),
                    };
                });
            })
        );
        this.subscription(
            'commit_list',
            this.commit_list$.subscribe((list) => (this.commit_list = list))
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.form) {
            this.initDriver();
        }
    }

    /**
     * Update the list of available drivers
     * @param repo Repository to grab the drivers for
     */
    public updateDriverList(repo: PlaceRepository) {
        this.form.controls.repository_id.setValue(repo.id);
        this.base_repo = repo;
        const promise = this.driver_list$.toPromise();
        this.repo$.next(repo.id);
        return promise;
    }

    /**
     * Update the list of available commits
     * @param driver Driver to grab commits for
     */
    public updateCommitList(driver: Identity) {
        this.form.controls.file_name.setValue(driver.id);
        this.base_driver = driver;
        if (!this.form.controls.id.value) {
            this.base_commit = null;
            this.form.controls.commit.setValue('');
        }
        const promise = this.commit_list$.toPromise();
        this.driver$.next(`${driver.id}`);
        return promise;
    }

    /**
     *
     * @param event Details of the driver selected
     */
    public async setDriverBase(event: Identity) {
        this.form.controls.commit.setValue(event.id);
        this.base_commit = event as any;
        this.loading = true;
        this.waiting.emit(true);
        const driver = await listRepositoryDriverDetails(this.base_repo.id, {
            driver: `${this.base_driver.id}`,
            commit: `${event.id}`,
        })
            .toPromise()
            .catch((_) => {
                this.loading = false;
                this.waiting.emit(false);
                throw _;
            });
        if (!this.form.controls.id.value) {
            this.form.controls.name.setValue(driver.descriptive_name || '');
            this.form.controls.module_name.setValue(driver.generic_name || '');
            this.form.controls.class_name.setValue(this.base_driver.id || '');
            this.form.controls.default_port.setValue(
                driver.tcp_port || driver.udp_port || null
            );
            this.form.controls.default_uri.setValue(driver.uri_base || '');
            this.form.controls.role.setValue(
                driver.tcp_port || driver.udp_port
                    ? PlaceDriverRole.Device
                    : driver.uri_base
                    ? driver.uri_base.startsWith('ws')
                        ? PlaceDriverRole.Websocket
                        : PlaceDriverRole.Service
                    : PlaceDriverRole.Logic
            );
            this.form.controls.settings.setValue(driver.default_settings || '');
            this.form.controls.description.setValue(driver.description || '');
        }
        this.loading = false;
        this.waiting.emit(false);
    }

    /**
     * Initialise the driver details if set
     */
    private async initDriver() {
        if (
            this.form.controls.repository_id &&
            this.form.controls.repository_id.value
        ) {
            const value = this.form.controls.repository_id.value;
            const repo = await showRepository(value).toPromise();
            this.base_repo = repo;
            this.updateDriverList(this.base_repo);
            const driver = this.form.controls.file_name.value;
            this.base_driver =
                typeof driver === 'string'
                    ? { id: driver, name: driver.split('/').join(' > ') }
                    : driver;
            this.commit_list = await this.updateCommitList(this.base_driver);
        }
    }
}
