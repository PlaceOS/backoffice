import { Clipboard } from '@angular/cdk/clipboard';
import { toSignal } from '../../common/signals';

import { Component, computed, effect, inject, signal } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AsyncHandler } from '../../common/async-handler.class';
import { notifySuccess } from '../../common/notifications';
import { RichTextInputComponent } from '../../ui/custom-fields/rich-text-input.component';
import { EmailStateService, EmailTemplate } from './email-state.service';

export function extractTextFromHTML(html_string: string) {
    const temp_element = document.createElement('div');
    temp_element.innerHTML = html_string;
    return temp_element.textContent || temp_element.innerText || '';
}

@Component({
    selector: 'email-template-form',
    template: `
        <div class="bg-base-100 absolute inset-0 overflow-auto p-4">
            <form
                class="mx-auto min-h-full w-3xl max-w-full pt-4"
                [formGroup]="form"
            >
                <div class="mb-8 flex items-center space-x-2">
                    <h2 class="text-2xl font-medium">
                        {{ template()?.id ? 'Edit' : 'New' }} Email Template
                    </h2>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="w-1/4 flex-1 space-y-2">
                        <label for="trigger">Trigger</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                name="trigger"
                                placeholder="Select Trigger"
                                formControlName="trigger"
                            >
                                <mat-option value="">None</mat-option>
                                @for (
                                    template of definition_list();
                                    track template
                                ) {
                                    <mat-option [value]="template.id">
                                        <div
                                            class="my-2 flex flex-col-reverse leading-tight"
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
                                }
                            </mat-select>
                            <mat-error>A trigger is required</mat-error>
                        </mat-form-field>
                    </div>
                    <button
                        btn
                        matRipple
                        class="my-4 w-1/4 flex-1"
                        matTooltip="Values that get replaced in the email template when sent"
                        [disabled]="!form.value.trigger"
                        [matMenuTriggerFor]="tracking_menu"
                    >
                        Placeholders
                    </button>
                    <mat-menu #tracking_menu="matMenu" class="max-h-96">
                        @for (
                            field of active_trigger()?.fields || [];
                            track field
                        ) {
                            <button
                                mat-menu-item
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
                        }
                        @if (!(active_trigger()?.fields || []).length) {
                            <button mat-menu-item [disabled]="true">
                                No placeholders available
                            </button>
                        }
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
                    <icon matPrefix class="relative -left-1 text-2xl">
                        description
                    </icon>
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
                    class="block min-h-[calc(100vh-28rem)]"
                ></rich-text-input>
                <div
                    class="bg-base-100 sticky bottom-0 flex items-center justify-end space-x-2"
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
            <div class="bg-base-100 absolute inset-0">
                <div
                    class="flex h-full w-full flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            </div>
        </ng-template>
    `,
    styles: [``],
    imports: [
        MatProgressSpinnerModule,
        MatRippleModule,
        RichTextInputComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTooltipModule,
        RouterModule,
        MatSelectModule,
    ],
})
export class EmailTemplateFormComponent extends AsyncHandler {
    private _state = inject(EmailStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _clipboard = inject(Clipboard);

    public readonly loading = signal('');
    public readonly template = signal<EmailTemplate>(null);
    public readonly definitions = this._state.template_definitions;
    public readonly definition_list = toSignal(this.definitions, {
        initialValue: [],
    });
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
    public readonly active_trigger_id = toSignal(
        this.form.controls.trigger.valueChanges,
        { initialValue: this.form.controls.trigger.value },
    );
    public readonly active_trigger = computed(() =>
        this.definition_list().find((_) => _.id === this.active_trigger_id()),
    );
    private readonly _route_params = toSignal(this._route.paramMap, {
        initialValue: null,
    });
    private readonly _template_id = computed(
        () => this._route_params()?.get('id') || null,
    );

    constructor() {
        super();
        effect(() => {
            const template_id = this._template_id();
            if (template_id) {
                void this.loadTemplate(template_id);
            }
        });
    }

    public copyField(field: string) {
        this._clipboard.copy(`%{${field}}`);
        notifySuccess(`Copied field "${field}" to clipboard.`);
    }

    public async save() {
        this.loading.set('Saving email template...');
        await this._state.saveTemplate({
            ...(this.template() || {}),
            ...this.form.getRawValue(),
            text: extractTextFromHTML(this.form.getRawValue().html || ''),
        } as EmailTemplate);
        this.loading.set('');
        notifySuccess('Successfully saved email template');
        this._router.navigate(['/email-templates']);
    }

    private async loadTemplate(template_id: string) {
        this.loading.set('Loading email template...');
        const template = await this._state.loadTemplate(template_id);
        this.template.set(template);
        this.loading.set('');
        console.log('Template:', template);
        if (!template) {
            this._router.navigate(['/email-templates', 'manage']);
        } else {
            this.form.patchValue(template);
        }
    }
}
