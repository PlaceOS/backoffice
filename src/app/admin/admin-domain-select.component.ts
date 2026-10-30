import {
    booleanAttribute,
    Component,
    computed,
    inject,
    input,
    output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { PlaceDomain } from '@placeos/ts-client';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';

/** Domain picker for admin pages. AdminDataService keeps the choice per `key`. */
@Component({
    selector: 'admin-domain-select',
    template: `
        <mat-form-field appearance="outline" [class]="field_class()">
            <mat-select
                name="domain"
                [ngModel]="domain()"
                (ngModelChange)="select($event)"
                [placeholder]="
                    (all() ? 'ADMIN.ALL_DOMAINS' : 'ADMIN.SELECT_DOMAIN')
                        | translate
                "
            >
                @if (all()) {
                    <mat-option [value]="{}">
                        {{ 'ADMIN.ALL_DOMAINS' | translate }}
                    </mat-option>
                }
                @for (domain of domain_list(); track domain.id) {
                    <mat-option [value]="domain">{{ domain.name }}</mat-option>
                }
            </mat-select>
        </mat-form-field>
    `,
    imports: [FormsModule, MatFormFieldModule, MatSelectModule, TranslatePipe],
})
export class AdminDomainSelectComponent {
    private _data = inject(AdminDataService);

    /** Admin page that owns the selection */
    public readonly key = input.required<string>();
    /** Add an "All domains" option */
    public readonly all = input(false, { transform: booleanAttribute });
    public readonly field_class = input('no-subscript w-56');
    /** Emits after the user picks a domain */
    public readonly changed = output<PlaceDomain>();

    public readonly domain_list = this._data.domain_list;
    public readonly domain = computed(() =>
        this._data.selectedDomain(this.key())(),
    );

    public select(domain: PlaceDomain) {
        this._data.setDomain(this.key(), domain);
        this.changed.emit(domain);
    }
}
