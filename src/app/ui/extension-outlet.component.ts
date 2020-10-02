import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseClass } from '../common/base.class';


@Component({
    selector: 'app-extension-outlet',
    template: `<iframe *ngIf="url" class="absolute inset-0 w-full h-full border-none" [src]="url | safe:'resource'"></iframe>`,

})
export class ExtensionOutletComponent extends BaseClass {

    public url = '';

    constructor(private _route: ActivatedRoute, private _location: Location) {
        super();
    }

    public ngOnInit(): void {
        this._route.queryParamMap.subscribe((params) => {
            if (params.has('embed')) {
                this.url = decodeURIComponent(params.get('embed'));
            } else {
                this._location.back();
            }
        });
    }
}
