import { UsersService } from "./users.service";
import { of } from "rxjs";
import { generateMockUser } from "./user.utilities";
import { User } from "./user.class";

import * as dayjs from 'dayjs';

describe('UsersService', () => {
    let service: UsersService;
    let comms: any;
    let http: any;
    let location: any;
    let app: any;
    let user_data: any;

    beforeEach(() => {
        comms = jasmine.createSpyObj('CommsService', ['tryLogin', 'logout', 'hash', 'get']);
        http = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        location = jasmine.createSpyObj('Location', ['go', 'path']);
        service = new UsersService(comms, http, location);
        app = jasmine.createSpyObj('ApplicationService', ['get', 'log', 'setting']);
        service.parent = app;
        user_data = generateMockUser();
        http.get.and.returnValue(of(user_data));
        app.Users = jasmine.createSpyObj('UsersService', ['item']);
        app.Users.item.and.returnValue({});
    });

    it('should be the service', () => {
        expect(service).toBeTruthy();
    });

    it('should return the current user', () => {
        const clock = jasmine.clock();
        clock.install();
        comms.get.and.returnValue(of(user_data));
        (service.parent as any).is_ready = true;
        service.init();
        clock.tick(100)
        expect(service.current).toBeTruthy();
        expect(service.current instanceof User).toBeTruthy();
        clock.uninstall();
    });

    it('should have login post user details', () => {
        const credentials = { username: 'Test', password: 'Otherman' };
        http.post.and.returnValue(of());
        service.login(credentials);
        expect(http.post).toHaveBeenCalled();
    });

    it('should logout can be called', () => {
        service.logout();
        expect(comms.logout).toHaveBeenCalled();
    });

    it('should be able to set token', () => {
        comms.hash.and.returnValue('test');
        const end = dayjs().add(7, 'd').endOf('d').valueOf();
        service.setToken('this_is_a_token');
        expect(localStorage.getItem('test_access_token')).toBe('this_is_a_token');
        expect(+localStorage.getItem('test_expires_at')).toBe(end);
        expect(location.go).toHaveBeenCalledTimes(1);
        service.setToken('this_is_a_token', 1);
        expect(+localStorage.getItem('test_expires_at')).toBe(1);
        service.setToken('this_is_a_token', 0, false);
        expect(location.go).toHaveBeenCalledTimes(2);
    });

    it('should return User objects', () => {
        const clock = jasmine.clock();
        clock.install();
        const list = Array(10).fill(0).map(i => generateMockUser());
        comms.get.and.returnValue(of(list));
        (service.parent as any).is_ready = true;
        service.query();
        clock.tick(320);
        expect(service.list()).toBeTruthy();
        expect(service.list().length).toBe(10);
        expect(service.list()[0] instanceof User).toBeTruthy();
        clock.uninstall();
    });

});
