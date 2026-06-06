import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignagePlugin } from '@placeos/ts-client';

import { AsyncHandler } from '../../common/async-handler.class';
import { DialogEvent } from '../../common/types';
import { IconComponent } from '../../ui/icon.component';
import { TranslatePipe } from '../../ui/translate.pipe';
import { SchemaFormComponent } from './schema-form.component';
import {
    PluginConfigPayload,
    PluginErrorPayload,
    PluginLoadedPayload,
    SignagePluginEmbedComponent,
    SignagePluginMessageType,
} from './signage-plugin-embed.component';

export interface SignagePluginTestModalData {
    item: SignagePlugin;
}

@Component({
    selector: 'signage-plugin-test-modal',
    template: `
        <div class="flex h-screen w-screen overflow-hidden">
            <!-- Sidebar -->
            <aside
                class="border-base-300 bg-base-100 relative flex h-full shrink-0 flex-col border-r transition-[width] duration-200"
                [class.w-96]="sidebar_open()"
                [class.w-0]="!sidebar_open()"
            >
                <div
                    class="flex h-full w-96 flex-col overflow-hidden"
                    [class.invisible]="!sidebar_open()"
                >
                    <!-- Sidebar header -->
                    <header
                        class="border-base-300 flex items-center justify-between border-b px-4 py-3"
                    >
                        <h3 class="text-lg font-medium">
                            {{
                                'ADMIN.SIGNAGE_PLUGINS_TEST_CONFIG' | translate
                            }}
                        </h3>
                    </header>

                    <!-- Plugin info -->
                    <div class="border-base-300 border-b px-4 py-3">
                        <div
                            class="flex w-full items-center justify-between gap-4"
                        >
                            <div class="text-sm font-medium">
                                {{ plugin().name }}
                            </div>
                            <div class="flex items-center gap-2">
                                <div
                                    class="h-2 w-2 rounded-full"
                                    [class.bg-success]="
                                        status() === 'ready' ||
                                        status() === 'loaded'
                                    "
                                    [class.bg-error]="status() === 'error'"
                                    [class.bg-warning]="status() === 'unknown'"
                                    [class.bg-info]="status() === 'finished'"
                                ></div>
                                <span class="text-xs uppercase">{{
                                    status()
                                }}</span>
                            </div>
                        </div>
                        <div class="mt-1 truncate font-mono text-xs opacity-60">
                            {{ plugin().uri }}
                        </div>
                    </div>

                    <!-- Config form -->
                    <div class="flex-1 overflow-auto px-4 py-3">
                        @if (schema_loading()) {
                            <div
                                class="flex items-center gap-2 py-2 text-sm opacity-60"
                            >
                                <mat-progress-bar
                                    mode="indeterminate"
                                    class="w-full"
                                />
                            </div>
                        }
                        @if (schema()) {
                            <div class="mb-2 block text-sm font-medium">
                                {{ 'COMMON.CONFIG' | translate }}
                            </div>
                            <schema-form
                                [schema]="schema()"
                                [ngModel]="config_values()"
                                (ngModelChange)="onConfigChange($event)"
                            />
                        }
                        @if (!schema_loading() && !schema()) {
                            <div
                                class="bg-base-200 rounded-sm p-6 text-center text-sm opacity-60"
                            >
                                {{
                                    'ADMIN.SIGNAGE_PLUGINS_TEST_NO_SCHEMA'
                                        | translate
                                }}
                            </div>
                        }
                    </div>

                    <!-- Sidebar actions -->
                    <footer
                        class="border-base-300 flex items-center gap-2 border-t px-4 py-3"
                    >
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sendConfig()"
                            [disabled]="status() === 'unknown'"
                        >
                            <div class="flex items-center justify-center gap-2">
                                <icon class="text-lg">send</icon>
                                <div class="pr-2">
                                    {{
                                        'ADMIN.SIGNAGE_PLUGINS_TEST_SEND'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sendPlay()"
                            [disabled]="status() === 'unknown'"
                        >
                            <div class="flex items-center justify-center gap-2">
                                <icon class="text-lg">play_arrow</icon>
                                <div class="pr-2">
                                    {{
                                        'ADMIN.SIGNAGE_PLUGINS_TEST_PLAY'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                    </footer>
                </div>
            </aside>

            <!-- Sidebar toggle (always visible) -->
            <button
                icon
                matRipple
                class="bg-base-100 border-base-300 absolute bottom-4 left-2 z-20 border shadow-md transition-[left] duration-200"
                [style.left]="sidebar_open() ? '22.5rem' : '0.5rem'"
                (click)="sidebar_open.set(!sidebar_open())"
            >
                <icon>{{
                    sidebar_open() ? 'chevron_left' : 'chevron_right'
                }}</icon>
            </button>

            <!-- Main content: plugin preview -->
            <main
                class="bg-base-200 relative flex flex-1 flex-col overflow-hidden"
            >
                <!-- Top bar -->
                <header
                    class="bg-base-100 border-base-300 flex items-center justify-between border-b px-4 py-2"
                >
                    <h2 class="text-xl font-medium">
                        {{ 'ADMIN.SIGNAGE_PLUGINS_TEST_HEADING' | translate }}
                        &mdash; {{ plugin().name }}
                    </h2>
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                </header>

                <!-- Plugin embed area -->
                <div class="relative flex-1 overflow-hidden p-2">
                    @if (plugin()?.uri) {
                        <signage-plugin-embed
                            class="block h-full w-full [&>iframe]:h-full [&>iframe]:w-full [&>iframe]:rounded-lg [&>iframe]:border-0"
                            [plugin]="plugin()"
                            [config]="active_config()"
                            [play]="play_counter()"
                            [(details)]="details"
                            [(schema)]="embed_schema"
                            [(status)]="embed_status"
                            (plugin_error)="onPluginError($event)"
                        />
                    }

                    <!-- Error overlay -->
                    @if (plugin_error()) {
                        <div
                            class="bg-error/10 border-error absolute inset-4 flex items-center justify-center rounded-sm border"
                        >
                            <div class="text-center">
                                <icon class="text-error mb-2 text-4xl"
                                    >error</icon
                                >
                                <p class="text-error text-sm font-medium">
                                    {{ plugin_error().message }}
                                </p>
                                @if (plugin_error().code) {
                                    <p
                                        class="mt-1 font-mono text-xs opacity-60"
                                    >
                                        {{ plugin_error().code }}
                                    </p>
                                }
                            </div>
                        </div>
                    }
                </div>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [
        FormsModule,
        MatDialogModule,
        MatRippleModule,
        MatProgressBarModule,
        IconComponent,
        TranslatePipe,
        SchemaFormComponent,
        SignagePluginEmbedComponent,
    ],
})
export class SignagePluginTestModalComponent
    extends AsyncHandler
    implements OnInit
{
    private _dialog_ref =
        inject<MatDialogRef<SignagePluginTestModalComponent>>(MatDialogRef);
    private _data = inject<SignagePluginTestModalData>(MAT_DIALOG_DATA);

    @Output() public event = new EventEmitter<DialogEvent>();

    public readonly sidebar_open = signal(true);
    public readonly schema_loading = signal(false);
    public readonly schema = signal<Record<string, unknown>>(null);
    public readonly config_values = signal<Record<string, unknown>>({});
    public readonly active_config = signal<PluginConfigPayload>(null);
    public readonly play_counter = signal(0);
    public readonly plugin_error = signal<PluginErrorPayload>(null);
    public readonly status = signal<SignagePluginMessageType | 'unknown'>(
        'unknown',
    );

    public details: PluginLoadedPayload = null;
    public embed_schema: Record<string, unknown> = {};
    public embed_status: SignagePluginMessageType | 'unknown' = 'unknown';

    public plugin(): SignagePlugin {
        return this._data.item;
    }

    public ngOnInit(): void {
        this.schema_loading.set(true);

        // Poll embed status into our signal
        this.interval(
            'sync_status',
            () => {
                this.status.set(this.embed_status);
                if (
                    this.embed_schema &&
                    Object.keys(this.embed_schema).length > 0
                ) {
                    if (!this.schema()) {
                        this.schema.set(this.embed_schema);
                        this.schema_loading.set(false);
                        // Pre-fill config with plugin defaults
                        if (this._data.item?.defaults) {
                            this.config_values.set({
                                ...this._data.item.defaults,
                            });
                        }
                    }
                }
            },
            200,
        );

        // Timeout for schema loading
        this.timeout(
            'schema_timeout',
            () => {
                if (this.schema_loading()) {
                    this.schema_loading.set(false);
                }
            },
            10000,
        );
    }

    public onConfigChange(values: Record<string, unknown>): void {
        this.config_values.set(values);
    }

    public sendConfig(): void {
        this.plugin_error.set(null);
        const payload: PluginConfigPayload = {
            instance_id: `test-${Date.now()}`,
            config: this.config_values(),
        };
        this.active_config.set(payload);
    }

    public sendPlay(): void {
        this.plugin_error.set(null);
        this.play_counter.set(this.play_counter() + 1);
    }

    public onPluginError(error: PluginErrorPayload): void {
        this.plugin_error.set(error);
    }
}
