
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { PlaceOAuthSource, PlaceLDAPSource, PlaceSAMLSource } from '@placeos/ts-client';

import { HashMap } from 'src/app/common/types';

/**
 * Generate form controls for an OAuth authentication source
 * @param auth_source Auth source to apply changes to
 */
export function generateOAuthSourceForm(auth_source: PlaceOAuthSource): FormGroup {
    if (!auth_source) {
        throw Error('No OAuth source passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(auth_source.name || '', [Validators.required]),
        client_id: new FormControl(auth_source.client_id || ''),
        client_secret: new FormControl(auth_source.client_secret || ''),
        info_mappings: new FormControl(auth_source.info_mappings || {}),
        authorize_params: new FormControl(auth_source.authorize_params || {}),
        ensure_matching: new FormControl(auth_source.ensure_matching || {}),
        site: new FormControl(auth_source.site || ''),
        authorize_url: new FormControl(auth_source.authorize_url || ''),
        token_method: new FormControl(auth_source.token_method || 'post'),
        auth_scheme: new FormControl(auth_source.auth_scheme || 'request_body'),
        token_url: new FormControl(auth_source.token_url || ''),
        scope: new FormControl(auth_source.scope || ''),
        raw_info_url: new FormControl(auth_source.raw_info_url || '')
    };
    return new FormGroup(fields);
}

/**
 * Generate form controls for an SAML authentication source
 * @param auth_source Auth source to apply changes to
 */
export function generateSAMLSourceForm(auth_source: PlaceSAMLSource): FormGroup {
    if (!auth_source) {
        throw Error('No OAuth source passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(auth_source.name || '', [Validators.required]),
        issuer: new FormControl(auth_source.issuer || '', [Validators.required]),
        idp_sso_target_url: new FormControl(auth_source.issuer || '', [Validators.required]),
        name_identifier_format: new FormControl(auth_source.name_identifier_format || '', [
            Validators.required
        ]),
        assertion_consumer_service_url: new FormControl(
            auth_source.assertion_consumer_service_url || '',
            [Validators.required]
        ),
        request_attributes: new FormControl(auth_source.request_attributes || [], [
            Validators.required
        ]),
        idp_sso_target_url_runtime_params: new FormControl(
            auth_source.idp_sso_target_url_runtime_params || {}
        ),
        uid_attribute: new FormControl(auth_source.uid_attribute || ''),
        idp_cert: new FormControl(auth_source.idp_cert || ''),
        idp_cert_fingerprint: new FormControl(auth_source.idp_cert_fingerprint || ''),
        attribute_service_name: new FormControl(auth_source.attribute_service_name || ''),
        attribute_statements: new FormControl(auth_source.attribute_statements || {}),
        idp_slo_target_url: new FormControl(auth_source.idp_slo_target_url || ''),
        slo_default_relay_state: new FormControl(auth_source.slo_default_relay_state || '')
    };
    return new FormGroup(fields);
}

/**
 * Generate form controls for an LDAP authentication source
 * @param auth_source Auth source to apply changes to
 */
export function generateLDAPSourceForm(auth_source: PlaceLDAPSource): FormGroup {
    if (!auth_source) {
        throw Error('No OAuth source passed to generate form fields');
    }
    const fields: HashMap<FormControl> = {
        name: new FormControl(auth_source.name || '', [Validators.required]),
        host: new FormControl(auth_source.host || '', [Validators.required]),
        port: new FormControl(auth_source.port || '', [Validators.min(1), Validators.max(65535)]),
        auth_method: new FormControl(auth_source.auth_method || 'plain'),
        uid: new FormControl(auth_source.uid || ''),
        base: new FormControl(auth_source.base || '', [Validators.required]),
        bind_dn: new FormControl(auth_source.bind_dn || ''),
        password: new FormControl(auth_source.password || ''),
        filter: new FormControl(auth_source.filter || '')
    };
    return new FormGroup(fields);
}
