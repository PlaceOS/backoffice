import {
    booleanAttribute,
    Component,
    computed,
    DestroyRef,
    inject,
    input,
    signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlaceDebugService } from '../common/debug.service';
import { ActiveItemService } from '../common/item.service';
import { TooltipDirective } from './controls/tooltip.directive';
import { DebugOutputComponent } from './debug-output.component';
import { IconComponent } from './icon.component';
import { ItemDetailsSkeletonComponent } from './item-details-skeleton.component';
import type { DisplayItem, ItemAction } from './item-details.component';
import { ItemDetailsComponent } from './item-details.component';
import { ItemSelectionComponent } from './item-selection.component';
import { ItemSidebarComponent } from './item-sidebar.component';
import type { ItemTab } from './item-tablist.component';
import { ItemTablistComponent } from './item-tablist.component';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { TranslatePipe } from './translate.pipe';

/** Tailwind `lg` breakpoint, where the item list moves to the sidebar */
const LARGE_SCREEN = '(min-width: 64rem)';

/** Signal of whether a CSS media query matches. Call in an injection context. */
function mediaQuery(query: string) {
    // jsdom has no matchMedia
    const media = window.matchMedia?.(query);
    const matches = signal(!!media?.matches);
    const update = () => matches.set(!!media?.matches);
    media?.addEventListener('change', update);
    inject(DestroyRef).onDestroy(() =>
        media?.removeEventListener('change', update),
    );
    return matches.asReadonly();
}

/**
 * Page layout for an item feature: main menu, item list, details header,
 * tabs and the active tab. Projected content shows next to the add button.
 */
@Component({
    selector: 'item-shell',
    template: `
        <div
            class="divide-base-200 bg-base-100 absolute inset-0 flex items-center divide-y sm:divide-x sm:divide-y-0"
        >
            <sidebar-menu [(open)]="open_menu" class="sm:h-full" />
            <div class="flex h-full w-px flex-1 flex-col overflow-hidden">
                <div class="flex h-px flex-1">
                    <!-- Small screens show the list in item-selection, so do not load this -->
                    @defer (when large_screen()) {
                        <item-sidebar
                            class="hidden lg:block"
                            [route]="name()"
                            [title]="i18n_key() + '.PLURAL' | translate"
                            [filter_options]="filter_options()"
                        />
                    } @loading {
                        <!-- Same size as the sidebar, so the page does not move when it loads -->
                        <div
                            class="border-base-200 bg-base-100 hidden h-full w-[24rem] max-w-[25vw] min-w-64 rounded-sm shadow-sm sm:border-r lg:block"
                        ></div>
                    }
                    <main
                        id="main-content"
                        tabindex="-1"
                        class="relative z-0 flex h-full w-1/2 flex-1 flex-col outline-none"
                    >
                        <item-selection
                            class="z-20 lg:hidden"
                            [route]="name()"
                            [title]="i18n_key() + '.PLURAL' | translate"
                        >
                            <button
                                btn
                                icon
                                class="mr-2 sm:hidden"
                                (click)="open_menu.set(true)"
                                [attr.aria-label]="'COMMON.MENU' | translate"
                            >
                                <icon>menu</icon>
                            </button>
                        </item-selection>
                        <div class="flex h-1/2 flex-1 flex-col">
                            @if (loading()) {
                                <item-details-skeleton />
                            } @else if (display_item()?.id) {
                                <!-- Tabs and menus load once an item shows. They fade in over the skeleton. -->
                                @defer (on immediate) {
                                    <item-details
                                        class="animate-fade-in"
                                        [item]="display_item()"
                                        [extra_actions]="extra_actions()"
                                        [type]="
                                            i18n_key() + '.SINGULAR' | translate
                                        "
                                    />
                                    <item-tablist
                                        [base]="name()"
                                        [tabs]="tabs()"
                                        [scrolled]="scroll() > 0"
                                        class="animate-fade-in z-10"
                                    />
                                    <div
                                        #el
                                        page-transition
                                        class="animate-fade-in relative z-0 h-1/2 w-full flex-1 overflow-auto"
                                        (scroll)="scroll.set(el.scrollTop)"
                                    >
                                        <router-outlet />
                                    </div>
                                } @placeholder {
                                    <item-details-skeleton />
                                }
                            }
                        </div>
                        <button
                            icon
                            primary
                            class="absolute bottom-2 left-2 z-30 h-12 w-12 lg:-left-9"
                            [appTooltip]="i18n_key() + '.NEW' | translate"
                            appTooltipPosition="right"
                            ripple
                            [disabled]="!canCreate()"
                            (click)="newItem()"
                        >
                            <icon class="text-3xl">add</icon>
                        </button>
                        @if (bulk()) {
                            <button
                                icon
                                primary
                                class="absolute bottom-16 left-2 z-30 h-10 w-10 lg:-left-8"
                                [appTooltip]="i18n_key() + '.BULK' | translate"
                                appTooltipPosition="right"
                                ripple
                                [disabled]="!canCreate()"
                                (click)="bulkAdd()"
                            >
                                <icon class="text-2xl">playlist_add</icon>
                            </button>
                        }
                        <ng-content />
                    </main>
                </div>
                @if (debug() && debug_position() === 'below') {
                    <app-debug-output below />
                }
            </div>
            @if (debug() && debug_position() === 'side') {
                <app-debug-output side class="h-full max-w-120" />
            }
        </div>
    `,
    imports: [
        TooltipDirective,
        DebugOutputComponent,
        IconComponent,
        TranslatePipe,
        ItemTablistComponent,
        ItemDetailsComponent,
        ItemDetailsSkeletonComponent,
        ItemSelectionComponent,
        ItemSidebarComponent,
        SidebarMenuComponent,
        RouterModule,
    ],
})
export class ItemShellComponent {
    private _service = inject(ActiveItemService);

    /** Route and item type, e.g. `systems` */
    public readonly name = input.required<string>();
    /** Locale key prefix for the item type, e.g. `SYSTEMS` */
    public readonly i18n_key = input.required<string>();
    public readonly tabs = input<ItemTab[]>([]);
    /** Item for the details header. Defaults to the active item. */
    public readonly item = input<DisplayItem>(undefined);
    public readonly extra_actions = input<ItemAction[]>([]);
    /** Tag filters for the item list */
    public readonly filter_options = input<string[]>([]);
    /** Show the bulk add button */
    public readonly bulk = input(false, { transform: booleanAttribute });
    /** Show the debug console */
    public readonly debug = input(false, { transform: booleanAttribute });

    public readonly open_menu = signal(false);
    public readonly large_screen = mediaQuery(LARGE_SCREEN);
    public readonly scroll = signal(0);
    public readonly loading = this._service.loading;
    public readonly display_item = computed(
        () => this.item() ?? (this._service.item() as unknown as DisplayItem),
    );
    public readonly debug_position = inject(PlaceDebugService).position;
    public readonly canCreate = () => this._service.canMutate(2);
    public readonly newItem = () => this._service.create();
    public readonly bulkAdd = () => this._service.bulkAdd();
}
