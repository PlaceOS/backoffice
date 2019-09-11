import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { of } from 'rxjs';

import { AOverlayService } from '@acaprojects/ngx-overlays';
import { SystemsService } from '@acaprojects/ngx-composer';
import { GoogleAnalyticsService } from '@acaprojects/ngx-google-analytics';

import { ApplicationService } from './app.service';
import { SettingsService } from './settings.service';
import { OrganisationService } from './data/organisation/organisation.service';
import { UsersService } from './data/users/users.service';
import { BookingsService } from './data/bookings/bookings.service';
import { SpacesService } from './data/spaces/spaces.service';
import { SystemsManagerService } from './data/systems-manager/systems-manager.service';
import { OVERLAY_REGISTER } from '../shared/globals/overlay-register';
import { HotkeysService } from './hotkeys.service';

describe('ApplicationService', () => {
    let service: ApplicationService;
    let settings: any;
    let router: any;
    let overlay: any;
    let analytics: any;
    let systems: any;
    let organisation: any;
    let users: any;
    let bookings: any;
    let spaces: any;
    let hotkeys: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ApplicationService,
                { provide: SettingsService, useValue: jasmine.createSpyObj('SettingsService', ['get', 'log']) },
                { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
                { provide: SwUpdate, useValue: jasmine.createSpyObj('SwUpdate', ['checkForUpdates']) },
                { provide: AOverlayService, useValue: jasmine.createSpyObj('OverlayService', ['notify', 'register']) },
                { provide: SystemsService, useValue: jasmine.createSpyObj('SystemsService', ['setup']) },
                { provide: GoogleAnalyticsService, useValue: jasmine.createSpyObj('GoogleAnalyticsService', ['load']) },
                { provide: OrganisationService, useValue: jasmine.createSpyObj('OrganisationService', ['init']) },
                { provide: UsersService, useValue: jasmine.createSpyObj('UsersService', ['init']) },
                { provide: BookingsService, useValue: jasmine.createSpyObj('BookingsService', ['init']) },
                { provide: SpacesService, useValue: jasmine.createSpyObj('SpacesService', ['init']) },
                { provide: SystemsManagerService, useValue: jasmine.createSpyObj('SystemsManagerService', ['init']) },
                { provide: HotkeysService, useValue: jasmine.createSpyObj('SystemsManagerService', ['listen']) }
            ],
            imports: [CommonModule]
        });
        service = TestBed.get(ApplicationService);
        settings = TestBed.get(SettingsService);
        settings.get.and.returnValue('test');
        overlay = TestBed.get(AOverlayService);
        OVERLAY_REGISTER.push({ id: `test-${Math.floor(Math.random() * 999999)}`, config: { content: 'Test' } });
        const sw = TestBed.get(SwUpdate);
        sw.available = jasmine.createSpyObj('Observable', ['subscribe']);
        sw.available.subscribe.and.returnValue(of(null));
        router = TestBed.get(Router);
        analytics = TestBed.get(GoogleAnalyticsService);
        organisation = TestBed.get(OrganisationService);
        systems = TestBed.get(SystemsManagerService);
        users = TestBed.get(UsersService);
        bookings = TestBed.get(BookingsService);
        spaces = TestBed.get(SpacesService);
        hotkeys = TestBed.get(HotkeysService);
    });

    it('should change title', () => {
        service.title = 'Some title';
        expect(service.title).toBe(`Some title | test`);
        expect(document.title).toBe(`Some title | test`);
        service.title = '';
        expect(document.title).toBe(`test`);
    });

    it('should grab settings values', () => {
        expect(service.setting('test')).toBe('test');
    });

    it('should expose OverlayService', () => {
        expect(service.Overlay).toBe(overlay);
    });

    it('should expose application name', () => {
        settings.app_name = 'test_application'
        expect(service.name).toBe('test_application');
    });

    it('should expose endpoint', () => {
        expect(service.endpoint).toBe('/api/staff/');
    });

    it('should expose engine endpoint', () => {
        expect(service.engine_endpoint).toBe('/control/api/');
    });

    it('should expose GoogleAnalyticsService', () => {
        expect(service.Analytics).toBe(analytics);
    });

    it('should expose Hotkeys', () => {
        expect(service.Hotkeys).toBe(hotkeys);
    });

    it('should expose OrganisationService', () => {
        expect(service.Organisation).toBe(organisation);
    });

    it('should expose UsersService', () => {
        expect(service.Users).toBe(users);
    });

    it('should expose SystemsManagerService', () => {
        expect(service.Systems).toBe(systems);
    });

    it('should expose BookingsService', () => {
        expect(service.Bookings).toBe(bookings);
    });

    it('should expose SpacesService', () => {
        expect(service.Spaces).toBe(spaces);
    });

    it('should expose ready', () => {
        expect(service.is_ready).toBeFalsy();
        settings.setup = true;
        expect(service.is_ready).toBeTruthy();
    });

    it('should allow for opening notifications', () => {
        expect(overlay.notify).toHaveBeenCalledTimes(0);
        service.notify('test', 'now');
        expect(overlay.notify).toHaveBeenCalledTimes(1);
        service.notifySuccess('now');
        expect(overlay.notify).toHaveBeenCalledTimes(2);
        service.notifyError('now');
        expect(overlay.notify).toHaveBeenCalledTimes(3);
        service.notifyInfo('now');
        expect(overlay.notify).toHaveBeenCalledTimes(4);
    });

    it('should allow for navigation', () => {
        router.url = '/a/test/url';
        service.navigateBack();
        expect(router.navigate).toHaveBeenCalledWith(['']);
        service.navigate(['test']);
        expect(router.navigate).toHaveBeenCalledWith(['test'], { queryParams: undefined });
        service.navigate('test');
        expect(router.navigate).toHaveBeenCalledWith(['test'], { queryParams: undefined });
        service.navigate(['test2'], { now: true });
        expect(router.navigate).toHaveBeenCalledWith(['test2'], { queryParams: { now: true } });
        service.navigateBack();
        expect(router.navigate).toHaveBeenCalledWith([router.url]);
    });

    it('should get subject', () => {
        service.set('system', 'test');
        expect(service.get('system')).toBe('test');
    });

    it('should get subject', (done) => {
        service.listen('system', (value) => {
            if (value) {
                expect(value).toBe('test');
                done();
            }
        })
        service.set('system', 'test');
    });

    it('should register overlays', () => {
        expect(overlay.register).toHaveBeenCalledWith(OVERLAY_REGISTER[0].id, OVERLAY_REGISTER[0].config);
    });
});
