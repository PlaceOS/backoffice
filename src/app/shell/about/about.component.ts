import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { BaseDirective } from '../../shared/globals/base.directive';
import { ApplicationService } from '../../services/app.service';
import { version, build } from 'src/app/shared/globals/application';
import { ChangelogModalComponent, ChangelogModalData } from 'src/app/overlays/changelog-modal/changelog-modal.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.template.html',
    styleUrls: ['./about.styles.scss']
})
export class AppAboutComponent extends BaseDirective implements OnInit {
    public model: any = {};

    constructor(private service: ApplicationService, private _dialog: MatDialog) {
        super();
    }

    public ngOnInit() {
        this.init();
    }

    public init() {
        if (!this.service.is_ready) {
            return this.timeout('init', () => this.init());
        }
        this.model.user = this.service.Users.current();
        this.model.backoffice_version = version;
        this.model.backoffice_build = build.format('DD MMM YYYY [at] h:mma');
    }

    public changelog(log: string) {
        this._dialog.open<ChangelogModalComponent, ChangelogModalData>(ChangelogModalComponent, { data: { changelog: log } });
    }
}
