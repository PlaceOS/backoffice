import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import {
    Component,
    ElementRef,
    HostListener,
    Injector,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    TemplateRef,
    Type,
    computed,
    inject,
    input,
    viewChild,
} from '@angular/core';
import { AsyncHandler } from '../common/async-handler.class';
import { SanitizePipe } from './pipes/sanitise.pipe';

export class CustomTooltipData<T = unknown> {
    data: T;
    close: () => void;
    constructor(d) {
        this.data = d.data;
        this.close = d.close || (() => null);
    }
}

@Component({
    selector: '[customTooltip]',
    template: `
        <ng-content />

        <ng-template cdkPortal>
            <div custom-tooltip class="relative print:hidden">
                @switch (type) {
                    @case ('component') {
                        <ng-container
                            *ngComponentOutlet="component(); injector: injector"
                        ></ng-container>
                    }
                    @case ('html') {
                        <div [innerHTML]="html() | sanitize"></div>
                    }
                    @default {
                        <ng-container
                            *ngTemplateOutlet="template(); context: data()"
                        ></ng-container>
                    }
                }
            </div>
        </ng-template>
    `,
    imports: [PortalModule, SanitizePipe, NgComponentOutlet, NgTemplateOutlet],
})
export class CustomTooltipComponent<T = unknown>
    extends AsyncHandler
    implements OnChanges, OnDestroy
{
    private _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private _overlay = inject(Overlay);
    private _injector = inject(Injector);

    /** Horizontal position of the rendered overlay */
    public readonly xPosition = input<'start' | 'center' | 'end'>('end');
    /** Vertical position of the rendered overlay */
    public readonly yPosition = input<'top' | 'center' | 'bottom'>('top');
    /** Content to render in the tooltip */
    public readonly content = input<
        TemplateRef<unknown> | Type<unknown> | string
    >(undefined);
    /** Data associated with the tooltip content */
    public readonly data = input<T>(undefined);
    /** Whether tooltip has a backdrop */
    public readonly backdrop = input(true);
    /** Whether tooltip has a backdrop */
    public readonly hover = input(false);
    /** Delay time in milliseconds to close after hover */
    public readonly delay = input(0);
    /** Type of content to render */
    public type: 'template' | 'component' | 'html' = 'template';
    public readonly template = computed(
        () => this.content() as TemplateRef<unknown>,
    );
    public readonly component = computed(() => this.content() as Type<unknown>);
    public readonly html = computed(() => this.content() as string);

    public injector: Injector;

    private _overlay_ref: OverlayRef = null;

    private readonly _portal = viewChild(CdkPortal);

    @HostListener('click') public readonly onClick = () => this.open();
    @HostListener('touchend') public readonly onTouch = () => this.open();
    @HostListener('mouseenter') public readonly onEnter = () =>
        this.hover() ? this.open() : '';
    @HostListener('mouseleave') public readonly onLeave = () =>
        this.hover() ? this.close() : '';

    public ngOnChanges(changes: SimpleChanges): void {
        this._updateInjector();
        if (
            this._overlay_ref &&
            (changes.xPosition || changes.yPosition || changes.content)
        ) {
            this.open();
        }
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.close();
    }

    public open() {
        if (!this.content()) return;
        this.timeout(
            'open',
            () => {
                const hover = this.hover();
                const delay = this.delay();
                if (hover && delay) {
                    this.timeout('onclose', () => this.close(), delay);
                }
                this._updateType();
                if (this._overlay_ref) this.close();
                const _portal = this._portal();
                if (!_portal) return;
                const default_x = 'end';
                const default_y = 'top';
                const y_position = this.yPosition();
                this._overlay_ref = this._overlay.create({
                    hasBackdrop: !!this.backdrop() && !hover,
                    positionStrategy: this._overlay
                        .position()
                        .flexibleConnectedTo(this._element)
                        .withPositions([
                            {
                                originX: this.xPosition() || default_x,
                                originY:
                                    (y_position === 'top'
                                        ? 'bottom'
                                        : y_position == 'bottom'
                                          ? 'top'
                                          : y_position) || default_y,
                                overlayX: this.xPosition() || default_x,
                                overlayY: this.yPosition() || default_y,
                            },
                        ]),
                });
                this._overlay_ref.attach(_portal);
                if (this.backdrop()) {
                    this.subscription(
                        'backdrop',
                        this._overlay_ref
                            .backdropClick()
                            .subscribe(() => this.close()),
                    );
                }
            },
            50,
        );
    }

    public close() {
        this.clearTimeout('open');
        if (this._overlay_ref) {
            this._overlay_ref.dispose();
            this._overlay_ref = null;
        }
    }

    private _updateType() {
        const content = this.content();
        this.type =
            typeof content === 'string'
                ? 'html'
                : content instanceof TemplateRef
                  ? 'template'
                  : 'component';
    }

    private _updateInjector() {
        this.injector = Injector.create({
            providers: [
                {
                    provide: CustomTooltipData,
                    useValue: { data: this.data(), close: () => this.close() },
                },
            ],
            parent: this._injector,
        });
    }
}
