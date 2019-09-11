import { async } from '@angular/core/testing';
import { of } from 'rxjs';

import { BaseAPIService } from './base.service';

describe('BaseAPIService', () => {
    let service: BaseAPIService;
    let http: any;

    beforeEach(() => {
        http = jasmine.createSpyObj('CommsService', ['get', 'post', 'put', 'delete']);
        service = new BaseAPIService(http);
        service.parent = jasmine.createSpyObj('ApplicationService', ['get', 'log']);
        service.init();
    });

    it('should initialise after the parent is ready', (done) => {
        expect(service.initialised).toBeFalsy();
        (service.parent as any).is_ready = true;
        setTimeout(() => {
            expect(service.initialised).toBeTruthy();
            done();
        }, 300);
    });

    it('should return api_route in the route', () => {
        expect(service.route()).toContain(service.api_route);
    });

    it('should get list', () => {
        const list = [];
        (service as any).set('list', list);
        expect(service.get('list')).toBe(list);
        expect(service.list().length).toBe(list.length);
    });

    it('should be able to filter list', () => {
        const id = 'item-1';
        const list = [{ id }, { id: 'item-2' }];
        (service as any).set('list', list);
        const filtered_list = service.list((a) => a.id === id);
        expect(filtered_list.length).toBe(1);
        expect(filtered_list[0].id).toBe(id);
    });

    it('should grab the item', () => {
        const id = 'item-1';
        const list = [{ id: 'item-1' }, { id: 'item-2' }];
        (service as any).set('list', list);
        const item = service.item(id);
        expect(item.id).toBe(id);
    });

    it('should get changes from listen', (done) => {
        const list = [];
        let ignore = true;
        const sub = service.listen('list', (value) => {
            if (!ignore) {
                expect(value).toBe(list);
                sub.unsubscribe();
                done();
            } else {
                ignore = false;
            }
        });
        (service as any).set('list', list);
    });

    it('should return a list of items from query', (done) => {
        const list = [{ id: 'item-1' }, { id: 'item-2' }];
        http.get.and.returnValue(of(list));
        service.query().then((resp) => {
            expect(resp.length).toBe(2);
            expect(JSON.stringify(resp)).toBe(JSON.stringify(list));
            done();
        });
    });

    it('should return a item from show', (done) => {
        const item = { id: 'item-1' };
        http.get.and.returnValue(of(item));
        service.show('item-1').then((resp) => {
            expect(JSON.stringify(resp)).toBe(JSON.stringify(item));
            done();
        });
    });

    it('should add new item', (done) => {
        const item = { id: 'item-1' };
        http.post.and.returnValue(of(item));
        service.add(item).then((resp) => {
            expect(JSON.stringify(resp)).toBe(JSON.stringify(item));
            expect(service.get('list')[0]).toBe(item);
            done();
        });
    });

    it('should add new item', (done) => {
        const item = 'result';
        http.post.and.returnValue(of(item));
        service.task('item-1', item).then((resp) => {
            expect(resp).toBe(item);
            done();
        });
    });

    it('should update item', (done) => {
        const item = { id: 'item-1' };
        const old_item = { id: 'item-1', other_property: 1 };
        http.put.and.returnValue(of(item));
        (service as any).set('list', [old_item]);
        expect(service.get('list')[0]).toBe(old_item);
        service.update('item-1', item).then((resp) => {
            expect(JSON.stringify(resp)).toBe(JSON.stringify(item));
            expect(service.get('list')[0]).toBe(item);
            done();
        });
    });

    it('should delete item', (done) => {
        const item = { id: 'item-1' };
        http.delete.and.returnValue(of(null));
        (service as any).set('list', [item]);
        expect(service.get('list')[0]).toBe(item);
        service.delete('item-1').then(() => {
            expect(service.get('list').length).toBe(0);
            done();
        });
    });

    it('should correctly poll', (done) => {
        const item = [{ id: 'item-1' }];
        http.get.and.returnValue(of(item));
        const poll = service.poll(null, null, 100);
        poll.subscribe(
            (v: any) => expect(item[0].id).toBe(v[0].id),
            _ => null,
            () => done()
        );
        setTimeout(() => {
            item[0].id = 'item-2';
            http.get.and.returnValue(of(item[0]));
        }, 200);
        setTimeout(() => service.stopPoll(), 400);
    });
});
