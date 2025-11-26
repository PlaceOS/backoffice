import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { PlaceDomain } from '@placeos/ts-client';

import { Clipboard } from '@angular/cdk/clipboard';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { marked } from 'marked';
import { AsyncHandler } from '../common/async-handler.class';
import { i18n } from '../common/locale.service';
import { notifyError, notifySuccess } from '../common/notifications';
import { validateJSONString } from '../common/validation';
import { SettingsFieldComponent } from '../ui/custom-fields/settings-field.component';
import { IconComponent } from '../ui/icon.component';
import { SanitizePipe } from '../ui/pipes/sanitise.pipe';
import { TranslatePipe } from '../ui/translate.pipe';
import { DomainStateService } from './domain-state.service';

@Component({
    selector: 'app-domain-about',
    template: `
        @if (item?.description) {
            <div class="w-full rounded-sm border border-base-200">
                <h3 class="w-full rounded-sm bg-base-200 p-4 text-lg font-medium">
                    {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                </h3>
                <div
                    class="markdown w-full overflow-auto p-4 text-sm"
                    [innerHTML]="description | sanitize"
                ></div>
            </div>
            <hr class="my-4 text-base-300" />
        }
        @if (item.email_domains?.length) {
            <div
                class="relative my-2 flex w-1/2 min-w-[20rem] flex-col rounded-sm border border-base-200 p-4"
            >
                <div
                    class="absolute left-4 top-0 -translate-y-1/2 rounded-sm bg-base-100 p-2 text-sm font-medium"
                >
                    {{ 'DOMAINS.EMAIL_DOMAINS' | translate }}
                </div>
                @for (domain of item.email_domains; track domain) {
                    <button
                        matRipple
                        class="mono rounded-sm p-2 text-left text-sm hover:bg-base-200"
                        (click)="copyEmailDomain(domain)"
                    >
                        {{ domain }}
                    </button>
                }
            </div>
        }
        <header
            class="mb-2 flex h-16 w-full items-center justify-between rounded-sm bg-base-200 px-2 text-lg font-medium"
        >
            <h3 class="px-2 text-lg font-medium">
                {{ 'COMMON.SETTINGS' | translate }}
            </h3>
            <button
                icon
                matRipple
                class="rounded-sm bg-secondary text-secondary-content"
                [matTooltip]="'COMMON.SAVE_CHANGES' | translate"
                (click)="saveChanges()"
            >
                <icon class="text-2xl">save</icon>
            </button>
        </header>
        @if (form) {
            <section [formGroup]="form">
                <mat-tab-group
                    [(selectedIndex)]="index"
                    class="border-x border-t border-base-300"
                >
                    <mat-tab [label]="'DOMAINS.SETTINGS_CONFIG' | translate">
                    </mat-tab>
                    <mat-tab [label]="'DOMAINS.SETTINGS_INTERNALS' | translate">
                    </mat-tab>
                </mat-tab-group>
                @if (index !== 1) {
                    <settings-form-field
                        formControlName="config"
                        lang="json"
                        [readonly]="false"
                    ></settings-form-field>
                }
                @if (index === 1) {
                    <settings-form-field
                        formControlName="internals"
                        lang="json"
                        [readonly]="false"
                    ></settings-form-field>
                }
            </section>
        }
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }
        `,
    ],
    imports: [
        SettingsFieldComponent,
        MatTabsModule,
        ReactiveFormsModule,
        MatRippleModule,
        IconComponent,
        MatTooltipModule,
        TranslatePipe,
        SanitizePipe,
    ],
})
export class DomainAboutComponent extends AsyncHandler implements OnInit {
    private _service = inject(DomainStateService);
    private _clipboard = inject(Clipboard);

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

    /** HTML string for rendering the description */
    public get description(): string {
        return marked(this.item.description || '', { async: false }) as string;
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.item.subscribe((_) => this.loadForm()),
        );
    }

    public copyEmailDomain(domain: string) {
        this._clipboard.copy(domain);
        notifySuccess(i18n('DOMAINS.COPIED_EMAIL_DOMAIN'));
    }

    /** Save changes to the form fields */
    public async saveChanges() {
        if (!this.form.valid)
            return notifyError(i18n('DOMAINS.SETTINGS_ERROR'));
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
        if (!this.item) return;
        this.form.patchValue({
            internals: JSON.stringify(this.item.internals, undefined, 4),
            config: JSON.stringify(this.item.config, undefined, 4),
        });
    }
}
