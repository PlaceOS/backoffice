import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR } from 'apps/backoffice/src/app/common/angular-animations';
import { AsyncHandler } from 'apps/backoffice/src/app/common/async-handler.class';
import { PlaceDebugService } from 'apps/backoffice/src/app/common/debug.service';
import { eventToPoint } from 'apps/backoffice/src/app/common/general';
import { Point } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'app-debug-output',
    template: `
        <ng-container *ngIf="is_enabled">
            <div
                [class]="
                    debug_position === 'floating'
                        ? 'absolute bottom-2 right-2'
                        : 'h-full w-full'
                "
                (window:resize)="onWindowResize()"
                *ngIf="is_shown"
            >
                <div
                    class="relative overflow-hidden border border-base-200 bg-[#212121] text-white shadow z-10 flex flex-col"
                    content
                    #content
                    [@show]="is_shown ? 'show' : 'hide'"
                    [style.height]="
                        debug_position === 'side' ? '100%' : height + 'px'
                    "
                    [style.width]="
                        debug_position === 'below' ? '100%' : width + 'px'
                    "
                >
                    <div class="p-3 text-sm">{{ event_count }} messages</div>
                    <new-terminal
                        [lines]="logs"
                        [resize]="resize"
                    ></new-terminal>
                    <!-- <a-terminal [content]="logs" [resize]="resize"></a-terminal> -->
                    <div
                        class="absolute h-4 -top-2 left-0 right-0 select-none"
                        ns-resize
                        (mousedown)="startResize($event, 'y')"
                        (touchstart)="startResize($event, 'y')"
                    ></div>
                    <div
                        class="absolute w-4 -left-2 top-0 bottom-0 select-none"
                        ew-resize
                        (mousedown)="startResize($event, 'x')"
                        (touchstart)="startResize($event, 'x')"
                    ></div>
                    <div
                        class="absolute w-4 h-4 -left-2 -top-2 select-none"
                        nwse-resize
                        (mousedown)="startResize($event, 'xy')"
                        (touchstart)="startResize($event, 'xy')"
                    ></div>
                    <div
                        actions
                        class="absolute flex items-center space-x-2 bottom-2 right-2"
                    >
                        <button
                            btn
                            icon
                            class="bg-neutral-focus text-neutral-content shadow rounded-full"
                            (click)="downloadLogs()"
                        >
                            <app-icon matTooltip="Download Messages">
                                download
                            </app-icon>
                        </button>
                        <button
                            btn
                            icon
                            class="bg-neutral-focus text-neutral-content shadow rounded-full"
                            (click)="toggleDebugPosition()"
                        >
                            <app-icon matTooltip="Toggle Position">{{
                                debug_position === 'side'
                                    ? 'border_bottom'
                                    : 'border_right'
                            }}</app-icon>
                        </button>
                        <button
                            btn
                            icon
                            class="bg-neutral-focus text-neutral-content shadow rounded-full"
                            (click)="clearDebugMessages()"
                        >
                            <app-icon matTooltip="Clear Messages">
                                clear_all
                            </app-icon>
                        </button>
                        <button
                            btn
                            icon
                            (click)="clearBindings()"
                            class="bg-neutral-focus text-neutral-content shadow rounded-full"
                            matTooltip="Unbind Modules"
                        >
                            <app-icon>cancel_presentation</app-icon>
                        </button>
                        <button
                            btn
                            icon
                            (click)="close()"
                            class="bg-neutral-focus text-neutral-content shadow rounded-full"
                            matTooltip="Close Console"
                        >
                            <app-icon>close</app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </ng-container>
    `,
    styles: [
        `
            :host > div {
                max-height: 100%;
                max-width: 100%;
                z-index: 999;
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
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR],
})
export class DebugOutputComponent extends AsyncHandler implements OnInit {
    /** Whether display output is shown */
    public show_content: boolean = true;
    /** Display string for debug logs */
    public logs: string[] = [];
    /** Height of the debug console */
    public height: number = 240;
    /** Width of the debug console */
    public width: number = 768;
    /** Toggle to resize the terminal display */
    public resize: boolean;
    /** Start point for resizing the console box */
    private _resize_start: Point;

    @ViewChild('content', { static: false })
    private _content_el: ElementRef<HTMLDivElement>;

    /** Whether user is listening for debug information */
    public get is_enabled(): boolean {
        return this._service.is_enabled;
    }
    public get is_shown(): boolean {
        return this._service.is_shown;
    }
    public get event_count(): number {
        return this._service.event_list.length;
    }

    public get modules() {
        return this._service.modules;
    }

    public get module_list() {
        const o = this._service.module_names;
        return Object.keys(o)
            .map((k) => `${o[k]} (${k})`)
            .join('\n');
    }

    public get debug_position() {
        return this._service.position;
    }

    constructor(
        private _service: PlaceDebugService,
        private _renderer: Renderer2
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'changes',
            this._service.events.subscribe((_) => {
                this.logs = this._service.terminal_string.split('\n');
            })
        );
        this.subscription(
            'binding_change',
            this._service.changed.subscribe(() => {
                if (!this._service.is_listening) {
                    this.show_content = false;
                }
            })
        );
    }

    public close() {
        this._service.is_shown = false;
    }

    public toggleDebugPosition() {
        const position = this.debug_position;
        const new_pos = position === 'side' ? 'below' : 'side';
        this.height = new_pos === 'side' ? 768 : 240;
        this.width = new_pos === 'side' ? 240 : 768;
        this._service.position = new_pos;
    }

    /** Clear all the debug logs */
    public clearDebugMessages() {
        this._service.clearEvents();
    }

    public clearBindings() {
        this._service.unbindAll();
    }

    public onWindowResize() {
        this.timeout('resize', () => (this.resize = !this.resize), 50);
    }

    public startResize(event: MouseEvent | TouchEvent, dir: 'x' | 'y' | 'xy') {
        this._resize_start = eventToPoint(event);
        if (event instanceof MouseEvent) {
            this.subscription(
                'resize_move',
                this._renderer.listen('window', 'mousemove', (event) =>
                    this.resizeMove(event, dir)
                )
            );
            this.subscription(
                'resize_end',
                this._renderer.listen('window', 'mouseup', (_) => {
                    this.unsub('resize_move');
                    this.unsub('resize_end');
                    const box =
                        this._content_el.nativeElement.getBoundingClientRect();
                    this.height = box.height;
                    this.width = box.width;
                })
            );
        } else {
            this.subscription(
                'resize_move',
                this._renderer.listen('window', 'touchmove', (event) =>
                    this.resizeMove(event, dir)
                )
            );
            this.subscription(
                'resize_end',
                this._renderer.listen('window', 'touchend', (_) => {
                    this.unsub('resize_move');
                    this.unsub('resize_end');
                    const box =
                        this._content_el.nativeElement.getBoundingClientRect();
                    this.height = box.height;
                    this.width = box.width;
                })
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
            this.width = this.width - diff.x;
        }
        if (dir.indexOf('y') >= 0) {
            this.height = this.height - diff.y;
        }
        this._resize_start = point;
        this.timeout('resize', () => (this.resize = !this.resize), 50);
    }

    public downloadLogs() {
        const blob = new Blob([this.logs.join('\n')], {
            type: 'text/plain;charset=utf-8',
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'debug.log';
        a.click();
    }
}
