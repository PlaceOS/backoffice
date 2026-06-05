import { SignagePlugin } from '@placeos/ts-client';
import { required, SchemaFn } from '@angular/forms/signals';

export interface SignagePluginFormModel {
    name: string;
    description: string;
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
        uri: plugin?.uri || '',
        playback_type: plugin?.playback_type || 'static',
        enabled: plugin?.enabled ?? true,
        defaults: plugin?.defaults || {},
    };
}

export const applySignagePluginFormSchema: SchemaFn<
    SignagePluginFormModel
> = (path) => {
    required(path.name);
    required(path.uri);
};
