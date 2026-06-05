import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { IconComponent } from '../ui/icon.component';
import { SettingsToggleComponent } from '../ui/settings-toggle.component';
import { TranslatePipe } from '../ui/translate.pipe';
import {
    GROUP_PERMISSION_FLAGS,
    hasGroupPermission,
    setGroupPermission,
} from './group-permissions';

export interface GroupPermissionsModalData {
    title: string;
    permissions: number;
    deny?: boolean;
    show_deny?: boolean;
}

export interface GroupPermissionsModalResult {
    permissions: number;
    deny?: boolean;
}

@Component({
    selector: 'group-permissions-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[22rem] items-center rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">{{ title | translate }}</h2>
        </header>
        <main class="flex w-lg max-w-[85vw] flex-col gap-4 p-4 sm:h-auto">
            <section class="grid grid-cols-2 gap-x-4 gap-y-2">
                @for (permission of permission_flags; track permission.key) {
                    <settings-toggle
                        [ngModel]="
                            hasPermission(permissions(), permission.value)
                        "
                        (ngModelChange)="
                            setPermission(permission.value, $event)
                        "
                    >
                        {{ permission.label | translate }}
                    </settings-toggle>
                }
            </section>
            @if (show_deny) {
                <hr class="border-base-200" />
                <settings-toggle [(ngModel)]="deny">
                    {{ 'GROUPS.FIELD_DENY' | translate }}
                </settings-toggle>
            }
        </main>
        <footer
            class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
        >
            <button
                btn
                matRipple
                class="inverse bg-base-100 flex-1"
                mat-dialog-close
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button btn matRipple class="flex-1" (click)="save()">
                <icon class="mr-2">save</icon>
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `,
    styles: [``],
    imports: [
        FormsModule,
        IconComponent,
        MatDialogModule,
        MatRippleModule,
        SettingsToggleComponent,
        TranslatePipe,
    ],
})
export class GroupPermissionsModalComponent {
    private _dialog_ref =
        inject<
            MatDialogRef<
                GroupPermissionsModalComponent,
                GroupPermissionsModalResult
            >
        >(MatDialogRef);
    private _data = inject<GroupPermissionsModalData>(MAT_DIALOG_DATA);

    public readonly title = this._data.title;
    public readonly show_deny = this._data.show_deny;
    public readonly permissions = signal(+this._data.permissions || 0);
    public readonly permission_flags = GROUP_PERMISSION_FLAGS;
    public readonly hasPermission = hasGroupPermission;
    public deny = !!this._data.deny;

    public setPermission(permission: number, enabled: boolean) {
        this.permissions.set(
            setGroupPermission(this.permissions(), permission, enabled),
        );
    }

    public save() {
        this._dialog_ref.close({
            permissions: this.permissions(),
            deny: this.deny,
        });
    }
}
