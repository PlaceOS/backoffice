import { signal } from '@angular/core';
import { PlaceUser, showUser } from '@placeos/ts-client';

const EMPTY_USER = new PlaceUser();

const _current_user = signal<PlaceUser>(null);

export const current_user = _current_user.asReadonly();

declare let jest;

setTimeout(async () => {
    try {
        if (jest) return;
    } catch {
        // jest not defined, continue
    }
    for (let i = 0; i < 10; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = await showUser('current').catch(() => null);
        if (user) {
            _current_user.set(user);
            return;
        }
    }
}, 300);

/** Get the current user details */
export function currentUser() {
    return _current_user() || EMPTY_USER;
}
