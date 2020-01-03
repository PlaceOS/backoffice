
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicationService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';
import { ITestConnection } from 'src/app/services/data/tests.service';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.template.html',
    styleUrls: ['./tests.styles.scss']
})
export class TestsComponent extends BaseRootComponent {
    /** Whether the websocket connection has been established */
    public connection: ITestConnection;
    /** Console output for test */
    public display_lines: string[];
    /** Message to send to the server */
    public input: string;

    @ViewChild('cmd_line', { static: true }) private cmd_line: ElementRef;
    @ViewChild('cmd_input', { static: true }) private cmd_input: ElementRef;

    constructor(protected _service: ApplicationService, protected _route: ActivatedRoute, protected _router: Router) {
        super(_service, _route, _router);
        this.service = this._service.Tests as any;
    }

    protected loadValues() {
        if (this.item) {
            this.connection = this._service.Tests.run(this.item as any, (lines) => {
                this.display_lines = lines;
                this.scroll();
            });
        }
    }

    /**
     * Send message to the server
     */
    public send() {
        if (this.connection && this.input) {
            this.connection.post(this.input, null);
            this.input = '';
            this.scroll();
        }
    }

    /**
     * Scroll console output to the bottom
     */
    public scroll() {
        this.timeout('scroll', () => {
            console.log('CMD LINE:', this.cmd_line);
            if (this.cmd_line) {
                this.cmd_line.nativeElement.scrollTop = this.cmd_line.nativeElement.scrollHeight;
            }
        }, 20);
    }
}
