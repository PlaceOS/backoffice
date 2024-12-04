import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PlaceDomain } from '@placeos/ts-client';

import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { validateJSONString } from 'apps/backoffice/src/app/common/validation';
import { DomainStateService } from './domain-state.service';
import { notifySuccess } from '../common/notifications';
import { Clipboard } from '@angular/cdk/clipboard';
import { i18n } from '../common/translate';

@Component({
    selector: 'app-domain-about',
    template: `
        <div
            class="rounded p-4 border border-base-200 w-1/2 min-w-[20rem] my-2 relative flex flex-col"
            *ngIf="item.email_domains?.length"
        >
            <div
                class="absolute top-0 left-4 -translate-y-1/2 bg-base-100 rounded text-sm font-medium p-2"
            >
                {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
            </div>
            <button
                matRipple
                class="mono text-sm p-2 hover:bg-base-200 rounded text-left"
                *ngFor="let domain of item.email_domains"
                (click)="copyEmailDomain(domain)"
            >
                {{ domain }}
            </button>
        </div>
        <div class="flex items-center justify-between space-x-2 my-2">
            <h3 class="text-lg font-medium">
                {{ 'COMMON.SETTINGS' | translate }}
            </h3>
            <button btn matRipple (click)="saveChanges()">
                {{ 'COMMON.SAVE_CHANGES' | translate }}
            </button>
        </div>
        <section *ngIf="form" [formGroup]="form">
            <mat-tab-group [(selectedIndex)]="index">
                <mat-tab [label]="'DOMAINS.SETTINGS_CONFIG' | translate">
                </mat-tab>
                <mat-tab [label]="'DOMAINS.SETTINGS_INTERNALS' | translate">
                </mat-tab>
            </mat-tab-group>
            <settings-form-field
                *ngIf="index !== 1"
                formControlName="config"
                lang="json"
                [readonly]="false"
            ></settings-form-field>
            <settings-form-field
                *ngIf="index === 1"
                formControlName="internals"
                lang="json"
                [readonly]="false"
            ></settings-form-field>
        </section>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
})
export class DomainAboutComponent extends AsyncHandler implements OnInit {
    /** Form group for edit domain settings */
    public form = new FormGroup({
        config: new FormControl('', [validateJSONString]),
        internals: new FormControl('', [validateJSONString]),
    });
    /** Index of the active tab */
    public index: number;

    public get item(): PlaceDomain {
        return this._service.active_item as any;
    }

    constructor(
        private _service: DomainStateService,
        private _clipboard: Clipboard
    ) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((_) => this.loadForm())
        );
    }

    public copyEmailDomain(domain: string) {
        this._clipboard.copy(domain);
        notifySuccess(i18n('DOMAINS.COPIED_EMAIL_DOMAIN'));
    }

    /** Save changes to the form fields */
    public async saveChanges() {
        if (!this.form.valid) return;
        const domain = new PlaceDomain({
            ...this.item,
            config: JSON.parse(this.form.value.config),
            internals: JSON.parse(this.form.value.internals),
        });
        await this._service.update(domain);
        notifySuccess(i18n('DOMAINS.SETTINGS_SAVED'));
    }

    /** Load form fields for active item */
    private loadForm(): void {
        this.form.patchValue({
            internals: JSON.stringify(this.item.internals, undefined, 4),
            config: JSON.stringify(this.item.config, undefined, 4),
        });
    }
}
