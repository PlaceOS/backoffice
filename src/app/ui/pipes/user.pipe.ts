import { Pipe, PipeTransform } from '@angular/core';
import { PlaceUser, showUser } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';

const USERS: PlaceUser[] = [];

@Pipe({
    name: 'user',
})
export class UserPipe implements PipeTransform {
    public async transform(id: string): Promise<PlaceUser> {
        if (!id) return {} as PlaceUser;
        let user = USERS.find(
            (_) => _.id === id || _.email === id || _.card_number === id,
        );
        if (!user) {
            user = await lastValueFrom(showUser(id));
            USERS.push(user);
        }
        return user;
    }
}
