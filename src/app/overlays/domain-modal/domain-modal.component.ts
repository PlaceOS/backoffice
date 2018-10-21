
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'domain-modal',
    templateUrl: './domain-modal.template.html',
    styleUrls: ['./domain-modal.styles.scss']
})
export class DomainModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        this.model.form = {};
        this.model.errors = {};
    }

    public init() {
        if (this.model.item) {
            this.model.form = {
                name: this.model.item.name,
                dom: this.model.item.domain,
                login_url: this.model.item.login_url,
                logout_url: this.model.item.logout_url,
                description: this.model.item.description,
                config: JSON.parse(JSON.stringify(this.model.item.config || {})),
                internals: JSON.parse(JSON.stringify(this.model.item.internals || {}))
            };
        }
    }

    public validate() {
        this.model.errors = {};
        const form = this.model.form || {};
        this.model.has_errors = Object.keys(this.model.errors).length > 0;
    }

    public new() {
        if (this.model.loading) { return; }
        setTimeout(() => {
            this.model.loading = true;
            this.service.Domains.add(this.model.form).then((item) => {
                this.service.success('Successfully added new domain');
                this.model.id = item.id;
                this.event('Success');
            }, () => {
                this.service.error('Failed to add new domain');
                this.model.loading = false;
            });
        }, 300);
    }

    public edit() {
        if (!this.model.item || this.model.loading) { return; }
        setTimeout(() => {
            const form = {};
            for (const k in this.model.form) {
                if ((k === 'internals' || k === 'config') && JSON.stringify(this.model.form[k] || {}) !== JSON.stringify(this.model.item[k] || {})) {
                    form[k] = this.model.form[k];
                } else if (k === 'dom' && this.model.form.hasOwnProperty(k)) {
                    if (this.model.form.dom !== this.model.item.domain) {
                        form[k] = this.model.form[k];
                    }
                } else if (this.model.form.hasOwnProperty(k) && this.model.form[k] !== this.model.item[k]) {
                    form[k] = this.model.form[k];
                }
            }
            if (Object.keys(form).length <= 0) {
                this.service.warning('No changes have been made');
            } else {
                this.model.loading = true;
                this.service.Domains.update(this.model.item.id, form).then((item) => {
                    this.service.success(`Successfully updated domain "${this.model.item.id}"`);
                    this.model.id = item.id;
                    this.event('Success');
                }, () => {
                    this.service.error(`Failed to update domain "${this.model.item.id}"`);
                    this.model.loading = false;
                });
            }

        }, 300);
    }
}
