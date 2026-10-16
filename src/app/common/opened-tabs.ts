import { computed, inject, linkedSignal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

/**
 * Tabs the user has opened for the active item, read from routes shaped
 * `/<section>/<id>/<tab>`. Resets when `id` changes, so state services can
 * hold back full lists until their tab is first shown. Call in an injection
 * context.
 */
export function openedTabs(id: Signal<string | undefined>) {
    const router = inject(Router);
    const url = toSignal(
        router.events.pipe(
            filter(
                (event): event is NavigationEnd =>
                    event instanceof NavigationEnd,
            ),
            map((event) => event.urlAfterRedirects),
        ),
        { initialValue: router.url },
    );
    const tab = computed(() => url().split(/[?#]/)[0].split('/')[3]);
    const opened = linkedSignal<
        { id: string | undefined; tab: string },
        { id: string | undefined; tabs: Set<string> }
    >({
        source: () => ({ id: id(), tab: tab() }),
        computation: (source, previous) => ({
            id: source.id,
            tabs: new Set<string>([
                ...(previous && previous.value.id === source.id
                    ? previous.value.tabs
                    : []),
                source.tab,
            ]),
        }),
    });
    return computed(() => opened().tabs);
}
