import { showUser, PlaceUser } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { delay, map, retry } from 'rxjs/operators';

const EMPTY_USER = new PlaceUser();

const _current_user = new BehaviorSubject<PlaceUser>(null);

export const current_user = _current_user.asObservable();

declare let jest;

setTimeout(() => {
    try {
        if (jest) return;
    } catch {}
    showUser('current')
        .pipe(delay(1000), retry(10))
        .subscribe((user) => _current_user.next(user));
}, 300);

/** Get the current user details */
export function currentUser() {
    return _current_user.getValue() || EMPTY_USER;
}
