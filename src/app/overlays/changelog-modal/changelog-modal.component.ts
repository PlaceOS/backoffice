
import { Component } from '@angular/core';

import { BaseDirective } from 'src/app/shared/globals/base.directive';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'changelog-modal',
    templateUrl: './changelog-modal.template.html',
    styleUrls: ['./changelog-modal.styles.scss']
})
export class ChangelogModalComponent extends BaseDirective {
    /** Whether the changelog is loading */
    public loading: boolean;
    /** Changelog Markdown */
    public item: string;
    /** HTML string for rendering the change log */
    public changelog: string;
}

OVERLAY_REGISTER.push({ id: 'changelog', config: { content: ChangelogModalComponent, config: 'modal' } });