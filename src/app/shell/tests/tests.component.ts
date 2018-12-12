
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../../services/app.service';
import { BaseRootComponent } from '../../shared/components/base-root.component';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.template.html',
    styleUrls: ['./tests.styles.scss']
})
export class TestsComponent extends BaseRootComponent {
    public model: any = {};

    @ViewChild('cmd_line') private cmd_line: ElementRef;
    @ViewChild('cmd_input') private cmd_input: ElementRef;

    constructor(protected service: AppService, protected route: ActivatedRoute) {
        super(service, route);
        this.model.type = 'test';
        this.model.service = 'Tests';
        this.model.route = 'tests';
    }

    protected loadValues() {
        if (this.model.item) {
            this.model.connection = this.service[this.model.service].run(this.model.item, (lines) => {
                this.model.display_lines = lines;
                this.scroll();
            });
        }
    }

    public send() {
        if (this.model.connection && this.model.input) {
            this.model.connection.post(this.model.input);
            this.model.input = '';
            this.scroll();
        }
    }

    public scroll() {
        this.timeout('scroll', () => {
            console.log('CMD LINE:', this.cmd_line);
            if (this.cmd_line) {
                this.cmd_line.nativeElement.scrollTop = this.cmd_line.nativeElement.scrollHeight;
            }
        }, 20);
    }
}