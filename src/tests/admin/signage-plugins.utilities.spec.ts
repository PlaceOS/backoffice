import type { SignagePlugin } from '@placeos/ts-client';
import { describe, expect, it } from 'vitest';
import { generateSignagePluginFormModel } from '../../app/admin/signage-plugins/signage-plugins.utilities';

describe('signage-plugins.utilities', () => {
    describe('generateSignagePluginFormModel', () => {
        it('defaults to a plugin', () => {
            expect(generateSignagePluginFormModel().plugin_type).toBe('plugin');
        });

        it('preserves the plugin type', () => {
            const plugin = { plugin_type: 'widget' } as SignagePlugin;

            expect(generateSignagePluginFormModel(plugin).plugin_type).toBe(
                'widget',
            );
        });
    });
});
