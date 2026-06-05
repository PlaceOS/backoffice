import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    authority,
    PlaceApplication,
    queryApplications,
} from '@placeos/ts-client';
import { lastValueFrom } from '../common/general';
import { CustomTooltipData } from './custom-tooltip.component';

interface SidebarApplication {
    id: string;
    name: string;
    redirect_uri: string;
    icon_urls: string[];
    icon_index: number;
}

const PAGE_SIZE = 9;

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
                                matRipple
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
                                matRipple
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
                                matRipple
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
    imports: [MatRippleModule],
})
export class ApplicationPickerTooltipComponent implements OnInit {
    private _tooltip = inject(CustomTooltipData, { optional: true });

    public readonly page_size = PAGE_SIZE;
    public readonly loading = signal(true);
    public readonly page = signal(0);
    public readonly applications = signal<SidebarApplication[]>([]);
    public readonly total_pages = computed(() =>
        Math.max(1, Math.ceil(this.applications().length / PAGE_SIZE)),
    );
    public readonly visible_applications = computed(() => {
        const start = this.page() * PAGE_SIZE;
        return this.applications().slice(start, start + PAGE_SIZE);
    });

    public async ngOnInit() {
        const active_authority = authority();
        if (!active_authority?.id) {
            this.loading.set(false);
            return;
        }
        const response = await lastValueFrom(
            queryApplications({ authority_id: active_authority.id } as Record<
                string,
                unknown
            >),
        ).catch(() => null);
        const applications = (response?.data || [])
            .filter((app) => this.isSupportedRedirectUri(app?.redirect_uri))
            .sort((lhs, rhs) =>
                (lhs.name || this.nameFromUri(lhs.redirect_uri)).localeCompare(
                    rhs.name || this.nameFromUri(rhs.redirect_uri),
                ),
            )
            .map((app) => this.mapApplication(app));
        this.applications.set(applications);
        this.page.set(0);
        this.loading.set(false);
    }

    public readonly close = () => this._tooltip?.close();

    public currentIcon(item: SidebarApplication) {
        return item.icon_urls[item.icon_index] || '';
    }

    public uri(uri: string) {
        return uri.replace('oauth-resp.html', '');
    }

    public appInitial(name: string) {
        return `${name || '?'}`.trim().charAt(0).toUpperCase() || '?';
    }

    public loadNextIcon(item: SidebarApplication) {
        this.applications.update((applications) =>
            applications.map((app) =>
                app.id === item.id
                    ? {
                          ...app,
                          icon_index: Math.min(
                              app.icon_index + 1,
                              app.icon_urls.length,
                          ),
                      }
                    : app,
            ),
        );
    }

    public previousPage() {
        this.page.update((page) => Math.max(0, page - 1));
    }

    public nextPage() {
        this.page.update((page) => Math.min(this.total_pages() - 1, page + 1));
    }

    private mapApplication(app: PlaceApplication): SidebarApplication {
        return {
            id: app.id,
            name: app.name || this.nameFromUri(app.redirect_uri),
            redirect_uri: app.redirect_uri,
            icon_urls: this.faviconUrls(app.redirect_uri),
            icon_index: 0,
        };
    }

    private nameFromUri(uri: string) {
        try {
            return new URL(uri, location.origin).hostname;
        } catch {
            return 'Application';
        }
    }

    private isSupportedRedirectUri(uri: string) {
        if (!uri) return false;
        try {
            const protocol = new URL(uri, location.origin).protocol;
            return protocol === 'http:' || protocol === 'https:';
        } catch {
            return false;
        }
    }

    private faviconUrls(uri: string) {
        const path = this.redirectPath(uri);
        return [
            ...['svg', 'png', 'jpg', 'ico'].map(
                (ext) => `${path}assets/favicon.${ext}`,
            ),
            `${path}favicon.ico`,
        ];
    }

    private redirectPath(uri: string) {
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
}
