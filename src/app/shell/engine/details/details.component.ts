import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';
import { build, version } from 'src/app/shared/globals/application';
import {
    ChangelogModalComponent,
    ChangelogModalData
} from 'src/app/overlays/changelog-modal/changelog-modal.component';

@Component({
    selector: 'app-engine-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class EngineDetailsComponent extends BaseDirective {
    public get user() {
        return this._service.Users.current();
    }

    public get backoffice_version() {
        return version;
    }

    public get backoffice_build() {
        return build.format('DD MMM YYYY [at] h:mma');
    }

    constructor(private _service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public changelog(log: string) {
        this._dialog.open<ChangelogModalComponent, ChangelogModalData>(ChangelogModalComponent, {
            data: { changelog: log }
        });
    }
}
