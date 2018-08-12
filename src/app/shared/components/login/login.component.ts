
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'login-display',
    templateUrl: './login.template.html',
    styleUrls: ['./login.styles.scss']
})
export class LoginComponent implements OnInit {
    public model: any = {};

    constructor(private service: AppService) {}

    public ngOnInit() {
        this.model.show = 'login';
        this.model.loading = true;
        this.init();
    }

    public init() {
        if (!this.service.Settings.setup) {
            return setTimeout(() => this.init(), 200);
        }
        this.model.logo = this.service.Settings.get('app.logo');
        this.service.Users.listen('state', (state) => {
            this.model.loading = false;
            if (state === 'invalid') {
                this.model.show = 'login';
            } else if (state === 'loading') {
                this.model.loading = true;
            }
        });
    }

    public processLogin(e: any) {
        if (e.type === 'login') {
            this.service.Users.login({
                username: e.form.user,
                password: e.form.pass
            });
        } else if (e.type === 'forgot') {
            this.model.show = 'forgot';
        } else {
            this.model.show = 'login';
        }
    }
}

