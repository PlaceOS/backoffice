import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Point } from '../common/types';

function scale(domain, range) {
    const m = (range[1] - range[0]) / (domain[1] - domain[0]);
    return (num) => range[0] + m * (num - domain[0]);
}

@Component({
    selector: '[basic-line-graph]',
    template: `
        <div
            graph
            class="relative left-12 w-[calc(100%-3rem)] h-[calc(100%-2rem)] overflow-hidden"
        >
            <svg
                class="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <polyline
                    [attr.points]="line_points"
                    style="stroke: #C92366; stroke-width: 2; fill: none"
                ></polyline>
            </svg>
            <div points class="h-0 w-0">
                <div
                    dot
                    class="absolute h-2 w-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-primary"
                    *ngFor="let point of dot_points; let i = index"
                    [style.top]="point.y + '%'"
                    [style.left]="point.x + '%'"
                    [matTooltip]="points[i].y + '%'"
                ></div>
            </div>
        </div>
        <div>
            <div
                x-axis
                class="absolute left-12 bottom-0 right-0 h-8 flex justify-between border-t border-black dark:border-white"
            >
                <span>10s</span>
                <span>8s</span>
                <span>6s</span>
                <span>4s</span>
                <span>2s</span>
                <span>Now</span>
            </div>
            <div
                y-axis
                class="absolute top-0 bottom-8 left-0 flex flex-col w-12 justify-between items-end border-r border-black dark:border-white pr-1"
            >
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
            </div>
        </div>
    `,
    styles: [
        `
            :host {
                @apply relative block w-full h-full;
            }

            [y-axis] span,
            [x-axis] span {
                transform: rotate(30deg);
            }
        `,
    ],
})
export class BasicLineGraphComponent implements OnChanges {
    @Input() public points: Point[] = [];
    @Input() public labels: { x_axis: string[]; y_axis: string[] } = {
        x_axis: [],
        y_axis: [],
    };
    public dot_points: Point[] = [];
    public line_points: string;

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.points) {
            this.processPoints();
        }
    }

    public processPoints() {
        const x = scale(
            [0, Math.max(...this.points.map((d) => d.x))],
            [1, 100]
        );
        const y = scale(
            [0, Math.max(...this.points.map((d) => d.y), 100)],
            [100, 1]
        );
        const coordinates = this.points.map((d) => ({ x: x(d.x), y: y(d.y) }));
        const points = this.points.map((d) => `${x(d.x)},${y(d.y)}`).join(' ');
        this.dot_points = coordinates;
        this.line_points = points;
    }
}
