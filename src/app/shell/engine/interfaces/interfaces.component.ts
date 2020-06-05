import { Component, OnInit } from '@angular/core';
import { ComposerService } from '@placeos/composer';
import { Identity } from 'src/app/shared/utilities/types.utilities';

@Component({
    selector: 'app-interfaces',
    templateUrl: './interfaces.component.html',
    styleUrls: ['./interfaces.component.scss'],
})
export class AdminInterfacesComponent implements OnInit {
    /** List of interfaces */
    public interfaces: Identity[] = [];

    constructor(private _composer: ComposerService) {}

    ngOnInit() {
        this.loadInterfaces();
    }

    private async loadInterfaces() {
        const interfaces = await this._composer.repositories.listInterfaces();
        this.interfaces = Object.keys(interfaces).map(id => ({ id, name: interfaces[id] }));
    }
}
