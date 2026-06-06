import {
    Component,
    OnInit,
    effect,
    inject,
    input,
    model,
    signal,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
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
import { toSignal } from '../common/signals';
import { ApplicationIcon } from '../common/types';
import { IconComponent } from './icon.component';

export interface ItemTab {
    id: string;
    name: string;
    icon: ApplicationIcon;
    count?: number | string;
    query?: Record<string, string>;
}

@Component({
    selector: 'item-tablist',
    template: `
        <div class="border-base-300 h-12 w-full border-b">
            <div class="h-14 w-full overflow-hidden">
                <nav
                    mat-tab-nav-bar
                    [class.shadow]="scrolled()"
                    [tabPanel]="tabPanel"
                >
                    @for (link of tabs(); track link.id) {
                        <a
                            class="tab"
                            mat-tab-link
                            [routerLink]="
                                '/' + base() + '/' + item_id() + '/' + link.id
                            "
                            [queryParams]="link.query || {}"
                            routerLinkActive
                            #rla="routerLinkActive"
                            [active]="rla.isActive"
                        >
                            <icon class="text-xl" [icon]="link.icon" />&nbsp;
                            <div class="name">{{ link.name }}&nbsp;</div>
                            @if (link.count || link.count === 0) {
                                <div
                                    class="mono bg-base-200 flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.625rem]"
                                >
                                    @if (isRouteLoading(link.id)) {
                                        <span
                                            role="status"
                                            aria-label="Loading tab"
                                            class="h-3 w-3 animate-spin rounded-full border-2 border-current/30 border-t-current"
                                        ></span>
                                    } @else {
                                        {{ link.count || '0' }}
                                    }
                                </div>
                            }
                        </a>
                    }
                </nav>
            </div>
        </div>
        <mat-tab-nav-panel #tabPanel class="hidden" />
    `,
    styles: [``],
    imports: [MatTabsModule, IconComponent, RouterModule],
})
export class ItemTablistComponent extends AsyncHandler implements OnInit {
    private _router = inject(Router);
    private _hotkey = inject(HotkeysService);
    private readonly _route_change = toSignal(this._router.events, {
        initialValue: null,
    });

    public readonly base = input<string>('systems');
    public readonly item_id = model<string>('-');
    public readonly tabs = input<ItemTab[]>([]);
    public readonly scrolled = input(false);
    public readonly loading_route = signal('');

    constructor() {
        super();
        effect(() => {
            this._route_change();
            this._updateID();
        });
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
