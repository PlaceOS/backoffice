import { Directive, inject } from '@angular/core';
import { LocaleService } from '../common/locale.service';

/**
 * Give Material spinners and progress bars the name "Loading", as screen
 * readers need a name for each progress bar. Import it next to the Material
 * progress modules. Elements with their own `aria-label` keep it.
 */
@Directive({
    selector:
        'mat-spinner:not([aria-label]), mat-progress-spinner:not([aria-label]), mat-progress-bar:not([aria-label])',
    host: { '[attr.aria-label]': 'label' },
})
export class LoadingLabelDirective {
    protected readonly label = inject(LocaleService).get('COMMON.LOADING');
}
