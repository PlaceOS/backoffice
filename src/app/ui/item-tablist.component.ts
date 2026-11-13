import {
    afterNextRender,
    Component,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    model,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router,
    RouterModule,
} from '@angular/router';
import { AsyncHandler } from '../common/async-handler.class';
import { HotkeysService } from '../common/hotkeys.service';
import { ApplicationIcon } from '../common/types';
import { IconComponent } from './icon.component';

export interface ItemTab {
    id: string;
    name: string;
    icon: ApplicationIcon;
    count?: number | string;
    loading?: boolean;
    query?: Record<string, string>;
}

@Component({
    selector: 'item-tablist',
    template: `
        <div
            class="border-base-300 flex h-12 w-full border-b"
            [class.shadow]="scrolled()"
        >
            <!-- Arrows only scroll the tabs; keyboard focus scrolls them too -->
            @if (overflowing()) {
                <button
                    type="button"
                    class="scroll-button"
                    tabindex="-1"
                    aria-hidden="true"
                    [disabled]="at_start()"
                    (click)="scrollTabs(-1)"
                >
                    <icon>chevron_left</icon>
                </button>
            }
            <nav #nav (scroll)="updateScroll()" (focusin)="showFocused($event)">
                @for (link of tabs(); track link.id) {
                    <a
                        [routerLink]="
                            '/' + base() + '/' + item_id() + '/' + link.id
                        "
                        [queryParams]="link.query || {}"
                        routerLinkActive="active"
                        #rla="routerLinkActive"
                        [attr.aria-current]="rla.isActive ? 'page' : null"
                    >
                        <!-- Moves to the new tab in the page transition -->
                        <span indicator></span>
                        <icon class="text-xl" [icon]="link.icon" />&nbsp;
                        <div class="name">{{ link.name }}&nbsp;</div>
                        @if (link.count || link.count === 0) {
                            <div
                                class="mono bg-base-200 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.625rem]"
                            >
                                @if (link.loading || isRouteLoading(link.id)) {
                                    <span
                                        role="status"
                                        aria-label="Loading tab"
                                        class="h-3 w-3 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                    ></span>
                                } @else {
                                    <span class="animate-fade-in">{{
                                        link.count || '0'
                                    }}</span>
                                }
                            </div>
                        }
                    </a>
                }
            </nav>
            @if (overflowing()) {
                <button
                    type="button"
                    class="scroll-button"
                    tabindex="-1"
                    aria-hidden="true"
                    [disabled]="at_end()"
                    (click)="scrollTabs(1)"
                >
                    <icon>chevron_right</icon>
                </button>
            }
        </div>
    `,
    styles: [
        `
            nav {
                display: flex;
                flex: 1;
                min-width: 0;
                overflow-x: auto;
                overflow-y: hidden;
                scrollbar-width: none;
            }

            .scroll-button {
                display: flex;
                align-items: center;
                padding: 0 0.25rem;
                font-size: 1.5rem;
            }

            .scroll-button:disabled {
                opacity: 0.3;
            }

            a {
                position: relative;
                display: flex;
                flex: 1 0 auto;
                align-items: center;
                justify-content: center;
                padding: 0 1.5rem;
                font-size: 0.875rem;
                font-weight: 500;
                letter-spacing: 0.09em;
                white-space: nowrap;
                color: var(--base-content);
            }

            a:hover {
                background-color: color-mix(
                    in srgb,
                    currentColor 6%,
                    transparent
                );
            }

            a.active {
                color: var(--secondary);
            }

            a.active [indicator] {
                position: absolute;
                inset: auto 0 0;
                height: 2px;
                background-color: var(--secondary);
                view-transition-name: tab-indicator;
            }
        `,
    ],
    imports: [IconComponent, RouterModule],
})
export class ItemTablistComponent extends AsyncHandler implements OnInit {
    private _router = inject(Router);
    private _hotkey = inject(HotkeysService);
    private _injector = inject(Injector);
    private readonly _route_change = toSignal(this._router.events, {
        initialValue: null,
    });

    public readonly base = input<string>('systems');
    public readonly item_id = model<string>('-');
    public readonly tabs = input<ItemTab[]>([]);
    public readonly scrolled = input(false);
    public readonly loading_route = signal('');
    /** Whether the tabs are wider than the bar, so the arrows show */
    public readonly overflowing = signal(false);
    public readonly at_start = signal(true);
    public readonly at_end = signal(false);
    private readonly _nav = viewChild.required<ElementRef<HTMLElement>>('nav');
    private _observer: ResizeObserver;

    constructor() {
        super();
        effect(() => {
            this._route_change();
            this._updateID();
            // Show the tab of the new route, e.g. after the arrow key hotkeys
            // or browser history change it
            afterNextRender(
                () =>
                    this._reveal(
                        this._nav().nativeElement.querySelector('a.active'),
                    ),
                { injector: this._injector },
            );
        });
        afterNextRender(() => {
            const observer = new ResizeObserver(() => this.updateScroll());
            observer.observe(this._nav().nativeElement);
            this._observer = observer;
        });
    }

    /** Scroll the tabs by most of the visible width */
    public scrollTabs(direction: 1 | -1) {
        const nav = this._nav().nativeElement;
        nav.scrollBy({
            left: direction * nav.clientWidth * 0.8,
            behavior: 'smooth',
        });
    }

    /** Scroll a focused tab fully into view, as focus may leave it cut off */
    public showFocused(event: FocusEvent) {
        this._reveal(event.target as HTMLElement);
    }

    public updateScroll() {
        const nav = this._nav().nativeElement;
        const max = nav.scrollWidth - nav.clientWidth;
        const overflowing = max > 1;
        if (overflowing && !this.overflowing()) {
            // The arrows narrow the bar once they render, which can cut off
            // the focused or active tab, so bring it back into view
            afterNextRender(
                () =>
                    this._reveal(
                        nav.querySelector<HTMLElement>('a:focus') ||
                            nav.querySelector<HTMLElement>('a.active'),
                    ),
                { injector: this._injector },
            );
        }
        this.overflowing.set(overflowing);
        this.at_start.set(nav.scrollLeft <= 1);
        this.at_end.set(nav.scrollLeft >= max - 1);
    }

    /** Scroll the bar so the tab shows in full. Only the bar scrolls, not the page */
    private _reveal(tab: HTMLElement | null) {
        if (!tab) return;
        const nav = this._nav().nativeElement;
        const bar = nav.getBoundingClientRect();
        const box = tab.getBoundingClientRect();
        if (box.left < bar.left) nav.scrollLeft -= bar.left - box.left;
        else if (box.right > bar.right) nav.scrollLeft += box.right - bar.right;
    }

    public override ngOnDestroy() {
        this._observer?.disconnect();
        super.ngOnDestroy();
    }

    public ngOnInit() {
        this.subscription(
            'route_load',
            this._router.events.subscribe((event) => {
                if (event instanceof RouteConfigLoadStart) {
                    this.loading_route.set(event.route.path || '');
                }
                if (event instanceof RouteConfigLoadEnd) {
                    this.loading_route.set('');
                }
                if (
                    event instanceof NavigationCancel ||
                    event instanceof NavigationEnd ||
                    event instanceof NavigationError
                ) {
                    this.loading_route.set('');
                }
            }),
        );
        this.subscription(
            'right',
            this._hotkey.listen(['ArrowRight'], () => this._changeTab(1)),
        );
        this.subscription(
            'left',
            this._hotkey.listen(['ArrowLeft'], () => this._changeTab(-1)),
        );
    }

    public isRouteLoading(tab_id: string) {
        return this.loading_route().split('/')[0] === tab_id.split('/')[0];
    }

    private _changeTab(direction: 1 | -1) {
        this.timeout(
            'change_tab',
            () => {
                const index = this.tabs().findIndex(
                    (tab) => this._router.url?.indexOf(tab.id) >= 0,
                );
                if (index < 0 || !this.tabs()[index + direction]) return;
                this._router.navigate([
                    `/${this.base()}`,
                    this.item_id(),
                    this.tabs()[index + direction].id,
                ]);
            },
            100,
        );
    }

    private _updateID() {
        const parts = this._router.url?.replace(/^\//, '').split('/') || [
            '1',
            '',
        ];
        this.item_id.set(parts[1]);
    }
}
