import {
    Component,
    computed,
    EventEmitter,
    inject,
    OnInit,
    Output,
    signal,
    viewChild,
} from '@angular/core';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignagePlugin } from '@placeos/ts-client';

import { AsyncHandler } from '../../common/async-handler.class';
import { getInvalidFields } from '../../common/general';
import { HotkeysService } from '../../common/hotkeys.service';
import { i18n } from '../../common/locale.service';
import { notifyError, notifySuccess } from '../../common/notifications';
import { DialogEvent } from '../../common/types';
import { FullscreenModalShellComponent } from '../../ui/fullscreen-modal-shell.component';
import { SettingsToggleComponent } from '../../ui/settings-toggle.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { SchemaFormComponent } from './schema-form.component';
import {
    PluginErrorPayload,
    PluginLoadedPayload,
    SignagePluginEmbedComponent,
} from './signage-plugin-embed.component';
import { generateSignagePluginFormFields } from './signage-plugins.utilities';

export interface SignagePluginModalData {
    item: SignagePlugin;
    save: (item: Partial<SignagePlugin>) => Promise<SignagePlugin>;
}

@Component({
    selector: 'signage-plugin-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (edit
                    ? 'ADMIN.SIGNAGE_PLUGINS_EDIT'
                    : 'ADMIN.SIGNAGE_PLUGINS_NEW'
                ) | translate
            "
            [loading]="loading"
            (save)="submit()"
        >
            @if (form) {
                <form class="flex flex-col" [formGroup]="form">
                    <div class="field">
                        <label
                            for="plugin-name"
                            [class.error]="
                                form.controls.name.invalid &&
                                form.controls.name.touched
                            "
                        >
                            {{ 'COMMON.FIELD_NAME' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="plugin-name"
                                [placeholder]="'COMMON.FIELD_NAME' | translate"
                                formControlName="name"
                                required
                            />
                            <mat-error>{{
                                'ADMIN.SIGNAGE_PLUGINS_NAME_REQUIRED'
                                    | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="description">
                            {{ 'COMMON.FIELD_DESCRIPTION' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="
                                    'COMMON.FIELD_DESCRIPTION' | translate
                                "
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label
                            for="plugin-uri"
                            [class.error]="
                                form.controls.uri.invalid &&
                                form.controls.uri.touched
                            "
                        >
                            {{ 'ADMIN.SIGNAGE_PLUGINS_FIELD_URI' | translate
                            }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="plugin-uri"
                                [placeholder]="
                                    'ADMIN.SIGNAGE_PLUGINS_FIELD_URI'
                                        | translate
                                "
                                formControlName="uri"
                                required
                            />
                            <mat-error>{{
                                'ADMIN.SIGNAGE_PLUGINS_URI_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="field">
                        <label for="playback-type">
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_PLAYBACK_TYPE'
                                    | translate
                            }}
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                id="playback-type"
                                matInput
                                name="playback-type"
                                [value]="playback_type_name()"
                                readonly
                            />
                        </mat-form-field>
                    </div>
                    <div class="field mb-4">
                        <settings-toggle
                            class="w-full"
                            [name]="
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_ENABLED'
                                    | translate
                            "
                            formControlName="enabled"
                        ></settings-toggle>
                    </div>
                    <!-- Schema / Defaults section -->
                    <div class="field">
                        <div class="mb-2">
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_FIELD_DEFAULTS'
                                    | translate
                            }}
                        </div>
                        @if (schema_loading()) {
                            <div
                                class="flex items-center space-x-2 py-2 text-sm opacity-60"
                            >
                                <mat-progress-bar
                                    mode="indeterminate"
                                    class="w-48"
                                ></mat-progress-bar>
                                <span>{{
                                    'ADMIN.SIGNAGE_PLUGINS_SCHEMA_LOADING'
                                        | translate
                                }}</span>
                            </div>
                        }
                        @if (schema_error()) {
                            <div
                                class="text-error bg-error/10 rounded-sm px-4 py-2 text-sm"
                            >
                                {{
                                    'ADMIN.SIGNAGE_PLUGINS_SCHEMA_ERROR'
                                        | translate
                                }}
                            </div>
                        }
                        @if (schema()) {
                            <div class="bg-base-200/50 mb-2 rounded-sm p-2">
                                <schema-form
                                    #schema_form_el
                                    [schema]="schema()"
                                    formControlName="defaults"
                                />
                            </div>
                        }
                        @if (
                            !schema_loading() && !schema() && !schema_error()
                        ) {
                            <div
                                class="bg-base-200 rounded-sm p-8 text-center text-sm opacity-60"
                            >
                                {{
                                    'ADMIN.SIGNAGE_PLUGINS_SCHEMA_EMPTY'
                                        | translate
                                }}
                            </div>
                        }
                    </div>
                </form>
            }
            <!-- Hidden embed to load plugin schema -->
            @if (embed_plugin()) {
                <div class="hidden">
                    <signage-plugin-embed
                        [plugin]="embed_plugin()"
                        (detailsChange)="onPluginLoaded($event)"
                        (schemaChange)="onSchemaLoaded($event)"
                        (plugin_error)="onPluginError($event)"
                    />
                </div>
            }
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        SchemaFormComponent,
        SettingsToggleComponent,
        SignagePluginEmbedComponent,
        TranslatePipe,
    ],
})
export class SignagePluginModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog_ref =
        inject<MatDialogRef<SignagePluginModalComponent>>(MatDialogRef);
    private _data = inject<SignagePluginModalData>(MAT_DIALOG_DATA);
    private _hotkey = inject(HotkeysService);

    private readonly _schema_form_el =
        viewChild<SchemaFormComponent>('schema_form_el');

    @Output() public event = new EventEmitter<DialogEvent>();

    public edit: boolean;
    public form: UntypedFormGroup;
    public loading: string;

    public readonly embed_plugin = signal<SignagePlugin>(null);
    public readonly schema = signal<Record<string, unknown>>(null);
    public readonly schema_loading = signal(false);
    public readonly schema_error = signal(false);
    public readonly playback_type = signal('static');
    public readonly playback_type_name = computed(() => {
        const playback_type = this.playback_type();
        switch (playback_type) {
            case 'interactive':
                return i18n('ADMIN.SIGNAGE_PLUGINS_PLAYBACK_INTERACTIVE');
            case 'playsthrough':
                return i18n('ADMIN.SIGNAGE_PLUGINS_PLAYBACK_PLAYSTHROUGH');
            default:
                return i18n('ADMIN.SIGNAGE_PLUGINS_PLAYBACK_STATIC');
        }
    });

    public ngOnInit(): void {
        this.edit = !!this._data.item?.id;
        this.form = generateSignagePluginFormFields(this._data.item);
        this.playback_type.set(
            this.form.controls.playback_type.value || 'static',
        );

        // If editing and we already have a URI, load the plugin to get schema
        if (this._data.item?.uri) {
            this._loadPlugin(this._data.item.uri);
        }

        // Watch URI changes to reload plugin embed
        this.subscription(
            'uri_change',
            this.form.controls.uri.valueChanges.subscribe((uri: string) => {
                this.timeout(
                    'uri_debounce',
                    () => {
                        if (uri) {
                            this._loadPlugin(uri);
                        } else {
                            this.embed_plugin.set(null);
                            this.schema.set(null);
                            this.schema_loading.set(false);
                            this.schema_error.set(false);
                            this.playback_type.set('static');
                            this.form.patchValue(
                                { playback_type: 'static' },
                                { emitEvent: false },
                            );
                        }
                    },
                    800,
                );
            }),
        );

        this.subscription(
            'save_key',
            this._hotkey.listen(['KeyS'], () => this.submit()),
        );
    }

    public onSchemaLoaded(config_schema: Record<string, unknown>): void {
        this.schema_loading.set(false);
        this.schema_error.set(false);
        if (config_schema && Object.keys(config_schema).length > 0) {
            this.schema.set(config_schema);
        } else {
            this.schema.set(null);
        }
    }

    public onPluginLoaded(details: PluginLoadedPayload): void {
        const playback_type = this._resolvePlaybackType(details);
        if (!playback_type) return;
        this.playback_type.set(playback_type);
        this.form.patchValue({ playback_type }, { emitEvent: false });
    }

    public onPluginError(_error: PluginErrorPayload): void {
        this.schema_loading.set(false);
        this.schema_error.set(true);
    }

    public async submit(): Promise<void> {
        this.form.markAllAsTouched();
        // Validate the schema-generated defaults form if present
        const schema_form = this._schema_form_el();
        if (schema_form && !schema_form.isValid()) {
            return notifyError(i18n('ADMIN.SIGNAGE_PLUGINS_DEFAULTS_INVALID'));
        }
        if (!this.form.valid) {
            return notifyError(
                i18n('COMMON.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form).join(', '),
                }),
            );
        }
        this.loading = i18n('ADMIN.SIGNAGE_PLUGINS_SAVING');
        this._dialog_ref.disableClose = true;
        const payload: Partial<SignagePlugin> = {
            ...this._data.item,
            ...this.form.value,
            params: this.schema() || this._data.item?.params || {},
        };
        try {
            const result = await this._data.save(payload);
            this._dialog_ref.disableClose = false;
            this.event.emit({
                reason: 'done',
                metadata: { item: result },
            });
            notifySuccess(i18n('ADMIN.SIGNAGE_PLUGINS_SAVE_SUCCESS'));
            this._dialog_ref.close({
                reason: 'done',
                metadata: { item: result },
            });
        } catch (err) {
            this.loading = null;
            this._dialog_ref.disableClose = false;
            notifyError(
                i18n('ADMIN.SIGNAGE_PLUGINS_SAVE_ERROR', {
                    error: JSON.stringify(err.response || err.message || err),
                }),
            );
        }
    }

    private _loadPlugin(uri: string): void {
        this.schema.set(null);
        this.schema_loading.set(true);
        this.schema_error.set(false);
        this.embed_plugin.set(new SignagePlugin({ uri }));
        // Timeout if plugin doesn't respond
        this.timeout(
            'schema_timeout',
            () => {
                if (this.schema_loading()) {
                    this.schema_loading.set(false);
                    // Not an error - plugin may simply not provide a schema
                }
            },
            10000,
        );
    }

    private _resolvePlaybackType(details: PluginLoadedPayload) {
        const capabilities = details?.capabilities;
        if (!capabilities) return null;
        if (capabilities.static_media) return 'static';
        if (capabilities.can_finish) return 'playsthrough';
        return 'interactive';
    }
}
