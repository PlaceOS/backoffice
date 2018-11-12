import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../../shared/components/base.component';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.template.html',
    styleUrls: ['./about.styles.scss']
})
export class AppAboutComponent extends BaseComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService) {
        super();
    }

    public ngOnInit() {
        this.init();
    }

    public init() {
        if (!this.service.ready()) {
            return this.timeout('init', () => this.init());
        }
        this.model.user = this.service.Users.current();
        this.model.backoffice_version = this.service.Settings.version;
        this.model.backoffice_build = this.service.Settings.build;
        this.model.changelog = this.service.Settings.markdown();
        console.log('Model:', this.model);
    }

    public changelog(log: string) {
        console.log('Log:', log);
        this.service.Overlay.openModal('changelog', { data: { changelog: log } }, (e) => e.close());
    }
}
