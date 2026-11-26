import { Component, ElementRef, inject, input, model } from '@angular/core';

let next_id = 0;

/**
 * Row of tabs. The parent shows the content of the selected tab in an
 * element with `role="tabpanel"`, `[id]="tabs.panelId(index)"` and
 * `[attr.aria-labelledby]="tabs.tabId(index)"`, where `tabs` is a template
 * reference to this component.
 * Arrow keys, Home and End move between the tabs.
 */
@Component({
    selector: 'app-tabs',
    template: `
        @for (label of labels(); track $index) {
            <button
                type="button"
                role="tab"
                class="tab"
                ripple
                [id]="tabId($index)"
                [attr.aria-selected]="$index === selectedIndex()"
                [attr.aria-controls]="
                    $index === selectedIndex() ? panelId($index) : null
                "
                [tabIndex]="$index === selectedIndex() ? 0 : -1"
                (click)="selectedIndex.set($index)"
            >
                {{ label }}
            </button>
        }
    `,
    host: {
        role: 'tablist',
        class: 'tabs',
        '(keydown)': 'onKeydown($event)',
    },
})
export class TabsComponent {
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _id = `app-tabs-${next_id++}`;

    /** Text of each tab */
    public readonly labels = input<string[]>([]);
    /** Index of the selected tab */
    public readonly selectedIndex = model(0);

    /** `id` of the tab at `index` */
    public tabId(index: number) {
        return `${this._id}-tab-${index}`;
    }

    /** `id` that the panel of the tab at `index` must have */
    public panelId(index: number) {
        return `${this._id}-panel-${index}`;
    }

    public onKeydown(event: KeyboardEvent) {
        const count = this.labels().length;
        const current = this.selectedIndex();
        const next =
            {
                ArrowRight: (current + 1) % count,
                ArrowLeft: (current - 1 + count) % count,
                Home: 0,
                End: count - 1,
            }[event.key] ?? -1;
        if (next < 0 || !count) return;
        event.preventDefault();
        this.selectedIndex.set(next);
        this._element.nativeElement
            .querySelectorAll<HTMLElement>('[role=tab]')
            [next]?.focus();
    }
}
