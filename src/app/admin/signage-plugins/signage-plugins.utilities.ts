import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignagePlugin } from '@placeos/ts-client';

export function generateSignagePluginFormFields(plugin?: SignagePlugin) {
    return new FormGroup({
        name: new FormControl(plugin?.name || '', [Validators.required]),
        description: new FormControl(plugin?.description || ''),
        uri: new FormControl(plugin?.uri || '', [Validators.required]),
        playback_type: new FormControl(plugin?.playback_type || 'static'),
        enabled: new FormControl(plugin?.enabled ?? true),
        defaults: new FormControl(plugin?.defaults || {}),
    });
}
