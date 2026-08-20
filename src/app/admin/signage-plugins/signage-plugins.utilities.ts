import { required, SchemaFn } from '@angular/forms/signals';
import { SignagePlugin } from '@placeos/ts-client';

export interface SignagePluginFormModel {
    name: string;
    description: string;
    plugin_type: SignagePlugin['plugin_type'];
    uri: string;
    playback_type: SignagePlugin['playback_type'];
    enabled: boolean;
    defaults: Record<string, unknown>;
}

export function generateSignagePluginFormModel(
    plugin?: SignagePlugin,
): SignagePluginFormModel {
    return {
        name: plugin?.name || '',
        description: plugin?.description || '',
        plugin_type: plugin?.plugin_type || 'plugin',
        uri: plugin?.uri || '',
        playback_type: plugin?.playback_type || 'static',
        enabled: plugin?.enabled ?? true,
        defaults: plugin?.defaults || {},
    };
}

export const applySignagePluginFormSchema: SchemaFn<SignagePluginFormModel> = (
    path,
) => {
    required(path.name);
    required(path.uri);
};
