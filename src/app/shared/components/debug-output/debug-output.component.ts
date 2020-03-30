import { Component, OnInit, Renderer2 } from '@angular/core';

import { EngineDebugService } from 'src/app/services/debug.service';
import { ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR } from '../../globals/angular-animations';
import { BaseDirective } from '../../globals/base.directive';
import { eventToPoint } from '../../utilities/general.utilities';
import { Point } from '../../utilities/types.utilities';

@Component({
    selector: 'app-debug-output',
    templateUrl: './debug-output.component.html',
    styleUrls: ['./debug-output.component.scss'],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND_BIDIR]
})
export class DebugOutputComponent extends BaseDirective implements OnInit {
    /** Whether display output is shown */
    public show_content: boolean = true;
    /** Display string for debug logs */
    public logs: string;
    /** Height of the debug console */
    public height: number = 384;
    /** Width of the debug console */
    public width: number = 768;
    /** Toggle to resize the terminal display */
    public resize: boolean;
    /** Start point for resizing the console box */
    private _resize_start: Point;

    /** Whether user is listening for debug information */
    public get is_enabled(): boolean {
        return this._service.is_listening;
    }
    constructor(private _service: EngineDebugService, private _renderer: Renderer2) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'changes',
            this._service.events.subscribe(_ => {
                this.logs = this._service.terminal_string;
            })
        );
    }

    /** Clear all the debug logs */
    public clearDebugMessages() {
        this._service.clearEvents();
    }

    public startResize(event: MouseEvent | TouchEvent, dir: 'x' | 'y' | 'xy') {
        this._resize_start = eventToPoint(event);
        if (event instanceof MouseEvent) {
            this.subscription(
                'resize_move',
                this._renderer.listen('window', 'mousemove', event => this.resizeMove(event, dir))
            );
            this.subscription(
                'resize_end',
                this._renderer.listen('window', 'mouseup', _ => {
                    this.unsub('resize_move');
                    this.unsub('resize_end');
                })
            );
        } else {
            this.subscription(
                'resize_move',
                this._renderer.listen('window', 'touchmove', event => this.resizeMove(event, dir))
            );
            this.subscription(
                'resize_end',
                this._renderer.listen('window', 'touchend', _ => {
                    this.unsub('resize_move');
                    this.unsub('resize_end');
                })
            );
        }
    }

    private resizeMove(event: MouseEvent | TouchEvent, dir: 'x' | 'y' | 'xy') {
        const point = eventToPoint(event);
        const diff = { x: point.x - this._resize_start.x, y: point.y - this._resize_start.y };
        if (dir.indexOf('x') >= 0) {
            this.width = this.width - diff.x;
        }
        if (dir.indexOf('y') >= 0) {
            this.height = this.height - diff.y;
        }
        this._resize_start = point;
        this.timeout('resize', () => this.resize = !this.resize, 50);
    }

}
