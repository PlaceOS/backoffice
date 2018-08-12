
import { Component, Input } from '@angular/core';

@Component({
    selector: 'item-list',
    templateUrl: './item-list.template.html',
    styleUrls: ['./item-list.styles.scss']
})
export class ItemListComponent {
    @Input() public list: any[] = [];
    @Input() public loading: boolean;
}
