
import { Component } from '@angular/core';

import { BaseComponent } from 'src/app/shared/globals/base.component';
import { OVERLAY_REGISTER } from 'src/app/shared/globals/overlay-register';

@Component({
    selector: 'changelog-modal',
    templateUrl: './changelog-modal.template.html',
    styleUrls: ['./changelog-modal.styles.scss']
})
export class ChangelogModalComponent extends BaseComponent {

}

OVERLAY_REGISTER.push({ id: 'changelog', config: { content: ChangelogModalComponent, config: 'modal' } });