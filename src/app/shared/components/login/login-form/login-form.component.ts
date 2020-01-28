
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApplicationService } from '../../../../services/app.service';
import { FormGroup } from '@angular/forms';
import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { LoginSettings } from 'src/app/shared/utilities/settings.interfaces';
import { first } from 'rxjs/operators';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.template.html',
    styleUrls: ['./login-form.styles.scss']
})
export class LoginFormComponent extends BaseDirective implements OnInit {
    /** Form fields for logging in */
    @Input() public form: FormGroup;
    /** Emitter for user forgot password action */
    @Output() public forgot = new EventEmitter<void>();
    /** Emitter for form submission events */
    @Output() public submitted = new EventEmitter<void>();
    /** Settings for the login form */
    public settings: LoginSettings;
    /** Whether the password should be shown */
    public show_password: boolean;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit() {
        this._service.initialised.pipe(first(_ => _)).subscribe(() => {
            this.settings = this._service.setting('app.login') || {};
        });
    }
}

