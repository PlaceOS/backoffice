import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Application, oauth_applications } from '@placeos/ts-client';
import { orThrowPage } from '@placeos/ts-client/compat';
import { authority, newItem } from '../common/placeos';
import { CustomTooltipData } from './custom-tooltip.component';

interface SidebarApplication {
    id: number;
    name: string;
    redirect_uri: string;
    icon_urls: string[];
}

interface ApplicationCache {
    authority_id: string;
    list: SidebarApplication[];
}

const PAGE_SIZE = 9;

const _cache = signal<ApplicationCache | null>(null);
let _pending: Promise<void> | null = null;

/**
 * Browser applications of the active authority.
 * Null until a load for the active authority completes
 */
export const sidebar_applications = computed(() => {
    const cache = _cache();
    return cache && cache.authority_id === authority()?.id ? cache.list : null;
});

/**
 * Loads the browser applications of the active authority into
 * `sidebar_applications`. Calls during a load share that load.
 * A failed load keeps the last list
 */
export function loadApplications(): Promise<void> {
    const authority_id = authority()?.id;
    if (!authority_id) return Promise.resolve();
    _pending ??= queryApplications(authority_id)
        .then((list) => _cache.set({ authority_id, list }))
        .catch(() => undefined)
        .finally(() => (_pending = null));
    return _pending;
}

async function queryApplications(authority_id: string) {
    const { data } = await oauth_applications
        .query({ authority_id })
        .then(orThrowPage);
    // The API document gives no schema for the list, so parse each item
    return data
        .map((app) => newItem(Application, app))
        .filter((app) => isSupportedRedirectUri(app.redirect_uri))
        .map(mapApplication)
        .sort((lhs, rhs) => lhs.name.localeCompare(rhs.name));
}

/** Whether an application redirect URI can open in a browser tab */
export function isSupportedRedirectUri(uri: string) {
    if (!uri) return false;
    try {
        const protocol = new URL(uri, location.origin).protocol;
        return protocol === 'http:' || protocol === 'https:';
    } catch {
        return false;
    }
}

function mapApplication(app: Application): SidebarApplication {
    return {
        id: app.id,
        name: app.name || nameFromUri(app.redirect_uri),
        redirect_uri: app.redirect_uri,
        icon_urls: faviconUrls(app.redirect_uri),
    };
}

function nameFromUri(uri: string) {
    try {
        return new URL(uri, location.origin).hostname;
    } catch {
        return 'Application';
    }
}

function faviconUrls(uri: string) {
    const path = redirectPath(uri);
    return [
        ...['svg', 'png', 'jpg', 'ico'].map(
            (ext) => `${path}assets/favicon.${ext}`,
        ),
        `${path}favicon.ico`,
    ];
}

function redirectPath(uri: string) {
    try {
        const url = new URL(uri, location.origin);
        const pathname = url.pathname || '/';
        const last_segment = pathname
            .split('/')
            .filter((_) => !!_)
            .at(-1);
        const base_path = pathname.endsWith('/')
            ? pathname
            : last_segment?.includes('.')
              ? pathname.slice(0, pathname.lastIndexOf('/') + 1)
              : `${pathname}/`;
        return `${url.origin}${base_path.startsWith('/') ? '' : '/'}${base_path}`;
    } catch {
        return '/';
    }
}

@Component({
    selector: 'application-picker-tooltip',
    template: `
        <div
            class="border-base-300 bg-base-100 m-2 w-[24rem] max-w-[calc(100vw-2rem)] rounded-2xl border p-4 shadow-xl"
        >
            <div class="mb-2 px-2 pt-1 text-sm font-semibold">Applications</div>
            <div>
                @if (loading()) {
                    <div
                        class="text-base-content/60 px-2 py-6 text-center text-sm"
                    >
                        Loading applications...
                    </div>
                } @else if (!applications().length) {
                    <div
                        class="text-base-content/60 px-2 py-6 text-center text-sm"
                    >
                        No applications configured for this domain.
                    </div>
                } @else {
                    <div class="grid grid-cols-3 gap-2">
                        @for (app of visible_applications(); track app.id) {
                            <a
                                ripple
                                class="hover:bg-base-200 flex min-h-28 flex-col items-center justify-start rounded-2xl px-2 py-3 text-center"
                                [href]="uri(app.redirect_uri)"
                                (click)="close()"
                            >
                                <div
                                    class="bg-base-300/50 mb-3 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl"
                                >
                                    @if (currentIcon(app)) {
                                        <img
                                            class="h-full w-full object-contain p-1"
                                            [src]="currentIcon(app)"
                                            [alt]="app.name"
                                            (error)="loadNextIcon(app)"
                                        />
                                    } @else {
                                        <div
                                            class="text-base-content/60 text-lg font-semibold uppercase"
                                        >
                                            {{ appInitial(app.name) }}
                                        </div>
                                    }
                                </div>
                                <div app-name class="text-sm font-medium">
                                    {{ app.name }}
                                </div>
                            </a>
                        }
                    </div>
                    @if (applications().length > page_size) {
                        <div
                            class="bg-base-200/50 border-base-200 mt-3 flex items-center justify-between rounded-full border text-sm"
                        >
                            <button
                                ripple
                                class="hover:bg-base-200 w-24 rounded-full px-4 py-2"
                                [disabled]="page() === 0"
                                [class.opacity-40]="page() === 0"
                                (click)="previousPage()"
                            >
                                Previous
                            </button>
                            <div class="text-base-content/60">
                                {{ page() + 1 }} / {{ total_pages() }}
                            </div>
                            <button
                                ripple
                                class="hover:bg-base-200 w-24 rounded-full px-4 py-2"
                                [disabled]="page() >= total_pages() - 1"
                                [class.opacity-40]="page() >= total_pages() - 1"
                                (click)="nextPage()"
                            >
                                Next
                            </button>
                        </div>
                    }
                }
            </div>
        </div>
    `,
    styles: [
        `
            [app-name] {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                line-height: 1.25rem;
                max-height: 2.5rem;
                word-break: break-word;
            }
        `,
    ],
    imports: [],
})
/** Popup with the applications of the active authority. Each open refreshes the list */
export class ApplicationPickerTooltipComponent implements OnInit {
    private _tooltip = inject(CustomTooltipData, { optional: true });
    private readonly _refreshing = signal(true);
    /** Index in `icon_urls` of the icon to show, by application ID */
    private readonly _icon_index = signal<Record<number, number>>({});

    public readonly page_size = PAGE_SIZE;
    public readonly page = signal(0);
    public readonly applications = computed(() => sidebar_applications() ?? []);
    /** Only without a cached list, so a refresh does not hide the list */
    public readonly loading = computed(
        () => this._refreshing() && !sidebar_applications(),
    );
    public readonly total_pages = computed(() =>
        Math.max(1, Math.ceil(this.applications().length / PAGE_SIZE)),
    );
    public readonly visible_applications = computed(() => {
        const start = this.page() * PAGE_SIZE;
        return this.applications().slice(start, start + PAGE_SIZE);
    });

    public async ngOnInit() {
        await loadApplications();
        this._refreshing.set(false);
    }

    public readonly close = () => this._tooltip?.close();

    public currentIcon(item: SidebarApplication) {
        return item.icon_urls[this._icon_index()[item.id] ?? 0] || '';
    }

    public uri(uri: string) {
        return uri.replace('oauth-resp.html', '');
    }

    public appInitial(name: string) {
        return `${name || '?'}`.trim().charAt(0).toUpperCase() || '?';
    }

    public loadNextIcon(item: SidebarApplication) {
        this._icon_index.update((indexes) => ({
            ...indexes,
            [item.id]: Math.min(
                (indexes[item.id] ?? 0) + 1,
                item.icon_urls.length,
            ),
        }));
    }

    public previousPage() {
        this.page.update((page) => Math.max(0, page - 1));
    }

    public nextPage() {
        this.page.update((page) => Math.min(this.total_pages() - 1, page + 1));
    }
}
