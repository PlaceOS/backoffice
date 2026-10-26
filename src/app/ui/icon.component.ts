import {
    afterEveryRender,
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    Injector,
    input,
} from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { ApplicationIcon } from '../common/types';
import { SafePipe } from './pipes/safe.pipe';

/** Text of an element, leaving out the names of any icons inside it */
function textWithoutIcons(element: HTMLElement) {
    const copy = element.cloneNode(true) as HTMLElement;
    for (const icon of copy.querySelectorAll('icon, app-icon')) icon.remove();
    return copy.textContent.trim();
}

@Component({
    selector: 'app-icon,icon',
    template: `
        <div class="flex h-[1.25em] w-[1.25em] items-center justify-center">
            @if (!icon() || icon().type !== 'img') {
                <i [class]="icon()?.class || className()">
                    {{ icon()?.content }}
                    <ng-content />
                </i>
            }
            @if (icon() && icon().type === 'img') {
                <img
                    class="h-[1em] w-[1em]"
                    [src]="icon().src | safe: 'resource'"
                    alt="icon"
                />
            }
        </div>
    `,
    styles: [
        `
            i {
                font-size: 1em;
            }
        `,
    ],
    imports: [SafePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
    public readonly className = input('material-symbols-rounded');
    /** Icon details */
    public readonly icon = input<ApplicationIcon>(undefined);

    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _tooltip = inject(MatTooltip, { optional: true });
    private readonly _injector = inject(Injector);

    constructor() {
        afterNextRender(() => this._labelControl());
    }

    /**
     * Icon fonts render names like "more_vert", which screen readers read
     * aloud. Inside a button or link, hide the icon when the control has its
     * own text or label. For icon-only controls with a tooltip, use the
     * tooltip as the control's label. Outside a control, an icon with its
     * own tooltip (e.g. an info icon) becomes an image named by the tooltip.
     */
    private _labelControl() {
        const host = this._element.nativeElement;
        const control = host.parentElement?.closest<HTMLElement>('button, a');
        if (!control) {
            if (host.classList.contains('mat-mdc-tooltip-trigger')) {
                this._labelFromTooltip(host);
            }
            return;
        }
        const has_text = !!textWithoutIcons(control);
        if (control.hasAttribute('aria-label') || has_text) {
            host.setAttribute('aria-hidden', 'true');
            return;
        }
        // The tooltip must be on the control itself, not an outer element
        if (control.classList.contains('mat-mdc-tooltip-trigger')) {
            this._labelFromTooltip(control);
        }
    }

    /** Keep the label of the target the same as the tooltip text */
    private _labelFromTooltip(target: HTMLElement) {
        const tooltip = this._tooltip;
        if (!tooltip) return;
        const host = this._element.nativeElement;
        // Tooltip text can change, e.g. "Enable" and "Disable"
        afterEveryRender(
            () => {
                const label = `${tooltip.message || ''}`.trim();
                if (target.getAttribute('aria-label') === (label || null)) {
                    return;
                }
                // Without tooltip text the icon name is the only label left
                if (label) {
                    target.setAttribute('aria-label', label);
                    if (target === host) host.setAttribute('role', 'img');
                    else host.setAttribute('aria-hidden', 'true');
                } else {
                    target.removeAttribute('aria-label');
                    host.removeAttribute(
                        target === host ? 'role' : 'aria-hidden',
                    );
                }
            },
            { injector: this._injector },
        );
    }
}
