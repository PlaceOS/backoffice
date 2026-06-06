import {
    Component,
    ElementRef,
    Renderer2,
    inject,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler } from '../common/async-handler.class';
import { PlaceDebugService } from '../common/debug.service';
import { eventToPoint } from '../common/general';
import { Point } from '../common/types';
import { IconComponent } from './icon.component';
import { NewTerminalComponent } from './new-terminal.component';
import { TranslatePipe } from './translate.pipe';

@Component({
    selector: 'app-debug-output',
    template: `
        @if (is_enabled()) {
            @if (is_shown()) {
                <div
                    [class]="
                        debug_position() === 'floating'
                            ? 'absolute right-2 bottom-2'
                            : 'h-full w-full'
                    "
                    (window:resize)="onWindowResize()"
                >
                    <div
                        class="animate-fade-in relative z-10 flex flex-col overflow-hidden border bg-[hsl(0,0%,15%)] text-white shadow-sm"
                        content
                        #content
                        [style.height]="
                            debug_position() === 'side'
                                ? '100%'
                                : height() + 'px'
                        "
                        [style.width]="
                            debug_position() === 'below'
                                ? '100%'
                                : width() + 'px'
                        "
                    >
                        <div class="p-3 text-sm">
                            {{
                                'COMMON.MESSAGE_COUNT'
                                    | translate
                                        : { count: event_count() }
                                        : event_count()
                            }}
                        </div>
                        <new-terminal
                            [lines]="logs()"
                            [resize]="resize()"
                            class="h-1/2 w-full flex-1"
                        />
                        <!-- <a-terminal [content]="logs" [resize]="resize"></a-terminal> -->
                        <div
                            class="absolute -top-2 right-0 left-0 h-4 select-none"
                            ns-resize
                            (mousedown)="startResize($event, 'y')"
                            (touchstart)="startResize($event, 'y')"
                        ></div>
                        <div
                            class="absolute top-0 bottom-0 -left-2 w-4 select-none"
                            ew-resize
                            (mousedown)="startResize($event, 'x')"
                            (touchstart)="startResize($event, 'x')"
                        ></div>
                        <div
                            class="absolute -top-2 -left-2 h-4 w-4 select-none"
                            nwse-resize
                            (mousedown)="startResize($event, 'xy')"
                            (touchstart)="startResize($event, 'xy')"
                        ></div>
                        <div
                            actions
                            class="absolute right-2 bottom-2 flex items-center space-x-2"
                        >
                            <button
                                icon
                                matRipple
                                class="rounded-full bg-[hsl(0,0%,30%)] text-white shadow-sm"
                                (click)="downloadLogs()"
                            >
                                <icon
                                    [matTooltip]="
                                        'COMMON.DEBUG_DOWNLOAD_MESSAGES'
                                            | translate
                                    "
                                >
                                    download
                                </icon>
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-full bg-[hsl(0,0%,30%)] text-white shadow-sm"
                                (click)="toggleDebugPosition()"
                            >
                                <icon
                                    [matTooltip]="
                                        'COMMON.DEBUG_TOGGLE_POSITION'
                                            | translate
                                    "
                                    >{{
                                        debug_position() === 'side'
                                            ? 'border_bottom'
                                            : 'border_right'
                                    }}</icon
                                >
                            </button>
                            <button
                                icon
                                matRipple
                                class="rounded-full bg-[hsl(0,0%,30%)] text-white shadow-sm"
                                (click)="clearDebugMessages()"
                            >
                                <icon
                                    [matTooltip]="
                                        'COMMON.DEBUG_CLEAR_MESSAGES'
                                            | translate
                                    "
                                >
                                    clear_all
                                </icon>
                            </button>
                            <button
                                icon
                                matRipple
                                (click)="clearBindings()"
                                class="rounded-full bg-[hsl(0,0%,30%)] text-white shadow-sm"
                                [matTooltip]="
                                    'COMMON.DEBUG_UNBIND_MODULES' | translate
                                "
                            >
                                <icon>cancel_presentation</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                (click)="close()"
                                class="rounded-full bg-[hsl(0,0%,30%)] text-white shadow-sm"
                                [matTooltip]="
                                    'COMMON.DEBUG_CLOSE_CONSOLE' | translate
                                "
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    </div>
                </div>
            }
        }
    `,
    styles: [
        `
            :host > div {
                max-height: 100%;
                max-width: 100%;
                z-index: 20;
            }

            [content] {
                min-width: 24rem;
                min-height: 15rem;
                max-height: 100%;
                max-width: 100%;
            }

            [content] [actions] {
                opacity: 0;
                transition: opacity 200ms;
            }

            [content]:hover [actions] {
                opacity: 1;
            }

            .disabled {
                pointer-events: none;
            }

            [ns-resize] {
                cursor: ns-resize;
            }

            [ew-resize] {
                cursor: ew-resize;
            }

            [nwse-resize] {
                cursor: nwse-resize;
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        MatRippleModule,
        NewTerminalComponent,
    ],
})
export class DebugOutputComponent extends AsyncHandler {
    private _service = inject(PlaceDebugService);
    private _renderer = inject(Renderer2);

    public readonly compact = input(false);
    /** Display string for debug logs */
    public readonly logs = this._service.terminal_lines;
    /** Height of the debug console */
    public readonly height = signal(240);
    /** Width of the debug console */
    public readonly width = signal(768);
    /** Toggle to resize the terminal display */
    public readonly resize = signal(0);
    public readonly event_count = this._service.event_count;
    /** Whether user is listening for debug information */
    public readonly is_enabled = this._service.enabled;
    public readonly is_shown = this._service.is_shown;
    /** Start point for resizing the console box */
    private _resize_start: Point;

    private readonly _content_el =
        viewChild<ElementRef<HTMLDivElement>>('content');

    public get modules() {
        return this._service.modules;
    }

    public get module_list() {
        const o = this._service.module_names;
        return Object.keys(o)
            .map((k) => `${o[k]} (${k})`)
            .join('\n');
    }

    public readonly debug_position = this._service.position;

    public close() {
        this._service.is_shown.set(false);
    }

    public toggleDebugPosition() {
        this._service.position.update((p) => (p === 'side' ? 'below' : 'side'));
        this.height.set(this._service.position() === 'side' ? 768 : 240);
        this.width.set(this._service.position() === 'side' ? 240 : 768);
    }

    /** Clear all the debug logs */
    public clearDebugMessages() {
        this._service.clearEvents();
    }

    public clearBindings() {
        this._service.unbindAll();
    }

    public onWindowResize() {
        this.timeout('resize', () => this.resize.set(Date.now()), 50);
    }

    public startResize(event: MouseEvent | TouchEvent, dir: 'x' | 'y' | 'xy') {
        this._resize_start = eventToPoint(event);
        if (event instanceof MouseEvent) {
            this.subscription(
                'resize_move',
                this._renderer.listen('window', 'mousemove', (event) =>
                    this.resizeMove(event, dir),
                ),
            );
            this.subscription(
                'resize_end',
                this._renderer.listen('window', 'mouseup', () => {
                    this.unsub('resize_move');
                    this.unsub('resize_end');
                    const box =
                        this._content_el().nativeElement.getBoundingClientRect();
                    this.height.set(box.height);
                    this.width.set(box.width);
                }),
            );
        } else {
            this.subscription(
                'resize_move',
                this._renderer.listen('window', 'touchmove', (event) =>
                    this.resizeMove(event, dir),
                ),
            );
            this.subscription(
                'resize_end',
                this._renderer.listen('window', 'touchend', () => {
                    this.unsub('resize_move');
                    this.unsub('resize_end');
                    const box =
                        this._content_el().nativeElement.getBoundingClientRect();
                    this.height.set(box.height);
                    this.width.set(box.width);
                }),
            );
        }
    }

    private resizeMove(event: MouseEvent | TouchEvent, dir: 'x' | 'y' | 'xy') {
        const point = eventToPoint(event);
        const diff = {
            x: point.x - this._resize_start.x,
            y: point.y - this._resize_start.y,
        };
        if (dir.indexOf('x') >= 0) {
            this.width.set(this.width() - diff.x);
        }
        if (dir.indexOf('y') >= 0) {
            this.height.set(this.height() - diff.y);
        }
        this._resize_start = point;
        this.timeout('resize', () => this.resize.set(Date.now()), 50);
    }

    public downloadLogs() {
        const blob = new Blob([this.logs().join('\n')], {
            type: 'text/plain;charset=utf-8',
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'debug.log';
        a.click();
    }
}
