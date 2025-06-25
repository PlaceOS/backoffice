import {
  Component,
  OnChanges,
  SimpleChanges,
  input,
  output
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import {
    listRepositoryCommits,
    listRepositoryDriverDetails,
    listRepositoryDrivers,
    PlaceDriverRole,
    PlaceRepository,
    PlaceRepositoryCommit,
    PlaceRepositoryType,
    queryRepositories,
    showRepository,
} from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { notifyError } from 'apps/backoffice/src/app/common/notifications';
import { Identity } from 'apps/backoffice/src/app/common/types';
import { Observable, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    map,
    switchMap,
} from 'rxjs/operators';

import { format, isAfter, subMinutes } from 'date-fns';
import * as yaml from 'js-yaml';
import { i18n } from '../../../common/locale.service';
import { DateFromPipe } from '../../pipes/date-from.pipe';

@Component({
    selector: 'driver-form',
    templateUrl: './driver-form.component.html',
    styles: [
        `
            mat-checkbox {
                margin-top: 2.5em;
                margin-bottom: 1.5em;

                @media screen and (max-width: 640px) {
                    margin-top: 0;
                }
            }
        `,
    ],
    standalone: false,
})
export class DriverFormComponent extends AsyncHandler implements OnChanges {
    /** Group of form fields used for creating the system */
    public readonly form = input<UntypedFormGroup>(undefined);

    public readonly waiting = output<boolean>();
    /** List of driver roles */
    public role_types: Identity[] = [];

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
        queryRepositories({ q: _ }).pipe(
            map((resp) => resp.data),
            catchError(() => of([])),
        );
    /** Function to check repo that are excluded from being listed */
    public readonly exclude_fn = (repo: PlaceRepository) =>
        repo.type === PlaceRepositoryType.Interface;
    public date_pipe = new DateFromPipe();
    public failed = false;

    public get editing(): boolean {
        const form = this.form();
        return form.controls.id && form.controls.id.value;
    }

    public ngOnInit(): void {
        this.driver_list$ = this.repo$.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            switchMap((repo_id) => {
                this.loading_drivers = true;
                this.driver_list = [];
                this.commit_list = [];
                return listRepositoryDrivers(repo_id).pipe(
                    catchError(() => of([])),
                );
            }),
            catchError((_) => {
                notifyError(
                    i18n('DRIVERS.LISTING_ERROR', { error: _.message || _ }),
                );
                return of([]);
            }),
            map((list: any[]) => {
                this.loading_drivers = false;
                return (list || []).map((driver) => ({
                    id: driver,
                    name: driver.replace(/\//g, ' > '),
                }));
            }),
        );
        this.subscription(
            'driver_list',
            this.driver_list$.subscribe((list) => (this.driver_list = list)),
        );
        this.commit_list$ = this.driver$.pipe(
            debounceTime(120),
            distinctUntilChanged(),
            switchMap((driver_id) => {
                this.loading_commits = true;
                this.commit_list = [];
                return listRepositoryCommits(this.base_repo.id, {
                    driver: `${driver_id}`,
                }).pipe(catchError(() => of([])));
            }),
            catchError((_) => {
                notifyError(
                    i18n('DRIVERS.COMMIT_LIST_ERROR', {
                        error: _.message || _,
                    }),
                );
                return of([]);
            }),
            map((list: any[]) => {
                this.loading_commits = false;
                if (this.form().controls.commit) {
                    this.base_commit = this.commit_list.find(
                        (commit) =>
                            commit.id === this.form().controls.commit.value,
                    ) as any;
                }
                return (list || []).map((commit: PlaceRepositoryCommit) => {
                    const date = new Date(commit.date);
                    return {
                        id: commit.commit,
                        name: `${commit.subject}`,
                        extra: isAfter(date, subMinutes(date, 1))
                            ? this.date_pipe.transform(date.valueOf())
                            : format(date, 'dd MMM yyyy'),
                    };
                });
            }),
        );
        this.subscription(
            'commit_list',
            this.commit_list$.subscribe((list) => (this.commit_list = list)),
        );
        this.role_types = [
            { id: PlaceDriverRole.SSH, name: i18n('DRIVERS.SSH') },
            { id: PlaceDriverRole.Device, name: i18n('DRIVERS.DEVICE') },
            { id: PlaceDriverRole.Service, name: i18n('DRIVERS.SERVICE') },
            { id: PlaceDriverRole.Websocket, name: i18n('DRIVERS.WEBSOCKET') },
            { id: PlaceDriverRole.Logic, name: i18n('DRIVERS.LOGIC') },
        ];
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
        this.form().controls.repository_id.setValue(repo.id);
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
        this.form().controls.file_name.setValue(driver.id);
        this.base_driver = driver;
        const form = this.form();
        if (!form.controls.id.value) {
            this.base_commit = null;
            form.controls.commit.setValue('');
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
        this.form().controls.commit.setValue(event.id);
        this.failed = false;
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
                this.failed = true;
                this.waiting.emit(false);
                throw _;
            });
        const form = this.form();
        if (!form.controls.id.value) {
            form.controls.name.setValue(driver.descriptive_name || '');
            form.controls.module_name.setValue(driver.generic_name || '');
            form.controls.class_name.setValue(this.base_driver.id || '');
            const port_number = driver.tcp_port || driver.udp_port || null;
            form.controls.default_port.setValue(port_number);
            form.controls.default_uri.setValue(driver.uri_base || '');
            form.controls.role.setValue(
                port_number
                    ? port_number === 22
                        ? PlaceDriverRole.SSH
                        : PlaceDriverRole.Device
                    : driver.uri_base
                      ? driver.uri_base.startsWith('ws')
                          ? PlaceDriverRole.Websocket
                          : PlaceDriverRole.Service
                      : PlaceDriverRole.Logic,
            );
            let settings = driver.default_settings || '';
            try {
                JSON.parse(driver.default_settings);
                const doc = yaml.load(driver.default_settings);
                settings = yaml.dump(doc);
            } catch {}
            form.controls.settings.setValue(settings || '');
            form.controls.description.setValue(driver.description || '');
        }
        this.loading = false;
        this.waiting.emit(false);
    }

    /**
     * Initialise the driver details if set
     */
    private async initDriver() {
        const form = this.form();
        if (
            form.controls.repository_id &&
            form.controls.repository_id.value
        ) {
            const value = form.controls.repository_id.value;
            const repo = await showRepository(value).toPromise();
            this.base_repo = repo;
            this.updateDriverList(this.base_repo);
            const driver = form.controls.file_name.value;
            this.base_driver =
                typeof driver === 'string'
                    ? { id: driver, name: driver.split('/').join(' > ') }
                    : driver;
            this.commit_list = await this.updateCommitList(this.base_driver);
        }
    }
}
