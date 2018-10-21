
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'user-modal',
    templateUrl: './user-modal.template.html',
    styleUrls: ['./user-modal.styles.scss']
})
export class UserModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
    }

    public init() {
        if (this.model.item) {
            this.model.form = {
                name: this.model.item.name,
                email: this.model.item.email,
                support: this.model.item.support,
                sys_admin: this.model.item.sys_admin
            };
        }
    }

    public validate() {
        this.model.errors = {};
        const form = this.model.form || {};
        if (form.password && form.password.length < 10) {
            this.model.errors.password = 'Password length must 10 characters or more';
        } else if (form.password && form.password !== form.password_confirm) {
            this.model.errors.password_confirm = 'Passwords must match';
        }
        if (form.email && !Utils.validate('email', form.email)) {
            this.model.errors.email = 'Email must be a valid email address';
        }
        this.model.has_errors = Object.keys(this.model.errors).length > 0;
    }

    public new() {
        if (this.model.loading) { return; }
        setTimeout(() => {
            this.model.loading = true;
            this.service.Users.add(this.model.form).then((item) => {
                this.service.success('Successfully added new user');
                this.model.id = item.id;
                this.event('Success');
            }, () => {
                this.service.error('Failed to add new user');
                this.model.loading = false;
            });
        }, 300);
    }

    public edit() {
        if (!this.model.item || this.model.loading) { return; }
        setTimeout(() => {
            const form = {};
            for (const k in this.model.form) {
                if (k === 'settings' && JSON.stringify(this.model.form[k] || {}) !== JSON.stringify(this.model.item[k] || {})) {
                    form[k] = this.model.form[k];
                } else if (this.model.form.hasOwnProperty(k) && this.model.form[k] !== this.model.item[k]) {
                    form[k] = this.model.form[k];
                }
            }
            if (Object.keys(form).length <= 0) {
                this.service.warning('No changes have been made');
            } else {
                this.model.loading = true;
                this.service.Users.update(this.model.item.id, form).then((item) => {
                    this.service.success(`Successfully updated user "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this.event('Success');
                }, () => {
                    this.service.error(`Failed to update user "${this.model.item.id}"`);
                    this.model.loading = false;
                });
            }

        }, 300);
    }
}
