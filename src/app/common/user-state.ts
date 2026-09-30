import { signal } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

const EMPTY_USER = new PlaceUser();

/**
 * The signed in user. `BackofficeUsersService` loads it and is the only
 * writer. It lives here so that code which cannot inject that service, such
 * as `SettingsService` (a dependency of it), can still read the user.
 */
const _current_user = signal<PlaceUser>(null);

export const current_user = _current_user.asReadonly();

/** Publish the signed in user. Only `BackofficeUsersService` calls this. */
export function setCurrentUser(user: PlaceUser) {
    _current_user.set(user);
}

/** Get the current user details */
export function currentUser() {
    return _current_user() || EMPTY_USER;
}
