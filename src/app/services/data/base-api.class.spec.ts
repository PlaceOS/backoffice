import { BaseDataClass } from './base-api.class';
import { ADynamicFormField } from '@acaprojects/ngx-dynamic-forms';

describe('BaseDataClass', () => {
    let object: BaseDataClass;
    let fields: ADynamicFormField[];
    let service: any;
    const init_data = {
        id: 'test-object',
        name: 'Some test',
        email: 'test@email.com'
    };

    beforeEach(() => {
        service = jasmine.createSpyObj('BaseAPIService', ['add', 'update', 'delete', 'task']);
        object = new BaseDataClass(service, init_data);
        fields = object.form_fields;
    });

    it('should initialise correctly', () => {
        expect(object.id).toBe(init_data.id);
        expect(object.name).toBe(init_data.name);
        expect(object.email).toBe(init_data.email);
    });

    it('should have 2 form fields', () => {
        expect(object.form_fields.length).toBe(2);
    });

    it('should have field should contain their proper values', () => {
        expect(object.form_fields.find(i => i.key === 'name').getValue()).toBe(object.name);
        expect(object.form_fields.find(i => i.key === 'email').getValue()).toBe(object.email);
    });

    it('should be valid', () => {
        expect(object.valid).toBeTruthy();
        expect(object.changes).toBeFalsy();
    });

    it('should be able to reset form', () => {
        const name = object.form_fields.find(i => i.key === 'name');
        expect(name.getValue()).toBe(init_data.name);
        name.setValue('New Value');
        expect(name.getValue()).toBe('New Value');
        object.resetForm();
        expect(name.getValue()).toBe(init_data.name);
    });

    it('should be able to save changes', () => {
        expect(service.update).toHaveBeenCalledTimes(0);
        const name = object.form_fields.find(i => i.key === 'name');
        name.setValue('New Value');
        object.save();
        expect(service.update).toHaveBeenCalledTimes(1);
        expect(service.add).toHaveBeenCalledTimes(0);
        (object as any).id = null;
        object.save();
        expect(service.update).toHaveBeenCalledTimes(1);
        expect(service.add).toHaveBeenCalledTimes(1);
    });

    it('should be able to be deleted', () => {
        expect(service.delete).toHaveBeenCalledTimes(0);
        object.delete();
        expect(service.delete).toHaveBeenCalledTimes(1);
        (object as any).id = null;
        object.delete();
        expect(service.delete).toHaveBeenCalledTimes(1);
    });

    it('should be able to run tasks', () => {
        expect(service.task).toHaveBeenCalledTimes(0);
        const param = { test: '' };
        object.runTask('decline', param);
        expect(service.task).toHaveBeenCalledTimes(1);
        expect(service.task).toHaveBeenCalledWith(init_data.id, 'decline', param);
        (object as any).id = null;
        object.runTask('other', null);
        expect(service.task).toHaveBeenCalledTimes(1);
    });

    it('should return JSON', () => {
        const as_json = object.toJSON();
        expect(as_json).toBeTruthy();
        expect(as_json.id).toBe(init_data.id);
        expect(as_json.name).toBe(init_data.name);
        expect(as_json.email).toBe(init_data.email);
    });

    it('should emit changes', (done) => {
        const event = { type: 'Test', metadata: {} };
        object.changeEvents.subscribe((v) => {
            expect(JSON.stringify(v)).toBe(JSON.stringify(event));
            done();
        });
        object.emit(event.type, event.metadata);
    });

    it('should track changes', () => {
        const name_field = object.form_fields.find(i => i.key === 'name');
        name_field.setValue('new value');
        expect(name_field.getValue()).toBe('new value');
        expect(object.changes).toBeTruthy();
        const changes = object.formChanges();
        expect(changes.length).toBe(1);
        expect(changes[0]).toBe('name');
    });

    it('should be able to be cloned', () => {
        const cloned = object.clone();
        expect(cloned).not.toBe(object);
        expect(cloned instanceof BaseDataClass).toBeTruthy();
        expect(cloned.id).toBe(object.id);
        expect(cloned.name).toBe(object.name);
        expect(cloned.email).toBe(object.email);
    });

    it('should be able to be duplicated', () => {
        const dup = object.duplicate();
        expect(dup).not.toBe(object);
        expect(dup instanceof BaseDataClass).toBeTruthy();
        expect(dup.id).not.toBe(object.id);
        expect(dup.name).toBe(object.name);
        expect(dup.email).not.toBe(object.email);
    });
});
