
import { Component, Input, SimpleChanges, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { EngineZone, EngineSystem, EncryptionLevel } from '@placeos/ts-client';

import { BaseDirective } from '../../../shared/globals/base.directive';
import { ApplicationService } from 'src/app/services/app.service';

import * as marked from 'marked';
import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'zone-about',
    templateUrl: './zone-about.template.html',
    styleUrls: ['./zone-about.styles.scss']
})
export class ZoneAboutComponent extends BaseDirective implements OnInit, OnChanges {
    /** Item to render */
    @Input() public item: EngineZone;
    /** List of systems associated with the zone */
    public system_list: EngineSystem[];
    /** Selected system */
    public active_system: EngineSystem;
    /** Settings level to display details for */
    public encryption_level: EncryptionLevel = EncryptionLevel.None;

    public readonly available_levels: Identity[] = this.levels;

    /** Displayable encryption levels for settings */
    public get levels(): Identity[] {
        const user = this._service.Users.user.getValue();
        const levels = [
            { id: EncryptionLevel.None, name: 'Unencrypted' }
        ];
        if (user.support || user.sys_admin) {
            levels.push({ id: EncryptionLevel.Support, name: 'Support' });
        }
        if (user.sys_admin) {
            levels.push({ id: EncryptionLevel.Admin, name: 'Admin' });
        }
        return levels;
    }

    constructor(private _service: ApplicationService) {
        super();
    }

    public ngOnInit(): void {
        this.subscription(
            'item',
            this._service.listen('BACKOFFICE.active_item', item => {
                this.item = item;
                this.ngOnChanges({ item: new SimpleChange(null, this.item, false) });
            })
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.item && this.item) {
            this.loadSystems();
        }
    }

    public get settings(): string {
        return (this.item.settings[this.encryption_level as any] || {}).settings_string || '';
    }

    public get parsed_description() {
        if (!this.item) { return ''; }
        return marked(this.item.description);
    }

    public loadSystems(offset: number = 0) {
        this._service.Systems.query({ offset, zone_id: this.item.id, limit: 500 }).then((list) => {
            this.system_list = list;
        });
    }

    /** List of tags associated with the zone */
    public get tag_list(): string[] {
        return this.item && this.item.tags ? this.item.tags.split(',') : [];
    }

}
