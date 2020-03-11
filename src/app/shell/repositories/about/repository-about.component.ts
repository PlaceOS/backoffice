
import { Component, Input, OnInit } from '@angular/core';
import { EngineRepository } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from '../../../services/app.service';

@Component({
    selector: 'repository-about',
    templateUrl: './repository-about.template.html',
    styleUrls: ['./repository-about.styles.scss']
})
export class RepositoryAboutComponent extends BaseDirective implements OnInit {
    /** Repository to display details about */
    @Input() public item: EngineRepository;
    /** Whether the latest commit is being pulled on the server */
    public pulling: boolean;

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
            })
        );
    }

    /**
     * Send request to server to pull the latest commit for the active repository
     */
    public pullLatestCommit() {
        this.pulling = true;
        this._service.Repositories.pullCommit(this.item.id)
            .then(
                () => this.pulling = false,
                err => {
                    this.pulling = false;
                    this._service.notifyError(`Error pulling latest commit. Error: ${err.message || err}`);
                }
            );
    }

}
