import {
    booleanAttribute,
    Component,
    computed,
    inject,
    input,
    output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type Domain } from '@placeos/ts-client';
import { FormFieldComponent } from '../ui/controls/form-field.component';
import { OptionComponent } from '../ui/controls/option.component';
import { SelectComponent } from '../ui/controls/select.component';
import { TranslatePipe } from '../ui/translate.pipe';
import { AdminDataService } from './admin-data.service';

/**
 * Value of the "All domains" option. The choice is kept as `null`, so every
 * picker for the same key shows it, also one that opens later.
 */
const ALL_DOMAINS = {} as Domain;

/** Domain picker for admin pages. AdminDataService keeps the choice per `key`. */
@Component({
    selector: 'admin-domain-select',
    template: `
        <app-form-field [class]="field_class()">
            <app-select
                name="domain"
                [attr.aria-labelledby]="labelled_by()"
                [ngModel]="domain()"
                (ngModelChange)="select($event)"
                [placeholder]="
                    (all() ? 'ADMIN.ALL_DOMAINS' : 'ADMIN.SELECT_DOMAIN')
                        | translate
                "
            >
                @if (all()) {
                    <app-option [value]="all_domains">
                        {{ 'ADMIN.ALL_DOMAINS' | translate }}
                    </app-option>
                }
                @for (domain of domain_list(); track domain.id) {
                    <app-option [value]="domain">{{ domain.name }}</app-option>
                }
            </app-select>
        </app-form-field>
    `,
    imports: [
        OptionComponent,
        SelectComponent,
        FormFieldComponent,
        FormsModule,
        TranslatePipe,
    ],
})
export class AdminDomainSelectComponent {
    private _data = inject(AdminDataService);

    /** Admin page that owns the selection */
    public readonly key = input.required<string>();
    /** Add an "All domains" option */
    public readonly all = input(false, { transform: booleanAttribute });
    public readonly field_class = input('no-subscript w-56');
    /** Id of a visible label that names the picker */
    public readonly labelled_by = input<string | null>(null);
    /** Emits after the user picks a domain. `null` is "All domains" */
    public readonly changed = output<Domain | null>();
    public readonly all_domains = ALL_DOMAINS;

    public readonly domain_list = this._data.domain_list;
    public readonly domain = computed(() =>
        this._data.selectedDomain(this.key())(),
    );

    public select(domain: Domain) {
        const value = domain === ALL_DOMAINS ? null : domain;
        this._data.setDomain(this.key(), value);
        this.changed.emit(value);
    }
}
