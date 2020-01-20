import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ApplicationService } from '../../../services/app.service';
import { BaseDirective } from '../../globals/base.directive';
import { ApplicationIcon, ApplicationImageIcon } from '../../utilities/settings.interfaces';

@Component({
    selector: 'login-display',
    templateUrl: './login.template.html',
    styleUrls: ['./login.styles.scss']
})
export class LoginComponent extends BaseDirective implements OnInit {
    public login_form: FormGroup;
    /** Name of the component contents to show */
    public show: 'login' | 'forgot';
    /** Whether a user action is being processed */
    public loading: boolean;
    /** Logo of the application/organisation */
    public logo: ApplicationImageIcon;
    /** Current work environment for the application */
    public env: string;

    constructor(private service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this.show = 'login';
        this.loading = true;
        this.login_form = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
        this.init();
    }

    public init() {
        if (!this.service.is_ready) {
            return setTimeout(() => this.init(), 200);
        }
        this.env = this.service.setting('env');
        this.logo = this.service.setting('app.logo') || {};
        this.subscription(
            'state',
            this.service.Users.state.subscribe(state => {
                this.loading = false;
                if (state === 'invalid') {
                    this.show = 'login';
                } else if (state === 'loading') {
                    this.loading = true;
                }
            })
        );
    }

    public processLogin(e: any) {
        if (e.type === 'login') {
        } else if (e.type === 'forgot') {
            this.show = 'forgot';
        } else {
            this.show = 'login';
        }
    }

    public login() {
        this.service.Users.login(this.login_form.value).then(
            () => null,
            err => this.login_form.controls.password.setErrors({ invalid: true })
        );
    }

    public forgottenPassword() {
        this.show = 'forgot';
    }
}
