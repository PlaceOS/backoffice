import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock @angular/core signal
vi.mock('@angular/core', () => ({
    signal: vi.fn((initial) => {
        let value = initial;
        const sig = () => value;
        sig.set = (v: any) => {
            value = v;
        };
        return sig;
    }),
}));

// Mock @placeos/ts-client
vi.mock('@placeos/ts-client', () => ({
    setup: vi.fn().mockResolvedValue(undefined),
}));

import {
    getLoadingMessage,
    setLoadingMessage,
    setupPlace,
    PlaceSettings,
} from '../../app/common/placeos';
import { setup } from '@placeos/ts-client';

describe('placeos.ts', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getLoadingMessage', () => {
        it('should return a signal', () => {
            const message = getLoadingMessage();
            expect(message).toBeDefined();
            expect(typeof message).toBe('function');
        });

        it('should return Loading... initially', () => {
            const message = getLoadingMessage();
            expect(message()).toBe('Loading...');
        });
    });

    describe('setLoadingMessage', () => {
        it('should update the loading message', () => {
            setLoadingMessage('Connecting...');
            const message = getLoadingMessage();
            expect(message()).toBe('Connecting...');
        });

        it('should allow setting empty message', () => {
            setLoadingMessage('');
            const message = getLoadingMessage();
            expect(message()).toBe('');
        });

        it('should allow multiple updates', () => {
            setLoadingMessage('First');
            expect(getLoadingMessage()()).toBe('First');

            setLoadingMessage('Second');
            expect(getLoadingMessage()()).toBe('Second');

            setLoadingMessage('Third');
            expect(getLoadingMessage()()).toBe('Third');
        });
    });

    describe('setupPlace', () => {
        it('should call setup with correct configuration', async () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'api.example.com',
                port: 443,
                route: '/backoffice',
                use_domain: true,
                local_login: false,
                mock: false,
            };

            await setupPlace(settings);

            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({
                    auth_type: 'auth_code',
                    scope: 'public',
                    handle_login: true,
                    token_header: true,
                    use_iframe: true,
                }),
            );
        });

        it('should set handle_login to false when local_login is true', async () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'api.example.com',
                port: 443,
                route: '',
                use_domain: true,
                local_login: true,
                mock: false,
            };

            await setupPlace(settings);

            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({
                    handle_login: false,
                }),
            );
        });

        it('should pass ignore_api_key to config', async () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'api.example.com',
                port: 443,
                route: '',
                use_domain: true,
                local_login: false,
                mock: false,
                ignore_api_key: true,
            };

            await setupPlace(settings);

            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({
                    ignore_api_key: true,
                }),
            );
        });

        it('should build correct host string with port', async () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'api.example.com',
                port: 8080,
                route: '',
                use_domain: true,
                local_login: false,
                mock: false,
            };

            await setupPlace(settings);

            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({
                    host: 'api.example.com:8080',
                }),
            );
        });

        it('should use domain URL when use_domain is true', async () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'api.example.com',
                port: 443,
                route: '',
                use_domain: true,
                local_login: false,
                mock: false,
            };

            await setupPlace(settings);

            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({
                    auth_uri: expect.stringContaining('api.example.com'),
                    token_uri: expect.stringContaining('api.example.com'),
                }),
            );
        });

        it('should return a promise', () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'api.example.com',
                port: 443,
                route: '',
                use_domain: true,
                local_login: false,
                mock: false,
            };

            const result = setupPlace(settings);
            expect(result).toBeDefined();
            expect(typeof result.then).toBe('function');
        });
    });

    describe('PlaceSettings interface', () => {
        it('should accept all required properties', () => {
            const settings: PlaceSettings = {
                protocol: 'https:',
                domain: 'example.com',
                port: 443,
                route: '/app',
                use_domain: true,
                local_login: false,
                mock: false,
            };

            expect(settings.protocol).toBe('https:');
            expect(settings.domain).toBe('example.com');
            expect(settings.port).toBe(443);
            expect(settings.route).toBe('/app');
            expect(settings.use_domain).toBe(true);
            expect(settings.local_login).toBe(false);
            expect(settings.mock).toBe(false);
        });

        it('should accept optional ignore_api_key', () => {
            const settings: PlaceSettings = {
                protocol: 'http:',
                domain: 'localhost',
                port: 4200,
                route: '',
                use_domain: false,
                local_login: true,
                mock: true,
                ignore_api_key: true,
            };

            expect(settings.ignore_api_key).toBe(true);
        });
    });
});
