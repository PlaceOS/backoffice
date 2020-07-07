import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    EngineRepositoryCommit,
    EngineRepository,
    EngineRepositoryType,
    EngineRepositoriesService,
    EngineDriverRole,
} from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';
import { of, Subject, Observable } from 'rxjs';

import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

@Component({
    selector: 'driver-form',
    templateUrl: './driver-form.component.html',
    styleUrls: ['./driver-form.component.scss'],
})
export class DriverFormComponent extends BaseDirective implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** List of driver roles */
    public role_types: Identity[] = [
        { id: EngineDriverRole.SSH, name: 'SSH' },
        { id: EngineDriverRole.Device, name: 'Device' },
        { id: EngineDriverRole.Service, name: 'Service' },
        { id: EngineDriverRole.Websocket, name: 'Websocket' },
        { id: EngineDriverRole.Logic, name: 'Logic' },
    ];

    /** Driver used as a template for the new driver being created */
    public base_repo: EngineRepository;
    /** Driver used as a template for the new driver being created */
    public base_commit: EngineRepositoryCommit;
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
    /** Function to check repo that are excluded from being listed */
    public readonly exclude_fn = (repo: EngineRepository) => repo.type === EngineRepositoryType.Interface

    public get editing(): boolean {
        return this.form.controls.id && this.form.controls.id.value;
    }

    /** Service for handling driver discovery */
    public get discovery_service(): EngineRepositoriesService {
        return this._service.Repositories;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.driver_list$ = this.repo$.pipe(
            debounceTime(100),
            distinctUntilChanged(),
            switchMap((repo_id) => {
                this.loading_drivers = true;
                this.driver_list = [];
                return this._service.Repositories.listDrivers(repo_id);
            }),
            catchError((_) => {
                this._service.notifyError(`Error loading driver list. Error: ${_.message || _}`);
                return of([]);
            }),
            map((list: any[]) => {
                this.loading_drivers = false;
                this.commit_list = [];
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
            debounceTime(100),
            distinctUntilChanged(),
            switchMap((driver_id) => {
                this.loading_commits = true;
                this.commit_list = [];
                return this._service.Repositories.listCommits(this.base_repo.id, {
                    driver: `${driver_id}`,
                });
            }),
            catchError((_) => {
                this._service.notifyError(
                    `Error loading driver's commit list. Error: ${_.message || _}`
                );
                return of([]);
            }),
            map((list: any[]) => {
                this.loading_commits = false;
                if (this.form.controls.commit) {
                    this.base_commit = this.commit_list.find(
                        (commit) => commit.id === this.form.controls.commit.value
                    ) as any;
                }
                return (list || []).map((commit: EngineRepositoryCommit) => {
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
    public async updateDriverList(repo: EngineRepository) {
        this.form.controls.repository_id.setValue(repo.id);
        this.base_repo = repo;
        const promise = this.driver_list$.toPromise();
        this.repo$.next(repo.id);
        return await promise;
    }

    /**
     * Update the list of available commits
     * @param driver Driver to grab commits for
     */
    public updateCommitList(driver: Identity) {
        this.form.controls.file_name.setValue(driver.id);
        this.base_driver = driver;
        const promise = this.commit_list$.toPromise();
        this.driver$.next(`${driver.id}`);
        return promise;
    }

    /**
     *
     * @param event Details of the driver selected
     */
    public setDriverBase(event: Identity) {
        this.form.controls.commit.setValue(event.id);
        this.base_commit = event as any;
        this.loading = true;
        this._service.Repositories.driverDetails(this.base_repo.id, {
            driver: `${this.base_driver.id}`,
            commit: `${event.id}`,
        }).then(
            (driver) => {
                this.loading = false;
                if (!this.form.controls.id.value) {
                    this.form.controls.name.setValue(driver.descriptive_name || '');
                    this.form.controls.module_name.setValue(driver.generic_name || '');
                    this.form.controls.class_name.setValue(this.base_driver.id || '');
                    this.form.controls.default_port.setValue(
                        driver.tcp_port || driver.udp_port || ''
                    );
                    this.form.controls.default_uri.setValue(driver.uri_base || '');
                    this.form.controls.role.setValue(
                        driver.tcp_port || driver.udp_port
                            ? EngineDriverRole.Device
                            : driver.uri_base
                            ? EngineDriverRole.Service
                            : EngineDriverRole.Logic
                    );
                    this.form.controls.settings.setValue(driver.default_settings || '');
                    this.form.controls.description.setValue(driver.description || '');
                }
            },
            () => (this.loading = false)
        );
    }

    /**
     * Initialise the driver details if set
     */
    private async initDriver() {
        if (this.form.controls.repository_id && this.form.controls.repository_id.value) {
            const value = this.form.controls.repository_id.value;
            const repo = await this.discovery_service.show(value);
            this.base_repo = repo;
            this.updateDriverList(this.base_repo);
            const driver = this.form.controls.file_name.value;
            this.base_driver =
                typeof driver === 'string'
                    ? { id: driver, name: driver.split('/').join(' > ') }
                    : driver;
            this.updateCommitList(this.base_driver);
        }
    }
}
