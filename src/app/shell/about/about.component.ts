import { Component, OnInit } from '@angular/core';

import { BaseDirective } from '../../shared/globals/base.directive';
import { ApplicationService } from '../../services/app.service';
import { version, build } from 'src/app/shared/globals/application';

@Component({
    selector: 'app-about',
    templateUrl: './about.template.html',
    styleUrls: ['./about.styles.scss']
})
export class AppAboutComponent extends BaseDirective implements OnInit {
    public model: any = {};

    constructor(private service: ApplicationService) {
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
        // this.model.changelog = this.service.Settings.markdown();
        console.log('Model:', this.model);
    }

    public changelog(log: string) {
        console.log('Log:', log);
        this.service.Overlay.open('changelog', { data: { changelog: log } }, (e) => e.close());
    }
}
