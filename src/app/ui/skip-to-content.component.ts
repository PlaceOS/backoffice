import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from './translate.pipe';

/**
 * Button that moves keyboard focus past the menus to the page content.
 * It is only visible while it has focus. The page shell must have an element
 * with the id `main-content` and `tabindex="-1"`.
 */
@Component({
    selector: 'skip-to-content',
    template: `
        <button
            type="button"
            class="bg-base-100 border-base-300 fixed top-2 left-2 z-10000 -translate-y-[200%] rounded-sm border px-4 py-2 shadow focus:translate-y-0"
            (click)="skip()"
        >
            {{ 'COMMON.SKIP_TO_CONTENT' | translate }}
        </button>
    `,
    imports: [TranslatePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkipToContentComponent {
    public skip() {
        document.getElementById('main-content')?.focus();
    }
}
