
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { IconComponent } from '../../app/ui/icon.component';
import { SafePipe } from '../../app/ui/pipes/safe.pipe';

describe('IconComponent', () => {
    let spectator: Spectator<IconComponent>;
    const createComponent = createComponentFactory({
        component: IconComponent,
        declarations: [SafePipe]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should show font icons', () => {
        spectator.component.icon = {
            type: 'icon',
            class: 'test-icon',
            content: 'test-contents',
        };
        spectator.detectChanges();
        expect('.test-icon').toBeTruthy();
        expect('.test-icon').toContainText('test-contents');
    });

    it('should show images', () => {
        spectator.component.icon = { type: 'img', src: '/test-image.png' };
        spectator.detectChanges();
        expect('img').toBeTruthy();
        expect('img').toContainProperty(
            'src',
            `${location.origin}/test-image.png`
        );
    });
});
