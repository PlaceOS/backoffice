import { User } from './user.class';
import { generateMockUser } from './user.utilities';

describe('User', () => {
    let service: any;
    let user_data: any;
    let user: any;

    beforeEach(() => {
        for (let i = 0; i < 10; i++) {
            generateMockUser();
        }
        service = jasmine.createSpyObj('UsersService', ['query']);
        user_data = generateMockUser();
        user = new User(service, user_data);
    });

    it('should have an id', () => {
        expect(user.id).toBe(user_data.id);
    });

    it('should have a name', () => {
        expect(user.name).toBe(user_data.name);
    });

    it('should have a first name', () => {
        expect(user.first_name).toBe(user_data.first_name);
    });

    it('should have a last name', () => {
        expect(user.last_name).toBe(user_data.last_name);
    });

    it('should have an email', () => {
        expect(user.email).toBe(user_data.email);
    });

    it('should have a business unit', () => {
        expect(user.business_unit).toBe(user_data.department);
    });

    it('should have a staff code', () => {
        expect(user.staff_code).toBe(user_data.staff_code);
    });

    it('should have a phone', () => {
        expect(user.phone).toBe(user_data.phone);
    });

    it('should have a delegates', () => {
        expect(user.delegates.length).toBe(user_data.delegates.length);
        expect(user.delegates[0]).toBe(user_data.delegates[0]);
    });

    it('should return it\'s location', (done) => {
        const position = { x: 1000, y: 2000 };
        expect(user.last_location).toBeNull();
        user.locate().then((loc) => {
            expect(loc).toBeNull();
            const location = jasmine.createSpyObj('LocationService', ['show']);
            location.show.and.returnValue(new Promise((rs) => rs(position)));
            service.parent = { Location: location };
            user.locate().then((l) => {
                expect(l).toBe(position);
                done();
            });
        });
    });

    it('should return it\'s availabilty', (done) => {
        expect(user.last_location).toBeNull();
        service.query.and.returnValue(new Promise((rs) => rs([])));
        user.available().then((available) => {
            expect(available).toBeFalsy();
            service.query.and.returnValue(new Promise((rs) => rs([{ id: '1'}])));
            user.available().then((a) => {
                expect(a).toBeTruthy();
                done();
            });
        });
    });

    it('should be able to be cloned', () => {
        const cloned = user.clone();
        expect(cloned).not.toBe(user);
        expect(cloned instanceof User).toBeTruthy();
        expect(cloned.id).toBe(user.id);
        expect(cloned.email).toBe(user.email);
    });

    it('should be able to be duplicated', () => {
        const dup = user.duplicate();
        expect(dup).not.toBe(user);
        expect(dup instanceof User).toBeTruthy();
        expect(dup.id).not.toBe(user.id);
        expect(dup.email).not.toBe(user.email);
    });

});
