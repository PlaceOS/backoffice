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
                @if (!photo_url()) {
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
                        [source]="photo_url()"
                        [alt]="'User avatar'"
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
    public readonly user = input<
        (PlaceUser & { photo?: string }) | Record<string, unknown>
    >(undefined);
    public readonly photo_url = computed(() => {
        const user = this.user();
        return ((user?.photo || user?.image) as string) || '';
    });
    public readonly initials = computed(() => {
        const user = this.user();
        if (!user) return 'NA';
        const name = (user.name || '') as string;
        const parts = name.replace(/[()[\]\-+=\\/]+/gi, '').split(' ');
        return parts.length > 1
            ? `${parts[0][0]}${parts[parts.length - 1][0]}`
            : name.slice(0, 2);
    });
}
