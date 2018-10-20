
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { Utils } from '../../shared/utility.class';
import { SystemModalComponent } from '../../overlays/system-modal/system-modal.component';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-systems',
    templateUrl: './systems.template.html',
    styleUrls: ['./systems.styles.scss']
})
export class SystemsComponent extends BaseRootComponent {

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.service = 'Systems';
        this.model.route = 'systems';
        this.service.Overlay.setupModal('system-view', { cmp: SystemModalComponent });
    }

    protected loadValues() {
        const query: any = { offset: 0, limit: 1, sys_id: this.model.item.id };
        const q = `total_${Utils.generateQueryString(query)}`;
            // Get trigger count
        this.service.SystemTriggers.query(query)
            .then(() => this.model.triggers = this.service.SystemTriggers.get(q));
            // Get device count
        this.model.devices = (this.model.item.modules || []).length;
            // Get zone count
        this.model.zones = (this.model.item.zones || []).length;
    }
}
