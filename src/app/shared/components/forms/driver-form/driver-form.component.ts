import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
    EncryptionLevel,
    EngineDriver,
    EngineRepositoryCommit,
    EngineRepository,
    EngineRepositoriesService
} from '@acaengine/ts-client';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { Identity } from 'src/app/shared/utilities/types.utilities';
import { ApplicationService } from 'src/app/services/app.service';

@Component({
    selector: 'driver-form',
    templateUrl: './driver-form.component.html',
    styleUrls: ['./driver-form.component.scss']
})
export class DriverFormComponent extends BaseDirective {
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
        { id: 1, name: 'Device' },
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

    /** Service for handling driver discovery */
    public get discovery_service(): EngineRepositoriesService {
        return this._service.Repositories;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    /**
     * Update the list of available drivers
     * @param repo Repository to grab the drivers for
     */
    public updateDriverList(repo: EngineRepository) {
        console.log('Update driver list:', repo);
        this._service.Repositories.listDrivers(repo.id).then(list => {
            this.driver_list = (list || []).map(driver => ({
                id: driver,
                name: driver.replace(/\//g, ' > ')
            }));
            this.commit_list = [];
        });
    }

    /**
     * Update the list of available commits
     * @param driver Driver to grab commits for
     */
    public updateCommitList(driver: Identity) {
        console.log('Update Commit list:', driver);
        this._service.Repositories.listCommits(this.base_repo.id, {
            driver: `${driver.id}`
        }).then((list: any[]) => {
            this.commit_list = (list || []).map((commit: EngineRepositoryCommit) => ({
                id: commit.commit,
                name: `${commit.commit} - ${commit.subject}`
            }));
        });
    }

    /**
     *
     * @param driver
     */
    public setDriverBase(event: Identity) {
        this._service.Repositories.driverDetails(this.base_repo.id, {
            driver: `${this.base_driver.id}`,
            commit: `${event.id}`
        }).then(driver => {
            this.form.controls.name.setValue(driver.descriptive_name);
            this.form.controls.module_name.setValue(driver.generic_name);
            this.form.controls.class_name.setValue(this.base_driver);
            this.form.controls.settings_string.setValue(driver.default_settings || '');
            this.form.controls.description.setValue(driver.description || '');
        });
    }
}
