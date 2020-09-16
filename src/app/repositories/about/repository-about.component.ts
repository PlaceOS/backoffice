
import { Component, Input } from '@angular/core';
import { PlaceRepository, pullRepositoryChanges } from '@placeos/ts-client';

import { BaseClass } from 'src/app/common/base.class';
import { notifyInfo, notifyError } from 'src/app/common/notifications';

@Component({
    selector: 'repository-about',
    templateUrl: './repository-about.template.html',
    styleUrls: ['./repository-about.styles.scss']
})
export class RepositoryAboutComponent extends BaseClass {
    /** Repository to display details about */
    @Input() public item: PlaceRepository;
    /** Whether the latest commit is being pulled on the server */
    public pulling: boolean;

    /**
     * Send request to server to pull the latest commit for the active repository
     */
    public pullLatestCommit() {
        this.pulling = true;
        pullRepositoryChanges(this.item.id)
            .subscribe(
                (resp: any) => {
                    this.pulling = false;
                    notifyInfo(`Pulled down commit ${resp.commit_hash} for ${this.item.name}`);
                    this.item = new PlaceRepository({ ...this.item, ...resp });
                },
                err => {
                    this.pulling = false;
                    notifyError(`Error pulling latest commit. Error: ${JSON.stringify(err.response || err.message || err)}`);
                }
            );
    }

}
