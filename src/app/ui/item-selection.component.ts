import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    model,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import type { Domain, Module, Repository } from '@placeos/ts-client';
import { PlaceDriverRole } from '@placeos/ts-client/compat';
import { AdminDataService } from '../admin/admin-data.service';
import { AdminDomainSelectComponent } from '../admin/admin-domain-select.component';
import { AsyncHandler } from '../common/async-handler.class';
import { refocusIfLost } from '../common/focus';
import { HotkeysService } from '../common/hotkeys.service';
import {
    ActiveItemService,
    tagQuery,
    USER_DOMAIN_KEY,
} from '../common/item.service';
import { FormFieldComponent } from './controls/form-field.component';
import { OptionComponent } from './controls/option.component';
import { SelectComponent } from './controls/select.component';
import { SpinnerComponent } from './controls/spinner.component';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';
import { VirtualScrollComponent } from './virtual-scroll.component';

@Component({
    selector: 'item-selection',
    host: { '(keydown.escape)': 'onEscape()' },
    template: `
        <div
            class="border-base-300 flex w-full items-center justify-center border-b p-2"
        >
            <ng-content />
            <button
                #trigger
                (click)="open()"
                aria-keyshortcuts="Alt+Shift+K"
                class="border-base-300 flex max-w-[calc(100vw-1rem)] flex-1 items-center rounded-lg border sm:max-w-lg sm:flex-auto"
            >
                <icon class="ml-2 text-2xl">search</icon>
                <p class="w-1/2 flex-1 p-2 text-left text-lg opacity-30">
                    {{ 'COMMON.VIEW_TYPE' | translate: { name: title() } }}
                </p>
                <span class="keycap mr-2 text-xs" aria-hidden="true"
                    >Alt ⇧ K</span
                >
            </button>
        </div>
        @if (show_view()) {
            <!-- Below the bar, so the menu button in the bar stays usable.
                 A pointer closes the picker here; the keyboard uses Close or Escape. -->
            <div
                class="animate-fade-in bg-base-100/80 absolute inset-x-0 top-full h-screen"
                aria-hidden="true"
                (click)="close()"
            ></div>
            <!-- It stops above the add buttons of the shell (bottom 7.5rem), which
                 stay usable: with no item open, they are the way to make the
                 first item. On a short screen the panel gets smaller and scrolls,
                 and the results keep their minimum height. -->
            <div
                class="animate-dialog-enter bg-base-100 border-base-300 absolute top-[calc(100%+0.5rem)] left-1/2 flex h-[calc(100dvh-12rem)] w-lg max-w-[calc(100%-1rem)] -translate-x-1/2 flex-col space-y-2 overflow-y-auto rounded-sm border shadow-sm"
            >
                    <div
                        class="border-base-300 relative flex items-center border-b"
                    >
                        <icon
                            class="pointer-events-none absolute top-1/2 left-2 -translate-y-1/2 text-2xl"
                        >
                            search
                        </icon>
                        <input
                            #search_input
                            class="flex-1 border-none bg-transparent py-4 pr-4 pl-10"
                            [(ngModel)]="search"
                            (ngModelChange)="updateSearch($event)"
                            [placeholder]="
                                'COMMON.SEARCH_FOR'
                                    | translate: { name: title() }
                            "
                        />
                        @if (loading()) {
                            <app-spinner diameter="24" class="mr-2" />
                        }
                        <!-- With no item open, the picker is the page and does not close -->
                        @if (dismissible()) {
                            <button
                                icon
                                type="button"
                                class="mr-1"
                                [attr.aria-label]="'COMMON.CLOSE' | translate"
                                (click)="closeAndFocus(trigger)"
                            >
                                <icon>close</icon>
                            </button>
                        }
                    </div>
                    @if (filter_options().length) {
                        <app-form-field class="no-subscript px-2">
                            <icon prefix class="pointer-events-none text-2xl">
                                filter_list
                            </icon>
                            <app-select
                                multiple
                                [attr.aria-label]="'COMMON.FILTER' | translate"
                                [placeholder]="'COMMON.FILTER' | translate"
                                [(ngModel)]="selected_filters"
                                (ngModelChange)="updateSearch(search)"
                            >
                                @for (option of filter_options(); track option) {
                                    <app-option [value]="option" class="capitalize">
                                        {{ option }}
                                    </app-option>
                                }
                            </app-select>
                        </app-form-field>
                    }
                    @if (route() === 'users') {
                        <label class="flex items-center gap-2 px-2">
                            <input
                                #deleted_box
                                type="checkbox"
                                role="switch"
                                [checked]="include_deleted()"
                                (change)="setIncludeDeleted(deleted_box.checked)"
                            />
                            {{ 'USERS.INCLUDE_DELETED' | translate }}
                        </label>
                        <!-- Domains load for admins only -->
                        @if (domain_list().length) {
                            <admin-domain-select
                                class="block px-2"
                                all
                                field_class="no-subscript w-full"
                                [key]="user_domain_key"
                                (changed)="setUserDomain($event)"
                            />
                        }
                    }
                    <p class="w-full px-4 text-sm opacity-60 text-left">
                        {{
                            'COMMON.TOTAL_ITEMS'
                                | translate: { count: total() }:total()
                        }}
                    </p>
                    <div class="border-base-300 flex min-h-48 flex-1 flex-col">
                        @if (items().length) {
                            <virtual-scroll
                                [item_size]="72"
                                [items]="items()"
                                [item_template]="item_display"
                                (scrolled)="atBottom($event)"
                                class="min-h-0 flex-1"
                            >
                                @if (list_failed()) {
                            <div
                                role="alert"
                                class="bg-base-200 flex items-center justify-center gap-2 p-2 text-sm"
                            >
                                {{ 'COMMON.LIST_LOAD_ERROR' | translate }}
                                <button btn ripple class="clear" [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="retryList()">
                                    {{ 'COMMON.RETRY' | translate }}
                                </button>
                            </div>
                        } @else {
                            <div
                                class="bg-base-200 p-2 text-center text-sm opacity-30"
                            >
                                {{ 'COMMON.END_OF_LIST' | translate }}
                            </div>
                        }
                            </virtual-scroll>
                            <ng-template
                                #item_display
                                let-item="item"
                                let-idx="index"
                            >
                                <a
                                    [routerLink]="
                                        subroute()
                                            ? [
                                                  '/',
                                                  route(),
                                                  item.id,
                                                  subroute(),
                                              ]
                                            : ['/', route(), item.id]
                                    "
                                    routerLinkActive="active"
                                    [class.bg-base-content/5]="idx % 2 === 1"
                                    class="m-2 block max-w-[calc(100vw-2rem)] rounded-sm p-2 text-left"
                                    (click)="close()"
                                >
                                    <div class="flex min-w-0 items-center gap-2">
                                        <p class="min-w-0 flex-1 truncate">
                                            {{ item.name }}
                                        </p>
                                        @if (route() === 'users' && item.deleted) {
                                            <span
                                                class="bg-error text-error-content shrink-0 rounded-full px-2 py-0.5 text-xs"
                                            >
                                                {{ 'USERS.DELETED' | translate }}
                                            </span>
                                        }
                                    </div>
                                    @if (item.extra) {
                                        <div
                                            class="inline-block w-full overflow-hidden"
                                        >
                                            <span
                                                extra
                                                class="mono bg-base-content/10 /5 mt-1 max-w-full truncate rounded-sm px-2 py-1 text-xs opacity-60"
                                            >
                                                {{ item.extra }}
                                            </span>
                                        </div>
                                    }
                                </a>
                            </ng-template>
                        } @else if (list_failed()) {
                            <div
                                role="alert"
                                class="flex flex-col items-center gap-2 p-8"
                            >
                                <p>{{ 'COMMON.LIST_LOAD_ERROR' | translate }}</p>
                                <button btn ripple [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="retryList()">
                                    {{ 'COMMON.RETRY' | translate }}
                                </button>
                            </div>
                        } @else if (!loading()) {
                            <!-- The search box shows a spinner while the list loads -->
                            <div
                                class="flex flex-col items-center justify-center p-8 opacity-30"
                            >
                                <p>
                                    {{
                                        (search
                                            ? 'COMMON.SEARCH_EMPTY'
                                            : 'COMMON.LIST_EMPTY'
                                        ) | translate: { name: title() }
                                    }}
                                </p>
                            </div>
                        }
                    </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
            }
            a:hover {
                background-color: rgba(0, 0, 0, 0.2);
            }
            a.active {
                background-color: var(--secondary) !important;
                color: #fff;
            }
        `,
    ],
    imports: [
        AdminDomainSelectComponent,
        FormFieldComponent,
        OptionComponent,
        SelectComponent,
        SpinnerComponent,
        TranslatePipe,
        IconComponent,
        VirtualScrollComponent,
        RouterModule,
        FormsModule,
    ],
})
export class ItemSelectionComponent
    extends AsyncHandler
    implements OnInit, OnChanges, AfterViewInit
{
    private _router = inject(Router);
    private _hotkeys = inject(HotkeysService);
    private _service = inject(ActiveItemService);
    private readonly _route_change = toSignal(this._router.events, {
        initialValue: null,
    });

    public readonly show = model(true);
    public readonly title = input(undefined);
    public readonly route = input('systems');
    /** Tag filters for the item list */
    public readonly filter_options = input<readonly string[]>([]);
    public readonly subroute = signal('');

    public readonly include_deleted = this._service.include_deleted;
    public readonly setIncludeDeleted = (include: boolean) => {
        this._resetLoadMore();
        this._service.setIncludeDeleted(include);
    };
    public readonly user_domain_key = USER_DOMAIN_KEY;
    public readonly domain_list = inject(AdminDataService).domain_list;
    public readonly setUserDomain = (domain: Domain | null) => {
        this._resetLoadMore();
        this._service.setUserDomain(domain);
    };
    /** Whether the last page request failed */
    public readonly list_failed = this._service.list_failed;

    /** Request the page that failed again */
    public retryList() {
        this._retried = true;
        this._service.moreItems();
    }
    private _retried = false;
    private readonly _injector = inject(Injector);
    /** A retry that loads removes Retry. Then the search box gets the focus. */
    private readonly _refocus_after_retry = effect(() => {
        if (this.list_failed() || !this._retried) return;
        this._retried = false;
        refocusIfLost(this._injector, () => this._input()?.nativeElement);
    });

    /** A new query starts a new list, so load-more must not wait */
    private _resetLoadMore() {
        this.last_total = 0;
        this.last_check = 0;
    }

    public last_total = 0;
    public last_check = 0;
    public search = '';
    public selected_filters: string[] = [];
    /** List of items for the active route */
    public readonly items = computed(() =>
        this._processItems(
            this._service.type,
            this._service.list() as ({
                id?: string;
                name?: string;
                display_name?: string;
                custom_name?: string;
            } & Record<string, unknown>)[],
        ),
    );
    /** Whether list of items for the active route are loading */
    public readonly loading = this._service.loading_list;
    /** Total number of items in the last request */
    public total = this._service.count;

    private readonly _manual_open = signal(false);
    private readonly _input =
        viewChild<ElementRef<HTMLInputElement>>('search_input');

    public readonly show_view = computed(() => {
        return this.show() || !this._service.active_item;
    });
    /** Whether the picker can close. It cannot while no item is open. */
    public readonly dismissible = computed(
        () => !!this._service.active_item$(),
    );

    constructor() {
        super();
        effect(() => {
            this._route_change();
            this.subroute.set(this._router.url.split('/')[3] || '');
        });
        effect(() => {
            const loading = this._service.loading();
            const active_item = this._service.active_item$();
            if (!loading && !this._manual_open()) {
                this.show.set(!active_item);
            }
        });
    }

    public ngOnInit() {
        this.subscription(
            'hotkey',
            this._hotkeys.listen(['Alt', 'Shift', 'KeyK'], () => this.open()),
        );
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.show && this.show()) {
            this.focusInput();
        }
    }

    public ngAfterViewInit() {
        this.focusInput();
        this.atBottom([0, 0]);
    }

    public open() {
        this._manual_open.set(true);
        this.show.set(true);
        this.timeout('focus', () => this.focusInput());
    }

    public close() {
        this._manual_open.set(false);
        this.show.set(false);
    }

    private readonly _trigger =
        viewChild<ElementRef<HTMLButtonElement>>('trigger');

    /** Escape in the open picker closes it */
    public onEscape() {
        if (!this.show_view() || !this.dismissible()) return;
        this.closeAndFocus(this._trigger().nativeElement);
    }

    /** Close, and give focus back to the button that opens the picker */
    public closeAndFocus(trigger: HTMLElement) {
        this.close();
        trigger.focus();
    }

    public focusInput() {
        this._input()?.nativeElement.focus();
    }

    public updateSearch(str: string) {
        this._resetLoadMore();
        this._service.setSearch(tagQuery(str, this.selected_filters));
    }

    /** Whether to update the list of items */
    public get is_stale() {
        const now = Date.now();
        const last_check = this.last_check;
        return (
            this.last_total !== this._service.list_items().length ||
            // A failed page has no new rows. Try it again at once.
            this._service.list_failed() ||
            now - last_check > 60 * 1000
        );
    }

    /**
     * Check if user has scrolled to the bottom of the sidebar and emit an event to get next page of items
     */
    public async atBottom([_start, end]: [number, number]) {
        this.timeout(
            'load_more',
            async () => {
                const loading = this.loading();
                const items = this.items();
                if (loading || !this.is_stale) return;
                if (end >= items.length) {
                    this.last_total = items.length;
                    this.last_check = Date.now();
                    if (this.last_total < this.total()) {
                        this._service.moreItems();
                    }
                }
            },
            150,
        );
    }

    /** Add the display name and details of each item of the `type` section */
    private _processItems(
        type: string,
        list: ({
            id?: string;
            name?: string;
            display_name?: string;
            custom_name?: string;
        } & Record<string, unknown>)[],
    ) {
        // The list has the items of the active section, so `type` gives their type
        for (const item of list) {
            if (type === 'modules') {
                const mod = item as unknown as Module;
                const detail =
                    mod.role === PlaceDriverRole.Service
                        ? mod.uri
                        : mod.role === PlaceDriverRole.Logic
                          ? mod.control_system_id
                          : mod.ip;
                (item as Record<string, unknown>).display_name =
                    mod.custom_name || mod.name || '<Unnamed>';
                (item as Record<string, unknown>).extra = detail;
            } else if (type === 'repositories') {
                const repo = item as unknown as Repository;
                (item as Record<string, unknown>).display_name =
                    repo.name || '<Unnamed>';
                (item as Record<string, unknown>).extra = repo.repo_type;
            } else {
                (item as Record<string, unknown>).display_name =
                    item.display_name ||
                    item.custom_name ||
                    item.name ||
                    '<Unnamed>';
                (item as Record<string, unknown>).extra = item.id;
            }
        }
        return list;
    }
}
