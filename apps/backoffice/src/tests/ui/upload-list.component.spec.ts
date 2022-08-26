import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
import { SettingsService } from '../../app/common/settings.service';
import { UploadsService } from '../../app/common/uploads.service';
import { IconComponent } from '../../app/ui/icon.component';
import { UploadListComponent } from '../../app/ui/upload-list.component';

describe('UploadListComponent', () => {
    let spectator: Spectator<UploadListComponent>;
    const createComponent = createComponentFactory({
        component: UploadListComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: {
                    get: jest.fn(),
                    post: jest.fn(),
                    value: jest.fn(),
                    listen: jest.fn(() => of(true)),
                },
            },
            {
                provide: UploadsService,
                useValue: {
                    get: jest.fn(),
                    upload_list: new BehaviorSubject([]),
                },
            },
            {
                provide: MatDialog,
                useValue: {
                    open: jest.fn(),
                    afterOpened: of(1),
                    afterAllClosed: of(1),
                },
            },
        ],
        declarations: [
            MockComponent(IconComponent)
        ],
        imports: [MatProgressBarModule, MatTooltipModule]
    });

    beforeEach(() => {
        spectator = createComponent();
        spectator.setInput({ show: true });
        spectator.detectChanges();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should allow closing the upload list', () => {
        expect('[upload-list]').toExist();
        spectator.setInput({ show: false });
        spectator.detectChanges();
        expect('[upload-list]').not.toExist();
    });

    it('should handle showing upload drop overlay', () => {
        expect('[dropzone]').not.toExist();
        spectator.component.show_overlay = true;
        spectator.detectChanges();
        expect('[dropzone]').toExist();
    });

    it('should show uploading files', () => {
        expect('[upload-file]').not.toExist();
        (spectator.inject(UploadsService).upload_list as any).next([{}]);
        spectator.detectChanges();
        expect('[upload-file]').toExist();
    });

    it('should allow copying completed file links', () => {
        (spectator.inject(UploadsService).upload_list as any).next([{ progress: 100, link: 'test' }]);
        spectator.detectChanges();
        const spy = jest.spyOn(spectator.component, 'copyLink');
        spectator.click('[upload-file] a')
        expect(spy).toHaveBeenCalled();
    });

    it('should allow retrying failed uploads', () => {
        (spectator.inject(UploadsService).upload_list as any).next([{ progress: 100, error: 'test', upload: { resume: jest.fn() } }]);
        spectator.detectChanges();
        const spy = jest.spyOn(spectator.component, 'retry');
        spectator.click('[upload-file] button')
        expect(spy).toHaveBeenCalled();
    });
});
