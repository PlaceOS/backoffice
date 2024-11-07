import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';
import { AsyncHandler } from '../../common/async-handler.class';
import { EmailStateService, EmailTemplate } from './email-state.service';
import { notifySuccess } from '../../common/notifications';

export function extractTextFromHTML(html_string: string) {
    const temp_element = document.createElement('div');
    temp_element.innerHTML = html_string;
    return temp_element.textContent || temp_element.innerText || '';
}

@Component({
    selector: 'email-template-form',
    template: `
        <div class="absolute inset-0 bg-base-100 overflow-auto p-4">
            <form
                class="max-w-full w-[48rem] mx-auto min-h-full pt-4"
                [formGroup]="form"
            >
                <div class="flex items-center space-x-2 mb-8">
                    <h2 class="text-2xl font-medium">
                        {{ template?.id ? 'Edit' : 'New' }} Email Template
                    </h2>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="flex-1 space-y-2 w-1/4">
                        <label for="trigger">Trigger</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="trigger"
                                placeholder="Select Trigger"
                                formControlName="trigger"
                            >
                                <mat-option value="">None</mat-option>
                                <mat-option
                                    *ngFor="let template of definitions | async"
                                    [value]="template.id"
                                >
                                    <div
                                        class="flex flex-col-reverse leading-tight my-2"
                                    >
                                        <div class="text-xs opacity-30">
                                            {{ template.name_details[0] }}
                                        </div>
                                        <div class="text-sm">
                                            {{ template.name_details[1] }}
                                            <span class="opacity-0">:</span>
                                        </div>
                                    </div>
                                </mat-option>
                            </mat-select>
                            <mat-error>A trigger is required</mat-error>
                        </mat-form-field>
                    </div>
                    <button
                        btn
                        matRipple
                        class="flex-1 w-1/4 my-4"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                        [matMenuTriggerFor]="tracking_menu"
                    >
                        Placeholders
                    </button>
                    <mat-menu #tracking_menu="matMenu" class="max-h-[24rem]">
                        <button
                            mat-menu-item
                            *ngFor="let field of active_trigger?.fields || []"
                            (click)="copyField(field.name)"
                        >
                            <div class="flex flex-col leading-tight">
                                <div class="font-mono text-sm">
                                    {{ field.name }}
                                </div>
                                <div class="text-xs opacity-30">
                                    {{ field.description }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            *ngIf="!(active_trigger?.fields || []).length"
                            [disabled]="true"
                        >
                            No placeholders available
                        </button>
                    </mat-menu>
                </div>
                <div class="flex items-center space-x-4">
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            placeholder="Reply to address"
                            formControlName="reply_to"
                        />
                        <mat-error>A reply address is required</mat-error>
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="flex-1">
                        <input
                            matInput
                            placeholder="From address"
                            formControlName="from"
                        />
                        <mat-error>A from address is required</mat-error>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="w-full">
                    <app-icon matPrefix class="text-2xl relative -left-1">
                        description
                    </app-icon>
                    <input
                        matInput
                        placeholder="Template Subject"
                        formControlName="subject"
                    />
                    <mat-error>A title for the template is required</mat-error>
                </mat-form-field>
                <rich-text-input
                    formControlName="html"
                    placeholder="Body of the email template"
                    [images_allowed]="true"
                    class="min-h-[calc(100vh-28rem)] block"
                ></rich-text-input>
                <div
                    class="sticky bottom-0 flex items-center justify-end space-x-2 bg-base-100"
                >
                    <a
                        btn
                        matRipple
                        class="inverse w-32"
                        [routerLink]="['/admin', 'mailing-list']"
                    >
                        Cancel
                    </a>
                    <button
                        btn
                        matRipple
                        type="button"
                        class="w-48"
                        (click)="save()"
                    >
                        Save Template
                    </button>
                </div>
            </form>
        </div>
        <ng-template #load_state>
            <div class="absolute inset-0 bg-base-100">
                <div
                    class="h-full w-full flex flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class EmailTemplateFormComponent extends AsyncHandler {
    public loading = '';
    public template: EmailTemplate;
    public readonly definitions = this._state.template_definitions;
    public readonly form = new FormGroup({
        id: new FormControl(''),
        reply_to: new FormControl(''),
        from: new FormControl(''),
        subject: new FormControl('', [Validators.required]),
        category: new FormControl('internal'),
        trigger: new FormControl(''),
        html: new FormControl('', [Validators.required]),
        zone_id: new FormControl(''),
    });
    public active_trigger = null;

    constructor(
        private _state: EmailStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _clipboard: Clipboard
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe(async (params) => {
                if (params.has('id')) {
                    this.loading = 'Loading email template...';
                    this.template = await this._state.loadTemplate(
                        params.get('id')
                    );
                    this.loading = '';
                    console.log('Template:', this.template);
                    if (!this.template) {
                        this._router.navigate(['/email-templates', 'manage']);
                    } else {
                        this.form.patchValue(this.template);
                    }
                }
            })
        );
        this.subscription(
            'trigger',
            this.form.valueChanges.subscribe(async (value) => {
                if (value.trigger) {
                    const trigger_list = await this.definitions
                        .pipe(take(1))
                        .toPromise();
                    this.active_trigger = trigger_list.find(
                        (_) => _.id === value.trigger
                    );
                }
            })
        );
    }

    public copyField(field: string) {
        this._clipboard.copy(`%{${field}}`);
        notifySuccess(`Copied field "${field}" to clipboard.`);
    }

    public async save() {
        this.loading = 'Saving email template...';
        await this._state.saveTemplate({
            ...(this.template || {}),
            ...this.form.getRawValue(),
            text: extractTextFromHTML(this.form.getRawValue().html || ''),
        } as any);
        this.loading = '';
        notifySuccess('Successfully saved email template');
        this._router.navigate(['/email-templates']);
    }
}
