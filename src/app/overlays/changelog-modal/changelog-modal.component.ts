
import { Component, OnInit } from '@angular/core';
import { OverlayContentComponent } from '@acaprojects/ngx-widgets';
import { Utils } from '../../shared/utility.class';

@Component({
    selector: 'changelog-modal',
    templateUrl: './changelog-modal.template.html',
    styleUrls: ['./changelog-modal.styles.scss']
})
export class ChangelogModalComponent extends OverlayContentComponent implements OnInit {

    private timers: any = {};

    public ngOnInit() {
        // this.model.changelog = '';
    }

    public init() {
        console.log('Model:', this.model);
    }
}
