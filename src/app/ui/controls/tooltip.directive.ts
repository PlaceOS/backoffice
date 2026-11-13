import { AriaDescriber, FocusMonitor } from '@angular/cdk/a11y';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
    Component,
    ComponentRef,
    Directive,
    effect,
    ElementRef,
    inject,
    input,
    OnDestroy,
} from '@angular/core';

export type TooltipPosition =
    | 'above'
    | 'below'
    | 'left'
    | 'right'
    | 'before'
    | 'after';

const GAP = 8;

const POSITIONS: Record<TooltipPosition, ConnectedPosition> = {
    above: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -GAP,
    },
    below: {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: GAP,
    },
    left: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -GAP,
    },
    right: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: GAP,
    },
    before: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
        offsetX: -GAP,
    },
    after: {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
        offsetX: GAP,
    },
};

/** Opposite side, used when the preferred side has no space */
const FALLBACK: Record<TooltipPosition, TooltipPosition> = {
    above: 'below',
    below: 'above',
    left: 'right',
    right: 'left',
    before: 'after',
    after: 'before',
};

@Component({
    selector: 'app-tooltip-panel',
    template: `{{ text }}`,
    host: { class: 'tooltip-panel', 'aria-hidden': 'true' },
})
export class TooltipPanelComponent {
    public text = '';
}

/**
 * Show a short text next to the element on mouse hover and keyboard focus.
 * Screen readers get the text as the description of the element.
 * For rich content use `customTooltip` instead.
 */
@Directive({
    selector: '[appTooltip]',
    host: {
        class: 'tooltip-trigger',
        '(mouseenter)': 'show()',
        '(mouseleave)': 'hide()',
        '(pointerdown)': 'hide()',
        '(keydown.escape)': 'hide()',
    },
})
export class TooltipDirective implements OnDestroy {
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _overlay = inject(Overlay);
    private readonly _describer = inject(AriaDescriber);
    private readonly _focus = inject(FocusMonitor);
    private _overlay_ref: OverlayRef;
    private _panel: ComponentRef<TooltipPanelComponent>;
    private _described = '';

    /** Text of the tooltip. Nothing shows when it is empty */
    public readonly text = input<string | null | undefined>('', {
        alias: 'appTooltip',
    });
    public readonly position = input<TooltipPosition>('below', {
        alias: 'appTooltipPosition',
    });

    constructor() {
        effect(() => {
            const text = this.text() || '';
            const element = this._element.nativeElement;
            if (this._described) {
                this._describer.removeDescription(element, this._described);
            }
            if (text) this._describer.describe(element, text);
            this._described = text;
            if (this._panel && text) this._setText(text);
            else if (this._panel) this.hide();
        });
        // Show for keyboard focus only, so a click does not leave it open
        this._focus.monitor(this._element).subscribe((origin) => {
            if (origin === 'keyboard') this.show();
            else if (!origin) this.hide();
        });
    }

    public show() {
        const text = this.text();
        if (!text || this._panel) return;
        const position = this.position();
        if (!this._overlay_ref) {
            this._overlay_ref = this._overlay.create({
                positionStrategy: this._overlay
                    .position()
                    .flexibleConnectedTo(this._element)
                    .withPositions([
                        POSITIONS[position],
                        POSITIONS[FALLBACK[position]],
                    ]),
                scrollStrategy: this._overlay.scrollStrategies.close(),
                panelClass: 'tooltip-pane',
            });
            // The scroll strategy detaches the tooltip without a call to hide
            this._overlay_ref
                .detachments()
                .subscribe(() => (this._panel = undefined));
        }
        this._panel = this._overlay_ref.attach(
            new ComponentPortal(TooltipPanelComponent),
        );
        this._setText(text);
        this._overlay_ref.updatePosition();
    }

    public hide() {
        this._overlay_ref?.detach();
        this._panel = undefined;
    }

    public ngOnDestroy() {
        this._focus.stopMonitoring(this._element);
        if (this._described) {
            this._describer.removeDescription(
                this._element.nativeElement,
                this._described,
            );
        }
        this._overlay_ref?.dispose();
    }

    private _setText(text: string) {
        this._panel.instance.text = text;
        this._panel.changeDetectorRef.detectChanges();
    }
}
