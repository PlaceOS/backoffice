import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./styles/app.component.scss', './styles/custom-element.styles.scss', './styles/native-element.styles.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent { }
