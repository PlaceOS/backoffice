import { Pipe, PipeTransform } from '@angular/core';
import { PlaceUser, showUser } from '@placeos/ts-client';

const USERS: PlaceUser[] = [];

@Pipe({
    name: 'user'
})
export class UserPipe implements PipeTransform {
    public async transform(id: string): Promise<PlaceUser> {
        if (!id) return {} as any;
        let user = USERS.find(_ => _.id === id || _.email === id || _.card_number === id);
        if (!user) {
            user = await showUser(id).toPromise();
            USERS.push(user);
        }
        return user;
    }
}
