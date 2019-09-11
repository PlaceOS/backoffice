import { SettingsService } from './settings.service';
import { async } from '@angular/core/testing';
import { of } from 'rxjs';

describe('SettingsService', () => {
    let http_client_spy;
    let service: SettingsService;

    const test_data = {
        test: 1,
        nest_test: {
            level_1: {
                level: true
            }
        },
        app: {
            name: 'APPLICATION_NAME'
        }
    };

    beforeEach(() => {
        http_client_spy = jasmine.createSpyObj('HttpClient', ['get']);
        http_client_spy.get.and.returnValue(of(test_data));
        localStorage.clear();
        sessionStorage.clear();
        service = new SettingsService(<any>http_client_spy);
    });

    it('should initialise settings from "assets/settings.json"', (done) => {
        service.isSetup(state => {
            expect(service.setup).toBe(state);
            if (state) {
                expect(service.get('test')).toBe(test_data.test);
                expect(service.app_name).toBe(test_data.app.name);
                done();
            }
        });
    });

    it('should get nested settings', (done) => {
        service.isSetup(state => {
            if (state) {
                expect(service.get('nest_test')).toBe(test_data.nest_test);
                expect(service.get('nest_test.level_1')).toBe(test_data.nest_test.level_1);
                expect(service.get('nest_test.level_1.level')).toBe(test_data.nest_test.level_1.level);
                done();
            }
        });
    });

    it('should get localStorage settings', (done) => {
        localStorage.setItem('test_key', 'a-value');
        localStorage.setItem('test_key2', `${Math.floor(Math.random() * 999999)}`);
        service.isSetup(state => {
            if (state) {
                expect(service.get('local.test_key')).toBe(localStorage.getItem('test_key'));
                expect(service.get('local.test_key2')).toBe(localStorage.getItem('test_key2'));
                done();
            }
        });
    });

    it('should get sessionStorage settings', (done) => {
        sessionStorage.setItem('test_key', 'a-value');
        sessionStorage.setItem('test_key2', `${Math.floor(Math.random() * 999999)}`);
        service.isSetup(state => {
            if (state) {
                expect(service.get('session.test_key')).toBe(sessionStorage.getItem('test_key'));
                expect(service.get('session.test_key2')).toBe(sessionStorage.getItem('test_key2'));
                done();
            }
        });
    });

    it('should set debug if exists', (done) => {
        service.isSetup(state => {
            if (state) {
                expect(service.get('nest_test')).toBe(test_data.nest_test);
                expect(service.get('nest_test.level_1')).toBe(test_data.nest_test.level_1);
                expect(service.get('nest_test.level_1.level')).toBe(test_data.nest_test.level_1.level);
                done();
            }
        });
    });

    it('should return `null` for non-existing settings', (done) => {
        service.isSetup(state => {
            if (state) {
                expect(service.get('test_something_non_existent')).toBe(null);
                done();
            }
        });
    });
});
