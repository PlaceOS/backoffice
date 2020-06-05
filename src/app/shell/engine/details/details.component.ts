import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComposerService } from '@placeos/composer';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import {
    ChangelogModalComponent,
    ChangelogModalData
} from 'src/app/overlays/changelog-modal/changelog-modal.component';

import * as dayjs from 'dayjs';
import { VERSION } from 'src/environments/version';

export interface EngineAPIDetails {
    /** Display name for the application */
    readonly app: string;
    /** Semantic version of the API */
    readonly version: string;
    /** Build time of the current version of the API */
    readonly build_time: number;
    /** Commit hash of the current version of the API */
    readonly commit: string;
}

@Component({
    selector: 'app-engine-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class EngineDetailsComponent extends BaseDirective implements OnInit {
    /** Current details about the API */
    public api_details: EngineAPIDetails;

    public get api_build(): string {
        if (!this.api_details || !this.api_details.build_time) {
            return 'Unknown';
        }
        return dayjs(this.api_details.build_time).format('DD MMM YYYY [at] h:mma');
    }

    public get user() {
        return this._service.Users.current();
    }

    public get backoffice_version() {
        return VERSION.semver;
    }

    public get backoffice_build() {
        const build = dayjs(VERSION.time);
        return build.format('DD MMM YYYY [at] h:mma');
    }

    constructor(
        private _service: ApplicationService,
        private _dialog: MatDialog,
        private _composer: ComposerService
    ) {
        super();
    }

    public ngOnInit(): void {
        this.loadApiDetails();
    }

    public changelog(log: string) {
        this._dialog.open<ChangelogModalComponent, ChangelogModalData>(ChangelogModalComponent, {
            data: { changelog: log }
        });
    }

    public loadApiDetails(): void {
        this._composer.http
            .get(`${this._composer.auth.api_endpoint}/version`)
            .toPromise()
            .then(
                details => (this.api_details = details as any),
                err =>
                    this._service.notifyError(
                        `Error loading API details. Error: ${JSON.stringify(err.response || err.message || err)}`
                    )
            );
    }
}
