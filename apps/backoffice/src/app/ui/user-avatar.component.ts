import { Component, Input } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';

@Component({
    selector: 'a-user-avatar',
    template: `
        @if (user) {
            <div
                class="flex items-center justify-center overflow-hidden rounded-full"
                [attr.user-id]="user.id"
            >
                @if (!user.photo && !user.image) {
                    <div
                        initials
                        class="uppercase text-base-content text-opacity-80"
                    >
                        {{ initials }}
                    </div>
                } @else {
                    <img
                        auth
                        class="h-full w-full object-cover"
                        [source]="user.photo || user.image"
                    />
                }
            </div>
        }
    `,
    styles: [
        `
            :host > div {
                height: 2.5em;
                width: 2.5em;
                background-color: var(--b2);
                overflow: hidden;
                border: 2px solid var(--b1);
            }

            .initials {
                font-size: 1em;
            }
        `,
    ],
    standalone: false,
})
export class UserAvatarComponent {
    /** User to display avatar for */
    @Input() public user: PlaceUser;

    public get initials(): string {
        if (!this.user) return 'NA';
        const name = this.user.name || '';
        const parts = name.replace(/[()[\]\-+=\\/]+/gi, '').split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : name.slice(0, 2);
    }
}
