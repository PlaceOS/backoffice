import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    computed,
    ElementRef,
    inject,
    input,
    OnDestroy,
    output,
    signal,
    TemplateRef,
    viewChild,
} from '@angular/core';

@Component({
    selector: 'virtual-scroll',
    template: `
        <div
            #scroll_container
            class="relative h-full w-full overflow-auto"
            (scroll)="updateOffsets()"
        >
            <div
                scroll-fill
                class="w-full"
                [style.height]="scroll_area() + 'px'"
            ></div>
            @for (
                item of items() | slice: offset_start() : offset_end();
                track $index + offset_start();
                let i = $index
            ) {
                <div
                    class="absolute w-full"
                    [style.top]="(offset_start() + i) * item_size() + 'px'"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            item_template();
                            context: { item, index: offset_start() + i }
                        "
                    />
                </div>
            }
            <ng-content />
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [CommonModule],
})
export class VirtualScrollComponent implements AfterViewInit, OnDestroy {
    public readonly items = input<any[]>([]);
    public readonly item_size = input(0);
    public readonly item_template = input<TemplateRef<any>>(null);
    public readonly buffer = input(2);
    public readonly scrolled = output<[number, number]>();

    public readonly range = signal(0);
    public readonly offset = signal(0);
    public readonly extra_height = signal(0);
    public readonly offset_start = computed(() =>
        Math.max(this.offset() - this.buffer(), 0),
    );
    public readonly offset_end = computed(
        () => this.offset_start() + (this.range() + 2 * (this.buffer() || 2)),
    );
    public readonly scroll_area = computed(
        () => this.items().length * this.item_size() + this.extra_height(),
    );

    private _el = inject(ElementRef<HTMLElement>);
    private _scroll_container_el =
        viewChild<ElementRef<HTMLDivElement>>('scroll_container');
    private _resize_observer: ResizeObserver;

    public ngAfterViewInit() {
        this.updateContainer();
        this._resize_observer = new ResizeObserver(() =>
            this.updateContainer(),
        );
        this._resize_observer.observe(this._el.nativeElement);
    }

    public ngOnDestroy() {
        this._resize_observer?.disconnect();
    }

    public updateOffsets() {
        const el = this._scroll_container_el()?.nativeElement;
        if (!el) return;
        const scroll_top = el.scrollTop;
        this.offset.set(Math.floor(scroll_top / this.item_size()));
        this.scrolled.emit([this.offset(), this.offset() + this.range()]);
    }

    public updateContainer() {
        const el = this._el?.nativeElement;
        if (!el) return;
        const box = el.getBoundingClientRect();
        this.range.set(Math.ceil(box.height / this.item_size()));
    }

    public scrollToIndex(index: number) {
        const el = this._scroll_container_el()?.nativeElement;
        if (!el) return;
        el.scrollTop = index * this.item_size();
        this.updateOffsets();
    }
}
