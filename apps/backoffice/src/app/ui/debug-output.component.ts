import {
    Component,
    ElementRef,
    OnInit,
    Renderer2,
    ViewChild,
} from '@angular/core';
import { ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR } from 'apps/backoffice/src/app/common/angular-animations';
import { BaseClass } from 'apps/backoffice/src/app/common/base.class';
import { PlaceDebugService } from 'apps/backoffice/src/app/common/debug.service';
import { eventToPoint } from 'apps/backoffice/src/app/common/general';
import { Point } from 'apps/backoffice/src/app/common/types';

@Component({
    selector: 'app-debug-output',
    template: `
        <ng-container *ngIf="is_enabled">
            <div
                class="absolute bottom-2 right-2"
                [class.disabled]="!show_content"
            >
                <div
                    class="relative rounded-lg overflow-hidden border border-gray-200 bg-neutral-800 text-white shadow z-10"
                    content
                    #content
                    [@show]="show_content ? 'show' : 'hide'"
                    [style.height]="height + 'px'"
                    [style.width]="width + 'px'"
                >
                    <div class="flex items-center">
                        <div class="flex flex-col flex-1 w-1/2 p-2">
                            <p i18n="@@debugConsole">Debug Console</p>
                            <div class="text-xs opacity-60 underline" [matTooltip]="module_list">
                                {{ modules.length }} { modules.length, plural,
                                =1 { module } other { modules } }
                            </div>
                        </div>
                        <button
                            mat-icon-button
                            class="mr-2"
                            [matMenuTriggerFor]="menu"
                        >
                            <app-icon
                                className="backoffice-dots-three-vertical"
                            ></app-icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                (click)="clearBindings()"
                                i18n="@@clear"
                            >
                                Unbind Modules
                            </button>
                            <button
                                mat-menu-item
                                (click)="clearDebugMessages()"
                                i18n="@@clear"
                            >
                                Clear Terminal
                            </button>
                        </mat-menu>
                    </div>
                    <!-- <new-terminal [lines]="logs" [resize]="resize"></new-terminal> -->
                    <a-terminal [content]="logs" [resize]="resize"></a-terminal>
                    <div
                        class="absolute h-4 -top-2 left-0 right-0"
                        ns-resize
                        (mousedown)="startResize($event, 'y')"
                        (touchstart)="startResize($event, 'y')"
                    ></div>
                    <div
                        class="absolute w-4 -left-2 top-0 bottom-0"
                        ew-resize
                        (mousedown)="startResize($event, 'x')"
                        (touchstart)="startResize($event, 'x')"
                    ></div>
                    <div
                        class="absolute w-4 h-4 -left-2 -top-2"
                        nwse-resize
                        (mousedown)="startResize($event, 'xy')"
                        (touchstart)="startResize($event, 'xy')"
                    ></div>
                </div>
                <button
                    class="absolute bottom-2 right-2 bg-gray-800 text-white pointer-events-auto shadow z-50"
                    mat-icon-button
                    (click)="show_content = !show_content"
                >
                    <app-icon
                        [className]="
                            show_content
                                ? 'backoffice-cross'
                                : 'backoffice-terminal'
                        "
                    ></app-icon>
                    <div
                        class="text-xs h-6 w-6 absolute -top-2 -right-2 bg-blue-600 shadow flex items-center justify-center rounded-full"
                        *ngIf="!show_content"
                    >
                        {{ modules.length }}
                    </div>
                </button>
            </div>
        </ng-container>
    `,
    styles: [
        `
            :host > div {
                max-height: calc(100vh - 1em);
                max-width: calc(100vw - 1em);
                z-index: 999;
            }

            [content] {
                min-width: 24rem;
                min-height: 15rem;
                max-height: calc(100vh - 1rem);
                max-width: calc(100vw - 1rem);
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
export class DebugOutputComponent extends BaseClass implements OnInit {
    /** Whether display output is shown */
    public show_content: boolean = true;
    /** Display string for debug logs */
    public logs: string //[] = [];
    /** Height of the debug console */
    public height: number = 384;
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

    public get modules() {
        return this._service.modules;
    }

    public get module_list() {
        const o = this._service.module_names;
        return Object.keys(o).map((k) => `${o[k]} (${k})`).join('\n');
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
                this.logs = this._service.terminal_string //.split('\n');
                // console.log('Logs:', this.logs);
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

    /** Clear all the debug logs */
    public clearDebugMessages() {
        this._service.clearEvents();
    }

    public clearBindings() {
        this._service.unbindAll();
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
}
