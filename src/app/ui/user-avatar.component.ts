import { Component, computed, input } from '@angular/core';
import { PlaceUser } from '@placeos/ts-client';
import { AuthenticatedImageDirective } from './authenticated-image.directive';

@Component({
    selector: 'a-user-avatar',
    template: `
        @if (user()) {
            <div
                class="flex items-center justify-center overflow-hidden rounded-full"
                [attr.user-id]="user().id"
            >
                @if (!user().photo && !user().image) {
                    <div
                        initials
                        class="text-base-content text-opacity-80 uppercase"
                    >
                        {{ initials() }}
                    </div>
                } @else {
                    <img
                        auth
                        class="h-full w-full object-cover"
                        [source]="user().photo || user().image"
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
                background-color: var(--base-200);
                overflow: hidden;
                border: 2px solid var(--base-100);
            }

            .initials {
                font-size: 1em;
            }
        `,
    ],
    imports: [AuthenticatedImageDirective],
})
export class UserAvatarComponent {
    public readonly user = input<PlaceUser | any>(undefined);
    public readonly initials = computed(() => {
        const user = this.user();
        if (!user) return 'NA';
        const name = user.name || '';
        const parts = name.replace(/[()[\]\-+=\\/]+/gi, '').split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : name.slice(0, 2);
    });
}
