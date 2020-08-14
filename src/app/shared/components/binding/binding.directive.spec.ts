import { BindingDirective } from './binding.directive';

describe('BindingDirective', () => {
    let directive: BindingDirective;
    let element: any;
    let renderer: any;

    beforeEach(() => {
        element = jasmine.createSpyObj('ElementRef', ['exec']);
        renderer = jasmine.createSpyObj('Renderer2', ['listen']);
        directive = new BindingDirective(element, renderer);
    });

    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
});
