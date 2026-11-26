import { CdkTreeModule } from '@angular/cdk/tree';

import {
    AfterViewInit,
    Component,
    computed,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
    type Domain,
    type Group,
    groups as groups_v7,
    type Module,
    type Repository,
    type System,
    type Zone,
} from '@placeos/ts-client';
import { orThrowPage, PlaceDriverRole } from '@placeos/ts-client/compat';
import { AdminDataService } from '../admin/admin-data.service';
import { AdminDomainSelectComponent } from '../admin/admin-domain-select.component';
import { AsyncHandler } from '../common/async-handler.class';
import { refocusIfLost } from '../common/focus';
import {
    ActiveItemService,
    tagQuery,
    USER_DOMAIN_KEY,
} from '../common/item.service';
import { reportLoadError } from '../common/load-error';
import { FormFieldComponent } from './controls/form-field.component';
import { OptionComponent } from './controls/option.component';
import { SelectComponent } from './controls/select.component';
import { SpinnerComponent } from './controls/spinner.component';
import { TooltipDirective } from './controls/tooltip.directive';
import { IconComponent } from './icon.component';
import { SettingsToggleComponent } from './settings-toggle.component';
import { SkipToContentComponent } from './skip-to-content.component';
import { TranslatePipe } from './translate.pipe';
import { VirtualScrollComponent } from './virtual-scroll.component';

interface GroupTreeItem {
    group: Group;
    depth: number;
}

@Component({
    selector: 'item-sidebar',
    template: `
        <!-- eslint-disable @angular-eslint/template/click-events-have-key-events, @angular-eslint/template/interactive-supports-focus -->
        <nav
            class="border-base-200 bg-base-100 flex h-full w-[24rem] max-w-[25vw] min-w-64 flex-col space-y-2 overflow-hidden rounded-sm shadow-sm sm:border-r"
            [attr.aria-label]="title()"
            (click)="$event.stopPropagation()"
        >
            <div class="flex items-center gap-1 px-1 pt-1">
                <app-form-field class="no-subscript flex-1">
                    <icon prefix class="pointer-events-none text-2xl">
                        search
                    </icon>
                    <input
                        #search_input
                        [(ngModel)]="search"
                        (ngModelChange)="updateSearch($event)"
                        [placeholder]="
                            'COMMON.SEARCH_FOR' | translate: { name: title() }
                        "
                    />
                    @if (loading() || group_hierarchy_loading()) {
                        <app-spinner suffix diameter="24" />
                    }
                </app-form-field>
                <!-- The search has focus on load, so offer the skip next -->
                <skip-to-content />
                @if (filter_options()?.length) {
                    <!-- The select sits invisible on top of the button and takes all input -->
                    <div
                        class="focus-within:outline-info relative flex shrink-0 overflow-hidden rounded-lg focus-within:outline-2"
                    >
                        <button
                            icon
                            default
                            ripple
                            class="h-12 w-12"
                            [class.border-info]="selected_filters.length"
                            [class.text-info]="selected_filters.length"
                            tabindex="-1"
                            aria-hidden="true"
                        >
                            <icon class="m-2 text-2xl">filter_list</icon>
                        </button>
                        <app-form-field
                            class="no-subscript absolute top-1/2 -right-2 -translate-y-1/2 opacity-0"
                        >
                            <app-select
                                multiple
                                [attr.aria-label]="'COMMON.FILTER' | translate"
                                [(ngModel)]="selected_filters"
                                (ngModelChange)="updateSearch(search)"
                            >
                                @for (
                                    option of filter_options();
                                    track option
                                ) {
                                    <app-option
                                        [value]="option"
                                        class="capitalize"
                                        >{{ option }}</app-option
                                    >
                                }
                            </app-select>
                        </app-form-field>
                    </div>
                }
            </div>
            @if (route() === 'users') {
                <settings-toggle
                    class="px-1"
                    [ngModel]="include_deleted()"
                    (ngModelChange)="setIncludeDeleted($event)"
                >
                    {{ 'USERS.INCLUDE_DELETED' | translate }}
                </settings-toggle>
                <!-- Domains load for admins only -->
                @if (domain_list().length) {
                    <admin-domain-select
                        class="block px-1"
                        all
                        field_class="no-subscript w-full"
                        [key]="user_domain_key"
                        (changed)="setUserDomain($event)"
                    />
                }
            }
            <p class="w-full px-2 text-sm opacity-60">
                @let t = total();
                {{ 'COMMON.TOTAL_ITEMS' | translate: { count: t } : t }}
            </p>
            <div class="border-base-200 flex h-1/2 flex-1 flex-col border-t">
                @if (route() === 'groups' && !search.trim()) {
                    @if (group_tree_items().length) {
                        <div class="h-full overflow-auto">
                            <cdk-tree
                                class="group-tree"
                                [dataSource]="group_tree_items()"
                                [levelAccessor]="groupLevelAccessor"
                                [trackBy]="trackByGroupNode"
                            >
                                <cdk-tree-node
                                    *cdkTreeNodeDef="let node"
                                    cdkTreeNodePadding
                                    [cdkTreeNodePadding]="node.depth"
                                    [cdkTreeNodePaddingIndent]="8"
                                    class="border-base-200 bg-base-100 hover:bg-base-200 relative flex min-h-16 items-center gap-2 border-b pr-2 transition-colors"
                                    [class.active]="
                                        selected_id() === node.group.id
                                    "
                                >
                                    <div
                                        class="bg-base-content absolute inset-y-1 left-1 rounded-sm"
                                        [style.width]="
                                            0.25 * node.depth + 'rem'
                                        "
                                        [style.opacity]="0.1 * node.depth"
                                    ></div>
                                    @if (childCount(node.group) > 0) {
                                        <button
                                            type="button"
                                            class="hover:bg-base-content/20 ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors"
                                            [attr.aria-label]="
                                                (isGroupExpanded(node.group.id)
                                                    ? 'Collapse group '
                                                    : 'Expand group ') +
                                                displayName(node.group)
                                            "
                                            (click)="
                                                toggleGroup(node.group.id);
                                                $event.stopPropagation()
                                            "
                                        >
                                            <icon class="text-xl">
                                                {{
                                                    isGroupExpanded(
                                                        node.group.id
                                                    )
                                                        ? 'expand_more'
                                                        : 'chevron_right'
                                                }}
                                            </icon>
                                        </button>
                                    } @else {
                                        <div class="min-w-8"></div>
                                    }
                                    <a
                                        class="flex min-w-0 flex-1 flex-col justify-center rounded-md py-3 text-left no-underline"
                                        [routerLink]="
                                            subroute()
                                                ? [
                                                      '/',
                                                      route(),
                                                      node.group.id,
                                                      subroute(),
                                                  ]
                                                : ['/', route(), node.group.id]
                                        "
                                        [attr.aria-current]="
                                            selected_id() === node.group.id
                                                ? 'page'
                                                : null
                                        "
                                    >
                                        <div
                                            class="flex min-w-0 items-center gap-2"
                                        >
                                            <p
                                                class="min-w-0 flex-1 truncate font-medium"
                                            >
                                                {{ displayName(node.group) }}
                                            </p>
                                            @if (childCount(node.group) > 0) {
                                                <span
                                                    class="bg-base-200/70 rounded-full px-2 py-0.5 text-xs"
                                                >
                                                    {{ childCount(node.group) }}
                                                </span>
                                            }
                                        </div>
                                        @if (node.group.description) {
                                            <p
                                                class="mt-0.5 w-full truncate text-xs opacity-70"
                                            >
                                                {{ node.group.description }}
                                            </p>
                                        }
                                    </a>
                                </cdk-tree-node>
                            </cdk-tree>
                            <div
                                class="bg-base-200 p-2 text-center text-sm opacity-30"
                            >
                                {{ 'COMMON.END_OF_LIST' | translate }}
                            </div>
                        </div>
                    } @else if (!group_hierarchy_loading()) {
                        <div
                            class="flex flex-col items-center justify-center p-8 opacity-30"
                        >
                            <p>
                                {{
                                    'COMMON.LIST_EMPTY'
                                        | translate: { name: title() }
                                }}
                            </p>
                        </div>
                    }
                } @else if (items().length) {
                    <virtual-scroll
                        [item_size]="72"
                        [items]="items()"
                        [item_template]="item_display"
                        (scrolled)="atBottom($event)"
                    >
                        @if (list_failed()) {
                            <div
                                role="alert"
                                class="bg-base-200 flex items-center justify-center gap-2 p-2 text-sm"
                            >
                                {{ 'COMMON.LIST_LOAD_ERROR' | translate }}
                                <button
                                    btn
                                    ripple
                                    class="clear"
                                    [attr.aria-busy]="loading()"
                                    [attr.aria-disabled]="loading()"
                                    (click)="retryList()"
                                >
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
                    <ng-template #item_display let-item="item" let-idx="index">
                        <a
                            [routerLink]="
                                subroute()
                                    ? ['/', route(), item.id, subroute()]
                                    : ['/', route(), item.id]
                            "
                            routerLinkActive="active"
                            ariaCurrentWhenActive="page"
                            [appTooltip]="
                                item.update_available &&
                                item.commit !== item.update_info.commit
                                    ? ('COMMON.UPDATE_AVAILABLE' | translate)
                                    : ''
                            "
                            [class.bg-base-200]="idx % 2 === 1"
                            class="border-base-100 hover:border-info relative m-1 flex h-16 w-92 max-w-[calc(100%-0.5rem)] flex-col justify-center rounded-sm border px-2 py-1"
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
                            <div class="flex w-full">
                                @if (item.extra) {
                                    <div
                                        extra
                                        class="mono border-base-300 mt-1 max-w-full truncate rounded-sm border p-1 text-[0.625rem] opacity-60"
                                    >
                                        {{ item.extra }}
                                    </div>
                                }
                            </div>
                            @if (
                                item.update_available &&
                                item.commit !== item.update_info.commit
                            ) {
                                <icon
                                    class="text-info absolute -top-1 -right-1 rotate-12 text-2xl"
                                >
                                    new_releases
                                </icon>
                            }
                            @if (item.zone_issues) {
                                <div
                                    class="bg-warning text-warning-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [appTooltip]="
                                        (item.zone_issues === 'system'
                                            ? 'SYSTEMS.MISCONFIGURED'
                                            : 'ZONES.MISCONFIGURED'
                                        ) | translate
                                    "
                                >
                                    <icon> brightness_alert </icon>
                                    <span class="sr-only">
                                        {{
                                            (item.zone_issues === 'system'
                                                ? 'SYSTEMS.MISCONFIGURED'
                                                : 'ZONES.MISCONFIGURED'
                                            ) | translate
                                        }}
                                    </span>
                                </div>
                            }
                            @if (item.has_runtime_error) {
                                <div
                                    class="bg-error text-error-content absolute -top-1 -right-1 flex h-8 w-8 rotate-12 items-center justify-center rounded-full text-2xl"
                                    [appTooltip]="'MODULES.ERROR' | translate"
                                >
                                    <icon> error </icon>
                                    <span class="sr-only">
                                        {{ 'MODULES.ERROR' | translate }}
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
                        <button
                            btn
                            ripple
                            [attr.aria-busy]="loading()"
                            [attr.aria-disabled]="loading()"
                            (click)="retryList()"
                        >
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
        </nav>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }
            scroll-item:nth-child(2n) > a {
                background-color: var(--base-200);
            }
            .active {
                background-color: var(--secondary) !important;
                color: var(--secondary-content);
            }
            .group-tree {
                background: transparent;
            }
        `,
    ],
    imports: [
        SpinnerComponent,
        TooltipDirective,
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        CdkTreeModule,
        TranslatePipe,
        IconComponent,
        RouterModule,
        FormsModule,
        VirtualScrollComponent,
        SettingsToggleComponent,
        SkipToContentComponent,
        AdminDomainSelectComponent,
    ],
})
export class ItemSidebarComponent
    extends AsyncHandler
    implements AfterViewInit
{
    private _router = inject(Router);
    private _service = inject(ActiveItemService);
    private readonly _route_change = toSignal(this._router.events, {
        initialValue: null,
    });

    public readonly title = input('Systems');
    public readonly route = input('systems');
    public readonly filter_options = input<readonly string[]>([]);
    public readonly group_hierarchy = signal<Group[]>([]);
    /** Whether the group tree is loading */
    public readonly group_hierarchy_loading = signal(false);
    public readonly expanded_groups = signal<Record<string, boolean>>({});

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

    private readonly _input =
        viewChild<ElementRef<HTMLInputElement>>('search_input');

    public readonly subroute = signal('');
    public readonly selected_id = computed(() => {
        this._route_change();
        return this._router.url.split('/')[2] || '';
    });
    public readonly group_children_lookup = computed(() => {
        const lookup: Record<string, Group[]> = {};
        for (const group of this.group_hierarchy()) {
            if (!group.parent_id) continue;
            lookup[group.parent_id] ||= [];
            lookup[group.parent_id].push(group);
        }
        return lookup;
    });
    public readonly group_child_count_lookup = computed(() => {
        const lookup: Record<string, number> = {};
        for (const group of this.group_hierarchy()) {
            if (!group.parent_id) continue;
            lookup[group.parent_id] = (lookup[group.parent_id] || 0) + 1;
        }
        return lookup;
    });
    public readonly group_tree_items = computed(() => {
        const groups = this.group_hierarchy();
        const children = this.group_children_lookup();
        const roots = groups.filter(({ parent_id }) => !parent_id);
        const items: GroupTreeItem[] = [];
        const addGroup = (group: Group, depth: number) => {
            items.push({ group, depth });
            if (!this.isGroupExpanded(group.id)) return;
            for (const child of children[group.id] || [])
                addGroup(child, depth + 1);
        };
        for (const group of roots) addGroup(group, 0);
        return items;
    });
    public readonly groupLevelAccessor = (node: GroupTreeItem) => node.depth;
    public readonly trackByGroupNode = (_: number, node: GroupTreeItem) =>
        node.group.id;

    constructor() {
        super();
        effect(() => {
            this._route_change();
            this.subroute.set(this._router.url.split('/')[3] || '');
        });
        // Groups only change through the item service, so reload the
        // hierarchy after a save or removal rather than on every navigation
        effect(() => {
            this._service.items_changed();
            if (this.route() === 'groups') void this.loadGroupHierarchy();
        });
        effect(() => {
            const selected_id = this.selected_id();
            this.group_hierarchy();
            if (this.route() !== 'groups' || !selected_id) return;
            this.expandGroupPath(selected_id);
        });
    }

    public ngAfterViewInit() {
        this.focusInput();
        this.atBottom([0, 0]);
    }

    public focusInput() {
        this._input()?.nativeElement.focus();
    }

    public updateSearch(str: string) {
        this._resetLoadMore();
        this._service.setSearch(tagQuery(str, this.selected_filters));
    }

    public displayName(item: { display_name?: string; name?: string }) {
        return item.display_name || item.name || '<Unnamed>';
    }

    public childCount(group: Group) {
        return (
            this.group_child_count_lookup()[group.id] ||
            group.children_count ||
            0
        );
    }

    public isGroupExpanded(group_id: string) {
        return !!this.expanded_groups()[group_id];
    }

    public toggleGroup(group_id: string) {
        this.expanded_groups.update((state) => ({
            ...state,
            [group_id]: !state[group_id],
        }));
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
    public async atBottom([_start, end]: [number, number]) {
        this.timeout(
            'load_more',
            async () => {
                const loading = this.loading();
                const items = this.items();
                if (loading || !this.is_stale) return;
                if (end >= items.length) {
                    // Buffer 2 items early to avoid edge jumps
                    this.last_total = items.length;
                    this.last_check = Date.now();
                    const serviceTotal = this.total();
                    if (this.last_total < serviceTotal) {
                        this._service.moreItems();
                    }
                }
            },
            150,
        ); // 150ms debounce for smooth feel
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
            const fields = item as Record<string, unknown>;
            if (type === 'modules') {
                const mod = item as unknown as Module;
                // The module list has the system name only
                const name = mod.control_system?.name;
                const detail =
                    mod.role === PlaceDriverRole.Service
                        ? mod.uri
                        : mod.role === PlaceDriverRole.Logic
                          ? name
                              ? `${name} | ${mod.control_system_id} `
                              : mod.control_system_id
                          : mod.ip;
                fields.display_name =
                    mod.custom_name || mod.name || '<Unnamed>';
                fields.extra = detail;
            } else if (type === 'repositories') {
                const repo = item as unknown as Repository;
                fields.display_name = repo.name || '<Unnamed>';
                fields.extra = repo.repo_type;
            } else if (type === 'systems') {
                const system = item as unknown as System;
                fields.display_name =
                    system.display_name || system.name || '<Unnamed>';
                fields.zone_issues =
                    (system.email || system.map_id) &&
                    (system.zones?.length ?? 0) < 3
                        ? 'system'
                        : '';
            } else if (type === 'zones') {
                const zone = item as unknown as Zone;
                const tags = zone.tags || [];
                fields.display_name =
                    zone.display_name || zone.name || '<Unnamed>';
                fields.zone_issues =
                    (tags.includes('level') ||
                        tags.includes('building') ||
                        tags.includes('region')) &&
                    !zone.parent_id
                        ? 'zone'
                        : '';
            } else {
                fields.display_name =
                    item.display_name ||
                    item.custom_name ||
                    item.name ||
                    '<Unnamed>';
                fields.extra = item.id;
            }
        }
        return list;
    }

    private async loadGroupHierarchy() {
        this.group_hierarchy_loading.set(true);
        const response = await groups_v7
            .query({
                limit: 2500,
                fields: [
                    'id',
                    'name',
                    'description',
                    'authority_id',
                    'parent_id',
                    'children_count',
                ],
            })
            .then(orThrowPage)
            .catch(reportLoadError({ data: [] }));
        const groups = [...response.data].sort((a, b) =>
            this.displayName(a).localeCompare(this.displayName(b)),
        );
        this.group_hierarchy.set(groups);
        this.group_hierarchy_loading.set(false);
    }

    private expandGroupPath(group_id: string) {
        const path: string[] = [];
        // Visited set stops the walk if the parent links contain a cycle
        const visited = new Set<string>([group_id]);
        let group = this.findGroup(group_id);
        while (group?.parent_id && !visited.has(group.parent_id)) {
            visited.add(group.parent_id);
            path.unshift(group.parent_id);
            group = this.findGroup(group.parent_id);
        }
        if (!path.length) return;
        const state = this.expanded_groups();
        let changed = false;
        const next_state = { ...state };
        for (const id of path) {
            if (next_state[id]) continue;
            next_state[id] = true;
            changed = true;
        }
        if (changed) this.expanded_groups.set(next_state);
    }

    private findGroup(group_id: string) {
        return this.group_hierarchy().find(({ id }) => id === group_id);
    }
}
