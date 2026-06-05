import { required, SchemaFn } from '@angular/forms/signals';
import {
    PlaceLDAPSource,
    PlaceOAuthSource,
    PlaceSAMLSource,
} from '@placeos/ts-client';

import { HashMap } from '../common/types';

export interface OAuthSourceFormModel {
    name: string;
    client_id: string;
    client_secret: string;
    info_mappings: HashMap;
    authorize_params: HashMap;
    ensure_matching: HashMap<string[]>;
    site: string;
    authorize_url: string;
    token_method: string;
    auth_scheme: string;
    token_url: string;
    scope: string;
    raw_info_url: string;
}

export interface SAMLSourceFormModel {
    name: string;
    issuer: string;
    idp_sso_target_url: string;
    name_identifier_format: string;
    assertion_consumer_service_url: string;
    request_attributes: unknown[];
    idp_sso_target_url_runtime_params: HashMap;
    uid_attribute: string;
    idp_cert: string;
    idp_cert_fingerprint: string;
    attribute_service_name: string;
    attribute_statements: HashMap<string[]>;
    idp_slo_target_url: string;
    slo_default_relay_state: string;
}

export interface LDAPSourceFormModel {
    name: string;
    host: string;
    port: number;
    auth_method: string;
    uid: string;
    base: string;
    bind_dn: string;
    password: string;
    filter: string;
}

export type AuthSourceFormModel =
    | OAuthSourceFormModel
    | SAMLSourceFormModel
    | LDAPSourceFormModel;

/**
 * Generate form model for an OAuth authentication source
 * @param auth_source Auth source to apply changes to
 */
export function generateOAuthSourceForm(
    auth_source?: PlaceOAuthSource,
): OAuthSourceFormModel {
    return {
        name: auth_source?.name || '',
        client_id: auth_source?.client_id || '',
        client_secret: auth_source?.client_secret || '',
        info_mappings: auth_source?.info_mappings || {},
        authorize_params: auth_source?.authorize_params || {},
        ensure_matching: auth_source?.ensure_matching || {},
        site: auth_source?.site || '',
        authorize_url: auth_source?.authorize_url || '',
        token_method: auth_source?.token_method || 'post',
        auth_scheme: auth_source?.auth_scheme || 'request_body',
        token_url: auth_source?.token_url || '',
        scope: auth_source?.scope || '',
        raw_info_url: auth_source?.raw_info_url || '',
    };
}

export function applyOAuthSourceFormSchema(
    path,
): ReturnType<SchemaFn<OAuthSourceFormModel>> {
    required(path.name);
}

/**
 * Generate form model for a SAML authentication source
 * @param auth_source Auth source to apply changes to
 */
export function generateSAMLSourceForm(
    auth_source: PlaceSAMLSource,
): SAMLSourceFormModel {
    if (!auth_source) {
        throw Error('No OAuth source passed to generate form fields');
    }
    return {
        name: auth_source.name || '',
        issuer: auth_source.issuer || '',
        idp_sso_target_url: auth_source.idp_sso_target_url || '',
        name_identifier_format: auth_source.name_identifier_format || '',
        assertion_consumer_service_url:
            auth_source.assertion_consumer_service_url || '',
        request_attributes: [...(auth_source.request_attributes || [])],
        idp_sso_target_url_runtime_params:
            auth_source.idp_sso_target_url_runtime_params || {},
        uid_attribute: auth_source.uid_attribute || '',
        idp_cert: auth_source.idp_cert || '',
        idp_cert_fingerprint: auth_source.idp_cert_fingerprint || '',
        attribute_service_name: auth_source.attribute_service_name || '',
        attribute_statements: auth_source.attribute_statements || {},
        idp_slo_target_url: auth_source.idp_slo_target_url || '',
        slo_default_relay_state: auth_source.slo_default_relay_state || '',
    };
}

export function applySAMLSourceFormSchema(
    path,
): ReturnType<SchemaFn<SAMLSourceFormModel>> {
    required(path.name);
    required(path.issuer);
    required(path.idp_sso_target_url);
    required(path.assertion_consumer_service_url);
}

/**
 * Generate form model for an LDAP authentication source
 * @param auth_source Auth source to apply changes to
 */
export function generateLDAPSourceForm(
    auth_source: PlaceLDAPSource,
): LDAPSourceFormModel {
    if (!auth_source) {
        throw Error('No OAuth source passed to generate form fields');
    }
    return {
        name: auth_source.name || '',
        host: auth_source.host || '',
        port: auth_source.port || 0,
        auth_method: auth_source.auth_method || 'plain',
        uid: auth_source.uid || '',
        base: auth_source.base || '',
        bind_dn: auth_source.bind_dn || '',
        password: auth_source.password || '',
        filter: auth_source.filter || '',
    };
}

export function applyLDAPSourceFormSchema(
    path,
): ReturnType<SchemaFn<LDAPSourceFormModel>> {
    required(path.name);
    required(path.host);
    required(path.base);
}
