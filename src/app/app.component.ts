import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApplicationService } from './services/app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/app.component.scss', './styles/custom-element.styles.scss', './styles/native-element.styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    constructor(private _service: ApplicationService) {

    }

    public ngOnInit(): void {
        this._service.title = 'Loading...';
        console.log('Ready:', this._service.is_ready);
    }
}
