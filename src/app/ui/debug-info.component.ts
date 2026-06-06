import { Component, inject, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PlaceDebugService } from '../common/debug.service';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'debug-info',
    template: `
        @if (debug_enabled()) {
            <div
                class="border-base-300 m-2 flex flex-col justify-between gap-2 rounded-xl border p-2"
            >
                @if (compact()) {
                    <div
                        class="bg-info text-info-content flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="'COMMON.DEBUG_ENABLED' | translate"
                        matTooltipPosition="right"
                    >
                        <icon class="text-2xl">bug_report</icon>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-4xl opacity-10">sdk</icon>
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            {{ debug_module_count() }}
                        </div>
                    </div>
                    <div
                        class="relative flex h-10 w-10 items-center justify-center rounded-sm"
                        [matTooltip]="
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        "
                        matTooltipPosition="right"
                    >
                        <icon class="text-4xl opacity-10"
                            >business_messages</icon
                        >
                        <div
                            class="absolute inset-0 flex items-center justify-center"
                        >
                            {{ debug_message_count() }}
                        </div>
                    </div>
                } @else {
                    <div
                        class="mono bg-info text-info-content rounded-xl p-1 text-center text-xs"
                    >
                        {{ 'COMMON.DEBUG_ENABLED' | translate }}
                    </div>
                    <p class="p-1 text-center text-xs">
                        {{
                            'COMMON.DEBUG_LISTENING_MSG'
                                | translate
                                    : { modules: debug_module_count() }
                                    : debug_module_count()
                        }}<br />
                        {{
                            'COMMON.DEBUG_MSG_COUNT_MSG'
                                | translate
                                    : { count: debug_message_count() }
                                    : debug_message_count()
                        }}
                    </p>
                }
                @if (compact()) {
                    <button icon default matRipple [matMenuTriggerFor]="menu">
                        <icon>more_horiz</icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button mat-menu-item (click)="toggleDebugPosition()">
                            <icon class="text-2xl">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                            <div>Toggle Position</div>
                        </button>
                        <button mat-menu-item (click)="clearDebugMessages()">
                            <icon class="text-2xl">clear_all</icon>
                            <div>Clear Messages</div>
                        </button>
                        <button mat-menu-item (click)="clearBindings()">
                            <icon class="text-2xl">hearing_disabled</icon>
                            <div>Unbind Modules</div>
                        </button>
                        <button mat-menu-item (click)="openDebug()">
                            <icon class="text-2xl">open_in_browser</icon>
                            <div>Open Console</div>
                        </button>
                    </mat-menu>
                } @else {
                    <div actions class="flex items-center justify-center gap-1">
                        <button
                            icon
                            default
                            matRipple
                            (click)="toggleDebugPosition()"
                        >
                            <icon matTooltip="Toggle Position">{{
                                debug_position() === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearDebugMessages()"
                        >
                            <icon matTooltip="Clear Messages">clear_all</icon>
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="clearBindings()"
                        >
                            <icon matTooltip="Unbind Modules"
                                >hearing_disabled</icon
                            >
                        </button>
                        <button icon default matRipple (click)="openDebug()">
                            <icon matTooltip="Open Console"
                                >open_in_browser</icon
                            >
                        </button>
                    </div>
                }
            </div>
        }
    `,
    styles: [],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MatMenuModule,
    ],
})
export class DebugInfoComponent {
    private _debug = inject(PlaceDebugService);

    public readonly compact = input(false);
    public readonly debug_position = this._debug.position;
    public readonly debug_enabled = this._debug.enabled;
    public readonly debug_module_count = this._debug.module_count;
    public readonly debug_message_count = this._debug.event_count;

    public toggleDebugPosition() {
        this._debug.position.update((p) => (p === 'side' ? 'below' : 'side'));
    }

    public openDebug() {
        this._debug.is_shown.set(true);
    }

    /** Clear all the debug logs */
    public clearDebugMessages() {
        this._debug.clearEvents();
    }

    public clearBindings() {
        this._debug.unbindAll();
    }
}
