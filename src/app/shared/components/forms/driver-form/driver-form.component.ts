import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    EncryptionLevel,
    EngineRepositoryCommit,
    EngineRepository,
    EngineRepositoriesService
} from '@placeos/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'driver-form',
    templateUrl: './driver-form.component.html',
    styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent extends BaseDirective implements OnChanges {
    /** Group of form fields used for creating the system */
    @Input() public form: FormGroup;
    /** Levels of encyption available for the system's settings */
    public encryption_levels: Identity[] = [
        { id: EncryptionLevel.None, name: 'None' },
        { id: EncryptionLevel.Support, name: 'Support' },
        { id: EncryptionLevel.Admin, name: 'Admin' },
        { id: EncryptionLevel.NeverDisplay, name: 'Never Display' }
    ];
    /** List of driver roles */
    public role_types: Identity[] = [
        { id: 0, name: 'SSH' },
        { id: 1, name: 'Module' },
        { id: 2, name: 'Service' },
        { id: 3, name: 'Websocket' },
        { id: 99, name: 'Logic' }
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
        const list = await this._service.Repositories.listDrivers(repo.id);
        this.driver_list = (list || []).map(driver => ({
            id: driver,
            name: driver.replace(/\//g, ' > ')
        }));
        this.commit_list = [];
    }

    /**
     * Update the list of available commits
     * @param driver Driver to grab commits for
     */
    public updateCommitList(driver: Identity) {
        this.form.controls.file_name.setValue(driver.id);
        this.base_driver = driver;
        this._service.Repositories.listCommits(this.base_repo.id, {
            driver: `${driver.id}`
        }).then((list: any[]) => {
            this.commit_list = (list || []).map((commit: EngineRepositoryCommit) => ({
                id: commit.commit,
                name: `${commit.commit} - ${commit.subject}`
            }));
            if (this.form.controls.commit) {
                this.base_commit = this.commit_list.find(
                    commit => commit.id === this.form.controls.commit.value
                ) as any;
            }
        });
    }

    /**
     *
     * @param event Details of the driver selected
     */
    public setDriverBase(event: Identity) {
        this.form.controls.commit.setValue(event.id);
        this.base_commit = event as any;
        this._service.Repositories.driverDetails(this.base_repo.id, {
            driver: `${this.base_driver.id}`,
            commit: `${event.id}`
        }).then(driver => {
            if (!this.form.controls.id.value) {
                this.form.controls.name.setValue(driver.descriptive_name || '');
                this.form.controls.module_name.setValue(driver.generic_name || '');
                this.form.controls.class_name.setValue(this.base_driver.id || '');
                this.form.controls.settings_string.setValue(driver.default_settings || '');
                this.form.controls.description.setValue(driver.description || '');
            }
        });
    }

    /**
     * Initialise the driver details if set
     */
    private async initDriver() {
        if (this.form.controls.repository_id && this.form.controls.repository_id.value) {
            const value = this.form.controls.repository_id.value;
            const repo = await this.discovery_service.show(value);
            this.base_repo = repo;
            await this.updateDriverList(this.base_repo);
            const driver = this.form.controls.file_name.value;
            this.base_driver =
                typeof driver === 'string'
                    ? { id: driver, name: driver.split('/').join(' > ') }
                    : driver;
            this.updateCommitList(this.base_driver);
        }
    }
}
