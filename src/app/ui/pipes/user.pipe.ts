import { Pipe, PipeTransform } from '@angular/core';
import { User, users } from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';
import { newItem } from '../../common/placeos';

/** User lookups by ID, email or card number. Requests in flight are shared. */
const USERS = new Map<string, Promise<User>>();

@Pipe({
    name: 'user',
})
export class UserPipe implements PipeTransform {
    public transform(id: string): Promise<User> {
        if (!id) return Promise.resolve({} as User);
        let user = USERS.get(id);
        if (!user) {
            // Drop a failed lookup so that a later render can try again
            user = users
                .show({ id })
                .then(orThrow)
                // The server can leave out the admin fields of the user
                .then((data) => newItem(User, data))
                .catch(() => {
                    USERS.delete(id);
                    return {} as User;
                });
            USERS.set(id, user);
        }
        return user;
    }
}
