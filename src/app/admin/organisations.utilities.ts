import { required, SchemaFn } from '@angular/forms/signals';
import { PlaceOrganisation, PlacePartner } from '@placeos/ts-client';

export interface OrganisationFormModel {
    name: string;
    description: string;
    partner_id: string;
    payer: 'partner' | 'organisation';
    partner_staff: boolean;
}

export function generateOrganisationFormModel(
    organisation: Partial<PlaceOrganisation> = {},
): OrganisationFormModel {
    return {
        name: organisation.name || '',
        description: organisation.description || '',
        partner_id: organisation.partner_id || '',
        payer: organisation.payer || 'organisation',
        partner_staff: !!organisation.partner_staff,
    };
}

export const applyOrganisationFormSchema: SchemaFn<OrganisationFormModel> = (
    path,
) => {
    required(path.name);
};

export interface PartnerFormModel {
    name: string;
    description: string;
}

export function generatePartnerFormModel(
    partner: Partial<PlacePartner> = {},
): PartnerFormModel {
    return {
        name: partner.name || '',
        description: partner.description || '',
    };
}

export const applyPartnerFormSchema: SchemaFn<PartnerFormModel> = (path) => {
    required(path.name);
};
