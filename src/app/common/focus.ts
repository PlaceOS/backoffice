import { afterNextRender, DestroyRef, Injector } from '@angular/core';

/**
 * Give focus to `target` after the next render, but only if that render
 * removed the focused control, so the focus is on the page body. Use it after
 * an action that replaces the control that started it, such as a Retry
 * button. Focus that the user moved to another control stays there.
 */
export function refocusIfLost(
    injector: Injector,
    target: () => HTMLElement | null | undefined,
) {
    // The view can close while the action runs. Then there is nothing to do.
    if (injector.get(DestroyRef).destroyed) return;
    afterNextRender(
        () => {
            const active = document.activeElement;
            if (active && active !== document.body) return;
            target()?.focus();
        },
        { injector },
    );
}
