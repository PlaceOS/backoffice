import { AfterViewInit, Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';
import { Point } from '../common/types';

function scale(domain, range) {
    const m = (range[1] - range[0]) / (domain[1] - domain[0]);
    return (num) => range[0] + m * (num - domain[0]);
}

const COLORS: [string, string][] = [
    ['hsla(217, 91%, 60%, 1)', 'hsla(217, 91%, 60%, 0.4)'],
    ['hsla(118, 50%, 43%, 1)', 'hsla(118, 50%, 43%, 0.4)'],
];

@Component({
    selector: '[basic-line-graph]',
    template: ` <canvas #canvas class="h-full w-full"></canvas> `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    standalone: false,
})
export class BasicLineGraphComponent
    extends AsyncHandler
    implements AfterViewInit
{
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);

    public readonly lines = input<Point[][]>([]);

    private readonly _canvas_el = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

    public ngAfterViewInit() {
        this._setupCanvas();
        requestAnimationFrame(() => this._drawGraph());
    }

    private _setupCanvas() {
        const _canvas_el = this._canvas_el();
        if (!_canvas_el?.nativeElement) {
            return this.timeout('setup', () => this._setupCanvas());
        }
        const canvas_el = _canvas_el?.nativeElement!;
        const container_box =
            this._element.nativeElement.getBoundingClientRect();
        canvas_el.width = container_box.width * 2;
        canvas_el.height = container_box.height * 2;
    }

    private _drawGraph() {
        const _canvas_el = this._canvas_el();
        if (!_canvas_el?.nativeElement) return;
        const ctx = _canvas_el.nativeElement.getContext('2d');
        if (!ctx) return;
        let { width, height } = _canvas_el.nativeElement;
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        const padding = 12;
        ctx.translate(padding, padding);
        width -= padding * 2;
        height -= padding * 2;
        const axis_start = { x: 40, y: 16 };
        const subdivisions = 4;
        ctx.strokeStyle = 'currentColor';
        ctx.lineWidth = 1;
        // Y-Axis Lines
        ctx.setLineDash([6, 4]);
        for (let i = 0; i < subdivisions; i++) {
            ctx.beginPath();
            ctx.moveTo(
                axis_start.x,
                (height - axis_start.y) * (i / subdivisions),
            );
            ctx.lineTo(width - 2, (height - axis_start.y) * (i / subdivisions));
            ctx.stroke();
        }
        ctx.setLineDash([]);
        // Draw Y-Axis Labels
        ctx.font = '20px Fira Code';
        ctx.fillStyle = 'currentColor';
        ctx.fillText('50%', -4, (height - axis_start.y) / 2 + 8);
        ctx.fillText('100%', -12, 8);
        // Draw X-Axis Labels
        ctx.fillText('0', width - 12, height + 4);
        ctx.fillText('60s', axis_start.x, height + 4);

        // Draw Lines
        for (const line of this.lines()) {
            this._drawLine(
                ctx,
                [axis_start.x, 0, width - axis_start.x, height - axis_start.y],
                line,
                COLORS[this.lines().indexOf(line) % COLORS.length],
            );
        }

        ctx.strokeStyle = 'currentColor';
        ctx.lineWidth = 2;

        // X-Axis
        ctx.beginPath();
        ctx.moveTo(axis_start.x, 0);
        ctx.lineTo(axis_start.x, height - axis_start.y);
        ctx.stroke();
        // Y-Axis
        ctx.beginPath();
        ctx.moveTo(axis_start.x, height - axis_start.y);
        ctx.lineTo(width, height - axis_start.y);
        ctx.stroke();

        ctx.restore();
        this.timeout('draw', () =>
            requestAnimationFrame(() => this._drawGraph()),
        );
    }

    private _drawLine(
        ctx: CanvasRenderingContext2D,
        [box_x, box_y, box_w, box_h],
        points: Point[],
        [stroke, fill]: [string, string],
    ) {
        let count = 0;
        ctx.strokeStyle = stroke;
        ctx.fillStyle = fill;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(box_w + box_x, box_h + box_y);
        for (const { x, y } of points) {
            if (count > 60) break;
            ctx.lineTo(
                box_w * ((60 - x) / 60) + box_x,
                box_h * ((100 - y) / 100) - 1 + box_y,
            );
            count += 1;
        }
        while (count < 60) {
            count += 1;
            ctx.lineTo(box_w * ((60 - count) / 60) + box_x, box_h - 1 + box_y);
        }
        ctx.lineTo(box_x, box_h - 1 + box_y);
        ctx.stroke();
        ctx.fill();
    }
}
