import { signal } from '@angular/core';
import { User } from '@placeos/ts-client';
import { newItem } from './placeos';

const EMPTY_USER = newItem(User);

/**
 * The signed in user. `BackofficeUsersService` loads it and is the only
 * writer. It lives here so that code which cannot inject that service, such
 * as `SettingsService` (a dependency of it), can still read the user.
 */
const _current_user = signal<User>(null);

export const current_user = _current_user.asReadonly();

/** Publish the signed in user. Only `BackofficeUsersService` calls this. */
export function setCurrentUser(user: User) {
    _current_user.set(user);
}

/** Get the current user details */
export function currentUser() {
    return _current_user() || EMPTY_USER;
}
