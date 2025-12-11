import { beforeEach, describe, expect, it } from 'vitest';
import { SettingsFormatPipe } from '../../../app/ui/pipes/settings-format.pipe';

// Mock PlaceSettings interface
interface MockPlaceSettings {
    encryption_level: number;
    updated_at: number;
}

describe('SettingsFormatPipe', () => {
    let pipe: SettingsFormatPipe;

    beforeEach(() => {
        pipe = new SettingsFormatPipe();
    });

    describe('transform', () => {
        it('should format UNENCRYPTED settings (level 0)', () => {
            const settings: MockPlaceSettings = {
                encryption_level: 0,
                updated_at: 1705320000, // timestamp in seconds
            };
            const result = pipe.transform(settings as any);
            expect(result).toContain('UNENCRYPTED');
            expect(result).toContain('(');
            expect(result).toContain(')');
        });

        it('should format SUPPORT settings (level 1)', () => {
            const settings: MockPlaceSettings = {
                encryption_level: 1,
                updated_at: 1705320000,
            };
            const result = pipe.transform(settings as any);
            expect(result).toContain('SUPPORT');
        });

        it('should format ADMIN settings (level 2)', () => {
            const settings: MockPlaceSettings = {
                encryption_level: 2,
                updated_at: 1705320000,
            };
            const result = pipe.transform(settings as any);
            expect(result).toContain('ADMIN');
        });

        it('should format ENCRYPTED settings (level 3)', () => {
            const settings: MockPlaceSettings = {
                encryption_level: 3,
                updated_at: 1705320000,
            };
            const result = pipe.transform(settings as any);
            expect(result).toContain('ENCRYPTED');
        });

        it('should include formatted date', () => {
            const settings: MockPlaceSettings = {
                encryption_level: 0,
                updated_at: 1705320000, // Jan 15, 2024
            };
            const result = pipe.transform(settings as any);
            // Date format is 'dd-MMM-yyyy HH:mm:ss'
            expect(result).toMatch(/\d{2}-[A-Za-z]{3}-\d{4}/);
            expect(result).toMatch(/\d{2}:\d{2}:\d{2}/);
        });

        it('should multiply timestamp by 1000 for milliseconds', () => {
            // The pipe multiplies updated_at by 1000
            const settings: MockPlaceSettings = {
                encryption_level: 0,
                updated_at: 1705320000, // seconds
            };
            const result = pipe.transform(settings as any);
            // Should show Jan 2024 date, not 1970
            expect(result).toContain('2024');
        });
    });
});
