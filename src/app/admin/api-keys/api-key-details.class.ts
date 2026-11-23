import type { ApiKeyInput, ApiKeysResponse } from '@placeos/ts-client';

/** An API key from the server */
export type PlaceAPIKeyDetails = ApiKeysResponse;

/** Permission levels of an API key, as the server sends them */
export type APIKeyPermission = NonNullable<ApiKeysResponse['permissions']>;

/** The server reads the permissions of a key that it gets as the number of the enum */
const PERMISSION_NUMBERS: Record<APIKeyPermission, ApiKeyInput['permissions']> =
    {
        user: 0,
        support: 1,
        admin: 2,
        admin_support: 3,
    };

/** The permissions number of a request, or `null` for none */
export function permissionNumber(
    permission: string | null | undefined,
): ApiKeyInput['permissions'] {
    return PERMISSION_NUMBERS[permission as APIKeyPermission] ?? null;
}
