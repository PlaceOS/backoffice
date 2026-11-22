import {
    call,
    createClient,
    type Driver,
    operation,
    type Schema,
} from '@placeos/ts-client';
import { CallFailed, PlaceDriverRole } from '@placeos/ts-client/compat';
import { apiClient } from '../common/placeos';

import { max, min, required, SchemaFn, validate } from '@angular/forms/signals';
import { validateURI } from '../common/validation';

export interface DriverFormModel {
    id: string;
    repository_id: string;
    file_name: string;
    commit: string;
    name: string;
    role: PlaceDriverRole;
    module_name: string;
    default_uri: string;
    default_port: number;
    alert_level: string;
    class_name: string;
    description: string;
    ignore_connected: boolean;
    settings: string;
}

export function generateDriverFormModel(driver?: Driver): DriverFormModel {
    return {
        id: driver?.id || '',
        repository_id: driver?.repository_id || '',
        file_name: driver?.file_name || '',
        commit: driver?.commit || '',
        name: driver?.name || '',
        role: driver?.role ?? PlaceDriverRole.Logic,
        module_name: driver?.module_name || '',
        default_uri: driver?.default_uri || '',
        default_port: driver?.default_port || 1,
        alert_level: driver?.alert_level || 'medium',
        // The API has no class name. The form fills it from the driver file
        class_name: '',
        description: driver?.description || '',
        ignore_connected: driver?.ignore_connected || false,
        settings: '',
    };
}

/** Defaults of a driver, from `repositories.details`. See `PlaceOS/driver` docs/command_line_options.md */
export interface DriverDetails {
    descriptive_name?: string;
    generic_name?: string;
    tcp_port?: number;
    udp_port?: number;
    default_settings?: string;
    description?: string;
    uri_base?: string;
    makebreak?: boolean;
}

/** Parse the JSON text of `repositories.details`. `null` if it is not an object */
export function parseDriverDetails(text: string): DriverDetails | null {
    try {
        const value: unknown = JSON.parse(text);
        // The API document has no schema for the details
        return value && typeof value === 'object' && !Array.isArray(value)
            ? (value as DriverDetails)
            : null;
    } catch {
        return null;
    }
}

export const applyDriverFormSchema: SchemaFn<DriverFormModel> = (path) => {
    required(path.name);
    required(path.module_name);
    validate(path.default_uri, ({ value }) =>
        validateURI({ value: value() })
            ? { kind: 'pattern', message: 'Invalid URI' }
            : undefined,
    );
    min(path.default_port, 1);
    max(path.default_port, 65535);
};

/** Input of an operation with one `id` path parameter */
const ID_PARAMS: Schema<{ readonly id: string }> = {
    node: {
        kind: 'object',
        fields: [
            {
                key: 'id',
                node: { kind: 'string' },
                required_in_response: true,
                required_in_request: true,
            },
        ],
        keys: new Set(['id']),
    },
};

/**
 * `drivers.recompile` and `drivers.reload` of ts-client parse the response
 * as JSON, but the API sends plain text such as `OK`, so a success gives a
 * `response_invalid` error. These operations read the response as text.
 * Remove them when ts-client gives these responses as text.
 */
const RECOMPILE_TEXT = operation({
    method: 'POST',
    path: '/api/engine/v2/drivers/{id}/recompile',
    path_keys: ['id'],
    params: ID_PARAMS,
    body: null,
    response: 'text',
    name: 'drivers.recompile',
});
const RELOAD_TEXT = operation({
    method: 'POST',
    path: '/api/engine/v2/drivers/{id}/reload',
    path_keys: ['id'],
    params: ID_PARAMS,
    body: null,
    response: 'text',
    name: 'drivers.reload',
});

/** Most bytes of a failed compile response to show. The compiler output can be large */
const ERROR_TEXT_BYTES_MAX = 64 * 1024;

/** Most reads of a failed compile response, for a stream of empty chunks */
const READS_MAX = 4096;

/** The start of the body of a response, up to `bytes_max` bytes, as text */
async function textPrefix(response: Response, bytes_max: number) {
    const reader = response.body?.getReader();
    if (!reader) return '';
    const prefix = new Uint8Array(bytes_max);
    let bytes = 0;
    // A stream can give empty chunks, so also limit the number of reads
    for (let reads = 0; bytes < bytes_max && reads < READS_MAX; reads++) {
        const { done, value } = await reader.read();
        if (done) break;
        const part = value.subarray(0, bytes_max - bytes);
        prefix.set(part, bytes);
        bytes += part.length;
    }
    // Do not wait: the cancel of a clone ends only when the client reads the
    // original body, which it can do only after the fetch wrapper returns
    reader.cancel().catch(() => undefined);
    return new TextDecoder().decode(prefix.subarray(0, bytes));
}

/**
 * Compile the driver on each node. Rejects with the text of a failed
 * response, such as the compiler output, which ts-client drops because it is
 * not JSON. Without a text, it rejects with the `CallFailed`.
 */
export async function recompileDriver(id: string): Promise<string> {
    const base = apiClient();
    // The text of the last attempt. A 401 makes the client try again
    let error_text = '';
    const client = createClient({
        ...base,
        fetch: async (url, init) => {
            error_text = '';
            const response = await base.fetch(url, init);
            if (!response.ok) {
                error_text = await textPrefix(
                    response.clone(),
                    ERROR_TEXT_BYTES_MAX,
                ).catch(() => '');
            }
            return response;
        },
    });
    const result = await call(RECOMPILE_TEXT, { id }, { client });
    if (result.ok === false) {
        // The text belongs to the final error only when the server answered
        const text = result.error.kind === 'http' ? error_text : '';
        throw text ? new Error(text) : new CallFailed(result.error);
    }
    return result.value.data;
}

/** Load the compiled driver again on each node */
export function reloadDriver(id: string) {
    return call(RELOAD_TEXT, { id });
}
