import { Pipe, PipeTransform } from '@angular/core';
import { PlaceUser, showUser } from '@placeos/ts-client';

/** User lookups by ID, email or card number. Requests in flight are shared. */
const USERS = new Map<string, Promise<PlaceUser>>();

@Pipe({
    name: 'user',
})
export class UserPipe implements PipeTransform {
    public transform(id: string): Promise<PlaceUser> {
        if (!id) return Promise.resolve({} as PlaceUser);
        let user = USERS.get(id);
        if (!user) {
            // Drop a failed lookup so that a later render can try again
            user = showUser(id).catch(() => {
                USERS.delete(id);
                return {} as PlaceUser;
            });
            USERS.set(id, user);
        }
        return user;
    }
}
