
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationService } from '../../../../services/app.service';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.template.html',
    styleUrls: ['./login-form.styles.scss']
})
export class LoginFormComponent {
    @Input() public form: any = {};
    @Output() public event = new EventEmitter();

    public model: any = {};

    constructor(private service: ApplicationService) { }

    public ngOnInit() {
        this.init();
    }

    public init() {
        if (!this.service.is_ready) {
            return setTimeout(() => this.init(), 500);
        }
        this.model.settings = this.service.setting('app.login') || {};
    }

    public login() {
        this.event.emit({ type: 'login', form: this.form });
    }

    public forgot() {
        this.event.emit({ type: 'forgot' });
    }
}

